import React from 'react';
import { Activity, Heart, ArrowUp, Users, Play, AlertTriangle, Smartphone, Zap, TrendingUp, CheckCircle, Clock, Shield } from 'lucide-react';
import { StatCard, SectionTitle, MobileShell, TextHighlight, Divider, QuoteBlock, InsightCard, GoalCard, DesignHighlight, BrowserWindow, CaseMeta } from './Shared';
import { ASSETS } from '../../data';
import { motion } from 'framer-motion';

export const HeartRateCaseStudy: React.FC = () => {
  return (
    <div className="animate-fade-in pb-20 relative bg-white dark:bg-[#050505]">
         {/* Full Width Background Hero */}
         <div className="absolute top-0 left-0 w-full h-[600px] z-0 overflow-hidden pointer-events-none">
             <img 
                src={ASSETS.projects.heartRate.cover} 
                alt="Background" 
                className="w-full h-full object-cover opacity-30 dark:opacity-20 blur-[2px]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#050505] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-12">
                 <div className="flex items-center gap-3 mb-8">
                    <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Health Tech</span>
                    <span className="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white px-2 py-0.5 rounded text-xs font-bold">2023</span>
                </div>

                <h1 className="text-5xl md:text-8xl font-bold mb-12 leading-[0.9] text-neutral-900 dark:text-white tracking-tight">
                    Heart Rate: <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Fixing the Funnel.</span>
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
                <SectionTitle number="01" title="The Problem" />
                <div className="max-w-4xl">
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
                        The Heart Rate Monitor was our bet for organic growth. It failed. 
                        <span className="text-red-500 font-bold"> 38% of users</span> dropped off before completing a measurement. 
                    </p>
                </div>
            </section>

            <Divider />

            {/* Section 2: Discovery */}
            <section className="mb-24">
                <SectionTitle number="02" title="Discovery" />
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-5">
                        <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                            I watched 5 users try the feature. They all failed to get a reading.
                        </p>
                        <div className="space-y-4">
                            <InsightCard 
                                icon={<Smartphone />}
                                title="Camera Confusion"
                                quote="Which lens do I cover? The flash is burning my finger."
                                color="orange"
                            />
                            <InsightCard 
                                icon={<AlertTriangle />}
                                title="Lack of Feedback"
                                quote="Is it working? The screen is frozen."
                                color="red"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <h3 className="font-bold text-neutral-900 dark:text-white mb-6">Failure Points</h3>
                        <div className="grid gap-4">
                            <DesignHighlight 
                                title="1. Hardware Blindness" 
                                desc="Users couldn't distinguish the main camera from the wide-angle lens." 
                                icon={<Users className="text-red-500"/>} 
                            />
                             <DesignHighlight 
                                title="2. The 'Frozen' State" 
                                desc="The 15-second scan had no animation. Users thought the app crashed and moved their finger." 
                                icon={<Activity className="text-red-500"/>} 
                            />
                             <DesignHighlight 
                                title="3. No Baseline" 
                                desc="Raw BPM numbers meant nothing to users. 'Is 72 good?'" 
                                icon={<Shield className="text-red-500"/>} 
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Divider />

            {/* Section 3: Goals */}
            <section className="mb-24">
                 <SectionTitle number="03" title="The Fix" />
                 <div className="grid md:grid-cols-3 gap-6">
                     <GoalCard 
                        number="1" 
                        title="Instruction" 
                        desc="Show, don't tell. Use video loops to show exactly how to hold the phone." 
                    />
                     <GoalCard 
                        number="2" 
                        title="Feedback" 
                        desc="If the app is working, show it. Use haptics and visuals to confirm signal lock." 
                    />
                     <GoalCard 
                        number="3" 
                        title="Context" 
                        desc="Don't just show the number. Show what it means (Low, Normal, High)." 
                    />
                 </div>
            </section>

            <Divider />

            {/* Section 4: Design Execution */}
            <section className="mb-24">
                <SectionTitle number="04" title="Execution" />
                
                <div className="mt-16 space-y-32">
                    
                    {/* 4.1 Onboarding */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div className="order-2 md:order-1">
                             <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">Fix 01</div>
                             <h3 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">Visual Instructions</h3>
                             <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                                 Text instructions failed. I replaced them with a looping video showing the physical action: "Cover the Camera + Flash".
                             </p>
                             <DesignHighlight 
                                title="Error Prevention" 
                                desc="If we detect low light, we auto-trigger the flash. If we detect shake, we pause the timer."
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
                             <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">Fix 02</div>
                             <h3 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">Signal Lock</h3>
                             <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                                 The scan takes 15 seconds. To prevent movement, I added a "heartbeat" animation that syncs with the user's actual pulse.
                             </p>
                             <div className="space-y-6">
                                <DesignHighlight 
                                    title="Haptic Feedback" 
                                    desc="A gentle vibration on every beat confirms the phone is reading data." 
                                    icon={<Activity size={20}/>} 
                                />
                                <DesignHighlight 
                                    title="Status Text" 
                                    desc="Changed generic 'Scanning' to 'Detecting Pulse' -> 'Reading...'." 
                                    icon={<CheckCircle size={20}/>} 
                                />
                             </div>
                         </div>
                    </div>

                     {/* 4.3 Results */}
                     <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div className="order-2 md:order-1">
                             <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">Fix 03</div>
                             <h3 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">Retention</h3>
                             <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                                 I added relative context. "72 BPM" is boring. "72 BPM is Excellent for a 30-year-old" is actionable.
                             </p>
                             <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                                 <li className="flex gap-3">
                                     <div className="mt-1 text-green-500"><CheckCircle size={18}/></div>
                                     <span><strong>Benchmarks:</strong> Compared results to population averages.</span>
                                 </li>
                                 <li className="flex gap-3">
                                     <div className="mt-1 text-green-500"><TrendingUp size={18}/></div>
                                     <span><strong>History:</strong> Showing the last 5 readings incentivized daily checks.</span>
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
            <section className="mb-24">
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

                <QuoteBlock quote="Trust is the ultimate metric. If users don't believe the data, the UI doesn't matter." />
            </section>
        </div>
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