import { signInWithRedirect, getRedirectResult } from "firebase/auth";
import { auth, provider } from "../../firebase"; // 注意你的路径
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        signInWithRedirect(auth, provider);
    };

    useEffect(() => {
        getRedirectResult(auth)
        .then(async (result) => {
            if (result?.user) {
            const token = await result.user.getIdToken();
            const res = await axios.post("/api/auth/google", { token });

            localStorage.setItem("token", res.data.token);
            navigate("/");
            }
        })
        .catch((err) => {
            console.error("Google 登录失败", err);
        });
    }, []);
    return (
        <div className="gradient-bg min-h-screen">
            <div className="mx-auto max-w-[1440px] bg-white shadow-lg min-h-screen flex flex-col">
                {/* <!-- 主体内容 --> */}
                <main className="flex-1 py-16 px-4 md:px-8">
                    <div className="max-w-2xl mx-auto">
                        {/* <!-- 登录标题 --> */}
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold mb-2">欢迎回来</h1>
                            <p className="text-gray-600">登录您的 CaféBliss 账号</p>
                        </div>
                        
                        {/* <!-- 登录表单 --> */}
                        <div className="bg-white rounded-xl shadow-sm p-8">
                            <form>
                                {/* <!-- 用户名/邮箱输入框 --> */}
                                <div className="mb-4">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                        用户名或邮箱
                                    </label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                            <i className="fas fa-user"></i>
                                        </span>
                                        <input type="text" id="username" name="username" 
                                            className="form-input w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                                            placeholder="请输入用户名或邮箱"/>
                                    </div>
                                </div>
                                
                                {/* <!-- 密码输入框 --> */}
                                <div className="mb-6">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                        密码
                                    </label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                            <i className="fas fa-lock"></i>
                                        </span>
                                        <input type="password" id="password" name="password" 
                                            className="htmlForm-input w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                                            placeholder="请输入密码"/>
                                    </div>
                                </div>
                                
                                {/* <!-- 记住我和忘记密码 --> */}
                                <div className="flex items-center justify-between mb-6">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded text-red-500 focus:ring-red-500"/>
                                        <span className="ml-2 text-sm text-gray-600">记住我</span>
                                    </label>
                                    <a href="#" className="text-sm text-red-500 hover:text-red-600">忘记密码？</a>
                                </div>
                                
                                {/* <!-- 登录按钮 --> */}
                                <button type="submit" className="w-full bg-red-500 text-gray-700 py-2 px-4 rounded-lg hover:bg-red-600 transition transform hover:scale-105">
                                    登录
                                </button>
                            </form>
                            
                            {/* <!-- 分割线 --> */}
                            <div className="divider my-8">
                                <span className="px-2 text-sm">或</span>
                            </div>
                            
                            {/* <!-- 社交媒体登录 --> */}
                            <button onClick={handleGoogleLogin} className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition mb-4 flex items-center justify-center">
                                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2"/>
                                使用 Google 账号登录
                            </button>
                            
                            {/* <!-- 注册入口 --> */}
                            <p className="text-center text-sm text-gray-600 mt-6">
                                还没有账号？
                                <a href="#" className="text-red-500 hover:text-red-600">立即注册</a>
                            </p>
                        </div>
                        
                        {/* <!-- 安全提示 --> */}
                        <div className="mt-8 text-center text-xs text-gray-500">
                            <p>登录即表示您同意我们的</p>
                            <p className="mt-1">
                                <a href="#" className="text-red-500 hover:text-red-600">服务条款</a>
                                和
                                <a href="#" className="text-red-500 hover:text-red-600">隐私政策</a>
                            </p>
                        </div>
                    </div>
                </main>
                
            </div>
        </div>
    );
};

export default LoginPage;