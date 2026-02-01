"use client";

import dynamic from "next/dynamic";
import config from "@/sanity.config";

// Polyfill for Edge Runtime compatibility with certain Sanity internals
if (typeof globalThis.MessageChannel === "undefined") {
    // @ts-ignore
    globalThis.MessageChannel = class MessageChannel {
        port1 = { postMessage: () => { }, onmessage: null, onmessageerror: null, close: () => { }, addEventListener: () => { }, removeEventListener: () => { }, dispatchEvent: () => false };
        port2 = { postMessage: () => { }, onmessage: null, onmessageerror: null, close: () => { }, addEventListener: () => { }, removeEventListener: () => { }, dispatchEvent: () => false };
    };
}

export const runtime = "edge";

const NextStudio = dynamic(() => import("next-sanity/studio").then((mod) => mod.NextStudio), {
    ssr: false,
});

export default function StudioPage() {
    return <NextStudio config={config} />;
}
