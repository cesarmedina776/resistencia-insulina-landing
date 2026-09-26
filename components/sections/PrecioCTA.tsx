import CTAShell from "@/components/CTAShell";
import RevealSection from "@/components/RevealSection";
import OfferStack from "@/components/OfferStack";
import CTAButton from "@/components/CTAButton";
import UrgencyBar from "@/components/UrgencyBar";

export default function PrecioCTA() {
  return (
    <CTAShell bgClass="sec-precio">
      <RevealSection variant="blur" className="w-full">
        <span className="inline-block rounded-full border border-gold/50 bg-gold/15 px-5 py-2 font-display text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-gold-light shadow-goldGlow">
          🔥 Oferta especial de lanzamiento
        </span>
        <h2 className="title-pop mt-6 font-display text-[2rem] sm:text-5xl font-black leading-[1.1] text-white">
          Accede hoy a{" "}
          <span className="text-gradient-gold">
            Resuelve la Resistencia a la Insulina
          </span>
        </h2>
        <p className="mt-5 text-lg sm:text-xl font-medium text-muted leading-relaxed">
          Un precio simbólico frente al valor real de tener a un{" "}
          <strong className="text-white">especialista guiando tu proceso</strong>{" "}
          metabólico paso a paso.
        </p>
      </RevealSection>

      <RevealSection variant="flip" delay={120} className="w-full">
        <OfferStack />
      </RevealSection>

      <RevealSection variant="zoom" delay={200} className="w-full">
        <CTAButton subtext="Pago 100% seguro procesado por Hotmart">
          Quiero empezar mi cambio hoy →
        </CTAButton>
      </RevealSection>

      <RevealSection variant="up" delay={260} className="w-full">
        <UrgencyBar />
      </RevealSection>
    </CTAShell>
  );
}
