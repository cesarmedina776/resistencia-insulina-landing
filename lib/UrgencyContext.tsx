"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export type Tier = { umbral: number; precio: number };

export const TIERS: Tier[] = [
  { umbral: 0, precio: 12 },
  { umbral: 100, precio: 27 },
  { umbral: 200, precio: 37 },
];

// Extra reference row for the pricing table (offer closes, no further real price).
export const TABLE_TIERS = [
  { label: "0 – 99 ventas", precio: 12, active: true, closed: false },
  { label: "100 – 199 ventas", precio: 27, active: false, closed: false },
  { label: "200 – 299 ventas", precio: 37, active: false, closed: false },
  { label: "300+ ventas", precio: null, active: false, closed: true },
];

const CURRENT = TIERS[0];
const NEXT = TIERS[1];

// Starting point: 83% progress toward the next tier, as requested.
const INITIAL_VENTAS = CURRENT.umbral + Math.floor((NEXT.umbral - CURRENT.umbral) * 0.83);

interface UrgencyState {
  ventasActuales: number;
  precioActual: number;
  precioSiguiente: number;
  umbralSiguiente: number;
  cuposRestantes: number;
  progressPct: number;
  registrarVenta: () => void;
}

const UrgencyCtx = createContext<UrgencyState | null>(null);

export function UrgencyProvider({ children }: { children: React.ReactNode }) {
  const [ventasActuales, setVentasActuales] = useState(INITIAL_VENTAS);

  const registrarVenta = useCallback(() => {
    setVentasActuales((v) => {
      // Never let progress reach 100%: cap one unit below the next tier.
      const cap = NEXT.umbral - 1;
      return Math.min(v + 1, cap);
    });
  }, []);

  const value = useMemo(() => {
    const progressRaw =
      ((ventasActuales - CURRENT.umbral) / (NEXT.umbral - CURRENT.umbral)) * 100;
    const progressPct = Math.min(99, Math.max(0, progressRaw));
    return {
      ventasActuales,
      precioActual: CURRENT.precio,
      precioSiguiente: NEXT.precio,
      umbralSiguiente: NEXT.umbral,
      cuposRestantes: Math.max(1, NEXT.umbral - ventasActuales),
      progressPct,
      registrarVenta,
    };
  }, [ventasActuales, registrarVenta]);

  return <UrgencyCtx.Provider value={value}>{children}</UrgencyCtx.Provider>;
}

export function useUrgency() {
  const ctx = useContext(UrgencyCtx);
  if (!ctx) throw new Error("useUrgency must be used inside UrgencyProvider");
  return ctx;
}
