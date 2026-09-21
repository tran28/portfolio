import { useEffect, useState } from 'react';
import { Reveal } from '../components/anim/Reveal';
import { intro } from '../content/intro';

/**
 * Hero behavior:
 *   - Mobile/tablet (< lg): renders in normal flow, scrolls away naturally.
 *   - Desktop (>= lg): position-fixed at z-0, the content layer above it
 *     (z-10 with bg-paper) slides over it on scroll. Once the user has
 *     scrolled past ~90% of the page, the hero fades + becomes
 *     non-interactive so it can't bleed through during overscroll bounce.
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
      <div className="flex flex-1 flex-col justify-center gap-12 md:gap-16">
        <Reveal>
          <h1 className="text-display text-[18vw] leading-[0.88] lg:text-[13vw] 2xl:text-[208px]">
            <span className="block">Matthew</span>
            <span className="block italic">Tran</span>
          </h1>
        </Reveal>

        <div className="grid grid-cols-12 gap-6">
          <Reveal
            delay={0.15}
            className="text-mono col-span-12 text-[11px] uppercase tracking-[0.18em] text-muted md:col-span-3"
          >
            {intro.role}
            <span className="mt-1 block">{intro.location}</span>
          </Reveal>
          <Reveal
            delay={0.25}
            className="text-display col-span-12 max-w-md leading-[1.1] md:col-span-6 md:col-start-5"
          >
            <span className="block text-2xl text-ink lg:text-3xl">{intro.tagline.line1}</span>
            <span className="block text-2xl italic text-muted lg:text-3xl">
              {intro.tagline.line2}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
