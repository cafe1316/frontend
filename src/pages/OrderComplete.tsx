import React from 'react'

const OrderComplete = () => {
  return (
    <>
        {/* 结算进度指示器*/}
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
                {/* 支付成功图标*/}
                <div className="mb-8 success-animation">
                    <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                        <i className="fas fa-check-circle text-green-500 text-5xl"></i>
                    </div>
                </div>
                
                <h1 className="text-2xl md:text-3xl font-bold mb-4">Payment Successful!</h1>
                <p className="text-gray-600 mb-10">Thank you for your purchase, your order has been successfully paid.</p>
                
                {/* 订单信息*/}
                <div className="bg-gray-50 rounded-xl p-6 mb-10 text-left">
                    <h2 className="text-lg font-medium mb-4">Order Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                        <div>
                            <span className="text-gray-500">Order No.:</span>
                            <span className="font-medium">CD23081500918</span>
                        </div>
                        <div>
                            <span className="text-gray-500">Payment Method:</span>
                            <span className="font-medium">Alipay</span>
                        </div>
                        <div>
                            <span className="text-gray-500">Payment Time:</span>
                            <span className="font-medium">2023-08-15 14:32:56</span>
                        </div>
                        <div>
                            <span className="text-gray-500">Amount:</span>
                            <span className="font-medium text-red-500">¥686</span>
                        </div>
                    </div>
                </div>
                
                {/* 订单状态内容*/}
                <div className="bg-gray-50 rounded-xl p-6 mb-10">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center mr-3">
                                <i className="fas fa-check text-sm"></i>
                            </div>
                            <div className="text-left">
                                <div className="font-medium">Paid</div>
                                <div className="text-xs text-gray-500">2023-08-15 14:32:56</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-0.5 h-8 bg-gray-300 ml-4"></div>
                    
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center mr-3">
                                <i className="fas fa-box text-sm"></i>
                            </div>
                            <div className="text-left">
                                <div className="font-medium">Processing</div>
                                <div className="text-xs text-gray-500">We are preparing your order</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-0.5 h-8 bg-gray-300 ml-4"></div>
                    
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center mr-3">
                                <i className="fas fa-shipping-fast text-sm"></i>
                            </div>
                            <div className="text-left">
                                <div className="font-medium">Shipping</div>
                                <div className="text-xs text-gray-500">Estimated shipping: 2023-08-16</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-0.5 h-8 bg-gray-300 ml-4"></div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center mr-3">
                                <i className="fas fa-home text-sm"></i>
                            </div>
                            <div className="text-left">
                                <div className="font-medium">Delivered</div>
                                <div className="text-xs text-gray-500">Estimated delivery: 2023-08-18</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* 收货信息*/}
                <div className="bg-gray-50 rounded-xl p-6 mb-10 text-left">
                    <h2 className="text-lg font-medium mb-4">Shipping Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                        <div>
                            <span className="text-gray-500">Recipient:</span>
                            <span className="font-medium">Mr. Zhang</span>
                        </div>
                        <div>
                            <span className="text-gray-500">Phone:</span>
                            <span className="font-medium">138****5678</span>
                        </div>
                        <div className="md:col-span-2">
                            <span className="text-gray-500">Address:</span>
                            <span className="font-medium">No. 2, Boyun Road, Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai</span>
                        </div>
                    </div>
                </div>
                
                {/* 操作按钮*/}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#" className="bg-gray-100 text-black py-3 px-8 rounded-full hover:bg-gray-200 transition transform hover:scale-105">
                        View Order Details
                    </a>
                    <a href="#" className="bg-red-500 text-white py-3 px-8 rounded-full hover:bg-red-600 transition transform hover:scale-105">
                        Continue Shopping
                    </a>
                </div>
            </div>
        </main>
    </>
  )
}

export default OrderComplete