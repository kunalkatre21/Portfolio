import React, { useState, useEffect, useRef, Component, ErrorInfo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import ZoomPlugin from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { ChevronRight, ChevronLeft, Info, Eye, AlertCircle, ArrowRight, ChevronDown } from 'lucide-react';

// Error Boundary Component
export class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-xl text-center">
                    <AlertCircle className="mx-auto mb-4 text-red-500" size={48} />
                    <h3 className="text-lg font-bold text-red-900 dark:text-red-200 mb-2">Something went wrong</h3>
                    <p className="text-red-700 dark:text-red-300">Please refresh the page or try again later.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

// Reduced Motion Hook
export const useReducedMotion = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return prefersReducedMotion;
};

// --- WRAPPERS ---

export const ZoomableImage = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <div className="cursor-zoom-in group relative overflow-hidden rounded-xl h-full w-full" onClick={() => setOpen(true)}>
                {isLoading && (
                    <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded-xl" />
                )}
                <img
                    src={src}
                    alt={alt}
                    className={`${className} h-full w-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setIsLoading(false)}
                    onError={() => setIsLoading(false)}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 border border-white/10">
                    <Eye size={12} /> Deep Dive
                </div>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                plugins={[ZoomPlugin]}
                slides={[{ src }]}
                render={{
                    buttonPrev: () => null,
                    buttonNext: () => null,
                }}
                styles={{
                    container: { backgroundColor: "rgba(0, 0, 0, .9)" },
                }}
                animation={{ fade: 300, zoom: 500 }}
                zoom={{
                    maxZoomPixelRatio: 3,
                    zoomInMultiplier: 2,
                    doubleTapDelay: 300,
                    doubleClickDelay: 300,
                    doubleClickMaxStops: 2,
                }}
            />
        </>
    );
};

export const IterationCard = ({
    versions,
    title,
    iterations
}: {
    versions: { label: string, image: string, rationale: string }[],
    title: string,
    iterations?: { label: string, desc: string }[]
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const currentVersion = versions[activeIndex];

    return (
        <div className="bg-white dark:bg-[#080808] rounded-[1.5rem] md:rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 overflow-hidden mb-8 md:mb-12 shadow-sm hover:shadow-xl transition-shadow duration-500">
            <div className="grid md:grid-cols-2 gap-0">
                {/* Visual Section */}
                <div className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 relative">
                    <div className="flex items-center justify-between mb-6 md:mb-12 relative z-20">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <h4 className="font-bold text-neutral-900 dark:text-white uppercase tracking-[0.2em] text-[10px]">{title}</h4>
                        </div>

                        {versions.length > 1 && (
                            <div className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-xl text-[10px] font-bold shadow-md hover:shadow-lg transition-all border border-neutral-200 dark:border-neutral-700"
                                >
                                    {currentVersion.label}
                                    <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {dropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute right-0 mt-2 w-48 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl z-50 overflow-hidden"
                                        >
                                            {versions.map((v, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => {
                                                        setActiveIndex(idx);
                                                        setDropdownOpen(false);
                                                    }}
                                                    className={`w-full text-left px-5 py-3 text-[10px] font-bold transition-colors border-b last:border-0 border-neutral-100 dark:border-neutral-800 ${activeIndex === idx ? 'text-blue-500 bg-blue-50/50 dark:bg-blue-500/10' : 'text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'}`}
                                                >
                                                    {v.label}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>

                    <div className="relative mx-auto max-w-[260px] md:max-w-[300px] py-8">
                        {/* Stack Effect */}
                        {versions.length > 1 && (
                            <div className="absolute inset-0 -z-10 pointer-events-none">
                                {/* Layer 2 */}
                                <div className="absolute inset-x-8 top-12 bottom-0 bg-neutral-200 dark:bg-neutral-800 rounded-[1.5rem] md:rounded-[2rem] opacity-40 border border-neutral-300 dark:border-neutral-700 shadow-sm transition-transform duration-700"
                                    style={{ transform: 'rotate(4deg) translateY(12px) scale(0.96)' }} />
                                {/* Layer 1 */}
                                <div className="absolute inset-x-4 top-6 bottom-4 bg-neutral-100 dark:bg-neutral-900 rounded-[1.5rem] md:rounded-[2rem] opacity-70 border border-neutral-200 dark:border-neutral-800 shadow-md transition-transform duration-500"
                                    style={{ transform: 'rotate(-2deg) translateY(6px) scale(0.98)' }} />
                            </div>
                        )}

                        <div className="relative aspect-[375/812] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-1 ring-black/5 dark:ring-white/5 bg-white dark:bg-neutral-900 z-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="w-full h-full"
                                >
                                    <ZoomableImage src={currentVersion.image} alt={title} className="w-full h-full object-cover" />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-10 flex flex-col justify-center bg-white dark:bg-[#080808]">
                    <div className="mb-8 md:mb-10">
                        <div className="flex items-center gap-2 text-blue-500 mb-4 md:mb-6 group">
                            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 group-hover:scale-110 transition-transform">
                                <Info size={18} />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Design Rationale</span>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={activeIndex}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.3 }}
                                className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-lg font-medium"
                            >
                                {currentVersion.rationale}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {iterations && iterations.length > 0 && (
                        <div className="space-y-5 md:space-y-6 pt-6 md:pt-8 border-t border-neutral-100 dark:border-neutral-800">
                            {iterations.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx }}
                                    className="flex gap-4 md:gap-5 group/item"
                                >
                                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 text-[10px] font-bold text-neutral-500 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all duration-300">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h5 className="text-[10px] font-bold text-neutral-900 dark:text-white mb-1 uppercase tracking-widest">{item.label}</h5>
                                        <p className="text-[11px] md:text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const InteractiveScreenViewer = ({
    steps,
    color,
    activeStepIdx,
    setActiveStepIdx
}: {
    steps: {
        title: string,
        versions: { label: string, image: string, rationale: string }[]
    }[],
    color: string,
    activeStepIdx: number,
    setActiveStepIdx: (idx: number) => void
}) => {
    const activeStep = steps[activeStepIdx];

    const colorClasses = {
        blue: {
            glow: 'bg-blue-500/10',
            border: 'border-blue-500/30',
            bg: 'bg-blue-500/50',
            line: 'bg-blue-500/50',
            text: 'text-blue-500',
            bgActive: 'bg-blue-500'
        },
        green: {
            glow: 'bg-green-500/10',
            border: 'border-green-500/30',
            bg: 'bg-green-500/50',
            line: 'bg-green-500/50',
            text: 'text-green-500',
            bgActive: 'bg-green-500'
        },
        orange: {
            glow: 'bg-orange-500/10',
            border: 'border-orange-500/30',
            bg: 'bg-orange-500/50',
            line: 'bg-orange-500/50',
            text: 'text-orange-500',
            bgActive: 'bg-orange-500'
        }
    };

    const classes = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

    return (
        <div className="relative group">
            <div className={`absolute -inset-10 ${classes.glow} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

            <div className="relative z-10 flex flex-col items-center">
                <MobileShell className="shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStepIdx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            className="w-full h-full relative"
                        >
                            <img
                                src={activeStep.versions[0].image}
                                alt={activeStep.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 p-8 pointer-events-none z-20">
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 ${classes.border} flex items-center justify-center animate-pulse`}>
                                    <div className={`w-4 h-4 rounded-full ${classes.bg}`} />
                                </div>
                                <div className={`absolute top-1/3 right-4 w-12 h-px ${classes.line}`} />
                                <div className={`absolute top-1/3 right-16 text-[8px] font-black font-mono ${classes.text} uppercase tracking-widest bg-white dark:bg-neutral-900 px-2 py-0.5 rounded shadow-sm`}>
                                    STEP {activeStepIdx + 1}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </MobileShell>
                <div className="mt-8 text-center flex flex-col items-center gap-2">
                    <div className="flex gap-1">
                        {steps.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveStepIdx(i)}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeStepIdx === i ? `${classes.bgActive} w-4` : 'bg-neutral-300 dark:bg-neutral-800 hover:bg-neutral-400 dark:hover:bg-neutral-600'}`}
                            />
                        ))}
                    </div>
                    <p className={`text-[10px] font-black uppercase tracking-[0.3em] ${classes.text}`}>{activeStep.title}</p>
                </div>
            </div>
        </div>
    );
};

