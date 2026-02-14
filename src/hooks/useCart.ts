import { useState, useEffect, useCallback } from 'react';
import { cartService } from '../api/services/cartService';
import { CartItemDto } from '../api/types/cart';
import { useAuth } from '../components/AuthContext';

/**
 * 自定义 Hook：购物车管理
 * 提供购物车数据和操作方法
 */
export const useCart = () => {
    const { isAuthenticated } = useAuth();
    const [cartItems, setCartItems] = useState<CartItemDto[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // 获取购物车数据
    const fetchCart = useCallback(async () => {
        if (!isAuthenticated) {
            setCartItems([]);
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const data = await cartService.getMyCart();
            setCartItems(data);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : '获取购物车失败';
            setError(errorMessage);
            console.error('Failed to fetch cart:', err);
        } finally {
            setLoading(false);
        }
    }, [isAuthenticated]);

    // 添加商品到购物车
    const addToCart = async (productId: number, quantity: number = 1) => {
        try {
            setError(null);
            await cartService.addToCart(productId, quantity);
            await fetchCart(); // 刷新购物车
            return true;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : '添加到购物车失败';
            setError(errorMessage);
            console.error('Failed to add to cart:', err);
            return false;
        }
    };

    // 更新购物车商品数量
    const updateQuantity = async (cartItemId: number, quantity: number) => {
        try {
            setError(null);
            await cartService.updateCartItem(cartItemId, quantity);
            await fetchCart(); // 刷新购物车
            return true;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : '更新数量失败';
            setError(errorMessage);
            console.error('Failed to update cart item:', err);
            return false;
        }
    };

    // 从购物车删除商品
    const removeItem = async (cartItemId: number) => {
        try {
            setError(null);
            await cartService.removeFromCart(cartItemId);
            await fetchCart(); // 刷新购物车
            return true;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : '删除商品失败';
            setError(errorMessage);
            console.error('Failed to remove cart item:', err);
            return false;
        }
    };

    // 清空购物车
    const clearCart = async () => {
        try {
            setError(null);
            await cartService.clearCart();
            setCartItems([]);
            return true;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : '清空购物车失败';
            setError(errorMessage);
            console.error('Failed to clear cart:', err);
            return false;
        }
    };

    // 计算购物车总价（使用后端计算好的 subtotal）
    const cartTotal = cartItems.reduce((total, item) => {
        return total + item.subtotal;  // 后端已经计算好 price * quantity
    }, 0);

    // 购物车商品总数
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    // 初始加载
    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    return {
        cartItems,
        loading,
        error,
        cartTotal,
        cartCount,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        refreshCart: fetchCart,
    };
};
