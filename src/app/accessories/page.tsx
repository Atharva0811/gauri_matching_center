import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ProductCard from "@/components/store/ProductCard";

export default function AccessoriesPage() {
    // Mock data for now
    const mockAccessories = [
        { _id: "a1", name: "Designer Latkan Set", price: 450, isSoldOut: false, description: "Handcrafted latkans for bloues and suits." },
        { _id: "a2", name: "Zari Border (5 meters)", price: 850, isSoldOut: false, description: "Traditional gold zari border for sarees." },
    ];

    return (
        <div className="min-h-screen">
            <Header />
            <main className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-black tracking-tighter mb-8 text-orange-600">DRESS ACCESSORIES</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockAccessories.map((acc) => (
                        <ProductCard key={acc._id} product={acc as any} type="accessory" />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
