import { about } from "../content/about";

function About() {
    return (
        <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            {/* About Header */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur-xl md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary-bright lg:sr-only">About</h2>
            </div>

            {/* About Content */}
            <div>
                {about.map((paragraph, index, arr) => (
                    <p key={index} className={arr.length - 1 !== index ? "mb-4" : ""}>
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
    );
}

export default About;