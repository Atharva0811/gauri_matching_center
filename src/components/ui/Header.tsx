"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, Search, X, ChevronRight, MapPin, Phone } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: "Dresses", href: "/dresses", desc: "Exclusive Textiles & Fabrics" },
        { name: "Accessories", href: "/accessories", desc: "Artisanal Borders & Laces" },
        { name: "Tailoring", href: "/tailoring", desc: "Bespoke Master Tailoring" },
        { name: "Studio", href: "/studio", desc: "The Authentic Studio Experience" },
    ];

    const categories = [
        { label: "New Arrivals", href: "/dresses" },
        { label: "Co-ords", href: "/dresses" },
        { label: "Suit Sets", href: "/dresses" },
        { label: "Lehengas", href: "/dresses" },
        { label: "Handblock", href: "/dresses" },
        { label: "Silk", href: "/dresses" },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-background border-b border-slate-100 shadow-sm transition-premium">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-6">
                    <Link href="/" className="flex items-center space-x-3 group shrink-0">
                        <div className="relative w-10 h-10 transition-premium group-hover:scale-105">
                            <Image
                                src="/logo.webp"
                                alt="Gauri Matching Center"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg md:text-2xl font-heading font-black tracking-tight text-foreground leading-none">
                                Gauri
                            </span>
                            <span className="text-xs text-secondary font-bold">Matching Center</span>
                        </div>
                    </Link>

                    {/* Main Navigation - High Weight */}
                    <nav className="hidden lg:flex items-center space-x-8 text-[12px] font-black uppercase tracking-wide text-foreground">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="hover:text-primary transition-premium relative group py-2">
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            </Link>
                        ))}
                    </nav>

                    {/* Search Bar - AJIO Style */}
                    <div className="flex-1 max-w-md hidden md:block">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search fabrics, styles, collections..."
                                className="w-full bg-white border border-slate-200 rounded-full py-2.5 pl-12 pr-4 text-sm font-bold text-foreground focus:outline-none focus:border-primary focus:bg-white transition-all shadow-sm"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 shrink-0">
                        <button className="md:hidden p-2.5 hover:bg-slate-100 rounded-full transition-premium text-foreground">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="p-3 bg-primary/10 hover:bg-primary hover:text-foreground rounded-full transition-premium text-primary relative shadow-sm active:scale-95 group">
                            <ShoppingBag className="w-5 h-5 transition-transform group-hover:-rotate-12" />
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-slate-950 text-[10px] font-black flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                                2
                            </span>
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="lg:hidden p-2.5 hover:bg-slate-100 rounded-full transition-premium text-slate-950 active:scale-95"
                        >
                            <Menu className="w-7 h-7" />
                        </button>
                    </div>
                </div>

                {/* Categories strip under navigation (horizontal scroll on small screens) */}
                <div className="w-full border-t border-slate-100 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="overflow-x-auto no-scrollbar py-3 -mx-4 px-4">
                            <div className="flex gap-3 items-center">
                                {categories.map((c) => (
                                    <Link key={c.label} href={c.href} className="flex-shrink-0">
                                        <div className="px-4 py-2 rounded-lg bg-white border border-slate-100 text-sm font-black text-foreground shadow-sm hover:shadow-md transition-premium">
                                            {c.label}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Premium Mobile Menu Slide-over */}
                <div
                    className={`fixed inset-0 z-[100] transition-opacity duration-500 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div
                    className={`absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-[0_30px_80px_-24px_rgba(2,6,23,0.45)] transition-transform duration-500 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex flex-col h-full">
                        {/* Menu Header */}
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-xl font-heading font-black text-slate-950 tracking-tighter uppercase">The Anthology</span>
                                <span className="text-[10px] font-bold text-slate-500">Gauri Matching Center</span>
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-3 hover:bg-slate-50 rounded-full transition-premium text-slate-950 border border-slate-100 shadow-sm"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Search in Mobile Menu */}
                        <div className="p-6 md:hidden">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-900 focus:outline-none"
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            </div>
                        </div>

                        {/* Nav Links */}
                        <nav className="flex-1 overflow-y-auto p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="group flex items-center justify-between p-6 bg-slate-50 hover:bg-primary/5 rounded-3xl border border-transparent hover:border-primary/10 transition-all"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-heading font-black text-slate-950 group-hover:text-primary transition-colors">
                                            {link.name}
                                        </span>
                                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                                            {link.desc}
                                        </span>
                                    </div>
                                    <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                                </Link>
                            ))}
                        </nav>

                        {/* Menu Footer */}
                        <div className="p-8 bg-slate-950 text-white rounded-t-[3rem]">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Our Location</span>
                                        <span className="text-sm font-bold">Market Yard, Pune</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Call Studio</span>
                                        <span className="text-sm font-bold">+91 98765 00000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
