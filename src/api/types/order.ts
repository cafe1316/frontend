
import { OrderAddressDto } from './checkout';

export interface OrderItemDto {
    productId: number;
    productName: string;
    productSku: string;
    productSlug: string;
    imageUrl?: string;
    unitPriceCents: number;
    quantity: number;
    lineTotalCents: number;
    currency: string;
}

export interface OrderDto {
    uuid: string;
    orderNumber: string;
    email: string;
    shippingAddress: OrderAddressDto;
    billingAddress?: OrderAddressDto;
    subtotalCents: number;
    shippingFeeCents: number;
    taxCents: number;
    grandTotalCents: number;
    currency: string;
    status: string; // "Pending", "Paid", etc.
    orderItems: OrderItemDto[];
    paymentMethod: string;
    paidAt?: string;
    createdAt: string;
}
