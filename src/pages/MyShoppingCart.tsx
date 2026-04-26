import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { useAuth } from '../components/AuthContext';
import toast from 'react-hot-toast';

const MyShoppingCart = () => {
    const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <main className="flex-1 py-16 px-4 md:px-8 lg:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6">
                        <i className="fas fa-shopping-cart text-6xl text-gray-200"></i>
                    </div>
                    <h1 className="text-2xl font-bold mb-4 text-gray-900">Your cart is empty</h1>
                    <p className="text-gray-500 mb-8">Looks like you haven't added any coffee to your cart yet.</p>
                    <Link to="/products" className="inline-block bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition">
                        Start Shopping
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <>
            <main className="flex-1 py-8 px-4 md:px-8 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold mb-8">My Cart</h1>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Cart Items List */}
                        <div className="lg:w-2/3">
                            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                                {/* Header */}
                                <div className="flex items-center justify-between pb-4 border-b">
                                    <h2 className="font-semibold text-gray-700">Items ({cartItems.length})</h2>
                                </div>

                                {/* Items Loop */}
                                <div className="divide-y">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="py-6">
                                            <div className="flex items-start space-x-4">
                                                {/* Image */}
                                                <div className="w-20 h-20 flex-shrink-0">
                                                    <img
                                                        src={item.mainImageUrl || 'https://placehold.co/600x400?text=No+Image'}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover rounded"
                                                    />
                                                </div>

                                                {/* Details */}
                                                <div className="flex-1">
                                                    <h3 className="font-medium mb-1">
                                                        <Link to={`/products/${item.productId}`} className="hover:text-red-500 transition">
                                                            {item.name}
                                                        </Link>
                                                    </h3>
                                                    <p className="text-gray-500 text-sm mb-2">
                                                        {item.size && <span>Size: {item.size}</span>}
                                                        {item.size && item.grind && <span> / </span>}
                                                        {item.grind && <span>Grind: {item.grind}</span>}
                                                    </p>
                                                </div>

                                                {/* Price & Quantity */}
                                                <div className="flex flex-col items-end">
                                                    <span className="font-medium text-red-500 mb-3">
                                                        {item.currency === 'AUD' ? '$' : '¥'}{item.price}
                                                    </span>
                                                    <div className="flex items-center border rounded">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="px-2 py-1 text-gray-500 hover:text-red-500 disabled:opacity-50"
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            <i className="fas fa-minus"></i>
                                                        </button>
                                                        <input
                                                            type="text"
                                                            value={item.quantity}
                                                            readOnly
                                                            className="w-10 text-center border-0 focus:outline-none quantity-input text-sm"
                                                        />
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="px-2 py-1 text-gray-500 hover:text-red-500"
                                                        >
                                                            <i className="fas fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex justify-end mt-2">
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-gray-500 hover:text-red-500 text-sm flex items-center transition"
                                                >
                                                    <i className="fas fa-trash-alt mr-1"></i>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-1/3">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                                <h2 className="text-lg font-bold mb-4">Order Summary</h2>

                                <div className="border-b pb-4 mb-4 space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span>${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Shipping (Flat Rate)</span>
                                        <span>$10.00</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                                        <span>Tax (Est. 10%)</span>
                                        <span>${(cartTotal * 0.1).toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between font-bold mb-6">
                                    <span>Total</span>
                                    <span className="text-red-500 text-xl">${(cartTotal + 10 + (cartTotal * 0.1)).toFixed(2)}</span>
                                </div>

                                <div className="space-y-3">
                                    {isAuthenticated ? (
                                        <Link to="/checkout" className="block w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition font-medium text-center">
                                            Proceed to Checkout
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                toast.error("Please login to proceed to checkout");
                                                navigate("/login", { state: { from: "/checkout" } });
                                            }}
                                            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition font-medium text-center"
                                        >
                                            Proceed to Checkout
                                        </button>
                                    )}
                                    <Link to="/products" className="block w-full text-center text-gray-500 hover:text-gray-800 text-sm">
                                        Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MyShoppingCart;