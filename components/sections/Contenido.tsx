import SectionHeading from "@/components/SectionHeading";
import RevealSection from "@/components/RevealSection";
import { TEMARIO } from "@/lib/data";

const RECURSOS = [
  { icon: "▶", texto: "5 módulos en video, explicados por el Dr. Cesar Medina" },
  { icon: "⬇", texto: "Plantillas descargables de seguimiento clínico y nutricional" },
  { icon: "∞", texto: "Acceso a la plataforma de por vida, desde cualquier dispositivo" },
  { icon: "💬", texto: "Soporte directo a través del grupo privado de WhatsApp" },
];

export default function Contenido() {
  return (
    <section className="sec-contenido relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <SectionHeading
          theme="light"
          kicker="Qué incluye"
          title={
            <>
              Todo lo que recibes <span className="text-gradient-gold-dark">al inscribirte</span>
            </>
          }
          subtitle="Un temario clínico estructurado en 5 módulos, más los recursos que necesitas para aplicarlo desde el primer día."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {TEMARIO.map((m, i) => (
            <RevealSection
              key={m.modulo}
              variant="flip"
              delay={i * 90}
              className="lift relative overflow-hidden rounded-2xl border border-amber-900/15 bg-white p-6 sm:p-7 shadow-lightCard hover:border-amber-600/50"
            >
              <span className="absolute -right-3 -top-6 font-display text-[7rem] font-black leading-none text-amber-500/10 select-none">
                {i + 1}
              </span>
              <span className="relative inline-block rounded-full bg-slate-900 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-gold-light">
                {m.modulo}
              </span>
              <h3 className="relative mt-3 font-display text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                {m.titulo}
              </h3>
              <ul className="relative space-y-2.5">
                {m.puntos.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-base text-slate-700 leading-relaxed">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-500 text-[9px] font-black text-white">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </RevealSection>
          ))}

          <RevealSection
            variant="flip"
            delay={TEMARIO.length * 90}
            className="lift rounded-2xl bg-gradient-to-br from-slate-900 to-[#0b2a28] p-6 sm:p-7 shadow-[0_24px_50px_-20px_rgba(15,118,110,0.7)]"
          >
            <span className="inline-block rounded-full bg-teal px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-ink">
              Recursos incluidos
            </span>
            <h3 className="mt-3 font-display text-xl sm:text-2xl font-extrabold text-white mb-4">
              Herramientas, accesos y soporte
            </h3>
            <ul className="space-y-3">
              {RECURSOS.map((r) => (
                <li key={r.texto} className="flex items-start gap-3 text-base text-white/90 leading-relaxed">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal/25 text-sm text-teal-light">
                    {r.icon}
                  </span>
                  {r.texto}
                </li>
              ))}
            </ul>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
