import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IconAsterisk, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { ThemeToggle } from '../theme/ThemeToggle';
import { intro } from '../content/intro';

const SECTIONS = [
  { id: 'about', n: '01', label: 'About' },
  { id: 'work', n: '02', label: 'Work' },
  { id: 'projects', n: '03', label: 'Projects' },
  { id: 'accolades', n: '04', label: 'Accolades' },
  { id: 'contact', n: '05', label: 'Contact' },
];

const CONTACTS = [
  {
    label: 'Email',
    href: 'mailto:matthewtran.jobs@gmail.com',
    icon: IconMail,
    cursor: 'email',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matthewtran-eng/',
    icon: IconBrandLinkedin,
    cursor: 'linkedin',
  },
];

export function Hud() {
  const { scrollYProgress } = useScroll();
  const barWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
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
        // Distance from this section's top to the 40%-from-top reference line.
        // Only consider sections whose top is above the reference (we've scrolled into or past it).
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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="hairline relative h-px w-full bg-rule/40">
        <motion.div className="absolute left-0 top-0 h-px bg-accent" style={{ width: barWidth }} />
      </div>
      <div className="pointer-events-auto flex items-center justify-between px-6 pt-4 md:px-12 xl:px-24 2xl:px-32">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-cursor="top"
          className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted hover:text-ink"
        >
          <span className="text-ink">{intro.name}</span>
          <span className="mx-2 text-rule">/</span>
          {intro.role}
        </button>

        <nav aria-label="Sections" className="hidden items-center gap-5 md:flex">
          {SECTIONS.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => jump(s.id)}
                data-cursor="jump"
                aria-current={isActive ? 'true' : undefined}
                className={`text-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                  isActive ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                <IconAsterisk
                  aria-hidden="true"
                  size={10}
                  stroke={1.5}
                  className={`mr-2 inline-block shrink-0 text-accent transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <span className="tabular-nums">{s.n}</span>
                <span className="ml-2">{s.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            {CONTACTS.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer noopener"
                  data-cursor={c.cursor}
                  aria-label={c.label}
                  title={c.label}
                  className="hairline inline-flex h-8 w-8 items-center justify-center rounded-full border text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={14} stroke={1.5} />
                </a>
              );
            })}
          </div>
          <span aria-hidden="true" className="hidden h-5 w-px bg-rule md:block" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
