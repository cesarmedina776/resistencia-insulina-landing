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
    <section className="relative bg-ink py-24 sm:py-32 overflow-hidden">
      <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <RevealSection>
            <span className="inline-block font-display text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-teal-light mb-4">
              La solución
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] text-cream">
              <span className="text-gradient-teal">Resuelve la Resistencia a la Insulina</span>{" "}
              — el sistema clínico paso a paso
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
              No es una dieta más. Es un método diseñado por un médico
              especialista, basado en cómo se diagnostica y trata la
              resistencia a la insulina en la práctica clínica real, traducido
              a un lenguaje que cualquier persona puede aplicar sin depender
              de conocimientos médicos previos.
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Qué lo hace diferente: no ataca el síntoma (el peso), ataca la
              causa metabólica de fondo — y te enseña a leer las señales de tu
              propio cuerpo.
            </p>
          </RevealSection>

          <div className="space-y-5">
            {PILARES.map((p, i) => (
              <RevealSection
                key={p.numero}
                delay={i * 120}
                className="flex gap-5 rounded-2xl card-border bg-ink-panel/70 p-6 shadow-tealGlow"
              >
                <span className="font-display text-3xl font-extrabold text-teal/40 shrink-0">
                  {p.numero}
                </span>
                <div>
                  <h3 className="font-display font-bold text-cream mb-1">
                    {p.titulo}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{p.texto}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
