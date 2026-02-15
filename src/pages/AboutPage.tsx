import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")' }}
                ></div>
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <div className="relative z-20 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
                    <p className="text-xl max-w-2xl mx-auto">Crafting moments of joy, one cup at a time.</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-6 md:px-16 container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Driven by Passion</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Founded in 2023, Cafe1316 started with a simple mission: to bring the world's finest coffee beans directly to your doorstep. We believe that great coffee is more than just a beverage; it's a ritual, a comfort, and a connector.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We travel the globe to source sustainable, ethically grown beans from small-scale farmers. Every batch is roasted with precision to highlight its unique flavor profile, ensuring that what reaches your cup is nothing short of perfection.
                        </p>
                        <div className="flex gap-4">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-red-500">10k+</h3>
                                <p className="text-sm text-gray-500">Happy Customers</p>
                            </div>
                            <div className="text-center border-l pl-4">
                                <h3 className="text-2xl font-bold text-red-500">50+</h3>
                                <p className="text-sm text-gray-500">Coffee Varieties</p>
                            </div>
                            <div className="text-center border-l pl-4">
                                <h3 className="text-2xl font-bold text-red-500">24h</h3>
                                <p className="text-sm text-gray-500">Fast Delivery</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Barista pouring coffee"
                            className="rounded-lg shadow-lg w-full h-80 object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500 text-2xl">
                                <i className="fas fa-leaf"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Ethically Sourced</h3>
                            <p className="text-gray-600">We pay fair prices to farmers and prioritize environmentally friendly farming practices.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500 text-2xl">
                                <i className="fas fa-fire"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Artisan Roasted</h3>
                            <p className="text-gray-600">Small-batch roasting ensures consistency and freshness in every bag we ship.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500 text-2xl">
                                <i className="fas fa-heart"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Community First</h3>
                            <p className="text-gray-600">We donate 1% of our profits to local community initiatives and coffee growing regions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center px-4">
                <h2 className="text-3xl font-bold mb-4">Ready to experience the best?</h2>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">Join thousands of coffee lovers who have made Cafe1316 their daily ritual.</p>
                <Link to="/products" className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-red-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Shop Now <i className="fas fa-arrow-right ml-2"></i>
                </Link>
            </section>
        </main>
    );
};

export default AboutPage;
