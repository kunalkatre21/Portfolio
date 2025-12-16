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
import { Cursor } from './components/Cursor';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/ThemeContext';
import { CursorProvider } from './components/CursorContext';

function AppContent() {
  const [view, setView] = useState<'home' | 'case-study'>('home');
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleProjectClick = (id: number) => {
    setActiveProjectId(id);
    setView('case-study');
  };

  const handleBack = () => {
    setView('home');
    setActiveProjectId(null);
  };

  return (
    <div className="min-h-screen selection:bg-purple-500/30 selection:text-purple-900 dark:selection:text-purple-200 font-sans transition-colors duration-300">
      <Cursor />
      <AnimatePresence>
        {view === 'home' ? (
           <React.Fragment key="home">
              <Navbar />
              <main>
                <Hero />
                <Experience />
                <Education />
                <Work onProjectClick={handleProjectClick} />
                <Awards />
                <Skills />
                <Contact />
              </main>
           </React.Fragment>
        ) : (
           <CaseStudy 
             key="case-study" 
             id={activeProjectId || 1} 
             onBack={handleBack}
             onChangeProject={handleProjectClick}
           />
        )}
      </AnimatePresence>
      
      {/* Scroll indicator decoration */}
      {view === 'home' && (
        <div className="fixed bottom-8 left-8 z-40 animate-spin-slow hidden md:block pointer-events-none text-neutral-400 dark:text-neutral-700">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20m-7.071-7.071l10 10m-10-10l10 10" />
            </svg>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CursorProvider>
        <AppContent />
      </CursorProvider>
    </ThemeProvider>
  );
}