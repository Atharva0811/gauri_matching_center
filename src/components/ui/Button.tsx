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
    const baseStyles = "px-6 py-3 rounded-sm font-heading font-black uppercase tracking-wider text-[12px] transition-premium active:scale-97 disabled:opacity-50 disabled:pointer-events-none outline-none will-change-transform";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-dark shadow-[0_14px_40px_-18px_rgba(234,88,12,0.45)]",
        secondary: "bg-cream border border-slate-200 text-foreground hover:bg-slate-50 shadow-sm",
        outline: "border-2 border-slate-200 text-foreground hover:border-primary hover:text-primary hover:bg-primary/5",
    } as Record<string, string>;

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${fullWidth ? "w-full" : "inline-flex"} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
