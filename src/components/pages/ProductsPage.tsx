import React from "react";


export default function ProductsPage(){

    return(
        <div>
            <div className="gradient-bg">
                <div className="mx-auto max-w-[1440px] h-[1024px] bg-white shadow-lg flex flex-col overflow-hidden">
                    <main className="flex-1 flex overflow-hidden">
                        {/* 左侧分类导航 */}
                        <aside className="w-64 bg-gray-50 p-6 border-r overflow-y-auto filter-container hidden md:block">
                            <h2 className="text-lg font-bold mb-6">商品分类</h2>
                            
                            <div className="mb-8">
                                <h3 className="font-medium mb-3 text-sm uppercase text-gray-500">咖啡豆</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a href="#" className="flex items-center justify-between text-red-500">
                                            <span>全部咖啡豆</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">24</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between hover:text-red-500 transition">
                                            <span>埃塞俄比亚</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">8</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between hover:text-red-500 transition">
                                            <span>哥伦比亚</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">6</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between hover:text-red-500 transition">
                                            <span>危地马拉</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">5</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between hover:text-red-500 transition">
                                            <span>巴西</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between hover:text-red-500 transition">
                                            <span>其他产区</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">2</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="mb-8">
                                <h3 className="font-medium mb-3 text-sm uppercase text-gray-500">冲泡器具</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a href="#" className="flex items-center justify-between hover:text-red-500 transition">
                                            <span>全部器具</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">18</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between hover:text-red-500 transition">
                                            <span>手冲壶</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">6</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between hover:text-red-500 transition">
                                            <span>滤杯</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">4</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between hover:text-red-500 transition">
                                            <span>磨豆机</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">5</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between hover:text-red-500 transition">
                                            <span>其他器具</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">3</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="mb-8">
                                <h3 className="font-medium mb-3 text-sm uppercase text-gray-500">周边产品</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a href="#" className="flex items-center justify-between hover:text-red-500 transition">
                                            <span>全部周边</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">12</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between hover:text-red-500 transition">
                                            <span>咖啡杯具</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">7</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between hover:text-red-500 transition">
                                            <span>储存容器</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between hover:text-red-500 transition">
                                            <span>礼品套装</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">2</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="pt-6 border-t">
                                <a href="#" className="flex items-center space-x-2 text-red-500">
                                    <i className="fas fa-gift"></i>
                                    <span>限时特惠商品</span>
                                </a>
                            </div>
                        </aside>
                        
                        {/* 右侧产品展示区 */}
                        <div className="flex-1 flex flex-col overflow-hidden">
                            {/* 搜索和筛选区域 */}
                            <div className="p-6 border-b bg-white">
                                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 mb-6">
                                    <div className="relative flex-1">
                                        <input type="text" placeholder="搜索咖啡豆、器具或周边..." className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"/>
                                        <i className="fas fa-search absolute left-4 top-3 text-gray-400"></i>
                                    </div>
                                    
                                    <div className="flex space-x-2">
                                        <button className="bg-white border px-4 py-2 rounded-full hover:bg-gray-50 transition flex items-center space-x-1">
                                            <span>排序</span>
                                            <i className="fas fa-chevron-down text-xs"></i>
                                        </button>
                                        
                                        <button className="bg-white border px-4 py-2 rounded-full hover:bg-gray-50 transition md:hidden flex items-center space-x-1">
                                            <span>筛选</span>
                                            <i className="fas fa-filter text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="flex flex-wrap gap-2">
                                    <div className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                                        <span>咖啡豆</span>
                                        <button className="ml-2 text-gray-500 hover:text-red-500">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                    
                                    <div className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                                        <span>埃塞俄比亚</span>
                                        <button className="ml-2 text-gray-500 hover:text-red-500">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                    
                                    <button className="text-red-500 text-sm hover:underline">
                                        清除所有
                                    </button>
                                </div>
                            </div>
                            
                            {/* 筛选控制面板 (折叠面板) */}
                            <div className="bg-gray-50 p-4 border-b">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                    <div>
                                        <h3 className="text-sm font-medium mb-3">烘焙度</h3>
                                        <div className="space-y-2">
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="rounded text-red-500 focus:ring-red-500"/>
                                                <span className="text-sm">浅度烘焙</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="rounded text-red-500 focus:ring-red-500"/>
                                                <span className="text-sm">中度烘焙</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="rounded text-red-500 focus:ring-red-500"/>
                                                <span className="text-sm">深度烘焙</span>
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-sm font-medium mb-3">口味特点</h3>
                                        <div className="space-y-2">
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="rounded text-red-500 focus:ring-red-500"/>
                                                <span className="text-sm">花香</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="rounded text-red-500 focus:ring-red-500"/>
                                                <span className="text-sm">果酸</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="rounded text-red-500 focus:ring-red-500"/>
                                                <span className="text-sm">巧克力</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="rounded text-red-500 focus:ring-red-500"/>
                                                <span className="text-sm">坚果</span>
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-sm font-medium mb-3">价格范围</h3>
                                        <div className="px-2">
                                            <input type="range" min="0" max="500" value="300" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"/>
                                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                                                <span>¥0</span>
                                                <span>¥500</span>
                                            </div>
                                            <div className="text-center text-sm mt-2">最高：¥300</div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-sm font-medium mb-3">其他选项</h3>
                                        <div className="space-y-2">
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="rounded text-red-500 focus:ring-red-500"/>
                                                <span className="text-sm">有机认证</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="rounded text-red-500 focus:ring-red-500"/>
                                                <span className="text-sm">限时特惠</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="rounded text-red-500 focus:ring-red-500"/>
                                                <span className="text-sm">新品上市</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex justify-end mt-4 space-x-3">
                                    <button className="px-4 py-2 border rounded-full hover:bg-gray-100 transition text-sm">
                                        重置
                                    </button>
                                    <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition text-sm">
                                        应用筛选
                                    </button>
                                </div>
                            </div>
                            
                            {/* 产品列表 */}
                            <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                                {/* 产品1 */}
                                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                                    <div className="relative mb-4">
                                        <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="埃塞俄比亚耶加雪菲" className="w-full h-48 object-cover rounded-lg"/>
                                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">热卖</span>
                                        <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                                            <i className="far fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="mb-2 flex items-center">
                                        <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">浅烘</span>
                                        <span className="text-xs text-gray-500">埃塞俄比亚</span>
                                    </div>
                                    <h3 className="font-bold mb-1 leading-tight">埃塞俄比亚耶加雪菲</h3>
                                    <p className="text-sm text-gray-600 mb-2">花香果酸，清爽回甘</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">¥128</span>
                                        <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* 产品2 */}
                                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                                    <div className="relative mb-4">
                                        <img src="https://images.unsplash.com/photo-1587734182619-0f462b2b97c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="哥伦比亚咖啡豆" className="w-full h-48 object-cover rounded-lg"/>
                                        <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                                            <i className="far fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="mb-2 flex items-center">
                                        <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">中烘</span>
                                        <span className="text-xs text-gray-500">哥伦比亚</span>
                                    </div>
                                    <h3 className="font-bold mb-1 leading-tight">哥伦比亚卡尔达斯</h3>
                                    <p className="text-sm text-gray-600 mb-2">平衡醇厚，焦糖甜感</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">¥118</span>
                                        <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* 产品3 */}
                                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                                    <div className="relative mb-4">
                                        <img src="https://images.unsplash.com/photo-1580933073521-dc49bba0a53a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="巴西咖啡豆" className="w-full h-48 object-cover rounded-lg"/>
                                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">特惠</span>
                                        <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                                            <i className="far fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="mb-2 flex items-center">
                                        <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">深烘</span>
                                        <span className="text-xs text-gray-500">巴西</span>
                                    </div>
                                    <h3 className="font-bold mb-1 leading-tight">巴西达特拉庄园</h3>
                                    <p className="text-sm text-gray-600 mb-2">巧克力风味，低酸度</p>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className="font-bold">¥99</span>
                                            <span className="text-gray-400 text-xs line-through ml-1">¥128</span>
                                        </div>
                                        <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* 产品4 */}
                                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                                    <div className="relative mb-4">
                                        <img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="危地马拉咖啡豆" className="w-full h-48 object-cover rounded-lg"/>
                                        <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                                            <i className="far fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="mb-2 flex items-center">
                                        <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">中烘</span>
                                        <span className="text-xs text-gray-500">危地马拉</span>
                                    </div>
                                    <h3 className="font-bold mb-1 leading-tight">危地马拉安提瓜</h3>
                                    <p className="text-sm text-gray-600 mb-2">柑橘酸度，温和花香</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">¥138</span>
                                        <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* 产品5 */}
                                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                                    <div className="relative mb-4">
                                        <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="手冲咖啡套装" className="w-full h-48 object-cover rounded-lg"/>
                                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">新品</span>
                                        <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                                            <i className="far fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="mb-2 flex items-center">
                                        <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">器具</span>
                                        <span className="text-xs text-gray-500">手冲套装</span>
                                    </div>
                                    <h3 className="font-bold mb-1 leading-tight">精致手冲咖啡套装</h3>
                                    <p className="text-sm text-gray-600 mb-2">入门级必备组合</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">¥399</span>
                                        <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* 产品6 */}
                                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                                    <div className="relative mb-4">
                                        <img src="https://images.unsplash.com/photo-1552346989-e069318e20a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="手动磨豆机" className="w-full h-48 object-cover rounded-lg"/>
                                        <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                                            <i className="far fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="mb-2 flex items-center">
                                        <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">器具</span>
                                        <span className="text-xs text-gray-500">磨豆机</span>
                                    </div>
                                    <h3 className="font-bold mb-1 leading-tight">原木手动磨豆机</h3>
                                    <p className="text-sm text-gray-600 mb-2">均匀研磨，复古设计</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">¥279</span>
                                        <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* 产品7 */}
                                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                                    <div className="relative mb-4">
                                        <img src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="冷萃咖啡瓶" className="w-full h-48 object-cover rounded-lg"/>
                                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">新品</span>
                                        <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                                            <i className="far fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="mb-2 flex items-center">
                                        <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">器具</span>
                                        <span className="text-xs text-gray-500">冷萃器具</span>
                                    </div>
                                    <h3 className="font-bold mb-1 leading-tight">冷萃咖啡瓶</h3>
                                    <p className="text-sm text-gray-600 mb-2">便携式冷萃咖啡制作</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">¥159</span>
                                        <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* 产品8 */}
                                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                                    <div className="relative mb-4">
                                        <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="咖啡杯组合" className="w-full h-48 object-cover rounded-lg"/>
                                        <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                                            <i className="far fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="mb-2 flex items-center">
                                        <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">周边</span>
                                        <span className="text-xs text-gray-500">杯具</span>
                                    </div>
                                    <h3 className="font-bold mb-1 leading-tight">北欧风陶瓷咖啡杯组</h3>
                                    <p className="text-sm text-gray-600 mb-2">简约设计，4杯配套</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">¥199</span>
                                        <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* 产品9 */}
                                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                                    <div className="relative mb-4">
                                        <img src="https://images.unsplash.com/photo-1585843736857-9898dd1d6f77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="肯尼亚咖啡豆" className="w-full h-48 object-cover rounded-lg"/>
                                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">有机</span>
                                        <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                                            <i className="far fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="mb-2 flex items-center">
                                        <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">浅烘</span>
                                        <span className="text-xs text-gray-500">肯尼亚</span>
                                    </div>
                                    <h3 className="font-bold mb-1 leading-tight">肯尼亚AA豆</h3>
                                    <p className="text-sm text-gray-600 mb-2">明亮酸度，莓果风味</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">¥148</span>
                                        <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* 产品10 */}
                                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                                    <div className="relative mb-4">
                                        <img src="https://images.unsplash.com/photo-1572286258217-215cf8e294f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="咖啡礼盒" className="w-full h-48 object-cover rounded-lg"/>
                                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">畅销</span>
                                        <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                                            <i className="far fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="mb-2 flex items-center">
                                        <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">周边</span>
                                        <span className="text-xs text-gray-500">礼盒</span>
                                    </div>
                                    <h3 className="font-bold mb-1 leading-tight">环球咖啡品鉴礼盒</h3>
                                    <p className="text-sm text-gray-600 mb-2">四种产区精选咖啡豆</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">¥368</span>
                                        <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* 产品11 */}
                                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                                    <div className="relative mb-4">
                                        <img src="https://images.unsplash.com/photo-1606486544553-6493c8f11033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="手冲壶" className="w-full h-48 object-cover rounded-lg"/>
                                        <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                                            <i className="far fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="mb-2 flex items-center">
                                        <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">器具</span>
                                        <span className="text-xs text-gray-500">手冲壶</span>
                                    </div>
                                    <h3 className="font-bold mb-1 leading-tight">细口手冲壶</h3>
                                    <p className="text-sm text-gray-600 mb-2">精准水流控制</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">¥235</span>
                                        <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* 产品12 */}
                                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                                    <div className="relative mb-4">
                                        <img src="https://images.unsplash.com/photo-1580933745196-f8377b2699dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="埃塞俄比亚西达摩" className="w-full h-48 object-cover rounded-lg"/>
                                        <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                                            <i className="far fa-heart"></i>
                                        </button>
                                    </div>
                                    <div className="mb-2 flex items-center">
                                        <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">浅烘</span>
                                        <span className="text-xs text-gray-500">埃塞俄比亚</span>
                                    </div>
                                    <h3 className="font-bold mb-1 leading-tight">埃塞俄比亚西达摩</h3>
                                    <p className="text-sm text-gray-600 mb-2">柠檬香气，明亮酸感</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">¥138</span>
                                        <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* 分页 */}
                            <div className="bg-white p-6 flex justify-between items-center border-t">
                                <div className="text-sm text-gray-500">
                                    显示 1-12 个商品，共 54 个结果
                                </div>
                                
                                <div className="flex space-x-2">
                                    <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-red-500 hover:text-red-500 transition">
                                        <i className="fas fa-chevron-left text-xs"></i>
                                    </button>
                                    
                                    <button className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center">
                                        1
                                    </button>
                                    
                                    <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-red-500 hover:text-red-500 transition">
                                        2
                                    </button>
                                    
                                    <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-red-500 hover:text-red-500 transition">
                                        3
                                    </button>
                                    
                                    <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-red-500 hover:text-red-500 transition">
                                        <i className="fas fa-chevron-right text-xs"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};
