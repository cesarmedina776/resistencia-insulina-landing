import RevealSection from "@/components/RevealSection";

const PILARES = [
  {
    numero: "01",
    titulo: "Diagnóstico clínico correcto",
    texto: "Identificas exactamente qué está pasando en tu metabolismo, con criterios médicos reales.",
  },
  {
    numero: "02",
    titulo: "Protocolo nutricional aplicable",
    texto: "Un plan de alimentación estructurado para tu día a día, no una dieta genérica de internet.",
  },
  {
    numero: "03",
    titulo: "Seguimiento y sostenibilidad",
    texto: "Herramientas para medir tu avance y mantener los resultados en el tiempo, no solo un mes.",
  },
];

export default function Solucion() {
  return (
    <section className="sec-solucion relative py-24 sm:py-32 overflow-hidden">
      <div className="aurora-blob -right-40 top-10 h-96 w-96 bg-teal/40 animate-aurora" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6 relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <RevealSection variant="left">
            <span className="inline-block rounded-full border border-teal/40 bg-teal/10 px-4 py-1.5 font-display text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-teal-light mb-5">
              La solución
            </span>
            <h2 className="title-pop font-display text-[2rem] sm:text-5xl font-black leading-[1.1] text-white">
              <span className="text-gradient-teal">Resuelve la Resistencia a la Insulina</span>
              <br />
              el <span className="text-gradient-gold">sistema clínico</span> paso a paso
            </h2>
            <div className="heading-bar mt-6 bg-gradient-to-r from-teal-dark via-teal-light to-teal-dark" />
            <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed">
              <strong className="text-white">No es una dieta más.</strong> Es un
              método diseñado por un médico especialista, basado en cómo se
              diagnostica y trata la resistencia a la insulina en la práctica
              clínica real, traducido a un lenguaje que cualquier persona puede
              aplicar.
            </p>
            <div className="mt-6 rounded-2xl border-l-4 border-teal-light bg-teal/10 p-5">
              <p className="font-display text-sm font-black uppercase tracking-[0.18em] text-teal-light">
                Qué lo hace diferente
              </p>
              <p className="mt-2 text-lg text-white leading-relaxed">
                No ataca el síntoma (el peso), ataca la{" "}
                <strong className="text-gold-light">causa metabólica de fondo</strong>{" "}
                — y te enseña a leer las señales de tu propio cuerpo.
              </p>
            </div>
          </RevealSection>

          <div className="space-y-5">
            {PILARES.map((p, i) => (
              <RevealSection
                key={p.numero}
                variant="right"
                delay={i * 130}
                className="lift flex gap-5 rounded-2xl border border-teal/30 bg-[#062522]/85 p-6 sm:p-7 shadow-tealGlow backdrop-blur hover:border-teal-light/70"
              >
                <span className="font-display text-5xl font-black text-gradient-teal shrink-0 leading-none">
                  {p.numero}
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white mb-1.5">
                    {p.titulo}
                  </h3>
                  <p className="text-base sm:text-lg text-muted leading-relaxed">{p.texto}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
