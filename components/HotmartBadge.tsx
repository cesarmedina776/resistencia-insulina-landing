export default function HotmartBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-md bg-[#FF7A00]/15 px-2 py-1 ${className}`}
      aria-label="Hotmart"
      title="Procesado por Hotmart"
    >
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FF7A00] text-[9px] font-black text-white">
        H
      </span>
      <span className="text-[10px] font-bold tracking-wide text-[#FF7A00]">
        HOTMART
      </span>
    </div>
  );
}
