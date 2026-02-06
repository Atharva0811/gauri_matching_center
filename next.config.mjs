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
        ],
    },
};

export default nextConfig;
