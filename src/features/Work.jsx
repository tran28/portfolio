import { useEffect, useState } from 'react';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/anim/Reveal';
import { Arrow } from '../components/ui/Arrow';
import { experiences } from '../content/experiences';

export function Work() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="work" number="02" label="Work" ariaLabel="Selected work">
      <div className="grid grid-cols-12 items-start gap-6">
        <div className="col-span-12 self-start lg:sticky lg:top-24 lg:col-span-4">
          <h2 className="text-display text-[10vw] leading-[0.95] lg:text-[5vw] 2xl:text-[80px]">
            Selected <em className="italic text-accent">work.</em>
          </h2>
        </div>

        <ol className="col-span-12 lg:col-span-7 lg:col-start-6">
          {experiences.map((exp, i) => (
            <ExperienceRow
              key={`${exp.company}-${exp.dateSpan}`}
              exp={exp}
              index={i}
              isOpen={openIndex === i}
              onOpen={() => setOpenIndex(i)}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </ol>
      </div>
    </Section>
  );
}

function useCoarsePointer() {
  const [coarse, setCoarse] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(pointer: coarse)');
    const update = () => setCoarse(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);
  return coarse;
}

function ExperienceRow({ exp, index, isOpen, onOpen, onToggle }) {
  const coarse = useCoarsePointer();

  // Touch: the row toggles open/closed and a Visit link handles navigation.
  // Mouse: the row is a link; hover/focus expands it.
  const rowProps = coarse
    ? { as: 'button', type: 'button', onClick: onToggle, 'aria-expanded': isOpen }
    : {
        as: 'a',
        href: exp.href,
        target: '_blank',
        rel: 'noreferrer noopener',
        onMouseEnter: onOpen,
        onFocus: onOpen,
        'aria-expanded': isOpen,
        'aria-label': `${exp.company} (opens in new tab)`,
      };
  const { as: RowTag, ...rest } = rowProps;
  const stack = [...exp.skills, ...exp.technologies].join(' · ');

  return (
    <Reveal as="li" delay={0.04 * index} amount={0.1}>
      <RowTag
        {...rest}
        className={`group/arrow hairline block w-full border-t text-left transition-colors duration-300 ${
          isOpen ? 'text-ink' : 'text-ink/60 hover:text-ink'
        }`}
      >
        <div className="flex items-baseline justify-between gap-6 py-6">
          <span className="text-display text-3xl leading-none lg:text-4xl">
            {exp.company}
            <span className="mt-2 block text-base italic text-muted lg:ml-3 lg:mt-0 lg:inline">
              {exp.titles[0]}
            </span>
          </span>
          <span className="text-mono inline-flex shrink-0 items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-muted">
            {exp.dateSpan}
            {coarse ? (
              <span
                aria-hidden="true"
                className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
              >
                +
              </span>
            ) : (
              <Arrow dir="ne" size={14} />
            )}
          </span>
        </div>

        <div
          className="grid transition-[grid-template-rows] duration-500 ease-out"
          style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-12 gap-6 pb-8">
              <p className="col-span-12 max-w-xl text-base leading-relaxed text-ink/80 lg:col-span-7">
                {exp.description}
              </p>
              <div className="col-span-12 flex flex-col gap-3 lg:col-span-4 lg:col-start-9">
                <p className="text-mono text-[11px] leading-relaxed tracking-[0.06em] text-muted">
                  {stack}
                </p>
                {coarse && (
                  <a
                    href={exp.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group/arrow link-underline mt-2 inline-flex items-center gap-2 self-start text-sm text-ink"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit {exp.company}
                    <Arrow dir="ne" size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </RowTag>
    </Reveal>
  );
}
