import axios from 'axios';

// 从环境变量读取 API 基础 URL，默认使用本地开发服务器
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5255/api';

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
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器：统一处理错误
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 401 未授权：token 过期或无效
    if (error.response?.status === 401) {
      console.warn('Token expired or invalid, redirecting to login...');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    
    // 500 服务器错误：记录详细信息
    if (error.response?.status === 500) {
      console.error('Server error:', error.response.data);
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;
