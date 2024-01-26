import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function StickyCursor() {
    const cursorSize = 384;

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }

    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    useEffect(() => {
        // Function to check if the screen width is larger than the mobile breakpoint
        const isLargeScreen = () => window.innerWidth > 640;

        // Modified event handler that only sets mouse position on large screens
        const manageMouseMove = (e) => {
            if (isLargeScreen()) {
                const { clientX, clientY } = e;
                mouse.x.set(clientX - cursorSize / 2);
                mouse.y.set(clientY - cursorSize / 2);
            }
        }

        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        }
    }, [mouse.x, mouse.y])

    return (
        <motion.div
            className="fixed w-96 h-96 bg-cursor filter blur-3xl opacity-10 rounded-full pointer-events-none"
            style={{ left: smoothMouse.x, top: smoothMouse.y }}
        >
        </motion.div>
    );
}
