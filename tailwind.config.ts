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
        violet: {
          light: "#C4B5FD",
          DEFAULT: "#8B5CF6",
          dark: "#4C1D95",
        },
        cream: "#F7F4EC",
        // Texto secundario: más claro que antes para que no se pierda sobre fondos oscuros.
        muted: "#CBD5E1",
        dim: "#94A3B8",
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        goldGlow: "0 0 60px -10px rgba(212,175,55,0.45)",
        goldGlowXl:
          "0 0 0 1px rgba(245,216,137,0.35), 0 0 90px -10px rgba(212,175,55,0.6), 0 30px 80px -30px rgba(0,0,0,0.9)",
        tealGlow: "0 0 60px -10px rgba(20,184,166,0.4)",
        violetGlow: "0 0 60px -10px rgba(139,92,246,0.45)",
        cardGlow: "0 20px 60px -20px rgba(0,0,0,0.6)",
        lightCard: "0 18px 40px -18px rgba(15,23,42,0.35)",
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
        aurora: {
          "0%": { transform: "translate3d(-6%, -4%, 0) rotate(0deg) scale(1)" },
          "50%": { transform: "translate3d(5%, 3%, 0) rotate(8deg) scale(1.08)" },
          "100%": { transform: "translate3d(-3%, 6%, 0) rotate(-6deg) scale(1.02)" },
        },
        ctaPulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(245,216,137,0.55)" },
          "70%": { boxShadow: "0 0 0 22px rgba(245,216,137,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(245,216,137,0)" },
        },
        sweep: {
          "0%": { transform: "translateX(-120%) skewX(-20deg)" },
          "60%, 100%": { transform: "translateX(320%) skewX(-20deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 1.6s ease-in-out infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        slideInUp: "slideInUp 0.7s ease-out both",
        toastLife: "toastIn 5s ease-in-out forwards",
        aurora: "aurora 18s ease-in-out infinite alternate",
        ctaPulse: "ctaPulse 2.4s ease-out infinite",
        sweep: "sweep 3.2s ease-in-out infinite",
        bob: "bob 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
