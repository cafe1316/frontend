/**
 * 辅助工具函数
 * 用于前端数据处理和格式化
 */

/**
 * 格式化价格显示
 * @param price - 价格（后端传来的 decimal，前端是 number）
 * @param currency - 货币代码，默认 "AUD"
 * @returns 格式化后的价格字符串，如 "$12.80"
 */
export const formatPrice = (price: number, currency: string = 'AUD'): string => {
    const currencySymbols: Record<string, string> = {
        AUD: '$',
        USD: '$',
        CNY: '¥',
        EUR: '€',
        GBP: '£',
    };

    const symbol = currencySymbols[currency] || '$';
    return `${symbol}${price.toFixed(2)}`;
};

/**
 * 库存状态中文映射
 */
export const getStockStatusText = (status: string): string => {
    const statusMap: Record<string, string> = {
        InStock: '有货',
        LowStock: '库存紧张',
        OutOfStock: '缺货',
    };
    return statusMap[status] || status;
};

/**
 * 库存状态颜色
 */
export const getStockStatusColor = (status: string): string => {
    const colorMap: Record<string, string> = {
        InStock: 'text-green-600',
        LowStock: 'text-orange-600',
        OutOfStock: 'text-red-600',
    };
    return colorMap[status] || 'text-gray-600';
};

/**
 * 获取商品主图 URL，如果没有则返回占位图
 */
export const getProductImageUrl = (imageUrl?: string | null): string => {
    return imageUrl || 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400';
};

/**
 * 格式化日期时间
 */
export const formatDateTime = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};
