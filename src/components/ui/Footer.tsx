import Link from "next/link";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <div className="flex flex-col">
                            <span className="text-2xl font-heading font-black tracking-tight text-white leading-none">
                                GAURI
                            </span>
                            <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase mt-1">
                                Matching Center
                            </span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed font-bold opacity-80">
                            Pune's legacy in premium textiles since 2008. We specialize in matching, bespoke tailoring and handcrafted ethnic wear.
                        </p>
                        <div className="flex items-center space-x-5">
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all duration-300">
                                <MessageCircle className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Columns */}
                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10">Collections</h4>
                        <ul className="space-y-4">
                            <li><Link href="/dresses" className="text-slate-300 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Dresses</Link></li>
                            <li><Link href="/accessories" className="text-slate-300 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Accessories</Link></li>
                            <li><Link href="/tailoring" className="text-slate-300 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Tailoring</Link></li>
                            <li><Link href="/studio" className="text-slate-300 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Studio</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10">Experience</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-slate-300 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">About Us</Link></li>
                            <li><Link href="#" className="text-slate-300 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Contact</Link></li>
                            <li><Link href="#" className="text-slate-300 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Shipping Policy</Link></li>
                            <li><Link href="#" className="text-slate-300 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Returns</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10">Studio</h4>
                        <p className="text-slate-300 text-sm font-bold leading-relaxed mb-6">
                            Mahaveer Peth, Market Yard,<br />
                            Pune, Maharashtra 411037
                        </p>
                        <Link href="tel:+919876543210" className="text-primary font-black tracking-widest text-sm hover:underline">
                            +91 98765 43210
                        </Link>
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <p className="text-primary font-black uppercase text-[10px] tracking-widest">Direct Delivery Across Pune</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
                    <span>© {new Date().getFullYear()} Gauri Matching Center.</span>
                    <div className="flex gap-10">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
