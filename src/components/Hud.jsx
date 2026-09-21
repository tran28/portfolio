import { useEffect, useState } from 'react';
import { ThemeToggle } from '../theme/ThemeToggle';
import { intro } from '../content/intro';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'accolades', label: 'Recognition' },
  { id: 'contact', label: 'Contact' },
];

export function Hud() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id);

    const update = () => {
      const mid = window.innerHeight * 0.4;
      let best = { id: ids[0], dist: Infinity };
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top - mid <= 0 && Math.abs(rect.top - mid) < best.dist) {
          best = { id, dist: Math.abs(rect.top - mid) };
        }
      });
      setActive((prev) => (prev === best.id ? prev : best.id));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-paper via-paper/80 to-transparent pb-8">
      <div className="pointer-events-auto flex items-center justify-between px-6 pt-5 md:px-12 xl:px-24 2xl:px-32">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-mono text-[11px] uppercase tracking-[0.18em] text-ink"
        >
          {intro.name}
        </button>

        <nav aria-label="Sections" className="hidden items-center gap-7 md:flex">
          {SECTIONS.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => jump(s.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`text-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isActive ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
