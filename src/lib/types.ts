import type { StaticImageData } from "next/image";

export interface Dress {
    _id: string;
    name: string;
    image: string | StaticImageData | Record<string, unknown>;
    price: number;
    description?: string;
    isSoldOut: boolean;
    isTrending?: boolean;
    isBestseller?: boolean;
    customizations?: Customization[];
}

export interface Accessory {
    _id: string;
    name: string;
    image: unknown;
    price: number;
    description?: string;
    isSoldOut: boolean;
    isTrending?: boolean;
    isBestseller?: boolean;
}

export interface Customization {
    _id: string;
    title: string;
    options: string[];
}

export interface TailoringService {
    _id: string;
    serviceName: string;
    basePrice: number;
    turnaroundTime?: string;
    description?: string;
}
