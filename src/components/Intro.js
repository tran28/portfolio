import { intro } from "../content/intro";

function Intro() {
    return (
        <div>
            {/* Intro Content */}
            <h1 className="text-4xl font-bold tracking-tight text-primary-bright sm:text-5xl">
                <a href="/">{intro.name}</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-primary-bright sm:text-xl">{intro.title}</h2>
            <p className="mt-4 max-w-xs leading-normal">{intro.tagline}</p>
        </div>
    );
}

export default Intro;