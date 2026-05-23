import { Section } from '../components/ui/Section';
import { Reveal } from '../components/anim/Reveal';
import { Arrow } from '../components/ui/Arrow';
import { RegMark } from '../components/ui/RegMark';
import { projects } from '../content/projects';
import { getIcon } from '../lib/icons';

export function Projects() {
  return (
    <Section id="projects" number="03" label="Projects" ariaLabel="Selected projects">
      <div className="grid grid-cols-12 items-start gap-6">
        <div className="col-span-12 self-start lg:sticky lg:top-24 lg:col-span-4">
          <h2 className="text-display text-[10vw] leading-[0.95] lg:text-[5vw] 2xl:text-[80px]">
            Things I&apos;ve <em className="italic text-accent">built.</em>
          </h2>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
            A handful of recent work.
          </p>
        </div>

        <ol className="col-span-12 flex flex-col gap-3 lg:col-span-7 lg:col-start-6">
          {projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} total={projects.length} />
          ))}
        </ol>
      </div>
    </Section>
  );
}

function ProjectRow({ project, index, total }) {
  return (
    <Reveal as="li" delay={index * 0.05} amount={0.15}>
      <article className="hairline border-t pt-3">
        <div className="grid grid-cols-12 items-center gap-4">
          {/* Image */}
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor="open"
            className="group/arrow col-span-3 flex aspect-[4/3] items-center justify-center"
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover/arrow:scale-[1.03] dark:mix-blend-normal"
            />
          </a>

          {/* Details */}
          <div className="col-span-9 flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted tabular-nums">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              {project.status && (
                <span className="text-mono inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-accent">
                  <RegMark size={6} pulse />
                  {project.status}
                </span>
              )}
            </div>

            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-display text-xl leading-tight lg:text-2xl">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cursor="open"
                  className="group/arrow link-underline"
                >
                  {project.title} <Arrow dir="ne" className="text-accent" />
                </a>
              </h3>

              {project.links && Object.keys(project.links).length > 0 && (
                <div className="flex shrink-0 items-center gap-1.5">
                  {Object.entries(project.links).map(([label, url]) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noreferrer noopener"
                      data-cursor={label.toLowerCase()}
                      aria-label={label}
                      className="text-muted transition-colors hover:text-accent"
                    >
                      {getIcon(label, { size: 14, stroke: 1.5 })}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <p className="line-clamp-1 text-xs leading-snug text-ink/70 lg:text-sm">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-x-2 gap-y-0.5">
              {project.technologies.map((t) => (
                <li
                  key={t}
                  className="text-mono inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.15em] text-ink/60"
                >
                  <span aria-hidden="true" className="text-accent">·</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
