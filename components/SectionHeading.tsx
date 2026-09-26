import RevealSection from "@/components/RevealSection";

type Accent = "gold" | "teal" | "red" | "violet" | "blue";

const KICKER: Record<Accent, { dark: string; light: string; bar: string }> = {
  gold: {
    dark: "border-gold/40 bg-gold/10 text-gold-light",
    light: "border-amber-700/30 bg-amber-100 text-amber-800",
    bar: "from-gold-dark via-gold-light to-gold-dark",
  },
  teal: {
    dark: "border-teal/40 bg-teal/10 text-teal-light",
    light: "border-teal-700/30 bg-teal-50 text-teal-800",
    bar: "from-teal-dark via-teal-light to-teal-dark",
  },
  red: {
    dark: "border-red-400/40 bg-red-500/10 text-red-300",
    light: "border-red-700/30 bg-red-50 text-red-800",
    bar: "from-red-700 via-red-400 to-red-700",
  },
  violet: {
    dark: "border-violet/40 bg-violet/15 text-violet-light",
    light: "border-violet-700/30 bg-violet-50 text-violet-800",
    bar: "from-violet-dark via-violet-light to-violet-dark",
  },
  blue: {
    dark: "border-sky-400/40 bg-sky-500/10 text-sky-300",
    light: "border-sky-700/30 bg-sky-50 text-sky-800",
    bar: "from-sky-700 via-sky-300 to-sky-700",
  },
};

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  accent = "gold",
  theme = "dark",
}: {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  accent?: Accent;
  theme?: "dark" | "light";
}) {
  const k = KICKER[accent];
  const isLight = theme === "light";
  return (
    <RevealSection
      variant="blur"
      className={`mb-12 sm:mb-16 max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {kicker && (
        <span
          className={`inline-block rounded-full border px-4 py-1.5 font-display text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] mb-5 ${
            isLight ? k.light : k.dark
          }`}
        >
          {kicker}
        </span>
      )}
      <h2
        className={`font-display text-[2rem] leading-[1.12] sm:text-5xl md:text-[3.4rem] font-extrabold text-balance ${
          isLight ? "text-slate-900 title-pop-light" : "text-white title-pop"
        }`}
      >
        {title}
      </h2>
      <div
        className={`heading-bar mt-6 bg-gradient-to-r ${k.bar} ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`mt-6 text-lg sm:text-xl leading-relaxed font-medium ${
            isLight ? "text-slate-700" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </RevealSection>
  );
}
