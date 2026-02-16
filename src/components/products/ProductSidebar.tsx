import React from "react";
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
    const [isOpen, setIsOpen] = React.useState(false);

    // Prevent body scroll when mobile menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);


    return (
        <>
            {/* Mobile Toggle Button (Sticky Header) */}
            <div className="md:hidden sticky top-0 bg-white z-40 border-b p-4 flex justify-between items-center shadow-sm" onClick={() => setIsOpen(true)}>
                <div className="flex items-center space-x-2 text-gray-800">
                    <i className="fas fa-list-ul"></i>
                    <span className="font-bold">Categories</span>
                </div>
                <i className="fas fa-chevron-right text-gray-400"></i>
            </div>

            {/* Backdrop Overlay (Mobile Only) */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Content drawer */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-[80%] max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:translate-x-0
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                md:relative md:w-64 md:shadow-none md:z-0 md:block md:bg-gray-50 md:border-r md:h-auto overflow-y-auto
            `}>
                <div className="p-6 h-full overflow-y-auto">
                    <div className="flex justify-between items-center mb-6 md:hidden">
                        <h2 className="text-xl font-bold">In this section</h2>
                        <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500">
                            <i className="fas fa-times text-xl"></i>
                        </button>
                    </div>

                    <h2 className="text-lg font-bold mb-6 hidden md:block">Categories</h2>

                    <div className="mb-4">
                        <button
                            onClick={() => {
                                onSelectCategory(undefined);
                                setIsOpen(false);
                            }}
                            className={`text-sm font-medium w-full text-left py-2 ${!selectedCategoryId && !selectedSubcategoryId ? 'text-red-500 font-bold' : 'text-gray-600 hover:text-red-500'}`}
                        >
                            All Products
                        </button>
                    </div>

                    {categories.map(category => (
                        <div key={category.id} className="mb-6">
                            <h3
                                className={`font-medium mb-3 text-sm uppercase cursor-pointer ${selectedCategoryId === category.id && !selectedSubcategoryId ? 'text-red-500' : 'text-gray-500'}`}
                                onClick={() => {
                                    onSelectCategory(category.id);
                                    setIsOpen(false);
                                }}
                            >
                                {category.name}
                            </h3>
                            <ul className="space-y-2 text-sm pl-2 border-l-2 border-gray-100">
                                <li>
                                    <button
                                        onClick={() => {
                                            onSelectCategory(category.id);
                                            setIsOpen(false);
                                        }}
                                        className={`flex items-center justify-between w-full hover:text-red-500 transition text-left py-1 ${selectedCategoryId === category.id && !selectedSubcategoryId ? 'text-red-500 font-semibold' : ''}`}
                                    >
                                        <span>All {category.name}</span>
                                    </button>
                                </li>
                                {category.subcategories.map(sub => (
                                    <li key={sub.id}>
                                        <button
                                            onClick={() => {
                                                onSelectSubcategory(category.id, sub.id);
                                                setIsOpen(false);
                                            }}
                                            className={`flex items-center justify-between w-full hover:text-red-500 transition text-left py-1 ${selectedSubcategoryId === sub.id ? 'text-red-500 font-semibold' : ''}`}
                                        >
                                            <span>{sub.name}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </aside>
        </>
    );
}
