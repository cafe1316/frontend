import React from 'react'

const Checkout = () => {
  return (
    <>
        {/* 结算进度指示器 */}
        <div className="bg-gray-50 py-4 px-8 border-b">
            <div className="max-w-4xl mx-auto flex justify-between">
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center mb-1">
                        <i className="fas fa-shopping-cart text-sm"></i>
                    </div>
                    <span className="text-xs md:text-sm">Cart</span>
                </div>
                <div className="w-16 md:w-24 h-0.5 bg-red-500 self-center"></div>
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center mb-1">
                        <i className="fas fa-credit-card text-sm"></i>
                    </div>
                    <span className="text-xs md:text-sm font-medium">Checkout</span>
                </div>
                <div className="w-16 md:w-24 h-0.5 bg-gray-300 self-center"></div>
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center mb-1">
                        <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-xs md:text-sm text-gray-500">Complete</span>
                </div>
            </div>
        </div>
        
        
        <main className="flex-1 py-8 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-8">Checkout</h1>
                
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* 左侧表单 */}
                    <div className="lg:w-2/3">
                        {/* 收货地址 */}
                        <div className="mb-8">
                            <h2 className="text-lg font-medium mb-4 flex items-center">
                                <i className="fas fa-map-marker-alt text-red-500 mr-2"></i>
                                Shipping Address
                            </h2>
                            
                            <div className="bg-white border rounded-xl p-4 mb-4">
                                <div className="flex items-start mb-4">
                                    <input type="radio" name="address" className="rounded-full text-red-500 focus:ring-red-500 mt-1" checked />
                                    <div className="ml-3">
                                        <div className="font-medium">Mr. Zhang (Default)</div>
                                        <div className="text-gray-600 text-sm mt-1">13812345678</div>
                                        <div className="text-gray-600 text-sm">No. 2, Boyun Road, Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai</div>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <input type="radio" name="address" className="rounded-full text-red-500 focus:ring-red-500 mt-1" />
                                    <div className="ml-3">
                                        <div className="font-medium">Mr. Zhang (Company)</div>
                                        <div className="text-gray-600 text-sm mt-1">13812345678</div>
                                        <div className="text-gray-600 text-sm">46F, Plaza 66, 1266 Nanjing West Road, Jing'an District, Shanghai</div>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="text-red-500 flex items-center text-sm">
                                <i className="fas fa-plus mr-1"></i>
                                Add New Address
                            </button>
                        </div>
                        
                        {/* 配送方式 */}
                        <div className="mb-8">
                            <h2 className="text-lg font-medium mb-4 flex items-center">
                                <i className="fas fa-truck text-red-500 mr-2"></i>
                                Shipping Method
                            </h2>
                            
                            <div className="bg-white border rounded-xl p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center">
                                        <input type="radio" name="shipping" className="rounded-full text-red-500 focus:ring-red-500" checked />
                                        <span className="ml-2">Standard Shipping (2-3 business days)</span>
                                    </div>
                                    <span className="font-medium">Free</span>
                                </div>
                                
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center">
                                        <input type="radio" name="shipping" className="rounded-full text-red-500 focus:ring-red-500" />
                                        <span className="ml-2">Express Shipping (1 business day)</span>
                                    </div>
                                    <span className="font-medium">¥15</span>
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input type="radio" name="shipping" className="rounded-full text-red-500 focus:ring-red-500" />
                                        <span className="ml-2">Same Day Delivery</span>
                                    </div>
                                    <span className="font-medium">¥30</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* 支付方法 */}
                        <div className="mb-8">
                            <h2 className="text-lg font-medium mb-4 flex items-center">
                                <i className="fas fa-credit-card text-red-500 mr-2"></i>
                                Payment Method
                            </h2>
                            
                            <div className="bg-white border rounded-xl p-4">
                                <div className="flex flex-wrap gap-4">
                                    <label className="flex items-center border rounded-lg p-3 cursor-pointer hover:border-red-500 transition-colors">
                                        <input type="radio" name="payment" className="rounded-full text-red-500 focus:ring-red-500" checked />
                                        <i className="fab fa-alipay text-[#00a0e9] text-xl ml-2"></i>
                                        <span className="ml-2">Alipay</span>
                                    </label>
                                    
                                    <label className="flex items-center border rounded-lg p-3 cursor-pointer hover:border-red-500 transition-colors">
                                        <input type="radio" name="payment" className="rounded-full text-red-500 focus:ring-red-500" />
                                        <i className="fab fa-weixin text-[#09bb07] text-xl ml-2"></i>
                                        <span className="ml-2">WeChat Pay</span>
                                    </label>
                                    
                                    <label className="flex items-center border rounded-lg p-3 cursor-pointer hover:border-red-500 transition-colors">
                                        <input type="radio" name="payment" className="rounded-full text-red-500 focus:ring-red-500" />
                                        <i className="fa fa-credit-card text-gray-700 ml-2"></i>
                                        <span className="ml-2">UnionPay</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        {/* 订单备注 */}
                        <div>
                            <h2 className="text-lg font-medium mb-4 flex items-center">
                                <i className="fas fa-comment-alt text-red-500 mr-2"></i>
                                Order Notes
                            </h2>
                            
                            <div className="bg-white border rounded-xl p-4">
                                <textarea rows={3} className="form-input w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" placeholder="Optional: Enter notes about your order"></textarea>
                            </div>
                        </div>
                    </div>
                    
                    {/* 右侧订单摘要 */}
                    <div className="lg:w-1/3">
                        <div className="bg-white border rounded-xl p-6 sticky top-24">
                            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                            
                            {/* 商品列表 */}
                            <div className="border-b pb-4 mb-4">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 mr-3">
                                            <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="耶加雪菲" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium leading-tight">Ethiopia Yirgacheffe</div>
                                            <div className="text-xs text-gray-500">227g x 1</div>
                                        </div>
                                    </div>
                                    <div className="font-medium">¥128</div>
                                </div>
                                
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 mr-3">
                                            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="手冲咖啡套装" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium leading-tight">Exquisite Pour-over Set</div>
                                            <div className="text-xs text-gray-500">Wood x 1</div>
                                        </div>
                                    </div>
                                    <div className="font-medium">¥399</div>
                                </div>
                                
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 mr-3">
                                            <img src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="冷萃咖啡瓶" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium leading-tight">Cold Brew Bottle</div>
                                            <div className="text-xs text-gray-500">600ml x 1</div>
                                        </div>
                                    </div>
                                    <div className="font-medium">¥159</div>
                                </div>
                            </div>
                            
                            {/* 价格明细 */}
                            <div className="space-y-2 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span>¥686.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span>¥0.00</span>
                                </div>
                                <div className="flex justify-between font-medium text-lg pt-2 border-t">
                                    <span>Total</span>
                                    <span className="text-red-500">¥686.00</span>
                                </div>
                            </div>
                            
                           {/* 提交订单按钮 */}
                            <button className="w-full bg-red-500 text-white py-3 rounded-full hover:bg-red-600 transition-colors transform hover:scale-105 flex items-center justify-center">
                                <span className="mr-2">Place Order</span>
                                <i className="fas fa-arrow-right"></i>
                            </button>
                            
                            <p className="text-xs text-gray-500 text-center mt-4">
                                By clicking "Place Order", you agree to our <a href="#" className="text-red-500">Terms of Service</a> and <a href="#" className="text-red-500">Privacy Policy</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Checkout