import SectionHeading from "@/components/SectionHeading";
import RevealSection from "@/components/RevealSection";

const CALLOUTS = [
  {
    titulo: "Lectura de laboratorio",
    texto: "Interpretas tu insulina basal y HOMA-IR igual que lo haría el especialista.",
  },
  {
    titulo: "Plan de comidas del día",
    texto: "Comidas estructuradas para mantener estable tu glucosa, sin contar calorías.",
  },
  {
    titulo: "Seguimiento semanal",
    texto: "Registras tu progreso real, no solo el número en la báscula.",
  },
];

// Ejemplo ilustrativo de cómo se completa la plantilla de seguimiento.
const FILAS = [
  { semana: "Semana 1", glucosa: "108", insulina: "18.4", energia: 2 },
  { semana: "Semana 4", glucosa: "101", insulina: "14.1", energia: 3 },
  { semana: "Semana 8", glucosa: "94", insulina: "10.7", energia: 4 },
];

export default function Demostracion() {
  return (
    <section className="sec-demo relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <SectionHeading
          accent="blue"
          kicker="Demostración"
          title={
            <>
              Así se ve el sistema <span className="text-gradient-teal">aplicado en la práctica</span>
            </>
          }
          subtitle="Un vistazo a la plantilla de seguimiento que usarás dentro del programa (datos de ejemplo)."
        />

        <RevealSection variant="flip" delay={100} className="relative mx-auto max-w-3xl">
          <div className="absolute -inset-3 rounded-3xl bg-sky-500/20 blur-2xl" />
          <div className="relative rounded-2xl border-2 border-sky-300/40 bg-[#0b1a33] shadow-[0_30px_80px_-30px_rgba(56,189,248,0.6)] overflow-hidden">
            <div className="flex items-center gap-1.5 border-b border-sky-300/20 bg-black/40 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-gold" />
              <span className="h-3 w-3 rounded-full bg-teal" />
              <span className="ml-3 truncate text-sm font-medium text-muted">
                Plantilla de seguimiento metabólico
              </span>
            </div>
            <div className="p-4 sm:p-7 overflow-x-auto">
              <table className="w-full min-w-[420px] text-left">
                <thead>
                  <tr className="text-xs sm:text-sm font-black uppercase tracking-wider text-sky-300">
                    <th className="pb-3">Semana</th>
                    <th className="pb-3">Glucosa (mg/dL)</th>
                    <th className="pb-3">Insulina (µU/mL)</th>
                    <th className="pb-3">Energía</th>
                  </tr>
                </thead>
                <tbody className="text-base sm:text-lg font-semibold text-white">
                  {FILAS.map((f, i) => (
                    <tr key={f.semana} className="border-t border-white/10">
                      <td className="py-3">{f.semana}</td>
                      <td className="py-3">{f.glucosa}</td>
                      <td className={`py-3 ${i === FILAS.length - 1 ? "text-teal-light" : ""}`}>
                        {f.insulina}
                      </td>
                      <td className="py-3">
                        <span className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <span
                              key={n}
                              className={`h-3 w-3 rounded-sm ${n <= f.energia ? "bg-gold" : "bg-white/15"}`}
                            />
                          ))}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 rounded-lg bg-teal/15 px-4 py-3 text-sm sm:text-base font-semibold text-teal-light">
                ✓ Tendencia: la insulina en ayunas baja semana a semana. Esto es lo
                que aprendes a leer y a sostener.
              </p>
            </div>
          </div>
        </RevealSection>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {CALLOUTS.map((c, i) => (
            <RevealSection
              key={c.titulo}
              variant="up"
              delay={200 + i * 110}
              className="lift rounded-2xl border border-sky-300/30 bg-[#0c1f3d]/85 p-6 text-center hover:border-sky-300/70"
            >
              <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-sky-400/20 font-display font-black text-sky-300">
                {i + 1}
              </span>
              <h3 className="font-display text-lg font-extrabold text-white mb-1.5">
                {c.titulo}
              </h3>
              <p className="text-base text-muted leading-relaxed">
                {c.texto}
              </p>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
