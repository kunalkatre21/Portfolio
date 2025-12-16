import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronDown, Menu } from 'lucide-react';
import { CowinCaseStudy } from './case-studies/Cowin';
import { DesignSystemCaseStudy } from './case-studies/DesignSystem';
import { WebInfraCaseStudy } from './case-studies/WebInfra';
import { HeartRateCaseStudy } from './case-studies/HeartRate';
import { works } from '../data';

interface CaseStudyProps {
  id: number;
  onBack: () => void;
  onChangeProject: (id: number) => void;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({ id, onBack, onChangeProject }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top when case study opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const currentIndex = works.findIndex(w => w.id === id);
  const nextProject = works[(currentIndex + 1) % works.length];

  const renderContent = () => {
    switch (id) {
        case 1: return <CowinCaseStudy />;
        case 2: return <DesignSystemCaseStudy />;
        case 3: return <WebInfraCaseStudy />;
        case 4: return <HeartRateCaseStudy />;
        default: return <div className="text-center py-20 text-neutral-500">Case study not found.</div>;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="bg-white dark:bg-[#050505] min-h-screen pt-20 pb-0 text-neutral-900 dark:text-white z-50 relative transition-colors duration-300"
    >
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#050505]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
             <button 
                onClick={onBack}
                className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors group"
            >
                <div className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
                    <ArrowLeft size={20} />
                </div>
                <span className="font-medium">Back</span>
            </button>

            {/* Project Switcher */}
            <div className="relative">
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-sm font-medium"
                >
                    All Projects <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-[#111] rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
                        >
                            <div className="py-2">
                                {works.map((work) => (
                                    <button
                                        key={work.id}
                                        onClick={() => {
                                            onChangeProject(work.id);
                                            setIsMenuOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center justify-between group ${id === work.id ? 'bg-neutral-50 dark:bg-neutral-800/50' : ''}`}
                                    >
                                        <span className={`text-sm font-medium ${id === work.id ? 'text-purple-600 dark:text-purple-400' : 'text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white'}`}>
                                            {work.title}
                                        </span>
                                        {id === work.id && <div className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12">
        {renderContent()}
      </div>

      {/* Next Project Footer */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 mt-20">
            <div className="max-w-7xl mx-auto px-4 py-20">
                <p className="text-neutral-500 mb-8 text-center uppercase tracking-widest text-sm font-semibold">Next Case Study</p>
                <div 
                    onClick={() => onChangeProject(nextProject.id)}
                    className="cursor-pointer group relative rounded-[2.5rem] overflow-hidden h-[400px] w-full max-w-5xl mx-auto"
                >
                    <img 
                        src={nextProject.image} 
                        alt={nextProject.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                        <motion.h3 
                            layoutId={`title-${nextProject.id}`}
                            className="text-5xl md:text-7xl font-bold text-white mb-6"
                        >
                            {nextProject.title}
                        </motion.h3>
                        <div className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                            View Project <ArrowRight size={20} />
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </motion.div>
  );
};