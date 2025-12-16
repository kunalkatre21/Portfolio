import React from 'react';
import { motion } from 'framer-motion';
import { WorkItem, WorkProps } from '../types';
import { ArrowUpRight, Trophy, ExternalLink, ArrowRight } from 'lucide-react';
import { works } from '../data';

export const Work: React.FC<WorkProps> = ({ onProjectClick }) => {
  return (
    <section id="work" className="relative py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title for Mobile - Sticky */}
        <div className="lg:hidden sticky top-24 z-10 mb-8 mix-blend-difference text-white">
            <h2 className="text-6xl font-bold">Works</h2>
            <p className="text-sm mt-2 opacity-80">
                <span className="font-bold underline decoration-purple-500 underline-offset-4 decoration-2">Exclusively</span> designed by me.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            
            {/* Desktop Sticky Title Section */}
            <div className="hidden lg:flex lg:w-1/3 lg:h-screen lg:sticky lg:top-0 flex-col justify-center mb-12 lg:mb-0 pointer-events-none lg:pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-8xl font-bold text-neutral-900 dark:text-white mb-6">Works</h2>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-sm">
                        <span className="text-neutral-900 dark:text-white font-bold underline decoration-purple-500 underline-offset-4 decoration-2">Exclusively</span> designed by me.
                    </p>
                    
                    <div className="mt-20">
                        <div className="w-16 h-1 bg-neutral-200 dark:bg-neutral-800 mb-4" />
                        <p className="text-sm text-neutral-400">SCROLL TO EXPLORE</p>
                    </div>
                </motion.div>
            </div>

            {/* Cards Section */}
            <div className="lg:w-2/3 flex flex-col pb-24">
                {works.map((work, index) => (
                    <ProjectCard 
                        key={work.id} 
                        work={work} 
                        index={index} 
                        total={works.length}
                        onClick={() => onProjectClick(work.id)} 
                    />
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ work: WorkItem; index: number; total: number; onClick: () => void }> = ({ work, index, total, onClick }) => {
    return (
        <div 
            className="sticky transition-all duration-500"
            style={{ 
                // Adjusted top offset for mobile to create the stacked look
                top: `calc(15vh + ${index * 15}px)`,
                // Add margin bottom to allow scrolling through
                marginBottom: index === total - 1 ? 0 : '5vh'
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative bg-[#111] dark:bg-[#111] rounded-[2rem] overflow-hidden border border-neutral-800 shadow-2xl cursor-default"
            >
                <div className="flex flex-col md:flex-row h-[70vh] md:h-[550px]">
                    
                    {/* Content Side */}
                    <div className="p-8 md:p-10 flex flex-col justify-start md:justify-between md:w-1/2 relative z-10 order-1 md:order-1 h-1/2 md:h-full">
                        <div>
                            {/* Header */}
                            <div className="flex justify-between items-start mb-4 md:mb-6">
                                <h3 className="text-3xl md:text-4xl font-bold text-white">{work.title}</h3>
                            </div>
                            
                            {/* Buttons Row */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {work.award && (
                                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#FF6B6B] text-white text-xs font-bold uppercase tracking-wider">
                                        Awards <span className="text-[10px]">▼</span>
                                    </div>
                                )}
                                {work.liveUrl && (
                                    <a 
                                        href={work.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors"
                                    >
                                        Visit Live <ArrowUpRight size={12} />
                                    </a>
                                )}
                                <button 
                                    onClick={onClick}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white font-bold text-xs hover:bg-white/10 transition-colors"
                                >
                                    Learn More <ArrowUpRight size={12} />
                                </button>
                            </div>
                            
                            {/* Description */}
                            <p className="text-sm md:text-lg text-neutral-400 leading-relaxed mb-6 line-clamp-3 md:line-clamp-none">
                                {work.description}
                                <span className="text-white underline ml-1 cursor-pointer">Read More</span>
                            </p>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-[#0a0a0a] order-2 md:order-2">
                        <img 
                            src={work.image} 
                            alt={work.title} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                        />
                        {/* Gradient overlay for mobile text readability if image overlaps */}
                        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#111] to-transparent md:hidden" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};