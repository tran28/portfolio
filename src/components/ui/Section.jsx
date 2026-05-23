/**
 * Vertical section container with a generous, asymmetric grid and an
 * optional editorial eyebrow row.
 *
 * Content is capped at a max-width and centered so ultrawide screens
 * (>1600px) read consistently with desktop, with even margins on both sides.
 */
import { Eyebrow } from './Eyebrow';

export function Section({ id, number, label, ariaLabel, children }) {
  return (
    <section
      id={id}
      aria-label={ariaLabel ?? label}
      className="relative px-6 pb-32 pt-24 md:px-12 md:pb-40 md:pt-32 xl:px-24"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {label && (
          <div className="mb-16 md:mb-24">
            <Eyebrow number={number} label={label} />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
