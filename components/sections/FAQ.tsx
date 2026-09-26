"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import RevealSection from "@/components/RevealSection";
import { FAQS } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="sec-faq relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <SectionHeading
          theme="light"
          kicker="Preguntas frecuentes"
          title={
            <>
              Antes de que <span className="text-gradient-gold-dark">lo preguntes</span>
            </>
          }
        />

        <div className="space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <RevealSection
                key={f.pregunta}
                variant={i % 2 === 0 ? "left" : "right"}
                delay={i * 70}
                className={`overflow-hidden rounded-2xl border-2 bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-amber-500 shadow-[0_18px_40px_-18px_rgba(180,83,9,0.45)]"
                    : "border-slate-200 shadow-lightCard"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 sm:px-7 py-5 sm:py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-xl font-extrabold text-slate-900">
                    {f.pregunta}
                  </span>
                  <span
                    className={`shrink-0 flex h-9 w-9 items-center justify-center rounded-full text-xl font-black transition-all duration-300 ${
                      isOpen ? "rotate-45 bg-amber-500 text-white" : "bg-slate-900 text-gold-light"
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
                    <p className="px-5 sm:px-7 pb-6 text-base sm:text-lg text-slate-700 leading-relaxed">
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
