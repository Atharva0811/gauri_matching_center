import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/store/ProductCard";
import { Sparkles } from "lucide-react";
import { Dress } from "@/lib/types";

export const revalidate = 60; // Revalidate every minute

export default async function DressesPage() {
      const dresses: Dress[] = [
        {
          _id: "4c778820-e432-4d7d-a536-bc212dc91931",
          description:
            'Design: A vibrant sleeveless tunic or short kurta featuring a lively pattern of pink and orange floral hues.\n\nStyle: Designed as a "tunic co-ord," it often features a relaxed fit and can be paired with matching printed pants or solid white trousers for a fresh summer look.',
          image: "/collections/image1.png",
          isSoldOut: false,
          name: "Pink and Orange Floral Printed Sleeveless Tunic/Co-ord Set.",
          price: 1299,
        },
        {
          _id: "a28091e6-7669-41b5-9b6b-23f87e7512c8",
          description:
            "Top: A calf-length straight-fit kurta in turquoise blue, adorned with all-over floral or Bandhani-inspired prints.\n\nBottom: Often paired with contrasting chevron (zigzag) or matching floral printed trousers.\n\nDetails: May feature delicate thread work, sequins, or tassel detailing on the neckline and dupatta.",
          image: "/collections/image2.png",
          isSoldOut: false,
          name: "Turquoise Blue Floral Printed Kurta Set with Chevron Pants.",
          price: 3299,
        },
        {
          _id: "48096ec8-8dd6-4652-a570-c56db0cce7a4",
          description:
            "Design: A rich wine-colored flared (A-line) kurta featuring intricate floral embroidery on the chest/yoke area.\n\nSet: Often includes matching wine trousers and a coordinating dupatta, sometimes with multicolored floral patterns to complement the embroidery.\n\nFabric: Typically made from premium fabrics like Roman silk, chiffon, or French crepe for a sophisticated, formal appearance.",
          image: "/collections/image3.png",
          isSoldOut: false,
          name: "Wine Solid Flared Kurta with Embroidered Yoke and Matching Dupatta.",
          price: 5299,
        },
        {
          _id: "45789ab6-c588-4d2a-a06c-7e60e16a2439",
          description:
            "Top: A white-based kurta with a vibrant blue floral print, often featuring a flared hemline, V-neck, and lace-trimmed sleeves.\n\nBottom: Unique matching dhoti-style pants that provide a contemporary fusion twist to the ethnic look.\n\nBest Use: This set is popular for festive occasions, daily office wear, or casual outings due to its comfortable and stylish silhouette.",
          image: "/collections/image4.png",
          isSoldOut: false,
          name: "Blue & White Floral Printed Kurta with Dhoti Pants Set.",
          price: 4599,
        },
        {
          _id: "a4a07b3f-d2f2-4b6f-bb02-a527029c9b2d",
          description:
            'Design: The top features a black base adorned with a charming floral "butti" or jaal print, often in contrasting white, maroon, or beige.\n\nNeckline & Sleeves: It typically has a mandarin collar (Chinese collar) or a square/V-neckline with a front button placket. The model is wearing a version with long or three-quarter sleeves.\n\nBottoms: It is frequently paired with white or off-white ankle-length trousers or straight-fit pants for a clean, modern look.\n\nFabric: Most commonly crafted from 100% premium cotton or cotton slub, making it breathable for casual and daily wear.',
          image: "/collections/image5.png",
          isSoldOut: false,
          name: "Black Floral Printed Short Kurta (or Kurti) with Contrast Trousers.",
          price: 2499,
        },
        {
          _id: "a65718d9-bae3-43f6-8127-48eb19d95018",
          description:
            "Style: This is a contemporary Ethnic Co-ord Set consisting of a straight-fit long kurta and matching patterned trousers.\n\nDesign Description: * Kurta: A sleeveless, V-neck long kurta in a cream/beige base featuring a bold, all-over maroon floral print.\n\nTrousers: Matching ankle-length trousers (often referred to as cigarette pants or straight-cut palazzos) featuring a complementary geometric or ethnic pattern in the same maroon and beige palette.\n\nFabric: Typically made from breathable fabrics like Cotton, Rayon, or Viscose Slub, making it ideal for casual wear or office attire.",
          image: "/collections/image6.png",
          isSoldOut: false,
          name: "Floral Printed Sleeveless Kurta & Trousers Co-Ord Set.",
          price: 3999,
        },
        {
          _id: "f6e0fe83-b608-47d5-beda-ad0ad57cc1b9",
          description:
            'Features a mandarin collar (Chinese collar) with a front button placket.\nThree-quarter sleeves and a hip-length "short kurta" or tunic silhouette.\nTraditional Ikat geometric print in shades of indigo and white/grey.',
          image: "/collections/image7.png",
          isSoldOut: false,
          name: "Blue & Indigo Ikat Printed Short Kurti (Tunic).",
          price: 1299,
        },
      ];

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="container mx-auto px-4 py-16 md:py-32">
                <header className="mb-32 border-b border-slate-100 pb-20 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="text-secondary text-[11px] font-black tracking-[0.6em] uppercase mb-8 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-secondary" />
                            THE FABRIC OF IDENTITY
                        </div>
                        <h1 className="text-7xl md:text-9xl font-heading font-black text-slate-950 leading-none tracking-tighter mb-12">
                            The Fabric of <br />
                            <span className="text-primary italic underline decoration-secondary/10 decoration-[20px] underline-offset-8">Legacy.</span>
                        </h1>
                        <p className="text-slate-900 mt-12 font-bold text-2xl max-w-2xl leading-snug opacity-90">
                            Every thread tells a million stories. Discover Pune&apos;s most exclusive textile anthology—handpicked for those who appreciate the finer things.
                        </p>
                    </div>
                    {/* Background Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                </header>

                <div className="flex items-center justify-between mb-16">
                    <h2 className="text-3xl font-heading font-black text-slate-950 tracking-tighter uppercase">The Anthology</h2>
                    <span className="text-[10px] font-black text-primary tracking-[0.4em] uppercase">{dresses.length} Pieces Available</span>
                </div>

                {dresses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
                        {dresses.map((dress) => (
                            <ProductCard key={dress._id} product={dress} />
                        ))}
                    </div>
                ) : (
                    <div className="py-40 text-center bg-slate-50 rounded-[5rem] border-2 border-dashed border-slate-200 relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl transition-premium group-hover:scale-110 group-hover:rotate-12 border border-slate-50">
                                <Sparkles className="w-12 h-12 text-primary" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-950 mb-6 tracking-tighter uppercase">Curating Excellence...</h2>
                            <p className="text-slate-950 text-sm max-w-sm mx-auto font-black uppercase tracking-[0.3em] opacity-60 leading-relaxed mb-10">
                                Our master weavers are refining the next anthology of premium textiles.
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
                        &quot;Your style is the only anthology you&apos;ll ever write. <span className="text-secondary underline decoration-primary/20 decoration-8 underline-offset-4">Make it a masterpiece.</span>&quot;
                    </blockquote>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-heading font-black text-slate-950 mb-2 tracking-tighter">15+</span>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none text-center">Years of<br />Heritage</span>
                        </div>
                        <div className="hidden md:block w-px h-16 bg-slate-200" />
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-heading font-black text-slate-950 mb-2 tracking-tighter">100%</span>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none text-center">Authentic<br />Textiles</span>
                        </div>
                        <div className="hidden md:block w-px h-16 bg-slate-200" />
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-heading font-black text-slate-950 mb-2 tracking-tighter">5k+</span>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none text-center">Studio<br />Choices</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
