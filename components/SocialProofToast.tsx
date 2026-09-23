"use client";

import { useEffect, useRef, useState } from "react";
import { SOCIAL_PROOF_NAMES } from "@/lib/data";
import { useUrgency } from "@/lib/UrgencyContext";
import HotmartBadge from "@/components/HotmartBadge";

type Entry = { nombre: string; pais: string; id: number };

export default function SocialProofToast() {
  const { registrarVenta } = useUrgency();
  const [entry, setEntry] = useState<Entry | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const counterRef = useRef(0);

  useEffect(() => {
    function scheduleNext(delayMs: number) {
      timeoutRef.current = setTimeout(() => {
        const random =
          SOCIAL_PROOF_NAMES[Math.floor(Math.random() * SOCIAL_PROOF_NAMES.length)];
        counterRef.current += 1;
        setEntry({ ...random, id: counterRef.current });
        registrarVenta();

        hideRef.current = setTimeout(() => setEntry(null), 5200);

        // Siguientes apariciones: cada 1 a 3 minutos.
        const nextDelay = 60000 + Math.random() * 120000;
        scheduleNext(nextDelay);
      }, delayMs);
    }

    // Primera aparición más rápida para no dejar la página "muerta".
    const firstDelay = 9000 + Math.random() * 7000;
    scheduleNext(firstDelay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (hideRef.current) clearTimeout(hideRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!entry) return null;

  return (
    <div
      key={entry.id}
      className="fixed bottom-4 left-4 z-50 max-w-[300px] animate-toastLife rounded-xl border border-white/10 bg-ink-panel/95 px-4 py-3 shadow-cardGlow backdrop-blur"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal/20 font-display text-sm font-bold text-teal-light">
          {entry.nombre.charAt(0)}
        </span>
        <div className="flex-1">
          <p className="text-sm text-cream">
            <span className="font-semibold">{entry.nombre}</span> acaba de
            inscribirse
          </p>
          <p className="text-xs text-muted">desde {entry.pais}</p>
        </div>
      </div>
      <div className="mt-2 flex justify-end">
        <HotmartBadge />
      </div>
    </div>
  );
}
