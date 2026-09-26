import ThreeGlow from "@/components/ThreeGlow";
import RevealSection from "@/components/RevealSection";

export default function Hero() {
  return (
    <section className="sec-hero relative min-h-[100svh] overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-grid-lines bg-[size:42px_42px] opacity-50" />
      <div className="aurora-blob left-[-15%] top-[-10%] h-[28rem] w-[28rem] bg-gold/40 animate-aurora" />
      <div className="aurora-blob right-[-15%] top-[30%] h-[30rem] w-[30rem] bg-teal/40 animate-aurora [animation-delay:-7s]" />
      <div className="absolute inset-0 bg-radial-fade" />
      <ThreeGlow variant="hero" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#070a12]" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 py-24 sm:py-28 text-center">
        <RevealSection variant="zoom">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-5 py-2 text-sm sm:text-base font-bold tracking-wide text-gold-light shadow-goldGlow">
            <span className="h-2 w-2 rounded-full bg-teal-light animate-pulseDot" />
            Programa clínico · Dr. Cesar Medina
          </span>
        </RevealSection>

        <RevealSection variant="blur" delay={120}>
          <h1 className="title-pop mt-8 font-display text-[2.35rem] sm:text-6xl md:text-7xl font-black leading-[1.05] text-white">
            Tu cuerpo no está fallando.{" "}
            <span className="text-gradient-gold">Está resistiendo la insulina</span>{" "}
            y <span className="text-gradient-teal">nadie te lo explicó</span> a tiempo
          </h1>
        </RevealSection>

        <RevealSection variant="up" delay={240}>
          <p className="mx-auto mt-7 max-w-2xl text-lg sm:text-2xl font-medium text-muted leading-relaxed">
            Descubre, en menos de 40 minutos de video, el{" "}
            <strong className="text-white">sistema clínico</strong> que un
            especialista en Medicina Interna con{" "}
            <strong className="text-gold-light">18 años de trayectoria</strong>{" "}
            utiliza para revertir la resistencia a la insulina antes de que se
            convierta en Diabetes Mellitus.
          </p>
        </RevealSection>

        <RevealSection variant="flip" delay={360} className="mt-12">
          <div className="relative mx-auto w-full max-w-3xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-gold/40 via-teal/30 to-gold/40 blur-2xl opacity-80" />
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-gold/40 bg-ink-panel shadow-goldGlowXl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal/15 via-transparent to-gold/15" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <button
                  type="button"
                  aria-label="Reproducir video"
                  className="group relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-b from-gold-light to-gold text-ink shadow-goldGlow animate-ctaPulse transition-transform hover:scale-110"
                >
                  <svg viewBox="0 0 24 24" className="ml-1 h-9 w-9 sm:h-11 sm:w-11 fill-current">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <p className="text-sm sm:text-base font-bold tracking-widest text-white uppercase">
                  Mira el video completo · 38:12
                </p>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection variant="up" delay={480}>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-dim animate-bob">
            Desliza para conocer el método ↓
          </p>
        </RevealSection>
      </div>
    </section>
  );
}
