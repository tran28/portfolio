import { links } from "../content/links";

function Links() {
    return (
        <ul className="ml-1 mt-8 flex items-center">
            {links.map((link, index) => (
                <li key={index} className="mr-5 text-xs">
                    <a class="block hover:text-slate-200" href={link.href} target="_blank" rel="noreferrer noopener" aria-label={`${link.label} (opens in a new tab)`} title={link.label}>
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Links;