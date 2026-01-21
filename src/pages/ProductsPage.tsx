
export default function ProductsPage() {
  return (
    <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
      {/* 左侧导航栏 */}
      <aside className="w-64 bg-gray-50 p-6 border-r hidden md:block">
        <h2 className="text-lg font-bold mb-6">Categories</h2>

        <div className="mb-8">
          <h3 className="font-medium mb-3 text-sm uppercase text-gray-500">
            Coffee Beans
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="flex items-center justify-between text-red-500"
              >
                <span>All Beans</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  24
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between hover:text-red-500 transition"
              >
                <span>Ethiopia</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  8
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between hover:text-red-500 transition"
              >
                <span>Colombia</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  6
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between hover:text-red-500 transition"
              >
                <span>Guatemala</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  5
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between hover:text-red-500 transition"
              >
                <span>Brazil</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between hover:text-red-500 transition"
              >
                <span>Others</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  2
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="font-medium mb-3 text-sm uppercase text-gray-500">
            Brewing Gear
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="flex items-center justify-between hover:text-red-500 transition"
              >
                <span>All Gear</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  18
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between hover:text-red-500 transition"
              >
                <span>Kettles</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  6
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between hover:text-red-500 transition"
              >
                <span>Drippers</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  4
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between hover:text-red-500 transition"
              >
                <span>Grinders</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  5
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between hover:text-red-500 transition"
              >
                <span>Others</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  3
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="font-medium mb-3 text-sm uppercase text-gray-500">
            Accessories
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="flex items-center justify-between hover:text-red-500 transition"
              >
                <span>All Accessories</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  12
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between hover:text-red-500 transition"
              >
                <span>Cups & Mugs</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  7
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between hover:text-red-500 transition"
              >
                <span>Storage</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between hover:text-red-500 transition"
              >
                <span>Gift Sets</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  2
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* 右侧产品展示区 */}
      <div className="flex-1 flex flex-col">
        {/* 搜索和筛选区域 */}
        <div className="p-6 border-b bg-white">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 mb-6">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search coffee beans, gear or accessories..."
                className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <i className="fas fa-search absolute left-4 top-3 text-gray-400"></i>
            </div>

            <div className="flex space-x-2">
              <button className="bg-white border px-4 py-2 rounded-full hover:bg-gray-50 transition flex items-center space-x-1">
                <span>Sort</span>
                <i className="fas fa-chevron-down text-xs"></i>
              </button>

              <button className="bg-white border px-4 py-2 rounded-full hover:bg-gray-50 transition md:hidden flex items-center space-x-1">
                <span>Filter</span>
                <i className="fas fa-filter text-xs"></i>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
              <span>Coffee Beans</span>
              <button className="ml-2 text-gray-500 hover:text-red-500">
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
              <span>Ethiopia</span>
              <button className="ml-2 text-gray-500 hover:text-red-500">
                <i className="fas fa-times"></i>
              </button>
            </div>

            <button className="text-red-500 text-sm hover:underline">
              Clear All
            </button>
          </div>
        </div>

        {/* 筛选控制面板折叠 */}
        <div className="bg-gray-50 p-4 border-b">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-sm font-medium mb-3">Roast Level</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded text-red-500 focus:ring-red-500"
                  />
                  <span className="text-sm">Light Roast</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded text-red-500 focus:ring-red-500"
                  />
                  <span className="text-sm">Medium Roast</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded text-red-500 focus:ring-red-500"
                  />
                  <span className="text-sm">Dark Roast</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Flavor Notes</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded text-red-500 focus:ring-red-500"
                  />
                  <span className="text-sm">Floral</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded text-red-500 focus:ring-red-500"
                  />
                  <span className="text-sm">Fruity</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded text-red-500 focus:ring-red-500"
                  />
                  <span className="text-sm">Chocolate</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded text-red-500 focus:ring-red-500"
                  />
                  <span className="text-sm">Nutty</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Price Range</h3>
              <div className="px-2">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value="300"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>¥0</span>
                  <span>¥500</span>
                </div>
                <div className="text-center text-sm mt-2">Max: ¥300</div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Other Options</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded text-red-500 focus:ring-red-500"
                  />
                  <span className="text-sm">Organic</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded text-red-500 focus:ring-red-500"
                  />
                  <span className="text-sm">Limited Offer</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded text-red-500 focus:ring-red-500"
                  />
                  <span className="text-sm">New Arrival</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-4 space-x-3">
            <button className="px-4 py-2 border rounded-full hover:bg-gray-100 transition text-sm">
              Reset
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition text-sm">
              Apply
            </button>
          </div>
        </div>

        {/* 产品列表 */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* 产品1 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                alt="埃塞俄比亚耶加雪菲"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <div className="mb-2 flex items-center">
              <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">
                Light
              </span>
              <span className="text-xs text-gray-500">Ethiopia</span>
            </div>
            <h3 className="font-bold mb-1 leading-tight">
              Ethiopia Yirgacheffe
            </h3>
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

          {/* 产品2 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1587734182619-0f462b2b97c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                alt="哥伦比亚咖啡豆"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <div className="mb-2 flex items-center">
              <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">
                Medium
              </span>
              <span className="text-xs text-gray-500">Colombia</span>
            </div>
            <h3 className="font-bold mb-1 leading-tight">Colombia Caldas</h3>
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

          {/* 产品3 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1580933073521-dc49bba0a53a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                alt="巴西咖啡豆"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <div className="mb-2 flex items-center">
              <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">
                Dark
              </span>
              <span className="text-xs text-gray-500">Brazil</span>
            </div>
            <h3 className="font-bold mb-1 leading-tight">
              Brazil Daterra Estate
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Chocolatey, low acidity
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold">¥99</span>
              </div>
              <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          {/* 产品4 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                alt="危地马拉咖啡豆"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <div className="mb-2 flex items-center">
              <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">
                Medium
              </span>
              <span className="text-xs text-gray-500">Guatemala</span>
            </div>
            <h3 className="font-bold mb-1 leading-tight">Guatemala Antigua</h3>
            <p className="text-sm text-gray-600 mb-2">
              Citrus acidity, mild floral
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold">¥138</span>
              <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          {/* 产品5 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                alt="手冲咖啡套装"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <div className="mb-2 flex items-center">
              <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">
                Gear
              </span>
              <span className="text-xs text-gray-500">Pour-over Set</span>
            </div>
            <h3 className="font-bold mb-1 leading-tight">
              Exquisite Pour-over Set
            </h3>
            <p className="text-sm text-gray-600 mb-2">Essential starter kit</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">¥399</span>
              <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          {/* 产品6 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1552346989-e069318e20a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                alt="手动磨豆机"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <div className="mb-2 flex items-center">
              <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">
                Gear
              </span>
              <span className="text-xs text-gray-500">Grinder</span>
            </div>
            <h3 className="font-bold mb-1 leading-tight">
              Wooden Manual Grinder
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Even grind, retro design
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold">¥279</span>
              <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          {/* 产品7 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                alt="冷萃咖啡瓶"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <div className="mb-2 flex items-center">
              <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">
                Gear
              </span>
              <span className="text-xs text-gray-500">Cold Brew</span>
            </div>
            <h3 className="font-bold mb-1 leading-tight">Cold Brew Bottle</h3>
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

          {/* 产品8 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                alt="咖啡杯组合"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <div className="mb-2 flex items-center">
              <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">
                Accessory
              </span>
              <span className="text-xs text-gray-500">Cups</span>
            </div>
            <h3 className="font-bold mb-1 leading-tight">
              Nordic Ceramic Cup Set
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Minimalist design, set of 4
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold">¥199</span>
              <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          {/* 产品9 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1585843736857-9898dd1d6f77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                alt="肯尼亚咖啡豆"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <div className="mb-2 flex items-center">
              <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">
                Light
              </span>
              <span className="text-xs text-gray-500">Kenya</span>
            </div>
            <h3 className="font-bold mb-1 leading-tight">Kenya AA Beans</h3>
            <p className="text-sm text-gray-600 mb-2">
              Bright acidity, berry notes
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold">¥148</span>
              <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          {/* 产品10 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1572286258217-215cf8e294f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                alt="咖啡礼盒"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <div className="mb-2 flex items-center">
              <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">
                Accessory
              </span>
              <span className="text-xs text-gray-500">Gift Box</span>
            </div>
            <h3 className="font-bold mb-1 leading-tight">
              Global Tasting Gift Box
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Selected beans from 4 regions
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold">¥368</span>
              <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          {/* 产品11 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1606486544553-6493c8f11033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                alt="手冲壶"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <div className="mb-2 flex items-center">
              <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">
                Gear
              </span>
              <span className="text-xs text-gray-500">Kettle</span>
            </div>
            <h3 className="font-bold mb-1 leading-tight">Gooseneck Kettle</h3>
            <p className="text-sm text-gray-600 mb-2">Precise flow control</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">¥235</span>
              <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          {/* 产品12 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1580933745196-f8377b2699dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
                alt="埃塞俄比亚西达摩"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute top-2 left-2 bg-white bg-opacity-70 p-1.5 rounded-full hover:bg-opacity-100 transition">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <div className="mb-2 flex items-center">
              <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">
                Light
              </span>
              <span className="text-xs text-gray-500">Ethiopia</span>
            </div>
            <h3 className="font-bold mb-1 leading-tight">Ethiopia Sidamo</h3>
            <p className="text-sm text-gray-600 mb-2">
              Lemon aroma, bright acidity
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold">¥138</span>
              <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>

        {/* 分页 */}
        <div className="bg-white p-6 flex justify-between items-center border-t">
          <div className="text-sm text-gray-500">
            Showing 1-12 of 54 results
          </div>

          <div className="flex space-x-2">
            <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-red-500 hover:text-red-500 transition">
              <i className="fas fa-chevron-left text-xs"></i>
            </button>

            <button className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center">
              1
            </button>

            <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-red-500 hover:text-red-500 transition">
              2
            </button>

            <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-red-500 hover:text-red-500 transition">
              3
            </button>

            <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-red-500 hover:text-red-500 transition">
              <i className="fas fa-chevron-right text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
