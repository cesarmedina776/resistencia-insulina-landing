import RevealSection from "@/components/RevealSection";

const STATS = [
  { valor: "18+", label: "Años de trayectoria clínica" },
  { valor: "Medicina Interna", label: "Especialidad médica" },
  { valor: "Diabetes Mellitus", label: "Enfoque de prevención y manejo" },
];

export default function Autoridad() {
  return (
    <section className="relative bg-ink py-24 sm:py-32 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-4xl px-6 relative">
        <RevealSection className="text-center">
          <span className="inline-block font-display text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gold-light mb-4">
            Quién te acompaña en este proceso
          </span>
          <div className="mx-auto mb-6 flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full border-2 border-gold/40 bg-ink-panel font-display text-3xl font-bold text-gold-light shadow-goldGlow">
            CM
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-cream">
            Dr. Cesar Medina
          </h2>
          <p className="mt-1 text-sm sm:text-base text-teal-light font-semibold uppercase tracking-wide">
            Médico Especialista en Medicina Interna
          </p>
        </RevealSection>

        <RevealSection
          delay={150}
          className="mt-8 mx-auto max-w-2xl rounded-2xl card-border bg-ink-panel/60 p-6 sm:p-8 text-center"
        >
          <p className="text-base sm:text-lg text-cream/85 leading-relaxed">
            Con una trayectoria de <strong className="text-gold-light">18 años</strong>{" "}
            atendiendo pacientes con Diabetes Mellitus y sus complicaciones, el
            Dr. Cesar Medina ha dedicado su carrera a algo muy concreto: ayudar
            a las personas a identificar y tratar la resistencia a la insulina{" "}
            <strong className="text-cream">antes</strong> de que se convierta en
            un diagnóstico irreversible.
          </p>
          <p className="mt-4 text-base sm:text-lg text-cream/85 leading-relaxed">
            Este programa condensa esa experiencia clínica en un sistema claro,
            pensado para que cualquier persona pueda aplicarlo sin necesidad de
            formación médica.
          </p>
        </RevealSection>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <RevealSection
              key={s.label}
              delay={300 + i * 100}
              className="rounded-2xl border border-white/10 bg-ink-panel/50 px-5 py-6 text-center"
            >
              <p className="font-display text-xl sm:text-2xl font-extrabold text-gradient-gold">
                {s.valor}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-muted">{s.label}</p>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
