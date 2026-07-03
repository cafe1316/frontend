import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { productService } from "../api/services/productService";
import { ProductDetailDto } from "../api/types/product";
import { useCart } from "../components/CartContext";
import toast from 'react-hot-toast';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDetailDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"details" | "specs" | "brewing">("details");
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const data = await productService.getProductById(Number(id));
        setProduct(data);
        // Set initial selected image
        if (data.imageUrls && data.imageUrls.length > 0) {
          setSelectedImage(data.imageUrls[0]);
        }
      } catch (err) {
        setError("We couldn't load this product. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto py-20 text-center">Loading...</div>;
  }

  if (error || !product) {
    return <div className="container mx-auto py-20 text-center text-red-500">{error || "Product not found"}</div>;
  }

  // Helper to safely get image
  const mainImage = selectedImage || product.imageUrls?.[0] || 'https://placehold.co/600x400?text=No+Image';

  return (
    <>
      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="py-3 px-8 bg-gray-50 text-sm">
          <div className="container mx-auto">
            <Link to="/" className="text-gray-500 hover:text-red-500">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-red-500">Shop</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-500">{product.categoryName}</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>

        {/* Product Info Section */}
        <section className="container mx-auto py-8 px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Image Gallery */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative mb-4">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-auto rounded-xl object-cover aspect-square shadow-sm"
                />
              </div>

              {/* Thumbnails */}
              {product.imageUrls && product.imageUrls.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {product.imageUrls.map((url, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedImage(url)}
                      className={`border-2 rounded-lg overflow-hidden cursor-pointer transition ${selectedImage === url ? 'border-red-500' : 'border-transparent hover:border-gray-300'}`}
                    >
                      <img
                        src={url}
                        alt={`${product.name} ${idx}`}
                        className="w-full h-16 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="md:w-1/2">
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                  {product.name}
                </h1>
                {product.brand && (
                  <p className="text-sm text-gray-500 mb-1">Brand: {product.brand}</p>
                )}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Tags / Attributes */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.roastLevel && (
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {product.roastLevel}
                    </span>
                  )}
                  {product.origin && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {product.origin}
                    </span>
                  )}
                  {product.processingMethod && (
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {product.processingMethod}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-bold text-red-500 mr-2">
                    {product.currency === 'AUD' ? '$' : '¥'}{product.price}
                  </span>
                  {product.stockStatus === 'OutOfStock' && (
                    <span className="text-red-600 text-sm font-bold ml-4">Out of Stock</span>
                  )}
                </div>
              </div>

              {/* Variant / Size Placeholder (Current model only has one size per product ID) */}
              <div className="mb-6">
                <h3 className="font-bold mb-2 text-gray-700">Specifications</h3>
                <div className="flex gap-4 text-sm text-gray-600">
                  {product.weight && <div className="border px-3 py-1 rounded">{product.weight}g / {product.unit}</div>}
                  {product.size && <div className="border px-3 py-1 rounded">Size: {product.size}</div>}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <h3 className="font-bold mb-3 text-gray-700">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded-full">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gray-600 hover:text-red-500 transition"
                    >-</button>
                    <input
                      type="text"
                      value={quantity}
                      readOnly
                      className="w-12 text-center focus:outline-none"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-gray-600 hover:text-red-500 transition"
                    >+</button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mb-8">
                <button
                  disabled={product.stockStatus === 'OutOfStock'}
                  onClick={async () => {
                    const success = await addToCart(product, quantity);
                    if (success) toast.success(`Added ${quantity} × ${product.name} to cart!`);
                  }}
                  className={`flex-1 py-3 px-6 rounded-full flex items-center justify-center transition font-semibold ${product.stockStatus === 'OutOfStock' ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-red-500 text-white hover:bg-red-600'}`}
                >
                  <i className="fas fa-shopping-cart mr-2"></i>
                  Add to Cart
                </button>
              </div>

              {/* Quick Features List */}
              {product.flavorNotes && product.flavorNotes.length > 0 && (
                <div className="border-t pt-6">
                  <h3 className="font-bold mb-4 text-gray-800">Flavor Profile</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.flavorNotes.map((note, i) => (
                      <span key={i} className="bg-gray-50 text-gray-700 px-3 py-1 rounded-md text-sm border">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Detailed Tabs Section */}
        <section className="container mx-auto px-4 md:px-8 mb-16">
          <div className="border-b mb-8">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('details')}
                className={`py-4 px-2 font-medium border-b-2 transition ${activeTab === 'details' ? 'border-red-500 text-red-500' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Product Details
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`py-4 px-2 font-medium border-b-2 transition ${activeTab === 'specs' ? 'border-red-500 text-red-500' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Technical Specs
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl">
            {activeTab === 'details' && (
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">About this coffee</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description || "No detailed description available."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Placeholder for rich content images if we had them in DB, for now using gallery images if available */}
                  {product.imageUrls[1] && <img src={product.imageUrls[1]} className="rounded-lg w-full h-64 object-cover" />}
                  {product.imageUrls[2] && <img src={product.imageUrls[2]} className="rounded-lg w-full h-64 object-cover" />}
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="max-w-2xl bg-gray-50 rounded-xl p-8">
                <table className="w-full text-left">
                  <tbody>
                    {product.origin && (
                      <tr className="border-b border-gray-200">
                        <th className="py-3 text-gray-500 font-medium w-1/3">Origin</th>
                        <td className="py-3 text-gray-900">{product.origin}</td>
                      </tr>
                    )}
                    {product.altitude && (
                      <tr className="border-b border-gray-200">
                        <th className="py-3 text-gray-500 font-medium w-1/3">Altitude</th>
                        <td className="py-3 text-gray-900">{product.altitude}m</td>
                      </tr>
                    )}
                    {product.varietals && (
                      <tr className="border-b border-gray-200">
                        <th className="py-3 text-gray-500 font-medium w-1/3">Varietal</th>
                        <td className="py-3 text-gray-900">{product.varietals}</td>
                      </tr>
                    )}
                    {product.processingMethod && (
                      <tr className="border-b border-gray-200">
                        <th className="py-3 text-gray-500 font-medium w-1/3">Process</th>
                        <td className="py-3 text-gray-900">{product.processingMethod}</td>
                      </tr>
                    )}
                    {product.harvestYear && (
                      <tr className="border-b border-gray-200">
                        <th className="py-3 text-gray-500 font-medium w-1/3">Harvest Year</th>
                        <td className="py-3 text-gray-900">{product.harvestYear}</td>
                      </tr>
                    )}
                    {product.cuppingScore && (
                      <tr className="border-b border-gray-200">
                        <th className="py-3 text-gray-500 font-medium w-1/3">Cupping Score</th>
                        <td className="py-3 text-gray-900">{product.cuppingScore}</td>
                      </tr>
                    )}
                    {product.material && (
                      <tr className="border-b border-gray-200">
                        <th className="py-3 text-gray-500 font-medium w-1/3">Material</th>
                        <td className="py-3 text-gray-900">{product.material}</td>
                      </tr>
                    )}
                    {product.specifications && (
                      <tr className="border-b border-gray-200">
                        <th className="py-3 text-gray-500 font-medium w-1/3">Specs</th>
                        <td className="py-3 text-gray-900">{product.specifications}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetailPage;
