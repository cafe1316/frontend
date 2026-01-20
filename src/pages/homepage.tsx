
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";

// 首页组件
const HomePage = () => {
  return (
    <div className="gradient-bg">
      <div className="mx-auto max-w-[1440px] h-[1024px] bg-white shadow-lg flex flex-col overflow-hidden">
        <main className="flex-1">
          {/* hero area */}
          <section className="relative h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80')",
              }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-start px-12 md:px-24">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Taste Life
                <br />
                Start with a good cup of coffee
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 max-w-lg">
                Explore our carefully selected coffee beans and experience
                unique flavors from around the world.
              </p>
              <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition transform hover:scale-105">
                Shop Now
              </button>
            </div>
          </section>

          {/*<!-- 特色产品类别 -->*/}
          <section className="py-16 px-8 md:px-16">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Explore Our Collections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition card-hover">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                    alt="咖啡豆"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Premium Coffee Beans
                  </h3>
                  <p className="text-sm mb-4">
                    Selected coffee beans from top global regions, bringing you
                    a pure taste experience.
                  </p>
                  <a href="#" className="text-red-500 flex items-center">
                    View Collection <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition card-hover">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                    alt="冲泡装备"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Brewing Gear</h3>
                  <p className="text-sm mb-4">
                    Professional brewing equipment, allowing you to enjoy
                    cafe-level taste at home.
                  </p>
                  <a href="#" className="text-red-500 flex items-center">
                    View Collection <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition card-hover">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                    alt="礼品套装"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Gift Sets</h3>
                  <p className="text-sm mb-4">
                    Carefully curated coffee gift sets, the perfect choice for
                    loved ones and friends.
                  </p>
                  <a href="#" className="text-red-500 flex items-center">
                    View Collection <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/*<!-- popular product -->*/}
          <section className="py-12 px-8 md:px-16 bg-gray-50">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Best Sellers</h2>
              <a href="#" className="text-red-500 flex items-center">
                View All <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="flex space-x-6 overflow-x-auto product-container pb-4">
              {/*<!-- 产品1 -->*/}
              <div className="min-w-[280px] bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                <div className="relative mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                    alt="埃塞俄比亚耶加雪菲"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-bold mb-1">Ethiopia Yirgacheffe</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Floral, fruity, clean finish
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">¥128</span>
                  <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>

              {/*<!-- 产品2 -->*/}
              <div className="min-w-[280px] bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                <div className="mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1572286258217-215cf8e294f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                    alt="手冲咖啡套装"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-bold mb-1">Pour-over Coffee Set</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Essential starter kit
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">¥399</span>
                  <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>

              {/*<!-- 产品3 -->*/}
              <div className="min-w-[280px] bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                <div className="relative mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                    alt="冷萃咖啡瓶"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-bold mb-1">Cold Brew Bottle</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Portable cold brew maker
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">¥159</span>
                  <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>

              {/*<!-- 产品4 -->*/}
              <div className="min-w-[280px] bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                <div className="mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                    alt="哥伦比亚咖啡豆"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-bold mb-1">Colombia Coffee Beans</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Balanced, caramel sweetness
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">¥118</span>
                  <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
