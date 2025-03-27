import React from "react";

const Footer: React.FC = () => {
    return (
        <>
            <footer className="bg-white py-12 px-8 md:px-16 border-t">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <i className="fas fa-coffee text-red-500 text-2xl"></i>
                            <span className="text-xl font-bold">CaféBliss</span>
                        </div>
                        <p className="text-sm mb-4">我们致力于为您提供最高品质的咖啡体验，从世界各地精选的咖啡豆到专业的咖啡器具。</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-black hover:text-red-500 transition">
                                <i className="fab fa-weixin text-lg"></i>
                            </a>
                            <a href="#" className="text-black hover:text-red-500 transition">
                                <i className="fab fa-weibo text-lg"></i>
                            </a>
                            <a href="#" className="text-black hover:text-red-500 transition">
                                <i className="fab fa-instagram text-lg"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="font-bold mb-4">产品系列</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-red-500 transition">咖啡豆</a></li>
                            <li><a href="#" className="hover:text-red-500 transition">手冲器具</a></li>
                            <li><a href="#" className="hover:text-red-500 transition">咖啡机</a></li>
                            <li><a href="#" className="hover:text-red-500 transition">礼品套装</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-bold mb-4">关于我们</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-red-500 transition">品牌故事</a></li>
                            <li><a href="#" className="hover:text-red-500 transition">咖啡文化</a></li>
                            <li><a href="#" className="hover:text-red-500 transition">线下门店</a></li>
                            <li><a href="#" className="hover:text-red-500 transition">加入我们</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-bold mb-4">客户服务</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-red-500 transition">配送说明</a></li>
                            <li><a href="#" className="hover:text-red-500 transition">退换政策</a></li>
                            <li><a href="#" className="hover:text-red-500 transition">常见问题</a></li>
                            <li><a href="#" className="hover:text-red-500 transition">联系我们</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="pt-8 border-t text-center text-sm">
                    <p>&copy; 2023 CaféBliss 咖啡商城. 保留所有权利.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;