import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const SPRING = { damping: 28, stiffness: 380, mass: 0.4 };
const RING = 32;
const RING_HOVER = 72;

export function MagneticCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      const el = e.target.closest?.('[data-cursor]');
      if (el) setHover(el.dataset.cursor || 'link');
    };
    const out = (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest?.('[data-cursor]')) {
        setHover(null);
      }
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerover', over);
    window.addEventListener('pointerout', out);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
      window.removeEventListener('pointerout', out);
    };
  }, [x, y]);

  const ringSize = hover ? RING_HOVER : RING;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] rounded-full border border-white mix-blend-difference"
      style={{
        x: sx,
        y: sy,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{ width: ringSize, height: ringSize }}
      transition={{ duration: 0.25 }}
    >
      {hover && hover !== 'link' && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-mono pointer-events-none absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-widest text-white"
        >
          {hover}
        </motion.span>
      )}
    </motion.div>
  );
}
