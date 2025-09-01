import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

import Home from './components/pages/homepage'
import Products from './components/pages/ProductsPage';
import Login from './components/pages/LoginPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        {/* 你可以继续加更多页面 */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
