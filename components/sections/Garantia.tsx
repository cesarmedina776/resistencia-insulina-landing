import RevealSection from "@/components/RevealSection";
import HotmartBadge from "@/components/HotmartBadge";

export default function Garantia() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <RevealSection>
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-teal/30 bg-teal/10 shadow-tealGlow">
            <svg
              viewBox="0 0 24 24"
              className="h-10 w-10 text-teal-light"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M12 2.5l7.5 3v5.6c0 4.9-3.2 9.2-7.5 10.4-4.3-1.2-7.5-5.5-7.5-10.4V5.5l7.5-3z" />
              <path d="M8.5 12.2l2.4 2.4 4.6-4.9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <span className="inline-block font-display text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-teal-light mb-4">
            Sin riesgo para ti
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-cream">
            Garantía de 7 días, sin preguntas
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
            Si dentro de los primeros 7 días sientes que este programa no es
            para ti, solicitas el reembolso directamente en Hotmart y te
            devolvemos tu dinero. Sin condiciones ocultas.
          </p>

          <div className="mt-8 flex justify-center">
            <HotmartBadge className="px-4 py-2" />
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
