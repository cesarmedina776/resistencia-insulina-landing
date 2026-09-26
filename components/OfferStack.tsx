"use client";

import { TEMARIO, BONOS } from "@/lib/data";
import { useUrgency } from "@/lib/UrgencyContext";

// 301 USD de valor total = 176 programa + 85 bonos + 40 acceso/plantillas.
const VALOR_MODULOS = 176;

export default function OfferStack() {
  const { precioActual } = useUrgency();

  return (
    <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-b from-[#141c33] to-[#0a0f1d] text-left shadow-goldGlowXl">
      {/* Cinta superior */}
      <div className="relative bg-gradient-to-r from-gold-dark via-gold to-gold-dark px-6 py-3.5 text-center">
        <p className="font-display text-sm sm:text-base font-black uppercase tracking-[0.18em] text-ink">
          ★ Todo lo que recibes hoy ★
        </p>
      </div>

      {/* Módulos */}
      <div className="px-5 sm:px-8 pt-6">
        <p className="mb-3 flex items-center gap-2 font-display text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-teal-light">
          <span className="h-px flex-1 bg-teal/30" />
          Programa completo · 5 módulos
          <span className="h-px flex-1 bg-teal/30" />
        </p>
        <ul className="space-y-2.5">
          {TEMARIO.map((m) => (
            <li
              key={m.modulo}
              className="flex items-start gap-3 rounded-xl border border-teal/15 bg-teal/[0.06] px-4 py-3"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-ink text-xs font-black">
                ✓
              </span>
              <span className="text-[15px] sm:text-base leading-snug text-white">
                <strong className="font-bold text-teal-light">{m.modulo}:</strong>{" "}
                {m.titulo}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-right text-sm text-dim">
          Valor del programa: <span className="line-through">{VALOR_MODULOS} USD</span>
        </p>
      </div>

      {/* Bonos */}
      <div className="px-5 sm:px-8 pt-6">
        <p className="mb-3 flex items-center gap-2 font-display text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-gold-light">
          <span className="h-px flex-1 bg-gold/30" />
          Bonos exclusivos · Gratis
          <span className="h-px flex-1 bg-gold/30" />
        </p>
        <ul className="space-y-2.5">
          {BONOS.map((b) => (
            <li
              key={b.titulo}
              className="flex items-start justify-between gap-3 rounded-xl border border-gold/20 bg-gold/[0.07] px-4 py-3"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-ink text-xs font-black">
                  ★
                </span>
                <span className="text-[15px] sm:text-base leading-snug text-white">
                  {b.titulo}
                </span>
              </div>
              <span className="shrink-0 rounded-md bg-black/30 px-2 py-0.5 text-sm font-semibold text-dim line-through">
                {b.valor.replace("Valor: ", "")}
              </span>
            </li>
          ))}
          <li className="flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-ink text-xs font-black">
                ∞
              </span>
              <span className="text-[15px] sm:text-base leading-snug text-white">
                Acceso de por vida + plantillas descargables
              </span>
            </div>
            <span className="shrink-0 rounded-md bg-black/30 px-2 py-0.5 text-sm font-semibold text-dim line-through">
              40 USD
            </span>
          </li>
        </ul>
      </div>

      {/* Precio final */}
      <div className="relative mt-7 overflow-hidden border-t border-gold/30 bg-black/40 px-6 sm:px-8 py-8 text-center">
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-3xl" />
        <div className="relative">
          <p className="text-base text-muted">Valor total si lo compraras por separado</p>
          <p className="font-display text-3xl font-extrabold text-dim line-through decoration-red-500 decoration-[3px]">
            301 USD
          </p>
          <p className="mt-4 inline-block rounded-full bg-teal/15 px-4 py-1 text-sm font-extrabold uppercase tracking-[0.2em] text-teal-light">
            Tu inversión hoy
          </p>
          <p className="price-white mt-2 font-display text-7xl sm:text-8xl font-black leading-none">
            <span className="align-top text-4xl sm:text-5xl">$</span>
            {precioActual}
            <span className="ml-1 align-baseline text-xl sm:text-2xl font-bold text-white/80">USD</span>
          </p>
          <p className="mt-3 text-base font-semibold text-white">
            Pago único · Acceso de por vida
          </p>
          <p className="mt-1 text-sm text-gold-light font-bold">
            Ahorras {301 - precioActual} USD ({Math.round(((301 - precioActual) / 301) * 100)}% de descuento)
          </p>
        </div>
      </div>
    </div>
  );
}
