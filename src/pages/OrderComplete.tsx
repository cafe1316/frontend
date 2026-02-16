import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { orderService } from "../api/services/orderService";
import { OrderDto } from "../api/types/index";

const OrderComplete = () => {
    const [order, setOrder] = useState<OrderDto | null>(null);
    const [loading, setLoading] = useState(true);
    const [retryCount, setRetryCount] = useState(0);

    // Get order info
    useEffect(() => {
        const fetchLatestOrder = async () => {
            try {
                // Fetch the latest order
                const result = await orderService.getUserOrders(1, 1);
                if (result.items.length > 0) {
                    const latestOrder = result.items[0];
                    // Check if it's a recent paid order (e.g. created within last 5 mins)
                    // For now just take the latest one
                    setOrder(latestOrder);
                    setLoading(false);
                } else {
                    // No order found yet, maybe webhook is slow
                    if (retryCount < 10) {
                        setTimeout(() => setRetryCount(c => c + 1), 2000);
                    } else {
                        setLoading(false);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch order", error);
                setLoading(false);
            }
        };

        fetchLatestOrder();
    }, [retryCount]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600">Verifying payment with backend...</p>
                <p className="text-xs text-gray-400 mt-2">This may take a few seconds.</p>
            </div>
        );
    }

    if (!order) {
        return (
            <div className="max-w-2xl mx-auto text-center py-16 px-4">
                <div className="mb-8">
                    <div className="w-24 h-24 rounded-full bg-yellow-100 flex items-center justify-center mx-auto">
                        <i className="fas fa-exclamation-triangle text-yellow-500 text-5xl"></i>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mb-4">Payment Processing...</h1>
                <p className="text-gray-600 mb-8">
                    We have received your payment, but the order hasn't been created in our system yet.
                    <br />
                    <strong>Please ensure the Stripe Webhook is running locally!</strong>
                </p>
                <Link to="/" className="text-red-500 underline">Return Home</Link>
            </div>
        );
    }

    return (
        <>
            {/* Progress Indicator */}
            <div className="bg-gray-50 py-4 px-8 border-b">
                <div className="max-w-4xl mx-auto flex justify-between">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center mb-1">
                            <i className="fas fa-shopping-cart text-sm"></i>
                        </div>
                        <span className="text-xs md:text-sm text-gray-500">Cart</span>
                    </div>
                    <div className="w-16 md:w-24 h-0.5 bg-gray-300 self-center"></div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center mb-1">
                            <i className="fas fa-credit-card text-sm"></i>
                        </div>
                        <span className="text-xs md:text-sm text-gray-500">Checkout</span>
                    </div>
                    <div className="w-16 md:w-24 h-0.5 bg-red-500 self-center"></div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center mb-1">
                            <i className="fas fa-check text-sm"></i>
                        </div>
                        <span className="text-xs md:text-sm font-medium">Complete</span>
                    </div>
                </div>
            </div>


            <main className="flex-1 py-16 px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Success Icon */}
                    <div className="mb-8 success-animation">
                        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                            <i className="fas fa-check-circle text-green-500 text-5xl"></i>
                        </div>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Payment Successful!</h1>
                    <p className="text-gray-600 mb-10">Thank you for your purchase, your order has been successfully paid.</p>

                    {/* Order Information */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-10 text-left">
                        <h2 className="text-lg font-medium mb-4">Order Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                            <div>
                                <span className="text-gray-500">Order No.:</span>
                                <span className="font-medium ml-2">{order.orderNumber}</span>
                            </div>
                            <div>
                                <span className="text-gray-500">Payment Method:</span>
                                <span className="font-medium ml-2">Stripe / Card</span>
                            </div>
                            <div>
                                <span className="text-gray-500">Ordered At:</span>
                                <span className="font-medium ml-2">{new Date(order.createdAt).toLocaleString()}</span>
                            </div>
                            <div>
                                <span className="text-gray-500">Amount:</span>
                                <span className="font-medium text-red-500 ml-2">
                                    {order.currency === 'AUD' ? '$' : '¥'}
                                    {order.grandTotal.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Items Summary (Optional) */}
                    <div className="bg-white border rounded-xl p-6 mb-10 text-left shadow-sm">
                        <h3 className="font-medium mb-4">Items Ordered</h3>
                        <div className="space-y-3">
                            {order.items.map((item, idx) => (
                                <div key={idx} className="flex justify-between text-sm">
                                    <span>{item.productName} x {item.quantity}</span>
                                    <span>${item.lineTotal.toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shipping Info */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-10 text-left">
                        <h2 className="text-lg font-medium mb-4">Shipping Information</h2>
                        <div className="text-sm text-gray-700">
                            {/* Parse JSON address if needed, or display basic info */}
                            <p>Sent to: {order.shippingAddress.addressText} ({order.shippingAddress.recipientName})</p>
                            <p>Phone: {order.shippingAddress.phone}</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/products" className="bg-red-500 text-white py-3 px-8 rounded-full hover:bg-red-600 transition transform hover:scale-105">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default OrderComplete;