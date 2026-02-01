import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/store/ProductCard";
import { getDeliveryStatus } from "@/lib/delivery";
import { client } from "@/sanity/client";
import { Dress } from "@/lib/types";
import Link from "next/link";

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
    const delivery = getDeliveryStatus();
    const query = `*[_type == "dress"] | order(_createdAt desc)[0...3]`;
    const dresses: Dress[] = await client.fetch(query);

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
                            <Link href="/dresses">
                                <Button variant="secondary" className="px-10 py-5 text-lg">Browse Collection</Button>
                            </Link>
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
                            <Link href="/dresses"><Button variant="outline" className="text-xs px-4 py-1">Dresses</Button></Link>
                            <Link href="/accessories"><Button variant="outline" className="text-xs px-4 py-1">Accessories</Button></Link>
                            <Link href="/tailoring"><Button variant="outline" className="text-xs px-4 py-1">Tailoring</Button></Link>
                        </div>
                    </div>

                    {dresses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {dresses.map((dress) => (
                                <ProductCard key={dress._id} product={dress} type="dress" />
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                            <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">Restocking Fresh Silk...</h3>
                        </div>
                    )}

                    <div className="mt-16 text-center">
                        <Link href="/dresses">
                            <Button variant="outline" className="px-12">View All Collection</Button>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
