import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#070A12",
          soft: "#0C1120",
          panel: "#111729",
          panelAlt: "#161D33",
          line: "#232B45",
        },
        gold: {
          light: "#F5D889",
          DEFAULT: "#D4AF37",
          dark: "#9C7A1E",
        },
        teal: {
          light: "#5EEAD4",
          DEFAULT: "#14B8A6",
          dark: "#0F766E",
        },
        cream: "#F7F4EC",
        muted: "#94A3B8",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        goldGlow: "0 0 60px -10px rgba(212,175,55,0.45)",
        tealGlow: "0 0 60px -10px rgba(20,184,166,0.4)",
        cardGlow: "0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.14), transparent 60%)",
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        toastIn: {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.96)" },
          "10%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "90%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "0", transform: "translateY(-10px) scale(0.98)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 1.6s ease-in-out infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        slideInUp: "slideInUp 0.7s ease-out both",
        toastLife: "toastIn 5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
