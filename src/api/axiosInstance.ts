import axios from 'axios';
import toast from 'react-hot-toast';

// 从环境变量读取 API 基础 URL，默认使用本地开发服务器
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5255/api';

// ─── Error Translation Layer ───────────────────────────────────────────────
// Single Source of Truth: HTTP status code → user-friendly message mapping.
// Pages read error.userMessage instead of touching error.response directly.
function translateError(error: any): string {
  // No response at all → pure network failure (offline, CORS, DNS)
  if (!error.response) {
    if (error.code === 'ECONNABORTED') return 'Request timed out. Please check your connection.';
    return 'Network error. Please check your internet connection.';
  }

  const status: number = error.response?.status;
  // Maps only what this backend actually produces:
  //   400 (BadRequestException), 401 (UnauthorizedException / JWT),
  //   403 (ForbiddenException), 404 (NotFoundException), 500 (unhandled default).
  // 502/503/504 are platform-level (Render/Nginx during deploys) — real but not from app code.
  const messages: Record<number, string> = {
    400: 'Invalid request. Please check your input.',
    403: "You don't have permission to perform this action.",
    404: 'The requested resource was not found.',
    500: 'A server error occurred. Please try again later.',
    502: 'Server is temporarily unreachable. Please try again.',
    503: 'Service temporarily unavailable. Please try again later.',
    504: 'Server response timed out. Please try again.',
  };
  return messages[status] ?? 'Something went wrong. Please try again.';
}

// 创建 axios 实例
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30秒超时
});

// 请求拦截器：自动附加 JWT token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && token !== 'mock_token_for_frontend_demo') {
      // 只有真实 token 才附加到请求头
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器：统一处理错误
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Attach translated message to every error (pages read error.userMessage)
    error.userMessage = translateError(error);

    // 401: token expired → global logout (axiosInstance owns this, not pages)
    if (error.response?.status === 401) {
      console.warn('Token expired or invalid, redirecting to login...');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
      return Promise.reject(error);
    }

    // 500 & network failures: system-level, always notify user here
    if (error.response?.status === 500 || !error.response) {
      console.error('System error:', error.response?.data ?? error.message);
      toast.error(error.userMessage);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
