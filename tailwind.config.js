/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#F59E0B", // Amber-500
          dark: "#D97706", // Amber-600
          light: "#FEF3C7", // Amber-100
          foreground: "#0F172A",
        },
        secondary: {
          DEFAULT: "#00A3A3", // Teal (kept as secondary)
          dark: "#008B8B",
          light: "#E0F7F7",
        },
        accent: {
          DEFAULT: "#F5C542", // Gold
          dark: "#D97706",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-rubik)", "system-ui"],
      },
    },
  },
  plugins: [],
};
