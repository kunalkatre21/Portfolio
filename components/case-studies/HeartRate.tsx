import React from 'react';
import { Activity, Heart, ArrowUp, Users, Play, AlertTriangle, Smartphone, Zap, TrendingUp, CheckCircle, Clock, Shield, Search, Eye, Cpu, Accessibility, Repeat, Target } from 'lucide-react';
import { InsightCard, GoalCard, StatCard, DesignHighlight, SectionTitle, QuoteBlock, BrowserWindow, MobileShell, Divider, TextHighlight, List, CaseMeta, ScreenFlow, PersonaSwitcher, HeroCarousel, FunnelItem, TableOfContents } from './Shared';
import { ASSETS } from '../../data';
import { motion } from 'framer-motion';

export const HeartRateCaseStudy: React.FC = () => {
    return (
        <div className="animate-fade-in pb-20 relative bg-white dark:bg-[#050505]">
            <TableOfContents
                items={[
                    { id: 'setup', label: 'The Setup', number: '01' },
                    { id: 'research', label: 'Research', number: '02' },
                    { id: 'discovery', label: 'Discovery', number: '03' },
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
                <section className="mb-24">
                    <SectionTitle number="02" title="Discovery & Research" id="research" />

                    <div className="grid md:grid-cols-12 gap-12 mb-24">
                        <div className="md:col-span-5">
                            <h3 className="text-xl font-bold mb-6 text-neutral-900 dark:text-white uppercase tracking-tight">01. Field Research</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                                We conducted 10 on-ground interviews with a horizontal mix of age and tech-proficiency. We found that the biggest barrier wasn't the tech, but the user's anxiety during the scan.
                            </p>
                            <div className="space-y-4">
                                <InsightCard
                                    icon={<Search />}
                                    title="User Interviews"
                                    quote="10 Ground sessions covering first-time vs regular users across all age groups."
                                    color="blue"
                                />
                                <InsightCard
                                    icon={<Smartphone />}
                                    title="Primary Quotes"
                                    quote="Which lens do I cover? The flash is burning my finger."
                                    color="orange"
                                />
                            </div>
                        </div>
                        <div className="md:col-span-7">
                            <img
                                src="https://ik.imagekit.io/vtitfjbr6/hr/research.png?updatedAt=1765891831951"
                                alt="On-ground user research sessions"
                                className="w-full rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl mb-6"
                            />
                            <p className="text-xs text-neutral-400 uppercase tracking-widest text-center">Fig. 1 - Conducting informal usability tests to gather qualitative insights.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-12 gap-12 mb-24">
                        <div className="md:col-span-7 order-2 md:order-1">
                            <div className="grid gap-4 mb-12">
                                <DesignHighlight
                                    title="Ambiguous Onboarding"
                                    desc="Static instructions failed to guide finger placement, causing failure before the scan even began."
                                    icon={<AlertTriangle className="text-red-500" />}
                                />
                                <DesignHighlight
                                    title="Weak Feedback"
                                    desc="The 15-second scan had no animation. Users thought the app crashed and moved their finger."
                                    icon={<Activity className="text-red-500" />}
                                />
                                <DesignHighlight
                                    title="The 'So What?' Result"
                                    desc="Raw BPM numbers meant nothing to users. There was no medical context or baseline."
                                    icon={<Shield className="text-red-500" />}
                                />
                            </div>
                        </div>
                        <div className="md:col-span-5 order-1 md:order-2">
                            <h3 className="text-xl font-bold mb-6 text-neutral-900 dark:text-white uppercase tracking-tight">02. Heuristic Audit</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                                I audited the V1 flow and identified systemic flaws that eroded trust. We weren't just fixing bugs; we were designing against 'Hardware Blindness'.
                            </p>
                            <div className="p-6 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-2xl">
                                <h4 className="font-bold text-red-600 dark:text-red-400 flex items-center gap-2 mb-2">
                                    <Eye size={18} /> The Eureka Moment
                                </h4>
                                <p className="text-neutral-700 dark:text-neutral-300 italic text-sm">
                                    "One user covered the wrong lens entirely. The app stayed on 'Initializing' while they waited. We were asking for precision without giving any guidance."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold mb-6 text-neutral-900 dark:text-white uppercase tracking-tight text-center">03. The Broken Loop</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-12 text-center leading-relaxed">
                            Mapping the emotional journey revealed that our 'leaky bucket' wasn't just in the onboarding, but in the lack of long-term value for returning users.
                        </p>
                        <div className="p-8 bg-neutral-100 dark:bg-neutral-900 rounded-[2rem] border border-neutral-200 dark:border-neutral-800 text-center">
                            <Users className="mx-auto mb-4 text-neutral-400" size={48} />
                            <p className="text-neutral-500 italic">"I completed the scan. Now what? Is 72 good? Do I come back tomorrow?"</p>
                        </div>
                    </div>
                </section>

                <Divider />

                {/* Section 3: Goals */}
                <section className="mb-24">
                    <SectionTitle number="04" title="The Strategic Pivot" />
                    <div className="grid md:grid-cols-3 gap-6">
                        <GoalCard
                            number="1"
                            title="Visual Guidance"
                            desc="Show, don't tell. We used video loops to show exactly where to place the finger."
                        />
                        <GoalCard
                            number="2"
                            title="Real-time Trust"
                            desc="Sync detection with haptic pulses. If the app is working, the user must feel it."
                        />
                        <GoalCard
                            number="3"
                            title="Instant Meaning"
                            desc="Raw data is not insight. We added medical benchmarks to make results actionable."
                        />
                    </div>
                </section>

                <Divider />

                {/* Section 4: Design Execution */}
                <section className="mb-24">
                    <SectionTitle number="05" title="Execution" id="execution" />

                    <div className="mt-16">
                        <p className="text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl leading-relaxed">
                            We redesigned the feedback loop so users could feel the heart rate detection in real-time.
                        </p>
                        <ScreenFlow
                            steps={[
                                {
                                    label: "Step 01",
                                    title: "Visual Onboarding",
                                    desc: "Animations replaced text to show finger placement, reducing 'False Starts' by 40%.",
                                    image: ASSETS.projects.heartRate.onboarding
                                },
                                {
                                    label: "Step 02",
                                    title: "Signal Lock & Feedback",
                                    desc: "Syncing heart pulses and haptics build trust during the 15-second scan.",
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
                                    desc: "Benchmarks like 'Normal for your age' turned numbers into insights.",
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
                                    We analyzed lens luminosity. If the sensor missed the "red-shift" of blood flow, we switched lenses or showed a warning.
                                </p>
                            </div>
                            <div className="p-8 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800">
                                <h4 className="font-bold text-neutral-900 dark:text-white mb-4">The Haptic Strategy</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    We used haptic patterns that mimicked a natural heartbeat, making the tool feel medical-grade.
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
                                    Health tech must work for everyone. We optimized for different skin tones and added non-visual cues.
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
                                <QuoteBlock quote="The goal was to make it reliable for any person, on any phone, anywhere." />
                            </div>
                        </div>
                    </div>
                </section>

                <Divider />

                {/* Section 5: Impact */}
                <section className="mb-24">
                    <SectionTitle number="06" title="Impact & Learnings" id="impact" />

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
                                Validating "Invisible Health Tracking" as a core product vision.
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
