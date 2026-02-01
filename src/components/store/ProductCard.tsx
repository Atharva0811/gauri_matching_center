"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { urlFor } from "../../sanity/client";
import { Dress, Accessory } from "../../lib/types";
import { generateWhatsAppUrl } from "../../lib/whatsapp";

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
        <div className="group relative bg-white rounded-2xl overflow-hidden silk-border hover:shadow-2xl transition-all duration-500">
            <div className="relative aspect-[3/4] overflow-hidden">
                {product.image ? (
                    <Image
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400">No Image</span>
                    </div>
                )}

                {product.isSoldOut && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center">
                        <span className="text-white font-bold text-xl uppercase tracking-widest border-2 border-white px-4 py-2">
                            Sold Out
                        </span>
                    </div>
                )}
            </div>

            <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                    {product.description || "Premium quality from Pune's finest."}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-black text-black">₹{product.price}</span>
                    <Button
                        onClick={handleWhatsAppClick}
                        disabled={product.isSoldOut}
                        className="px-4 py-2 text-sm"
                    >
                        {product.isSoldOut ? "Unvailable" : "Order on WA"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
