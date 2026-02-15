import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useCart } from "./CartContext";


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


  return (
    <>
      <nav className="bg-white py-4 px-8 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <Link to="/" className="flex items-center space-x-2">
          <i className="fas fa-coffee text-red-500 text-2xl" />
          <span className="text-xl font-bold">CaféBliss</span>
        </Link>

        <div className="hidden md:flex space-x-8">
          <CustomerLink
            to="/"
            className="text-black hover:text-red-500 transition"
          >
            Home
          </CustomerLink>
          <CustomerLink
            to="/products"
            className="text-black hover:text-red-500 transition"
          >
            Shop
          </CustomerLink>
          <CustomerLink
            to="/about"
            className="text-black hover:text-red-500 transition"
          >
            About Us
          </CustomerLink>
        </div>

        <div className="flex items-center space-x-6">
          {/* 搜索图标：改为普通 Link，避免出现激活下划线 */}
          <Link
            to="/products"
            className="text-black hover:text-red-500 transition"
          >
            <i className="fas fa-search"></i>
          </Link>
          <CustomerLink
            to={isAuthenticated ? "/wishlist" : "/login"}
            className="text-black hover:text-red-500 transition"
          >
            <i className="fas fa-heart"></i>
          </CustomerLink>
          <CustomerLink
            to={isAuthenticated ? "/profile" : "/login"}
            className="text-black hover:text-red-500 transition"
          >
            <i className="fas fa-user"></i>
          </CustomerLink>

          {isAuthenticated && (
            <button
              onClick={() => {
                // Simple logout trigger
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

          <CustomerLink
            to="/myshoppingcart"
            className="text-black hover:text-red-500 transition relative"
          >
            <i className="fas fa-shopping-bag"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </CustomerLink>
          <button className="md:hidden text-black">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
