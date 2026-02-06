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
          DEFAULT: "#EA580C", // Saffron (heritage)
          dark: "#D65A08",
          light: "#FFF2E6",
          foreground: "#0F172A",
        },
        secondary: {
          DEFAULT: "#00A3A3",
          dark: "#008B8B",
          light: "#E0F7F7",
        },
        accent: {
          DEFAULT: "#F5C542", // Gold accent
          dark: "#D4A017",
        },
        cream: {
          DEFAULT: "#FFF8F0",
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
