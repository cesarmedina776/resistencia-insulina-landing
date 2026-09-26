import RevealSection from "@/components/RevealSection";

const STATS = [
  { valor: "18+", label: "Años de trayectoria clínica" },
  { valor: "Medicina Interna", label: "Especialidad médica" },
  { valor: "Diabetes Mellitus", label: "Enfoque de prevención y manejo" },
];

export default function Autoridad() {
  return (
    <section className="sec-autoridad relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 relative">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center">
          <RevealSection variant="zoom" className="mx-auto">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-teal via-gold-light to-teal opacity-70 blur-xl animate-pulseDot" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dr-cesar-medina.webp"
                alt="Dr. Cesar Medina, Médico Especialista en Medicina Interna"
                width={640}
                height={640}
                loading="lazy"
                className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-full border-4 border-teal-light/60 bg-[#0b2a2e] object-cover object-[50%_30%] shadow-tealGlow"
              />
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-teal px-4 py-1 text-xs font-black uppercase tracking-wider text-ink shadow-tealGlow">
                ✚ Médico especialista
              </span>
            </div>
          </RevealSection>

          <RevealSection variant="right" delay={120} className="text-center md:text-left">
            <span className="inline-block rounded-full border border-teal/40 bg-teal/10 px-4 py-1.5 font-display text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-teal-light mb-4">
              Quién te acompaña en este proceso
            </span>
            <h2 className="title-pop font-display text-[2.2rem] sm:text-5xl md:text-6xl font-black text-white leading-[1.05]">
              Dr. <span className="text-gradient-teal">Cesar Medina</span>
            </h2>
            <p className="mt-2 text-base sm:text-lg text-gold-light font-extrabold uppercase tracking-wide">
              Médico Especialista en Medicina Interna
            </p>
            <p className="mt-5 text-lg sm:text-xl text-muted leading-relaxed">
              Con una trayectoria de <strong className="text-white">18 años</strong>{" "}
              atendiendo pacientes con Diabetes Mellitus y sus complicaciones, ha
              dedicado su carrera a algo muy concreto: ayudar a las personas a
              identificar y tratar la resistencia a la insulina{" "}
              <strong className="text-teal-light">antes</strong> de que se
              convierta en un diagnóstico irreversible.
            </p>
          </RevealSection>
        </div>

        <RevealSection variant="clip" delay={200} className="mt-12">
          <blockquote className="relative rounded-2xl border-l-4 border-gold bg-black/35 p-6 sm:p-8 text-lg sm:text-xl italic text-white leading-relaxed">
            <span className="absolute -top-6 left-4 font-display text-7xl text-gold/40 leading-none">“</span>
            Este programa condensa mi experiencia clínica en un sistema claro,
            pensado para que cualquier persona pueda aplicarlo sin necesidad de
            formación médica.
            <footer className="mt-3 not-italic text-base font-bold text-gold-light">— Dr. Cesar Medina</footer>
          </blockquote>
        </RevealSection>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <RevealSection
              key={s.label}
              variant="flip"
              delay={250 + i * 110}
              className="lift rounded-2xl border border-teal/30 bg-[#0a2227]/85 px-5 py-7 text-center shadow-tealGlow"
            >
              <p className="font-display text-2xl sm:text-3xl font-black text-gradient-gold">
                {s.valor}
              </p>
              <p className="mt-2 text-sm sm:text-base font-semibold text-muted">{s.label}</p>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
