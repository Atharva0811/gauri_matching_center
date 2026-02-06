import "./globals.css";
import { Nunito, Rubik } from "next/font/google";

const nunito = Nunito({
    subsets: ["latin"],
    variable: "--font-nunito",
    weight: ["300", "400", "600", "700"],
});

const rubik = Rubik({
    subsets: ["latin"],
    variable: "--font-rubik",
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Gauri Matching Center",
    description:
        "Gauri Matching Center — Premium ethnic wear & tailoring",
    keywords: [
        "Gauri Matching Center",
        "Women Boutique Pune",
        "Saree Shop Pune",
        "Dress Material Store",
        "Kurti Shop",
    ],
    openGraph: {
        title: "Gauri Matching Center",
        description: "Premium ethnic wear & tailoring",
        images: ["/logo.webp"],
    },
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${nunito.variable} ${rubik.variable} font-sans antialiased bg-background text-foreground`}
            >
                {/* <AnnouncementBar /> */}
                {children}
            </body>
        </html>
    );
}
