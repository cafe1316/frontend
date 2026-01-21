
import AccountSideBar from '../components/AccountSideBar'

const MyOrders = () => {
  return (
    <>
        <main className="flex-1 py-8 px-4 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-8">My Orders</h1>
                
                <div className="flex flex-col md:flex-row gap-6">
                    {/* 左侧菜单*/}
                    <AccountSideBar /> 
                    
                    {/* 右侧内容 */}
                    <div className="md:w-3/4">
                        {/* 订单筛选标签 */}
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                            <div className="border-b mb-6">
                                <ul className="flex flex-wrap -mb-px">
                                    <li className="mr-6">
                                        <a href="#" className="inline-block py-3 px-1 border-b-2 border-red-500 active-tab font-medium">
                                            All Orders
                                        </a>
                                    </li>
                                    <li className="mr-6">
                                        <a href="#" className="inline-block py-3 px-1 border-b-2 border-transparent text-gray-500 hover:text-red-500 hover:border-red-300">
                                            Pending Payment
                                        </a>
                                    </li>
                                    <li className="mr-6">
                                        <a href="#" className="inline-block py-3 px-1 border-b-2 border-transparent text-gray-500 hover:text-red-500 hover:border-red-300">
                                            Awaiting Shipment
                                        </a>
                                    </li>
                                    <li className="mr-6">
                                        <a href="#" className="inline-block py-3 px-1 border-b-2 border-transparent text-gray-500 hover:text-red-500 hover:border-red-300">
                                            Shipped
                                        </a>
                                    </li>
                                    <li className="mr-6">
                                        <a href="#" className="inline-block py-3 px-1 border-b-2 border-transparent text-gray-500 hover:text-red-500 hover:border-red-300">
                                            Delivered
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* 搜索栏 */}
                            <div className="flex mb-6">
                                <div className="relative flex-1">
                                    <input type="text" placeholder="Search order number or product name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                                    <button className="absolute right-3 top-2.5 text-gray-400 hover:text-red-500">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                                <div className="ml-4">
                                    <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white">
                                        <option>Last 3 Months</option>
                                        <option>This Year</option>
                                        <option>2022</option>
                                        <option>2021</option>
                                    </select>
                                </div>
                            </div>
                            
                            {/* 订单列表 */}
                            <div className="space-y-6">
                                {/* 待付款订单 */}
                                <div className="border rounded-lg overflow-hidden">
                                    <div className="bg-gray-50 px-6 py-3 flex justify-between items-center">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-gray-600">Order No.: CBD2023120105</span>
                                            <span className="text-gray-600">2023-12-01</span>
                                        </div>
                                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Pending Payment</span>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-16 h-16 flex-shrink-0">
                                                <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" className="w-full h-full object-cover rounded" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-medium">Ethiopia Yirgacheffe Coffee Beans</h3>
                                                <p className="text-gray-600 text-sm">Premium Coffee Beans / 250g</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-medium">¥128.00</div>
                                                <div className="text-gray-500 text-sm">x1</div>
                                            </div>
                                        </div>
                                        <div className="border-t pt-4 flex justify-between items-center">
                                            <div className="text-gray-600">
                                                1 Item Total: <span className="text-red-500 font-medium">¥128.00</span> (Shipping ¥10.00)
                                            </div>
                                            <div className="space-x-2">
                                                <button className="px-4 py-1.5 border border-gray-300 rounded-lg hover:border-gray-400 text-sm">Cancel Order</button>
                                                <button className="px-4 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm">Pay Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 待发货订单 */}
                                <div className="border rounded-lg overflow-hidden">
                                    <div className="bg-gray-50 px-6 py-3 flex justify-between items-center">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-gray-600">Order No.: CBD2023112802</span>
                                            <span className="text-gray-600">2023-11-28</span>
                                        </div>
                                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Awaiting Shipment</span>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-16 h-16 flex-shrink-0">
                                                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" className="w-full h-full object-cover rounded" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-medium">Pour-over Coffee Set</h3>
                                                <p className="text-gray-600 text-sm">Essential starter kit</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-medium">¥399.00</div>
                                                <div className="text-gray-500 text-sm">x1</div>
                                            </div>
                                        </div>
                                        <div className="border-t pt-4 flex justify-between items-center">
                                            <div className="text-gray-600">
                                                1 Item Total: <span className="text-red-500 font-medium">¥399.00</span> (Shipping ¥0.00)
                                            </div>
                                            <div className="space-x-2">
                                                <button className="px-4 py-1.5 border border-gray-300 rounded-lg hover:border-gray-400 text-sm">View Details</button>
                                                <button className="px-4 py-1.5 border border-gray-300 rounded-lg hover:border-gray-400 text-sm">Remind Shipment</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 已发货订单 */}
                                <div className="border rounded-lg overflow-hidden">
                                    <div className="bg-gray-50 px-6 py-3 flex justify-between items-center">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-gray-600">Order No.: CBD2023111501</span>
                                            <span className="text-gray-600">2023-11-15</span>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Shipped</span>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-16 h-16 flex-shrink-0">
                                                <img src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" className="w-full h-full object-cover rounded" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-medium">Cold Brew Bottle</h3>
                                                <p className="text-gray-600 text-sm">Portable cold brew maker</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-medium">¥159.00</div>
                                                <div className="text-gray-500 text-sm">x1</div>
                                            </div>
                                        </div>
                                        <div className="border-t pt-4 flex justify-between items-center">
                                            <div className="text-gray-600">
                                                1 Item Total: <span className="text-red-500 font-medium">¥159.00</span> (Shipping ¥10.00)
                                            </div>
                                            <div className="space-x-2">
                                                <button className="px-4 py-1.5 border border-gray-300 rounded-lg hover:border-gray-400 text-sm">Track Order</button>
                                                <button className="px-4 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm">Confirm Receipt</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 已发货订单 */}
                                <div className="border rounded-lg overflow-hidden">
                                    <div className="bg-gray-50 px-6 py-3 flex justify-between items-center">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-gray-600">Order No.: CBD2023110103</span>
                                            <span className="text-gray-600">2023-11-01</span>
                                        </div>
                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Delivered</span>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-16 h-16 flex-shrink-0">
                                                <img src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" className="w-full h-full object-cover rounded" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-medium">Colombia Coffee Beans</h3>
                                                <p className="text-gray-600 text-sm">Balanced, caramel sweetness / 250g</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-medium">¥118.00</div>
                                                <div className="text-gray-500 text-sm">x1</div>
                                            </div>
                                        </div>
                                        <div className="border-t pt-4 flex justify-between items-center">
                                            <div className="text-gray-600">
                                                1 Item Total: <span className="text-red-500 font-medium">¥118.00</span> (Shipping ¥10.00)
                                            </div>
                                            <div className="space-x-2">
                                                <button className="px-4 py-1.5 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 text-sm">Review</button>
                                                <button className="px-4 py-1.5 border border-gray-300 rounded-lg hover:border-gray-400 text-sm">Buy Again</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 分页 */}
                                <div className="flex justify-center pt-4">
                                    <nav className="flex items-center space-x-1">
                                        <a href="#" className="px-3 py-1 rounded border hover:bg-gray-50 text-gray-500">
                                            <i className="fas fa-chevron-left text-xs"></i>
                                        </a>
                                        <a href="#" className="px-3 py-1 rounded border bg-red-500 text-white">1</a>
                                        <a href="#" className="px-3 py-1 rounded border hover:bg-gray-50 text-gray-700">2</a>
                                        <a href="#" className="px-3 py-1 rounded border hover:bg-gray-50 text-gray-700">3</a>
                                        <span className="px-3 py-1 text-gray-500">...</span>
                                        <a href="#" className="px-3 py-1 rounded border hover:bg-gray-50 text-gray-700">10</a>
                                        <a href="#" className="px-3 py-1 rounded border hover:bg-gray-50 text-gray-500">
                                            <i className="fas fa-chevron-right text-xs"></i>
                                        </a>
                                    </nav>
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

export default MyOrders