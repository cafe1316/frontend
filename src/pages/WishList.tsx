import React from 'react'
import AccountSideBar from '../components/AccountSideBar'

const WishList = () => {
  return (
    <>
        <main className="flex-1 py-8 px-4 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-8">My Wishlist</h1>
                
                <div className="flex flex-col md:flex-row gap-6">
                    {/* 左侧菜单 */}
                    <AccountSideBar />
                    
                    {/* 右侧内容 */}
                    <div className="md:w-3/4">
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                            {/* 收藏夹标题栏 */}
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center">
                                    <h2 className="text-xl font-bold">My Wishlist</h2>
                                    <span className="ml-3 text-gray-500">(5 Items)</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <select className="border rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm">
                                        <option>Recently Added</option>
                                        <option>Price: High to Low</option>
                                        <option>Price: Low to High</option>
                                    </select>
                                    <div className="flex space-x-1">
                                        <button className="border rounded p-1.5 text-red-500 bg-gray-50">
                                            <i className="fas fa-th-large"></i>
                                        </button>
                                        <button className="border rounded p-1.5 text-gray-400">
                                            <i className="fas fa-list"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* 收藏商品网格 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* 收藏商品1 */}
                                <div className="border rounded-lg overflow-hidden transition-all duration-300 card-hover relative">
                                    <div className="relative">
                                        <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="埃塞俄比亚耶加雪菲" className="w-full h-48 object-cover" />
                                        <button className="absolute top-2 left-2 text-red-500 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition">
                                            <i className="fas fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium mb-1">Ethiopia Yirgacheffe</h3>
                                        <p className="text-gray-500 text-sm mb-2">Floral, fruity, clean finish</p>
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-red-500 font-medium">¥128.00</span>
                                            <div className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                                Coffee Beans
                                            </div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition text-sm">
                                                Add to Cart
                                            </button>
                                            <button className="text-gray-500 hover:text-red-500 border rounded p-2">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 收藏商品2 */}
                                <div className="border rounded-lg overflow-hidden transition-all duration-300 card-hover relative">
                                    <div className="relative">
                                        <img src="https://images.unsplash.com/photo-1572286258217-215cf8e294f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="手冲咖啡套装" className="w-full h-48 object-cover" />
                                        <button className="absolute top-2 left-2 text-red-500 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition">
                                            <i className="fas fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium mb-1">Pour-over Coffee Set</h3>
                                        <p className="text-gray-500 text-sm mb-2">Essential starter kit</p>
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-red-500 font-medium">¥399.00</span>
                                            <div className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                                Gear
                                            </div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition text-sm">
                                                Add to Cart
                                            </button>
                                            <button className="text-gray-500 hover:text-red-500 border rounded p-2">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 收藏商品3 */}
                                <div className="border rounded-lg overflow-hidden transition-all duration-300 card-hover relative">
                                    <div className="relative">
                                        <img src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="冷萃咖啡瓶" className="w-full h-48 object-cover" />
                                        <button className="absolute top-2 left-2 text-red-500 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition">
                                            <i className="fas fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium mb-1">Cold Brew Bottle</h3>
                                        <p className="text-gray-500 text-sm mb-2">Portable cold brew maker</p>
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-red-500 font-medium">¥159.00</span>
                                            <div className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                                Gear
                                            </div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition text-sm">
                                                Add to Cart
                                            </button>
                                            <button className="text-gray-500 hover:text-red-500 border rounded p-2">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 收藏商品4 */}
                                <div className="border rounded-lg overflow-hidden transition-all duration-300 card-hover relative">
                                    <div className="relative">
                                        <img src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="哥伦比亚咖啡豆" className="w-full h-48 object-cover" />
                                        <button className="absolute top-2 left-2 text-red-500 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition">
                                            <i className="fas fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium mb-1">Colombia Coffee Beans</h3>
                                        <p className="text-gray-500 text-sm mb-2">Balanced, caramel sweetness</p>
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-red-500 font-medium">¥118.00</span>
                                            <div className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                                Coffee Beans
                                            </div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition text-sm">
                                                Add to Cart
                                            </button>
                                            <button className="text-gray-500 hover:text-red-500 border rounded p-2">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 收藏商品5 */}
                                <div className="border rounded-lg overflow-hidden transition-all duration-300 card-hover relative">
                                    <div className="relative">
                                        <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="咖啡磨豆机" className="w-full h-48 object-cover" />
                                        <button className="absolute top-2 left-2 text-red-500 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition">
                                            <i className="fas fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium mb-1">Coffee Grinder</h3>
                                        <p className="text-gray-500 text-sm mb-2">Professional home grinder</p>
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-red-500 font-medium">¥299.00</span>
                                            <div className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                                Gear
                                            </div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition text-sm">
                                                Add to Cart
                                            </button>
                                            <button className="text-gray-500 hover:text-red-500 border rounded p-2">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* 为您推荐 */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-lg font-bold mb-6">Recommended for You</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {/* 推荐商品1 */}
                                <div className="border rounded-lg overflow-hidden hover:shadow-md transition flex">
                                    <div className="w-24 h-24 flex-shrink-0">
                                        <img src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="咖啡杯套装" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-3 flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-medium text-sm">Coffee Cup Set</h3>
                                            <span className="text-red-500 text-sm">¥199.00</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <button className="text-red-500 hover:bg-red-50 rounded-full p-1.5">
                                                <i className="far fa-heart"></i>
                                            </button>
                                            <button className="text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600">
                                                <i className="fas fa-plus text-xs"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 推荐商品1 */}
                                <div className="border rounded-lg overflow-hidden hover:shadow-md transition flex">
                                    <div className="w-24 h-24 flex-shrink-0">
                                        <img src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="巴西咖啡豆" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-3 flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-medium text-sm">Brazil Coffee Beans</h3>
                                            <span className="text-red-500 text-sm">¥108.00</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <button className="text-red-500 hover:bg-red-50 rounded-full p-1.5">
                                                <i className="far fa-heart"></i>
                                            </button>
                                            <button className="text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600">
                                                <i className="fas fa-plus text-xs"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 推荐商品3 */}
                                <div className="border rounded-lg overflow-hidden hover:shadow-md transition flex">
                                    <div className="w-24 h-24 flex-shrink-0">
                                        <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="手动咖啡研磨器" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-3 flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-medium text-sm">Manual Grinder</h3>
                                            <span className="text-red-500 text-sm">¥189.00</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <button className="text-red-500 hover:bg-red-50 rounded-full p-1.5">
                                                <i className="far fa-heart"></i>
                                            </button>
                                            <button className="text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600">
                                                <i className="fas fa-plus text-xs"></i>
                                            </button>
                                        </div>
                                    </div>
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

export default WishList