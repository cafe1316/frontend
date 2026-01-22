import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
//import axios from "axios";
import { auth, provider } from "../lib/firebase";
import { useAuth } from "../components/AuthContext";

const LoginPage = () => {
  // 状态管理：step 控制当前是输入邮箱还是输入验证码
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<String | null>(null); // 新增错误状态
  const [countdown, setCountdown] = useState(0); // 倒计时
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  // Best Practice: 如果用户已经登录 (有 token)，访问登录页应自动跳转到首页
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true }); // replace: true 防止用户点后退键又回到登录页
    }
  }, [isAuthenticated, navigate]);

  // 处理倒计时逻辑
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // 处理 Google 登录点击
  const handleGoogleLogin = async () => {
    setError(null);
    // 1. 检查 Firebase 是否初始化成功 (消除 TypeScript 报错)
    if (!auth || !provider) {
      console.error("Firebase not initialized. Check environment variables.");
      setError("Firebase 配置缺失，请检查环境变量");
      return;
    }

    try {
      // Best Practice: 使用 Popup 模式，逻辑更线性，无需 useEffect 监听回调
      const result = await signInWithPopup(auth, provider);

      if (result.user) {
        //const token = await result.user.getIdToken();
        // Best Practice Flow (未来后端对接逻辑):
        // 1. const res = await axios.post("/api/auth/google", { token });
        // 2. const { token: appToken, user } = res.data; // 后端返回属于你 App 的 Token 和用户信息
        // 3. login(appToken, user.email);

        // 当前 Mock 逻辑:
        console.log("Google 登录成功 (前端模拟):", result.user.email);
        // 注意：这里我们传入真实的 email，配合 AuthContext 的修改，刷新后也能保留
        login("mock_token_for_frontend_demo", result.user.email || "");
        navigate("/", { replace: true });
      }
    } catch (err) {
      console.error("Google Login failed", err);
      setError("Google Login failed. Please try again.");
    }
  };

  // 发送验证码 (Step 1)
  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      // 调用后端 API 发送邮件 (Resend)
      // const res = await axios.post("/api/auth/send-otp", { email });

      // 模拟成功
      console.log("Sending code to:", email);
      setStep("otp");
      setCountdown(60); // 60秒倒计时
    } catch (error) {
      console.error("Failed to send code", error);
      setError("send code failed. please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // 验证验证码并登录 (Step 2)
  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      // 调用后端 API 验证 Code
      // const res = await axios.post("/api/auth/verify-otp", { email, otp });
      // localStorage.setItem("token", res.data.token);

      console.log("Verifying code:", otp);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Invalid code", error);
      setError("Invalid code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="gradient-bg min-h-screen">
      <div className="mx-auto max-w-[1440px] bg-white shadow-lg min-h-screen flex flex-col">
        {/* 主体内容 */}
        <main className="flex-1 py-16 px-4 md:px-8">
          <div className="max-w-md mx-auto">
            {/* 登陆标题 */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">
                {step === "email" ? "Welcome Back" : "Check Your Email"}
              </h1>
              <p className="text-gray-600">
                {step === "email"
                  ? "Login or Register with your email"
                  : `We've sent a code to ${email}`}
              </p>
            </div>

            {/* 登陆表单 */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              {/* 错误提示 Banner */}
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg flex items-center">
                  <i className="fas fa-exclamation-circle mr-2"></i>
                  {error}
                </div>
              )}

              {step === "email" ? (
                // Step 1: 输入邮箱
                <form onSubmit={handleSendCode}>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError(null);
                        }}
                        className="form-input w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Sending..." : "Continue with Email"}
                  </button>
                </form>
              ) : (
                // Step 2: 输入验证码
                <form onSubmit={handleVerifyCode}>
                  <div className="mb-6">
                    <label
                      htmlFor="otp"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Verification Code
                    </label>
                    <input
                      type="text"
                      id="otp"
                      required
                      autoFocus
                      value={otp}
                      onChange={(e) => {
                        setOtp(e.target.value);
                        setError(null);
                      }}
                      className="form-input w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-center text-lg tracking-widest"
                      placeholder="123456"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition transform hover:scale-105 disabled:opacity-50"
                  >
                    {isLoading ? "Verifying..." : "Verify & Login"}
                  </button>

                  <div className="mt-4 text-center text-sm">
                    {countdown > 0 ? (
                      <span className="text-gray-400">
                        Resend code in {countdown}s
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSendCode}
                        className="text-red-500 hover:underline"
                      >
                        Resend Code
                      </button>
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <button
                      type="button"
                      onClick={() => setStep("email")}
                      className="text-gray-500 text-sm hover:text-gray-700"
                    >
                      Change Email
                    </button>
                  </div>
                </form>
              )}

              {/* 仅在输入邮箱步骤显示 Google 登录，保持界面整洁 */}
              {step === "email" && (
                <>
                  <div className="divider my-6 text-center">
                    <span className="px-2 text-sm">OR</span>
                  </div>

                  <button
                    onClick={handleGoogleLogin}
                    type="button"
                    className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition mb-4 flex items-center justify-center"
                  >
                    <img
                      src="https://www.google.com/favicon.ico"
                      alt="Google"
                      className="w-5 h-5 mr-2"
                    />
                    Login with Google
                  </button>
                </>
              )}
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
      </div>
    </div>
  );
};

export default LoginPage;
