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
    <section className="relative bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          kicker="Cómo funciona"
          title="Un proceso claro, en cinco pasos"
          subtitle="Sin adivinar qué hacer primero. Cada paso construye sobre el anterior."
        />

        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent sm:left-6" />
          <div className="space-y-10">
            {PASOS.map((paso, i) => (
              <RevealSection
                key={paso.titulo}
                delay={i * 100}
                className="relative flex gap-5 sm:gap-6 pl-0"
              >
                <span className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-ink-panel font-display font-bold text-gold-light shadow-goldGlow">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-cream mb-1.5">
                    {paso.titulo}
                  </h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed">
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
