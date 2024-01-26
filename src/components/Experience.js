import { motion } from 'framer-motion';
import { FadeInWhenVisible } from './Animations';

function Experience({ dateSpan, titles, company, href, description, skills, technologies }) {
    // Hover animation for the list
    const hoverAnimation = {
        scale: 1.02, // Slightly scale up on hover
        transition: { duration: 0.3 } // Smooth transition
    };

    return (
        <FadeInWhenVisible>
            <motion.li
                className="mb-12"
                whileHover={hoverAnimation}
            >
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    {/* Date Span on Left Side */}
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-primary-hover-bg/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary-dim sm:col-span-2" aria-label={dateSpan}>{dateSpan}</header>

                    {/* Description on Right Side */}
                    <div className="z-10 sm:col-span-6">
                        {/* Title(s), Company */}
                        <h3 className="font-medium leading-snug text-primary-bright">
                            {titles.map((title, index) => (
                                index === 0
                                    // Current title
                                    ? <a key={index} className="inline-flex items-baseline font-medium leading-tight text-primary-bright hover:text-accent-1 focus-visible:text-accent-1 group/link text-base" href={href} target="_blank" rel="noreferrer noopener" aria-label={`${title} at ${company} (opens in a new tab)`}>
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>{`${title} at ${company}`}</span>
                                    </a>
                                    // Other title(s), if applicable
                                    : <div key={index} className="text-primary-dim" aria-hidden="true">{title}</div>
                            ))}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-sm leading-normal">{description}</p>

                        {/* Skills */}
                        {skills.length > 0 &&
                            <ul className="mt-2 flex flex-wrap" aria-label="Relevant skills">
                                {skills.map((skill, index) => (
                                    <li key={index} className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-skills-bg/10 px-3 py-1 text-xs font-medium leading-5 text-skills-text ">
                                            {skill}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        }

                        {/* Technologies */}
                        {technologies.length > 0 &&
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                {technologies.map((technology, index) => (
                                    <li key={index} className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-technologies-bg/10 px-3 py-1 text-xs font-medium leading-5 text-technologies-text ">
                                            {technology}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        }

                    </div>
                </div>
            </motion.li>
        </FadeInWhenVisible>
    );
}

export default Experience;
