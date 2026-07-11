export default function SectionLabel({ index, text }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-[11px] text-rust tracking-wider">{index}</span>
      <span className="w-8 h-px bg-line" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
        {text}
      </span>
    </div>
  );
}
