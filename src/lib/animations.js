const EASE_OUT = [0.16, 1, 0.3, 1];

// A single, quiet reveal used everywhere. Short travel and no stagger so the
// page settles quickly instead of performing.
export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};
