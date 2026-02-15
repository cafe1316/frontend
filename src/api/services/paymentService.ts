import axiosInstance from "../axiosInstance";
import { CheckoutResponseDto, CreateCheckoutIntentDto } from "../types/index";

export const paymentService = {
    createCheckoutIntent: async (data: CreateCheckoutIntentDto): Promise<CheckoutResponseDto> => {
        const response = await axiosInstance.post<CheckoutResponseDto>("/payments/checkout", data);
        return response.data;
    },
};
