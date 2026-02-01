import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Button from "@/components/ui/Button";

export default function TailoringPage() {
    const services = [
        { id: "t1", name: "Blouse Stitching", price: 600, time: "2-3 Days", desc: "Expert stitching with custom padding and back designs." },
        { id: "t2", name: "Anarkali Suit Set", price: 1200, time: "4-5 Days", desc: "Full flare anarkali with lining and finishing." },
        { id: "t3", name: "Fall & Pico", price: 150, time: "Same Day", desc: "Saree fall stitching and edge pico finishing." },
    ];

    return (
        <div className="min-h-screen">
            <Header />
            <main className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-black tracking-tighter mb-2 text-orange-600">TAILORING SERVICES</h1>
                <p className="text-gray-500 mb-12">Expert stitching and finishing for all your ethnic wear needs.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="p-8 bg-white silk-border rounded-2xl flex flex-col justify-between hover:shadow-xl transition-shadow">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">{service.name}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm font-bold bg-orange-50 text-orange-600 px-3 py-1 rounded-full">{service.time}</span>
                                    <span className="text-2xl font-black">₹{service.price}</span>
                                </div>
                            </div>
                            <Button className="mt-8" fullWidth>Enquire on WhatsApp</Button>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
