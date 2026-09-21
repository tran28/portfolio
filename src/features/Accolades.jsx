import { Section } from '../components/ui/Section';
import { Reveal } from '../components/anim/Reveal';
import { Arrow } from '../components/ui/Arrow';
import { accolades } from '../content/accolades';

export function Accolades() {
  return (
    <Section id="accolades" number="04" label="Recognition" ariaLabel="Recognition">
      <div className="grid grid-cols-12 items-start gap-6">
        <div className="col-span-12 self-start lg:sticky lg:top-24 lg:col-span-4">
          <h2 className="text-display text-[10vw] leading-[0.95] lg:text-[5vw] 2xl:text-[80px]">
            <em className="italic text-accent">Recognition.</em>
          </h2>
        </div>

        <ul className="col-span-12 lg:col-span-7 lg:col-start-6">
          {accolades.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.04} as="li">
              <a
                href={a.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group/arrow hairline block border-t py-6 text-ink/80 transition-colors duration-300 hover:text-ink"
              >
                <span className="flex items-baseline justify-between gap-6">
                  <span className="text-display text-2xl leading-tight lg:text-3xl">{a.title}</span>
                  <Arrow dir="ne" size={14} className="text-muted" />
                </span>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/70">{a.description}</p>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
