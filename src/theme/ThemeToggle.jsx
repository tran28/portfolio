import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

/**
 * Editorial D / N theme toggle. Text-only, no chip. A serif italic glyph
 * crossfades + rotates between Day and Night.
 */
export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative inline-flex h-6 w-5 items-center justify-center text-ink transition-colors hover:text-muted"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'n' : 'd'}
          initial={{ y: 10, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -10, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="text-display absolute inset-0 flex items-center justify-center text-lg italic leading-none"
          aria-hidden="true"
        >
          {isDark ? 'N' : 'D'}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
