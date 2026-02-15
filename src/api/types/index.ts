// ==========================================
// Centralized Type Definitions
// Simplifies imports and ensures consistency
// ==========================================

// --- Common Types ---
export interface PaginatedResult<T> {
    items: T[];
    totalCount: number;
    page: number;
    pageSize: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}

// --- Checkout & Address Types ---
export interface OrderAddressDto {
    recipientName: string;
    phone: string;
    province: string;
    city: string;
    district: string;
    addressText: string;
    postalCode?: string;
    countryCode: string; // Default "AU"
}

export interface CreateCheckoutIntentDto {
    shippingAddress: OrderAddressDto;
    billingAddress?: OrderAddressDto;
    shippingMethod: string;
}

export interface CheckoutResponseDto {
    clientSecret: string;
    publishableKey: string;
    checkoutIntentId: string;
}

// --- Order Types (Matching Backend Cafe1316.Application.DTOs.OrderDto) ---
export interface OrderItemDto {
    id: number;
    productId: number;
    productName: string;
    productSlug: string;
    imageUrl?: string;
    unitPrice: number;   // Decimal from backend
    quantity: number;
    lineTotal: number;   // Decimal from backend
    currency: string;
}

export interface OrderDto {
    id: number;
    uuid: string;
    orderNumber: string;
    email: string;

    // Address is deserialized Object on backend
    shippingAddress: OrderAddressDto;
    billingAddress?: OrderAddressDto;

    // Monetary values are Decimals (not Cents)
    subtotal: number;
    shippingFee: number;
    tax: number;
    grandTotal: number;
    currency: string;

    status: string; // "Pending", "Paid", "Shipped"
    paidAt?: string;
    notes?: string;
    createdAt: string;

    // Note: Backend calls this 'Items', mapped to 'items' in JSON
    items: OrderItemDto[];
}

// --- User & Auth Types ---
export interface UserDto {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    phone?: string;
    bio?: string;
    birthDate?: string;
    createdAt?: string;
}

export interface AuthResponseDto {
    token: string;
    user: UserDto;
}

export interface GoogleLoginDto {
    idToken: string;
}
