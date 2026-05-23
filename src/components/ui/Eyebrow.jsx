import { IconAsterisk } from '@tabler/icons-react';

/**
 * Editorial section eyebrow — small caps mono label with leading asterisk
 * icon and a hairline rule.
 */
export function Eyebrow({ number, label, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <IconAsterisk aria-hidden="true" size={12} stroke={1.5} className="shrink-0 text-accent" />
      {number && (
        <span className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted tabular-nums">
          {number}
        </span>
      )}
      <span className="hairline h-px w-8 bg-rule" aria-hidden="true" />
      <span className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted">{label}</span>
    </div>
  );
}
