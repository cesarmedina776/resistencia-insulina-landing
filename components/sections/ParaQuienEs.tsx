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
    <section className="sec-paraquien relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <SectionHeading
          kicker="¿Para quién es este programa?"
          title={
            <>
              Sé honesto contigo <span className="text-gradient-gold">antes de inscribirte</span>
            </>
          }
          subtitle="Este sistema funciona mejor para un perfil específico de persona."
        />

        <div className="grid gap-6 md:grid-cols-[1.15fr_1fr]">
          <RevealSection
            variant="left"
            className="rounded-3xl border-2 border-teal/50 bg-gradient-to-b from-[#0b2a26] to-[#0a1614] p-7 sm:p-9 shadow-[0_0_60px_-18px_rgba(20,184,166,0.6)]"
          >
            <h3 className="flex items-center gap-3 font-display text-2xl font-black text-teal-light mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-ink text-lg">✓</span>
              Es para ti si...
            </h3>
            <ul className="space-y-4">
              {SI.map((s) => (
                <li key={s} className="flex items-start gap-3 text-base sm:text-lg text-white">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/30 text-teal-light text-xs font-black">
                    ✓
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </RevealSection>

          <RevealSection
            variant="right"
            delay={150}
            className="rounded-3xl border-2 border-dashed border-white/20 bg-[#1b1812]/80 p-7 sm:p-9"
          >
            <h3 className="flex items-center gap-3 font-display text-2xl font-black text-muted mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white text-lg">✕</span>
              No es para ti si...
            </h3>
            <ul className="space-y-4">
              {NO.map((n) => (
                <li key={n} className="flex items-start gap-3 text-base sm:text-lg text-white/75">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-muted text-xs font-black">
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
