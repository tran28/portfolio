import { Arrow } from './ui/Arrow';
import { intro } from '../content/intro';

const COLOPHON = [
  { label: 'Stack', value: 'React · Tailwind · Framer Motion' },
  { label: 'Updated', value: new Date().getFullYear().toString() },
];

export function Footer() {
  return (
    <footer
      aria-label="Footer"
      className="invert-theme relative bg-paper px-6 pb-10 pt-16 text-ink md:px-12 md:pt-20 xl:px-24 2xl:px-32"
    >
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <p className="text-display text-3xl leading-tight lg:text-5xl">
            <span className="italic text-accent">m.t.</span>
            <span className="mx-3 text-muted">/</span>
            <span>{intro.name}</span>
          </p>
          <p className="mt-3 max-w-md text-sm text-muted">
            {intro.location} · {intro.year}
          </p>
        </div>

        <dl className="col-span-12 grid grid-cols-1 gap-5 lg:col-span-6 lg:grid-cols-2">
          {COLOPHON.map((item) => (
            <div key={item.label}>
              <dt className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {item.label}
              </dt>
              <dd className="text-mono mt-2 text-xs leading-relaxed text-ink/80">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="text-mono mt-16 flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-muted">
        <span>© {new Date().getFullYear()} Matthew Tran</span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-cursor="top"
          className="group/arrow link-underline inline-flex items-center gap-2 text-ink"
        >
          Back to top <Arrow dir="n" size={12} className="text-accent" />
        </button>
      </div>
    </footer>
  );
}
