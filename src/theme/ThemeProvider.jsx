import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';
import { flushSync } from 'react-dom';

const ThemeContext = createContext(null);
const STORAGE_KEY = 'mt-theme';

// Light is the default regardless of system preference; a toggle pick persists.
function readStored() {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'dark' ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readStored);

  // Layout effect so the class flips inside flushSync, before the view transition's snapshot.
  useLayoutEffect(() => {
    const root = document.documentElement;
    // Hover transition-colors would animate inside the new snapshot and break the uniform fade.
    root.classList.add('theme-switching');
    root.classList.toggle('dark', theme === 'dark');
    // Reading a computed style flushes the new colors while transitions are still off.
    const paper = getComputedStyle(document.body).backgroundColor;
    root.classList.remove('theme-switching');
    window.localStorage.setItem(STORAGE_KEY, theme);

    // Safari 26 ignores theme-color, but Chrome on Android still tints from it.
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', paper);
  }, [theme]);

  // The view transition crossfades a snapshot of the whole page, so every layer fades together.
  const toggle = useCallback(() => {
    const flip = () => flushSync(() => setTheme((curr) => (curr === 'dark' ? 'light' : 'dark')));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (document.startViewTransition && !reduceMotion) document.startViewTransition(flip);
    else flip();
  }, []);

  const value = useMemo(() => ({ theme, toggle }), [theme, toggle]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
