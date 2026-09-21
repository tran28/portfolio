import { Footer } from '../components/Footer';
import { Reveal } from '../components/anim/Reveal';
import { Arrow } from '../components/ui/Arrow';
import { Eyebrow } from '../components/ui/Eyebrow';
import { design } from '../content/design';

const PAD = 'px-6 md:px-12 xl:px-24';

export function DesignPage() {
  const { statement, availability, email, services, studies } = design;

  return (
    <main className="relative bg-paper">
      {/* Intro */}
      <section aria-label="Design introduction" className={`${PAD} pb-24 pt-36 md:pb-32 md:pt-44`}>
        <div className="mx-auto w-full max-w-[1600px]">
          <Reveal>
            <Eyebrow label="Design" />
          </Reveal>
          <div className="mt-10 grid grid-cols-12 items-end gap-6 md:mt-14">
            <Reveal className="col-span-12 lg:col-span-8">
              <h1 className="text-display text-[14vw] leading-[0.9] lg:text-[9vw] 2xl:text-[144px]">
                Selected <em className="italic text-accent">design.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.1} className="col-span-12 lg:col-span-4">
              <p className="text-display max-w-sm text-2xl leading-[1.15] text-ink lg:text-3xl">
                {statement}
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{availability}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section aria-label="Case studies" className={PAD}>
        <ol className="mx-auto w-full max-w-[1600px]">
          {studies.map((study, i) => (
            <CaseStudy key={study.slug} study={study} index={i} />
          ))}
        </ol>
      </section>

      {/* Services */}
      <section aria-label="Services" className={`${PAD} pb-32 pt-24 md:pb-40 md:pt-32`}>
        <div className="mx-auto w-full max-w-[1600px]">
          <Reveal>
            <Eyebrow label="What I do" />
          </Reveal>
          <ul className="mt-12 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-16">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05} as="li" className="col-span-12 md:col-span-4">
                <div className="hairline border-t pt-6">
                  <h2 className="text-display text-2xl leading-tight lg:text-3xl">{s.title}</h2>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/70">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to action */}
      <section aria-label="Start a project" className={`${PAD} pb-32 md:pb-40`}>
        <div className="mx-auto w-full max-w-[1600px]">
          <Reveal>
            <h2 className="text-display max-w-4xl text-[11vw] leading-[1] sm:text-[9vw] lg:text-[6vw] 2xl:text-[96px]">
              Have a project <em className="italic text-accent">in mind?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={`mailto:${email}`}
              className="group/arrow text-display mt-10 inline-flex items-baseline gap-3 text-2xl text-ink/80 transition-colors duration-300 hover:text-ink lg:text-3xl"
            >
              {email}
              <Arrow dir="ne" size={16} className="text-muted" />
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function CaseStudy({ study, index }) {
  const n = String(index + 1).padStart(2, '0');
  return (
    <Reveal as="li" amount={0.1} className="hairline border-t py-16 md:py-24">
      <a
        href={study.href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${study.title} (opens in new tab)`}
        className="group/arrow block"
      >
        <figure className="overflow-hidden rounded-sm bg-surface p-4 md:p-10 lg:p-16">
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img
              src={study.image}
              alt={`${study.title} interface`}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover/arrow:scale-[1.015]"
            />
          </div>
        </figure>

        <div className="mt-10 grid grid-cols-12 gap-6 md:mt-12">
          <div className="col-span-12 lg:col-span-5">
            <span className="text-mono block text-[11px] uppercase tracking-[0.18em] text-muted tabular-nums">
              {n}
            </span>
            <h2 className="text-display mt-3 inline-flex items-baseline gap-3 text-4xl leading-none lg:text-5xl">
              {study.title}
              <Arrow dir="ne" size={18} className="text-muted" />
            </h2>
          </div>

          <dl className="text-mono col-span-12 grid grid-cols-3 gap-4 text-[11px] uppercase tracking-[0.18em] lg:col-span-3">
            <Meta label="Client" value={study.client} />
            <Meta label="Year" value={study.year} />
            <Meta label="Role" value={study.role} />
          </dl>

          <div className="col-span-12 lg:col-span-4">
            <p className="text-base leading-relaxed text-ink/80">{study.summary}</p>
            <p className="text-mono mt-4 text-[11px] tracking-[0.06em] text-muted">
              {study.tags.join(' · ')}
            </p>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

function Meta({ label, value }) {
  return (
    <div>
      <dt className="text-muted">{label}</dt>
      <dd className="mt-2 normal-case tracking-normal text-ink">{value}</dd>
    </div>
  );
}
