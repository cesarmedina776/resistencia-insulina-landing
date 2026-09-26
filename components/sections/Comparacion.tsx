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
    <section className="sec-comparacion relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <SectionHeading
          kicker="El contraste"
          title={
            <>
              De <span className="text-gradient-red">sobrevivir tus síntomas</span> a{" "}
              <span className="text-gradient-teal">entender tu metabolismo</span>
            </>
          }
          subtitle="Así se ve el punto de partida frente al punto de llegada cuando aplicas el sistema completo."
        />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-10">
          {/* Insignia central VS */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden md:flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold-light bg-ink font-display text-lg font-black text-gold-light shadow-goldGlow">
            VS
          </div>

          <RevealSection
            variant="left"
            className="rounded-3xl border-2 border-red-500/40 bg-gradient-to-b from-red-950/70 to-[#12070b]/90 p-7 sm:p-9 shadow-[0_0_60px_-20px_rgba(239,68,68,0.55)]"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/20 text-2xl">😣</span>
              <div>
                <p className="font-display text-2xl font-black uppercase tracking-wide text-red-300">Antes</p>
                <p className="text-sm font-semibold text-red-200/80">Situación actual</p>
              </div>
            </div>
            <ul className="space-y-4">
              {ANTES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base sm:text-lg text-white/85">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/25 text-red-300 text-xs font-black">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </RevealSection>

          <div className="flex md:hidden justify-center -my-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-light bg-ink text-xl font-black text-gold-light shadow-goldGlow">
              ↓
            </span>
          </div>

          <RevealSection
            variant="right"
            delay={150}
            className="rounded-3xl border-2 border-teal/50 bg-gradient-to-b from-teal-dark/50 to-[#04201d]/90 p-7 sm:p-9 shadow-[0_0_70px_-15px_rgba(20,184,166,0.65)]"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/25 text-2xl">😊</span>
              <div>
                <p className="font-display text-2xl font-black uppercase tracking-wide text-teal-light">Después</p>
                <p className="text-sm font-semibold text-teal-light/80">Situación deseada</p>
              </div>
            </div>
            <ul className="space-y-4">
              {DESPUES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base sm:text-lg text-white">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-ink text-xs font-black">
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
