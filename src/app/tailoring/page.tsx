import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { client } from "@/sanity/client";
import { TailoringService } from "@/lib/types";
import { Scissors, Clock, Sparkles } from "lucide-react";

export const revalidate = 60; // Revalidate every minute

export default async function TailoringPage() {
    const query = `*[_type == "tailoring"] | order(basePrice asc)`;
    const services: TailoringService[] = await client.fetch(query);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="container mx-auto px-4 py-16 md:py-32">
                <header className="mb-32 border-b border-slate-100 pb-20 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="text-secondary text-[11px] font-black tracking-[0.6em] uppercase mb-8 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-secondary" />
                            TAILORED TO PERFECTION
                        </div>
                        <h1 className="text-7xl md:text-9xl font-heading font-black text-slate-950 leading-none tracking-tighter mb-12">
                            The Perfect Fit. <br />
                            <span className="text-primary italic underline decoration-secondary/10 decoration-[20px] underline-offset-8">No Compromise.</span>
                        </h1>
                        <p className="text-slate-900 mt-12 font-bold text-2xl max-w-2xl leading-snug opacity-90">
                            A perfect silhouette is a commitment to perfection. Our master craftsmen transform fabrics into masterpieces tailored exactly to your vision and every natural curve.
                        </p>
                    </div>
                    {/* Background Decor */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
                </header>

                <div className="flex items-center justify-between mb-16">
                    <h2 className="text-3xl font-heading font-black text-slate-950 tracking-tighter uppercase">Bespoke Services</h2>
                    <span className="text-[10px] font-black text-primary tracking-[0.4em] uppercase">{services.length} Crafts Available</span>
                </div>

                {services.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
                        {services.map((service) => (
                            <div key={service._id} className="p-10 md:p-12 bg-white rounded-[4rem] flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                                <div className="relative z-10 space-y-10">
                                    <div className="w-24 h-24 bg-white border border-slate-100 rounded-3xl flex items-center justify-center group-hover:bg-slate-950 transition-all duration-500 shadow-sm group-hover:shadow-2xl">
                                        <Scissors className="w-12 h-12 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-4xl font-heading font-black text-slate-950 tracking-tighter leading-none">{service.serviceName}</h3>
                                        <p className="text-slate-800 text-sm leading-relaxed font-bold opacity-80">{service.description || "Expert stitching with premium finishing tailored to your unique measurements."}</p>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-slate-100 pt-10">
                                        <div className="flex items-center text-slate-950 text-[10px] font-black uppercase tracking-[0.3em] gap-3">
                                            <Clock className="w-4 h-4 text-primary" />
                                            {service.turnaroundTime || "3-5 Days"}
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Estimate</span>
                                            <span className="text-4xl font-heading font-black text-slate-950 tracking-tighter">₹{service.basePrice}</span>
                                        </div>
                                    </div>
                                </div>
                                <Button className="mt-12 relative z-10 py-6 rounded-full text-[11px] font-black tracking-[0.3em] uppercase bg-slate-950 text-white hover:bg-black transition-all shadow-none hover:shadow-2xl" fullWidth>BOOK CONSULTATION</Button>

                                {/* Decorative background */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-slate-50 rounded-bl-[6rem] group-hover:bg-primary/5 transition-colors" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-40 text-center bg-slate-50 rounded-[5rem] border-2 border-dashed border-slate-200 relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl transition-premium group-hover:scale-110 group-hover:rotate-12 border border-slate-50">
                                <Sparkles className="w-12 h-12 text-primary" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-950 mb-6 tracking-tighter uppercase">Artisans at Capacity...</h2>
                            <p className="text-slate-950 text-sm max-w-sm mx-auto font-black uppercase tracking-[0.3em] opacity-60 leading-relaxed mb-10">
                                Our master tailors are currently perfecting current orders. Visit our studio to book a future slot.
                            </p>
                            <Link href="/">
                                <Button variant="outline" className="rounded-full px-12 py-5 text-[10px] font-black uppercase tracking-widest border-slate-200">Return to Studio</Button>
                            </Link>
                        </div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    </div>
                )}

                {/* Engagement Section */}
                <div className="mt-40 border-t border-slate-100 pt-32 text-center pb-16">
                    <blockquote className="text-3xl md:text-5xl font-heading font-black text-slate-950 tracking-tighter italic max-w-4xl mx-auto mb-16 leading-tight">
                        &quot;Elegance is the only beauty that <span className="text-secondary underline decoration-primary/20 decoration-8 underline-offset-4">never fades.</span>&quot;
                    </blockquote>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-heading font-black text-slate-950 mb-2 tracking-tighter">20+</span>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none text-center">Master<br />Tailors</span>
                        </div>
                        <div className="hidden md:block w-px h-16 bg-slate-200" />
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-heading font-black text-slate-950 mb-2 tracking-tighter">48h</span>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none text-center">Express<br />Fitting</span>
                        </div>
                        <div className="hidden md:block w-px h-16 bg-slate-200" />
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-heading font-black text-slate-950 mb-2 tracking-tighter">100%</span>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none text-center">Precision<br />Guarantee</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
