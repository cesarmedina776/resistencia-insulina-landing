import SectionHeading from "@/components/SectionHeading";
import RevealSection from "@/components/RevealSection";

// Relación de aspecto tentativa por placeholder (alto/ancho variable a propósito,
// para simular capturas reales de WhatsApp de distintos tamaños).
const PLACEHOLDERS = [
  { id: 1, ratio: "4 / 5" },
  { id: 2, ratio: "1 / 1" },
  { id: 3, ratio: "3 / 4" },
  { id: 4, ratio: "9 / 16" },
  { id: 5, ratio: "1 / 1" },
  { id: 6, ratio: "4 / 5" },
  { id: 7, ratio: "3 / 4" },
  { id: 8, ratio: "1 / 1" },
];

export default function Testimonios() {
  return (
    <section className="sec-testimonios relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          theme="light"
          accent="teal"
          kicker="Resultados reales"
          title={
            <>
              Lo que cuentan quienes <span className="text-gradient-teal-dark">ya aplicaron el sistema</span>
            </>
          }
          subtitle="Capturas de testimonios reales de alumnos, mostradas en su formato original."
        />

        {/* Masonry en CSS columns: 1 columna en móvil, 3 en desktop.
            Al reemplazar cada placeholder por <img className="w-full h-auto block" />
            la imagen se mostrará completa, sin recortes ni huecos. */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:balance]">
          {PLACEHOLDERS.map((t) => (
            <RevealSection
              key={t.id}
              variant="zoom"
              delay={(t.id % 3) * 100}
              className="mb-5 break-inside-avoid"
            >
              <div
                style={{ aspectRatio: t.ratio }}
                className="lift relative w-full overflow-hidden rounded-2xl border-2 border-dashed border-teal-700/35 bg-white/80 shadow-lightCard flex flex-col items-center justify-center gap-3 px-4 text-center hover:border-teal-600"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-2xl font-black text-white shadow-tealGlow">
                  +
                </span>
                <p className="font-display text-base font-extrabold text-slate-800">
                  Testimonio #{t.id}
                </p>
                <p className="text-sm text-slate-600 max-w-[80%]">
                  Espacio para captura de WhatsApp / reseña
                </p>
                <span className="text-amber-500 text-lg tracking-widest">★★★★★</span>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
