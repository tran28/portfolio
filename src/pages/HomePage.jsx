import { Footer } from '../components/Footer';
import { Hero } from '../features/Hero';
import { About } from '../features/About';
import { Work } from '../features/Work';
import { Projects } from '../features/Projects';
import { Accolades } from '../features/Accolades';
import { Contact } from '../features/Contact';

export function HomePage() {
  return (
    <>
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
    </>
  );
}
