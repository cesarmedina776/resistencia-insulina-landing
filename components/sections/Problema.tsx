import SectionHeading from "@/components/SectionHeading";
import RevealSection from "@/components/RevealSection";

const DOLORES = [
  {
    titulo: "Cansancio que no se explica",
    texto:
      "Duermes tus horas, pero despiertas agotado. Te dicen que es 'estrés' cuando en realidad tu cuerpo ya no procesa bien la glucosa.",
  },
  {
    titulo: "Peso que no baja aunque hagas dieta",
    texto:
      "Bajas dos kilos y los recuperas. Cuando hay resistencia a la insulina, contar calorías no resuelve el problema de fondo.",
  },
  {
    titulo: "Hambre y ansiedad por azúcar",
    texto:
      "Picos y caídas bruscas de glucosa que te empujan a comer más de lo que quieres, y luego te sientes culpable por algo que no controlas del todo.",
  },
  {
    titulo: "Análisis 'normales' que no cuadran con cómo te sientes",
    texto:
      "Tu glucosa en ayunas sale bien, pero nadie evaluó tu insulina. Ahí es exactamente donde se esconde el problema.",
  },
];

const ERRORES = [
  "Enfocarse solo en el peso y no en el metabolismo",
  "Confiar únicamente en la glucosa en ayunas como indicador",
  "Empezar dietas extremas sin entender la causa",
  "Ignorar la señal hasta que aparece un diagnóstico de Diabetes",
];

export default function Problema() {
  return (
    <section className="relative bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          kicker="El problema real"
          title={
            <>
              No es falta de voluntad.{" "}
              <span className="text-gradient-gold">Es un metabolismo que dejó de escuchar a la insulina</span>
            </>
          }
          subtitle="Estas son las señales que la mayoría de personas normaliza durante años, hasta que el cuerpo ya no puede compensar más."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {DOLORES.map((d, i) => (
            <RevealSection
              key={d.titulo}
              delay={i * 90}
              className="rounded-2xl card-border bg-ink-panel/60 p-6 sm:p-7"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400 font-display font-bold">
                !
              </div>
              <h3 className="font-display text-lg font-bold text-cream mb-2">
                {d.titulo}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{d.texto}</p>
            </RevealSection>
          ))}
        </div>

        <RevealSection
          delay={200}
          className="mt-12 rounded-2xl border border-red-500/25 bg-red-950/20 p-6 sm:p-8"
        >
          <h3 className="font-display text-base sm:text-lg font-bold text-red-300 mb-4 uppercase tracking-wide">
            Errores comunes que empeoran el problema
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {ERRORES.map((e) => (
              <li key={e} className="flex items-start gap-3 text-sm text-cream/85">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                {e}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm sm:text-base text-red-200/90 leading-relaxed">
            <strong className="text-red-300">La consecuencia real:</strong> sin
            intervención, la resistencia a la insulina progresa silenciosamente
            hacia prediabetes y, eventualmente, Diabetes Mellitus tipo 2 — con
            complicaciones que sí son irreversibles.
          </p>
        </RevealSection>
      </div>
    </section>
  );
}
