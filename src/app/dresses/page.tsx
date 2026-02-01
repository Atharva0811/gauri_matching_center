import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ProductCard from "@/components/store/ProductCard";

export default function DressesPage() {
    // Mock data for now
    const mockDresses = [
        { _id: "1", name: "Royal Silk Anarkali Set", price: 2999, isSoldOut: false, description: "Authentic silk material from Pune vendors." },
        { _id: "2", name: "Chanderi Cotton Material", price: 1599, isSoldOut: false, description: "Lightweight and elegant for summer." },
        { _id: "3", name: "Banarasi Handloom Suit", price: 4599, isSoldOut: false, description: "Exquisite hand-woven borders." },
    ];

    return (
        <div className="min-h-screen">
            <Header />
            <main className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-black tracking-tighter mb-8 text-orange-600">PREMIUM DRESSES</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockDresses.map((dress) => (
                        <ProductCard key={dress._id} product={dress as any} type="dress" />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
