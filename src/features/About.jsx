import { Section } from '../components/ui/Section';
import { Reveal } from '../components/anim/Reveal';
import { QuoteReveal } from '../components/anim/QuoteReveal';
import { about } from '../content/about';

const QUOTE_SEGMENTS = [
  { text: 'Some people say,' },
  { text: 'give the customers what they want.', italic: true, className: 'text-accent' },
  { text: "But that's not my approach. Our job is to figure out what they're going to want before they do." },
];

const META = [
  { label: 'Based in', value: 'Toronto, ON' },
  { label: 'Focus', value: 'Product engineering' },
  { label: 'Stack', value: 'Full stack' },
  { label: 'Currently', value: 'Postilize' },
];

export function About() {
  const { paragraphs } = about;
  const [first, ...rest] = paragraphs;

  return (
    <Section id="about" number="01" label="About" ariaLabel="About me">
      {/* Pulled quote */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-11">
          <QuoteReveal
            segments={QUOTE_SEGMENTS}
            attribution="Steve Jobs"
            quoteClassName="text-ink/80 text-3xl leading-[1.15] sm:text-4xl md:text-5xl lg:text-[3.6vw] 2xl:text-[58px]"
          />
        </div>
      </div>

      {/* Article body + sidebar */}
      <div className="mt-24 grid grid-cols-12 gap-6 md:mt-32">
        {/* Sidebar metadata */}
        <aside className="col-span-12 lg:col-span-3">
          <Reveal>
            <dl className="hairline space-y-5 border-t pt-6">
              {META.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <dt className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {item.label}
                  </dt>
                  <dd className="text-sm leading-snug text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </aside>

        {/* Body article */}
        <article className="col-span-12 lg:col-span-7 lg:col-start-5">
          <Reveal className="dropcap">
            <p className="text-lg leading-[1.65] text-ink/85 lg:text-xl">{first}</p>
          </Reveal>

          {rest.map((p, i) => (
            <Reveal key={i} delay={0.05 * (i + 1)}>
              <p className="mt-6 text-lg leading-[1.65] text-ink/85 lg:text-xl">{p}</p>
            </Reveal>
          ))}

          {/* Signature flourish */}
          <Reveal delay={0.2}>
            <div className="mt-12 flex items-center gap-4">
              <span className="hairline h-px w-16 bg-rule" aria-hidden="true" />
              <span className="text-display text-2xl italic text-accent">m.t.</span>
            </div>
          </Reveal>
        </article>
      </div>
    </Section>
  );
}
