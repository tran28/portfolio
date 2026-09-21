import { Section } from '../components/ui/Section';
import { Reveal } from '../components/anim/Reveal';
import { about } from '../content/about';

const META = [
  { label: 'Based in', value: 'Toronto, ON' },
  { label: 'Focus', value: 'Product engineering' },
  { label: 'Currently', value: 'Postilize' },
];

export function About() {
  const { statement, paragraphs } = about;

  return (
    <Section id="about" number="01" label="About" ariaLabel="About me">
      <div className="grid grid-cols-12 gap-6">
        <Reveal className="col-span-12 lg:col-span-10">
          <p className="text-display text-3xl leading-[1.15] text-ink sm:text-4xl md:text-5xl lg:text-[3.4vw] 2xl:text-[56px]">
            {statement.lead} <span className="italic text-accent">{statement.emphasis}</span>
          </p>
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-12 gap-6 md:mt-28">
        <aside className="col-span-12 lg:col-span-3">
          <Reveal>
            <dl className="hairline space-y-5 border-t pt-6">
              {META.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <dt className="text-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {item.label}
                  </dt>
                  <dd className="text-sm leading-snug text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </aside>

        <article className="col-span-12 lg:col-span-7 lg:col-start-5">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <p className={`text-lg leading-[1.65] text-ink/85 lg:text-xl ${i > 0 ? 'mt-6' : ''}`}>
                {p}
              </p>
            </Reveal>
          ))}
        </article>
      </div>
    </Section>
  );
}
