import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { useAuth } from "./AuthContext";
import { cartService } from "../api/services/cartService";
import { CartDto, CartItemDto } from "../api/types/cart";
import toast from 'react-hot-toast';

const MAX_QUANTITY_PER_PRODUCT = 99;

// Cart Item Interface
export interface CartItem {
    id: string; // Guest: product/options composite ID. Logged-in: server CartItem ID.
    productId: number;
    name: string;
    price: number;
    currency: string;
    mainImageUrl: string;
    quantity: number;
    // Variant details (optional)
    size?: string;
    grind?: string;
    variantId?: number;
    isAvailable: boolean;
    availabilityMessage?: string;
}

interface CartProduct {
    id: number;
    name: string;
    price: number;
    currency?: string;
    mainImageUrl?: string | null;
    imageUrls?: string[];
    stockStatus?: string;
}

interface CartContextType {
    cartItems: CartItem[];
    cartCount: number;
    cartTotal: number;
    addToCart: (product: CartProduct, quantity: number, options?: { size?: string; grind?: string }) => Promise<boolean>;
    removeFromCart: (itemId: string) => Promise<boolean>;
    updateQuantity: (itemId: string, newQuantity: number) => Promise<boolean>;
    clearCart: () => Promise<boolean>;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
    isMutating: boolean;
    hasUnavailableItems: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const mapServerCartItem = (item: CartItemDto): CartItem => ({
    id: item.id.toString(),
    productId: item.productId,
    name: item.productName || "Unknown Product",
    price: item.price,
    currency: item.currency || "AUD",
    mainImageUrl: item.mainImageUrl || "",
    quantity: item.quantity,
    // Backend doesn't support variants yet
    size: undefined,
    grind: undefined,
    isAvailable: item.isAvailable,
    availabilityMessage: item.availabilityMessage ?? undefined,
});

const mapServerCart = (cart: CartDto): CartItem[] => cart.items.map(mapServerCartItem);

const createLocalCartItem = (product: CartProduct, quantity: number, options?: { size?: string; grind?: string }): CartItem => ({
    id: `${product.id}-${options?.size || 'default'}-${options?.grind || 'default'}`,
    productId: product.id,
    name: product.name,
    price: product.price,
    currency: product.currency || 'AUD',
    mainImageUrl: product.mainImageUrl || product.imageUrls?.[0] || '',
    quantity,
    size: options?.size,
    grind: options?.grind,
    isAvailable: product.stockStatus !== 'OutOfStock',
    availabilityMessage: product.stockStatus === 'OutOfStock' ? 'This product is out of stock.' : undefined,
});

const getErrorMessage = (error: unknown, fallback: string): string => {
    if (typeof error === 'object' && error !== null && 'userMessage' in error) {
        const message = (error as { userMessage?: unknown }).userMessage;
        if (typeof message === 'string') return message;
    }
    return fallback;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false); // Fixes race condition on hard reloads
    const [isMutating, setIsMutating] = useState(false);
    const mutationInFlight = useRef(false);

    // 1. Initial Load: LocalStorage OR Backend
    useEffect(() => {
        const loadCart = async () => {
            setIsLoaded(false);

            // If logged in, fetch from API
            if (isAuthenticated) {
                try {
                    // --- GUEST CART MERGE LOGIC ---
                    const savedCart = localStorage.getItem("shopping-cart");
                    if (savedCart) {
                        try {
                            const guestItems: CartItem[] = JSON.parse(savedCart);
                            if (guestItems.length > 0) {
                                const mergeResult = await cartService.mergeGuestCart(
                                    guestItems.map(item => ({
                                        productId: item.productId,
                                        quantity: item.quantity,
                                    }))
                                );
                                localStorage.removeItem("shopping-cart");
                                setCartItems(mapServerCart(mergeResult.cart));

                                if (mergeResult.rejectedItems.length > 0) {
                                    const guestNames = new Map(
                                        guestItems.map(item => [item.productId, item.name])
                                    );
                                    const rejectedDetails = mergeResult.rejectedItems
                                        .map(item => {
                                            const name = item.productName || guestNames.get(item.productId) || `Product ${item.productId}`;
                                            return `${name}: ${item.message}`;
                                        })
                                        .join(' ');

                                    toast.error(`Some items were not added. ${rejectedDetails}`, { duration: 10000 });
                                } else {
                                    toast.success("We've saved your offline cart items to your account!");
                                }
                                return;
                            }
                        } catch (e) {
                            console.error("Failed to merge guest cart", e);
                            toast.error("Some offline cart items could not be saved. Please review your cart.");
                        }
                    }
                    // ------------------------------

                    const serverCart = await cartService.getMyCart();
                    setCartItems(mapServerCart(serverCart));
                } catch (err: unknown) {
                    console.error("Failed to sync cart from server", err);
                    toast.error(getErrorMessage(err, 'Failed to load your cart. Please refresh.'));
                } finally {
                    setIsLoaded(true);
                }
            } else {
                // If guest, load from LocalStorage
                const savedCart = localStorage.getItem("shopping-cart");
                if (savedCart) {
                    try {
                        setCartItems(JSON.parse(savedCart));
                    } catch (e) {
                        console.error("Failed to parse local cart", e);
                        setCartItems([]);
                    }
                } else {
                    setCartItems([]);
                }
                setIsLoaded(true);
            }
        };
        loadCart();
    }, [isAuthenticated]);

