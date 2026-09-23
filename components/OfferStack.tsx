"use client";

import { TEMARIO, BONOS } from "@/lib/data";
import { useUrgency } from "@/lib/UrgencyContext";

export default function OfferStack() {
  const { precioActual } = useUrgency();

  return (
    <div className="rounded-2xl border border-gold/25 bg-ink-panel/80 overflow-hidden">
      <div className="border-b border-white/10 bg-black/20 px-6 sm:px-8 py-4">
        <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gold-light">
          Todo lo que recibes hoy
        </p>
      </div>

      <div className="divide-y divide-white/5">
        {TEMARIO.map((m) => (
          <div key={m.modulo} className="flex items-center justify-between gap-4 px-6 sm:px-8 py-3.5">
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-light text-[11px]">
                ✓
              </span>
              <span className="text-sm sm:text-base text-cream/90">
                {m.modulo}: {m.titulo}
              </span>
            </div>
          </div>
        ))}

        {BONOS.map((b) => (
          <div key={b.titulo} className="flex items-center justify-between gap-4 px-6 sm:px-8 py-3.5">
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-light text-[11px]">
                ★
              </span>
              <span className="text-sm sm:text-base text-cream/90">{b.titulo}</span>
            </div>
            <span className="shrink-0 text-xs sm:text-sm font-semibold text-muted line-through">
              {b.valor.replace("Valor: ", "")}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-black/25 px-6 sm:px-8 py-6 text-center">
        <p className="text-sm text-muted">
          Valor total si lo compraras por separado
        </p>
        <p className="font-display text-2xl font-bold text-muted line-through decoration-red-400/60">
          301 USD
        </p>
        <p className="mt-3 text-sm text-teal-light font-semibold uppercase tracking-wide">
          Tu inversión hoy
        </p>
        <p className="font-display text-5xl sm:text-6xl font-extrabold text-gradient-gold mt-1">
          ${precioActual}
          <span className="text-lg align-top ml-1 text-muted font-semibold">USD</span>
        </p>
        <p className="mt-2 text-xs sm:text-sm text-muted">Pago único · Acceso de por vida</p>
      </div>
    </div>
  );
}
