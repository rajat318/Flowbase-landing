import useTheme from './hooks/useTheme';
import ScrollProgress from './components/common/ScrollProgress';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import TrustedBy from './components/sections/TrustedBy';
import Features from './components/sections/Features';
import Stats from './components/sections/Stats';
import Timeline from './components/sections/Timeline';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import CTA from './components/sections/CTA';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-surface-dark overflow-x-hidden">
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <Stats />
        <Timeline />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
