import React, { useState } from 'react';
import { Activity, Heart, ArrowUp, Layers, ArrowUpRight, Users, Play, AlertTriangle, Smartphone, Zap, TrendingUp, CheckCircle, Clock, Shield, Search, Eye, Cpu, Accessibility, Repeat, Target, Volume2 } from 'lucide-react';
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
            image: "https://ik.imagekit.io/vtitfjbr6/hr/v1-step-1.png?updatedAt=1766684486968"
        },
        {
            title: "Weak Feedback",
            desc: "The timer goes back to 0 sec at a very small movement hand movement.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/v1-measurement-screen.png?updatedAt=1766684486884"
        },
        {
            title: "Destructive Error State",
            desc: "Error screens blamed users. No advice on how to fix the problem.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/v1-error-screen.png?updatedAt=1766684486770"
        },
        {
            title: "'So What?' Result",
            desc: "Result screen was a dead end. No context. Tool felt like a one-time gimmick.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/v1-result-screen.png?updatedAt=1766684486990"
        }
    ];

    const onboardingItems = [
        {
            title: "Video-Guided Introduction",
            desc: "Built 15-second video showing finger placement showcasing user correcting wrong finger placement and successfully measuring their heart rate.",
            media: "https://ik.imagekit.io/vtitfjbr6/hr/instruction%20video-1.mp4",
            isVideo: true
        },
        {
            title: "Pre-Measure Setup",
            desc: "Combined instruction video with camera view. Users saw exactly where to place fingers.",
            media: "https://ik.imagekit.io/vtitfjbr6/hr/pre-measure-final.webp?updatedAt=1766685082782",
            isVideo: false
        },
        {
            title: "Flash Blinking, Haptic and Audio Interventions",
            desc: "Improved user experience through flash blinking, haptic vibration and audio feedback, creating a multi-sensory confidence loop.",
            media: "https://ik.imagekit.io/vtitfjbr6/hr/haptic-audio-feedback.mp3",
            isAudio: true,
            isVideo: false
        },
        {
            title: "Active Error Prevention",
            desc: "Added real-time 'Motion Detected!' alerts. Stopped progress reset after tiny motion detection.",
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
            title: "Adding social proof",
            desc: "Embedded social proof directly into the first video. This established immediate credibility before the measurement even started.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/social-proof.png",
            isAudio: false,
            media: ""
        },
        {
            title: "Live Visual Feedback",
            desc: "Made the invisible visible. Added progress circle, live BPM, and PPG graph. Users saw what was happening.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/measuring-final.png",
            isAudio: false,
            media: ""
        },
        {
            title: "User State Input",
            desc: "Added physical state input (Resting, Walking). Data Science team used this to calibrate results. Generic number became personalized insight.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/user-state-input.png",
            isAudio: false,
            media: ""
        },
        {
            title: "Reading Confidence",
            desc: "Added confidence score showing signal quality. Turned user doubt ('Is this right?') into education.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/reading-confidence.png",
            isAudio: false,
            media: ""
        }
    ];

    const resultItems = [
        {
            title: "Heart Rate Status",
            desc: "Showed interpreted status like 'Normal for resting'. Changed 'BPM' to 'beats/min' to avoid confusion with BP monitors.",
            image: "https://ik.imagekit.io/vtitfjbr6/hr/heart-rate-state.png?updatedAt=1766600836833"
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
                    <StatCard value="75%" label="Completion" subLabel="First-Time Success" />
                    <StatCard value="+21%" label="Lift" subLabel="Funnel Conversion" />
                    <StatCard value="9.8%" label="Retention" subLabel="Week 4 Cohort" />
                    <StatCard value="2.3x" label="Growth" subLabel="Engagement Lift" />
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
                                src="https://ik.imagekit.io/vtitfjbr6/hr/RTUX-journey-map.webp?updatedAt=1766662512117"
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
                                <ZoomableImage
                                    src="https://ik.imagekit.io/vtitfjbr6/hr/flowchart.png"
                                    alt="Strategic Design Interventions Flowchart"
                                    className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg"
                                    fill={false}
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
                                                    {onboardingItems[activeOnboardingIdx].isAudio ? (
                                                        <div className="w-full h-full flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
                                                            {/* Background accent */}
                                                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent" />

                                                            <div className="relative z-10 flex flex-col items-center gap-6 p-8 w-full w-[280px]">
                                                                <div className="w-24 h-24 rounded-full bg-white dark:bg-neutral-800 shadow-xl flex items-center justify-center border border-neutral-100 dark:border-neutral-700 relative group cursor-pointer">
                                                                    <div className="absolute inset-0 rounded-full border-2 border-orange-500/20 animate-ping opacity-20" />
                                                                    <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-105">
                                                                        <Play fill="white" className="text-white ml-1" size={24} />
                                                                    </div>
                                                                </div>

                                                                <div className="text-center space-y-2">
                                                                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                                                                        Haptic and Audio Feedback
                                                                    </h4>
                                                                    <div className="flex items-center justify-center gap-1 h-8">
                                                                        {[...Array(5)].map((_, i) => (
                                                                            <div
                                                                                key={i}
                                                                                className="w-1 bg-orange-500/50 rounded-full animate-pulse"
                                                                                style={{
                                                                                    height: `${Math.random() * 100}%`,
                                                                                    animationDelay: `${i * 0.1}s`
                                                                                }}
                                                                            />
                                                                        ))}
                                                                    </div>
                                                                </div>

                                                                <audio
                                                                    src={onboardingItems[activeOnboardingIdx].media}
                                                                    className="hidden"
                                                                />
                                                            </div>
                                                        </div>
                                                    ) : onboardingItems[activeOnboardingIdx].isVideo ? (
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
                                            {item.isAudio ? (
                                                <div className="w-full h-full flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden w-[280px]">
                                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500 via-transparent to-transparent" />

                                                    <div className="relative z-10 flex flex-col items-center gap-6 p-8 w-full max-w-[240px]">
                                                        <div className="w-24 h-24 rounded-full bg-white dark:bg-neutral-800 shadow-xl flex items-center justify-center border border-neutral-100 dark:border-neutral-700 relative group cursor-pointer">
                                                            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                                                                <Play fill="white" className="text-white ml-1" size={24} />
                                                            </div>
                                                        </div>

                                                        <div className="text-center space-y-2">
                                                            <h4 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                                                                Haptic and Audio Feedback
                                                            </h4>
                                                            <div className="flex items-center justify-center gap-1 h-8">
                                                                <Volume2 className="text-green-500 animate-pulse" size={20} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : item.isVideo ? (
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
                                                        <div className="w-full h-full flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
                                                            {/* Background accent */}
                                                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500 via-transparent to-transparent" />

                                                            <div className="relative z-10 flex flex-col items-center gap-6 p-8 w-full max-w-[240px]">
                                                                <div className="w-24 h-24 rounded-full bg-white dark:bg-neutral-800 shadow-xl flex items-center justify-center border border-neutral-100 dark:border-neutral-700 relative group cursor-pointer">
                                                                    <div className="absolute inset-0 rounded-full border-2 border-green-500/20 animate-ping opacity-20" />
                                                                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-105">
                                                                        <Play fill="white" className="text-white ml-1" size={24} />
                                                                    </div>
                                                                </div>

                                                                <div className="text-center space-y-2">
                                                                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                                                                        {activeMeasurementIdx === 1 ? 'Haptic Feedback' : 'Audio Feedback'}
                                                                    </h4>
                                                                    <div className="flex items-center justify-center gap-1 h-8">
                                                                        {[...Array(5)].map((_, i) => (
                                                                            <div
                                                                                key={i}
                                                                                className="w-1 bg-green-500/50 rounded-full animate-pulse"
                                                                                style={{
                                                                                    height: `${Math.random() * 100}%`,
                                                                                    animationDelay: `${i * 0.1}s`
                                                                                }}
                                                                            />
                                                                        ))}
                                                                    </div>
                                                                </div>

                                                                <audio
                                                                    src={measurementItems[activeMeasurementIdx].media}
                                                                    className="hidden"
                                                                />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <img
                                                            src={measurementItems[activeMeasurementIdx].image}
                                                            alt={measurementItems[activeMeasurementIdx].title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    )}

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
                                        <MobileShell className="w-full mb-8 shadow-xl ring-1 ring-neutral-200 dark:ring-neutral-800">
                                            {item.isAudio ? (
                                                <div className="w-full h-full flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden w-[280px]">
                                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500 via-transparent to-transparent" />

                                                    <div className="relative z-10 flex flex-col items-center gap-6 p-8 w-full max-w-[240px]">
                                                        <div className="w-24 h-24 rounded-full bg-white dark:bg-neutral-800 shadow-xl flex items-center justify-center border border-neutral-100 dark:border-neutral-700 relative group cursor-pointer">
                                                            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                                                                <Play fill="white" className="text-white ml-1" size={24} />
                                                            </div>
                                                        </div>

                                                        <div className="text-center space-y-2">
                                                            <h4 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                                                                {idx === 1 ? 'Haptic Feedback' : 'Audio Feedback'}
                                                            </h4>
                                                            <div className="flex items-center justify-center gap-1 h-8">
                                                                <Volume2 className="text-green-500 animate-pulse" size={20} />
                                                            </div>
                                                        </div>
                                                    </div>
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
                    {/* <div className="mt-32">
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
                    </div> */}

                    {/* Accessibility & Inclusivity - NEW */}
                    {/* <div className="mt-32">
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
                    </div> */}
                </section>

                <Divider />

                {/* Section 5: Impact */}
                <section className="mb-24">
                    <SectionTitle number="05" title="Impact & Learnings" id="impact" />

                    {/* Fig 5: Funnel Analysis */}
                    <div className="mb-20">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">First-Time Success</h3>
                                <p className="text-neutral-500 text-sm">Measurement Completion Rate (Funnel)</p>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
                                <ArrowUpRight size={14} className="text-green-500" />
                                <span className="text-xs font-bold text-green-500 uppercase tracking-wider">+21% Lift</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* V1 Bar */}
                            <div className="group">
                                <div className="flex justify-between text-xs font-medium text-neutral-500 mb-2 font-mono uppercase tracking-wider">
                                    <span>Version 1.0</span>
                                    <span>62.0%</span>
                                </div>
                                <div className="h-14 w-full bg-[#1A1A1A] rounded-xl overflow-hidden relative border border-white/5">
                                    <div className="absolute inset-0 flex items-center px-4 z-10">
                                        <span className="text-neutral-600 font-mono text-xs">Baseline</span>
                                    </div>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '62%' }}
                                        transition={{ duration: 1.2, ease: "circOut" }}
                                        className="h-full bg-neutral-700 opacity-40"
                                    />
                                </div>
                            </div>

                            {/* Redesign Bar */}
                            <div className="group">
                                <div className="flex justify-between text-xs font-bold text-white mb-2 font-mono uppercase tracking-wider">
                                    <span>Redesign</span>
                                    <span className="text-orange-500">75.0%</span>
                                </div>
                                <div className="h-14 w-full bg-[#1A1A1A] rounded-xl overflow-hidden relative border border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                                    <div className="absolute inset-0 flex items-center px-4 z-10">
                                        <span className="text-white font-mono text-xs font-bold">Current</span>
                                    </div>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '75%' }}
                                        transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
                                        className="h-full bg-gradient-to-r from-red-600 to-orange-500 relative"
                                    >
                                        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/50" />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-neutral-600 mt-8 text-xs font-mono">
                            FIG 5. FUNNEL COMPLETION DELTA
                        </p>
                    </div>

                    <Divider />

                    {/* Fig 6: Retention Matrix */}
                    <div className="mt-20">
                        <div className="mb-10 text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Long-Term Retention</h3>
                            <p className="text-neutral-500 text-sm">Cohort Analysis (Week 4 Engagement)</p>
                        </div>

                        <div className="overflow-x-auto">
                            <div className="min-w-[600px] bg-[#1A1A1A] rounded-2xl border border-white/5 p-1">
                                {/* Header */}
                                <div className="grid grid-cols-4 p-4 border-b border-white/5 bg-white/5 rounded-t-xl">
                                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Cohort</div>
                                    <div className="text-right text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Week 1</div>
                                    <div className="text-right text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Week 2</div>
                                    <div className="text-right text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Week 4</div>
                                </div>

                                {/* Row 1: V1 */}
                                <div className="grid grid-cols-4 p-6 border-b border-white/5 items-center">
                                    <div className="font-medium text-neutral-500 text-sm">Legacy (V1)</div>
                                    <div className="text-right font-mono text-neutral-600">15.1%</div>
                                    <div className="text-right font-mono text-neutral-600">8.7%</div>
                                    <div className="text-right font-mono text-neutral-500 font-bold">4.3%</div>
                                </div>

                                {/* Row 2: Redesign - Highlighted */}
                                <div className="grid grid-cols-4 p-6 items-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500" />

                                    <div className="font-bold text-white text-sm relative z-10 flex items-center gap-2">
                                        Redesign
                                        <span className="px-1.5 py-0.5 rounded bg-orange-500 text-[10px] text-white uppercase font-bold">Active</span>
                                    </div>
                                    <div className="text-right font-mono text-orange-200 relative z-10">18.4%</div>
                                    <div className="text-right font-mono text-orange-200 relative z-10">12.5%</div>
                                    <div className="text-right font-mono text-3xl font-bold text-white relative z-10 tracking-tighter">
                                        9.8<span className="text-lg text-orange-500">%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-neutral-600 mt-8 text-xs font-mono">
                            FIG 6. RETENTION COHORT ANALYSIS
                        </p>
                    </div>

                    <Divider />

                    <div className="mt-20">
                        <div className="mb-10 text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Learnings</h3>
                            {/* <p className="text-neutral-500 text-sm"></p> */}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {/* Card 1 */}
                            <div className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:border-red-500/30 transition-colors group">
                                <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Shield size={28} />
                                </div>
                                <h4 className="font-bold text-xl text-neutral-900 dark:text-white mb-4 leading-tight">Trust is the Ultimate Metric</h4>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                                    A 'wow' feature that fails is worse than no feature. In health tech, flawless execution matters more than novelty.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:border-purple-500/30 transition-colors group">
                                <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Layers size={28} />
                                </div>
                                <h4 className="font-bold text-xl text-neutral-900 dark:text-white mb-4 leading-tight">Design is the Synthesizer</h4>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                                    I connected analytics, user feedback, and business strategy. Artifacts like the journey map aligned the team on the 'why'.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/30 transition-colors group">
                                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <TrendingUp size={28} />
                                </div>
                                <h4 className="font-bold text-xl text-neutral-900 dark:text-white mb-4 leading-tight">Retention is a System</h4>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                                    UI fixes don't solve retention. Impact came from designing the <span className="italic font-medium text-neutral-900 dark:text-white">entire system</span>—contextual results, trends, and smart notifications.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
