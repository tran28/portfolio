import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext(null);
const STORAGE_KEY = 'mt-theme';

function readStored() {
  if (typeof window === 'undefined') return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : null;
}

function readSystem() {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  // null = follow system, 'light'/'dark' = user pick
  const [userPref, setUserPref] = useState(readStored);
  const [systemTheme, setSystemTheme] = useState(readSystem);

  // Watch system theme; only matters while user hasn't picked.
  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => setSystemTheme(mql.matches ? 'dark' : 'light');
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  const theme = userPref ?? systemTheme;

  // Apply theme class and persist user pick.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    if (userPref === null) {
      window.localStorage.removeItem(STORAGE_KEY);
    } else {
      window.localStorage.setItem(STORAGE_KEY, userPref);
    }
  }, [userPref]);

  const toggle = useCallback(() => {
    setUserPref((curr) => {
      const current = curr ?? readSystem();
      return current === 'dark' ? 'light' : 'dark';
    });
  }, []);

  const value = useMemo(() => ({ theme, toggle }), [theme, toggle]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
