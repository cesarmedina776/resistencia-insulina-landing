export default function CTAButton({
  children,
  subtext,
}: {
  children: React.ReactNode;
  subtext?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light px-8 sm:px-12 py-4 sm:py-5 font-display text-base sm:text-lg font-extrabold text-ink shadow-goldGlow transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
      >
        <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="relative">{children}</span>
      </button>
      {subtext && (
        <p className="text-xs sm:text-sm text-muted text-center">{subtext}</p>
      )}
    </div>
  );
}
