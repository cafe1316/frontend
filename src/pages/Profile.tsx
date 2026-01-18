import React from 'react'
import AccountSideBar from '../components/AccountSideBar'

const Profile = () => {
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
                                <button className="text-red-500 hover:text-red-600">
                                    <i className="fas fa-edit mr-1"></i> Edit
                                </button>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium text-gray-500 mb-2">Basic Info</h3>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex justify-between mb-3">
                                            <span className="text-gray-500">Name</span>
                                            <span>Ming Zhang</span>
                                        </div>
                                        <div className="flex justify-between mb-3">
                                            <span className="text-gray-500">Gender</span>
                                            <span>Male</span>
                                        </div>
                                        <div className="flex justify-between mb-3">
                                            <span className="text-gray-500">Birthday</span>
                                            <span>1990-01-15</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Phone</span>
                                            <span>138****1234</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 className="font-medium text-gray-500 mb-2">Account Info</h3>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex justify-between mb-3">
                                            <span className="text-gray-500">Email</span>
                                            <span>zhangming@example.com</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Joined</span>
                                            <span>2022-09-18</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* 订单部分 */}
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold">Recent Orders</h2>
                                <a href="#" className="text-red-500 hover:text-red-600">
                                    View All <i className="fas fa-arrow-right ml-1"></i>
                                </a>
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
                                        <tr className="border-b hover:bg-gray-50">
                                            <td className="py-3 px-4">CBD2023112501</td>
                                            <td className="py-3 px-4">2023-11-25</td>
                                            <td className="py-3 px-4">¥286.00</td>
                                            <td className="py-3 px-4"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Completed</span></td>
                                            <td className="py-3 px-4">
                                                <a href="#" className="text-red-500 hover:text-red-600 mr-3">Details</a>
                                                <a href="#" className="text-gray-500 hover:text-gray-600">Buy Again</a>
                                            </td>
                                        </tr>
                                        <tr className="border-b hover:bg-gray-50">
                                            <td className="py-3 px-4">CBD2023111003</td>
                                            <td className="py-3 px-4">2023-11-10</td>
                                            <td className="py-3 px-4">¥399.00</td>
                                            <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Shipping</span></td>
                                            <td className="py-3 px-4">
                                                <a href="#" className="text-red-500 hover:text-red-600 mr-3">Details</a>
                                                <a href="#" className="text-gray-500 hover:text-gray-600">Track</a>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="py-3 px-4">CBD2023102205</td>
                                            <td className="py-3 px-4">2023-10-22</td>
                                            <td className="py-3 px-4">¥128.00</td>
                                            <td className="py-3 px-4"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Completed</span></td>
                                            <td className="py-3 px-4">
                                                <a href="#" className="text-red-500 hover:text-red-600 mr-3">Details</a>
                                                <a href="#" className="text-gray-500 hover:text-gray-600">Buy Again</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        {/* 收货地址 */}
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
                                        <span className="font-medium">Ming Zhang</span>
                                        <span className="ml-4">138****1234</span>
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
                                        <span className="font-medium">Ming Zhang</span>
                                        <span className="ml-4">138****1234</span>
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