import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { cartService } from "../api/services/cartService";

// Cart Item Interface
export interface CartItem {
    id: string; // Unique ID (product.id + variant options)
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
}

interface CartContextType {
    cartItems: CartItem[];
    cartCount: number;
    cartTotal: number;
    addToCart: (product: any, quantity: number, options?: { size?: string; grind?: string }) => void;
    removeFromCart: (itemId: string) => void;
    updateQuantity: (itemId: string, newQuantity: number) => void;
    clearCart: () => void;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // 1. Initial Load: LocalStorage OR Backend
    useEffect(() => {
        const loadCart = async () => {
            // If logged in, fetch from API
            if (isAuthenticated) {
                try {
                    const serverCart: any = await cartService.getMyCart(); // Temporarily cast to any to avoid type check if DTO definition is outdated

                    // The API returns { items: [], totalItems: 0, ... }
                    // We need to map serverCart.items
                    const cartItemsList = serverCart.items || [];

                    const mappedItems: CartItem[] = cartItemsList.map((item: any) => ({
                        id: item.id.toString(), // Server ID is number
                        productId: item.productId,
                        name: item.productName || "Unknown Product",
                        price: item.price,
                        currency: item.currency || "AUD",
                        mainImageUrl: item.mainImageUrl || "", // Use mainImageUrl
                        quantity: item.quantity,
                        // Backend doesn't support variants yet
                        size: undefined,
                        grind: undefined
                    }));
                    setCartItems(mappedItems);
                } catch (err) {
                    console.error("Failed to sync cart from server", err);
                }
            } else {
                // If guest, load from LocalStorage
                const savedCart = localStorage.getItem("shopping-cart");
                if (savedCart) {
                    try {
                        setCartItems(JSON.parse(savedCart));
                    } catch (e) {
                        console.error("Failed to parse local cart", e);
                    }
                }
            }
        };
        loadCart();
    }, [isAuthenticated]);

    // 2. Persist to LocalStorage (for guests or backup)
    useEffect(() => {
        if (!isAuthenticated) {
            localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
        }
    }, [cartItems, isAuthenticated]);

    const addToCart = async (product: any, quantity: number, options?: { size?: string; grind?: string }) => {
        // Optimistic Update
        const uniqueId = `${product.id}-${options?.size || 'default'}-${options?.grind || 'default'}`;

        // Use a temp variable for the new state to send correct data if needed, 
        // but for simpler sync we can update local first then call API.

        let newItemAdded: CartItem | null = null;

        setCartItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((item) => item.id === uniqueId || (isAuthenticated && item.productId === product.id)); // Simple check for now

            if (existingItemIndex > -1) {
                const newItems = [...prevItems];
                const existingItem = newItems[existingItemIndex];
                newItems[existingItemIndex] = { ...existingItem, quantity: existingItem.quantity + quantity };
                return newItems;
            } else {
                newItemAdded = {
                    id: uniqueId,
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    currency: product.currency || 'AUD',
                    mainImageUrl: product.mainImageUrl || product.imageUrls?.[0] || '',
                    quantity: quantity,
                    size: options?.size,
                    grind: options?.grind
                };
                return [...prevItems, newItemAdded];
            }
        });

        // Backend Sync
        if (isAuthenticated) {
            try {
                // Determine if it was an update or add (simplification: just call addToCart endpoint)
                // The API implementation of addToCart usually handles "add to existing" logic.
                await cartService.addToCart(product.id, quantity);
                // Optionally refetch full cart to ensure IDs match server
                // const updatedCart = await cartService.getMyCart();
                // setCartItems(mapServerToClient(updatedCart));
            } catch (err) {
                console.error("Failed to add to server cart", err);
                alert("Failed to save to cloud cart. Please check your connection.");
            }
        }
    };

    const removeFromCart = async (itemId: string) => {
        // Find item to get its Server ID or Product ID
        const itemToRemove = cartItems.find(i => i.id === itemId);

        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));

        if (isAuthenticated && itemToRemove) {
            try {
                // If itemId is the server ID (usually int), use it. 
                // If it's our composite string (guest mode), we might need to find by product ID.
                // Assuming backend remove takes a CartItemID.
                // If we don't have the server CartItemID stored, this might be tricky.
                // For now, let's assume specific removal might need exact CartItem ID from server.
                // If the initial fetch populated correct IDs, we are good.

                // If the ID is a number string, it's likely a server ID.
                if (!isNaN(Number(itemId))) {
                    await cartService.removeFromCart(Number(itemId));
                } else {
                    // Fallback or skip if we can't map local string ID to server ID
                    console.warn("Could not remove from server: ID is local string", itemId);
                }
            } catch (err) {
                console.error("Failed to remove from server cart", err);
            }
        }
    };

    const updateQuantity = async (itemId: string, newQuantity: number) => {
        if (newQuantity < 1) {
            removeFromCart(itemId);
            return;
        }

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );

        if (isAuthenticated) {
            if (!isNaN(Number(itemId))) {
                try {
                    await cartService.updateCartItem(Number(itemId), newQuantity);
                } catch (err) {
                    console.error("Failed to update cart on server", err);
                }
            }
        }
    };

    const clearCart = async () => {
        setCartItems([]);
        if (isAuthenticated) {
            try {
                await cartService.clearCart();
            } catch (err) {
                console.error("Failed to clear server cart", err);
            }
        }
    };

    // Derived state
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, cartCount, cartTotal, addToCart, removeFromCart, updateQuantity, clearCart, isCartOpen, setIsCartOpen }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
};
