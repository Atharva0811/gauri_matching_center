import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/store/ProductCard";
import { getDeliveryStatus } from "@/lib/delivery";

export default function Home() {
    const delivery = getDeliveryStatus();

    // Mock data for demonstration
    const mockDresses = [
        { _id: "1", name: "Royal Silk Anarkali Set", price: 2999, isSoldOut: false, description: "Authentic silk material from Pune vendors." },
        { _id: "2", name: "Chanderi Cotton Material", price: 1599, isSoldOut: true, description: "Lightweight and elegant for summer." },
        { _id: "3", name: "Banarasi Handloom Suit", price: 4599, isSoldOut: false, description: "Exquisite hand-woven borders." },
    ];

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center hero-gradient text-white overflow-hidden">
                <div className="container mx-auto px-4 z-10">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-bold mb-6">
                            ✨ Pune's Premium Matching Center
                        </span>
                        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.8] uppercase">
                            Pune's<br />Matching Center.
                        </h1>
                        <p className="text-xl mb-12 opacity-90 max-w-lg font-medium leading-relaxed">
                            Exquisite dress materials, expert tailoring, and handcrafted accessories. Same-day delivery across Pune.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="secondary" className="px-10 py-5 text-lg">Browse Collection</Button>
                            <div className="flex items-center bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-3" />
                                <span className="text-sm font-bold">Secure UPI Payments</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/silk.png')] opacity-10 pointer-events-none" />
                <div className="absolute right-[-10%] bottom-[-10%] w-[800px] h-[800px] rounded-full bg-orange-400/20 blur-[120px]" />
            </section>

            {/* Trust & Policy Banner */}
            <section className="bg-orange-50 border-y border-orange-100 py-12">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="space-y-2">
                        <h4 className="font-black text-orange-600 tracking-widest uppercase text-xs">Fast Shipping</h4>
                        <p className="text-xl font-bold">Same-Day Pune Delivery</p>
                    </div>
                    <div className="space-y-2 border-x border-orange-200">
                        <h4 className="font-black text-orange-600 tracking-widest uppercase text-xs">Return Policy</h4>
                        <p className="text-xl font-bold">No Returns on Customized Orders</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-black text-orange-600 tracking-widest uppercase text-xs">Expert Craft</h4>
                        <p className="text-xl font-bold">Professional Pune Tailors</p>
                    </div>
                </div>
            </section>

            {/* Delivery Banner */}
            <div className="bg-black text-white py-4 overflow-hidden whitespace-nowrap">
                <div className="flex animate-marquee space-x-12">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className="text-sm font-bold tracking-widest uppercase flex items-center">
                            <span className="w-2 h-2 rounded-full bg-orange-500 mr-2" />
                            {delivery.message} • DELIVERY ON {delivery.deliveryDate}
                        </span>
                    ))}
                </div>
            </div>

            {/* Product Catalog */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                        <div>
                            <h2 className="text-4xl font-black tracking-tighter">NEW ARRIVALS</h2>
                            <p className="text-gray-500 mt-2">Explore our latest dress materials and accessories.</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" className="text-xs px-4 py-2">Dresses</Button>
                            <Button variant="outline" className="text-xs px-4 py-2">Accessories</Button>
                            <Button variant="outline" className="text-xs px-4 py-2">Tailoring</Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mockDresses.map((dress) => (
                            <ProductCard key={dress._id} product={dress as any} type="dress" />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button variant="outline" className="px-12">View All Collection</Button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
