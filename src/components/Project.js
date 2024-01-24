import { motion } from 'framer-motion';
import { FadeInWhenVisible } from './Animations';
import { getIcon } from '../utils/getIcon';

function Project({ image, title, href, links, description, technologies }) {
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
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>

                    {/* Image on Left Side */}
                    <img alt={title} loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1" src={image} />

                    {/* Description on Right Side */}
                    <div className="z-10 sm:col-span-6">
                        {/* Title(s), Company */}
                        <h3 className="font-medium leading-snug text-slate-200">
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href={href} target="_blank" rel="noreferrer noopener" aria-label={`${title} (opens in a new tab)`}>
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>{title}</span>
                            </a>
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-sm leading-normal">{description}</p>

                        {/* Links */}
                        {Object.keys(links).length > 0 &&
                            <ul className="mt-2 flex flex-wrap" aria-label="Relevant links">
                                {Object.entries(links).map(([label, url], index) => (
                                    <li key={index} className="mr-2 mt-2">
                                        <a className="relative inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300" href={url} target="_blank" rel="noreferrer noopener" aria-label={`${label} (opens in a new tab)`}>
                                            {getIcon(label, { size: 32, stroke: 1 })}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        }

                        {/* Technologies */}
                        {technologies.length > 0 &&
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                {technologies.map((technology, index) => (
                                    <li key={index} className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
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

export default Project;
