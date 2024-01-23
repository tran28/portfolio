import { nav } from "../content/nav";

function Nav() {
    return (
        <div className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                {nav.map((item, index) => (
                    <li key={index}>
                        <a class="group flex items-center py-3 active" href={item.href}>
                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                {item.label}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Nav;