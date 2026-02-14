import axiosInstance from '../axiosInstance';
import { ProductListDto, ProductDetailDto, PaginatedResult, ProductFilterParams } from '../types/product';

/**
 * Product API Service
 * 所有商品相关的 API 调用
 */
export const productService = {
    /**
     * 获取所有商品（支持分页和筛选）
     * GET /api/products
     */
    getAllProducts: async (params?: ProductFilterParams): Promise<PaginatedResult<ProductListDto>> => {
        // 构建查询字符串
        const queryParams = new URLSearchParams();

        if (params) {
            if (params.page) queryParams.append('page', params.page.toString());
            if (params.pageSize) queryParams.append('pageSize', params.pageSize.toString());
            if (params.searchTerm) queryParams.append('searchTerm', params.searchTerm);
            if (params.minPrice) queryParams.append('minPrice', params.minPrice.toString());
            if (params.maxPrice) queryParams.append('maxPrice', params.maxPrice.toString());
            if (params.categoryId) queryParams.append('categoryId', params.categoryId.toString());
            if (params.subcategoryId) queryParams.append('subcategoryId', params.subcategoryId.toString()); // Added subcategoryId
            if (params.sortBy !== undefined) queryParams.append('sortBy', params.sortBy.toString());

            // 处理数组参数 (RoastLevels)
            if (params.roastLevels && params.roastLevels.length > 0) {
                params.roastLevels.forEach(level => {
                    queryParams.append('roastLevels', level.toString());
                });
            }

            // 处理数组参数 (FlavorNotes)
            if (params.flavorNotes && params.flavorNotes.length > 0) {
                params.flavorNotes.forEach(note => {
                    queryParams.append('flavorNotes', note.toString());
                });
            }

            // 其他 boolean 参数
            if (params.isNewArrival) queryParams.append('isNewArrival', 'true');
            if (params.isOrganic) queryParams.append('isOrganic', 'true');
            if (params.isSeasonal) queryParams.append('isSeasonal', 'true');
        }

        const response = await axiosInstance.get<PaginatedResult<ProductListDto>>(`/products?${queryParams.toString()}`);
        return response.data;
    },

    /**
     * 获取精选商品
     * GET /api/products/featured
     */
    getFeaturedProducts: async (limit: number = 8): Promise<ProductListDto[]> => {
        const response = await axiosInstance.get<ProductListDto[]>(`/products/featured?limit=${limit}`);
        return response.data;
    },

    /**
     * 根据 ID 获取单个商品（详情页）
     * GET /api/products/{id}
     */
    getProductById: async (id: number): Promise<ProductDetailDto> => {
        const response = await axiosInstance.get<ProductDetailDto>(`/products/${id}`);
        return response.data;
    },

    /**
     * 根据分类获取商品
     * GET /api/products/category/{categoryId}
     */
    getProductsByCategory: async (categoryId: number): Promise<ProductListDto[]> => {
        const response = await axiosInstance.get<ProductListDto[]>(`/products/category/${categoryId}`);
        return response.data;
    },

    /**
     * 根据 slug 获取商品（用于 URL 友好的商品详情页）
     * GET /api/products/slug/{slug}
     */
    getProductBySlug: async (slug: string): Promise<ProductDetailDto> => {
        const response = await axiosInstance.get<ProductDetailDto>(`/products/slug/${slug}`);
        return response.data;
    },
};
