import SectionHeading from "@/components/SectionHeading";
import RevealSection from "@/components/RevealSection";

const DOLORES = [
  {
    titulo: "Cansancio que no se explica",
    texto:
      "Duermes tus horas, pero despiertas agotado. Te dicen que es “estrés” cuando en realidad puede haber distintos factores metabólicos que conviene evaluar.",
    imagen: "/images/cansancio-resistencia-insulina.png",
    alt: "Mujer con cansancio y falta de energía",
  },
  {
    titulo: "Peso que no baja aunque hagas dieta",
    texto:
      "Bajas dos kilos y los recuperas. La resistencia a la insulina puede ser uno de varios factores que dificultan el control del peso.",
    imagen: "/images/peso-resistencia-insulina.png",
    alt: "Persona preocupada por la dificultad para bajar de peso",
  },
  {
    titulo: "Hambre y antojos por azúcar",
    texto:
      "El hambre frecuente y los antojos pueden aparecer por múltiples razones. Si son persistentes, vale la pena revisar tus hábitos y tu salud metabólica.",
    imagen: "/images/antojos-azucar.png",
    alt: "Mujer frente a alimentos dulces",
  },
  {
    titulo: "Análisis “normales” que no cuadran con cómo te sientes",
    texto:
      "Una glucosa en ayunas dentro del rango esperado no siempre responde todas las preguntas. Un profesional puede determinar qué otros factores o pruebas conviene evaluar.",
    imagen: "/images/glucosa-analisis.png",
    alt: "Medición de glucosa en sangre",
  },
];

const ERRORES = [
  "Enfocarse solo en el peso y no en el metabolismo",
  "Confiar únicamente en la glucosa en ayunas como indicador",
  "Empezar dietas extremas sin entender la causa",
  "Ignorar señales persistentes que conviene evaluar con un profesional",
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
              <span className="text-gradient-gold">
                Tu salud metabólica merece una mirada más completa
              </span>
            </>
          }
          subtitle="Algunas señales pueden tener múltiples causas. Si son persistentes, conviene evaluarlas con un profesional de la salud."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {DOLORES.map((d, i) => (
            <RevealSection
              key={d.titulo}
              delay={i * 90}
              className="overflow-hidden rounded-2xl card-border bg-ink-panel/60 transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={d.imagen}
                alt={d.alt}
                className="block h-[220px] w-full object-cover"
                loading="lazy"
              />

              <div className="p-6 sm:p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400 font-display text-xl font-bold">
                  !
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-cream">
                  {d.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{d.texto}</p>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection
          delay={200}
          className="mt-12 rounded-2xl border border-red-500/25 bg-red-950/20 p-6 sm:p-8"
        >
          <h3 className="mb-4 font-display text-base font-bold uppercase tracking-wide text-red-300 sm:text-lg">
            Errores comunes que pueden dificultar el progreso
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {ERRORES.map((e) => (
              <li key={e} className="flex items-start gap-3 text-sm text-cream/85">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                {e}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-red-200/90 sm:text-base">
            <strong className="text-red-300">Importante:</strong> la resistencia a
            la insulina puede aumentar el riesgo de prediabetes y diabetes tipo 2.
            La evaluación y el seguimiento profesional ayudan a definir el manejo
            adecuado para cada persona.
          </p>
        </RevealSection>
      </div>
    </section>
  );
}
