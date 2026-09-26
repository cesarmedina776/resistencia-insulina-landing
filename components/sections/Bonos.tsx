import SectionHeading from "@/components/SectionHeading";
import RevealSection from "@/components/RevealSection";
import { BONOS } from "@/lib/data";

const ICONOS = ["🧪", "🥗", "💬"];

export default function Bonos() {
  return (
    <section className="sec-bonos relative py-24 sm:py-32 overflow-hidden">
      <div className="aurora-blob left-[-10%] top-1/3 h-96 w-96 bg-violet/40 animate-aurora" />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-6">
        <SectionHeading
          accent="violet"
          kicker="🎁 Bonos incluidos"
          title={
            <>
              Además, te llevas esto <span className="text-gradient-violet">sin costo adicional</span>
            </>
          }
          subtitle="Recursos extra pensados para que apliques el sistema sin fricciones desde el primer día."
        />

        <div className="space-y-7">
          {BONOS.map((b, i) => (
            <RevealSection
              key={b.titulo}
              variant="zoom"
              delay={i * 130}
              className="lift relative flex flex-col sm:flex-row sm:items-center gap-5 rounded-3xl border-2 border-violet/40 bg-gradient-to-r from-[#1d1245]/90 to-[#140c30]/90 p-6 sm:p-8 shadow-violetGlow hover:border-violet-light/80"
            >
              <span className="absolute z-10 -top-3.5 right-6 rotate-3 rounded-full bg-gradient-to-r from-gold to-gold-light px-4 py-1 text-xs font-black uppercase tracking-wide text-ink shadow-goldGlow">
                Gratis hoy
              </span>
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-violet-dark text-3xl shadow-violetGlow">
                {ICONOS[i]}
              </div>
              <div className="flex-1">
                <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-violet-light">
                  Bono {i + 1}
                </p>
                <h3 className="mt-1 font-display text-xl sm:text-2xl font-extrabold text-white">
                  {b.titulo.replace(/^Bono \d+: /, "")}
                </h3>
                <p className="mt-2 text-base sm:text-lg text-muted leading-relaxed">
                  {b.descripcion}
                </p>
              </div>
              <div className="shrink-0 self-start sm:self-center text-left sm:text-center">
                <p className="text-xs font-bold uppercase tracking-wide text-dim">Valor</p>
                <p className="font-display text-xl font-black text-dim line-through decoration-red-500 decoration-2">
                  {b.valor.replace("Valor: ", "")}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection variant="up" delay={200} className="mt-10 text-center">
          <p className="inline-block rounded-2xl border border-gold/40 bg-black/30 px-6 py-4 text-lg font-bold text-white">
            Valor total en bonos: <span className="text-dim line-through">85 USD</span>{" "}
            → <span className="text-gradient-gold text-2xl font-black">GRATIS</span>
          </p>
        </RevealSection>
      </div>
    </section>
  );
}
