import SectionHeading from "@/components/SectionHeading";
import RevealSection from "@/components/RevealSection";
import FallbackImage from "@/components/FallbackImage";

// Ilustraciones SVG ligeras (sin dependencias externas) alusivas a cada dolor.
function IlustCansancio() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <circle cx="150" cy="38" r="22" fill="#fca5a5" opacity="0.18" />
      <path d="M150 20a18 18 0 1 0 14 30 22 22 0 0 1-14-30z" fill="#fecaca" opacity="0.9" />
      <rect x="30" y="70" width="110" height="26" rx="8" fill="#7f1d1d" opacity="0.7" />
      <rect x="30" y="62" width="34" height="16" rx="8" fill="#fecaca" opacity="0.85" />
      <text x="84" y="50" fill="#fca5a5" fontSize="18" fontWeight="800" fontFamily="sans-serif">z</text>
      <text x="98" y="38" fill="#fca5a5" fontSize="22" fontWeight="800" fontFamily="sans-serif">z</text>
      <text x="116" y="24" fill="#fca5a5" fontSize="26" fontWeight="800" fontFamily="sans-serif">Z</text>
      <rect x="150" y="80" width="30" height="14" rx="3" fill="none" stroke="#f87171" strokeWidth="2.5" />
      <rect x="153" y="83" width="6" height="8" fill="#f87171" />
    </svg>
  );
}

function IlustPeso() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <rect x="55" y="40" width="90" height="70" rx="14" fill="#7f1d1d" opacity="0.7" />
      <rect x="70" y="52" width="60" height="26" rx="6" fill="#1f0a0e" stroke="#f87171" strokeWidth="2" />
      <text x="100" y="71" textAnchor="middle" fill="#fecaca" fontSize="16" fontWeight="800" fontFamily="monospace">+2 kg</text>
      <path d="M22 88 L42 70 L58 84 L78 62" stroke="#f87171" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M150 30 L168 50 L186 26" stroke="#fca5a5" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M180 26h6v6" stroke="#fca5a5" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function IlustAnsiedad() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <path d="M10 90 C30 90 35 20 55 20 S80 100 100 100 S125 25 145 25 S170 95 190 95" stroke="#f87171" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <circle cx="55" cy="20" r="5" fill="#fecaca" />
      <circle cx="100" cy="100" r="5" fill="#fecaca" />
      <circle cx="145" cy="25" r="5" fill="#fecaca" />
      <rect x="150" y="62" width="20" height="20" rx="3" fill="#fecaca" opacity="0.9" />
      <rect x="164" y="74" width="20" height="20" rx="3" fill="#fca5a5" opacity="0.7" />
      <rect x="20" y="30" width="16" height="16" rx="3" fill="#fca5a5" opacity="0.6" />
    </svg>
  );
}

function IlustAnalisis() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <rect x="40" y="10" width="90" height="104" rx="8" fill="#1f0a0e" stroke="#f87171" strokeWidth="2" />
      <rect x="54" y="26" width="50" height="6" rx="3" fill="#fca5a5" opacity="0.8" />
      <rect x="54" y="42" width="62" height="5" rx="2.5" fill="#fecaca" opacity="0.4" />
      <rect x="54" y="56" width="54" height="5" rx="2.5" fill="#fecaca" opacity="0.4" />
      <rect x="54" y="70" width="60" height="5" rx="2.5" fill="#fecaca" opacity="0.4" />
      <path d="M58 92l8 8 14-16" stroke="#86efac" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <circle cx="150" cy="62" r="26" fill="#7f1d1d" opacity="0.8" />
      <text x="150" y="74" textAnchor="middle" fill="#fecaca" fontSize="36" fontWeight="900" fontFamily="sans-serif">?</text>
    </svg>
  );
}

