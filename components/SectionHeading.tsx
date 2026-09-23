import RevealSection from "@/components/RevealSection";

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  accent = "gold",
}: {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  accent?: "gold" | "teal";
}) {
  return (
    <RevealSection
      className={`mb-12 sm:mb-16 max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {kicker && (
        <span
          className={`inline-block font-display text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-4 ${
            accent === "gold" ? "text-gold-light" : "text-teal-light"
          }`}
        >
          {kicker}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] text-cream text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </RevealSection>
  );
}