export const FlowBrowser = ({
    flows
}: {
    flows: {
        id: string,
        label: string,
        description: string,
        steps: {
            title: string,
            versions: { label: string, image: string, rationale: string }[],
            iterations?: { label: string, desc: string }[]
        }[]
    }[]
}) => {
    const [activeFlowId, setActiveFlowId] = useState(flows[0].id);
    const [activeStepIdx, setActiveStepIdx] = useState(0);
    const activeFlow = flows.find(f => f.id === activeFlowId) || flows[0];

    const getColor = (id: string) => {
        switch (id) {
            case 'booking': return 'blue';
            case 'download': return 'green';
            case 'passport': return 'orange';
            default: return 'blue';
        }
    };

    // Reset active step when flow changes
    useEffect(() => {
        setActiveStepIdx(0);
    }, [activeFlowId]);

    return (
        <div className="w-full">
            {/* Nav */}
            <div className="flex md:justify-center mb-8 md:mb-16 overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                <div className="inline-flex p-1 bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shrink-0">
                    {flows.map(flow => (
                        <button
                            key={flow.id}
                            onClick={() => setActiveFlowId(flow.id)}
                            className={`px-4 md:px-6 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${activeFlowId === flow.id
                                ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                                : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
                                }`}
                        >
                            {flow.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-12 max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">{activeFlow.label}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">{activeFlow.description}</p>
            </div>

            {/* Interactive Viewer */}
            <div className="hidden md:grid md:grid-cols-12 gap-12 lg:gap-24 items-start mb-16">
                <div className="md:col-span-6 lg:col-span-5">
                    <div className="space-y-4">
                        {activeFlow.steps.map((step, idx) => {
                            const color = getColor(activeFlowId);
                            const colorClasses = {
                                blue: {
                                    border: 'border-blue-500',
                                    bg: 'bg-blue-500/[0.03]',
                                    hoverBorder: 'hover:border-blue-500/50',
                                    text: 'text-blue-500',
                                    hoverText: 'group-hover:text-blue-500/80',
                                    bgBar: 'bg-blue-500'
                                },
                                green: {
                                    border: 'border-green-500',
                                    bg: 'bg-green-500/[0.03]',
                                    hoverBorder: 'hover:border-green-500/50',
                                    text: 'text-green-500',
                                    hoverText: 'group-hover:text-green-500/80',
                                    bgBar: 'bg-green-500'
                                },
                                orange: {
                                    border: 'border-orange-500',
                                    bg: 'bg-orange-500/[0.03]',
                                    hoverBorder: 'hover:border-orange-500/50',
                                    text: 'text-orange-500',
                                    hoverText: 'group-hover:text-orange-500/80',
                                    bgBar: 'bg-orange-500'
                                }
                            };
                            const classes = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

                            return (
                                <button
                                    key={idx}
                                    onMouseEnter={() => setActiveStepIdx(idx)}
                                    onClick={() => setActiveStepIdx(idx)}
                                    className={`w-full text-left group relative pl-6 border-l transition-all duration-500 py-3 ${activeStepIdx === idx ? `${classes.border} ${classes.bg}` : `border-neutral-200 dark:border-neutral-800 ${classes.hoverBorder}`}`}
                                >
                                    <div className={`absolute left-0 top-0 bottom-0 ${classes.bgBar} transition-all duration-500 ${activeStepIdx === idx ? 'w-1' : 'w-0 group-hover:w-0.5'}`} />
                                    <h5 className={`font-bold uppercase tracking-widest text-[10px] mb-1 transition-colors ${activeStepIdx === idx ? classes.text : 'text-neutral-900 dark:text-white ' + classes.hoverText}`}>{idx + 1}. {step.title}</h5>
                                    <p className={`text-xs leading-relaxed transition-colors ${activeStepIdx === idx ? 'text-neutral-700 dark:text-neutral-300' : 'text-neutral-500'}`}>{step.versions[0].rationale}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="md:col-span-6 lg:col-span-7 flex justify-center">
                    <InteractiveScreenViewer steps={activeFlow.steps} color={getColor(activeFlowId)} activeStepIdx={activeStepIdx} setActiveStepIdx={setActiveStepIdx} />
                </div>
            </div>

            {/* Mobile View: Horizontal Scroll */}
            <div className="md:hidden">
                <div className="flex overflow-x-auto no-scrollbar gap-8 pb-12 -mx-4 px-4 snap-x snap-mandatory">
                    {activeFlow.steps.map((step, idx) => (
                        <div key={idx} className="min-w-[280px] snap-center">
                            <MobileShell className="mb-8 shadow-xl ring-1 ring-neutral-200 dark:ring-neutral-800">
                                <img
                                    src={step.versions[0].image}
                                    alt={step.title}
                                    className="w-full h-full object-cover"
                                />
                            </MobileShell>
                            <div className="px-2">
                                <h5 className="font-bold uppercase tracking-widest text-[10px] text-blue-500 mb-2">{idx + 1}. {step.title}</h5>
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">{step.versions[0].rationale}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

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

export const CaseMeta = ({ role, team, timeline, overview, stack }: { role: string, team: string, timeline: string, overview: string, stack?: string[] }) => (
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
            {stack && (
                <div>
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-widest mb-2">Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {stack.map((item, i) => (
                            <span key={i} className="text-[10px] font-bold px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
        <div className="md:col-span-8">
            <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-widest mb-4">Overview</h4>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-300">
                {overview}
            </p>
        </div>
    </div>
);

export const SectionTitle = ({ title, subtitle, number, id }: { title: string, subtitle?: string, number?: string, id?: string }) => (
    <div className="mb-10 mt-24 scroll-mt-24" id={id}>
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

export const FunnelItem = ({ label, value, prevValue, color, highlight = false }: { label: string, value: string, prevValue?: string, color: string, highlight?: boolean }) => (
    <div className="flex items-center gap-4">
        <div className="w-32 text-sm font-medium text-neutral-600 dark:text-neutral-400 shrink-0">{label}</div>
        <div className="flex-1 h-8 bg-neutral-200 dark:bg-neutral-800 rounded-r-lg relative overflow-visible">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: value }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`h-full rounded-r-lg flex items-center px-3 text-xs font-bold text-white relative z-10 ${color} ${highlight ? 'shadow-[0_0_15px_rgba(59,130,246,0.5)]' : ''}`}
            >
                {value}
            </motion.div>
            {prevValue && (
                <div className="absolute top-0 left-0 h-full flex items-center border-r-2 border-red-500/50 z-20" style={{ width: prevValue }}>
                    <span className="absolute -top-6 right-0 text-[10px] text-red-500 font-mono">Old: {prevValue}</span>
                </div>
            )}
        </div>
    </div>
);

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
                                {step.image ? <ZoomableImage src={step.image} className="w-full h-full object-cover" alt={step.title} /> : step.content}
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
export const JourneyPath = ({ steps }: {
    steps: {
        title: string,
        desc: string,
        icon: React.ReactNode,
        status: 'Anxiety' | 'Action' | 'Trust'
    }[]
}) => (
    <div className="relative py-12">
        <div className="absolute left-[39px] top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />
        <div className="space-y-12">
            {steps.map((step, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex gap-8 relative"
                >
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 z-10 border shadow-sm transition-all duration-500 ${step.status === 'Anxiety' ? 'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30 text-red-500' :
                        step.status === 'Action' ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30 text-blue-500' :
                            'bg-green-50 dark:bg-green-900/10 border-green-100 dark:border-green-900/30 text-green-500'
                        }`}>
                        {step.icon}
                    </div>
                    <div className="pt-2">
                        <div className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-2 ${step.status === 'Anxiety' ? 'text-red-500/60' :
                            step.status === 'Action' ? 'text-blue-500/60' :
                                'text-green-500/60'
                            }`}>
                            {step.status}
                        </div>
                        <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{step.title}</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
                            {step.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

export const TableOfContents = ({ items }: { items: { id: string, label: string, number: string }[] }) => {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-10% 0% -80% 0%' }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    return (
        <div className="fixed right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-end gap-6 z-50">
            {items.map((item) => (
                <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="group flex items-center gap-4 transition-all"
                >
                    <div className="flex flex-col items-end">
                        <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${activeId === item.id ? 'text-purple-600 dark:text-purple-400' : 'text-neutral-400 group-hover:text-neutral-600'
                            }`}>
                            {item.number}
                        </span>
                        <span className={`text-xs font-bold transition-all ${activeId === item.id
                            ? 'text-neutral-900 dark:text-white translate-x-0 opacity-100'
                            : 'text-neutral-400 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                            }`}>
                            {item.label}
                        </span>
                    </div>
                    <div className={`w-1 h-8 rounded-full transition-all ${activeId === item.id
                        ? 'bg-purple-600 dark:bg-purple-400 scale-y-100'
                        : 'bg-neutral-200 dark:bg-neutral-800 scale-y-50 group-hover:scale-y-75'
                        }`} />
                </a>
            ))}
        </div>
    );
};
