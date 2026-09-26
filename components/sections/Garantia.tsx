import RevealSection from "@/components/RevealSection";
import HotmartBadge from "@/components/HotmartBadge";

export default function Garantia() {
  return (
    <section className="sec-garantia relative py-24 sm:py-32 overflow-hidden">
      {/* Escudo de marca de agua */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 text-white/[0.05]"
        fill="currentColor"
      >
        <path d="M12 2.5l7.5 3v5.6c0 4.9-3.2 9.2-7.5 10.4-4.3-1.2-7.5-5.5-7.5-10.4V5.5l7.5-3z" />
      </svg>

      <div className="relative mx-auto max-w-3xl px-5 sm:px-6 text-center">
        <RevealSection variant="zoom">
          <div className="relative mx-auto mb-8 flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center">
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-white/40 animate-spinSlow" />
            <div className="absolute inset-3 rounded-full bg-gradient-to-b from-white to-teal-light shadow-[0_0_60px_rgba(94,234,212,0.7)]" />
            <div className="relative text-center text-[#053b36]">
              <p className="font-display text-5xl sm:text-6xl font-black leading-none">7</p>
              <p className="font-display text-xs sm:text-sm font-black uppercase tracking-widest">días</p>
            </div>
          </div>
        </RevealSection>

        <RevealSection variant="blur" delay={120}>
          <span className="inline-block rounded-full border border-white/40 bg-white/15 px-4 py-1.5 font-display text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-white mb-5">
            Sin riesgo para ti
          </span>
          <h2 className="title-pop font-display text-[2.2rem] sm:text-5xl md:text-6xl font-black text-white leading-[1.05]">
            Garantía de 7 días, <span className="text-gradient-gold">sin preguntas</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl font-medium text-white/90 leading-relaxed">
            Si dentro de los primeros 7 días sientes que este programa no es
            para ti, solicitas el reembolso directamente en Hotmart y te
            devolvemos <strong className="text-white">el 100% de tu dinero</strong>.
            Sin condiciones ocultas.
          </p>
        </RevealSection>

        <RevealSection variant="up" delay={220}>
          <div className="mt-9 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl bg-black/30 px-6 py-4">
            <span className="text-base font-semibold text-white">Garantía respaldada por</span>
            <HotmartBadge className="px-4 py-2" />
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
