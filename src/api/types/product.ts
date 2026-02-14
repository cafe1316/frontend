// ============================================
// Product 相关类型定义
// 完全匹配后端 C# DTOs
// ============================================

/**
 * 商品列表 DTO
 * 对应后端：Cafe1316.Application.DTOs.ProductListDto
 * 用于：ProductsPage 商品列表展示
 */
export interface ProductListDto {
    // 基本信息
    id: number;
    name: string;
    slug: string;

    // 价格信息（注意：后端用 decimal Price，不是 priceCents）
    price: number;        // decimal in C#, number in TS
    currency: string;     // 默认 "AUD"
    unit: string;         // 默认 "bag"

    // 库存状态（不暴露精确数量）
    stockStatus: string;  // "InStock" | "LowStock" | "OutOfStock"

    // 分类信息
    categoryName: string;
    subcategoryName?: string | null;

    // 产品属性
    brand?: string | null;
    weight?: number | null;
    origin?: string | null;
    roastLevel?: string | null;

    // 图片
    mainImageUrl?: string | null;  // 列表只需主图

    // 风味标签 (后端返回 int[], 前端需映射)
    flavorNotes: (string | number)[];

    // 标签
    tags: string[];

    // 特殊标记
    isFeatured: boolean;
}

/**
 * 商品详情 DTO
 * 对应后端：Cafe1316.Application.DTOs.ProductDetailDto
 * 用于：ProductDetailPage 商品详情页
 */
export interface ProductDetailDto {
    // 基本信息
    id: number;
    name: string;
    slug: string;
    description?: string | null;

    // 价格和库存
    price: number;
    currency: string;
    stockStatus: string;  // "InStock" | "LowStock" | "OutOfStock"

    // 分类
    categoryName: string;
    subcategoryName?: string | null;

    // 产品属性
    unit: string;
    brand?: string | null;
    weight?: number | null;
    origin?: string | null;
    roastLevel?: string | null;
    processingMethod?: string | null;
    altitude?: number | null;
    varietals?: string | null;
    harvestYear?: number | null;
    cuppingScore?: number | null;

    // 器具类商品属性
    material?: string | null;
    color?: string | null;
    size?: string | null;
    capacity?: number | null;
    specifications?: string | null;

    // 风味和标签
    flavorNotes: string[];
    tags: string[];

    // 图片（详情页有多张图）
    imageUrls: string[];

    // 特殊标记
    isFeatured: boolean;
}

/**
 * 分类 DTO（简化版，用于商品中的分类信息）
 */
export interface CategoryDto {
    name: string;
    slug?: string;
    id?: number; // Added optional ID
}

// ============================================
// 新增类型定义 (匹配后端)
// ============================================

/**
 * 通用分页结果包装器
 * 对应后端: Cafe1316.Application.DTOs.PaginatedResult<T>
 */
export interface PaginatedResult<T> {
    items: T[];
    totalCount: number;
    page: number;
    pageSize: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}

/**
 * 产品排序选项枚举
 * 对应后端: Cafe1316.Domain.Enums.ProductSortOption
 */
export enum ProductSortOption {
    Default = 0,
    PriceLowToHigh = 1,
    PriceHighToLow = 2
}

/**
 * 烘焙程度枚举
 * 对应后端: Cafe1316.Domain.Enums.RoastLevel
 */
export enum RoastLevel {
    Light = 0,
    Medium = 1,
    Dark = 2
}

/**
 * 风味枚举
 * 对应后端: Cafe1316.Domain.Enums.FlavorNote
 */
export enum FlavorNote {
    Floral = 0,
    Fruity = 1,
    Chocolate = 2,
    Nutty = 3,
    Caramel = 4,
    Citrus = 5,
    Berry = 6,
    Spicy = 7,
    Earthy = 8,
    Sweet = 9
}

/**
 * 产品筛选参数
 * 对应后端: Cafe1316.Application.DTOs.ProductFilterParams
 */
export interface ProductFilterParams {
    page?: number;
    pageSize?: number;
    categoryId?: number;
    subcategoryId?: number;
    origin?: number;
    minPrice?: number;
    maxPrice?: number;
    roastLevels?: RoastLevel[];
    searchTerm?: string;
    isNewArrival?: boolean;
    isOrganic?: boolean;
    isSeasonal?: boolean;
    sortBy?: ProductSortOption;
    flavorNotes?: FlavorNote[];
}
