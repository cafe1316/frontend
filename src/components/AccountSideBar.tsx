import { Link } from 'react-router-dom'


const AccountSideBar = () => {
  return (
    <>
        <div className="md:w-1/4">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mb-4">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1224&q=80" alt="hero image" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="font-bold text-lg">Ming Zhang</h2>
                    <p className="text-gray-500 text-sm">zhangming@example.com</p>
                </div>
                
                <div className="border-t pt-4">
                    <ul className="space-y-1">
                        <li className="py-2 px-3 rounded hover:bg-gray-50">
                            <Link to="/profile" className="block text-gray-700 hover:text-red-500">
                                <i className="fas fa-user-circle mr-2"></i> Profile
                            </Link>
                        </li>
                        <li className="py-2 px-3 rounded active-menu">
                            <Link to="/myorders" className="block">
                                <i className="fas fa-shopping-basket mr-2"></i> My Orders
                            </Link>
                        </li>
                        <li className="py-2 px-3 rounded hover:bg-gray-50">
                            <Link to="/myshoppingcart" className="block text-gray-700 hover:text-red-500">
                                <i className="fas fa-shopping-cart mr-2"></i> Cart
                                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 ml-2">3</span>
                            </Link>
                        </li>
                        <li className="py-2 px-3 rounded hover:bg-gray-50">
                            <Link to="/wishlist" className="block text-gray-700 hover:text-red-500">
                                <i className="fas fa-heart mr-2"></i> Wishlist
                                <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5 ml-2">5</span>
                            </Link>
                        </li>
                        <li className="py-2 px-3 rounded hover:bg-gray-50">
                            <Link to="/address" className="block text-gray-700 hover:text-red-500">
                                <i className="fas fa-map-marker-alt mr-2"></i> Address
                            </Link>
                        </li>
                        <li className="py-2 px-3 rounded hover:bg-gray-50">
                            <Link to="/paymethod" className="block text-gray-700 hover:text-red-500">
                                <i className="fas fa-credit-card mr-2"></i> Payment
                            </Link>
                        </li>
                        <li className="py-2 px-3 rounded hover:bg-gray-50">
                            <Link to="/setting" className="block text-gray-700 hover:text-red-500">
                                <i className="fas fa-cog mr-2"></i> Settings
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold mb-4">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">If you have any questions about your order, please contact our support team.</p>
                <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">
                    Contact Support
                </button>
            </div>
        </div>
    </>
  )
}

export default AccountSideBar