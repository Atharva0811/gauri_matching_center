import { Dress } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

import { Search, ShoppingCart, User, Truck, RefreshCw, Shield, Headphones } from "lucide-react";
import type React from 'react';

import Slideshow from "@/components/ui/Slideshow";
import ProductCard from "@/components/store/ProductCard";


export const revalidate = 60;

/* ===============================
   HOME PAGE
================================ */
export default async function Home() {
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

  const features: Array<[React.ComponentType<React.SVGProps<SVGSVGElement>>, string, string]> = [
    [Truck, "Free Shipping", "Above ₹999"],
    [RefreshCw, "Easy Returns", "7 Days Policy"],
    [Shield, "Secure Payment", "100% Safe"],
    [Headphones, "Support", "24/7 Help"],
  ];

    return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-primaryBrand px-3 py-2 rounded shadow">Skip to content</a>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo.webp"
                width={90}
                height={50}
                alt="Gauri Matching Center"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav role="navigation" aria-label="Primary" className="hidden md:flex gap-6 text-sm font-semibold">
              {[
                ["Suit Sets", "/collections/suit-sets"],
                ["Dresses", "/collections/dresses"],
                ["Indo-Western", "/collections/indo-western"],
                ["Lehengas", "/collections/lehengas"],
                ["Loungewear", "/collections/loungewear"],
              ].map(([name, link]) => (
                <Link
                  key={name}
                  href={link}
                  className="hover:text-primaryBrand transition"
                >
                  {name}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-3">
              <button aria-label="Search" className="p-2 hover:bg-muted rounded focus:outline-none focus:ring-2 focus:ring-primaryBrand/40">
                <Search size={20} />
              </button>

              <Link href="/account" aria-label="Account" className="p-2 hover:bg-muted rounded focus:outline-none focus:ring-2 focus:ring-primaryBrand/40">
                <User size={20} />
              </Link>

              <Link
                href="/cart"
                aria-label="Cart"
                className="p-2 hover:bg-muted rounded relative focus:outline-none focus:ring-2 focus:ring-primaryBrand/40"
              >
                <ShoppingCart size={20} />

                <span className="absolute -top-1 -right-1 bg-primaryBrand text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative">
        <Slideshow
          slides={[
            { src: "https://pehrvaa.com/cdn/shop/files/BB.png?v=1766580942&width=3840", href: "/collections/loungewear", alt: "Loungewear" },
            { src: "https://pehrvaa.com/cdn/shop/files/Simple_Modern_Photo_Collage_Autumn_Fashion_Sale_Banner_1350_x_1950_px_8ffed061-4beb-4171-9eef-2700f2071459.png?v=1766423629&width=2000", href: "/collections/suit-sets", alt: "Suit Sets" },
            { src: "https://pehrvaa.com/cdn/shop/files/Untitled_1400_x_700_px_1.png?v=1755870215&width=3840", href: "/collections/new-arrivals", alt: "New Arrivals" },
          ]}
        />

        {/* Overlay CTA */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-3xl md:text-5xl font-black mb-4">
              Premium Ethnic Wear
            </h1>

            <p className="mb-6 text-sm md:text-base">
              Handpicked Fabrics · Pune Exclusive
            </p>

            <Link
              href="/collections/new-arrivals"
              className="inline-block bg-primaryBrand px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURED CATEGORIES ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase">
              Shop by Category
            </h2>

            <p className="mt-3 text-muted-foreground">
              Curated collections for every occasion
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                name: "Suit Sets",
                image: "/categories/suit-sets.png",
                link: "/collections/suit-sets",
              },
              {
                name: "Lehengas",
                image: "/categories/lehengas.png",
                link: "/collections/lehengas",
              },
              {
                name: "Indo-Western",
                image: "/categories/indo-western.png",
                link: "/collections/indo-western",
              },
              {
                name: "Loungewear",
                image: "/categories/loungewear.png",
                link: "/collections/loungewear",
              },
              {
                name: "Cotton Pants",
                image: "/categories/cotton-pants.png",
                link: "/collections/classic-cotton-pants",
              },
              {
                name: "Festive Wear",
                image: "/categories/festive.png",
                link: "/collections/festive",
              },
              {
                name: "New Arrivals",
                image: "/categories/new-arrivals.png",
                link: "/collections/new-arrivals",
              },
              {
                name: "Best Sellers",
                image: "/categories/bestsellers.png",
                link: "/collections/bestsellers",
              },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={cat.link}
                className="group relative rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="relative h-[200px] sm:h-[300px] lg:h-[400px]">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                </div>

                {/* Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur px-5 py-2 rounded-full text-sm font-bold tracking-wide text-foreground shadow">
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section id="main" className="py-16 md:py-20 bg-gradient-to-b from-orange-50 via-white to-yellow-50/40 relative">
        {/* Decorative Blur */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block mb-3 px-4 py-1 text-xs tracking-widest uppercase bg-primaryBrand/10 text-primaryBrand rounded-full">
              Latest Collection
            </span>

            <h2 className="text-3xl md:text-5xl font-black uppercase">
              New Arrivals
            </h2>

            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Premium fabrics · Boutique collections · Handpicked styles
            </p>
          </div>

          {/* Top Bar */}
          <div className="flex flex-wrap gap-3 justify-between items-center mb-6 bg-white/70 backdrop-blur px-4 py-3 rounded-xl shadow-sm border">
            <p className="text-sm text-muted-foreground font-medium">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {dresses.length}
              </span>{" "}
              Products
            </p>

            <select className="border px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primaryBrand/40">
              <option>Sort: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Products Panel */}
          <div className="bg-white/80 backdrop-blur rounded-3xl p-4 md:p-6 shadow-lg border border-primaryBrand/10">
            {/* Grid: two columns on small screens for better mobile scanning */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {dresses.map((dress) => (
                <ProductCard key={dress._id} product={dress} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {features.map(([Icon, title, desc]) => (
              <div key={title}>
                <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center shadow mb-4">
                  <Icon className="w-7 h-7 text-primaryBrand" />
                </div>

                <h3 className="font-semibold">{title}</h3>

                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="py-20 bg-primaryBrand text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Exclusive Offers</h2>

          <p className="mb-6 text-sm">
            Subscribe for latest collections & discounts
          </p>

          <form className="max-w-md mx-auto flex rounded overflow-hidden" aria-label="Subscribe to newsletter">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              aria-required="true"
              placeholder="Your email"
              className="flex-1 px-4 py-3 text-black border rounded-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryBrand/40"
            />

            <button type="submit" className="bg-black text-white px-6 font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryBrand/40">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Gauri Matching Center</h3>

              <p className="text-muted-foreground">
                Premium ethnic wear for modern women.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>

              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  ["About", "/about"],
                  ["Contact", "/contact"],
                  ["Privacy", "/privacy"],
                  ["Terms", "/terms"],
                ].map(([n, l]) => (
                  <li key={n}>
                    <Link href={l} className="hover:text-primaryBrand">
                      {n}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Contact</h4>

              <p className="text-muted-foreground mb-3">
                WhatsApp: +91 7773888305
              </p>

              <a
                href="https://wa.me/917773888305"
                target="_blank"
                className="inline-block bg-primaryBrand text-white px-4 py-2 rounded hover:opacity-90"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
            © 2026 Gauri Matching Center. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
