import './App.css'
//import Header from './components/header'
//import Footer from './components/footer'

function App() {


  return (
    <body>
      <body className="gradient-bg">
        <div className="mx-auto max-w-[1440px] h-[1024px] bg-white shadow-lg flex flex-col overflow-hidden">
         
          <main className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
              {/*-- hero area */}
              <section className="relative h-[500px]">
                  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80')"}}></div>
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-start px-12 md:px-24">
                      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">品味生活<br/>从一杯好咖啡开始</h1>
                      <p className="text-lg md:text-xl text-white mb-8 max-w-lg">探索我们精心挑选的咖啡豆，感受来自世界各地的独特风味。</p>
                      <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition transform hover:scale-105">
                          立即选购
                      </button>
                  </div>
              </section>
              
              {/*-- 特色产品类别 */}
              <section className="py-16 px-8 md:px-16">
                  <h2 className="text-3xl font-bold mb-12 text-center">探索我们的产品系列</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition card-hover">
                          <div className="h-48 overflow-hidden">
                              <img src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="咖啡豆" className="w-full h-full object-cover hover:scale-105 transition duration-500"/>
                          </div>
                          <div className="p-6">
                              <h3 className="text-xl font-bold mb-2">精选咖啡豆</h3>
                              <p className="text-sm mb-4">来自全球顶级咖啡产区的精选咖啡豆，为您带来纯正的味觉体验。</p>
                              <a href="#" className="text-red-500 flex items-center">
                                  浏览系列 <i className="fas fa-arrow-right ml-2"></i>
                              </a>
                          </div>
                      </div>
                      
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition card-hover">
                          <div className="h-48 overflow-hidden">
                              <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="冲泡装备" className="w-full h-full object-cover hover:scale-105 transition duration-500"/>
                          </div>
                          <div className="p-6">
                              <h3 className="text-xl font-bold mb-2">冲泡装备</h3>
                              <p className="text-sm mb-4">专业咖啡冲泡器具，让您在家也能享受咖啡馆级别的味觉体验。</p>
                              <a href="#" className="text-red-500 flex items-center">
                                  浏览系列 <i className="fas fa-arrow-right ml-2"></i>
                              </a>
                          </div>
                      </div>
                      
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition card-hover">
                          <div className="h-48 overflow-hidden">
                              <img src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="礼品套装" className="w-full h-full object-cover hover:scale-105 transition duration-500"/>
                          </div>
                          <div className="p-6">
                              <h3 className="text-xl font-bold mb-2">礼品套装</h3>
                              <p className="text-sm mb-4">精心搭配的咖啡礼品套装，是送给爱人和朋友的完美礼物选择。</p>
                              <a href="#" className="text-red-500 flex items-center">
                                  浏览系列 <i className="fas fa-arrow-right ml-2"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </section>
              
              {/*-- 畅销产品 */}
              <section className="py-12 px-8 md:px-16 bg-gray-50">
                  <div className="flex justify-between items-center mb-8">
                      <h2 className="text-2xl font-bold">畅销产品</h2>
                      <a href="#" className="text-red-500 flex items-center">
                          查看全部 <i className="fas fa-arrow-right ml-2"></i>
                      </a>
                  </div>
                  
                  <div className="flex space-x-6 overflow-x-auto product-container pb-4">
                      {/*-- 产品1 */}
                      <div className="min-w-[280px] bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                          <div className="relative mb-4">
                              <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="埃塞俄比亚耶加雪菲" className="w-full h-48 object-cover rounded-lg"/>
                              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">热卖</span>
                          </div>
                          <h3 className="font-bold mb-1">埃塞俄比亚耶加雪菲</h3>
                          <p className="text-sm text-gray-600 mb-2">花香果酸，清爽回甘</p>
                          <div className="flex justify-between items-center">
                              <span className="font-bold">¥128</span>
                              <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                  <i className="fas fa-plus"></i>
                              </button>
                          </div>
                      </div>
                      
                      {/*-- 产品2 */}
                      <div className="min-w-[280px] bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                          <div className="mb-4">
                              <img src="https://images.unsplash.com/photo-1572286258217-215cf8e294f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="手冲咖啡套装" className="w-full h-48 object-cover rounded-lg"/>
                          </div>
                          <h3 className="font-bold mb-1">手冲咖啡套装</h3>
                          <p className="text-sm text-gray-600 mb-2">入门级必备组合</p>
                          <div className="flex justify-between items-center">
                              <span className="font-bold">¥399</span>
                              <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                  <i className="fas fa-plus"></i>
                              </button>
                          </div>
                      </div>
                      
                      
                      <div className="min-w-[280px] bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                          <div className="relative mb-4">
                              <img src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="冷萃咖啡瓶" className="w-full h-48 object-cover rounded-lg"/>
                              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">新品</span>
                          </div>
                          <h3 className="font-bold mb-1">冷萃咖啡瓶</h3>
                          <p className="text-sm text-gray-600 mb-2">便携式冷萃咖啡制作</p>
                          <div className="flex justify-between items-center">
                              <span className="font-bold">¥159</span>
                              <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                  <i className="fas fa-plus"></i>
                              </button>
                          </div>
                      </div>
                      
                      {/*-- 产品4 */}
                      <div className="min-w-[280px] bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
                          <div className="mb-4">
                              <img src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="哥伦比亚咖啡豆" className="w-full h-48 object-cover rounded-lg"/>
                          </div>
                          <h3 className="font-bold mb-1">哥伦比亚咖啡豆</h3>
                          <p className="text-sm text-gray-600 mb-2">平衡醇厚，焦糖甜感</p>
                          <div className="flex justify-between items-center">
                              <span className="font-bold">¥118</span>
                              <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                                  <i className="fas fa-plus"></i>
                              </button>
                          </div>
                      </div>
                  </div>
              </section>
              
              {/*-- caffee culture */}
              <section className="py-16 px-8 md:px-16">
                  <h2 className="text-3xl font-bold mb-12 text-center">咖啡知识与体验</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="flex flex-col space-y-4">
                          <img src="https://images.unsplash.com/photo-1520903060300-8c45a14029e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="咖啡工坊" className="rounded-xl h-64 object-cover"/>
                          <h3 className="text-xl font-bold">咖啡工坊</h3>
                          <p className="text-sm">加入我们的线下咖啡工坊，从专业咖啡师那里学习冲泡技巧，探索咖啡的无限可能。</p>
                          <a href="#" className="text-red-500 flex items-center">
                              了解更多 <i className="fas fa-arrow-right ml-2"></i>
                          </a>
                      </div>
                      
                      <div className="flex flex-col space-y-4">
                          <img src="https://images.unsplash.com/photo-1450353301998-196516b4a8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" alt="咖啡知识" className="rounded-xl h-64 object-cover"/>
                          <h3 className="text-xl font-bold">咖啡科普</h3>
                          <p className="text-sm">通过我们的咖啡百科，了解咖啡从种植到杯中的全过程，成为一个真正的咖啡达人。</p>
                          <a href="#" className="text-red-500 flex items-center">
                              了解更多 <i className="fas fa-arrow-right ml-2"></i>
                          </a>
                      </div>
                  </div>
              </section>
              
              {/*-- 订阅区域 */}
              <section className="py-16 px-8 md:px-16 bg-gray-50">
                  <div className="max-w-2xl mx-auto text-center">
                      <h2 className="text-2xl font-bold mb-4">订阅我们的咖啡文化通讯</h2>
                      <p className="mb-8">获取最新产品信息、优惠活动和咖啡文化内容</p>
                      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                          <input type="email" placeholder="您的邮箱地址" className="px-6 py-3 flex-1 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500"/>
                          <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition">
                              订阅
                          </button>
                      </div>
                  </div>
              </section>
          </main>
          
        </div>
      </body>
    </body>
  )
}

export default App
