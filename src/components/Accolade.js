import { motion } from 'framer-motion';
import { FadeInWhenVisible } from './Animations';

function Accolade({ image, title, href, description }) {
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
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-primary-hover-bg/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>

                    {/* Image on Left Side */}
                    <img alt={title} loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-primary-bright/10 transition group-hover:border-primary-bright/30 sm:col-span-2 sm:translate-y-1" src={image} />

                    {/* Description on Right Side */}
                    <div className="z-10 sm:col-span-6">
                        {/* Title */}
                        <h3 className="font-medium leading-snug text-primary-bright">
                            <a className="inline-flex items-baseline font-medium leading-tight text-primary-bright hover:text-accent-1 focus-visible:text-accent-1 group/link text-base" href={href} target="_blank" rel="noreferrer noopener" aria-label={`${title} (opens in a new tab)`}>
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>{title}</span>
                            </a>
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-sm leading-normal">{description}</p>
                    </div>
                </div>
            </motion.li>
        </FadeInWhenVisible>
    );
}

export default Accolade;