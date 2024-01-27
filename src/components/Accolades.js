import { accolades } from "../content/accolades";
import Accolade from "./Accolade";

function Accolades() {
    return (
        <section id="accolades" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Relevant accolades">
            {/* Accolades Header */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary-bright lg:sr-only">Accolades</h2>
            </div>

            {/* Accolades Content */}
            <div>
                <ol className="group/list">
                    {accolades.map((accolade, index) => (
                        <Accolade
                            key={index}
                            image={accolade.image}
                            title={accolade.title}
                            href={accolade.href}
                            description={accolade.description} />
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default Accolades;