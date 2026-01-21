import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 阻止表单默认提交刷新页面
    // 这里可以添加调用后端 API 的逻辑
    console.log("Logging in with:", username, password);

    // 假设登录成功，跳转到首页
    navigate("/");
  };

  return (
    /* 主体内容 */
    <main className="flex-1 py-16 px-4 md:px-8">
      <div className="max-w-md mx-auto">
        {/* 登陆标题 */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-600">Login to your CaféBliss account</p>
        </div>

        {/* 登陆表单 */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit}>
            {/* 用户名/邮箱输入框 */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username or Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-field pl-10"
                  placeholder="Enter username or email"
                />
              </div>
            </div>

            {/* 密码输入框 */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-10"
                  placeholder="Enter password"
                />
              </div>
            </div>

            {/* 记住我/忘记密码 */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded text-red-500 focus:ring-red-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-red-500 hover:text-red-600">
                Forgot password?
              </a>
            </div>

            {/* 登录按钮 */}
            <button
              type="submit"
              className="btn-primary w-full py-2 px-4 rounded-lg"
            >
              Login
            </button>
          </form>

          {/* 分割线 */}
          <div className="divider my-8">
            <span className="px-2 text-sm">OR</span>
          </div>

          {/* 社交媒体登陆 */}
          <button className="btn-secondary w-full py-2 px-4 rounded-lg mb-4 flex items-center justify-center">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Login with Google
          </button>

          {/* 注册入口 */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?
            <a href="#" className="text-red-500 hover:text-red-600">
              Register Now
            </a>
          </p>
        </div>

        {/* 安全提示 */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>By logging in, you agree to our</p>
          <p className="mt-1">
            <a href="#" className="underline hover:text-gray-700">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-gray-700">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
