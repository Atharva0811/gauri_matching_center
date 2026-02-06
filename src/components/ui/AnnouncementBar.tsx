"use client";

import { Megaphone } from "lucide-react";

export default function AnnouncementBar() {
    return (
        <div className="bg-teal-500 py-2.5 text-center text-sm font-bold">
            <div className="container mx-auto px-4 flex items-center justify-center gap-3">
                <Megaphone className="w-4 h-4 text-foreground" />
                <p className="text-xs uppercase tracking-wider">
                    <span className="font-black">Free Shipping</span> on All Prepaid Orders
                </p>
            </div>
        </div>
    );
}
