import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import homeHeroImage from "../assets/images/HomeHero.jpg";
import Button from "../components/Button";
import { productService } from "../api/services/productService";
import { categoryService } from "../api/services/categoryService";
import { useCart } from "../components/CartContext";
import { ProductListDto } from "../api/types/product";
import { CategoryWithSubsDto } from "../api/types/category";

// 首页组件
const HomePage = () => {
  const { addToCart } = useCart();
  const [featuredProducts, setFeaturedProducts] = useState<ProductListDto[]>([]);
  const [categories, setCategories] = useState<CategoryWithSubsDto[]>([]);
  const [loading, setLoading] = useState(true);

  // Hardcoded images for categories as backend doesn't provide them yet
  const categoryImages: Record<string, string> = {
    "Coffee Beans": "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1440&q=80",
    "Brewing Gear": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1440&q=80",
    "Gift Sets": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1440&q=80",
    "Default": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1440&q=80"
  };

  const categoryDescriptions: Record<string, string> = {
    "Coffee Beans": "Selected coffee beans from top global regions, bringing you a pure taste experience.",
    "Brewing Gear": "Professional brewing equipment, allowing you to enjoy cafe-level taste at home.",
    "Gift Sets": "Carefully curated coffee gift sets, the perfect choice for loved ones and friends.",
    "Default": "Discover our amazing collection."
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [products, cats] = await Promise.all([
          productService.getFeaturedProducts(4),
          categoryService.getAllCategories()
        ]);
        setFeaturedProducts(products);
        setCategories(cats.slice(0, 3)); // Display top 3 categories
      } catch (error) {
        console.error("Failed to fetch homepage data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: ProductListDto) => {
    e.preventDefault(); // Prevent navigation
    addToCart(product, 1);
  };

  return (
    <main className="flex-1 overflow-hidden">
      {/* hero area */}
      <section className="relative w-full h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${homeHeroImage})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start px-12 md:px-24">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Taste Life
            <br />
            Start with a good cup of coffee
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-lg">
            Explore our carefully selected coffee beans and experience unique
            flavors from around the world.
          </p>
          <Link to="/products">
            <Button className="px-8 py-3 text-lg">Shop Now</Button>
          </Link>
        </div>
      </section>

      {/*<!-- 特色产品类别 -->*/}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Explore Our Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loading ? (
            Array(3).fill(0).map((_, idx) => (
              <div key={idx} className="bg-gray-100 rounded-xl h-96 animate-pulse"></div>
            ))
          ) : categories.length > 0 ? (
            categories.map(cat => (
              <div key={cat.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition card-hover group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={categoryImages[cat.name] || categoryImages["Default"]}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {categoryDescriptions[cat.name] || categoryDescriptions["Default"]}
                  </p>
                  <Link to={`/products?categoryId=${cat.id}`} className="text-red-500 flex items-center hover:text-red-600">
                    View Collection <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500">No categories found.</div>
          )}
        </div>
      </section>

      {/*<!-- popular product -->*/}
      <section className="py-12 px-8 md:px-16 bg-gray-50">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Best Sellers</h2>
          <Link to="/products" className="text-red-500 flex items-center hover:text-red-600">
            View All <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-4">
          {loading ? (
            Array(4).fill(0).map((_, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-sm h-80 animate-pulse"></div>
            ))
          ) : featuredProducts.length > 0 ? (
            featuredProducts.map(product => (
              <Link to={`/products/${product.id}`} key={product.id} className="block group">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover h-full flex flex-col">
                  <div className="relative mb-4 overflow-hidden rounded-lg aspect-square bg-gray-100">
                    <img
                      src={product.mainImageUrl || "https://placehold.co/400x400?text=No+Image"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <h3 className="font-bold mb-1 truncate">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2 truncate">
                    {product.roastLevel || "Coffee"}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-bold">¥{product.price.toFixed(2)}</span>
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition shadow-sm hover:shadow active:scale-95"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-4 text-center py-12 text-gray-500">
              No featured products available.
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
