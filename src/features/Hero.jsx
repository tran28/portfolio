import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SplitText } from '../components/anim/SplitText';
import { Reveal } from '../components/anim/Reveal';
import { RegMark } from '../components/ui/RegMark';
import { Arrow } from '../components/ui/Arrow';
import { intro } from '../content/intro';

/**
 * Hero behavior:
 *   - Mobile/tablet (< lg): renders in normal flow, scrolls away naturally.
 *   - Desktop (>= lg): position-fixed at z-0, the content layer above it
 *     (z-10 with bg-paper) slides over it on scroll. Once the user has
 *     scrolled past ~90% of the page (i.e. into the footer area), the hero
 *     fades + becomes non-interactive so it can't bleed through during
 *     overscroll bounce at the bottom.
 */
export function Hero() {
  const [hideAtEnd, setHideAtEnd] = useState(false);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      setHideAtEnd(window.scrollY / max > 0.9);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section
      id="top"
      aria-label="Introduction"
      aria-hidden={hideAtEnd ? 'true' : undefined}
      className={`hero-vh relative flex flex-col px-6 pt-24 transition-opacity duration-500 md:px-12 md:pt-32 lg:fixed lg:inset-x-0 lg:top-0 lg:z-0 xl:px-24 2xl:px-32 ${
        hideAtEnd ? 'lg:pointer-events-none lg:opacity-0' : ''
      }`}
      style={{ paddingBottom: 'max(3rem, env(safe-area-inset-bottom))' }}
    >
      {/* Top metadata strip */}
      <div className="grid grid-cols-12 gap-6">
        <Reveal className="col-span-6 flex items-center gap-3">
          <RegMark size={9} pulse />
          <span className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            {intro.location}
          </span>
        </Reveal>
        <Reveal
          delay={0.1}
          className="col-span-6 flex items-center justify-end gap-3 text-right"
        >
          <span className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            {intro.year}
          </span>
        </Reveal>
      </div>

      {/* Hero name + tagline (grouped, centered vertically) */}
      <div className="flex flex-1 flex-col justify-center gap-10 md:gap-14">
        <h1 className="text-display text-[18vw] leading-[0.85] lg:text-[14vw] 2xl:text-[224px]">
          <SplitText as="span" text="Matthew" className="block" />
          <SplitText as="span" text="Tran" className="block italic" delay={0.08} />
          <motion.span
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mt-2 block h-px w-full bg-accent"
            aria-hidden="true"
          />
        </h1>

        <div className="grid grid-cols-12 gap-6">
          <Reveal
            delay={0.5}
            className="text-mono col-span-12 text-[11px] uppercase tracking-[0.2em] text-muted md:col-span-3"
          >
            {intro.role}
          </Reveal>
          <Reveal
            delay={0.6}
            className="text-display col-span-12 max-w-md leading-[1.05] md:col-span-6 md:col-start-5"
          >
            <span className="block text-2xl text-ink lg:text-3xl">{intro.tagline.line1}</span>
            <span className="block text-2xl italic text-accent lg:text-3xl">
              {intro.tagline.line2}
            </span>
          </Reveal>
        </div>
      </div>

      {/* Scroll hint anchored to bottom */}
      <Reveal delay={0.7} className="group/arrow flex items-center justify-end gap-2">
        <span className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted">Scroll</span>
        <Arrow dir="s" size={14} className="text-accent" />
      </Reveal>
    </section>
  );
}
