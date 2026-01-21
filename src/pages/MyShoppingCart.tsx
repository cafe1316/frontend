
import { Link } from 'react-router-dom'


const MyShoppingCart = () => {
  return (
    <>
        <main className="flex-1 py-8 px-4 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-8">My Cart</h1>
                
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* 左边购物车列表*/}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                            {/* 购物车标题栏 */}
                            <div className="flex items-center justify-between pb-4 border-b">
                                <div className="flex items-center">
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-red-500 rounded focus:ring-red-500" />
                                        <span>Select All</span>
                                    </label>
                                </div>
                                <button className="text-gray-500 hover:text-red-500 text-sm flex items-center">
                                    <i className="fas fa-trash-alt mr-1"></i> Delete Selected
                                </button>
                            </div>
                            
                            {/* 购物车商品列表 */}
                            <div className="divide-y">
                                {/* 商品1 */}
                                <div className="py-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex items-center h-full pt-1">
                                            <input type="checkbox" checked className="form-checkbox h-5 w-5 text-red-500 rounded focus:ring-red-500" />
                                        </div>
                                        <div className="w-20 h-20 flex-shrink-0">
                                            <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" className="w-full h-full object-cover rounded" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium mb-1">Ethiopia Yirgacheffe Coffee Beans</h3>
                                            <p className="text-gray-500 text-sm mb-2">Floral, fruity, clean finish / 250g</p>
                                            <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded inline-block">
                                                Medium Roast
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="font-medium text-red-500 mb-3">¥128.00</span>
                                            <div className="flex items-center border rounded">
                                                <button className="px-2 py-1 text-gray-500 hover:text-red-500">
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                                <input type="number" value="1" min="1" className="w-10 text-center border-0 focus:outline-none quantity-input" />
                                                <button className="px-2 py-1 text-gray-500 hover:text-red-500">
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end mt-2">
                                        <button className="text-gray-500 hover:text-red-500 text-sm mr-4">
                                            Move to Wishlist
                                        </button>
                                        <button className="text-gray-500 hover:text-red-500 text-sm">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                
                                {/* 商品2 */}
                                <div className="py-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex items-center h-full pt-1">
                                            <input type="checkbox" checked className="form-checkbox h-5 w-5 text-red-500 rounded focus:ring-red-500" />
                                        </div>
                                        <div className="w-20 h-20 flex-shrink-0">
                                            <img src="https://images.unsplash.com/photo-1572286258217-215cf8e294f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" className="w-full h-full object-cover rounded" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium mb-1">Pour-over Coffee Set</h3>
                                            <p className="text-gray-500 text-sm mb-2">Essential starter kit</p>
                                            <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded inline-block">
                                                Set
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="font-medium text-red-500 mb-3">¥399.00</span>
                                            <div className="flex items-center border rounded">
                                                <button className="px-2 py-1 text-gray-500 hover:text-red-500">
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                                <input type="number" value="1" min="1" className="w-10 text-center border-0 focus:outline-none quantity-input" />
                                                <button className="px-2 py-1 text-gray-500 hover:text-red-500">
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end mt-2">
                                        <button className="text-gray-500 hover:text-red-500 text-sm mr-4">
                                            Move to Wishlist
                                        </button>
                                        <button className="text-gray-500 hover:text-red-500 text-sm">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                
                                {/* 商品3 */}
                                <div className="py-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex items-center h-full pt-1">
                                            <input type="checkbox" checked className="form-checkbox h-5 w-5 text-red-500 rounded focus:ring-red-500" />
                                        </div>
                                        <div className="w-20 h-20 flex-shrink-0">
                                            <img src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" className="w-full h-full object-cover rounded" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium mb-1">Cold Brew Bottle</h3>
                                            <p className="text-gray-500 text-sm mb-2">Portable cold brew maker</p>
                                            <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded inline-block">
                                                500ml
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="font-medium text-red-500 mb-3">¥159.00</span>
                                            <div className="flex items-center border rounded">
                                                <button className="px-2 py-1 text-gray-500 hover:text-red-500">
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                                <input type="number" value="1" min="1" className="w-10 text-center border-0 focus:outline-none quantity-input" />
                                                <button className="px-2 py-1 text-gray-500 hover:text-red-500">
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end mt-2">
                                        <button className="text-gray-500 hover:text-red-500 text-sm mr-4">
                                            Move to Wishlist
                                        </button>
                                        <button className="text-gray-500 hover:text-red-500 text-sm">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* 猜你喜欢 */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-lg font-bold mb-4">You Might Also Like</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* 推荐商品1 */}
                                <div className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition">
                                    <div className="h-32 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="哥伦比亚咖啡豆" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-3">
                                        <h3 className="font-medium text-sm">Colombia Coffee Beans</h3>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-red-500 font-medium">¥118.00</span>
                                            <button className="text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600">
                                                <i className="fas fa-plus text-xs"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 推荐商品2 */}
                                <div className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition">
                                    <div className="h-32 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="咖啡杯套装" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-3">
                                        <h3 className="font-medium text-sm">Coffee Cup Set</h3>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-red-500 font-medium">¥199.00</span>
                                            <button className="text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600">
                                                <i className="fas fa-plus text-xs"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 推荐商品3 */}
                                <div className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition">
                                    <div className="h-32 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="咖啡磨豆机" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-3">
                                        <h3 className="font-medium text-sm">Coffee Grinder</h3>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-red-500 font-medium">¥299.00</span>
                                            <button className="text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600">
                                                <i className="fas fa-plus text-xs"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* 右侧订单摘要 */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                            
                            <div className="border-b pb-4 mb-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span>¥686.00</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">Shipping</span>
                                    <span>¥0.00</span>
                                </div>
                            </div>
                            
                            <div className="flex justify-between font-bold mb-6">
                                <span>Total</span>
                                <span className="text-red-500 text-xl">¥686.00</span>
                            </div>
                            
                            <div className="space-y-3">
                                <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition font-medium">
                                    <Link to="/checkout" className="block text-center text-red-500 hover:underline">
                                    Continue Shopping
                                    </Link>
                                </button>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default MyShoppingCart