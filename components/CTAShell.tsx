import ThreeGlow from "@/components/ThreeGlow";
import RevealSection from "@/components/RevealSection";

// Envoltura común de los 3 CTA: una sola columna centrada, marco con borde
// de gradiente giratorio, resplandor y partículas Three.js al fondo.
export default function CTAShell({
  bgClass,
  children,
}: {
  bgClass: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`relative overflow-hidden py-20 sm:py-28 ${bgClass}`}>
      <div className="aurora-blob left-[-10%] top-[5%] h-80 w-80 bg-gold/50 animate-aurora" />
      <div className="aurora-blob right-[-10%] bottom-[10%] h-96 w-96 bg-teal/40 animate-aurora [animation-delay:-6s]" />
      <ThreeGlow variant="cta" className="opacity-70" />

      <RevealSection variant="zoom" className="relative mx-auto w-full max-w-2xl px-3 sm:px-6">
        <div className="cta-frame">
          <div className="relative flex flex-col items-center gap-10 px-4 py-10 sm:px-10 sm:py-14 text-center">
            {children}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
