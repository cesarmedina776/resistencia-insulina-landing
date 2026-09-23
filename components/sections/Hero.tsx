import ThreeGlow from "@/components/ThreeGlow";
import RevealSection from "@/components/RevealSection";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink flex items-center">
      <div className="absolute inset-0 bg-grid-lines bg-[size:42px_42px] opacity-40" />
      <div className="absolute inset-0 bg-radial-fade" />
      <ThreeGlow variant="hero" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center">
        <RevealSection>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-gold-light">
            Programa clínico · Dr. Cesar Medina
          </span>
        </RevealSection>

        <RevealSection delay={100}>
          <h1 className="mt-8 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] text-cream">
            Tu cuerpo no está fallando.{" "}
            <span className="text-gradient-gold">Está resistiendo la insulina</span>{" "}
            y nadie te lo explicó a tiempo
          </h1>
        </RevealSection>

        <RevealSection delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-muted leading-relaxed">
            Descubre, en menos de 40 minutos de video, el sistema clínico que un
            especialista en Medicina Interna con 18 años de trayectoria utiliza
            para revertir la resistencia a la insulina antes de que se convierta
            en Diabetes Mellitus.
          </p>
        </RevealSection>

        <RevealSection delay={320} className="mt-12">
          <div className="relative mx-auto aspect-video w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-ink-panel shadow-cardGlow">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-gold/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Reproducir video"
                className="group flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gold text-ink shadow-goldGlow transition-transform hover:scale-105"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="ml-1 h-7 w-7 sm:h-9 sm:w-9 fill-current"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <p className="text-xs sm:text-sm tracking-widest text-muted uppercase">
                Video explicativo · 00:00 / 38:12
              </p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
