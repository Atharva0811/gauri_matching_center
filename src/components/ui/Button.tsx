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
    const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-200",
        secondary: "bg-black text-white hover:bg-gray-800",
        outline: "border-2 border-orange-600 text-orange-600 hover:bg-orange-50",
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
