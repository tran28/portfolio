import { motion } from 'framer-motion';
import { nav } from "../content/nav";
import useCurrentSection from "../hooks/useCurrentSection";
import smoothScroll from '../utils/smoothScroll';
import { colors } from '../styles/colors';

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
                                    className="mr-4 h-px"
                                    initial={{ width: '28px'}}
                                    animate={{
                                        width: currentSection === targetId ? '56px' : '28px',
                                        backgroundColor: currentSection === targetId ? colors.primary.bright : colors.primary.dim,
                                    }}
                                    whileHover={{ width: '56px', backgroundColor: colors.primary.bright }}
                                    transition={{ duration: 0.3 }}
                                ></motion.span>
                                <span
                                    className={`text-xs font-bold uppercase tracking-widest ml-2 ${currentSection === targetId ? 'text-primary-bright' : 'text-primary-dim'
                                        } group-hover:text-primary-bright group-focus-visible:text-primary-bright`}
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
