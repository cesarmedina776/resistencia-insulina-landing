import SectionHeading from "@/components/SectionHeading";
import RevealSection from "@/components/RevealSection";

const PASOS = [
  {
    titulo: "Evalúas tu punto de partida",
    texto:
      "Completas la guía inicial y entiendes qué marcadores clínicos revisar para saber en qué etapa está tu metabolismo.",
  },
  {
    titulo: "Aplicas el protocolo nutricional",
    texto:
      "Sigues el plan de alimentación estructurado por el Dr. Medina, adaptado a tu rutina real, sin dietas extremas.",
  },
  {
    titulo: "Ajustas hábitos de alto impacto",
    texto:
      "Incorporas los cambios de movimiento, sueño y manejo del estrés que más influyen en la sensibilidad a la insulina.",
  },
  {
    titulo: "Mides tu progreso",
    texto:
      "Usas las plantillas del programa para hacer seguimiento real de tus indicadores, no solo de la báscula.",
  },
  {
    titulo: "Sostienes el resultado",
    texto:
      "Consolidas el protocolo como estilo de vida, con acceso de por vida para revisarlo cuando lo necesites.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="sec-pasos relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <SectionHeading
          accent="blue"
          kicker="Cómo funciona"
          title={
            <>
              Un proceso claro, en <span className="text-gradient-gold">cinco pasos</span>
            </>
          }
          subtitle="Sin adivinar qué hacer primero. Cada paso construye sobre el anterior."
        />

        <div className="relative">
          <div className="absolute left-6 sm:left-7 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-sky-400 via-gold to-teal shadow-[0_0_16px_rgba(56,189,248,0.6)]" />
          <div className="space-y-8">
            {PASOS.map((paso, i) => (
              <RevealSection
                key={paso.titulo}
                variant="right"
                delay={i * 110}
                className="relative flex gap-5 sm:gap-7"
              >
                <span className="relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-sky-300/70 bg-[#0a1430] font-display text-xl sm:text-2xl font-black text-white shadow-[0_0_24px_rgba(56,189,248,0.55)]">
                  {i + 1}
                </span>
                <div className="lift flex-1 rounded-2xl border border-sky-300/20 bg-[#0f1d42]/85 p-5 sm:p-6 hover:border-sky-300/60">
                  <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-sky-300">
                    Paso {i + 1}
                  </p>
                  <h3 className="mt-1 font-display text-xl sm:text-2xl font-extrabold text-white mb-1.5">
                    {paso.titulo}
                  </h3>
                  <p className="text-base sm:text-lg text-muted leading-relaxed">
                    {paso.texto}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
