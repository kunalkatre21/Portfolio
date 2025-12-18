import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- WRAPPERS ---

export const BrowserWindow = ({ children, url = "eka.care", className = "" }: { children?: React.ReactNode, url?: string, className?: string }) => (
    <div className={`rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] shadow-2xl my-12 w-full ${className}`}>
        <div className="bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 p-3 flex items-center gap-4">
            <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
            <div className="flex-1 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-md px-3 py-1 text-xs text-neutral-400 text-center font-mono truncate shadow-sm">
                {url}
            </div>
        </div>
        <div className="relative bg-white dark:bg-black">
            {children}
        </div>
    </div>
);

export const MobileShell = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
    <div className={`relative mx-auto border-neutral-800 dark:border-neutral-800 bg-neutral-800 border-[10px] rounded-[2.5rem] shadow-xl overflow-hidden max-w-[280px] md:max-w-[300px] aspect-[375/812] ${className}`}>
        {/* Notch/Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[20px] bg-neutral-800 rounded-b-xl z-20" />
        <div className="bg-white dark:bg-black w-full h-full relative z-10 overflow-hidden">
            {children}
        </div>
    </div>
);

// --- TYPOGRAPHY & TEXT ---

export const CaseMeta = ({ role, team, timeline, overview }: { role: string, team: string, timeline: string, overview: string }) => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-b border-neutral-800/20 dark:border-neutral-800 py-10 my-16">
        <div className="md:col-span-4 flex flex-col gap-8">
            <div>
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-widest mb-2">My Role</h4>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium">{role}</p>
            </div>
            <div>
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-widest mb-2">Team</h4>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium">{team}</p>
            </div>
            <div>
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-widest mb-2">Duration</h4>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium">{timeline}</p>
            </div>
        </div>
        <div className="md:col-span-8">
            <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-widest mb-4">Overview</h4>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-300">
                {overview}
            </p>
        </div>
    </div>
);

export const SectionTitle = ({ title, subtitle, number }: { title: string, subtitle?: string, number?: string }) => (
    <div className="mb-10 mt-24">
        {number && (
            <div className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-3">
                {number}
            </div>
        )}
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
            {title}
        </h2>
        {subtitle && (
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                {subtitle}
            </p>
        )}
    </div>
);

export const QuoteBlock = ({ quote, author }: { quote: string, author?: string }) => (
    <div className="my-20">
        <blockquote className="text-3xl md:text-4xl font-medium text-neutral-900 dark:text-white leading-tight text-center max-w-5xl mx-auto">
            "{quote}"
        </blockquote>
        {author && <div className="mt-8 text-sm font-bold text-neutral-500 uppercase tracking-widest text-center">— {author}</div>}
    </div>
);

export const TextHighlight = ({ children }: { children?: React.ReactNode }) => (
    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-200 px-1 rounded mx-0.5 font-medium">
        {children}
    </span>
);

export const Paragraph = ({ children }: { children: React.ReactNode }) => (
    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed font-normal">
        {children}
    </p>
);

export const List = ({ items }: { items: string[] }) => (
    <ul className="list-disc list-outside ml-6 space-y-4 text-lg text-neutral-600 dark:text-neutral-400 mb-8">
        {items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </ul>
);

// --- CARDS & VISUALS ---

export const InsightCard = ({ icon, title, quote, color = "purple" }: { icon: React.ReactNode, title: string, quote: string, color?: string }) => (
    <div className="bg-white dark:bg-neutral-900/30 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 h-full flex flex-col w-full">
        <div className={`mb-6 w-12 h-12 rounded-full flex items-center justify-center bg-${color}-100 dark:bg-${color}-900/20 text-${color}-600 dark:text-${color}-400`}>
            {icon}
        </div>
        <h4 className="font-bold text-neutral-900 dark:text-white mb-3 text-xl">{title}</h4>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1">
            {quote}
        </p>
    </div>
);

export const GoalCard = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
    <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0a0a0a] shadow-sm dark:shadow-none h-full relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 w-full">
        <span className="text-8xl font-bold text-neutral-100 dark:text-[#111] absolute -top-4 -right-4 z-0 transition-colors group-hover:text-neutral-200 dark:group-hover:text-[#161616]">{number}</span>
        <div className="relative z-10">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

export const StatCard = ({ value, label, subLabel }: { value: string, label: string, subLabel?: string }) => (
    <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center shadow-sm w-full">
        <div className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">{value}</div>
        <div className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">{label}</div>
        {subLabel && <div className="text-xs text-neutral-500">{subLabel}</div>}
    </div>
);

export const DesignHighlight = ({ title, desc, icon }: { title: string, desc: string, icon?: React.ReactNode }) => (
    <div className="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors w-full">
        {icon && <div className="mt-1 text-purple-500">{icon}</div>}
        <div>
            <h5 className="text-neutral-900 dark:text-white font-bold text-lg mb-1">{title}</h5>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{desc}</p>
        </div>
    </div>
);

export const CodeBlock = ({ code, language = "json" }: { code: string, language?: string }) => (
    <div className="rounded-xl overflow-hidden bg-[#1e1e1e] border border-neutral-800 shadow-2xl my-4 text-xs md:text-sm font-mono leading-relaxed text-blue-100 w-full max-w-full min-w-0">
        <div className="flex gap-2 p-3 bg-[#252526] border-b border-neutral-800">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="p-4 overflow-x-auto w-full">
            <pre className="whitespace-pre-wrap break-all md:break-normal"><code>{code}</code></pre>
        </div>
    </div>
);

export interface Persona {
    name: string;
    role: string;
    avatar?: string;
    initials: string;
    bio: string;
    goals: string[];
    painPoints: string[];
    quote: string;
}

export const PersonaSwitcher = ({ personas }: { personas: Persona[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activePersona = personas[activeIndex];

    return (
        <div className="my-16 flex flex-col gap-12">
            {/* Persona Tabs - Improved Visuals with Rail */}
            <div className="flex justify-center">
                <div className="flex gap-4 p-2 bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-md rounded-[2rem] border border-neutral-200/50 dark:border-neutral-800/50">
                    {personas.map((persona, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className="group relative flex flex-col items-center gap-1 transition-all duration-500"
                        >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-[11px] font-bold border-2 transition-all duration-500 relative overflow-hidden ${activeIndex === idx
                                ? 'bg-purple-600 border-purple-400 text-white shadow-lg'
                                : 'bg-white dark:bg-neutral-800 border-transparent text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200'
                                }`}>
                                {persona.initials}
                            </div>
                            <span className={`text-[8px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${activeIndex === idx
                                ? 'text-purple-600 dark:text-purple-400 opacity-100 translate-y-0'
                                : 'text-neutral-400 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'
                                }`}>
                                {persona.name.split(' ')[0]}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Persona Content - Refined Layout */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.99, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.99, y: -10 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="bg-white dark:bg-[#080808] border border-neutral-200 dark:border-neutral-800/80 p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-xl dark:shadow-none relative overflow-hidden"
                    >
                        {/* Background Aura Accent */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

                        <div className="grid md:grid-cols-12 gap-12 lg:gap-24 relative z-10">
                            {/* Profile Sidebar - Left Side (4 Cols) */}
                            <div className="md:col-span-4 flex flex-col gap-10">
                                <div>
                                    <p className="text-purple-600 dark:text-purple-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">The Persona</p>
                                    <h3 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">{activePersona.name}</h3>
                                    <p className="text-neutral-500 dark:text-neutral-500 font-medium text-sm italic">{activePersona.role}</p>
                                </div>

                                <div className="relative pl-6 border-l-2 border-purple-500/30">
                                    <p className="text-lg lg:text-xl font-medium text-neutral-800 dark:text-neutral-200 leading-snug">
                                        "{activePersona.quote}"
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-neutral-900 dark:text-white font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-purple-500" />
                                        Context
                                    </p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                                        {activePersona.bio}
                                    </p>
                                </div>
                            </div>

                            {/* Details Grid - Right Side (8 Cols) */}
                            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
                                {/* Goals Section */}
                                <div className="bg-neutral-50/50 dark:bg-neutral-900/40 p-8 rounded-[2rem] border border-neutral-200/50 dark:border-neutral-800/50 flex flex-col">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                        </div>
                                        <h4 className="text-neutral-900 dark:text-white font-bold uppercase text-[10px] tracking-[0.2em]">Core Objectives</h4>
                                    </div>
                                    <ul className="space-y-5 flex-1">
                                        {activePersona.goals.map((goal, i) => (
                                            <li key={i} className="flex gap-4 text-sm text-neutral-700 dark:text-neutral-400 leading-relaxed items-start group/item">
                                                <span className="text-green-500/40 font-mono text-xs mt-0.5 group-hover/item:text-green-500 transition-colors">0{i + 1}</span>
                                                <span className="font-medium">{goal}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Pain Points Section */}
                                <div className="bg-neutral-50/50 dark:bg-neutral-900/40 p-8 rounded-[2rem] border border-neutral-200/50 dark:border-neutral-800/50 flex flex-col">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                        </div>
                                        <h4 className="text-neutral-900 dark:text-white font-bold uppercase text-[10px] tracking-[0.2em]">Frustrations</h4>
                                    </div>
                                    <ul className="space-y-5 flex-1">
                                        {activePersona.painPoints.map((point, i) => (
                                            <li key={i} className="flex gap-4 text-sm text-neutral-700 dark:text-neutral-400 leading-relaxed items-start group/item">
                                                <span className="text-red-500/40 font-bold text-xs mt-0.5 group-hover/item:text-red-500 transition-colors">✕</span>
                                                <span className="font-medium">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export const Divider = () => <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent w-full my-20" />;

export const ScreenFlow = ({ steps }: {
    steps: {
        label: string,
        title: string,
        desc: string,
        image?: string,
        content?: React.ReactNode
    }[]
}) => (
    <div className="relative pt-12 pb-24 px-4 overflow-visible">
        {/* Connection Line (Desktop) */}
        <div className="absolute top-[35%] left-0 w-full h-[2px] hidden md:block z-0 bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
            <motion.div
                className="h-full w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8 relative z-10">
            {steps.map((step, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                    className="flex flex-col items-center"
                >
                    <div className="relative mb-12 group w-full max-w-[300px]">
                        <motion.div
                            whileHover={{ y: -15, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative flex justify-center"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-4 bg-purple-500/10 dark:bg-purple-500/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <MobileShell className="shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group-hover:ring-purple-500/30 transition-all duration-500">
                                {step.image ? <img src={step.image} className="w-full h-full object-cover" /> : step.content}
                            </MobileShell>

                            {/* Info Badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 1 + idx * 0.2, type: "spring" }}
                                className="absolute -top-3 left-0 md:-left-3 w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-xl z-30 font-bold text-xs"
                            >
                                {idx + 1}
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="text-left w-full max-w-[280px] md:max-w-none md:px-4">
                        <div className="inline-flex items-center px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-4">
                            {step.label}
                        </div>
                        <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">{step.title}</h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                            {step.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

export const HeroCarousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 8000); // 8 seconds for ambient rotation
        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="absolute top-0 left-0 w-full h-[600px] z-0 overflow-hidden pointer-events-none">
            <AnimatePresence initial={false}>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt="Background"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.25 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "linear" }}
                    className="absolute inset-0 w-full h-full object-cover blur-[2px] dark:opacity-20"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#050505] via-transparent to-transparent" />
        </div>
    );
};
