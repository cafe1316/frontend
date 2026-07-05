import { Link } from "react-router-dom";
import { ProductListDto, FlavorNote } from "../../api/types/product";
import { useCart } from "../CartContext";
import toast from 'react-hot-toast';

interface ProductGridProps {
    products: ProductListDto[];
    loading: boolean;
}

export default function ProductGrid({ products, loading }: ProductGridProps) {
    const { addToCart, isMutating } = useCart();

    if (loading) {
        return <div className="col-span-full text-center py-20 text-gray-500">Loading products...</div>;
    }

    if (products.length === 0) {
        return <div className="col-span-full text-center py-20 text-gray-500">No products found.</div>;
    }

    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover relative group">
                    <Link to={`/products/${product.id}`} className="block">
                        <div className="relative mb-4">
                            <img
                                src={product.mainImageUrl || 'https://placehold.co/600x400?text=No+Image'}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                            <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition opacity-0 group-hover:opacity-100">
                                <i className="far fa-heart"></i>
                            </button>
                        </div>
                        <div className="mb-2 flex items-center">
                            {product.roastLevel && (
                                <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">
                                    {product.roastLevel}
                                </span>
                            )}
                            {product.origin && (
                                <span className="text-xs text-gray-500">{product.origin}</span>
                            )}
                        </div>
                        <h3 className="font-bold mb-1 leading-tight h-10 overflow-hidden text-ellipsis line-clamp-2 text-gray-900 group-hover:text-red-500 transition">
                            {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 h-5 overflow-hidden text-ellipsis whitespace-nowrap">
                            {product.flavorNotes?.map(note => (typeof note === 'string' ? note : FlavorNote[note])).join(', ')}
                        </p>
                    </Link>
                    <div className="flex justify-between items-center mt-2">
                        <span className="font-bold text-lg">{product.currency === 'AUD' ? '$' : '¥'}{product.price}</span>
                        <button
                            disabled={product.stockStatus === 'OutOfStock' || isMutating}
                            onClick={async () => {
                                const success = await addToCart(product, 1);
                                if (success) toast.success(`Added ${product.name} to cart!`);
                            }}
                            aria-label={product.stockStatus === 'OutOfStock' ? `${product.name} is out of stock` : `Add ${product.name} to cart`}
                            className={`text-white p-2 rounded-full transition z-10 relative ${(product.stockStatus === 'OutOfStock' || isMutating) ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
                        >
                            <i className={product.stockStatus === 'OutOfStock' ? 'fas fa-ban' : 'fas fa-plus'}></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
