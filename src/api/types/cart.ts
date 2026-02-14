// ============================================
// Cart 相关类型定义
// 完全匹配后端 C# DTOs
// ============================================

/**
 * 购物车单项 DTO
 * 对应后端：Cafe1316.Application.DTOs.CartItemDto
 * 用于：MyShoppingCart 购物车页面
 */
export interface CartItemDto {
    // 购物车项 ID
    id: number;

    // 商品信息（嵌入简化的商品数据）
    productId: number;
    productName: string;
    productSlug: string;
    mainImageUrl?: string | null;

    // 价格信息
    price: number;        // 后端用 decimal
    currency: string;     // 默认 "AUD"

    // 数量和库存
    quantity: number;
    stockStatus: string;  // "InStock" | "LowStock" | "OutOfStock"

    // 小计（后端计算好的）
    subtotal: number;

    // 时间戳
    addedAt: string;      // DateTime in C#, ISO string in TS
}

/**
 * 添加到购物车请求 DTO
 * 对应后端：Cafe1316.Application.DTOs.AddToCartDto
 * 用于：POST /api/cart
 */
export interface AddToCartDto {
    productId: number;
    quantity: number;     // 默认 1
}

/**
 * 更新购物车数量请求（前端定义，后端可能用 AddToCartDto）
 */
export interface UpdateCartItemDto {
    quantity: number;
}
