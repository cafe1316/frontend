import { CategoryWithSubsDto } from "../../api/types/category";

interface ProductSidebarProps {
    categories: CategoryWithSubsDto[];
    selectedCategoryId?: number;
    selectedSubcategoryId?: number;
    onSelectCategory: (categoryId?: number) => void;
    onSelectSubcategory: (categoryId: number, subcategoryId: number) => void;
}

export default function ProductSidebar({
    categories,
    selectedCategoryId,
    selectedSubcategoryId,
    onSelectCategory,
    onSelectSubcategory
}: ProductSidebarProps) {
    return (
        <aside className="w-64 bg-gray-50 p-6 border-r hidden md:block overflow-y-auto max-h-screen sticky top-0">
            <h2 className="text-lg font-bold mb-6">Categories</h2>

            <div className="mb-4">
                <button
                    onClick={() => onSelectCategory(undefined)}
                    className={`text-sm font-medium ${!selectedCategoryId && !selectedSubcategoryId ? 'text-red-500 font-bold' : 'text-gray-600 hover:text-red-500'}`}
                >
                    All Products
                </button>
            </div>

            {categories.map(category => (
                <div key={category.id} className="mb-6">
                    <h3
                        className={`font-medium mb-3 text-sm uppercase cursor-pointer ${selectedCategoryId === category.id && !selectedSubcategoryId ? 'text-red-500' : 'text-gray-500'}`}
                        onClick={() => onSelectCategory(category.id)}
                    >
                        {category.name}
                    </h3>
                    <ul className="space-y-2 text-sm pl-2 border-l-2 border-gray-100">
                        <li>
                            <button
                                onClick={() => onSelectCategory(category.id)}
                                className={`flex items-center justify-between w-full hover:text-red-500 transition text-left ${selectedCategoryId === category.id && !selectedSubcategoryId ? 'text-red-500 font-semibold' : ''}`}
                            >
                                <span>All {category.name}</span>
                            </button>
                        </li>
                        {category.subcategories.map(sub => (
                            <li key={sub.id}>
                                <button
                                    onClick={() => onSelectSubcategory(category.id, sub.id)}
                                    className={`flex items-center justify-between w-full hover:text-red-500 transition text-left ${selectedSubcategoryId === sub.id ? 'text-red-500 font-semibold' : ''}`}
                                >
                                    <span>{sub.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    );
}
