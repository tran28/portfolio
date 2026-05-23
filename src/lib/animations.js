const EASE_OUT = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT } },
};

export const stagger = (delayChildren = 0, staggerChildren = 0.04) => ({
  hidden: {},
  shown: {
    transition: { delayChildren, staggerChildren },
  },
});

export const charReveal = {
  hidden: { y: '110%' },
  shown: { y: '0%', transition: { duration: 0.9, ease: EASE_OUT } },
};
