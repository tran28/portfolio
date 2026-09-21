import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Route changes land at the top; in-page hash jumps are handled by the Hud.
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
