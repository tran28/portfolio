import { Section } from '../components/ui/Section';
import { Reveal } from '../components/anim/Reveal';
import { SplitText } from '../components/anim/SplitText';
import { QuoteReveal } from '../components/anim/QuoteReveal';
import { about } from '../content/about';

const QUOTE_TEXT =
  'Some people say, give the customers what they want. But that\'s not my approach. Our job is to figure out what they\'re going to want before they do.';

const META = [
  { label: 'Based in', value: 'Toronto, ON' },
  { label: 'Focus', value: 'Product engineering' },
  { label: 'Discipline', value: 'Full stack' },
  { label: 'Currently', value: 'Postilize' },
];

export function About() {
  const { paragraphs } = about;
  const [first, ...rest] = paragraphs;

  return (
    <Section id="about" number="01" label="About" ariaLabel="About me">
      {/* Pulled quote */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-10">
          <QuoteReveal
            text={QUOTE_TEXT}
            attribution="Steve Jobs"
            accentClassName="text-accent text-4xl leading-[1.1] sm:text-5xl md:text-6xl lg:text-[5vw] 2xl:text-[80px]"
          />
        </div>
      </div>

      {/* Article body + sidebar */}
      <div className="mt-20 grid grid-cols-12 gap-6 md:mt-28">
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

      {/* Section closer */}
      <Reveal delay={0.1} className="mt-20 grid grid-cols-12 gap-6 md:mt-28">
        <div className="col-span-12 lg:col-span-9 lg:col-start-4">
          <SplitText
            as="p"
            text="Building through the experiences I learn."
            className="text-display text-[5vw] italic leading-[1.05] lg:text-[3vw] 2xl:text-[48px]"
            charStagger={0.012}
          />
        </div>
      </Reveal>
    </Section>
  );
}
