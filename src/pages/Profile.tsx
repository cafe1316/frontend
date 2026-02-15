import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AccountSideBar from '../components/AccountSideBar'
import { useAuth } from '../components/AuthContext'
import { orderService } from '../api/services/orderService'
import { OrderDto } from '../api/types/index'

const Profile = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState<OrderDto[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecentOrders = async () => {
            try {
                // Fetch first page, 3 items for preview
                const result = await orderService.getUserOrders(1, 3);
                setOrders(result.items);
            } catch (error) {
                console.error("Failed to fetch recent orders", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecentOrders();
    }, []);

    return (
        <>
            <main className="flex-1 py-8 px-4 md:px-8 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold mb-8">Profile</h1>

                    <div className="flex flex-col md:flex-row gap-6">
                        {/* 左侧菜单*/}
                        <AccountSideBar />

                        {/* 右侧内容*/}
                        <div className="md:w-3/4">
                            {/* 个人信息部分*/}
                            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold">Personal Information</h2>
                                    <Link to="/setting" className="text-red-500 hover:text-red-600">
                                        <i className="fas fa-edit mr-1"></i> Edit
                                    </Link>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-medium text-gray-500 mb-2">Basic Info</h3>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <div className="flex justify-between mb-3">
                                                <span className="text-gray-500">Name</span>
                                                <span>{user?.name || user?.firstName || 'N/A'}</span>
                                            </div>
                                            <div className="flex justify-between mb-3">
                                                <span className="text-gray-500">Gender</span>
                                                <span>{user?.gender || 'Not Set'}</span>
                                            </div>
                                            <div className="flex justify-between mb-3">
                                                <span className="text-gray-500">Birthday</span>
                                                <span>{user?.birthDate || 'Not Set'}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Phone</span>
                                                <span>{user?.phone || 'Not Set'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-gray-500 mb-2">Account Info</h3>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <div className="flex justify-between mb-3">
                                                <span className="text-gray-500">Email</span>
                                                <span>{user?.email}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Joined</span>
                                                <span>{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 订单部分 */}
                            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold">Recent Orders</h2>
                                    <Link to="/myorders" className="text-red-500 hover:text-red-600">
                                        View All <i className="fas fa-arrow-right ml-1"></i>
                                    </Link>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="text-left py-3 px-4">Order No.</th>
                                                <th className="text-left py-3 px-4">Date</th>
                                                <th className="text-left py-3 px-4">Amount</th>
                                                <th className="text-left py-3 px-4">Status</th>
                                                <th className="text-left py-3 px-4">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? (
                                                <tr>
                                                    <td colSpan={5} className="py-8 text-center text-gray-500">Loading recent orders...</td>
                                                </tr>
                                            ) : orders.length === 0 ? (
                                                <tr>
                                                    <td colSpan={5} className="py-8 text-center text-gray-500">No recent orders found.</td>
                                                </tr>
                                            ) : (
                                                orders.map(order => (
                                                    <tr key={order.id} className="border-b hover:bg-gray-50 last:border-0">
                                                        <td className="py-3 px-4">{order.orderNumber}</td>
                                                        <td className="py-3 px-4">{new Date(order.createdAt).toLocaleDateString()}</td>
                                                        <td className="py-3 px-4">{order.currency === 'AUD' ? '$' : '¥'}{order.grandTotal.toFixed(2)}</td>
                                                        <td className="py-3 px-4">
                                                            <span className={`text-xs px-2 py-1 rounded font-medium 
                                                                ${order.status === 'Pending' ? 'bg-orange-100 text-orange-800' :
                                                                    order.status === 'Paid' ? 'bg-green-100 text-green-800' :
                                                                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                                                            'bg-gray-100 text-gray-800'}`}>
                                                                {order.status}
                                                            </span>
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <Link to={`/order/${order.id}`} className="text-red-500 hover:text-red-600 mr-3">Details</Link>
                                                            {order.status === 'Completed' && (
                                                                <button className="text-gray-500 hover:text-gray-600">Buy Again</button>
                                                            )}
                                                            {order.status === 'Shipped' && (
                                                                <button className="text-gray-500 hover:text-gray-600">Track</button>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* 收货地址 (已硬编码，后续需要改成动态获取) */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold">Shipping Address</h2>
                                    <button className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded">
                                        <i className="fas fa-plus mr-1"></i> Add New Address
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="border rounded-lg p-4 relative">
                                        <div className="absolute top-3 right-3 flex space-x-2">
                                            <button className="text-gray-500 hover:text-red-500">
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button className="text-gray-500 hover:text-red-500">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                        <div className="mb-2 flex items-center">
                                            <span className="font-medium">{user?.name || "Name"}</span>
                                            <span className="ml-4">{user?.phone || "Phone"}</span>
                                            <span className="ml-2 bg-red-100 text-red-500 text-xs px-1 rounded">Default</span>
                                        </div>
                                        <p className="text-gray-600">No. 2, Boyun Road, Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai</p>
                                    </div>

                                    <div className="border rounded-lg p-4 relative">
                                        <div className="absolute top-3 right-3 flex space-x-2">
                                            <button className="text-gray-500 hover:text-red-500">
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button className="text-gray-500 hover:text-red-500">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                        <div className="mb-2 flex items-center">
                                            <span className="font-medium">{user?.name || "Name"}</span>
                                            <span className="ml-4">{user?.phone || "Phone"}</span>
                                        </div>
                                        <p className="text-gray-600">Room 1208, Vantone Center, Jia 6, Chaoyangmenwai Street, Chaoyang District, Beijing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Profile