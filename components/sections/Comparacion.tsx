import SectionHeading from "@/components/SectionHeading";
import RevealSection from "@/components/RevealSection";

const ANTES = [
  "Cansancio constante y sueño que no repara",
  "Peso estancado a pesar de las dietas",
  "Ansiedad por azúcar y carbohidratos",
  "Análisis básicos que 'salen normales'",
  "Miedo a terminar con Diabetes Mellitus",
];

const DESPUES = [
  "Energía estable durante todo el día",
  "Metabolismo trabajando a tu favor",
  "Control real del apetito y los antojos",
  "Sabes exactamente qué marcadores vigilar",
  "Un plan claro para prevenir la progresión a Diabetes",
];

export default function Comparacion() {
  return (
    <section className="relative bg-ink-panel py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          kicker="El contraste"
          title="De sobrevivir tus síntomas a entender tu metabolismo"
          subtitle="Así se ve el punto de partida frente al punto de llegada cuando aplicas el sistema completo."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <RevealSection className="rounded-2xl border border-red-500/20 bg-gradient-to-b from-red-950/25 to-ink-panel p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300 mb-5">
              Antes
            </p>
            <ul className="space-y-4">
              {ANTES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-cream/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400 text-xs">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </RevealSection>

          <RevealSection
            delay={150}
            className="rounded-2xl border border-teal/30 bg-gradient-to-b from-teal-dark/20 to-ink-panel p-7 sm:p-8 shadow-tealGlow"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-light mb-5">
              Después
            </p>
            <ul className="space-y-4">
              {DESPUES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-cream/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal-light text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
