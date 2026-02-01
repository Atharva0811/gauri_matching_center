"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    fullWidth?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    fullWidth = false,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = "px-8 py-4 rounded-2xl font-heading font-black uppercase tracking-[0.15em] text-[10px] transition-premium active:scale-95 disabled:opacity-50 disabled:pointer-events-none focus:ring-4 focus:ring-primary/20 outline-none";

    const variants = {
        primary: "bg-primary text-slate-950 hover:bg-primary-dark shadow-[0_10px_20px_-5px_rgba(245,158,11,0.4)]",
        secondary: "bg-secondary text-white hover:bg-secondary-dark shadow-[0_10px_20px_-5px_rgba(0,163,163,0.3)]",
        outline: "border-2 border-slate-200 text-slate-900 hover:border-primary hover:text-primary hover:bg-primary/5 shadow-sm",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
