import { experiences } from "../content/experiences";
import Experience from "./Experience";

function Experiences() {
    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            {/* Experience Header */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur-xl md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary-bright lg:sr-only">Experience</h2>
            </div>

            {/* Experience Content */}
            <div>
                <ol className="group/list">
                    {experiences.map((experience, index) => (
                        <Experience
                            key={index}
                            dateSpan={experience.dateSpan}
                            titles={experience.titles}
                            company={experience.company}
                            href={experience.href}
                            description={experience.description}
                            skills={experience.skills}
                            technologies={experience.technologies} />
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default Experiences;