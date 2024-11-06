import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div className="bg-gray-900 text-white">
            <Navigation />
            <main>
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </main>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;