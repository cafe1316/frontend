import axiosInstance from '../axiosInstance';
import { CategoryWithSubsDto } from '../types/category';

export const categoryService = {
    /**
     * 获取所有分类及其子分类
     * GET /api/categories
     */
    getAllCategories: async (): Promise<CategoryWithSubsDto[]> => {
        const response = await axiosInstance.get<CategoryWithSubsDto[]>('/categories');
        return response.data;
    }
};
