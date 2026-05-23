import { Hud } from './components/Hud';
import { Footer } from './components/Footer';
import { MagneticCursor } from './components/MagneticCursor';
import { ThemeProvider } from './theme/ThemeProvider';
import { Hero } from './features/Hero';
import { About } from './features/About';
import { Work } from './features/Work';
import { Projects } from './features/Projects';
import { Accolades } from './features/Accolades';
import { Contact } from './features/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative bg-paper text-ink transition-colors duration-500">
        <Hud />
        <Hero />
        {/* Spacer matches the fixed hero's height. */}
        <div aria-hidden="true" className="hero-vh hidden lg:block" />
        {/* Content layer slides above the stationary hero on scroll. */}
        <main className="relative z-10 bg-paper">
          <About />
          <Work />
          <Projects />
          <Accolades />
          <Contact />
          <Footer />
        </main>
        <MagneticCursor />
      </div>
    </ThemeProvider>
  );
}
