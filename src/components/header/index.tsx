import React from "react";

const Header: React.FC = () => {
    return (
        <>
            <nav className="bg-white py-4 px-8 flex items-center justify-between sticky top-0 z-50 shadow-sm">
                <div className="flex items-center space-x-2">
                    <i className="fas fa-coffee text-red-500 text-2xl"></i>
                    <span className="text-xl font-bold">CaféBliss</span>
                </div>
                
                <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-black hover:text-red-500 transition">首页</a>
                    <a href="#" className="text-black hover:text-red-500 transition">咖啡系列</a>
                    <a href="#" className="text-black hover:text-red-500 transition">精选周边</a>
                    <a href="#" className="text-black hover:text-red-500 transition">关于我们</a>
                </div>
                
                <div className="flex items-center space-x-6">
                    <a href="#" className="text-black hover:text-red-500 transition">
                        <i className="fas fa-search"></i>
                    </a>
                    <a href="#" className="text-black hover:text-red-500 transition">
                        <i className="fas fa-user"></i>
                    </a>
                    <a href="#" className="text-black hover:text-red-500 transition relative">
                        <i className="fas fa-shopping-bag"></i>
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                    </a>
                    <button className="md:hidden text-black">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Header;