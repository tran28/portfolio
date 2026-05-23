/**
 * Registration mark — a small bullseye used as an editorial anchor.
 * Optional `pulse` makes it breathe for active markers.
 */
export function RegMark({ size = 10, pulse = false, className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center ${pulse ? 'pulse-dot' : ''} ${className}`}
      style={{ width: size, height: size }}
    >
      <span
        className="block rounded-full border border-accent"
        style={{ width: size, height: size }}
      />
      <span
        className="absolute rounded-full bg-accent"
        style={{ width: size / 3, height: size / 3 }}
      />
    </span>
  );
}
