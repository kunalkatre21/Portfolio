import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Work } from './components/Work';
import { Awards } from './components/Awards';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { CaseStudy } from './components/CaseStudy';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [view, setView] = useState<'home' | 'case-study'>('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-purple-500/30 selection:text-purple-200 font-sans">
      <AnimatePresence mode="wait">
        {view === 'home' ? (
           <React.Fragment key="home">
              <Navbar />
              <main>
                <Hero />
                <Experience />
                <Work onProjectClick={() => setView('case-study')} />
                <Awards />
                <Education />
                <Skills />
                <Contact />
              </main>
           </React.Fragment>
        ) : (
           <CaseStudy key="case-study" onBack={() => setView('home')} />
        )}
      </AnimatePresence>
      
      {/* Custom Cursor Effect (Optional, simulated with fixed element) */}
      {view === 'home' && (
        <div className="fixed bottom-8 left-8 z-40 animate-spin-slow hidden md:block pointer-events-none">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-700">
                <path d="M12 2v20M2 12h20m-7.071-7.071l10 10m-10-10l10 10" />
            </svg>
        </div>
      )}
    </div>
  );
}

export default App;