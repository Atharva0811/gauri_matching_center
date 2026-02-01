"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { urlFor } from "../../sanity/client";
import { Dress, Accessory } from "../../lib/types";
import { generateWhatsAppUrl } from "../../lib/whatsapp";
import { ShoppingCart, ExternalLink, Heart } from "lucide-react";

interface ProductCardProps {
    product: Dress | Accessory;
    type: "dress" | "accessory";
}

export default function ProductCard({ product, type }: ProductCardProps) {
    const handleWhatsAppClick = () => {
        const url = generateWhatsAppUrl({
            id: product._id,
            name: product.name,
            type: type,
            price: product.price,
        });
        window.open(url, "_blank");
    };

    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
                {product.image ? (
                    <Image
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-slate-300 font-black uppercase tracking-[0.2em] text-[10px]">Premium Textile</span>
                    </div>
                )}

                {/* Trending/Bestseller Badge */}
                {(product.isTrending || product.isBestseller) && !product.isSoldOut && (
                    <div className="absolute top-4 left-4 z-20">
                        <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg flex items-center gap-2 ${product.isBestseller
                            ? "bg-slate-950 text-white border border-white/20"
                            : "bg-secondary text-slate-950"
                            }`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            {product.isBestseller ? "Bestseller" : "Trending Now"}
                        </div>
                    </div>
                )}

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur rounded-full shadow-sm text-slate-400 hover:text-red-500 transition-colors z-20">
                    <Heart className="w-5 h-5" />
                </button>

                {product.isSoldOut && (
                    <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center z-10">
                        <span className="text-white font-black text-xs uppercase tracking-[0.3em] bg-slate-950 px-6 py-3 rounded-full border border-white/20 shadow-2xl">
                            Sold Out
                        </span>
                    </div>
                )}

                {/* Meta Badge - Price focus */}
                <div className="absolute bottom-4 left-4 font-black bg-white shadow-lg px-4 py-2 rounded-xl text-slate-950 text-sm tracking-tight z-10 border border-slate-100 flex items-center gap-1.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Starts at</span>
                    ₹{product.price}
                </div>
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-7">
                <div className="mb-3">
                    <h3 className="text-xl font-heading font-black text-slate-950 group-hover:text-primary transition-colors leading-tight tracking-tight">
                        {product.name}
                    </h3>
                </div>
                <p className="text-sm text-slate-800 line-clamp-2 mb-8 font-medium leading-relaxed opacity-90">
                    {product.description || "Exquisite textile selection, handpicked for quality and comfort."}
                </p>

                <Button
                    onClick={handleWhatsAppClick}
                    disabled={product.isSoldOut}
                    variant={product.isSoldOut ? "outline" : "primary"}
                    fullWidth
                    className="flex items-center justify-center gap-3 py-4 text-[11px] tracking-[0.2em] shadow-none hover:shadow-xl transition-all"
                >
                    <ShoppingCart className="w-4 h-4" />
                    <span>{product.isSoldOut ? "STAY TUNED" : "CLAIM THIS LOOK"}</span>
                </Button>
            </div>
        </div>
    );
}
