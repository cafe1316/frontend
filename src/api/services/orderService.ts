import axiosInstance from "../axiosInstance";
import { OrderDto, PaginatedResult } from "../types/index";

export const orderService = {
    // Get user's orders (paginated)
    getUserOrders: async (page = 1, pageSize = 10, status?: string): Promise<PaginatedResult<OrderDto>> => {
        const params: Record<string, string | number> = { page, pageSize };
        if (status) params.status = status;

        const response = await axiosInstance.get<PaginatedResult<OrderDto>>("/Order", { params });
        return response.data;
    },

    // Get single order by ID
    getOrderById: async (id: number): Promise<OrderDto> => {
        const response = await axiosInstance.get<OrderDto>(`/Order/${id}`);
        return response.data;
    },

    getOrderByCheckoutId: async (checkoutId: string): Promise<OrderDto> => {
        const response = await axiosInstance.get<OrderDto>(`/Order/by-checkout/${checkoutId}`, {
            suppressGlobalToast: true,
        });
        return response.data;
    }
};
