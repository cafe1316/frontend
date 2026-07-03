import axiosInstance from '../axiosInstance';
import { CartDto, CartItemDto, AddToCartDto, MergeCartResultDto, UpdateCartItemDto } from '../types/cart';

/**
 * Cart API Service
 * 所有购物车相关的 API 调用
 */
export const cartService = {
    /**
     * 获取当前用户的购物车
     * GET /api/cart
     */
    getMyCart: async (): Promise<CartDto> => {
        const response = await axiosInstance.get<CartDto>('/cart');
        return response.data;
    },

    /**
     * 添加商品到购物车
     * POST /api/cart
     */
    addToCart: async (productId: number, quantity: number): Promise<CartItemDto> => {
        const response = await axiosInstance.post<CartItemDto>('/cart', {
            productId,
            quantity,
        } as AddToCartDto);
        return response.data;
    },

    /**
     * Merge valid guest items and report rejected items after login.
     * POST /api/cart/merge
     */
    mergeGuestCart: async (items: AddToCartDto[]): Promise<MergeCartResultDto> => {
        const response = await axiosInstance.post<MergeCartResultDto>('/cart/merge', { items });
        return response.data;
    },

    /**
     * 更新购物车商品数量
     * PUT /api/cart/{id}
     */
    updateCartItem: async (id: number, quantity: number): Promise<CartItemDto> => {
        const response = await axiosInstance.put<CartItemDto>(`/cart/${id}`, {
            quantity,
        } as UpdateCartItemDto);
        return response.data;
    },

    /**
     * 从购物车删除商品
     * DELETE /api/cart/{id}
     */
    removeFromCart: async (id: number): Promise<void> => {
        await axiosInstance.delete(`/cart/${id}`);
    },

    /**
     * 清空购物车
     * DELETE /api/cart
     */
    clearCart: async (): Promise<void> => {
        await axiosInstance.delete('/cart');
    },
};
