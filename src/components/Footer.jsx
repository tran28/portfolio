import { intro } from '../content/intro';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      aria-label="Footer"
      className="text-mono relative flex flex-wrap items-center justify-between gap-4 bg-paper px-6 pb-10 pt-6 text-[11px] uppercase tracking-[0.18em] text-muted md:px-12 xl:px-24 2xl:px-32"
    >
      <span>
        © {year} {intro.name}
      </span>
      <span>{intro.location}</span>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="link-underline text-ink"
      >
        Back to top
      </button>
    </footer>
  );
}
