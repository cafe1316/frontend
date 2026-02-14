import axiosInstance from '../axiosInstance';
import { GoogleLoginDto, AuthResponseDto } from '../types/auth';

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
        const response = await axiosInstance.post<AuthResponseDto>('/auth/google', {
            idToken,
        } as GoogleLoginDto);
        return response.data;
    },
};
