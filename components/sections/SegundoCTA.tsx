import ThreeGlow from "@/components/ThreeGlow";
import RevealSection from "@/components/RevealSection";
import OfferStack from "@/components/OfferStack";
import CTAButton from "@/components/CTAButton";
import UrgencyBar from "@/components/UrgencyBar";

export default function SegundoCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-soft py-24 sm:py-32">
      <div className="absolute inset-0 bg-radial-fade opacity-70" />
      <ThreeGlow variant="cta" className="opacity-40" />

      <div className="relative mx-auto max-w-xl px-6 text-center">
        <RevealSection>
          <span className="inline-block font-display text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-teal-light mb-4">
            Todavía tienes tiempo de decidir
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] text-cream">
            Cada semana sin actuar es una semana más de{" "}
            <span className="text-gradient-gold">resistencia acumulada</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
            No necesitas más información. Necesitas un plan clínico claro y
            empezar a aplicarlo. Esto es exactamente lo que recibes hoy.
          </p>
        </RevealSection>

        <RevealSection delay={150} className="mt-10">
          <OfferStack />
        </RevealSection>

        <RevealSection delay={250} className="mt-10">
          <CTAButton subtext="Acceso inmediato tras la confirmación del pago">
            Sí, quiero resolver mi resistencia a la insulina →
          </CTAButton>
        </RevealSection>

        <RevealSection delay={350} className="mt-14">
          <UrgencyBar />
        </RevealSection>
      </div>
    </section>
  );
}
