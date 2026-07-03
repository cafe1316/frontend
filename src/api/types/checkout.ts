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
    subtotalCents: number;
    shippingFeeCents: number;
    taxCents: number;
    grandTotalCents: number;
    currency: string;
}
