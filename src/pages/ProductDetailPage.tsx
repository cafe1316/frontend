
const ProductDetailPage = () => {
  return (
    <>
      <main className="flex-1">
        {/* 面包屑导航 */}
        <div className="py-3 px-8 bg-gray-50 text-sm">
          <div className="container mx-auto">
            <a href="#" className="text-gray-500 hover:text-red-500">
              Home
            </a>
            <span className="mx-2 text-gray-400">/</span>
            <a href="#" className="text-gray-500 hover:text-red-500">
              Coffee Beans
            </a>
            <span className="mx-2 text-gray-400">/</span>
            <a href="#" className="text-gray-500 hover:text-red-500">
              Ethiopia
            </a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Yirgacheffe</span>
          </div>
        </div>

        {/* 产品信息区域 */}
        <section className="container mx-auto py-8 px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* 产品图片区域 */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                  alt="埃塞俄比亚耶加雪菲"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              <div className="grid grid-cols-5 gap-2 mt-4">
                <div className="border-2 border-red-500 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                    alt="埃塞俄比亚耶加雪菲"
                    className="w-full h-16 object-cover"
                  />
                </div>
                <div className="border rounded-lg overflow-hidden hover:border-red-500 cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1587734182619-0f462b2b97c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                    alt="咖啡豆特写"
                    className="w-full h-16 object-cover"
                  />
                </div>
                <div className="border rounded-lg overflow-hidden hover:border-red-500 cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                    alt="咖啡豆特写"
                    className="w-full h-16 object-cover"
                  />
                </div>
                <div className="border rounded-lg overflow-hidden hover:border-red-500 cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1544378382-5e394b6b4230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                    alt="咖啡冲泡效果"
                    className="w-full h-16 object-cover"
                  />
                </div>
                <div className="border rounded-lg overflow-hidden hover:border-red-500 cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1513244608388-32427255be63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                    alt="咖啡冲泡效果"
                    className="w-full h-16 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 产品详细区域 */}
            <div className="md:w-1/2">
              {/* 商品标签和基本信息 */}
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  Ethiopia Yirgacheffe Coffee Beans
                </h1>
                <p className="text-gray-500 mb-3">
                  Premium coffee beans from high-altitude African regions
                </p>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Light Roast
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Ethiopia
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Organic
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-3xl font-bold text-red-500 mr-3">
                    ¥128
                  </span>
                </div>
              </div>

              {/* 规格选择 */}
              <div className="mb-6">
                <h3 className="font-bold mb-3">Size</h3>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 border-2 border-red-500 rounded-full text-red-500 bg-red-50">
                    227g (Half Pound)
                  </button>
                  <button className="px-4 py-2 border rounded-full hover:border-red-500 hover:text-red-500">
                    454g (1 Pound)
                  </button>
                  <button className="px-4 py-2 border rounded-full hover:border-red-500 hover:text-red-500">
                    908g (2 Pounds)
                  </button>
                </div>
              </div>

              {/* 研磨选择 */}
              <div className="mb-6">
                <h3 className="font-bold mb-3">Grind</h3>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 border-2 border-red-500 rounded-full text-red-500 bg-red-50">
                    Whole Bean
                  </button>
                  <button className="px-4 py-2 border rounded-full hover:border-red-500 hover:text-red-500">
                    Coarse (French Press/Cold Brew)
                  </button>
                  <button className="px-4 py-2 border rounded-full hover:border-red-500 hover:text-red-500">
                    Medium (Drip/Pour-over)
                  </button>
                  <button className="px-4 py-2 border rounded-full hover:border-red-500 hover:text-red-500">
                    Fine (Moka Pot/Espresso)
                  </button>
                </div>
              </div>

              {/* 数量选择和购买按钮 */}
              <div className="mb-6">
                <h3 className="font-bold mb-3">Quantity</h3>
                <div className="flex items-center space-x-5">
                  <div className="quantity-selector">
                    <button className="quantity-btn">-</button>
                    <input
                      type="text"
                      value="1"
                      className="quantity-input"
                      readOnly
                    />
                    <button className="quantity-btn">+</button>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mb-8">
                <button className="btn-primary flex-1 py-3 px-6 rounded-full flex items-center justify-center">
                  <i className="fas fa-shopping-cart mr-2"></i>
                  Add to Cart
                </button>

                <button className="btn-base bg-black text-white hover:bg-gray-800 flex-1 py-3 px-6 rounded-full flex items-center justify-center">
                  Buy Now
                </button>
              </div>

              {/* 商品特点简介*/}
              <div className="border-t pt-6">
                <h3 className="font-bold mb-4">Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-red-500 mt-1 mr-3"></i>
                    <span>
                      Distinct citrus and floral flavors with slight berry
                      acidity
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-red-500 mt-1 mr-3"></i>
                    <span>From high-altitude plantations at 1800-2200m</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-red-500 mt-1 mr-3"></i>
                    <span>
                      Carefully selected European sun-dried beans ensuring
                      consistent flavor
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-red-500 mt-1 mr-3"></i>
                    <span>
                      Suitable for pour-over, siphon, and other brewing methods
                      highlighting flavor
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 详细标签页 */}
        <section className="container mx-auto px-4 md:px-8">
          <div className="border-b">
            <div className="flex">
              <button className="py-3 px-6 text-center font-medium tab-active">
                Details
              </button>
              <button className="py-3 px-6 text-center font-medium text-gray-500 hover:text-red-500">
                Specs
              </button>
              <button className="py-3 px-6 text-center font-medium text-gray-500 hover:text-red-500">
                Brewing Guide
              </button>
              <button className="py-3 px-6 text-center font-medium text-gray-500 hover:text-red-500">
                Shipping
              </button>
            </div>
          </div>

          {/* 商品详细内容 */}
          <div className="py-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Product Introduction</h2>

              <div className="mb-10">
                <p className="text-gray-700 mb-4">
                  Yirgacheffe is one of Ethiopia's most famous coffee regions
                  and a representative area for specialty coffee. The coffee
                  beans produced here are world-renowned for their outstanding
                  floral and citrus flavors, regarded by many coffee lovers as
                  the epitome of specialty coffee.
                </p>
                <p className="text-gray-700 mb-4">
                  Our Yirgacheffe coffee beans come from high-altitude
                  plantations at 1800-2200 meters. This high-altitude
                  environment causes the coffee beans to grow slowly, resulting
                  in more complex and rich flavors. The coffee trees grow in an
                  organic natural environment without the use of any chemical
                  fertilizers or pesticides, ensuring the pure quality of the
                  coffee.
                </p>
                <p className="text-gray-700">
                  This coffee uses traditional sun-drying processing, fully
                  preserving the original flavor of the coffee beans. Light
                  roasting perfectly showcases Yirgacheffe's unique flavor
                  characteristics: bright citrus acidity, accompanied by aromas
                  of jasmine and bergamot, with a finish featuring slight
                  caramel sweetness and a tea-like crispness.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <img
                  src="https://images.unsplash.com/photo-1599638075908-9412e9e2e586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                  alt="咖啡种植园"
                  className="rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1504973169753-4c48c9d734d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                  alt="咖啡加工工艺"
                  className="rounded-lg"
                />
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">Flavor Profile</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-xl mb-2">🍋</div>
                    <div className="font-medium">Citrus</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-xl mb-2">🌸</div>
                    <div className="font-medium">Jasmine</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-xl mb-2">🫐</div>
                    <div className="font-medium">Blueberry</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-xl mb-2">🍯</div>
                    <div className="font-medium">Honey</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium mb-2">Acidity</div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1 text-gray-500">
                      <span>Low</span>
                      <span>High</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium mb-2">Body</div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1 text-gray-500">
                      <span>Low</span>
                      <span>High</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium mb-2">Sweetness</div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1 text-gray-500">
                      <span>Low</span>
                      <span>High</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">Specifications</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                    <div className="flex">
                      <span className="w-24 text-gray-500">Origin:</span>
                      <span>Ethiopia Yirgacheffe</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-gray-500">Altitude:</span>
                      <span>1800-2200m</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-gray-500">Varietal:</span>
                      <span>Ethiopia Heirloom</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-gray-500">Process:</span>
                      <span>Natural</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-gray-500">Roast:</span>
                      <span>Light Roast</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-gray-500">Best For:</span>
                      <span>Pour-over, Siphon, Drip</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-gray-500">Shelf Life:</span>
                      <span>12 Months (Unopened)</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-gray-500">Storage:</span>
                      <span>Sealed, cool, dry place</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetailPage;
