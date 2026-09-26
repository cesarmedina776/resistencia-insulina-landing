import CTAShell from "@/components/CTAShell";
import RevealSection from "@/components/RevealSection";
import OfferStack from "@/components/OfferStack";
import CTAButton from "@/components/CTAButton";
import UrgencyBar from "@/components/UrgencyBar";

export default function SegundoCTA() {
  return (
    <CTAShell bgClass="sec-segundo">
      <RevealSection variant="blur" className="w-full">
        <span className="inline-block rounded-full border border-teal/50 bg-teal/15 px-5 py-2 font-display text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-teal-light shadow-tealGlow">
          ⏳ Todavía tienes tiempo de decidir
        </span>
        <h2 className="title-pop mt-6 font-display text-[2rem] sm:text-5xl font-black leading-[1.1] text-white">
          Cada semana sin actuar es una semana más de{" "}
          <span className="text-gradient-gold">resistencia acumulada</span>
        </h2>
        <p className="mt-5 text-lg sm:text-xl font-medium text-muted leading-relaxed">
          No necesitas más información. Necesitas un{" "}
          <strong className="text-teal-light">plan clínico claro</strong> y
          empezar a aplicarlo. Esto es exactamente lo que recibes hoy.
        </p>
      </RevealSection>

      <RevealSection variant="flip" delay={120} className="w-full">
        <OfferStack />
      </RevealSection>

      <RevealSection variant="zoom" delay={200} className="w-full">
        <CTAButton subtext="Acceso inmediato tras la confirmación del pago">
          Sí, quiero resolverlo ahora →
        </CTAButton>
      </RevealSection>

      <RevealSection variant="up" delay={260} className="w-full">
        <UrgencyBar />
      </RevealSection>
    </CTAShell>
  );
}
