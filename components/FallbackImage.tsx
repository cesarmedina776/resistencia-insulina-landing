"use client";

import { useState } from "react";

// Muestra la foto; si aún no existe en /public, deja visible el respaldo (children).
export default function FallbackImage({
  src,
  alt,
  className = "",
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{children}</>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
