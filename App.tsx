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
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './components/ThemeContext';
import { CursorProvider } from './components/CursorContext';
import { ArrowDown } from 'lucide-react';
import { initializeAnalytics } from './utils/analytics';
import { AnalyticsDebug } from './utils/analytics-debug';

function AppContent() {
  const [view, setView] = useState<'home' | 'case-study'>('home');
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Initialize analytics tracking
  useEffect(() => {
    initializeAnalytics();
  }, []);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  // Hide scroll indicator on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* Scroll indicator decoration - Circular Text Badge */}
      <AnimatePresence>
        {view === 'home' && showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-12 left-8 z-40 hidden md:flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-28 h-28">
              {/* Text Ring - Static */}
              <div className="absolute inset-0">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600" fill="currentColor">
                    <textPath href="#circlePath" startOffset="0%">
                      Scroll to explore • Scroll to explore •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Arrow - Bouncing via Framer Motion */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowDown size={20} className="text-neutral-900 dark:text-white" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Analytics Debug Component - Remove in production */}
      <AnalyticsDebug />
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