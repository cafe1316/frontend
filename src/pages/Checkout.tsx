import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { paymentService } from '../api/services/paymentService';
import { OrderAddressDto } from '../api/types/index';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

// --- Stripe Payment Form Component ---
const StripePaymentForm = ({ checkoutIntentId, amount }: { checkoutIntentId: string, amount: number }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setIsProcessing(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Return URL is required, but we can also handle redirect manually if needed.
                // For this SPA, we might rely on the webhook or redirect to a completion page.
                // Usually Stripe redirects. Let's set it to local completion page.
                return_url: `${window.location.origin}/ordercomplete`,
            },
            redirect: "if_required" // Prevent auto redirect if we want to handle it
        });

        if (error) {
            console.error("Stripe payment failed", error);
            setMessage("Payment could not be completed. Please check your card details or try another payment method.");
            setIsProcessing(false);
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            // The Stripe webhook creates the order and clears the server cart only after
            // persistence succeeds. The browser must not clear it independently.
            navigate("/ordercomplete", { state: { orderId: checkoutIntentId } }); // We might not have real Order ID yet until webhook processes
        } else {
            setMessage("Payment status: " + paymentIntent?.status);
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Test Mode Banner */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-sm text-blue-800">
                <p className="font-bold mb-2 flex items-center">
                    <i className="fas fa-info-circle mr-2"></i>
                    Test Mode Active
                </p>
                <p className="mb-2">To test payment, use these details:</p>
                <ul className="list-disc list-inside space-y-1 font-mono text-xs bg-white p-2 rounded border border-blue-100">
                    <li>Card: 4242 4242 4242 4242</li>
                    <li>Expiry: 12 / 30</li>
                    <li>CVC: 123</li>
                    <li>Zip: 12345</li>
                </ul>
            </div>

            <PaymentElement />
            {message && <div className="text-red-500 mt-4 text-sm">{message}</div>}
            <button
                disabled={isProcessing || !stripe || !elements}
                id="submit"
                className="w-full bg-red-500 text-white py-3 rounded-full hover:bg-red-600 transition-colors mt-6 disabled:opacity-50 font-bold"
            >
                {isProcessing ? "Processing..." : `Pay $${amount.toFixed(2)}`}
            </button>
        </form>
    );
};


