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
                    <p className="text-sm mb-4">We are committed to providing you with the highest quality coffee experience, from selected coffee beans around the world to professional coffee equipment.</p>
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
                    <h3 className="font-bold mb-4">Collections</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-red-500 transition">Coffee Beans</a></li>
                        <li><a href="#" className="hover:text-red-500 transition">Brewing Gear</a></li>
                        <li><a href="#" className="hover:text-red-500 transition">Coffee Machines</a></li>
                        <li><a href="#" className="hover:text-red-500 transition">Gift Sets</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="font-bold mb-4">About Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-red-500 transition">Brand Story</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="font-bold mb-4">Customer Service</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-red-500 transition">Shipping Info</a></li>
                        <li><a href="#" className="hover:text-red-500 transition">Returns Policy</a></li>
                        <li><a href="#" className="hover:text-red-500 transition">FAQ</a></li>
                        <li><a href="#" className="hover:text-red-500 transition">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="pt-8 border-t text-center text-sm">
                <p>&copy; 2023 CaféBliss Coffee Store. All rights reserved.</p>
            </div>
        </footer>
        </>
    );
};

export default Footer;