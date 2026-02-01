"use client";

import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full glass-morphism border-b border-orange-100">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold tracking-tighter text-orange-600">
                        GAURI<span className="text-black ml-1">MATCHING</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest">
                    <Link href="/dresses" className="hover:text-orange-600 transition-colors">Dresses</Link>
                    <Link href="/accessories" className="hover:text-orange-600 transition-colors">Accessories</Link>
                    <Link href="/tailoring" className="hover:text-orange-600 transition-colors">Tailoring</Link>
                    <Link href="/studio" className="hover:text-orange-600 transition-colors">Studio</Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <button className="p-2 hover:bg-orange-50 rounded-full transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                    </button>
                    <button className="md:hidden p-2 hover:bg-orange-50 rounded-full transition-colors">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
}
