import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import { useEffect, useState } from 'react'

interface PopularProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}


function App() {
  const [popularProducts, setPopularProducts] = useState<PopularProduct[]>([]);

  useEffect(() => { 
    const fetchPopularProducts = async () => {
      const response = await fetch('http://localhost:8080/v1/popularProducts');
      const data = await response.json();
      console.log(data);
      setPopularProducts(data.products);
    };
    fetchPopularProducts();
  }, []);

  return (
    <div className="gradient-bg">
      <div className="mx-auto max-w-[1440px] h-[1024px] bg-white shadow-lg flex flex-col overflow-hidden">
        <Header />
        {/* 畅销产品 */}
        <div className="py-12 px-8 md:px-16 bg-gray-50">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">畅销产品</h2>
            <a href="#" className="text-red-500 flex items-center">
              查看全部 <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>

          <div className="flex space-x-6 overflow-x-auto product-container pb-4">
            {/* 产品1 */}
            {popularProducts.map((product: PopularProduct) => (
              <div key={product.id} className="min-w-[280px] bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                <div className="relative mb-4">
                <img src={product.image} alt="埃塞俄比亚耶加雪菲" className="w-full h-48 object-cover rounded-lg" />
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">热卖</span>
              </div>
              <h3 className="font-bold mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold">¥{product.price}</span>
                <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                  <i className="fas fa-plus">购买</i>
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
