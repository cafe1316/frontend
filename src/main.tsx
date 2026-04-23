import { StrictMode } from "react";
import { Toaster } from 'react-hot-toast';
import { createRoot } from "react-dom/client";
import "./global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/HomePage";
import Products from "./pages/ProductsPage";
import Login from "./pages/LoginPage";
import ProductDetail from "./pages/ProductDetailPage";
import Address from "./pages/Address";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";
import PayMethod from "./pages/PayMethod";
import OrderComplete from "./pages/OrderComplete";
import MyShoppingCart from "./pages/MyShoppingCart";
import Profile from "./pages/Profile";
import SettingPage from "./pages/SettingPage";
import WishList from "./pages/WishList";
import OrderDetail from "./pages/OrderDetail";
import { AuthProvider } from "./components/AuthContext";
import { CartProvider } from "./components/CartContext";
import AboutPage from "./pages/AboutPage";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster
      position="top-center"
      toastOptions={{ duration: 4000, style: { maxWidth: '420px' } }}
    />
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/address" element={<Address />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/myorders" element={<MyOrders />} />
                <Route path="/paymethod" element={<PayMethod />} />
                <Route path="/ordercomplete" element={<OrderComplete />} />
                <Route path="/order/:id" element={<OrderDetail />} />
                <Route path="/myshoppingcart" element={<MyShoppingCart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/setting" element={<SettingPage />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/about" element={<AboutPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>,
);
