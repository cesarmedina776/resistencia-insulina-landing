import SectionHeading from "@/components/SectionHeading";
import RevealSection from "@/components/RevealSection";

const CALLOUTS = [
  {
    titulo: "Lectura de laboratorio",
    texto: "Interpretas tu insulina basal y HOMA-IR igual que lo haría el especialista.",
  },
  {
    titulo: "Plan de comidas del día",
    texto: "Comidas estructuradas para mantener estable tu glucosa, sin contar calorías.",
  },
  {
    titulo: "Seguimiento semanal",
    texto: "Registras tu progreso real, no solo el número en la báscula.",
  },
];

export default function Demostracion() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          kicker="Demostración"
          title="Así se ve el sistema aplicado en la práctica"
          subtitle="Un vistazo real a una de las plantillas que usarás dentro del programa."
        />

        <RevealSection delay={100} className="relative mx-auto max-w-2xl">
          <div className="rounded-2xl border border-white/10 bg-ink-panel shadow-cardGlow overflow-hidden">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/30 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
              <span className="ml-3 text-xs text-muted">
                plantilla-seguimiento.resistencia-insulina.app
              </span>
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <div className="h-4 w-2/3 rounded shimmer-bg animate-shimmer" />
              <div className="h-3 w-full rounded bg-white/5" />
              <div className="h-3 w-5/6 rounded bg-white/5" />
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-16 rounded-lg bg-teal/10 border border-teal/20" />
                <div className="h-16 rounded-lg bg-gold/10 border border-gold/20" />
                <div className="h-16 rounded-lg bg-white/5 border border-white/10" />
              </div>
              <div className="h-3 w-1/2 rounded bg-white/5" />
            </div>
          </div>
        </RevealSection>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {CALLOUTS.map((c, i) => (
            <RevealSection
              key={c.titulo}
              delay={200 + i * 100}
              className="rounded-xl border border-white/10 bg-ink-panel/50 p-5 text-center"
            >
              <h3 className="font-display text-sm font-bold text-gold-light mb-1.5">
                {c.titulo}
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {c.texto}
              </p>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
