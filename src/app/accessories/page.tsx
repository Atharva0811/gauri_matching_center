import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ProductCard from "@/components/store/ProductCard";
import { client } from "@/sanity/client";
import { Accessory } from "@/lib/types";

export const revalidate = 60; // Revalidate every minute

export default async function AccessoriesPage() {
    const query = `*[_type == "accessory"] | order(_createdAt desc)`;
    const accessories: Accessory[] = await client.fetch(query);

    return (
        <div className="min-h-screen">
            <Header />
            <main className="container mx-auto px-4 py-12">
                <header className="mb-12">
                    <h1 className="text-5xl font-black italic tracking-tighter text-black uppercase">
                        Matching <span className="text-orange-600">Center</span>
                    </h1>
                    <p className="text-gray-500 mt-2 font-medium">Borders, Latkans, and finishing touches for your ethnic wear.</p>
                </header>

                {accessories.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {accessories.map((acc) => (
                            <ProductCard key={acc._id} product={acc} type="accessory" />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                        <div className="max-w-md mx-auto space-y-4">
                            <div className="text-6xl">✨</div>
                            <h2 className="text-2xl font-bold text-gray-900">Accessories Restocking</h2>
                            <p className="text-gray-500">We are updating our matching catalog. Visit us in Pune for immediate assistance!</p>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
