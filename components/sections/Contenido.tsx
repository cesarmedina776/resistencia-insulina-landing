import SectionHeading from "@/components/SectionHeading";
import RevealSection from "@/components/RevealSection";
import { TEMARIO } from "@/lib/data";

const RECURSOS = [
  "5 módulos en video, explicados por el Dr. Cesar Medina",
  "Plantillas descargables de seguimiento clínico y nutricional",
  "Acceso a la plataforma de por vida, desde cualquier dispositivo",
  "Soporte directo a través del grupo privado de WhatsApp",
];

export default function Contenido() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          kicker="Qué incluye"
          title="Todo lo que recibes al inscribirte"
          subtitle="Un temario clínico estructurado en 5 módulos, más los recursos que necesitas para aplicarlo desde el primer día."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {TEMARIO.map((m, i) => (
            <RevealSection
              key={m.modulo}
              delay={i * 90}
              className="rounded-2xl card-border bg-ink-panel/60 p-6 sm:p-7"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
                {m.modulo}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-cream mb-3">
                {m.titulo}
              </h3>
              <ul className="space-y-2">
                {m.puntos.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </RevealSection>
          ))}

          <RevealSection
            delay={TEMARIO.length * 90}
            className="rounded-2xl border border-teal/30 bg-gradient-to-br from-teal-dark/15 to-ink-panel p-6 sm:p-7 shadow-tealGlow"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-light">
              Recursos incluidos
            </span>
            <h3 className="mt-2 font-display text-lg font-bold text-cream mb-3">
              Herramientas y soporte
            </h3>
            <ul className="space-y-2.5">
              {RECURSOS.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm text-cream/85 leading-relaxed">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal-light text-[10px]">
                    ✓
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
