import { Section } from '../components/ui/Section';
import { Reveal } from '../components/anim/Reveal';
import { Arrow } from '../components/ui/Arrow';
import { projects } from '../content/projects';

export function Projects() {
  return (
    <Section id="projects" number="03" label="Projects" ariaLabel="Selected projects">
      <div className="grid grid-cols-12 items-start gap-6">
        <div className="col-span-12 self-start lg:sticky lg:top-24 lg:col-span-4">
          <h2 className="text-display text-[10vw] leading-[0.95] lg:text-[5vw] 2xl:text-[80px]">
            Things I&apos;ve <em className="italic text-accent">built.</em>
          </h2>
        </div>

        <ol className="col-span-12 lg:col-span-7 lg:col-start-6">
          {projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
        </ol>
      </div>
    </Section>
  );
}

function ProjectRow({ project, index }) {
  const links = Object.entries(project.links ?? {});

  return (
    <Reveal as="li" delay={index * 0.04} amount={0.15}>
      <article className="hairline grid grid-cols-12 gap-x-6 gap-y-2 border-t py-6">
        <div className="col-span-12 lg:col-span-7">
          <h3 className="text-display text-2xl leading-tight lg:text-3xl">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group/arrow inline-flex items-baseline gap-2 text-ink/80 transition-colors duration-300 hover:text-ink"
            >
              {project.title}
              <Arrow dir="ne" size={14} className="text-muted" />
            </a>
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/70">{project.description}</p>
        </div>

        <div className="col-span-12 flex flex-col gap-2 lg:col-span-4 lg:col-start-9 lg:items-end lg:text-right">
          {project.status && (
            <span className="text-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {project.status}
            </span>
          )}
          {links.length > 0 && (
            <ul className="text-mono flex flex-wrap gap-x-4 text-[11px] uppercase tracking-[0.18em] lg:justify-end">
              {links.map(([label, url]) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-underline text-muted transition-colors duration-300 hover:text-ink"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </Reveal>
  );
}
