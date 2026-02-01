import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/store/ProductCard";
import { getDeliveryStatus } from "@/lib/delivery";
import { client } from "@/sanity/client";
import { Dress } from "@/lib/types";
import Link from "next/link";
import { CheckCircle, Truck, Scissors, ArrowRight, Sparkles, Tag } from "lucide-react";

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
    const delivery = getDeliveryStatus();
    const query = `*[_type == "dress"] | order(_createdAt desc)[0...3]`;
    const dresses: Dress[] = await client.fetch(query);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Bright & High-Contrast Hero Section */}
            <section className="relative pb-16 md:pb-32 overflow-hidden bg-white">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                        {/* LEFT CONTENT */}
                        <div className="flex-1 text-center lg:text-left pt-10 md:pt-20">

                            {/* Badge */}
                            <div className="inline-block px-4 py-1.5 rounded-full border-2 border-slate-200 text-slate-900 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
                                PUNE'S FINEST TEXTILE HERITAGE
                            </div>

                            {/* Heading */}
                            <h1 className="text-5xl md:text-8xl font-heading font-black tracking-tighter text-slate-950 mb-10 leading-[0.95]">
                                Wear Your <br />
                                <span className="text-secondary italic">Legacy.</span> <span className="text-primary underline decoration-amber-400/40 decoration-[12px] underline-offset-8">Master</span> Your Style.
                            </h1>

                            {/* Subtext */}
                            <p className="text-xl md:text-2xl text-slate-900 mb-14 max-w-xl mx-auto lg:mx-0 font-bold leading-tight opacity-90">
                                The perfect match doesn't just complete an outfit—it completes you.
                                Experience Pune's most curated selection of premium textiles.
                            </p>

                            {/* CTA GROUP */}
                            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">

                                {/* MAIN CTA */}
                                <Link href="/dresses">
                                    <Button
                                        className="
                px-14 py-7
                bg-slate-900
                hover:bg-black
                text-white
                rounded-full
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                shadow-2xl
                transition-all
                duration-500
                hover:scale-105
                flex items-center
                gap-4
              "
                                    >
                                        CLAIM YOUR LOOK
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>

                                {/* SECONDARY CTA */}
                                <Link
                                    href="/dresses"
                                    className="group flex items-center gap-4 bg-slate-50 hover:bg-slate-100 px-8 py-5 rounded-full border border-slate-200 shadow-sm transition-all"
                                >
                                    <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <Tag className="w-5 h-5" />
                                    </div>

                                    <div className="text-left">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                                            LATEST CHAPTER
                                        </div>
                                        <div className="text-sm font-black text-slate-950">
                                            The Silk Anthology
                                        </div>
                                    </div>
                                </Link>

                            </div>

                            {/* Trust Line - High Visibility */}
                            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
                                <span className="text-[10px] md:text-[11px] text-slate-950 font-black tracking-[0.2em] uppercase bg-secondary/10 px-4 py-2 rounded-lg">
                                    TRUSTED BY 2,000+ STYLE ICONS IN PUNE
                                </span>
                            </div>

                        </div>

                        {/* RIGHT VISUAL */}
                        <div className="flex-1 relative w-full max-w-[550px] aspect-square group">
                            <div className="absolute inset-0 bg-slate-50 rounded-full border border-slate-100 animate-pulse-slow" />
                            <div className="absolute inset-4 md:inset-8 rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden border border-slate-100">
                                <div className="text-center p-8 md:p-12 relative z-10">
                                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 md:mb-8 bg-slate-50 rounded-full flex items-center justify-center relative">
                                        <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin-slow" />
                                        <Scissors className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-heading font-black text-slate-950 mb-3 tracking-tighter">
                                        ARTISAN CRAFT
                                    </h3>
                                    <p className="text-slate-900 font-bold uppercase tracking-widest text-[10px] md:text-xs opacity-60 px-4">
                                        Precision Cut. Hand-Finished. Perfection Guaranteed.
                                    </p>
                                </div>
                            </div>
                            {/* Floating Badges - Scaled for mobile responsiveness */}
                            <div className="absolute top-0 right-0 md:-top-4 md:-right-4 bg-white p-4 md:p-6 rounded-3xl shadow-2xl border border-slate-50 -rotate-6 group-hover:rotate-0 transition-transform scale-75 md:scale-100 origin-top-right">
                                <span className="text-primary font-black text-xl md:text-2xl tracking-tighter uppercase leading-none block">AUTHENTIC</span>
                                <p className="text-[10px] text-slate-950 font-black uppercase tracking-widest leading-tight mt-2 opacity-80">100% Handpicked<br />Textiles Only</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Subtle Background Decor */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
            </section>

            {/* Quick Benefits - Gray Section */}
            <section className="bg-slate-50 py-24 md:py-32 border-y border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
                        <div className="flex flex-col items-center text-center gap-8 group">
                            <div className="w-24 h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-slate-950 group-hover:scale-110 shadow-sm group-hover:shadow-2xl">
                                <Truck className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="font-heading font-black text-2xl text-slate-950 leading-none mb-4 tracking-tight">PUNE EXPRESS</h4>
                                <p className="text-sm text-slate-900 font-bold uppercase tracking-[0.15em] opacity-60">From Studio to You, Tonight.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center gap-8 group">
                            <div className="w-24 h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-slate-950 group-hover:scale-110 shadow-sm group-hover:shadow-2xl">
                                <CheckCircle className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="font-heading font-black text-2xl text-slate-950 leading-none mb-4 tracking-tight">CONNOISSEUR CURATION</h4>
                                <p className="text-sm text-slate-900 font-bold uppercase tracking-[0.15em] opacity-60">Only the finest threads survive.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center gap-8 group">
                            <div className="w-24 h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-slate-950 group-hover:scale-110 shadow-sm group-hover:shadow-2xl">
                                <Scissors className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="font-heading font-black text-2xl text-slate-950 leading-none mb-4 tracking-tight">THE GOLDEN STITCH</h4>
                                <p className="text-sm text-slate-900 font-bold uppercase tracking-[0.15em] opacity-60">Master Craftsmen. Your Soul's Size.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Aspirational Quote Section */}
            <section className="bg-white py-32 md:py-48 text-center relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-secondary font-black tracking-[0.5em] text-[10px] uppercase mb-12 block">THE GAURI PHILOSOPHY</span>
                        <blockquote className="text-3xl md:text-7xl font-heading font-black text-slate-950 tracking-tighter leading-tight italic">
                            "Elegance isn't about being <span className="text-primary italic">noticed</span>, it's about being <span className="text-secondary italic underline decoration-slate-950/10 decoration-[8px] underline-offset-8">remembered</span>."
                        </blockquote>
                        <div className="mt-12 w-20 h-1 bg-amber-400 mx-auto rounded-full" />
                    </div>
                </div>
                <div className="absolute top-1/2 left-10 w-24 h-24 bg-slate-50 rounded-full -translate-y-1/2 animate-pulse hidden md:block" />
                <div className="absolute bottom-1/2 right-20 w-16 h-16 bg-slate-50 rounded-full translate-y-1/2 animate-bounce-slow hidden md:block" />
            </section>

            {/* Scrolling Delivery Alert - AJIO Style Subtle Bar */}
            <div className="bg-slate-950 text-white py-6 overflow-hidden select-none">
                <div className="flex animate-marquee space-x-24 whitespace-nowrap">
                    {[1, 2, 3, 4].map((i) => (
                        <span key={i} className="text-[10px] font-black tracking-[0.5em] uppercase flex items-center group cursor-default">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary mr-8 shadow-[0_0_15px_rgba(245,158,11,0.8)] animate-pulse" />
                            {delivery.message} • EXPECT PERFECTION BY: {delivery.deliveryDate}
                        </span>
                    ))}
                </div>
            </div>

            {/* Featured Catalog - Pure White */}
            <section className="bg-white py-24 md:py-40">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                        <div className="max-w-2xl">
                            <div className="inline-block px-4 py-1.5 rounded-full border-2 border-slate-200 text-slate-900 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                                LIMITED ANTHOLOGY
                            </div>
                            <h2 className="text-5xl md:text-8xl font-heading font-black text-slate-950 tracking-tighter leading-none">The Silk Edit.</h2>
                            <p className="text-slate-900 mt-10 font-bold max-w-lg leading-relaxed text-xl opacity-80">
                                Pieces that whisper luxury and scream confidence. Handpicked for the woman who settles for <span className="text-secondary">nothing but the best.</span>
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {['ALL CURATIONS', 'COLLECTIONS', 'ARTISANAL'].map((label) => (
                                <Link key={label} href="/dresses">
                                    <Button variant="outline" className="px-10 py-5 rounded-full text-[11px] border-slate-200 font-black tracking-widest bg-white hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all duration-300">
                                        {label}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {dresses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                            {dresses.map((dress) => (
                                <ProductCard key={dress._id} product={dress} type="dress" />
                            ))}
                        </div>
                    ) : (
                        <div className="py-40 text-center bg-slate-50 rounded-[4rem] border-2 border-dashed border-slate-200 relative overflow-hidden group">
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl transition-premium group-hover:scale-110 group-hover:rotate-12">
                                    <Sparkles className="w-10 h-10 text-primary/40" />
                                </div>
                                <h3 className="text-xl font-heading font-black text-slate-600 uppercase tracking-[0.3em]">Curating Excellence...</h3>
                                <p className="text-slate-500 text-sm mt-4 font-black tracking-widest uppercase">New masterpieces arriving this week.</p>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        </div>
                    )}

                    {/* High-Impact Brand Call-to-Action */}
                    <div className="mt-40 p-16 md:p-32 bg-slate-950 rounded-[4rem] text-center relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]">
                        <div className="relative z-10">
                            <span className="text-primary font-black tracking-[0.5em] text-[10px] uppercase mb-10 block animate-pulse">THE BOUTIQUE EXPERIENCE</span>
                            <h3 className="text-5xl md:text-8xl font-heading font-black text-white mb-10 tracking-tighter leading-none">
                                Perfection is <br />
                                <span className="text-secondary italic">Personal.</span>
                            </h3>
                            <p className="text-slate-400 max-w-xl mx-auto mb-16 font-bold uppercase tracking-[0.2em] text-sm leading-relaxed">
                                Don't just browse — interact. Visit our Market Yard studio to touch and feel 5,000+ hand-selected textiles.
                                <span className="text-white"> Your masterpiece is waiting.</span>
                            </p>
                            <Link href="/dresses">
                                <Button className="px-16 py-8 text-xs bg-white text-slate-950 hover:bg-primary transition-all duration-500 shadow-2xl scale-110 hover:scale-120">
                                    BROWSE THE FULL CATALOG
                                </Button>
                            </Link>
                        </div>
                        {/* Background Decor */}
                        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/20 transition-all duration-1000" />
                        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 group-hover:bg-secondary/20 transition-all duration-1000" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
