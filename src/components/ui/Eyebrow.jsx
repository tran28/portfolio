/**
 * Section eyebrow — number and label in small mono caps. Kept deliberately
 * plain so the section heading carries the weight.
 */
export function Eyebrow({ number, label, className = '' }) {
  return (
    <div
      className={`text-mono flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-muted ${className}`}
    >
      {number && <span className="tabular-nums">{number}</span>}
      <span>{label}</span>
    </div>
  );
}
