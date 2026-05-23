import { useState } from 'react';
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
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
            A few contributions here and there.
          </p>
        </div>

        <ol className="col-span-12 lg:col-span-7 lg:col-start-6">
          {experiences.map((exp, i) => (
            <ExperienceRow
              key={`${exp.company}-${exp.dateSpan}`}
              exp={exp}
              index={i}
              isOpen={openIndex === i}
              onOpen={() => setOpenIndex(i)}
            />
          ))}
        </ol>
      </div>
    </Section>
  );
}

function isCoarsePointer() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: coarse)').matches;
}

function ExperienceRow({ exp, index, isOpen, onOpen }) {
  // On touch devices, a tap on a closed row opens it (no navigation).
  // A tap on an already-open row follows the link.
  const handleClick = (e) => {
    if (isCoarsePointer() && !isOpen) {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <Reveal as="li" delay={0.05 * index} amount={0.1}>
      <a
        href={exp.href}
        target="_blank"
        rel="noreferrer noopener"
        data-cursor="visit"
        onMouseEnter={onOpen}
        onFocus={onOpen}
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-label={`${exp.company} (opens in new tab)`}
        className="group/arrow hairline block border-t transition-colors"
      >
        <div className="flex items-baseline gap-4 py-6 text-left">
          <span className="text-mono w-8 shrink-0 text-[10px] text-muted tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="flex flex-1 items-baseline justify-between gap-4">
            <span className="text-display text-3xl leading-none lg:text-4xl">
              {exp.company}
              <span className="ml-3 text-sm italic text-muted">/ {exp.titles[0]}</span>
            </span>
            <span className="text-mono inline-flex shrink-0 items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-muted">
              {exp.dateSpan}
              <Arrow dir="ne" className="text-accent" />
            </span>
          </span>
        </div>

        <div
          className="grid transition-[grid-template-rows] duration-500 ease-out"
          style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-12 gap-6 pb-8 pl-12">
              <p className="col-span-12 max-w-xl text-base leading-relaxed text-ink/80 lg:col-span-7">
                {exp.description}
              </p>
              <div className="col-span-12 flex flex-col gap-3 lg:col-span-4 lg:col-start-9">
                <div className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Stack
                </div>
                <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {[...exp.skills, ...exp.technologies].map((t) => (
                    <li
                      key={t}
                      className="text-mono inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-ink/70"
                    >
                      <span aria-hidden="true" className="text-accent">·</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Reveal>
  );
}
