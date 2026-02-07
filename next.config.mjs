import { hostname } from 'os';

/** @type {import('next').NextProp} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
            },
            {
                protocol: "https",
                hostname: "pehrvaa.com"
            }
            ,
            {
                protocol: "https",
                hostname: "cdn.shopify.com"
            }
        ],
        formats: ["image/avif", "image/webp"],
        deviceSizes: [320, 420, 768, 1024, 1200, 1600],
    },
};

export default nextConfig;
