import { IconAsterisk } from '@tabler/icons-react';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/anim/Reveal';
import { accolades } from '../content/accolades';

export function Accolades() {
  return (
    <Section id="accolades" number="04" label="Accolades" ariaLabel="Recognition">
      <div className="grid grid-cols-12 gap-6">
        <Reveal className="col-span-12 lg:col-span-4">
          <h2 className="text-display text-6xl leading-[0.95] sm:text-7xl lg:text-[5vw] 2xl:text-[80px]">
            <em className="italic text-accent">Recognition.</em>
          </h2>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
            Things I&apos;m proud of.
          </p>
        </Reveal>

        <ul className="col-span-12 flex flex-col gap-6 lg:col-span-7 lg:col-start-6 lg:grid lg:grid-cols-3 lg:gap-8">
          {accolades.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08} as="li">
              <a
                href={a.href}
                target="_blank"
                rel="noreferrer noopener"
                data-cursor="view"
                className="group/arrow flex h-full items-start gap-4 lg:flex-col lg:gap-0"
              >
                {/* Image: small thumbnail on mobile, full-width on lg */}
                <div className="flex aspect-[4/3] w-28 shrink-0 items-center justify-center lg:mb-5 lg:w-full">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover/arrow:scale-[1.04] dark:mix-blend-normal"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <span className="text-mono inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-accent tabular-nums">
                    <IconAsterisk aria-hidden="true" size={10} stroke={1.5} />
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-display mt-1 text-lg leading-tight lg:mt-2 lg:text-xl">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70 lg:mt-3">
                    {a.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
