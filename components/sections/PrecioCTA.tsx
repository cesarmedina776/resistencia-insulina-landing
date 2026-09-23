import ThreeGlow from "@/components/ThreeGlow";
import RevealSection from "@/components/RevealSection";
import OfferStack from "@/components/OfferStack";
import CTAButton from "@/components/CTAButton";
import UrgencyBar from "@/components/UrgencyBar";

export default function PrecioCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-0 bg-radial-fade" />
      <ThreeGlow variant="cta" className="opacity-60" />

      <div className="relative mx-auto max-w-xl px-6 text-center">
        <RevealSection>
          <span className="inline-block font-display text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gold-light mb-4">
            Oferta especial de lanzamiento
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] text-cream">
            Accede hoy a{" "}
            <span className="text-gradient-gold">
              Resuelve la Resistencia a la Insulina
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
            Un precio simbólico frente al valor real de tener a un especialista
            guiando tu proceso metabólico paso a paso.
          </p>
        </RevealSection>

        <RevealSection delay={150} className="mt-10">
          <OfferStack />
        </RevealSection>

        <RevealSection delay={250} className="mt-10">
          <CTAButton subtext="Pago 100% seguro procesado por Hotmart">
            Quiero empezar mi cambio hoy →
          </CTAButton>
        </RevealSection>

        <RevealSection delay={350} className="mt-14">
          <UrgencyBar />
        </RevealSection>
      </div>
    </section>
  );
}
