import { useState, useEffect } from "react";
import AccountSideBar from '../components/AccountSideBar';
import { orderService } from "../api/services/orderService";
import { OrderDto } from "../api/types/index";
import { Link } from "react-router-dom";

const MyOrders = () => {
    const [orders, setOrders] = useState<OrderDto[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);

    const fetchOrders = async (page: number, status?: string) => {
        setLoading(true);
        try {
            const result = await orderService.getUserOrders(page, 5, status); // Page size 5
            setOrders(result.items);
            setTotalPages(result.totalPages);
            setCurrentPage(result.page);
        } catch (error) {
            console.error("Failed to fetch orders", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders(1, statusFilter);
    }, [statusFilter]);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            fetchOrders(newPage, statusFilter);
            window.scrollTo(0, 0);
        }
    };

    const tabs = [
        { label: "All Orders", value: undefined },
        { label: "Pending", value: "Pending" },
        { label: "Paid", value: "Paid" },
        { label: "Shipped", value: "Shipped" },
        { label: "Completed", value: "Completed" }
    ];

    return (
        <main className="flex-1 py-8 px-4 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-8">My Orders</h1>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar */}
                    <AccountSideBar />

                    {/* Main Content */}
                    <div className="md:w-3/4">
                        {/* Filter Tabs */}
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                            <div className="border-b mb-6">
                                <ul className="flex flex-wrap -mb-px">
                                    {tabs.map((tab) => (
                                        <li key={tab.label} className="mr-6">
                                            <button
                                                onClick={() => {
                                                    setStatusFilter(tab.value);
                                                    setCurrentPage(1);
                                                }}
                                                className={`inline-block py-3 px-1 border-b-2 font-medium transition-colors ${statusFilter === tab.value
                                                    ? "border-red-500 text-red-600"
                                                    : "border-transparent text-gray-500 hover:text-red-500 hover:border-red-300"
                                                    }`}
                                            >
                                                {tab.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Search & Filter (Simplified) */}
                            {/* <div className="flex mb-6"> ... Search Code ... </div> */}

                            {/* Order List */}
                            <div className="space-y-6">
                                {loading ? (
                                    <div className="text-center py-12">
                                        <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                        <p className="text-gray-500">Loading orders...</p>
                                    </div>
                                ) : orders.length === 0 ? (
                                    <div className="text-center py-12 border rounded-lg bg-gray-50">
                                        <i className="fas fa-box-open text-gray-300 text-4xl mb-3"></i>
                                        <p className="text-gray-500">No orders found.</p>
                                        <Link to="/products" className="text-red-500 underline mt-2 inline-block">Start Shopping</Link>
                                    </div>
                                ) : (
                                    orders.map((order) => (
                                        <div key={order.orderNumber} className="border rounded-lg overflow-hidden">
                                            {/* Order Header */}
                                            <div className="bg-gray-50 px-6 py-3 flex justify-between items-center flex-wrap gap-2">
                                                <div className="flex items-center space-x-4">
                                                    <span className="text-gray-600 font-medium">Order: {order.orderNumber}</span>
                                                    <span className="text-gray-500 text-sm hidden sm:inline">{new Date(order.createdAt).toLocaleDateString()}</span>
                                                </div>
                                                <span className={`text-xs px-2 py-1 rounded font-medium 
                                                    ${order.status === 'Pending' ? 'bg-orange-100 text-orange-800' :
                                                        order.status === 'Paid' ? 'bg-green-100 text-green-800' :
                                                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                                                'bg-gray-100 text-gray-800'}`}>
                                                    {order.status}
                                                </span>
                                            </div>

                                            {/* Order Items */}
                                            <div className="p-6">
                                                {order.items.map((item, idx) => (
                                                    <div key={idx} className="flex items-center space-x-4 mb-6 last:mb-0">
                                                        <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                                                            {item.imageUrl ? (
                                                                <img src={item.imageUrl} alt={item.productName} className="w-full h-full object-cover" />
                                                            ) : (
                                                                <div className="flex items-center justify-center h-full text-gray-400">
                                                                    <i className="fas fa-coffee"></i>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="font-medium">{item.productName}</h3>
                                                            <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="font-medium">
                                                                {order.currency === 'AUD' ? '$' : '¥'}{item.unitPrice.toFixed(2)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}

                                                {/* Order Footer */}
                                                <div className="border-t pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
                                                    <div className="text-gray-600">
                                                        Total: <span className="text-red-500 font-medium text-lg">
                                                            {order.currency === 'AUD' ? '$' : '¥'}{order.grandTotal.toFixed(2)}
                                                        </span>
                                                        <span className="text-xs text-gray-400 ml-1">(Inc. Shipping)</span>
                                                    </div>
                                                    <div className="space-x-2">
                                                        <Link to={`/order/${order.id}`} className="px-4 py-1.5 border border-gray-300 rounded-lg hover:border-gray-400 text-sm inline-block">
                                                            View Details
                                                        </Link>
                                                        {order.status === 'Pending' && (
                                                            <button className="px-4 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm">
                                                                Pay Now
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex justify-center pt-8">
                                        <nav className="flex items-center space-x-2">
                                            <button
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className="px-3 py-1 rounded border hover:bg-gray-50 text-gray-500 disabled:opacity-50"
                                            >
                                                <i className="fas fa-chevron-left text-xs"></i>
                                            </button>

                                            <span className="px-4 py-1 text-gray-700">
                                                Page {currentPage} of {totalPages}
                                            </span>

                                            <button
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                                className="px-3 py-1 rounded border hover:bg-gray-50 text-gray-500 disabled:opacity-50"
                                            >
                                                <i className="fas fa-chevron-right text-xs"></i>
                                            </button>
                                        </nav>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MyOrders;