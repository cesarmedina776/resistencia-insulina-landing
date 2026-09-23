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
    <section className="relative bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="Resultados reales"
          title="Lo que cuentan quienes ya aplicaron el sistema"
          subtitle="Capturas de testimonios reales de alumnos. Espacio reservado para subir cada imagen en su formato original."
        />

        {/* Masonry en CSS columns: 1 columna en móvil, 3 en desktop.
            Al reemplazar cada placeholder por <img className="w-full h-auto block" />
            la imagen se mostrará completa, sin recortes ni huecos. */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:balance]">
          {PLACEHOLDERS.map((t) => (
            <RevealSection
              key={t.id}
              delay={(t.id % 4) * 90}
              className="mb-5 break-inside-avoid"
            >
              <div
                style={{ aspectRatio: t.ratio }}
                className="relative w-full overflow-hidden rounded-2xl border-2 border-dashed border-gold/25 bg-ink-panel/60 flex flex-col items-center justify-center gap-3 px-4 text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold-light text-lg">
                  +
                </span>
                <p className="text-xs sm:text-sm font-semibold text-muted">
                  Testimonio #{t.id}
                </p>
                <p className="text-[11px] text-muted/70 max-w-[80%]">
                  Espacio para captura de WhatsApp / reseña
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
