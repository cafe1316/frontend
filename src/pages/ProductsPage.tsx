import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productService } from '../api/services/productService';
import { categoryService } from '../api/services/categoryService';
import { ProductListDto, ProductSortOption, ProductFilterParams } from '../api/types/product';
import { CategoryWithSubsDto } from '../api/types/category';
import ProductSidebar from '../components/products/ProductSidebar';
import ProductFilters from '../components/products/ProductFilters';
import ProductGrid from '../components/products/ProductGrid';
import Pagination from '../components/products/Pagination';
import toast from 'react-hot-toast';

export default function ProductsPage() {
  const [searchParams] = useSearchParams();

  // Integation State
  const [products, setProducts] = useState<ProductListDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Category State
  const [categories, setCategories] = useState<CategoryWithSubsDto[]>([]);

  // Filter State
  const [filters, setFilters] = useState<ProductFilterParams>({
    page: 1,
    pageSize: 12,
    sortBy: ProductSortOption.Default,
    roastLevels: [],
    flavorNotes: [],
    minPrice: 0,
    maxPrice: 500,
    searchTerm: '',
    isOrganic: false,
    isSeasonal: false,
    isNewArrival: false,
    // Initialize categoryId from URL if present
    categoryId: searchParams.get('categoryId') ? Number(searchParams.get('categoryId')) : undefined
  });

  // Debounce search term separately
  const [searchInput, setSearchInput] = useState('');

  // Filter Toggle State
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // 1. Fetch Categories
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const cats = await categoryService.getAllCategories();
        setCategories(cats);
      } catch (err: any) {
        console.error("Failed to fetch categories", err);
        toast.error(err.userMessage ?? 'Failed to load categories.');
      }
    };
    fetchInitialData();
  }, []);

  // 2. Fetch Products when filters change
  useEffect(() => {
    fetchProducts();
  }, [filters]);

  // Removed debounce effect for manual search trigger

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const result = await productService.getAllProducts(filters);
      setProducts(result.items);
      setTotalCount(result.totalCount);
      setTotalPages(result.totalPages);
    } catch (error: any) {
      console.error("Failed to fetch products", error);
      toast.error(error.userMessage ?? 'Failed to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setFilters(prev => ({ ...prev, page: newPage }));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const updateFilters = (newFilters: Partial<ProductFilterParams>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  // Helper to reset advanced filters provided when changing categories
  const resetAdvancedFilters = (): Partial<ProductFilterParams> => ({
    roastLevels: [],
    flavorNotes: [],
    minPrice: 0,
    maxPrice: 500,
    isOrganic: false,
    isSeasonal: false,
    isNewArrival: false,
    searchTerm: ''
  });

  const handleCategorySelect = (categoryId?: number) => {
    setSearchInput(''); // Clear visual input when changing categories to avoid mismatch
    updateFilters({
      categoryId: categoryId,
      subcategoryId: undefined,
      page: 1,
      ...resetAdvancedFilters()
    });
  };

  const clearFilters = () => {
    setFilters({
      page: 1,
      pageSize: 12,
      sortBy: ProductSortOption.Default,
      minPrice: 0,
      maxPrice: 500,
      searchTerm: '',
      roastLevels: [],
      flavorNotes: [],
      isOrganic: false,
      isSeasonal: false,
      isNewArrival: false,
      categoryId: undefined,
      subcategoryId: undefined
    });
    setSearchInput('');
  };

  const handleSearchSubmit = () => {
    updateFilters({ searchTerm: searchInput, page: 1 });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  // Determine if we should show coffee-specific filters
  // Show if: 
  // 1. No category selected (All Products)
  // 2. Selected category is related to coffee (slug contains 'coffee' or name contains 'Coffee')
  const showCoffeeFilters = () => {
    if (!filters.categoryId) return true; // All products -> show all filters
    const category = categories.find(c => c.id === filters.categoryId);
    if (!category) return true;

    const slug = category.slug.toLowerCase();
    const name = category.name.toLowerCase();

    // Logic: If it's accessories/equipment, hide coffee filters.
    // If it's 'coffee', 'beans', 'single-origin', etc., show them.
    return slug.includes('coffee') || slug.includes('bean') || name.includes('coffee');
  };

  return (
    <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
      {/* 左侧边栏组件 */}
      <ProductSidebar
        categories={categories}
        selectedCategoryId={filters.categoryId}
        selectedSubcategoryId={filters.subcategoryId}
        onSelectCategory={handleCategorySelect}
        onSelectSubcategory={(catId, subId) => {
          setSearchInput(''); // Also clear search when selecting subcategory
          updateFilters({
            categoryId: catId,
            subcategoryId: subId,
            page: 1,
            ...resetAdvancedFilters()
          })
        }}
      />

      {/* 右侧主内容区 */}
      <div className="flex-1 flex flex-col">
        {/* 顶部搜索和排序 */}
        <div className="p-6 border-b bg-white">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 mb-6">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search coffee beans..."
                className="w-full py-3 pl-6 pr-24 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
              />
              <button
                onClick={handleSearchSubmit}
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-red-500 text-white rounded-full px-6 hover:bg-red-600 transition font-medium text-sm flex items-center justify-center space-x-2"
              >
                <i className="fas fa-search"></i>
                <span>Search</span>
              </button>
            </div>

            <div className="flex space-x-2 items-center">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`border px-4 py-2 rounded-full transition flex items-center space-x-2 ${isFilterOpen ? 'bg-gray-100 text-red-500 border-red-500' : 'bg-white hover:bg-gray-50'}`}
              >
                <span>Filter</span>
                <i className={`fas fa-filter text-xs ${isFilterOpen ? 'text-red-500' : ''}`}></i>
              </button>

              <select
                value={filters.sortBy}
                onChange={(e) => updateFilters({ sortBy: Number(e.target.value) })}
                className="bg-white border px-4 py-2 rounded-full hover:bg-gray-50 transition flex items-center space-x-1 outline-none appearance-none cursor-pointer pr-8 relative"
                style={{ backgroundImage: 'none' }}
              >
                <option value={ProductSortOption.Default}>Default Sort</option>
                <option value={ProductSortOption.PriceLowToHigh}>Price: Low to High</option>
                <option value={ProductSortOption.PriceHighToLow}>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {/* Simple Active Filter Pills (Optional - can be extracted too if complex) */}
            {filters.categoryId && (
              <div className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                <span>Category Filter Active</span>
                <button onClick={clearFilters} className="ml-2 text-gray-500 hover:text-red-500">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            )}
            {filters.searchTerm && (
              <button
                onClick={() => { setSearchInput(''); updateFilters({ searchTerm: '' }); }}
                className="text-red-500 text-sm hover:underline"
              >
                Clear Search
              </button>
            )}
          </div>
        </div>

        {/* 筛选组件 - 可折叠 */}
        {isFilterOpen && (
          <ProductFilters
            filters={filters}
            onFilterChange={(newFilters) => setFilters(newFilters)}
            showCoffeeFilters={showCoffeeFilters()}
          />
        )}

        {/* 产品列表组件 */}
        <ProductGrid
          products={products}
          loading={loading}
        />

        {/* 分页组件 */}
        <Pagination
          currentPage={filters.page || 1}
          pageSize={filters.pageSize || 12}
          totalCount={totalCount}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
}
