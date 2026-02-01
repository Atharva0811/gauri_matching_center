export default function Footer() {
    return (
        <footer className="bg-charcoal text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tighter">
                            GAURI<span className="text-orange-500 ml-1">MATCHING</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Pune's premier destination for high-quality dress materials,
                            custom tailoring, and exquisite accessories. Established in the heart of Pune.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Store Hours</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Mon - Sat: 10:00 AM - 9:00 PM</li>
                            <li>Sunday: 11:00 AM - 8:00 PM</li>
                            <li className="text-orange-400">Order by 9 AM for Same-Day Delivery</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Connect</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Pune, Maharashtra, India
                        </p>
                        <div className="flex space-x-4">
                            {/* Social icons placeholders */}
                            <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-orange-600 transition-colors" />
                            <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-orange-600 transition-colors" />
                            <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-orange-600 transition-colors" />
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} Gauri Matching Center. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
