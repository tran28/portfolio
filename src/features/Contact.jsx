import { Section } from '../components/ui/Section';
import { Reveal } from '../components/anim/Reveal';
import { SplitText } from '../components/anim/SplitText';
import { Arrow } from '../components/ui/Arrow';

const channels = [
  { label: 'Email', value: 'matthewtran.jobs@gmail.com', href: 'mailto:matthewtran.jobs@gmail.com' },
  { label: 'LinkedIn', value: '/in/matthewtran-eng', href: 'https://www.linkedin.com/in/matthewtran-eng/' },
  { label: 'GitHub', value: '/tran28', href: 'https://github.com/tran28' },
];

export function Contact() {
  return (
    <Section id="contact" number="05" label="Contact" ariaLabel="Get in touch">
      <div className="grid grid-cols-12 items-end gap-6">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-display pb-4 text-[12vw] leading-[1.02] sm:text-[10vw] lg:text-[7vw] 2xl:text-[112px]">
            <SplitText as="span" text="Let's build" />{' '}
            <SplitText
              as="span"
              text="something meaningful."
              className="italic text-accent"
              delay={0.06}
            />
          </h2>
        </div>
        <Reveal delay={0.4} className="col-span-12 lg:col-span-4">
          <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            For anyone shipping something they care about.
          </p>
        </Reveal>
      </div>

      <div className="mt-24 grid grid-cols-12 gap-6 md:mt-32">
        <ul className="col-span-12 lg:col-span-8 lg:col-start-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06} as="li">
              <a
                href={c.href}
                target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer noopener"
                data-cursor={c.label.toLowerCase()}
                className="group/arrow hairline flex items-baseline justify-between border-b py-6"
              >
                <span className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {String(i + 1).padStart(2, '0')} / {c.label}
                </span>
                <span className="text-display flex items-baseline gap-3 text-2xl lg:text-3xl">
                  {c.value}
                  <Arrow dir="ne" className="text-accent" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
