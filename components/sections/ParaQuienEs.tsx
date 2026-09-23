import SectionHeading from "@/components/SectionHeading";
import RevealSection from "@/components/RevealSection";

const SI = [
  "Tienes síntomas de resistencia a la insulina y quieres entender la causa",
  "Te diagnosticaron prediabetes o tienes antecedentes familiares de Diabetes",
  "Ya intentaste dietas genéricas y no atacaron el problema real",
  "Quieres un plan basado en criterio clínico, no en modas",
  "Estás dispuesto/a a aplicar el protocolo con constancia",
];

const NO = [
  "Buscas una solución mágica sin cambiar ningún hábito",
  "Ya tienes un tratamiento activo y no puedes hacer ajustes por tu cuenta",
  "No estás dispuesto/a a dedicar tiempo a aplicar el plan",
  "Esperas resultados en 48 horas",
];

export default function ParaQuienEs() {
  return (
    <section className="relative bg-ink-panel py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          kicker="¿Para quién es este programa?"
          title="Sé honesto contigo antes de inscribirte"
          subtitle="Este sistema funciona mejor para un perfil específico de persona."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <RevealSection className="rounded-2xl border border-teal/25 bg-ink-soft/60 p-7 sm:p-8">
            <h3 className="font-display text-lg font-bold text-teal-light mb-5">
              Es para ti si...
            </h3>
            <ul className="space-y-3.5">
              {SI.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm sm:text-base text-cream/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal-light text-xs">
                    ✓
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </RevealSection>

          <RevealSection delay={150} className="rounded-2xl border border-white/10 bg-ink-soft/40 p-7 sm:p-8">
            <h3 className="font-display text-lg font-bold text-muted mb-5">
              No es para ti si...
            </h3>
            <ul className="space-y-3.5">
              {NO.map((n) => (
                <li key={n} className="flex items-start gap-3 text-sm sm:text-base text-cream/60">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-muted text-xs">
                    ✕
                  </span>
                  {n}
                </li>
              ))}
            </ul>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
