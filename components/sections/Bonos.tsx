import SectionHeading from "@/components/SectionHeading";
import RevealSection from "@/components/RevealSection";
import { BONOS } from "@/lib/data";

export default function Bonos() {
  return (
    <section className="relative bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          kicker="Bonos incluidos"
          title="Además, te llevas esto sin costo adicional"
          subtitle="Recursos extra pensados para que apliques el sistema sin fricciones desde el primer día."
        />

        <div className="space-y-6">
          {BONOS.map((b, i) => (
            <RevealSection
              key={b.titulo}
              delay={i * 120}
              className={`relative flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl border p-6 sm:p-7 ${
                i % 2 === 0
                  ? "border-gold/25 bg-ink-panel/70"
                  : "border-teal/25 bg-ink-panel/70"
              }`}
            >
              <span
                className={`absolute -top-3 right-6 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wide ${
                  i % 2 === 0
                    ? "bg-gold text-ink"
                    : "bg-teal text-ink"
                }`}
              >
                Gratis
              </span>
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-display text-lg font-bold ${
                  i % 2 === 0
                    ? "bg-gold/15 text-gold-light"
                    : "bg-teal/15 text-teal-light"
                }`}
              >
                {i + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold text-cream">
                  {b.titulo}
                </h3>
                <p className="mt-1.5 text-sm sm:text-base text-muted leading-relaxed">
                  {b.descripcion}
                </p>
              </div>
              <span className="shrink-0 text-sm font-semibold text-muted line-through self-start sm:self-center">
                {b.valor.replace("Valor: ", "")}
              </span>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
