import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import { auth, provider } from "../lib/firebase";
import { useAuth } from "../components/AuthContext";

const LoginPage = () => {
  // 状态管理
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<String | null>(null); // 新增错误状态
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  // Best Practice: 如果用户已经登录 (有 token)，访问登录页应自动跳转到首页
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true }); // replace: true 防止用户点后退键又回到登录页
    }
  }, [isAuthenticated, navigate]);

  // 处理 Google 登录点击
  const handleGoogleLogin = async () => {
    setError(null);
    setIsLoading(true);

    // 1. 检查 Firebase 是否初始化成功
    if (!auth || !provider) {
      console.error("Firebase not initialized. Check environment variables.");
      setError("Firebase 配置缺失，请检查环境变量"); // Simplified for now
      setIsLoading(false);
      return;
    }

    try {
      // Best Practice: 使用 Popup 模式
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

      if (clientId) {
        // 强制指定 Client ID，解决自动发现失败的问题
        provider.setCustomParameters({ client_id: clientId });
      }

      const result = await signInWithPopup(auth, provider);

      if (result.user) {
        // 2. 获取 Google 原始 ID Token (用于后端 GoogleJsonWebSignature 验证)
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const googleIdToken = credential?.idToken;

        console.log("Google Login successful.");

        if (!googleIdToken) {
          throw new Error("Failed to retrieve Google ID Token from login result.");
        }

        console.log("Got Google ID Token, exchanging with backend...");

        // 3. 将 Google ID Token 发送给后端进行验证，换取我们自己的 JWT
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5255/api';

        try {
          const response = await axios.post(`${API_BASE_URL}/Auth/google`, {
            IdToken: googleIdToken
          });

          const { token: backendToken, user } = response.data;
          console.log("Backend login successful", user);

          // 4. 使用后端返回的 JWT 登录
          login(backendToken, user);
          navigate("/", { replace: true });

        } catch (backendError: any) {
          console.error("Backend validation failed", backendError);
          // 打印更多后端错误细节
          const errorMsg = backendError.response?.data?.message || backendError.response?.data || backendError.message;
          setError(`Login failed: Backend rejected the token. (${backendError.response?.status}) - ${JSON.stringify(errorMsg)}`);
        }
      }
    } catch (err: any) {
      console.error("Google Login failed", err);

      // 处理 Google Popup 关闭的情况
      if (err.code === 'auth/popup-closed-by-user') {
        setError("Login cancelled");
      } else if (err.code === 'auth/invalid-credential') {
        setError("Configuration Error: Please check Google Cloud Console OAuth settings.");
      } else {
        setError("Google Login failed. Please try again.");
      }
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
            {/* 登陆表单 */}
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              {/* 错误提示 Banner */}
              {error && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg flex items-center justify-center">
                  <i className="fas fa-exclamation-circle mr-2"></i>
                  {error}
                </div>
              )}

              <div className="mb-8">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  <i className="fas fa-user"></i>
                </div>
                <h2 className="text-xl font-semibold mb-2">Sign in to your account</h2>
                <p className="text-gray-500 mb-6">Access your orders and saved addresses</p>
              </div>

              <button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                type="button"
                className="w-full bg-white border-2 border-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center group"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <i className="fas fa-spinner fa-spin mr-2"></i> Signing in...
                  </span>
                ) : (
                  <>
                    <img
                      src="https://www.google.com/favicon.ico"
                      alt="Google"
                      className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
                    />
                    Continue with Google
                  </>
                )}
              </button>
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
