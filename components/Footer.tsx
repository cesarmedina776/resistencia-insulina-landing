export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm text-muted leading-relaxed">
          Este programa tiene fines educativos y no sustituye una consulta
          médica individual. Consulta siempre a tu médico tratante antes de
          modificar tratamientos, medicación o hábitos relacionados con tu
          salud.
        </p>
        <p className="mt-4 text-sm text-dim">
          © {new Date().getFullYear()} Dr. Cesar Medina · Resuelve la
          Resistencia a la Insulina · Procesado por Hotmart
        </p>
      </div>
    </footer>
  );
}
