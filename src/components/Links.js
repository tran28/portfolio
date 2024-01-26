import { motion } from 'framer-motion';
import { links } from "../content/links";
import { getIcon } from "../utils/getIcon";
import { colors } from '../styles/colors';

function Links() {
    return (
        <ul className="ml-1 mt-8 flex items-center">
            {links.map((link, index) => (
                <li key={index} className="mr-5 text-xs">
                    <motion.a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${link.label} (opens in a new tab)`}
                        title={link.label}
                        whileHover={{ y: -2, scale: 1.1, color: colors.primary.bright}}
                        whileTap={{ scale: 0.9 }}
                        className="block mx-1"
                    >
                        {getIcon(link.label, { size: 36, stroke: 1.5 })}
                    </motion.a>
                </li>
            ))}
        </ul>
    );
}

export default Links;
