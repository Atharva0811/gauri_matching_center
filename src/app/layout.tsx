import "./globals.css";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
    title: "Gauri Matching Center | Premium Women's Boutique in Pune",
    description:
        "Gauri Matching Center offers premium sarees, kurtis, dress materials & custom matching in Pune. Trusted boutique for women since 2008.",
    keywords: [
        "Gauri Matching Center",
        "Women Boutique Pune",
        "Saree Shop Pune",
        "Dress Material Store",
        "Kurti Shop",
    ],
    openGraph: {
        title: "Gauri Matching Center",
        description: "Premium Women's Boutique in Pune",
        images: ["/logo.png"],
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
                className={`${nunito.variable} ${rubik.variable} font-sans antialiased bg-[#fafafa] text-gray-800`}
            >
                {children}
            </body>
        </html>
    );
}
