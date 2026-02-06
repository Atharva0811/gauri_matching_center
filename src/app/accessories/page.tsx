import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/store/ProductCard";
import { client } from "@/sanity/client";
import { Accessory } from "@/lib/types";
import { Sparkles } from "lucide-react";

export const revalidate = 60; // Revalidate every minute

export default async function AccessoriesPage() {
    const query = `*[_type == "accessory"] | order(_createdAt desc)`;
    const accessories: Accessory[] = await client.fetch(query);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="container mx-auto px-4 py-16 md:py-32">
                <header className="mb-32 border-b border-slate-100 pb-20 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="text-secondary text-[11px] font-black tracking-[0.6em] uppercase mb-8 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-secondary" />
                            THE ART OF THE FINISH
                        </div>
                        <h1 className="text-7xl md:text-9xl font-heading font-black text-slate-950 leading-none tracking-tighter mb-12">
                            Small Details. <br />
                            <span className="text-primary italic underline decoration-secondary/10 decoration-[20px] underline-offset-8">Grand Impact.</span>
                        </h1>
                        <p className="text-slate-900 mt-12 font-bold text-2xl max-w-2xl leading-snug opacity-90">
                            Because elegance lies in the details. Discover handcrafted latkans, artisanal borders, and finishing touches that breathe soul into every silhouette.
                        </p>
                    </div>
                    {/* Background Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                </header>

                <div className="flex items-center justify-between mb-16">
                    <h2 className="text-3xl font-heading font-black text-slate-950 tracking-tighter uppercase">Artisanal Accents</h2>
                    <span className="text-[10px] font-black text-primary tracking-[0.4em] uppercase">{accessories.length} Accents Available</span>
                </div>

                {accessories.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
                        {accessories.map((acc) => (
                            <ProductCard key={acc._id} product={acc} type="accessory" />
                        ))}
                    </div>
                ) : (
                    <div className="py-40 text-center bg-slate-50 rounded-[5rem] border-2 border-dashed border-slate-200 relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl transition-premium group-hover:scale-110 group-hover:rotate-12 border border-slate-50">
                                <Sparkles className="w-12 h-12 text-secondary" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-950 mb-6 tracking-tighter uppercase">Crafting Perfection...</h2>
                            <p className="text-slate-950 text-sm max-w-sm mx-auto font-black uppercase tracking-[0.3em] opacity-60 leading-relaxed mb-10">
                                Our master artisans are finishing the next collection of hand-decorated accessories.
                            </p>
                            <Link href="/">
                                <Button variant="outline" className="rounded-full px-12 py-5 text-[10px] font-black uppercase tracking-widest border-slate-200">Visit Studio</Button>
                            </Link>
                        </div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    </div>
                )}

                {/* Engagement Section */}
                <div className="mt-40 border-t border-slate-100 pt-32 text-center pb-16">
                    <blockquote className="text-3xl md:text-5xl font-heading font-black text-slate-950 tracking-tighter italic max-w-4xl mx-auto mb-16 leading-tight">
                        &quot;Accessories are the exclamation point of a woman&apos;s outfit. <span className="text-secondary underline decoration-primary/20 decoration-8 underline-offset-4">Make yours bold.</span>&quot;
                    </blockquote>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-heading font-black text-slate-950 mb-2 tracking-tighter">500+</span>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none text-center">Artisanal<br />Latkans</span>
                        </div>
                        <div className="hidden md:block w-px h-16 bg-slate-200" />
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-heading font-black text-slate-950 mb-2 tracking-tighter">200+</span>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none text-center">Lace<br />Varieties</span>
                        </div>
                        <div className="hidden md:block w-px h-16 bg-slate-200" />
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-heading font-black text-slate-950 mb-2 tracking-tighter">100%</span>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none text-center">Handpicked<br />Quality</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
