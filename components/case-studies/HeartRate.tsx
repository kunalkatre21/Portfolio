import React, { useState } from 'react';
import { Activity, Heart, ArrowUp, Users, Play, AlertTriangle, Smartphone, Zap, TrendingUp, CheckCircle, Clock, Shield, Search, Eye, Cpu, Accessibility, Repeat, Target } from 'lucide-react';
import { InsightCard, GoalCard, StatCard, DesignHighlight, SectionTitle, QuoteBlock, BrowserWindow, MobileShell, Divider, TextHighlight, List, CaseMeta, ScreenFlow, PersonaSwitcher, HeroCarousel, FunnelItem, TableOfContents, ZoomableImage } from './Shared';
import { ASSETS } from '../../data';
import { motion, AnimatePresence } from 'framer-motion';

export const HeartRateCaseStudy: React.FC = () => {
    const [activeAuditIdx, setActiveAuditIdx] = useState(0);
    const [activeOnboardingIdx, setActiveOnboardingIdx] = useState(0);
    const [activeMeasurementIdx, setActiveMeasurementIdx] = useState(0);
    const [activeResultIdx, setActiveResultIdx] = useState(0);

    const heuristicItems = [
        {
            title: "Ambiguous Onboarding",
            desc: "Static images didn't show finger placement. Users failed before scanning started.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/v1-step-1.png"
        },
        {
            title: "Weak Feedback",
            desc: "UI showed countdown only. No confirmation pulse was detected.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/v1-measurement-screen.png"
        },
        {
            title: "Destructive Error State",
            desc: "Error screens blamed users. No advice on how to fix the problem.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/v1-error-screen.png"
        },
        {
            title: "'So What?' Result",
            desc: "Result screen was a dead end. No context. Tool felt like a one-time gimmick.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/v1-result-screen.png"
        }
    ];

    const onboardingItems = [
        {
            title: "Video-Guided Introduction",
            desc: "Built 15-second video showing finger placement. Added '5M+ Readings' trust signal. First-try success up 21%.",
            media: "https://ik.imagekit.io/vtitfjbr6/hr/instruction%20video-1.mp4",
            isVideo: true
        },
        {
            title: "Pre-Measure Setup",
            desc: "Combined video with camera view. Users saw exactly where to place fingers. Drop-off cut by 40%.",
            media: "https://ik.imagekit.io/vtitfjbr6/hr/pre-measure-final.webp",
            isVideo: false
        },
        {
            title: "Active Error Prevention",
            desc: "Added real-time 'Motion Detected!' alerts. Stopped 30-second failures before they happened.",
            media: "https://ik.imagekit.io/vtitfjbr6/hr/error-handling-active.webp",
            isVideo: false
        },
        {
            title: "Passive Error Handling",
            desc: "Turned failures into learning. Error screens showed exactly how to fix the problem.",
            media: "https://ik.imagekit.io/vtitfjbr6/hr/error-handling-passive.webp",
            isVideo: false
        }
    ];

    const measurementItems = [
        {
            title: "Live Visual Feedback",
            desc: "Made the invisible visible. Added progress circle, live BPM, and PPG graph. Users saw what was happening.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/measuring-final.png",
            isAudio: false
        },
        {
            title: "Simulated 'Lub-Dub' Haptic Pulse",
            desc: "Solved the 'phone flip' problem. Used vibration motor to create heartbeat pulse users could feel.",
            media: "https://ik.imagekit.io/vtitfjbr6/hr/60bpm.mp3",
            isAudio: true
        },
        {
            title: "Haptic Pulse Approach",
            desc: "Users felt measurement without looking. Eliminated the need to check the screen constantly.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/measuring-final.png",
            isAudio: false
        },
        {
            title: "Final Sensory Solution",
            desc: "Combined haptic pulse with visual feedback. Multi-sensory approach eliminated 'phone flip' completely.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/measuring-final.png",
            isAudio: false
        }
    ];

    const resultItems = [
        {
            title: "User State Input",
            desc: "Added physical state input (Resting, Walking). Data Science team used this to calibrate results. Generic number became personalized insight.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/user-state-input.png"
        },
        {
            title: "Heart Rate Status",
            desc: "Showed interpreted status like 'Normal for resting'. Changed 'BPM' to 'beats/min' to avoid confusion with BP monitors.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/heart-rate-state.png"
        },
        {
            title: "Reading Confidence",
            desc: "Added confidence score showing signal quality. Turned user doubt ('Is this right?') into education.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/reading-confidence.png"
        },
        {
            title: "Actionable Trends",
            desc: "Created insight cards summarizing trends. 'Your average heart rate increased by 5 bpm.' Data became story.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/actionable-trends.png"
        },
        {
            title: "Proactive Triggers",
            desc: "Built Reminders, Widgets, and Siri Shortcuts. Moved interaction outside the app. Created low-friction pathways back.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/pro-active-triggers.png"
        },
        {
            title: "Ecosystem Integration",
            desc: "Made result screen a gateway to ecosystem. Added links to Heart Health Assessments, Lab Packages, and ABHA health ID.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/ecosystem-growth.png"
        }
    ];

    return (
        <div className="animate-fade-in pb-20 relative bg-white dark:bg-[#050505]">
            <TableOfContents
                items={[
                    { id: 'setup', label: 'The Setup', number: '01' },
                    { id: 'research', label: 'Research', number: '02' },
                    { id: 'analysis', label: 'Analysis', number: '03' },
                    { id: 'execution', label: 'Execution', number: '04' },
                    { id: 'impact', label: 'Impact', number: '05' }
                ]}
            />
            {/* Full Width Background Hero */}
            <HeroCarousel
                images={[
                    ASSETS.projects.heartRate.cover,
                    "https://ik.imagekit.io/vtitfjbr6/hr/homepage-card-images/form4.png",
                    "https://ik.imagekit.io/vtitfjbr6/hr/homepage-card-images/form3.png",
                    "https://ik.imagekit.io/vtitfjbr6/hr/homepage-card-images/form2.png",
                    "https://ik.imagekit.io/vtitfjbr6/hr/homepage-card-images/form1.png"
                ]}
            />

            {/* Content */}
            <div className="relative z-10 pt-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Health Tech</span>
                        <span className="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white px-2 py-0.5 rounded text-xs font-bold">2023</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold mb-12 leading-[0.9] text-neutral-900 dark:text-white tracking-tight">
                        Heart Rate: <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Fixing the Funnel.</span>
                    </h1>
                </div>

                <CaseMeta
                    role="Lead Product Designer"
                    team="1 PM, 2 Engineers"
                    timeline="4 Months"
                    overview="I fixed a feature with 38% drop-off. It became the primary driver for daily active users."
                />

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
                    <StatCard value="+21%" label="Conversion" subLabel="Lift" />
                    <StatCard value="2x" label="Retention" subLabel="Week 4" />
                    <StatCard value="4 Mo" label="Timeline" subLabel="Oct-Jan" />
                    <StatCard value="+46%" label="Trend" />
                </div>

                {/* Section 1: The Setup */}
                <section className="mb-24">
                    <SectionTitle number="01" title="The Problem" id="setup" />
                    <div className="max-w-4xl">
                        <p className="text-2xl md:text-3xl text-neutral-800 dark:text-neutral-200 mb-12 leading-tight font-medium">
                            The Heart Rate Monitor was a core growth bet, but it had a <span className="text-red-500 font-bold">~38% drop-off rate</span>. Even successful users weren't sticking around.
                        </p>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                            A promising feature was failing to become a habit. Users didn't trust the data enough to integrate it into their daily health routines.
                        </p>
                    </div>
                </section>

                <Divider />

                {/* Section 2: Discovery & Research */}
                <section className="mb-32">
                    <SectionTitle number="02" title="Discovery & Research" id="research" />

                    {/* Field Research Refined */}
                    <div className="bg-neutral-50 dark:bg-neutral-900/10 rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 p-8 md:p-16 mb-24 overflow-hidden relative">
                        {/* Subtle background glow */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/[0.03] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-16 lg:mb-24">
                                <div className="md:w-5/12">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                                        01. Field Research
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-8 tracking-tight leading-tight">
                                        Hearing the <span className="text-blue-500">Unfiltered</span> Voice
                                    </h3>
                                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                                        Data showed what happened, not why. I spent a week testing with 10 users—from athletes to seniors new to health apps.
                                    </p>
                                </div>
                                <div className="md:w-7/12">
                                    <div className="relative group">
                                        <div className="absolute -inset-4 bg-blue-500/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <img
                                            src="https://ik.imagekit.io/vtitfjbr6/hr/research.png"
                                            alt="On-ground user research sessions"
                                            className="w-full rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 shadow-2xl relative z-10"
                                        />
                                        <div className="absolute -bottom-6 -right-6 md:right-12 bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 max-w-[200px] z-20">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2">Sample Size</p>
                                            <p className="text-2xl font-bold text-neutral-900 dark:text-white">10 Users</p>
                                            <p className="text-[10px] text-neutral-500 mt-1">Old & Young / Tech-Savvy & New</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-neutral-400 uppercase tracking-widest mt-12 text-center md:text-left">Fig. 1 - Capturing the messy reality of use-cases.</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                                <div className="relative pl-8 border-l-2 border-orange-500/30">
                                    <h4 className="text-sm font-black uppercase tracking-widest text-orange-500 mb-4">Instruction Mismatch</h4>
                                    <p className="text-neutral-700 dark:text-neutral-300 italic text-xl leading-snug font-medium mb-4">
                                        "I see the instructions, but I don't understand them. The words are difficult."
                                    </p>
                                    <p className="text-xs text-neutral-500 font-medium">Users didn't know which camera to use.</p>
                                </div>
                                <div className="relative pl-8 border-l-2 border-blue-500/30">
                                    <h4 className="text-sm font-black uppercase tracking-widest text-blue-500 mb-4">The "Phone Flip"</h4>
                                    <p className="text-neutral-700 dark:text-neutral-300 italic text-xl leading-snug font-medium mb-4">
                                        "It's hard to do without looking at the back!"
                                    </p>
                                    <p className="text-xs text-neutral-500 font-medium">Muscle memory was failing the technology.</p>
                                </div>
                                <div className="relative pl-8 border-l-2 border-red-500/30">
                                    <h4 className="text-sm font-black uppercase tracking-widest text-red-500 mb-4">Trust & Accuracy</h4>
                                    <p className="text-neutral-700 dark:text-neutral-300 italic text-xl leading-snug font-medium mb-4">
                                        "I just came from running, but my bpm is 58. I don't trust it."
                                    </p>
                                    <p className="text-xs text-neutral-500 font-medium">Opaque results led to immediate abandonment.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Heuristic Audit Refined */}
                    <div className="mb-32">
                        {/* Desktop View: Interactive Explorer */}
                        <div className="hidden md:grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
                            <div className="md:col-span-6 lg:col-span-5">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-black uppercase tracking-widest mb-6">
                                    02. Heuristic Audit
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-8 tracking-tight leading-tight">
                                    Analyzing the <span className="text-red-500">V1</span> Experience
                                </h3>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed font-medium">
                                    I audited V1 and found four systemic failures. We weren't fixing UI bugs; we were solving 'Hardware Blindness' and a broken habit loop.
                                </p>

                                <div className="space-y-4">
                                    {heuristicItems.map((item, idx) => (
                                        <button
                                            key={idx}
                                            onMouseEnter={() => setActiveAuditIdx(idx)}
                                            onClick={() => setActiveAuditIdx(idx)}
                                            className={`w-full text-left group relative pl-6 border-l transition-all duration-500 py-3 ${activeAuditIdx === idx ? 'border-red-500 bg-red-500/[0.03]' : 'border-neutral-200 dark:border-neutral-800 hover:border-red-500/50'}`}
                                        >
                                            <div className={`absolute left-0 top-0 bottom-0 bg-red-500 transition-all duration-500 ${activeAuditIdx === idx ? 'w-1' : 'w-0 group-hover:w-0.5'}`} />
                                            <h5 className={`font-bold uppercase tracking-widest text-[10px] mb-1 transition-colors ${activeAuditIdx === idx ? 'text-red-500' : 'text-neutral-900 dark:text-white group-hover:text-red-500/80'}`}>{idx + 1}. {item.title}</h5>
                                            <p className={`text-xs leading-relaxed transition-colors ${activeAuditIdx === idx ? 'text-neutral-700 dark:text-neutral-300' : 'text-neutral-500'}`}>{item.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="md:col-span-6 lg:col-span-7 flex justify-center">
                                <div className="relative group">
                                    <div className="absolute -inset-10 bg-red-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    <div className="relative z-10 flex flex-col items-center">
                                        <MobileShell className="shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 relative">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={activeAuditIdx}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 1.05 }}
                                                    className="w-full h-full relative"
                                                >
                                                    <img
                                                        src={heuristicItems[activeAuditIdx].image}
                                                        alt={heuristicItems[activeAuditIdx].title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 p-8 pointer-events-none z-20">
                                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-red-500/30 flex items-center justify-center animate-pulse">
                                                            <div className="w-4 h-4 rounded-full bg-red-500/50" />
                                                        </div>
                                                        <div className="absolute top-1/3 right-4 w-12 h-px bg-red-500/50" />
                                                        <div className="absolute top-1/3 right-16 text-[8px] font-black font-mono text-red-500 uppercase tracking-widest bg-white dark:bg-neutral-900 px-2 py-0.5 rounded shadow-sm">
                                                            {activeAuditIdx === 0 ? 'ONBOARDING_GAP' :
                                                                activeAuditIdx === 1 ? 'FEEDBACK_MISSING' :
                                                                    activeAuditIdx === 2 ? 'USER_ERROR' : 'VALUE_VOID'}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </AnimatePresence>
                                        </MobileShell>
                                        <div className="mt-8 text-center flex flex-col items-center gap-2">
                                            <div className="flex gap-1">
                                                {heuristicItems.map((_, i) => (
                                                    <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeAuditIdx === i ? 'bg-red-500 w-4' : 'bg-neutral-300 dark:bg-neutral-800'}`} />
                                                ))}
                                            </div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">V1 Context Audit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile View: Horizontal Scroll */}
                        <div className="md:hidden">
                            <div className="mb-12">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-black uppercase tracking-widest mb-6">
                                    02. Heuristic Audit
                                </div>
                                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight leading-tight">
                                    Analyzing the <span className="text-red-500">V1</span> Experience
                                </h3>
                                <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                                    I found four systemic failures in V1. Each screen showed a gap in user understanding.
                                </p>
                            </div>

                            <div className="flex overflow-x-auto no-scrollbar gap-8 pb-12 -mx-4 px-4 snap-x snap-mandatory">
                                {heuristicItems.map((item, idx) => (
                                    <div key={idx} className="min-w-[280px] snap-center">
                                        <MobileShell className="mb-8 shadow-xl ring-1 ring-neutral-200 dark:ring-neutral-800">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </MobileShell>
                                        <div className="px-2">
                                            <h5 className="font-bold uppercase tracking-widest text-[10px] text-red-500 mb-2">{idx + 1}. {item.title}</h5>
                                            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Critical Insight Repositioned as Section Closer */}
                        <div className="mt-24 max-w-4xl mx-auto px-4">
                            <div className="p-8 md:p-12 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-[2rem] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Eye size={120} className="text-red-500" />
                                </div>
                                <div className="relative z-10">
                                    <h4 className="font-bold text-red-600 dark:text-red-400 flex items-center gap-3 mb-6 uppercase tracking-[0.3em] text-xs">
                                        <Eye size={20} /> The Critical Insight
                                    </h4>
                                    <p className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 italic leading-tight font-medium max-w-2xl">
                                        "One user covered the wrong lens. App stayed on 'Initializing' while they waited. We asked for precision without guidance."
                                    </p>
                                    <div className="mt-8 flex items-center gap-4">
                                        <div className="h-px bg-red-500/30 flex-1" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-red-500/60">Hardware Blindness Case-Study</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Divider />

                {/* Section 3: Analysis & Design Principles */}
                <section className="mb-24" id="analysis">
                    <SectionTitle number="03" title="Analysis" />

                    <div className="grid md:grid-cols-2 gap-12 mb-24">
                        <div>
                            <h4 className="text-xl font-bold mb-6 text-neutral-900 dark:text-white uppercase tracking-tight">Emotional Mapping (FTUX)</h4>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                                Mapped first-time user journey. Found trust eroded during 15-second scan. That was our biggest opportunity.
                            </p>
                            <ZoomableImage
                                src="https://ik.imagekit.io/vtitfjbr6/hr/FTUX-journey-map.webp"
                                alt="FTUX Journey Map"
                                className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg"
                                fill={false}
                            />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-6 text-neutral-900 dark:text-white uppercase tracking-tight">The Broken Loop (RTUX)</h4>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                                Returning users hit a dead end. No historical context. That's why they churned.
                            </p>
                            <ZoomableImage
                                src="https://ik.imagekit.io/vtitfjbr6/hr/RTUX-journey-map.webp"
                                alt="RTUX Journey Map"
                                className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg"
                                fill={false}
                            />
                        </div>
                    </div>

                    <Divider />

                    <div className="mt-24">
                        <h4 className="text-2xl font-bold mb-12 text-neutral-900 dark:text-white">Design Principles</h4>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed max-w-3xl">
                            Evidence showed the problem. I set three clear goals to fix it:
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <GoalCard
                                number="1"
                                title="Achieve 'First-Try' Success"
                                desc="Make onboarding foolproof. Remove anxiety for all users."
                            />
                            <GoalCard
                                number="2"
                                title="Build Unshakeable Trust"
                                desc="Give real-time feedback. Educate users. Build confidence."
                            />
                            <GoalCard
                                number="3"
                                title="Create a Habit Loop"
                                desc="Turn result screens into launchpads. Drive repeat usage."
                            />
                        </div>
                    </div>
                </section>

                <Divider />

                {/* Section 4: Design Execution */}
                <section className="mb-24">
                    <SectionTitle number="04" title="Execution" id="execution" />

                    <div className="mt-16 mb-32">
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl leading-relaxed font-medium">
                            I mapped design fixes to each journey stage. This diagram guided our work.
                        </p>
                        <div className="bg-neutral-50 dark:bg-neutral-900/40 rounded-[2.5rem] p-6 md:p-12 border border-neutral-200 dark:border-neutral-800 shadow-inner group">
                            <div className="relative overflow-hidden rounded-3xl">
                                <div className="absolute -inset-10 bg-blue-500/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                <img
                                    src="https://ik.imagekit.io/vtitfjbr6/hr/flowchart.png"
                                    alt="Strategic Design Interventions Flowchart"
                                    className="w-full relative z-10"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 4.1 Onboarding Interventions Audit */}
                    <div className="mt-24 mb-32">
                        {/* Desktop View: Interactive Explorer */}
                        <div className="hidden md:grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
                            <div className="md:col-span-6 lg:col-span-5">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-[10px] font-black uppercase tracking-widest mb-6">
                                    4.1 Interventions Audit
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-8 tracking-tight leading-tight">
                                    Fixed <span className="text-orange-500">First-Try</span> Success
                                </h3>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed font-medium">
                                    I built four onboarding fixes that cut the 38% drop-off to 17%. Each fix solved a specific failure point.
                                </p>

                                <div className="space-y-4">
                                    {onboardingItems.map((item, idx) => (
                                        <button
                                            key={idx}
                                            onMouseEnter={() => setActiveOnboardingIdx(idx)}
                                            onClick={() => setActiveOnboardingIdx(idx)}
                                            className={`w-full text-left group relative pl-6 border-l transition-all duration-500 py-3 ${activeOnboardingIdx === idx ? 'border-orange-500 bg-orange-500/[0.03]' : 'border-neutral-200 dark:border-neutral-800 hover:border-orange-500/50'}`}
                                        >
                                            <div className={`absolute left-0 top-0 bottom-0 bg-orange-500 transition-all duration-500 ${activeOnboardingIdx === idx ? 'w-1' : 'w-0 group-hover:w-0.5'}`} />
                                            <h5 className={`font-bold uppercase tracking-widest text-[10px] mb-1 transition-colors ${activeOnboardingIdx === idx ? 'text-orange-500' : 'text-neutral-900 dark:text-white group-hover:text-orange-500/80'}`}>{idx + 1}. {item.title}</h5>
                                            <p className={`text-xs leading-relaxed transition-colors ${activeOnboardingIdx === idx ? 'text-neutral-700 dark:text-neutral-300' : 'text-neutral-500'}`}>{item.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="md:col-span-6 lg:col-span-7 flex justify-center">
                                <div className="relative group">
                                    <div className="absolute -inset-10 bg-orange-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    <div className="relative z-10 flex flex-col items-center">
                                        <MobileShell className="shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 relative">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={activeOnboardingIdx}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 1.05 }}
                                                    className="w-full h-full relative"
                                                >
                                                    {onboardingItems[activeOnboardingIdx].isVideo ? (
                                                        <video
                                                            src={onboardingItems[activeOnboardingIdx].media}
                                                            controls
                                                            className="w-full h-full object-cover"
                                                            playsInline
                                                        />
                                                    ) : (
                                                        <img
                                                            src={onboardingItems[activeOnboardingIdx].media}
                                                            alt={onboardingItems[activeOnboardingIdx].title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    )}
                                                    <div className="absolute inset-0 p-8 pointer-events-none z-20">
                                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-orange-500/30 flex items-center justify-center animate-pulse">
                                                            <div className="w-4 h-4 rounded-full bg-orange-500/50" />
                                                        </div>
                                                        <div className="absolute top-1/3 right-4 w-12 h-px bg-orange-500/50" />
                                                        <div className="absolute top-1/3 right-16 text-[8px] font-black font-mono text-orange-500 uppercase tracking-widest bg-white dark:bg-neutral-900 px-2 py-0.5 rounded shadow-sm">
                                                            {activeOnboardingIdx === 0 ? 'VIDEO_GUIDE' :
                                                                activeOnboardingIdx === 1 ? 'HYBRID_SETUP' :
                                                                    activeOnboardingIdx === 2 ? 'ACTIVE_FEEDBACK' : 'PASSIVE_HANDLING'}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </AnimatePresence>
                                        </MobileShell>
                                        <div className="mt-8 text-center flex flex-col items-center gap-2">
                                            <div className="flex gap-1">
                                                {onboardingItems.map((_, i) => (
                                                    <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeOnboardingIdx === i ? 'bg-orange-500 w-4' : 'bg-neutral-300 dark:bg-neutral-800'}`} />
                                                ))}
                                            </div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Onboarding Interventions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile View: Horizontal Scroll */}
                        <div className="md:hidden">
                            <div className="mb-12">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-[10px] font-black uppercase tracking-widest mb-6">
                                    4.1 Interventions Audit
                                </div>
                                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight leading-tight">
                                    Fixed <span className="text-orange-500">First-Try</span> Success
                                </h3>
                                <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                                    I built four fixes that cut drop-off from 38% to 17%.
                                </p>
                            </div>

                            <div className="flex overflow-x-auto no-scrollbar gap-8 pb-12 -mx-4 px-4 snap-x snap-mandatory">
                                {onboardingItems.map((item, idx) => (
                                    <div key={idx} className="min-w-[280px] snap-center">
                                        <MobileShell className="mb-8 shadow-xl ring-1 ring-neutral-200 dark:ring-neutral-800">
                                            {item.isVideo ? (
                                                <video
                                                    src={item.media}
                                                    controls
                                                    className="w-full h-full object-cover"
                                                    playsInline
                                                />
                                            ) : (
                                                <img
                                                    src={item.media}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                        </MobileShell>
                                        <div className="px-2">
                                            <h5 className="font-bold uppercase tracking-widest text-[10px] text-orange-500 mb-2">{idx + 1}. {item.title}</h5>
                                            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 4.2 Building Trust During Measurement */}
                    <div className="mt-24 mb-32">
                        {/* Desktop View: Interactive Explorer */}
                        <div className="hidden md:grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
                            <div className="md:col-span-6 lg:col-span-5">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[10px] font-black uppercase tracking-widest mb-6">
                                    4.2 Building Trust During Measurement
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-8 tracking-tight leading-tight">
                                    Built <span className="text-green-500">Trust</span> in Measurement
                                </h3>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed font-medium">
                                    I built four measurement fixes that eliminated user doubt. Each fix addressed a specific trust issue.
                                </p>

                                <div className="space-y-4">
                                    {measurementItems.map((item, idx) => (
                                        <button
                                            key={idx}
                                            onMouseEnter={() => setActiveMeasurementIdx(idx)}
                                            onClick={() => setActiveMeasurementIdx(idx)}
                                            className={`w-full text-left group relative pl-6 border-l transition-all duration-500 py-3 ${activeMeasurementIdx === idx ? 'border-green-500 bg-green-500/[0.03]' : 'border-neutral-200 dark:border-neutral-800 hover:border-green-500/50'}`}
                                        >
                                            <div className={`absolute left-0 top-0 bottom-0 bg-green-500 transition-all duration-500 ${activeMeasurementIdx === idx ? 'w-1' : 'w-0 group-hover:w-0.5'}`} />
                                            <h5 className={`font-bold uppercase tracking-widest text-[10px] mb-1 transition-colors ${activeMeasurementIdx === idx ? 'text-green-500' : 'text-neutral-900 dark:text-white group-hover:text-green-500/80'}`}>{idx + 1}. {item.title}</h5>
                                            <p className={`text-xs leading-relaxed transition-colors ${activeMeasurementIdx === idx ? 'text-neutral-700 dark:text-neutral-300' : 'text-neutral-500'}`}>{item.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="md:col-span-6 lg:col-span-7 flex justify-center">
                                <div className="relative group">
                                    <div className="absolute -inset-10 bg-green-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    <div className="relative z-10 flex flex-col items-center">
                                        <MobileShell className="shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 relative">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={activeMeasurementIdx}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 1.05 }}
                                                    className="w-full h-full relative"
                                                >
                                                    {measurementItems[activeMeasurementIdx].isAudio ? (
                                                        <div className="w-full h-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
                                                            <audio
                                                                src={measurementItems[activeMeasurementIdx].media}
                                                                controls
                                                                className="w-3/4"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <img
                                                            src={measurementItems[activeMeasurementIdx].image}
                                                            alt={measurementItems[activeMeasurementIdx].title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    )}
                                                    <div className="absolute inset-0 p-8 pointer-events-none z-20">
                                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-green-500/30 flex items-center justify-center animate-pulse">
                                                            <div className="w-4 h-4 rounded-full bg-green-500/50" />
                                                        </div>
                                                        <div className="absolute top-1/3 right-4 w-12 h-px bg-green-500/50" />
                                                        <div className="absolute top-1/3 right-16 text-[8px] font-black font-mono text-green-500 uppercase tracking-widest bg-white dark:bg-neutral-900 px-2 py-0.5 rounded shadow-sm">
                                                            {activeMeasurementIdx === 0 ? 'VISUAL_FEEDBACK' :
                                                                activeMeasurementIdx === 1 ? 'HAPTIC_PULSE' :
                                                                    activeMeasurementIdx === 2 ? 'HAPTIC_APPROACH' : 'SENSORY_SOLUTION'}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </AnimatePresence>
                                        </MobileShell>
                                        <div className="mt-8 text-center flex flex-col items-center gap-2">
                                            <div className="flex gap-1">
                                                {measurementItems.map((_, i) => (
                                                    <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeMeasurementIdx === i ? 'bg-green-500 w-4' : 'bg-neutral-300 dark:bg-neutral-800'}`} />
                                                ))}
                                            </div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Measurement Interventions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile View: Horizontal Scroll */}
                        <div className="md:hidden">
                            <div className="mb-12">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[10px] font-black uppercase tracking-widest mb-6">
                                    4.2 Building Trust During Measurement
                                </div>
                                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight leading-tight">
                                    Built <span className="text-green-500">Trust</span> in Measurement
                                </h3>
                                <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                                    I built four fixes that eliminated user doubt during measurement.
                                </p>
                            </div>

                            <div className="flex overflow-x-auto no-scrollbar gap-8 pb-12 -mx-4 px-4 snap-x snap-mandatory">
                                {measurementItems.map((item, idx) => (
                                    <div key={idx} className="min-w-[280px] snap-center">
                                        <MobileShell className="mb-8 shadow-xl ring-1 ring-neutral-200 dark:ring-neutral-800">
                                            {item.isAudio ? (
                                                <div className="w-full h-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
                                                    <audio
                                                        src={item.media}
                                                        controls
                                                        className="w-3/4"
                                                    />
                                                </div>
                                            ) : (
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                        </MobileShell>
                                        <div className="px-2">
                                            <h5 className="font-bold uppercase tracking-widest text-[10px] text-green-500 mb-2">{idx + 1}. {item.title}</h5>
                                            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 4.3 Designing an Actionable Result */}
                    <div className="mt-24 mb-32">
                        {/* Desktop View: Interactive Explorer */}
                        <div className="hidden md:grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
                            <div className="md:col-span-6 lg:col-span-5">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                                    4.3 Designing an Actionable Result
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-8 tracking-tight leading-tight">
                                    Made <span className="text-blue-500">Results</span> Actionable
                                </h3>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed font-medium">
                                    I rebuilt the result screen from a dead-end number to a health dashboard that drives repeat usage.
                                </p>

                                <div className="space-y-4">
                                    {resultItems.map((item, idx) => (
                                        <button
                                            key={idx}
                                            onMouseEnter={() => setActiveResultIdx(idx)}
                                            onClick={() => setActiveResultIdx(idx)}
                                            className={`w-full text-left group relative pl-6 border-l transition-all duration-500 py-3 ${activeResultIdx === idx ? 'border-blue-500 bg-blue-500/[0.03]' : 'border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50'}`}
                                        >
                                            <div className={`absolute left-0 top-0 bottom-0 bg-blue-500 transition-all duration-500 ${activeResultIdx === idx ? 'w-1' : 'w-0 group-hover:w-0.5'}`} />
                                            <h5 className={`font-bold uppercase tracking-widest text-[10px] mb-1 transition-colors ${activeResultIdx === idx ? 'text-blue-500' : 'text-neutral-900 dark:text-white group-hover:text-blue-500/80'}`}>{idx + 1}. {item.title}</h5>
                                            <p className={`text-xs leading-relaxed transition-colors ${activeResultIdx === idx ? 'text-neutral-700 dark:text-neutral-300' : 'text-neutral-500'}`}>{item.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="md:col-span-6 lg:col-span-7 flex justify-center">
                                <div className="relative group">
                                    <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    <div className="relative z-10 flex flex-col items-center">
                                        <MobileShell className="shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 relative">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={activeResultIdx}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 1.05 }}
                                                    className="w-full h-full relative"
                                                >
                                                    <img
                                                        src={resultItems[activeResultIdx].image}
                                                        alt={resultItems[activeResultIdx].title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 p-8 pointer-events-none z-20">
                                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-blue-500/30 flex items-center justify-center animate-pulse">
                                                            <div className="w-4 h-4 rounded-full bg-blue-500/50" />
                                                        </div>
                                                        <div className="absolute top-1/3 right-4 w-12 h-px bg-blue-500/50" />
                                                        <div className="absolute top-1/3 right-16 text-[8px] font-black font-mono text-blue-500 uppercase tracking-widest bg-white dark:bg-neutral-900 px-2 py-0.5 rounded shadow-sm">
                                                            {activeResultIdx === 0 ? 'USER_STATE' :
                                                                activeResultIdx === 1 ? 'HEART_STATUS' :
                                                                    activeResultIdx === 2 ? 'READING_CONF' :
                                                                        activeResultIdx === 3 ? 'ACTIONABLE_TRENDS' :
                                                                            activeResultIdx === 4 ? 'PROACTIVE_TRIGGERS' : 'ECOSYSTEM_INT'}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </AnimatePresence>
                                        </MobileShell>
                                        <div className="mt-8 text-center flex flex-col items-center gap-2">
                                            <div className="flex gap-1">
                                                {resultItems.map((_, i) => (
                                                    <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeResultIdx === i ? 'bg-blue-500 w-4' : 'bg-neutral-300 dark:bg-neutral-800'}`} />
                                                ))}
                                            </div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Result Interventions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile View: Horizontal Scroll */}
                        <div className="md:hidden">
                            <div className="mb-12">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                                    4.3 Designing an Actionable Result
                                </div>
                                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight leading-tight">
                                    Made <span className="text-blue-500">Results</span> Actionable
                                </h3>
                                <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                                    I rebuilt the result screen from a dead-end number to a health dashboard that drives repeat usage.
                                </p>
                            </div>

                            <div className="flex overflow-x-auto no-scrollbar gap-8 pb-12 -mx-4 px-4 snap-x snap-mandatory">
                                {resultItems.map((item, idx) => (
                                    <div key={idx} className="min-w-[280px] snap-center">
                                        <MobileShell className="mb-8 shadow-xl ring-1 ring-neutral-200 dark:ring-neutral-800">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </MobileShell>
                                        <div className="px-2">
                                            <h5 className="font-bold uppercase tracking-widest text-[10px] text-blue-500 mb-2">{idx + 1}. {item.title}</h5>
                                            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Technical Deep Dive - NEW */}
                    <div className="mt-32">
                        <h3 className="text-3xl font-bold mb-12 text-neutral-900 dark:text-white flex items-center gap-4">
                            <Cpu className="text-blue-500" /> Technical Deep Dive
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800">
                                <h4 className="font-bold text-neutral-900 dark:text-white mb-4">Lens Detection Logic</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    Analyzed lens luminosity. Switched lenses when sensor missed blood flow "red-shift."
                                </p>
                            </div>
                            <div className="p-8 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800">
                                <h4 className="font-bold text-neutral-900 dark:text-white mb-4">The Haptic Strategy</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    Used haptic patterns mimicking natural heartbeat. Made tool feel medical-grade.
                                </p>
                            </div>
                            <div className="p-8 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800">
                                <h4 className="font-bold text-neutral-900 dark:text-white mb-4">Real-time Signal Analysis</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    Applied moving average filter to camera's red-channel data. Smoothed handshake noise. Made heart animation fluid.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Accessibility & Inclusivity - NEW */}
                    <div className="mt-32">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white flex items-center gap-4">
                                    <Accessibility className="text-green-500" /> Accessible Design
                                </h3>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                                    Health tech works for everyone. Optimized for all skin tones. Added non-visual cues.
                                </p>
                                <div className="space-y-4">
                                    <DesignHighlight
                                        title="Skin Tone Optimization"
                                        desc="Adjusted camera exposure for accurate PPG readings across all ethnicities."
                                        icon={<Target size={20} />}
                                    />
                                    <DesignHighlight
                                        title="Audio Guidance"
                                        desc="Screen readers announce 'Signal Locked' and 'Measurement in Progress' for low-vision users."
                                        icon={<Play size={20} />}
                                    />
                                </div>
                            </div>
                            <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-200 dark:border-blue-800/20">
                                <QuoteBlock quote="The goal was to make it reliable for any person, on any phone, anywhere." />
                            </div>
                        </div>
                    </div>
                </section>

                <Divider />

                {/* Section 5: Impact */}
                <section className="mb-24">
                    <SectionTitle number="05" title="Impact & Learnings" id="impact" />

                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Conversion Funnel Lift</h3>
                        <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-3xl space-y-4">
                            <FunnelItem label="Start Measurement" value="100%" color="bg-neutral-300 dark:bg-neutral-700" />
                            <FunnelItem label="Complete Measurement" value="62%" prevValue="38%" color="bg-blue-500" highlight />
                            <FunnelItem label="View Results" value="58%" color="bg-blue-400" />
                            <FunnelItem label="Return (7 Days)" value="35%" color="bg-purple-500" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-bold text-neutral-900 dark:text-white">Week 4 Retention</h4>
                                <span className="text-green-500 font-bold">+46% Trend</span>
                            </div>
                            <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">35%</div>
                            <p className="text-sm text-neutral-500">Beat industry benchmark.</p>
                        </div>
                        <div className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-bold text-neutral-900 dark:text-white">First-Time Success</h4>
                                <span className="text-green-500 font-bold">+21% Lift</span>
                            </div>
                            <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">62%</div>
                            <p className="text-sm text-neutral-500">Up from 38% baseline.</p>
                        </div>
                    </div>

                    <QuoteBlock quote="Trust is the ultimate metric. If users don't believe the data, the UI doesn't matter." />

                    {/* Future Roadmap - NEW */}
                    <div className="mt-24 p-12 bg-neutral-900 dark:bg-neutral-800 rounded-[3rem] text-white">
                        <div className="max-w-3xl">
                            <h3 className="text-4xl font-bold mb-6 flex items-center gap-4">
                                <Repeat className="text-purple-400" /> What's Next?
                            </h3>
                            <p className="text-xl text-neutral-400 mb-12">
                                Building "Invisible Health Tracking" as core product vision.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Expanding Metrics</h4>
                                    <p className="text-neutral-400 text-sm">Using same PPG tech for Stress Levels (HRV) and Blood Oxygen (SpO2).</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Predictive Health</h4>
                                    <p className="text-neutral-400 text-sm">Analyzing historical data to predict cardiovascular issues before they become critical.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