const DOLORES = [
  {
    titulo: "Cansancio que no se explica",
    texto:
      "Duermes tus horas, pero despiertas agotado. Te dicen que es “estrés” cuando en realidad puede haber distintos factores metabólicos que conviene evaluar.",
    imagen: "/images/cansancio-resistencia-insulina.png",
    alt: "Mujer con cansancio y falta de energía",
    Ilust: IlustCansancio,
  },
  {
    titulo: "Peso que no baja aunque hagas dieta",
    texto:
      "Bajas dos kilos y los recuperas. La resistencia a la insulina puede ser uno de varios factores que dificultan el control del peso.",
    imagen: "/images/peso-resistencia-insulina.png",
    alt: "Persona preocupada por la dificultad para bajar de peso",
    Ilust: IlustPeso,
  },
  {
    titulo: "Hambre y antojos por azúcar",
    texto:
      "El hambre frecuente y los antojos pueden aparecer por múltiples razones. Si son persistentes, vale la pena revisar tus hábitos y tu salud metabólica.",
    imagen: "/images/antojos-azucar.png",
    alt: "Mujer frente a alimentos dulces",
    Ilust: IlustAnsiedad,
  },
  {
    titulo: "Análisis “normales” que no cuadran con cómo te sientes",
    texto:
      "Una glucosa en ayunas dentro del rango esperado no siempre responde todas las preguntas. Un profesional puede determinar qué otros factores o pruebas conviene evaluar.",
    imagen: "/images/glucosa-analisis.png",
    alt: "Medición de glucosa en sangre",
    Ilust: IlustAnalisis,
  },
];

const ERRORES = [
  "Enfocarse solo en el peso y no en el metabolismo",
  "Confiar únicamente en la glucosa en ayunas como indicador",
  "Empezar dietas extremas sin entender la causa",
  "Ignorar señales persistentes que conviene evaluar con un profesional",
];

export default function Problema() {
  return (
    <section className="sec-problema relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <SectionHeading
          accent="red"
          kicker="El problema real"
          title={
            <>
              No es falta de voluntad.{" "}
              <span className="text-gradient-red">
                Tu salud metabólica merece una mirada más completa
              </span>
            </>
          }
          subtitle="Algunas señales pueden tener múltiples causas. Si son persistentes, conviene evaluarlas con un profesional de la salud."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {DOLORES.map((d, i) => (
            <RevealSection
              key={d.titulo}
              variant={i % 2 === 0 ? "left" : "right"}
              delay={i * 90}
              className="lift group overflow-hidden rounded-2xl border border-red-400/25 bg-[#1a0a10]/85 shadow-[0_20px_50px_-25px_rgba(239,68,68,0.6)] hover:border-red-400/60"
            >
              <div className="relative h-[220px] border-b border-red-400/20 bg-gradient-to-br from-red-950/80 to-[#12070b]">
                {/* Foto real; si aún no está subida en /public/images se muestra la ilustración. */}
                <FallbackImage
                  src={d.imagen}
                  alt={d.alt}
                  className="block h-full w-full object-cover"
                >
                  <div className="h-full w-full p-6">
                    <d.Ilust />
                  </div>
                </FallbackImage>
                <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 font-display text-base font-black text-white shadow-[0_0_20px_rgba(239,68,68,0.7)]">
                  {i + 1}
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white mb-2">
                  {d.titulo}
                </h3>
                <p className="text-base sm:text-lg text-muted leading-relaxed">{d.texto}</p>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection
          variant="clip"
          delay={150}
          className="mt-12 rounded-2xl border-2 border-red-500/40 bg-red-950/40 p-6 sm:p-9 shadow-[0_0_60px_-20px_rgba(239,68,68,0.6)]"
        >
          <h3 className="font-display text-lg sm:text-2xl font-black text-red-300 mb-5 uppercase tracking-wide">
            ⚠ Errores comunes que pueden dificultar el progreso
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {ERRORES.map((e) => (
              <li key={e} className="flex items-start gap-3 text-base sm:text-lg text-white/90">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/25 text-red-300 text-xs font-black">✕</span>
                {e}
              </li>
            ))}
          </ul>
          <p className="mt-7 rounded-xl bg-black/30 p-5 text-base sm:text-lg text-red-100 leading-relaxed">
            <strong className="text-red-300">Importante:</strong> la resistencia a
            la insulina puede aumentar el riesgo de prediabetes y diabetes tipo 2.
            La evaluación y el seguimiento profesional ayudan a definir el manejo
            adecuado para cada persona.
          </p>
        </RevealSection>
      </div>
    </section>
  );
}
