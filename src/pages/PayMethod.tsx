import React from 'react'
import AccountSideBar from '../components/AccountSideBar'

const PayMethod = () => {
  return (
    <>
        <main className="flex-1 py-8 px-4 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-8">Payment Methods</h1>
                
                <div className="flex flex-col md:flex-row gap-6">
                    {/* 左侧菜单*/}
                    <AccountSideBar />
                    
                    {/* 右侧内容*/}
                    <div className="md:w-3/4">
                        {/* 支付卡管理*/}
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold">My Cards</h2>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition flex items-center">
                                    <i className="fas fa-plus mr-2"></i> Add Payment Method
                                </button>
                            </div>
                            
                            {/* 支付卡列表*/}
                            <div className="space-y-4">
                                {/* 支付卡1*/}
                                <div className="border rounded-lg p-4 relative hover:border-red-200 transition">
                                    <div className="absolute top-4 right-4 flex space-x-3">
                                        <button className="text-gray-500 hover:text-red-500">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button className="text-gray-500 hover:text-red-500">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 mr-4">
                                            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="信用卡" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <span className="font-medium mr-3">CMB Credit Card</span>
                                                <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded">Default</span>
                                            </div>
                                            <p className="text-gray-600">**** **** **** 8652</p>
                                            <p className="text-gray-500 text-sm mt-1">Exp: 12/25</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 支付卡2*/}
                                <div className="border rounded-lg p-4 relative hover:border-red-200 transition">
                                    <div className="absolute top-4 right-4 flex space-x-3">
                                        <button className="text-gray-500 hover:text-red-500">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button className="text-gray-500 hover:text-red-500">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 mr-4">
                                            <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="储蓄卡" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <span className="font-medium mr-3">ICBC Debit Card</span>
                                            </div>
                                            <p className="text-gray-600">**** **** **** 3579</p>
                                            <p className="text-gray-500 text-sm mt-1">Exp: 09/27</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* 第三方支付*/}
                        {/* !TODO 询问确认在这里要不要加微信这些
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                            <h2 className="text-xl font-bold mb-6">Third-party Payment</h2>
                            
                            <div className="space-y-4">
                                <!-- 支付宝 -->
                                <div className="border rounded-lg p-4 flex justify-between items-center hover:border-red-200 transition">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 mr-4">
                                            <img src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png" alt="支付宝" className="w-full h-full object-contain">
                                        </div>
                                        <div>
                                            <p className="font-medium">Alipay</p>
                                            <p className="text-gray-500 text-sm">Alibaba Group</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-white bg-green-500 px-3 py-1 rounded-full text-sm">Bound</span>
                                    </div>
                                </div>
                                
                                <!-- 微信支付 -->
                                <div className="border rounded-lg p-4 flex justify-between items-center hover:border-red-200 transition">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 mr-4">
                                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968841.png" alt="微信支付" className="w-full h-full object-contain">
                                        </div>
                                        <div>
                                            <p className="font-medium">WeChat Pay</p>
                                            <p className="text-gray-500 text-sm">Tencent</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="border border-red-500 text-red-500 hover:bg-red-50 px-3 py-1 rounded-full text-sm">
                                            Bind Now
                                        </button>
                                    </div>
                                </div>
                                
                                <!-- 云闪付 -->
                                <div className="border rounded-lg p-4 flex justify-between items-center hover:border-red-200 transition">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 mr-4">
                                            <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="云闪付" className="w-full h-full object-contain">
                                        </div>
                                        <div>
                                            <p className="font-medium">UnionPay</p>
                                            <p className="text-gray-500 text-sm">China UnionPay</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="border border-red-500 text-red-500 hover:bg-red-50 px-3 py-1 rounded-full text-sm">
                                            Bind Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>  */}
                        
                        {/* 添加支付卡表单*/}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-xl font-bold mb-6">Add New Card</h2>
                            <form>
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Cardholder Name</label>
                                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter cardholder name" />
                                </div>
                                
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Card Number</label>
                                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter card number" />
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Expiration Date</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white">
                                                <option>Month</option>
                                                <option>01</option>
                                                <option>02</option>
                                                {/* 更多月份选项*/}
                                                <option>12</option>
                                            </select>
                                            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white">
                                                <option>Year</option>
                                                <option>2023</option>
                                                <option>2024</option>
                                                {/* 更多年份选项*/}
                                                <option>2030</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">CVV</label>
                                        <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="3 digits on back" />
                                    </div>
                                </div>
                                
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Billing Address</label>
                                    <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white mb-3">
                                        <option>Select Billing Address</option>
                                        <option>Use Default Shipping Address</option>
                                        <option>Add New Address</option>
                                    </select>
                                </div>
                                
                                <div className="mb-6 flex items-center">
                                    <input type="checkbox" id="default_card" className="mr-2 text-red-500 focus:ring-red-500 rounded" />
                                    <label htmlFor="default_card" className="text-gray-700">Set as default payment method</label>
                                </div>
                                
                                <div className="mb-6">
                                    <p className="text-gray-500 text-sm">
                                        <i className="fas fa-lock mr-1"></i> Your card information is encrypted and secure. We do not store your CVV.
                                    </p>
                                </div>
                                
                                <div className="flex justify-end space-x-4">
                                    <button type="button" className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                                        Save
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

export default PayMethod