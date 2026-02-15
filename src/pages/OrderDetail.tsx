import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { orderService } from '../api/services/orderService';
import { OrderDto } from '../api/types';

const OrderDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [order, setOrder] = useState<OrderDto | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchOrder = async () => {
            if (!id) return;
            try {
                const data = await orderService.getOrderById(Number(id));
                setOrder(data);
            } catch (err) {
                setError('Failed to load order details.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [id]);

    if (loading) return (
        <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    if (error || !order) return (
        <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Not Found</h2>
            <p className="text-gray-600 mb-8">{error || "We couldn't find the order you're looking for."}</p>
            <Link to="/myorders" className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
                Back to My Orders
            </Link>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Order Details</h1>
                <Link to="/myorders" className="text-gray-600 hover:text-red-500 flex items-center">
                    <i className="fas fa-arrow-left mr-2"></i> Back to List
                </Link>
            </div>

            {/* Order Status Banner */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-500 mb-1">Order Number</p>
                    <p className="font-medium text-lg">{order.orderNumber}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500 mb-1">Date Placed</p>
                    <p className="font-medium">{new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500 mb-1">Total Amount</p>
                    <p className="font-medium text-red-500 text-lg">
                        {order.currency === 'AUD' ? '$' : '¥'}{order.grandTotal.toFixed(2)}
                    </p>
                </div>
                <div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium 
                        ${order.status === 'Pending' ? 'bg-orange-100 text-orange-800' :
                            order.status === 'Paid' ? 'bg-green-100 text-green-800' :
                                order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                    'bg-gray-100 text-gray-800'}`}>
                        {order.status}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: Items */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold mb-4">Items</h2>
                        <div className="space-y-4">
                            {order.items.map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-4 border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                        {item.imageUrl ? (
                                            <img src={item.imageUrl} alt={item.productName} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-gray-400">
                                                <i className="fas fa-coffee fa-lg"></i>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-medium">{item.productName}</h3>
                                        <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium">
                                            {order.currency === 'AUD' ? '$' : '¥'}{item.lineTotal.toFixed(2)}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {order.currency === 'AUD' ? '$' : '¥'}{item.unitPrice.toFixed(2)} each
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Payment Info (mock for now, can be expanded) */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold mb-4">Payment Information</h2>
                        <div className="flex items-center space-x-3 text-gray-600">
                            <i className="far fa-credit-card fa-lg"></i>
                            <span>Paid via Stripe</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Address & Summary */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold mb-4">Shipping Address</h2>
                        <div className="text-gray-600 text-sm space-y-1">
                            <p className="font-medium text-gray-900">{order.shippingAddress.recipientName}</p>
                            <p>{order.shippingAddress.addressText}</p>
                            <p>{order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
                            <p>{order.shippingAddress.countryCode}</p>
                            <p className="mt-2 text-gray-500">{order.shippingAddress.phone}</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>{order.currency === 'AUD' ? '$' : '¥'}{order.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span>{order.currency === 'AUD' ? '$' : '¥'}{order.shippingFee.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax</span>
                                <span>{order.currency === 'AUD' ? '$' : '¥'}{order.tax.toFixed(2)}</span>
                            </div>
                            <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-lg mt-2">
                                <span>Total</span>
                                <span className="text-red-500">{order.currency === 'AUD' ? '$' : '¥'}{order.grandTotal.toFixed(2)}</span>
                            </div>
                        </div>
                        {order.status === 'Pending' && (
                            <button className="w-full mt-6 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-medium">
                                Pay Now
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
