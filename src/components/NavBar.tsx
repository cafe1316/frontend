import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useCart } from "./CartContext";
import toast from "react-hot-toast";


const CustomerLink = ({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const location = useLocation();

  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        let active = isActive;

        if (active && to.includes("?")) {
          const toParams = new URLSearchParams(to.split("?")[1]);
          const currentParams = new URLSearchParams(location.search);

          toParams.forEach((value, key) => {
            if (currentParams.get(key) !== value) {
              active = false;
            }
          });
        }

        return `${active
          ? "text-red-500  border-red-500 border-b-2"
          : "text-black border-transparent hover:text-red-500"
          } ${className}`;
      }}
    >
      {children}
    </NavLink>
  );
};

const NavBar: React.FC = () => {
  // 使用全局 AuthContext，状态变化时组建会自动更新
  const { isAuthenticated } = useAuth();
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // 关闭菜单的辅助函数
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm relative">
      <div className="py-4 px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <i className="fas fa-coffee text-red-500 text-2xl" />
          <span className="text-xl font-bold">CaféBliss</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <CustomerLink to="/" className="text-black hover:text-red-500 transition">
            Home
          </CustomerLink>
          <CustomerLink to="/products" className="text-black hover:text-red-500 transition">
            Shop
          </CustomerLink>
          <CustomerLink to="/about" className="text-black hover:text-red-500 transition">
            About Us
          </CustomerLink>
        </div>

        <div className="flex items-center space-x-6">
          {/* 搜索图标 */}
          <Link to="/products" className="text-black hover:text-red-500 transition">
            <i className="fas fa-search"></i>
          </Link>

          {/* Wishlist */}
          <button
            onClick={() => toast('Wishlist feature coming soon!', { icon: '❤️' })}
            className="text-black hover:text-red-500 transition cursor-pointer"
          >
            <i className="fas fa-heart"></i>
          </button>

          {/* Profile */}
          <CustomerLink to={isAuthenticated ? "/profile" : "/login"} className="text-black hover:text-red-500 transition">
            <i className="fas fa-user"></i>
          </CustomerLink>

          {isAuthenticated && (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                window.location.href = "/";
              }}
              className="text-black hover:text-red-500 transition"
              title="Log Out"
            >
              <i className="fas fa-sign-out-alt"></i>
            </button>
          )}

          {/* Cart */}
          <CustomerLink to="/myshoppingcart" className="text-black hover:text-red-500 transition relative">
            <i className="fas fa-shopping-bag"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </CustomerLink>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-8 flex flex-col space-y-4 border-t border-gray-100 animate-slide-down">
          <Link
            to="/"
            className="text-black hover:text-red-500 transition text-lg font-medium"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-black hover:text-red-500 transition text-lg font-medium"
            onClick={closeMenu}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-black hover:text-red-500 transition text-lg font-medium"
            onClick={closeMenu}
          >
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
