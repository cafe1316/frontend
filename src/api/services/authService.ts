import axiosInstance from '../axiosInstance';
import { GoogleLoginDto, AuthResponseDto, UserDto } from '../types/index';

/**
 * Auth API Service
 * 所有认证相关的 API 调用
 */
export const authService = {
    /**
     * Google OAuth 登录
     * POST /api/auth/google
     */
    loginWithGoogle: async (idToken: string): Promise<AuthResponseDto> => {
        const response = await axiosInstance.post<AuthResponseDto>(
            '/auth/google',
            { idToken } as GoogleLoginDto,
            { suppressGlobalToast: true, skipAuthRedirect: true }
        );
        return response.data;
    },

    /**
     * 获取当前用户信息 (Profile)
     * GET /api/auth/me
     */
    getCurrentUser: async (): Promise<UserDto> => {
        const response = await axiosInstance.get<UserDto>('/auth/me');
        return response.data;
    }
};