    // 2. Persist to LocalStorage (for guests only)
    useEffect(() => {
        // Prevent overwriting with [] during initial hydration race conditions
        if (isLoaded && !isAuthenticated) {
            localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
        }
    }, [cartItems, isAuthenticated, isLoaded]);

    const beginServerMutation = (): boolean => {
        if (mutationInFlight.current) return false;
        mutationInFlight.current = true;
        setIsMutating(true);
        return true;
    };

    const endServerMutation = () => {
        mutationInFlight.current = false;
        setIsMutating(false);
    };

    const recoverServerCart = async (previousItems: CartItem[], err: unknown, fallbackMessage: string) => {
        console.error(fallbackMessage, err);
        try {
            const serverCart = await cartService.getMyCart();
            setCartItems(mapServerCart(serverCart));
        } catch (refreshError) {
            console.error('Failed to refresh cart after mutation error', refreshError);
            setCartItems(previousItems);
        }
        toast.error(getErrorMessage(err, fallbackMessage));
    };

    const addToCart = async (product: CartProduct, quantity: number, options?: { size?: string; grind?: string }): Promise<boolean> => {
        const existingItem = cartItems.find(item =>
            item.productId === product.id &&
            (isAuthenticated || item.id === `${product.id}-${options?.size || 'default'}-${options?.grind || 'default'}`)
        );
        if (quantity < 1 || quantity > MAX_QUANTITY_PER_PRODUCT ||
            (existingItem?.quantity ?? 0) + quantity > MAX_QUANTITY_PER_PRODUCT) {
            toast.error(`You can add up to ${MAX_QUANTITY_PER_PRODUCT} of each product.`);
            return false;
        }

        if (isAuthenticated && !beginServerMutation()) return false;
        const previousItems = [...cartItems];
        const optimisticItem = createLocalCartItem(product, quantity, options);

        // Optimistic Update
        setCartItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((item) =>
                item.id === optimisticItem.id || (isAuthenticated && item.productId === product.id)
            );

            if (existingItemIndex > -1) {
                const newItems = [...prevItems];
                const existingItem = newItems[existingItemIndex];
                newItems[existingItemIndex] = { ...existingItem, quantity: existingItem.quantity + quantity };
                return newItems;
            }

            return [...prevItems, optimisticItem];
        });

        if (!isAuthenticated) return true;

        try {
            const savedItem = await cartService.addToCart(product.id, quantity);
            const serverItem = mapServerCartItem(savedItem);

            setCartItems((prevItems) => {
                const existingItemIndex = prevItems.findIndex((item) =>
                    item.productId === serverItem.productId || item.id === optimisticItem.id
                );

                if (existingItemIndex > -1) {
                    const newItems = [...prevItems];
                    newItems[existingItemIndex] = serverItem;
                    return newItems;
                }

                return [...prevItems, serverItem];
            });

            return true;
        } catch (err: unknown) {
            await recoverServerCart(previousItems, err, 'Failed to save item. Your cart has been restored.');
            return false;
        } finally {
            endServerMutation();
        }
    };

    const removeFromCart = async (itemId: string): Promise<boolean> => {
        if (isAuthenticated && !beginServerMutation()) return false;
        const previousItems = [...cartItems];
        const itemToRemove = cartItems.find(i => i.id === itemId);

        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));

        if (!isAuthenticated) return true;

        try {
            if (!itemToRemove) return true;
            if (isNaN(Number(itemId))) {
                throw new Error("Cart item is not synced with the server yet.");
            }

            await cartService.removeFromCart(Number(itemId));
            return true;
        } catch (err: unknown) {
            await recoverServerCart(previousItems, err, 'Failed to remove item. Your cart has been restored.');
            return false;
        } finally {
            endServerMutation();
        }
    };

    const updateQuantity = async (itemId: string, newQuantity: number): Promise<boolean> => {
        if (newQuantity < 1) {
            return removeFromCart(itemId);
        }

        if (newQuantity > MAX_QUANTITY_PER_PRODUCT) {
            toast.error(`You can add up to ${MAX_QUANTITY_PER_PRODUCT} of each product.`);
            return false;
        }

        if (isAuthenticated && !beginServerMutation()) return false;

        const previousItems = [...cartItems];

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );

        if (!isAuthenticated) return true;

        try {
            if (isNaN(Number(itemId))) {
                throw new Error("Cart item is not synced with the server yet.");
            }

            const updatedItem = await cartService.updateCartItem(Number(itemId), newQuantity);
            const serverItem = mapServerCartItem(updatedItem);

            setCartItems((prevItems) =>
                prevItems.map((item) => item.id === itemId ? serverItem : item)
            );

            return true;
        } catch (err: unknown) {
            await recoverServerCart(previousItems, err, 'Failed to update cart. Your cart has been restored.');
            return false;
        } finally {
            endServerMutation();
        }
    };

    const clearCart = async (): Promise<boolean> => {
        if (isAuthenticated && !beginServerMutation()) return false;
        const previousItems = [...cartItems];
        setCartItems([]);

        if (!isAuthenticated) return true;

        try {
            await cartService.clearCart();
            return true;
        } catch (err: unknown) {
            await recoverServerCart(previousItems, err, 'Failed to clear cart. Your cart has been restored.');
            return false;
        } finally {
            endServerMutation();
        }
    };

    // Derived state
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const hasUnavailableItems = cartItems.some(item => item.isAvailable === false);

    return (
        <CartContext.Provider value={{ cartItems, cartCount, cartTotal, addToCart, removeFromCart, updateQuantity, clearCart, isCartOpen, setIsCartOpen, isMutating, hasUnavailableItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
};
