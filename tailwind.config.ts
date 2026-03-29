import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["var(--font-fredoka)", "cursive"],
        nunito: ["var(--font-nunito)", "sans-serif"],
        dm: ["var(--font-dm)", "sans-serif"],
      },
      colors: {
        sun: "#FFB800",
        coral: "#FF6B6B",
        mint: "#4ECDC4",
        violet: { DEFAULT: "#845EC2", dark: "#6D35B5" },
        blue: { DEFAULT: "#2196F3", light: "#EFF6FF" },
        green: { DEFAULT: "#43A047", light: "#F0FDF4" },
        orange: { DEFAULT: "#FF8C42", light: "#FFF7ED" },
        pink: "#FF6B9D",
        bg: "#FFF9F0",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "slide-up": "slideUp 0.4s ease-out",
        "fade-in": "fadeIn 0.3s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
