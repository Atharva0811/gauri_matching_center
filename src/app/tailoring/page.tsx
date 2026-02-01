import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Button from "@/components/ui/Button";
import { client } from "@/sanity/client";
import { TailoringService } from "@/lib/types";

export const revalidate = 60; // Revalidate every minute

export default async function TailoringPage() {
    const query = `*[_type == "tailoring"] | order(basePrice asc)`;
    const services: TailoringService[] = await client.fetch(query);

    return (
        <div className="min-h-screen">
            <Header />
            <main className="container mx-auto px-4 py-12">
                <header className="mb-12">
                    <h1 className="text-5xl font-black italic tracking-tighter text-black uppercase">
                        Stitching <span className="text-orange-600">Services</span>
                    </h1>
                    <p className="text-gray-500 mt-2 font-medium">Expert tailoring and finishing for all your ethnic wear needs.</p>
                </header>

                {services.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service._id} className="p-8 bg-white silk-border rounded-2xl flex flex-col justify-between hover:shadow-xl transition-shadow">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">{service.serviceName}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.description || "Expert stitching with premium finishing."}</p>
                                    <div className="flex items-center space-x-4">
                                        <span className="text-sm font-bold bg-orange-50 text-orange-600 px-3 py-1 rounded-full">
                                            {service.turnaroundTime || "3-5 Days"}
                                        </span>
                                        <span className="text-2xl font-black">₹{service.basePrice}</span>
                                    </div>
                                </div>
                                <Button className="mt-8" fullWidth>Enquire on WhatsApp</Button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                        <div className="max-w-md mx-auto space-y-4">
                            <div className="text-6xl">✂️</div>
                            <h2 className="text-2xl font-bold text-gray-900">Tailors Busy Today</h2>
                            <p className="text-gray-500">We are currently at full capacity. Check back tomorrow for new stitching slots!</p>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
