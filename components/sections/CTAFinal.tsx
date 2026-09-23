import ThreeGlow from "@/components/ThreeGlow";
import RevealSection from "@/components/RevealSection";
import CTAButton from "@/components/CTAButton";
import UrgencyBar from "@/components/UrgencyBar";

const REFUERZOS = [
  { label: "El problema", texto: "Tu metabolismo dejó de responder bien a la insulina." },
  { label: "La solución", texto: "Un sistema clínico paso a paso, creado por un especialista." },
  { label: "El valor", texto: "5 módulos, 3 bonos y soporte, por una fracción de su valor real." },
];

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px]" />
      <ThreeGlow variant="cta" />

      <div className="relative mx-auto max-w-xl px-6 text-center">
        <RevealSection>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.12] text-cream">
            No dejes que la resistencia a la insulina{" "}
            <span className="text-gradient-gold">decida tu futuro metabólico</span>
          </h2>
        </RevealSection>

        <RevealSection delay={120} className="mt-10 grid gap-4 sm:grid-cols-3 text-left sm:text-center">
          {REFUERZOS.map((r) => (
            <div key={r.label} className="rounded-xl border border-white/10 bg-ink-panel/60 p-4">
              <p className="text-[11px] font-bold uppercase tracking-widest text-gold-light mb-1.5">
                {r.label}
              </p>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">{r.texto}</p>
            </div>
          ))}
        </RevealSection>

        <RevealSection delay={220} className="mt-12">
          <p className="text-sm uppercase tracking-widest text-muted mb-2">Hoy inviertes solo</p>
          <p className="font-display text-6xl sm:text-7xl font-extrabold text-gradient-gold">
            $17
            <span className="text-lg align-top ml-1 text-muted font-semibold">USD</span>
          </p>
        </RevealSection>

        <RevealSection delay={300} className="mt-8">
          <CTAButton subtext="7 días de garantía · Pago único · Acceso de por vida">
            Quiero mi acceso ahora →
          </CTAButton>
        </RevealSection>

        <RevealSection delay={400} className="mt-14">
          <UrgencyBar compact />
        </RevealSection>
      </div>
    </section>
  );
}
