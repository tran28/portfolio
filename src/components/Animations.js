import { motion } from "framer-motion";

export const FadeInWhenVisible = ({ children }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
                delay: 0.3,
                duration: 1,
                type: "spring",
                stiffness: 100
            }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
            }}
        >
            {children}
        </motion.div>
    );
};