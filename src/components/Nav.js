// components/Nav.js
import { motion } from 'framer-motion';
import { nav } from "../content/nav";
import useCurrentSection from "../hooks/useCurrentSection";
import smoothScroll from '../utils/smoothScroll';

function Nav() {
    const currentSection = useCurrentSection(nav.map(item => item.href.substring(1)));

    const handleNavClick = (event, targetId) => {
        event.preventDefault();
        smoothScroll(targetId);
    };

    return (
        <div className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                {nav.map((item, index) => {
                    const targetId = item.href.substring(1);
                    return (
                        <li key={index}>
                            <a
                                className="group flex items-center py-3"
                                href={item.href}
                                onClick={(e) => handleNavClick(e, targetId)}
                            >
                                <motion.span
                                    className="mr-4 h-px bg-slate-600"
                                    initial={{ width: '28px' }}
                                    animate={{
                                        width: currentSection === targetId ? '56px' : '28px',
                                        backgroundColor: currentSection === targetId ? '#e2e8f0' : '#475569',
                                    }}
                                    whileHover={{ width: '56px' }}
                                    transition={{ duration: 0.3 }}
                                ></motion.span>
                                <span
                                    className={`text-xs font-bold uppercase tracking-widest ml-2 ${currentSection === targetId ? 'text-slate-200' : 'text-slate-500'
                                        } group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                                >
                                    {item.label}
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Nav;
