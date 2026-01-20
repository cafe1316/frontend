import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/homepage";
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


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products:id" element={<ProductDetail />} /> 
        <Route path="/address" element={<Address />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/paymethod" element={<PayMethod />} />
        <Route path="/ordercomplete" element={<OrderComplete />} />
        <Route path="/myshoppingcart" element={<MyShoppingCart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
