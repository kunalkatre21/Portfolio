import React from 'react';
import { Activity, Heart, ArrowUp, Users, Play, AlertTriangle, Smartphone, Zap, TrendingUp, CheckCircle, Clock, Shield } from 'lucide-react';
import { StatCard, SectionTitle, MobileShell, TextHighlight, Divider, QuoteBlock, InsightCard, GoalCard, DesignHighlight, BrowserWindow } from './Shared';
import { ASSETS } from '../../data';
import { motion } from 'framer-motion';

export const HeartRateCaseStudy: React.FC = () => {
  return (
    <div className="animate-fade-in pb-20">
         <div className="mb-20">
             <div className="flex items-center gap-3 mb-8">
                <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Health Tech</span>
                <span className="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white px-2 py-0.5 rounded text-xs font-bold">2023</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[0.9] text-neutral-900 dark:text-white tracking-tight">
                Architecting an <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Engagement Engine.</span>
            </h1>
            
            <div className="flex flex-col md:flex-col gap-8 md:gap-16 mb-16 items-start">
                <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
                    I transformed a failing feature with <TextHighlight>38% user drop-off</TextHighlight> into a core driver of engagement and retention for the Eka.Care platform.
                </p>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <StatCard value="+21%" label="Conversion" subLabel="Lift" />
                    <StatCard value="2x" label="Retention" subLabel="Week 4" />
                    <StatCard value="4 Mo" label="Timeline" subLabel="Oct-Jan" />
                </div>
            </div>

             {/* Hero Visual - Video Placeholder */}
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 aspect-video flex items-center justify-center group">
                 <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors" />
                 <img src={ASSETS.projects.heartRate.cover} className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Heart Rate Monitor" />
                 <div className="z-20 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="fill-white text-white ml-2" size={32} />
                 </div>
                 <div className="absolute bottom-6 left-6 z-20 text-white font-mono text-xs opacity-70">
                    Instructional Video & Interface Demo
                 </div>
            </div>
        </div>

        {/* Section 1: The Setup */}
        <section className="max-w-4xl mx-auto">
            <SectionTitle number="01" title="The Setup: A Leaky Funnel" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
                In late 2022, the Heart Rate Monitor was a strategic bet on organic growth. But analytics painted a grim picture. 
                A catastrophic <span className="text-red-500 font-bold">~38% of users</span> were dropping off before completing their first measurement. The feature wasn't "sticking".
            </p>
        </section>

        <Divider />

        {/* Section 2: Discovery */}
        <section className="max-w-6xl mx-auto">
            <SectionTitle number="02" title="Discovery: Uncovering the 'Why'" />
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-5">
                    <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                        I initiated a quick guerilla research sprint. The unfiltered feedback was raw and illuminating.
                    </p>
                    <div className="space-y-4">
                        <InsightCard 
                            icon={<Smartphone />}
                            title="Instruction Mismatch"
                            quote="I see the instructions, but I don't understand them. Which camera do I use?"
                            color="orange"
                        />
                        <InsightCard 
                            icon={<AlertTriangle />}
                            title="Trust Deficit"
                            quote="I just ran, but it says 58 BPM. I don't trust this reading."
                            color="red"
                        />
                    </div>
                </div>
                <div className="md:col-span-7">
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-6">The 4-Step Failure Analysis</h3>
                    <div className="grid gap-4">
                        <DesignHighlight 
                            title="1. Instruction Barrier" 
                            desc="Complex medical terms without visual guidance. Users couldn't distinguish front vs back cameras." 
                            icon={<Users className="text-red-500"/>} 
                        />
                         <DesignHighlight 
                            title="2. Measurement Anxiety" 
                            desc="No visual feedback during the 15s scan. Users didn't know if it was working, leading to premature movement." 
                            icon={<Activity className="text-red-500"/>} 
                        />
                         <DesignHighlight 
                            title="3. Trust Deficit" 
                            desc="Results appeared without context. Is 72 good? Bad? Users had no baseline for validity." 
                            icon={<Shield className="text-red-500"/>} 
                        />
                        <DesignHighlight 
                            title="4. The Dead End" 
                            desc="Results screen offered no next steps or trend analysis. Zero reason to return." 
                            icon={<Clock className="text-red-500"/>} 
                        />
                    </div>
                </div>
            </div>
        </section>

        <Divider />

        {/* Section 3: Goals */}
        <section className="max-w-6xl mx-auto">
             <SectionTitle number="03" title="Design Goals" />
             <div className="grid md:grid-cols-3 gap-6">
                 <GoalCard 
                    number="1" 
                    title="First-Try Success" 
                    desc="Overhaul onboarding to be intuitive and foolproof." 
                />
                 <GoalCard 
                    number="2" 
                    title="Unshakeable Trust" 
                    desc="Provide real-time feedback and transparency to build confidence." 
                />
                 <GoalCard 
                    number="3" 
                    title="Habit Loop" 
                    desc="Transform results from a dead-end into an actionable health dashboard." 
                />
             </div>
        </section>

        <Divider />

        {/* Section 4: Design Execution */}
        <section className="max-w-6xl mx-auto">
            <SectionTitle number="04" title="Iteration & Design" />
            
            <div className="mt-16 space-y-32">
                
                {/* 4.1 Onboarding */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="order-2 md:order-1">
                         <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">Goal 1: Success</div>
                         <h3 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">Solving the "Phone Flip"</h3>
                         <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                             We combined technical clarity with human warmth. The new "Wow" moment video includes social proof ("5M+ Readings") to instantly build trust.
                         </p>
                         <DesignHighlight 
                            title="Proactive Safety Net" 
                            desc="Instead of passive error messages, we added active real-time feedback to prevent failure before it happens."
                            icon={<Zap size={20} />}
                         />
                     </div>
                     <div className="order-1 md:order-2 flex justify-center">
                        <MobileShell>
                            <img src={ASSETS.projects.heartRate.onboarding} className="w-full h-full object-cover" alt="Onboarding" />
                        </MobileShell>
                     </div>
                </div>

                {/* 4.2 Measurement */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="flex justify-center">
                        <MobileShell>
                             <div className="relative w-full h-full bg-black flex flex-col items-center justify-center p-6 text-center">
                                {/* Simulated Measurement UI */}
                                <div className="w-40 h-40 rounded-full border-4 border-red-500/30 flex items-center justify-center relative mb-8">
                                    <div className="absolute inset-0 bg-red-500/20 rounded-full animate-pulse"></div>
                                    <Heart className="text-red-500 fill-current animate-bounce" size={64} />
                                    <div className="absolute -bottom-12 text-white font-mono text-2xl font-bold">72 <span className="text-sm font-normal text-neutral-400">BPM</span></div>
                                </div>
                                <div className="text-green-400 font-bold text-lg mb-2">Detecting Pulse...</div>
                                <p className="text-neutral-500 text-xs uppercase tracking-widest">Keep Still</p>
                            </div>
                        </MobileShell>
                     </div>
                     <div>
                         <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">Goal 2: Trust</div>
                         <h3 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">Sensory Feedback</h3>
                         <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                             During the 15-second scan, users need reassurance. I designed a multi-sensory feedback system.
                         </p>
                         <div className="space-y-6">
                            <DesignHighlight 
                                title="Visual Synced Pulse" 
                                desc="A pulsing circle synchronized with heartbeat detection provides immediate visual confirmation." 
                                icon={<Activity size={20}/>} 
                            />
                            <DesignHighlight 
                                title="Progressive Guidance" 
                                desc="Text changes from 'Place Finger' -> 'Keep Steady' -> 'Analyzing', eliminating uncertainty." 
                                icon={<CheckCircle size={20}/>} 
                            />
                         </div>
                     </div>
                </div>

                 {/* 4.3 Results */}
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="order-2 md:order-1">
                         <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">Goal 3: Retention</div>
                         <h3 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">The Habit Loop Engine</h3>
                         <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                             I transformed the result screen from a dead-end into a unified health dashboard.
                         </p>
                         <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                             <li className="flex gap-3">
                                 <div className="mt-1 text-green-500"><CheckCircle size={18}/></div>
                                 <span><strong>Contextual Ranges:</strong> "Excellent for your age group" builds confidence in validity.</span>
                             </li>
                             <li className="flex gap-3">
                                 <div className="mt-1 text-green-500"><TrendingUp size={18}/></div>
                                 <span><strong>Trend Analysis:</strong> Historical data gives users a reason to return.</span>
                             </li>
                             <li className="flex gap-3">
                                 <div className="mt-1 text-green-500"><Zap size={18}/></div>
                                 <span><strong>Smart Triggers:</strong> "Your resting heart rate improved by 8%" notifications.</span>
                             </li>
                         </ul>
                     </div>
                     <div className="order-1 md:order-2 flex justify-center">
                        <MobileShell>
                            <img src={ASSETS.projects.heartRate.interface} className="w-full h-full object-cover" alt="Results Interface" />
                        </MobileShell>
                     </div>
                </div>
            </div>
        </section>

        <Divider />

        {/* Section 5: Impact */}
        <section className="max-w-5xl mx-auto">
            <SectionTitle number="05" title="Impact & Learnings" />
            
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
                    <p className="text-sm text-neutral-500">Industry benchmark outperformed.</p>
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

            <QuoteBlock quote="A 'wow' feature that fails is worse than no feature at all. Trust is the ultimate metric." />
        </section>
    </div>
  );
};

const FunnelItem = ({ label, value, prevValue, color, highlight = false }: { label: string, value: string, prevValue?: string, color: string, highlight?: boolean }) => (
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