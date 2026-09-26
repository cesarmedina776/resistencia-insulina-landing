export default function CTAButton({
  children,
  subtext,
}: {
  children: React.ReactNode;
  subtext?: string;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="relative w-full sm:w-auto">
        {/* Halo difuso detrás del botón */}
        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-gold/60 via-gold-light/70 to-teal/50 blur-2xl opacity-70 animate-pulseDot" />
        <button
          type="button"
          className="group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-full border border-white/40 bg-gradient-to-b from-[#FFE9A8] via-gold to-gold-dark px-8 sm:px-14 py-5 sm:py-6 font-display text-lg sm:text-xl font-black uppercase tracking-wide text-ink shadow-[0_12px_40px_-8px_rgba(212,175,55,0.9),inset_0_2px_0_rgba(255,255,255,0.6),inset_0_-4px_0_rgba(0,0,0,0.2)] animate-ctaPulse transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
        >
          {/* Brillo que recorre el botón */}
          <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-sweep" />
          <span className="relative drop-shadow-[0_1px_0_rgba(255,255,255,0.5)]">
            {children}
          </span>
        </button>
      </div>
      {subtext && (
        <p className="flex items-center gap-2 text-sm sm:text-base font-medium text-muted text-center">
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-teal-light" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 118 0v3" />
          </svg>
          {subtext}
        </p>
      )}
    </div>
  );
}