const Checkout = () => {
    const { cartItems, cartTotal } = useCart();
    const [step, setStep] = useState<1 | 2>(1); // 1: Address, 2: Payment

    // Form State
    const [address, setAddress] = useState<OrderAddressDto>({
        recipientName: '',
        phone: '',
        province: '',
        city: '',
        district: '',
        addressText: '',
        postalCode: '',
        countryCode: 'AU'
    });

    // Stripe State
    const [stripePromise, setStripePromise] = useState<any>(null);
    const [clientSecret, setClientSecret] = useState<string>("");
    const [checkoutIntentId, setCheckoutIntentId] = useState<string>("");
    const [checkoutAmounts, setCheckoutAmounts] = useState<{
        subtotal: number;
        shippingFee: number;
        tax: number;
        grandTotal: number;
    } | null>(null);

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAddress(prev => {
            const newState = { ...prev, [name]: value };
            return newState;
        });
    };

    const handlePlaceOrder = async () => {
        try {
            // 1. Create Checkout Intent
            const data = await paymentService.createCheckoutIntent({
                shippingAddress: address,
                billingAddress: address, // Default same for now
                shippingMethod: "Standard"
            });

            // 2. Initialize Stripe
            setClientSecret(data.clientSecret);
            setStripePromise(loadStripe(data.publishableKey));
            setCheckoutIntentId(data.checkoutIntentId);
            setCheckoutAmounts({
                subtotal: data.subtotalCents / 100,
                shippingFee: data.shippingFeeCents / 100,
                tax: data.taxCents / 100,
                grandTotal: data.grandTotalCents / 100,
            });

            // 3. Move to Payment Step
            setStep(2);
        } catch (error: any) {
            console.error('Checkout intent failed', error);
            toast.error(error.userMessage ?? 'Failed to initialize checkout. Please try again.');
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-xl">Your cart is empty</h2>
                <Link to="/products" className="text-red-500 underline">Go shopping</Link>
            </div>
        )
    }

    const displayedSubtotal = checkoutAmounts?.subtotal ?? cartTotal;
    const displayedShipping = checkoutAmounts?.shippingFee ?? 10;
    const displayedTax = checkoutAmounts?.tax ?? cartTotal * 0.1;
    const displayedGrandTotal = checkoutAmounts?.grandTotal
        ?? displayedSubtotal + displayedShipping + displayedTax;

    return (
        <>
            {/* Progress Tracker */}
            <div className="bg-gray-50 py-4 px-8 border-b">
                <div className="max-w-4xl mx-auto flex justify-between">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center mb-1">
                            <i className="fas fa-shopping-cart text-sm"></i>
                        </div>
                        <span className="text-xs md:text-sm">Cart</span>
                    </div>
                    <div className="w-16 md:w-24 h-0.5 bg-red-500 self-center"></div>
                    <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${step >= 1 ? 'bg-red-500 text-white' : 'bg-gray-300 text-white'}`}>
                            <i className="fas fa-map-marker-alt text-sm"></i>
                        </div>
                        <span className="text-xs md:text-sm font-medium">Address</span>
                    </div>
                    <div className={`w-16 md:w-24 h-0.5 self-center ${step >= 2 ? 'bg-red-500' : 'bg-gray-300'}`}></div>
                    <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${step >= 2 ? 'bg-red-500 text-white' : 'bg-gray-300 text-white'}`}>
                            <i className="fas fa-credit-card text-sm"></i>
                        </div>
                        <span className="text-xs md:text-sm text-gray-500">Payment</span>
                    </div>
                </div>
            </div>

            <main className="flex-1 py-8 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold mb-8">Checkout</h1>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* LEFT COLUMN: MAIN CONTENT */}
                        <div className="lg:w-2/3">

                            {/* STEP 1: ADDRESS */}
                            {step === 1 && (
                                <div className="mb-8">
                                    <h2 className="text-lg font-medium mb-4 flex items-center">
                                        <i className="fas fa-map-marker-alt text-red-500 mr-2"></i>
                                        Shipping Address
                                    </h2>

                                    <div className="bg-white border rounded-xl p-6 shadow-sm">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Recipient Name</label>
                                                <input
                                                    type="text" name="recipientName" value={address.recipientName} onChange={handleAddressChange}
                                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                                <input
                                                    type="text" name="phone" value={address.phone} onChange={handleAddressChange}
                                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                                <select
                                                    name="countryCode" value={address.countryCode} onChange={(e) => setAddress(p => ({ ...p, countryCode: e.target.value }))}
                                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500"
                                                >
                                                    <option value="AU">Australia</option>
                                                    <option value="CN">China</option>
                                                    <option value="US">USA</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
                                                <input
                                                    type="text" name="province" value={address.province} onChange={handleAddressChange}
                                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                                <input
                                                    type="text" name="city" value={address.city} onChange={handleAddressChange}
                                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">District / Suburb</label>
                                            <input
                                                type="text" name="district" value={address.district} onChange={handleAddressChange}
                                                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Address Detail</label>
                                            <input
                                                type="text" name="addressText" value={address.addressText} onChange={handleAddressChange}
                                                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500"
                                                required
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                                            <input
                                                type="text" name="postalCode" value={address.postalCode} onChange={handleAddressChange}
                                                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500"
                                            />
                                        </div>

                                        <button
                                            onClick={handlePlaceOrder}
                                            disabled={!address.recipientName || !address.phone || !address.addressText}
                                            className="w-full bg-red-500 text-white py-3 rounded-full hover:bg-red-600 transition-colors disabled:opacity-50"
                                        >
                                            Continue to Payment
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: PAYMENT */}
                            {step === 2 && clientSecret && (
                                <div className="mb-8">
                                    <h2 className="text-lg font-medium mb-4 flex items-center">
                                        <i className="fas fa-credit-card text-red-500 mr-2"></i>
                                        Payment Details
                                    </h2>
                                    <div className="bg-white border rounded-xl p-6 shadow-sm">
                                        <Elements stripe={stripePromise} options={{ clientSecret }}>
                                            <StripePaymentForm checkoutIntentId={checkoutIntentId} amount={displayedGrandTotal} />
                                        </Elements>

                                        <button onClick={() => setStep(1)} className="mt-4 text-sm text-gray-500 hover:text-gray-800 underline">
                                            back to address
                                        </button>
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* RIGHT COLUMN: ORDER SUMMARY */}
                        <div className="lg:w-1/3">
                            <div className="bg-white border rounded-xl p-6 sticky top-24 shadow-sm">
                                <h2 className="text-lg font-medium mb-4">Order Summary</h2>

                                {/* Items List */}
                                <div className="border-b pb-4 mb-4 max-h-96 overflow-y-auto">
                                    {cartItems.map(item => (
                                        <div key={item.id} className="flex justify-between items-start mb-3">
                                            <div className="flex items-center">
                                                <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 mr-3 border">
                                                    <img src={item.mainImageUrl || 'https://placehold.co/100'} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium leading-tight line-clamp-1 w-32">{item.name}</div>
                                                    <div className="text-xs text-gray-500">x {item.quantity}</div>
                                                </div>
                                            </div>
                                            <div className="font-medium">{item.currency === 'AUD' ? '$' : '¥'}{(item.price * item.quantity).toFixed(2)}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Totals */}
                                <div className="space-y-2 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span>${displayedSubtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Shipping (Flat Rate)</span>
                                        <span>${displayedShipping.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>Tax (Est. 10%)</span>
                                        <span>${displayedTax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between font-medium text-lg pt-2 border-t mt-2">
                                        <span>Total</span>
                                        <span className="text-red-500">${displayedGrandTotal.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Checkout
