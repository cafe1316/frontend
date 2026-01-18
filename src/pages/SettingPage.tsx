import React from 'react'
import AccountSideBar from '../components/AccountSideBar'

const SettingPage = () => {
  return (
    <>
        <main className="flex-1 py-8 px-4 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-8">Account Settings</h1>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* 左侧菜单 */}
                    <AccountSideBar />

                    {/* 右侧内容 */}
                    <div className="md:w-3/4">
                        {/* 设置选项卡 */}
                        <div className="bg-white rounded-xl shadow-sm mb-6">
                            <div className="border-b">
                                <div className="flex flex-wrap">
                                    <button className="py-4 px-6 focus:outline-none active-tab font-medium">
                                        个人资料
                                    </button>
                                    <button
                                        className="py-4 px-6 focus:outline-none text-gray-500 hover:text-red-500 font-medium">
                                        安全设置
                                    </button>
                                </div>
                            </div>

                            {/* 个人资料表单 */}
                            <div className="p-6">
                                <form>
                                    {/* 头像设置 */}
                                    <div
                                        className="flex flex-col md:flex-row items-start md:items-center mb-8 pb-6 border-b">
                                        <label className="w-32 text-gray-700 font-medium mb-2 md:mb-0">头像</label>
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                <div className="w-20 h-20 rounded-full overflow-hidden mr-6">
                                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1224&q=80"
                                                        alt="用户头像" className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <button type="button"
                                                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition mb-2 block">
                                                        更换头像
                                                    </button>
                                                    <p className="text-gray-500 text-sm">推荐使用正方形图片，JPG/PNG格式，不超过2MB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 基本信息 */}
                                    <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                                        <label className="w-32 text-gray-700 font-medium mb-2 md:mb-0">用户名</label>
                                        <div className="flex-1">
                                            <input type="text" value="张明"
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                                        <label className="w-32 text-gray-700 font-medium mb-2 md:mb-0">昵称</label>
                                        <div className="flex-1">
                                            <input type="text" value="咖啡爱好者"
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                                        <label className="w-32 text-gray-700 font-medium mb-2 md:mb-0">性别</label>
                                        <div className="flex-1">
                                            <div className="flex space-x-4">
                                                <label className="flex items-center">
                                                    <input type="radio" name="gender" value="male" checked
                                                        className="mr-2 text-red-500 focus:ring-red-500" />
                                                    <span>男</span>
                                                </label>
                                                <label className="flex items-center">
                                                    <input type="radio" name="gender" value="female"
                                                        className="mr-2 text-red-500 focus:ring-red-500" />
                                                    <span>女</span>
                                                </label>
                                                <label className="flex items-center">
                                                    <input type="radio" name="gender" value="other"
                                                        className="mr-2 text-red-500 focus:ring-red-500" />
                                                    <span>不愿透露</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                                        <label className="w-32 text-gray-700 font-medium mb-2 md:mb-0">生日</label>
                                        <div className="flex-1">
                                            <input type="date" value="1990-01-15"
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                                        <label className="w-32 text-gray-700 font-medium mb-2 md:mb-0">手机号</label>
                                        <div className="flex-1">
                                            <input type="tel" value="138****1234" disabled
                                                className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-500" />
                                            <p className="text-gray-500 text-sm mt-1">手机号已绑定，如需修改请前往安全设置</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                                        <label className="w-32 text-gray-700 font-medium mb-2 md:mb-0">邮箱</label>
                                        <div className="flex-1">
                                            <input type="email" value="zhangming@example.com"
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                                        <label className="w-32 text-gray-700 font-medium mb-2 md:mb-0">个人简介</label>
                                        <div className="flex-1">
                                            <textarea
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none h-24">热爱咖啡文化，喜欢品尝各国精品咖啡豆，闲暇时光最爱手冲一杯咖啡，享受生活的慢节奏。</textarea>
                                            <p className="text-gray-500 text-sm mt-1">最多200字</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-start md:items-center">
                                        <div className="w-32"></div>
                                        <div className="flex-1">
                                            <button type="submit"
                                                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                                                保存修改
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* 账户保护状态 */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-lg font-bold mb-6">账户保护状态</h2>

                            <div className="space-y-4">
                                {/* 手机绑定 */}
                                <div className="flex justify-between items-center py-3 border-b">
                                    <div>
                                        <h3 className="font-medium">手机绑定</h3>
                                        <p className="text-gray-500 text-sm">已绑定：138****1234</p>
                                    </div>
                                    <button className="text-red-500 hover:underline">
                                        修改
                                    </button>
                                </div>

                                {/* 邮箱验证 */}
                                <div className="flex justify-between items-center py-3 border-b">
                                    <div>
                                        <h3 className="font-medium">邮箱验证</h3>
                                        <p className="text-gray-500 text-sm">已验证：zhangming@example.com</p>
                                    </div>
                                    <button className="text-red-500 hover:underline">
                                        修改
                                    </button>
                                </div>

                                {/* 登陆密码 */}
                                <div className="flex justify-between items-center py-3 border-b">
                                    <div>
                                        <h3 className="font-medium">登录密码</h3>
                                        <p className="text-gray-500 text-sm">建议定期修改密码，提高账户安全性</p>
                                    </div>
                                    <button className="text-red-500 hover:underline">
                                        修改
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default SettingPage