// ============================================
// Category 相关类型定义
// 对应后端: Cafe1316.Application.DTOs.CategoryWithSubsDto & SubcategoryDto
// ============================================

export interface SubcategoryDto {
    id: number;
    name: string;
    slug: string;
}

export interface CategoryWithSubsDto {
    id: number;
    name: string;
    slug: string;
    subcategories: SubcategoryDto[];
}
