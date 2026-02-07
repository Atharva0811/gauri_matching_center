"use client";

import Image, { type StaticImageData } from "next/image";
import Button from "../ui/Button";
import { Dress, Accessory } from "../../lib/types";
import { ShoppingCart, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Dress | Accessory;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  const handleBuyNow = () => {
    // navigate to product page; Razorpay flow will be integrated later
    router.push(`/product/${product._id}`);
  };

  // determine image prop for next/image
  let imageProp: string | StaticImageData | Record<string, unknown> = "";

  if (typeof product.image === "string") {
    imageProp = product.image;
  } else if (
    product.image &&
    typeof product.image === "object" &&
    "src" in (product.image as unknown as Record<string, unknown>)
  ) {
    imageProp = product.image as StaticImageData; // static import
  } else {
    // assume sanity image object
    imageProp = product.image as unknown as Record<string, unknown>;
  }

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden border border-slate-100 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] hover:shadow-[0_30px_60px_-24px_rgba(15,23,42,0.18)] transform will-change-transform transition-premium">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
        {product.image ? (
          <Image
            src={imageProp as string | StaticImageData}
            alt={product.name}
            fill
            placeholder={typeof imageProp === "string" ? "empty" : "blur"}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-slate-300 font-black uppercase tracking-[0.2em] text-[10px]">
              Premium Textile
            </span>
          </div>
        )}

        {/* Trending/Bestseller Badge */}
        {(product.isTrending || product.isBestseller) && !product.isSoldOut && (
          <div className="absolute top-4 left-4 z-20">
            <div
              className={`px-4 py-1 rounded-md text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-2 ${
                product.isBestseller
                  ? "bg-foreground text-white"
                  : "bg-accent text-foreground"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {product.isBestseller ? "Bestseller" : "Trending"}
            </div>
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 p-2.5 bg-white rounded-full shadow-sm text-slate-400 hover:text-red-500 transition-colors z-20">
          <Heart className="w-5 h-5" />
        </button>

        {product.isSoldOut && (
          <div className="absolute inset-0 bg-foreground/70 flex items-center justify-center z-10">
            <span className="text-white font-black text-xs uppercase tracking-wider bg-foreground/90 px-6 py-3 rounded-md border border-white/10 shadow-lg">
              Sold Out
            </span>
          </div>
        )}

        {/* Meta Badge - Price focus */}
        <div className="absolute bottom-4 left-4 z-10">
          <div className="px-3 py-1 rounded-md bg-accent text-foreground font-black text-sm tracking-tight shadow-sm border border-white/20">
            ₹{product.price}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-2 md:p-7">
        <div className=" m-1 md:mb-3">
          <h3 className="text-sm sm:text-lg md:text-xl font-heading font-black text-foreground group-hover:text-primary transition-colors leading-tight tracking-tight">
            {product.name}
          </h3>
        </div>
        <p className="text-xs md:text-sm text-slate-700 line-clamp-2 m-1 md:m-3 md:mb-6 font-medium leading-relaxed opacity-95">
          {product.description ||
            "Exquisite textile selection, handpicked for quality and comfort."}
        </p>

        <Button
          onClick={handleBuyNow}
          disabled={product.isSoldOut}
          variant={product.isSoldOut ? "outline" : "primary"}
          fullWidth
          className="flex items-center justify-center gap-2 md:gap-3 py-3 text-xs tracking-wider shadow-none hover:shadow-md"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{product.isSoldOut ? "STAY TUNED" : "BUY NOW"}</span>
        </Button>
      </div>
    </div>
  );
}
