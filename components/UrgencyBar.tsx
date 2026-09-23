"use client";

import { useUrgency, TABLE_TIERS } from "@/lib/UrgencyContext";

export default function UrgencyBar({ compact = false }: { compact?: boolean }) {
  const {
    ventasActuales,
    precioActual,
    precioSiguiente,
    umbralSiguiente,
    cuposRestantes,
    progressPct,
  } = useUrgency();

  return (
    <div className="relative w-full rounded-2xl border border-gold/30 bg-gradient-to-b from-ink-panel to-ink-soft shadow-goldGlow overflow-hidden">
      {/* Banner de autoridad */}
      <div className="flex items-center justify-center gap-3 border-b border-gold/20 bg-black/30 px-4 py-3 text-center">
        <span className="text-gold text-sm">★</span>
        <p className="font-display text-[11px] sm:text-xs tracking-[0.18em] text-gold-light uppercase">
          No es urgencia falsa. Es la política del programa.
        </p>
        <span className="text-gold text-sm">★</span>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 px-5 sm:px-8 ${compact ? "py-6" : "py-8"}`}>
        {/* Ventas actuales */}
        <div className="text-center sm:text-left">
          <p className="text-[11px] tracking-widest text-muted uppercase mb-2">
            Ventas actuales
          </p>
          <p className="font-display text-3xl sm:text-4xl text-white font-bold">
            {ventasActuales}
          </p>
          <div className="mt-2 inline-flex items-center gap-2 justify-center sm:justify-start">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal animate-pulseDot" />
            </span>
            <span className="text-xs text-teal-light">Actualizando en vivo</span>
          </div>
        </div>

        {/* Precio actual */}
        <div className="text-center border-y sm:border-y-0 sm:border-x border-white/10 py-6 sm:py-0">
          <p className="text-[11px] tracking-widest text-muted uppercase mb-2">
            Precio actual
          </p>
          <p className="font-display text-3xl sm:text-4xl font-bold">
            <span className="text-teal-light align-top text-xl mr-1">$</span>
            <span className="text-teal-light">{precioActual}</span>
            <span className="text-sm text-muted ml-1 align-middle">USD</span>
          </p>
          <p className="mt-2 text-xs text-muted">Pago único · Acceso de por vida</p>
        </div>

        {/* Faltan solo */}
        <div className="text-center sm:text-right">
          <p className="text-[11px] tracking-widest text-muted uppercase mb-2">
            Faltan solo
          </p>
          <p className="font-display text-3xl sm:text-4xl font-bold text-gold-light">
            {cuposRestantes}
          </p>
          <p className="mt-2 text-xs text-muted">
            registros para{" "}
            <span className="line-through decoration-red-400/70">
              ${precioActual}
            </span>{" "}
            <span className="text-gold-light">→ ${precioSiguiente}</span>
          </p>
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="px-5 sm:px-8 pb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] tracking-widest text-muted uppercase">
            Progreso hacia el próximo precio
          </span>
          <span className="text-sm font-bold text-gold-light">
            {progressPct.toFixed(0)}%
          </span>
        </div>
        <div className="h-3 w-full rounded-full bg-black/50 border border-white/5 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-all duration-700 ease-out shimmer-bg animate-shimmer"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div className="flex items-center justify-between mt-2 text-xs text-muted">
          <span>${precioActual} ahora</span>
          <span>${precioSiguiente} próximo</span>
        </div>
      </div>

      {/* Tabla de precios escalonados */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 px-5 sm:px-8 pb-6">
        {TABLE_TIERS.map((tier) => (
          <div
            key={tier.label}
            className={`relative rounded-xl px-3 py-4 text-center border ${
              tier.active
                ? "border-gold bg-gold/10 shadow-goldGlow"
                : "border-white/10 bg-white/[0.02] opacity-60"
            }`}
          >
            {tier.active && (
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-gold text-ink text-[10px] font-bold px-2 py-0.5 tracking-wide">
                AHORA
              </span>
            )}
            <p className="text-[10px] uppercase tracking-wide text-muted mb-1">
              {tier.label}
            </p>
            <p
              className={`font-display font-bold text-lg ${
                tier.active ? "text-gold-light" : "text-muted"
              }`}
            >
              {tier.closed ? "Cerrado" : `$${tier.precio}`}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 bg-black/30 px-5 sm:px-8 py-4">
        <p className="text-center text-xs sm:text-sm text-cream/90">
          <span className="text-gold-light font-semibold">{cuposRestantes} cupos</span>{" "}
          al precio actual — Al llegar a{" "}
          <span className="text-gold-light font-semibold">{umbralSiguiente} ventas</span>{" "}
          el precio sube a{" "}
          <span className="text-gold-light font-semibold">${precioSiguiente}</span>
        </p>
      </div>
    </div>
  );
}
