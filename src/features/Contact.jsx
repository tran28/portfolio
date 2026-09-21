import { Section } from '../components/ui/Section';
import { Reveal } from '../components/anim/Reveal';
import { Arrow } from '../components/ui/Arrow';

const channels = [
  {
    label: 'Email',
    value: 'matthewtran.jobs@gmail.com',
    href: 'mailto:matthewtran.jobs@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: '/in/matthewtran-eng',
    href: 'https://www.linkedin.com/in/matthewtran-eng/',
  },
  { label: 'GitHub', value: '/tran28', href: 'https://github.com/tran28' },
];

export function Contact() {
  return (
    <Section id="contact" number="05" label="Contact" ariaLabel="Get in touch">
      <Reveal>
        <h2 className="text-display max-w-4xl text-[12vw] leading-[1.02] sm:text-[10vw] lg:text-[7vw] 2xl:text-[112px]">
          <em className="italic text-accent">Get in touch.</em>
        </h2>
      </Reveal>

      <div className="mt-20 grid grid-cols-12 gap-6 md:mt-28">
        <ul className="col-span-12 lg:col-span-7 lg:col-start-6">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.04} as="li">
              <a
                href={c.href}
                target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer noopener"
                className="group/arrow hairline flex items-baseline justify-between gap-6 border-b py-6 text-ink/80 transition-colors duration-300 hover:text-ink"
              >
                <span className="text-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {c.label}
                </span>
                <span className="text-display inline-flex items-baseline gap-3 text-2xl lg:text-3xl">
                  {c.value}
                  <Arrow dir="ne" size={14} className="text-muted" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
