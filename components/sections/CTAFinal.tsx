"use client";

import CTAShell from "@/components/CTAShell";
import RevealSection from "@/components/RevealSection";
import CTAButton from "@/components/CTAButton";
import UrgencyBar from "@/components/UrgencyBar";
import { useUrgency } from "@/lib/UrgencyContext";

const REFUERZOS = [
  {
    label: "El problema",
    texto: "Tu metabolismo dejó de responder bien a la insulina, y cada mes que pasa sin actuar la resistencia se acumula.",
    tone: "border-red-400/40 bg-red-500/10 text-red-300",
    icon: "⚠",
  },
  {
    label: "La solución",
    texto: "Un sistema clínico paso a paso, creado por un especialista en Medicina Interna con 18 años de trayectoria.",
    tone: "border-teal/40 bg-teal/10 text-teal-light",
    icon: "✚",
  },
  {
    label: "El valor",
    texto: "5 módulos, 3 bonos y soporte en WhatsApp, por una fracción de su valor real de 301 USD.",
    tone: "border-gold/40 bg-gold/10 text-gold-light",
    icon: "★",
  },
];

export default function CTAFinal() {
  const { precioActual } = useUrgency();

  return (
    <CTAShell bgClass="sec-final">
      <RevealSection variant="blur" className="w-full">
        <span className="inline-block rounded-full border border-gold/50 bg-gold/15 px-5 py-2 font-display text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-gold-light shadow-goldGlow">
          Última oportunidad a este precio
        </span>
        <h2 className="title-pop mt-6 font-display text-[2rem] sm:text-5xl font-black leading-[1.1] text-white">
          No dejes que la resistencia a la insulina{" "}
          <span className="text-gradient-gold">decida tu futuro metabólico</span>
        </h2>
      </RevealSection>

      <div className="flex w-full flex-col gap-4 text-left">
        {REFUERZOS.map((r, i) => (
          <RevealSection
            key={r.label}
            variant={i % 2 === 0 ? "left" : "right"}
            delay={i * 110}
            className={`lift flex items-start gap-4 rounded-2xl border p-5 ${r.tone}`}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/30 text-xl font-black">
              {r.icon}
            </span>
            <div>
              <p className="font-display text-sm font-black uppercase tracking-[0.18em]">
                {r.label}
              </p>
              <p className="mt-1 text-base sm:text-lg font-medium leading-relaxed text-white">
                {r.texto}
              </p>
            </div>
          </RevealSection>
        ))}
      </div>

      <RevealSection variant="zoom" delay={120} className="w-full">
        <p className="text-base font-bold uppercase tracking-[0.2em] text-muted">
          Hoy inviertes solo
        </p>
        <p className="price-white mt-2 font-display text-7xl sm:text-8xl font-black leading-none">
          <span className="align-top text-4xl sm:text-5xl">$</span>
          {precioActual}
          <span className="ml-1 text-xl sm:text-2xl font-bold text-white/80">USD</span>
        </p>
        <p className="mt-3 text-base font-semibold text-white">
          en lugar de <span className="text-dim line-through decoration-red-500 decoration-2">301 USD</span>
        </p>
      </RevealSection>

      <RevealSection variant="zoom" delay={180} className="w-full">
        <CTAButton subtext="7 días de garantía · Pago único · Acceso de por vida">
          Quiero mi acceso ahora →
        </CTAButton>
      </RevealSection>

      <RevealSection variant="up" delay={240} className="w-full">
        <UrgencyBar compact />
      </RevealSection>
    </CTAShell>
  );
}
