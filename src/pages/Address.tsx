import AccountSideBar from '../components/AccountSideBar'

const Address = () => {
  return (
    <>
        <main className="flex-1 py-8 px-4 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-8">Shipping Address</h1>
                
                <div className="flex flex-col md:flex-row gap-6">
                    {/* 左侧菜单 */}
                    <AccountSideBar />
                    
                    {/* 右侧内容 */}
                    <div className="md:w-3/4">
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                            {/* 地址管理标题 */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold">My Shipping Addresses</h2>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition flex items-center">
                                    <i className="fas fa-plus mr-2"></i> Add New Address
                                </button>
                            </div>
                            
                            {/* 地址列表 */}
                            <div className="space-y-4">
                                {/* 默认地址 */}
                                <div className="border rounded-lg p-4 relative hover:border-red-200 transition">
                                    <div className="absolute top-4 right-4 flex space-x-3">
                                        <button className="text-gray-500 hover:text-red-500">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button className="text-gray-500 hover:text-red-500">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                    <div className="flex items-start mb-3">
                                        <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded mr-2">Default</span>
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <span className="font-medium mr-3">Ming Zhang</span>
                                                <span className="text-gray-600">138****1234</span>
                                            </div>
                                            <p className="text-gray-600">No. 2, Boyun Road, Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai</p>
                                            <p className="text-gray-500 text-sm mt-1">Zip: 201203</p>
                                        </div>
                                    </div>
                                    <div className="mt-2 border-t pt-3 flex">
                                        <label className="flex items-center text-gray-600 text-sm mr-6">
                                            <input type="checkbox" checked className="mr-2 text-red-500 focus:ring-red-500 rounded" />
                                            Set as default shipping address
                                        </label>
                                    </div>
                                </div>
                                
                                {/* 地址2 */}
                                <div className="border rounded-lg p-4 relative hover:border-red-200 transition">
                                    <div className="absolute top-4 right-4 flex space-x-3">
                                        <button className="text-gray-500 hover:text-red-500">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button className="text-gray-500 hover:text-red-500">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                    <div className="flex items-start mb-3">
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <span className="font-medium mr-3">Ming Zhang</span>
                                                <span className="text-gray-600">138****1234</span>
                                            </div>
                                            <p className="text-gray-600">Room 1208, Vantone Center, Jia 6, Chaoyangmenwai Street, Chaoyang District, Beijing</p>
                                            <p className="text-gray-500 text-sm mt-1">Zip: 100020</p>
                                        </div>
                                    </div>
                                    <div className="mt-2 border-t pt-3 flex">
                                        <label className="flex items-center text-gray-600 text-sm mr-6">
                                            <input type="checkbox" className="mr-2 text-red-500 focus:ring-red-500 rounded" />
                                            Set as default shipping address
                                        </label>
                                    </div>
                                </div>
                                
                                {/* 地址3 */}
                                <div className="border rounded-lg p-4 relative hover:border-red-200 transition">
                                    <div className="absolute top-4 right-4 flex space-x-3">
                                        <button className="text-gray-500 hover:text-red-500">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button className="text-gray-500 hover:text-red-500">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                    <div className="flex items-start mb-3">
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <span className="font-medium mr-3">Hua Li</span>
                                                <span className="text-gray-600">139****5678</span>
                                            </div>
                                            <p className="text-gray-600">Suite 3001, Tower 1, Taikoo Hui, 385 Tianhe Road, Tianhe District, Guangzhou</p>
                                            <p className="text-gray-500 text-sm mt-1">Zip: 510620</p>
                                        </div>
                                    </div>
                                    <div className="mt-2 border-t pt-3 flex">
                                        <label className="flex items-center text-gray-600 text-sm mr-6">
                                            <input type="checkbox" className="mr-2 text-red-500 focus:ring-red-500 rounded" />
                                            Set as default shipping address
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* 添加新地址表单 */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-xl font-bold mb-6">Add New Address</h2>
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Recipient Name</label>
                                        <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter name" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Phone Number</label>
                                        <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter phone number" />
                                    </div>
                                </div>
                                
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Region</label>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white">
                                            <option>Select Province</option>
                                            <option>Beijing</option>
                                            <option>Shanghai</option>
                                            <option>Guangdong</option>
                                            <option>Jiangsu</option>
                                        </select>
                                        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white">
                                            <option>Select City</option>
                                            <option>Shanghai</option>
                                        </select>
                                        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white">
                                            <option>Select District</option>
                                            <option>Pudong New Area</option>
                                            <option>Huangpu District</option>
                                            <option>Jingan District</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Detailed Address</label>
                                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Street, Building, Unit, etc." />
                                </div>
                                
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Zip Code</label>
                                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter zip code" />
                                </div>
                                
                                <div className="mb-6 flex items-center space-x-4">
                                    <label className="flex items-center text-gray-700">
                                        <input type="checkbox" className="mr-2 text-red-500 focus:ring-red-500 rounded" />
                                        Set as default shipping address
                                    </label>
                                </div>
                                
                                <div className="flex justify-end space-x-4">
                                    <button type="button" className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                                        Save Address
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Address