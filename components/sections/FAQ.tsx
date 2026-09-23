"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import RevealSection from "@/components/RevealSection";
import { FAQS } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          kicker="Preguntas frecuentes"
          title="Antes de que lo preguntes"
        />

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <RevealSection
                key={f.pregunta}
                delay={i * 60}
                className="rounded-xl border border-white/10 bg-ink-panel/60 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm sm:text-base font-semibold text-cream">
                    {f.pregunta}
                  </span>
                  <span
                    className={`shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-gold/10 text-gold-light transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-muted leading-relaxed">
                      {f.respuesta}
                    </p>
                  </div>
                </div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
