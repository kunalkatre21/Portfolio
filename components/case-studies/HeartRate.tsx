import React from 'react';
import { Activity, Heart, ArrowUp, Users, Play, AlertTriangle, Smartphone, Zap, TrendingUp, CheckCircle, Clock, Shield, Search, Eye, Cpu, Accessibility, Repeat, Target } from 'lucide-react';
import { InsightCard, GoalCard, StatCard, DesignHighlight, SectionTitle, QuoteBlock, BrowserWindow, MobileShell, Divider, TextHighlight, List, CaseMeta, ScreenFlow, PersonaSwitcher, HeroCarousel } from './Shared';
import { ASSETS } from '../../data';
import { motion } from 'framer-motion';

export const HeartRateCaseStudy: React.FC = () => {
    return (
        <div className="animate-fade-in pb-20 relative bg-white dark:bg-[#050505]">
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
                    <SectionTitle number="01" title="The Problem" />
                    <div className="max-w-4xl">
                        <p className="text-2xl md:text-3xl text-neutral-800 dark:text-neutral-200 mb-12 leading-tight font-medium">
                            The Heart Rate Monitor was our bet for organic growth. It failed.
                            <span className="text-red-500 font-bold block mt-4"> 38% of users dropped off before completing a measurement.</span>
                        </p>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                            In a health-tech ecosystem, trust is the primary currency. When a core feature like heart rate monitoring fails to work on the first try, it doesn't just lose a user—it erodes the credibility of the entire platform. We were seeing a massive influx of users interested in heart health, but a "leaky bucket" in the most critical part of the funnel.
                        </p>
                    </div>
                </section>

                <Divider />

                {/* Section 1b: User Research & Personas - NEW */}
                <section className="mb-32">
                    <SectionTitle number="02" title="User Research" />

                    <div className="max-w-4xl mb-16">
                        <p className="text-2xl text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed font-medium">
                            We identified two distinct archetypes with very different mental models and physical constraints.
                        </p>
                        <p className="text-neutral-500 text-lg leading-relaxed">
                            Understanding these personas helped us realize that "One Size Fits All" onboarding was the primary cause of of our 38% drop-off.
                        </p>
                    </div>

                    <div className="w-full">
                        <PersonaSwitcher
                            personas={[
                                {
                                    name: "Martha",
                                    initials: "MS",
                                    role: "The Health-Conscious Senior",
                                    bio: "Martha tracks her vitals daily to manage her chronic health conditions. She is wary of technology that feels 'black box'.",
                                    quote: "I need to be sure the app is actually reading my pulse correctly, not just guessing.",
                                    goals: [
                                        "Monitor daily resting heart rate",
                                        "Understand health trends over time",
                                        "Technology that assists, doesn't hinder"
                                    ],
                                    painPoints: [
                                        "Small button targets",
                                        "Lack of clear success/failure feedback",
                                        "Physical discomfort from the camera flash"
                                    ]
                                },
                                {
                                    name: "Vikram",
                                    initials: "VA",
                                    role: "The Data-Driven Athlete",
                                    bio: "Vikram uses heart rate data to optimize his recovery and training intensity. He is highly sensitive to data accuracy.",
                                    quote: "Accuracy is everything. If the number looks weird or delayed, the tool is useless to me.",
                                    goals: [
                                        "Track heart rate variability & recovery",
                                        "Export data for personal analysis",
                                        "Instant, reliable measurements"
                                    ],
                                    painPoints: [
                                        "Delayed signal lock",
                                        "Unexplained fluctuations in BPM",
                                        "Opaque measurement methodology"
                                    ]
                                }
                            ]}
                        />
                    </div>
                </section>

                <Divider />

                {/* Section 2: Discovery */}
                <section className="mb-24">
                    <SectionTitle number="03" title="Discovery" />
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
                            <div className="grid gap-4 mb-12">
                                <DesignHighlight
                                    title="1. Hardware Blindness"
                                    desc="Users couldn't distinguish the main camera from the wide-angle lens."
                                    icon={<Users className="text-red-500" />}
                                />
                                <DesignHighlight
                                    title="2. The 'Frozen' State"
                                    desc="The 15-second scan had no animation. Users thought the app crashed and moved their finger."
                                    icon={<Activity className="text-red-500" />}
                                />
                                <DesignHighlight
                                    title="3. No Baseline"
                                    desc="Raw BPM numbers meant nothing to users. 'Is 72 good?'"
                                    icon={<Shield className="text-red-500" />}
                                />
                            </div>

                            {/* The Eureka Moment - NEW */}
                            <div className="p-6 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-2xl">
                                <h4 className="font-bold text-red-600 dark:text-red-400 flex items-center gap-2 mb-2">
                                    <Eye size={18} /> The "Eureka" Moment
                                </h4>
                                <p className="text-neutral-700 dark:text-neutral-300 italic">
                                    "During one session, a user covered the entire camera module with their palm. The flash was on, they were burning their hand, but because their palm was over the *wrong* lens, the app just stayed on 'Initializing'. That's when I realized: we are asking for precision without giving guidance."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Divider />

                {/* Section 3: Goals */}
                <section className="mb-24">
                    <SectionTitle number="04" title="The Fix" />
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
                    <SectionTitle number="05" title="Execution" />

                    <div className="mt-16">
                        <ScreenFlow
                            steps={[
                                {
                                    label: "Step 01",
                                    title: "Visual Onboarding",
                                    desc: "Text instructions were replaced with a looping high-fidelity animation demonstrating the physical finger placement. This reduced 'False Starts' by 40%.",
                                    image: ASSETS.projects.heartRate.onboarding
                                },
                                {
                                    label: "Step 02",
                                    title: "Signal Lock & Feedback",
                                    desc: "Real-time haptic feedback and a synchronized heart animation build user trust during the 15-second scanning window.",
                                    content: (
                                        <div className="relative w-full h-full bg-black flex flex-col items-center justify-center p-6 text-center">
                                            <div className="w-40 h-40 rounded-full border-4 border-red-500/30 flex items-center justify-center relative mb-8">
                                                <div className="absolute inset-0 bg-red-500/20 rounded-full animate-pulse"></div>
                                                <Heart className="text-red-500 fill-current animate-bounce" size={64} />
                                                <div className="absolute -bottom-12 text-white font-mono text-2xl font-bold">72 <span className="text-sm font-normal text-neutral-400">BPM</span></div>
                                            </div>
                                            <div className="text-green-400 font-bold text-lg mb-2">Detecting Pulse...</div>
                                            <p className="text-neutral-500 text-xs uppercase tracking-widest">Keep Still</p>
                                        </div>
                                    )
                                },
                                {
                                    label: "Step 03",
                                    title: "Actionable Results",
                                    desc: "Contextual population benchmarks (e.g., 'Normal for your age') transformed a raw data point into a meaningful health insight.",
                                    image: ASSETS.projects.heartRate.interface
                                }
                            ]}
                        />
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
                                    We analyzed the luminosity profiles of different lenses. If the main sensor didn't detect a specific "red-shift" (blood flow), we programmatically switched lenses or showed a "Wrong Lens" warning.
                                </p>
                            </div>
                            <div className="p-8 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800">
                                <h4 className="font-bold text-neutral-900 dark:text-white mb-4">The Haptic Strategy</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    Not all vibrations are equal. We used a "Soft-Taptic" engine pattern (Android & iOS) that mimicked a natural systolic heartbeat. This felt "medical grade" rather than just a notification buzz.
                                </p>
                            </div>
                            <div className="p-8 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800">
                                <h4 className="font-bold text-neutral-900 dark:text-white mb-4">Real-time Signal Analysis</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    We implemented a moving average filter on the camera's red-channel data to smooth out noise from handshakes, ensuring the heart animation was fluid and believable.
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
                                    Health tech must work for everyone. We optimized for different skin tones (which affect light absorption) and added non-visual cues.
                                </p>
                                <div className="space-y-4">
                                    <DesignHighlight
                                        title="Skin Tone Optimization"
                                        desc="Adjusted camera exposure dynamically to ensure accurate PPG (Photoplethysmography) readings across all ethnicities."
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
                                <QuoteBlock quote="The goal wasn't just to make it pretty, but to make it reliable for any person, on any phone, anywhere." />
                            </div>
                        </div>
                    </div>
                </section>

                <Divider />

                {/* Section 5: Impact */}
                <section className="mb-24">
                    <SectionTitle number="06" title="Impact & Learnings" />

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

                    {/* Future Roadmap - NEW */}
                    <div className="mt-24 p-12 bg-neutral-900 dark:bg-neutral-800 rounded-[3rem] text-white">
                        <div className="max-w-3xl">
                            <h3 className="text-4xl font-bold mb-6 flex items-center gap-4">
                                <Repeat className="text-purple-400" /> What's Next?
                            </h3>
                            <p className="text-xl text-neutral-400 mb-12">
                                The success of the Heart Rate Monitor validated our vision for "Invisible Health Tracking".
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Expanding Metrics</h4>
                                    <p className="text-neutral-400 text-sm">Applying the same PPG technology to measure Stress Levels (HRV) and Blood Oxygen (SpO2).</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Predictive Health</h4>
                                    <p className="text-neutral-400 text-sm">Using historical data to predict potential cardiovascular anomalies before they become critical.</p>
                                </div>
                            </div>
                        </div>
                    </div>
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