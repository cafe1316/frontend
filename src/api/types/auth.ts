// ============================================
// Auth 相关类型定义
// 完全匹配后端 C# DTOs
// ============================================

/**
 * Google 登录请求 DTO
 * 对应后端：Cafe1316.Application.DTOs.GoogleLoginDto
 */
export interface GoogleLoginDto {
    idToken: string;
}

/**
 * 认证响应 DTO
 * 对应后端：Cafe1316.Application.DTOs.AuthResponseDto
 */
export interface AuthResponseDto {
    token: string;  // JWT token
    user: UserDto;
}

/**
 * 用户信息 DTO
 * 对应后端：Cafe1316.Application.DTOs.UserDto
 */
export interface UserDto {
    id: string;           // Guid in C#, string in TS
    name: string;         // 映射自 DisplayName
    email: string;
    avatarUrl?: string | null;
}
