import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { WorkItem, WorkProps } from '../types';
import { works } from '../data';
import { useCursor } from './CursorContext';

const ImageCarousel: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.5 });

    useEffect(() => {
        if (!isInView || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 1500); // Rotate every 2.5 seconds

        return () => clearInterval(interval);
    }, [isInView, images.length]);

    return (
        <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-[#0a0a0a]">
            <AnimatePresence initial={false}>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${title} - slide ${currentIndex + 1}`}
                    initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-6 bg-purple-500' : 'w-2 bg-white/30'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export const Work: React.FC<WorkProps> = ({ onProjectClick }) => {
    return (
        <section id="work" className="relative py-20 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

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
                                Selected case studies defining <span className="text-neutral-900 dark:text-white font-bold underline decoration-purple-500 underline-offset-4 decoration-2">impact</span> at scale.
                            </p>

                            <div className="mt-20">
                                <div className="w-16 h-1 bg-neutral-200 dark:bg-neutral-800 mb-4" />
                                <p className="text-sm text-neutral-400">SCROLL TO EXPLORE</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Cards Section */}
                    <div className="lg:w-2/3 flex flex-col pb-24">
                        {/* Title for Mobile - Sticky (Moved here to allow cards to scroll over it) */}
                        <div className="lg:hidden sticky top-24 z-0 mb-8 mix-blend-difference text-white">
                            <h2 className="text-6xl font-bold">Works</h2>
                            <p className="text-sm mt-2 opacity-80">
                                Selected case studies defining <span className="font-bold underline decoration-purple-500 underline-offset-4 decoration-2">impact</span> at scale.
                            </p>
                        </div>

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
    const { setCursorType } = useCursor();

    return (
        <div
            className="sticky transition-all duration-500 [--base-top:220px] lg:[--base-top:15vh]"
            style={{
                // Adjusted top offset for mobile to create the stacked look and clear the header
                top: `calc(var(--base-top) + ${index * 15}px)`,
                // Add margin bottom to allow scrolling through
                marginBottom: index === total - 1 ? 0 : '5vh'
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onClick={() => {
                    setCursorType('default');
                    onClick();
                }}
                onMouseEnter={() => setCursorType('project')}
                onMouseLeave={() => setCursorType('default')}
                className="group relative bg-[#111] dark:bg-[#111] rounded-[2rem] overflow-hidden border border-neutral-800 shadow-2xl cursor-none"
            >
                <div className="flex flex-col md:flex-row h-[70vh] md:h-[550px]">

                    {/* Content Side */}
                    <div className="p-8 md:p-10 flex flex-col justify-start md:justify-between md:w-1/2 relative z-10 order-1 md:order-1 h-1/2 md:h-full">
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-4 md:mb-6">
                                <h3 className="text-3xl md:text-4xl font-bold text-white">{work.title}</h3>
                            </div>

                            {/* Categories */}
                            <div className="mb-6">
                                <span className="text-sm font-mono text-purple-400 uppercase tracking-widest">{work.category}</span>
                            </div>

                            {/* Description */}
                            <p className="text-sm md:text-lg text-neutral-400 leading-relaxed line-clamp-3">
                                {work.description}...
                            </p>

                            <div className="mt-auto hidden md:block">
                                {/* Spacer to push content up if needed, or keep clean */}
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-[#0a0a0a] order-2 md:order-2">
                        {work.gallery && work.gallery.length > 0 ? (
                            <ImageCarousel images={work.gallery} title={work.title} />
                        ) : (
                            <img
                                src={work.image}
                                alt={work.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                        )}
                        {/* Gradient overlay for mobile text readability if image overlaps */}
                        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#111] to-transparent md:hidden" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};