import React, { createContext, useContext, useState, useEffect } from "react";

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
    isCartOpen: boolean; // For slide-out cart drawer if needed later
    setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("shopping-cart");
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart from localStorage", e);
            }
        }
    }, []);

    // Save to localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product: any, quantity: number, options?: { size?: string; grind?: string }) => {
        setCartItems((prevItems) => {
            // Create a unique ID based on product ID and options to differentiate variants
            const uniqueId = `${product.id}-${options?.size || 'default'}-${options?.grind || 'default'}`;

            const existingItemIndex = prevItems.findIndex((item) => item.id === uniqueId);

            if (existingItemIndex > -1) {
                // Update quantity if item already exists
                const newItems = [...prevItems];
                const existingItem = newItems[existingItemIndex];
                newItems[existingItemIndex] = {
                    ...existingItem,
                    quantity: existingItem.quantity + quantity
                };
                return newItems;
            } else {
                // Add new item
                const newItem: CartItem = {
                    id: uniqueId,
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    currency: product.currency || 'AUD',
                    mainImageUrl: product.mainImageUrl || product.imageUrls?.[0] || '', // Handle different DTO shapes
                    quantity: quantity,
                    size: options?.size,
                    grind: options?.grind
                };
                return [...prevItems, newItem];
            }
        });

        // Optional: Auto open cart drawer or show toast
        // setIsCartOpen(true); 
    };

    const removeFromCart = (itemId: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    const updateQuantity = (itemId: string, newQuantity: number) => {
        if (newQuantity < 1) {
            removeFromCart(itemId);
            return;
        }
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    // Derived state
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                cartCount,
                cartTotal,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                isCartOpen,
                setIsCartOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
