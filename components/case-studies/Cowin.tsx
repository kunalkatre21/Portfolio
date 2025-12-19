import React, { useState } from 'react';
import { AlertCircle, Lock, Search, CheckCircle, Smartphone, Globe, Shield, Activity, Database, MapPin, Zap, TrendingUp, Users, Clock } from 'lucide-react';
import { InsightCard, GoalCard, StatCard, DesignHighlight, SectionTitle, QuoteBlock, BrowserWindow, MobileShell, Divider, TextHighlight, CodeBlock, CaseMeta, HeroCarousel, ZoomableImage, FlowBrowser, FunnelItem, TableOfContents } from './Shared';
import { ASSETS } from '../../data';
import { motion, AnimatePresence } from 'framer-motion';

export const CowinCaseStudy: React.FC = () => {


    return (
        <div className="animate-fade-in pb-20 relative bg-white dark:bg-[#050505]">
            <TableOfContents
                items={[
                    { id: 'challenge', label: 'Challenge', number: '01' },
                    { id: 'discovery', label: 'Discovery', number: '02' },
                    { id: 'principles', label: 'Principles', number: '03' },
                    { id: 'execution', label: 'Execution', number: '04' },
                    { id: 'impact', label: 'Impact', number: '05' }
                ]}
            />
            {/* Full Width Background Hero */}
            <HeroCarousel
                images={[
                    ASSETS.projects.cowin.cover,
                    "https://ik.imagekit.io/vtitfjbr6/cowin/homepage-card-images/form2.png",
                    "https://ik.imagekit.io/vtitfjbr6/cowin/homepage-card-images/form4.png",
                    "https://ik.imagekit.io/vtitfjbr6/cowin/homepage-card-images/form1.png",
                    "https://ik.imagekit.io/vtitfjbr6/cowin/homepage-card-images/form3.png"
                ]}
            />

            {/* Content */}
            <div className="relative z-10 pt-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Health Tech</span>
                        <span className="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white px-2 py-0.5 rounded text-xs font-bold">2021</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-[0.9] text-neutral-900 dark:text-white tracking-tight">
                        Co-WIN: <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Scaling Trust.</span>
                    </h1>
                </div>

                <CaseMeta
                    role="Sole Product Designer"
                    team="4 Engineers, 1 PM"
                    timeline="Launched in 24 Hours, Iterated over 2 Months"
                    overview="Built booking flow for 20M users. Replaced anxiety with trust during crisis. Turned complex government API into simple consumer experience."
                />

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
                    <StatCard value="2Cr+" label="Certificates" subLabel="Served to citizens" />
                    <StatCard value="#1" label="Health App" subLabel="Play Store / Google Distinction" />
                    <StatCard value="20M+" label="Downloads" subLabel="Across 1.4B Population" />
                    <StatCard value="4.8" label="Rating" subLabel="User Trust Score" />
                </div>

                {/* Section 1: The Setup */}
                <section className="mb-24">
                    <SectionTitle number="01" title="The Challenge" id="challenge" />

                    <div className="grid md:grid-cols-1 gap-12 mb-12 max-w-4xl">
                        <div>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 text-lg">
                                India needed to vaccinate 1.4B people. Government released Co-WIN APIs. Few trusted apps existed.
                            </p>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                                Eka.Care's goal: Build consumer app on APIs to capture market.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">User Anxiety</h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <InsightCard
                            icon={<AlertCircle />}
                            title="Scarcity"
                            quote="Will I ever find a slot for my elderly parents? I've been trying for days."
                            color="red"
                        />
                        <InsightCard
                            icon={<Shield />}
                            title="Legitimacy"
                            quote="Is this third-party app even legitimate? Is it safe to give my Aadhar number?"
                            color="blue"
                        />
                        <InsightCard
                            icon={<Activity />}
                            title="Information"
                            quote="How do I know this data is real and not a waste of my time?"
                            color="orange"
                        />
                    </div>
                </section>

                <Divider />

                {/* Section 2: Discovery */}
                <section className="mb-24">
                    <SectionTitle number="02" title="Research" id="discovery" />
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                        I read API docs. Deconstructed Co-WIN APIs to find opportunities.
                    </p>

                    <div className="grid md:grid-cols-12 gap-12 items-start mb-20">
                        {/* Left Card: The Hack */}
                        <div className="md:col-span-6 h-full">
                            <div className="bg-blue-50/50 dark:bg-blue-900/10 p-10 rounded-[2.5rem] border border-blue-100 dark:border-blue-800/50 h-full flex flex-col justify-center relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                                        <MapPin className="text-white" size={28} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-neutral-900 dark:text-white">The "Search Near Me" Hack</h4>
                                </div>
                                <div className="space-y-6">
                                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed italic">
                                        "APIs only supported search by PIN or District. No 'Search Near Me'."
                                    </p>
                                    <div className="p-5 bg-white dark:bg-black/40 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                                        <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
                                            <strong>Solution:</strong> Used device location to get PIN code, then queried API. Created one-tap experience competitors lacked.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: API Constraints */}
                        <div className="md:col-span-6">
                            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.3em] mb-8">API Constraints</h3>
                            <div className="space-y-4">
                                <div className="p-6 rounded-2xl bg-white dark:bg-[#0d0d0d] border border-neutral-200 dark:border-neutral-800 shadow-xl group hover:border-blue-500/30 transition-colors">
                                    <div className="text-[10px] font-bold text-neutral-500 mb-3 uppercase tracking-widest flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        Metadata APIs
                                    </div>
                                    <div className="space-y-2 font-mono text-xs">
                                        <div className="flex justify-between items-center gap-3">
                                            <div><span className="text-blue-500 font-bold">GET</span> <span className="text-neutral-700 dark:text-neutral-300">/admin/location/states</span></div>
                                            <span className="text-neutral-400 dark:text-neutral-600 text-[10px]">Get states</span>
                                        </div>
                                        <div className="flex justify-between items-center gap-3">
                                            <div><span className="text-blue-500 font-bold">GET</span> <span className="text-neutral-700 dark:text-neutral-300">/admin/location/districts/&#123;id&#125;</span></div>
                                            <span className="text-neutral-400 dark:text-neutral-600 text-[10px]">Get list of districts</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white dark:bg-[#0d0d0d] border border-neutral-200 dark:border-neutral-800 shadow-xl group hover:border-blue-500/30 transition-colors">
                                    <div className="text-[10px] font-bold text-neutral-500 mb-3 uppercase tracking-widest flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        Appointment Availability APIs
                                    </div>
                                    <div className="space-y-3 font-mono text-[10px]">
                                        <div className="flex justify-between items-center border-b border-neutral-100 dark:border-neutral-800/50 pb-2">
                                            <div><span className="text-blue-500 font-bold">GET</span> <span className="text-neutral-700 dark:text-neutral-300">/sessions/public/findByPin</span></div>
                                            <span className="text-neutral-400 dark:text-neutral-600">By PIN</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-neutral-100 dark:border-neutral-800/50 pb-2">
                                            <div><span className="text-blue-500 font-bold">GET</span> <span className="text-neutral-700 dark:text-neutral-300">/centers/public/findByLatLong</span></div>
                                            <span className="text-neutral-400 dark:text-neutral-600">[Draft]</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-neutral-100 dark:border-neutral-800/50 pb-2">
                                            <div><span className="text-blue-500 font-bold">GET</span> <span className="text-neutral-700 dark:text-neutral-300">/sessions/public/calendarByPin</span></div>
                                            <span className="text-neutral-400 dark:text-neutral-600">7 Days</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div><span className="text-blue-500 font-bold">GET</span> <span className="text-neutral-700 dark:text-neutral-300">/sessions/public/calendarByDistrict</span></div>
                                            <span className="text-neutral-400 dark:text-neutral-600">7 Days</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white dark:bg-[#0d0d0d] border border-neutral-200 dark:border-neutral-800 shadow-xl group hover:border-blue-500/30 transition-colors">
                                    <div className="text-[10px] font-bold text-neutral-500 mb-3 uppercase tracking-widest flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                        Certificate APIs
                                    </div>
                                    <div className="space-y-2 font-mono text-xs">
                                        <div className="flex justify-between items-center gap-3">
                                            <div><span className="text-blue-500 font-bold">GET</span> <span className="text-neutral-700 dark:text-neutral-300">/certificate/public/download</span></div>
                                            <span className="text-neutral-400 dark:text-neutral-600 text-[10px]">PDF Download</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Journey Map Section */}
                    <div className="mb-20">
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12 max-w-3xl">
                            Mapped booking experience to find anxiety points. This "Anxiety Map" guided our product flow simplification.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-white dark:bg-[#080808]"
                        >
                            <ZoomableImage src="https://ik.imagekit.io/vtitfjbr6/cowin/fig2-failure-map.png" alt="The Anxiety Map" className="w-full" />
                        </motion.div>
                        <p className="text-[10px] text-neutral-500 mt-6 text-center uppercase tracking-[0.3em] font-bold">Fig 2: The Failure Map & Guiding Star</p>
                    </div>
                </section>

                <Divider />

                {/* Section 3: Pillars */}
                <section className="mb-24">
                    <SectionTitle number="03" title="Design Principles" id="principles" />
                    <div className="grid md:grid-cols-3 gap-6">
                        <GoalCard
                            number="1"
                            title="Transparency"
                            desc="Show everything. Trust needs bad news too. Showed 'No Slots' clearly instead of hiding."
                        />
                        <GoalCard
                            number="2"
                            title="Expectations"
                            desc="Never overpromise. Be explicit about data freshness. Stop users chasing 'ghost' slots."
                        />
                        <GoalCard
                            number="3"
                            title="Confirmation"
                            desc="Flow end must be definitive 'contract'. Users should screenshot it as proof."
                        />
                    </div>
                </section>

                <Divider />

                {/* Section 4: Design Execution */}
                <section className="mb-24">
                    <SectionTitle number="04" title="Execution" id="execution" />

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Flow Architecture</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
                            Mapped primary journeys to ensure feasibility while building trust.
                        </p>
                        <div className="rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-white dark:bg-[#080808]">
                            <ZoomableImage src="https://ik.imagekit.io/vtitfjbr6/cowin/flow-diagram.png" alt="Flow Diagram" className="w-full" />
                        </div>
                    </div>

                    <div className="mt-24">
                        <FlowBrowser
                            flows={[
                                {
                                    id: 'booking',
                                    label: 'Book Slot',
                                    description: 'High-anxiety flow. Optimized for speed and clarity when slots were scarce.',
                                    steps: [
                                        {
                                            title: 'Step 01: Beneficiary Overview',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/booking-flow/screen01.png",
                                                    rationale: 'Centered "Book" button so users can start 15-minute session when ready.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Step 02: Proximity Search',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/booking-flow/screen02.png",
                                                    rationale: 'Location auto-fills nearest centers. Saves users from manual PIN searches during rush.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Step 03: Advanced Filtering',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/booking-flow/screen03.png",
                                                    rationale: 'One-tap age and dose filters help users find right center instantly. No scanning through noise.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Step 04: Smart Suggestion',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/booking-flow/screen04.png",
                                                    rationale: 'Auto-selecting earliest slot saves seconds. Rescheduling stays at bottom to avoid WebView header bugs.'
                                                    // Technical Constraint: The Reschedule CTA was kept in the stable bottom footer to avoid 
                                                    // safe-area collision issues in the hybrid ios/android WebView wrapper.
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Step 05: Slot Rescheduling',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/booking-flow/screen05.png",
                                                    rationale: 'Fast calendar grid and urgency alerts help users pick new slot quickly as availability changes.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Step 06: Success State',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/booking-flow/screen06.png",
                                                    rationale: '"View Slip" button works offline. Users always have booking proof, even if network fails at clinic.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'download',
                                    label: 'Download Certificate',
                                    description: 'Zero-friction flow for travel and vaccination proof.',
                                    steps: [
                                        {
                                            title: 'Step 01: Certificate Discovery',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/download-certificate/form2.png",
                                                    rationale: 'Auto-detected certificates for all family members. Prompted users via quick-action bottom sheet.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Step 02: Medical Vault',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/download-certificate/form1.png",
                                                    rationale: 'Certificates saved directly to user\'s secure medical vault. No manual PDF management. Long-term access.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'passport',
                                    label: 'Link Passport',
                                    description: 'Crucial for international travel. Focused on data precision.',
                                    steps: [
                                        {
                                            title: 'Travel Certificate Integration',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/travel-certificate/form1.png?updatedAt=1766091622576",
                                                    rationale: 'Integrated passport-linking for international travel. Users authenticate and generate verifiable travel certificate in one tap.'
                                                }
                                            ],
                                            /* iterations: [
                                                { label: 'Live Validation', desc: 'Real-time check for passport format before submission.' },
                                                { label: 'Beneficiary Selection', desc: 'Clear mapping of passport to correct family member.' }
                                            ] */
                                        }
                                    ]
                                }
                            ]
                            }
                        />
                    </div>
                </section>

                <Divider />

                {/* Section 5: Impact */}
                <section className="mb-24">
                    <SectionTitle number="05" title="Impact & Scaling" id="impact" />

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                                We didn't just wrap government APIs. We built a bridge for millions to move from pandemic anxiety to confirmed appointment relief.
                            </p>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                                Impact measured in trust, not uptime. Families relied on us for critical health documents during crisis peak.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <StatCard value="#1" label="App Store Rank" subLabel="in Health & Fitness" />
                            <StatCard value="1.4L+" label="Peak Throughput" subLabel="Certificates / Day" />
                            <StatCard value="~8K" label="Organic Installs" subLabel="Daily at peak" />
                            <StatCard value="2 Cr+" label="Total Downloads" subLabel="Vaccine Certificates" />
                        </div>
                    </div>

                    <QuoteBlock quote="In a crisis, clarity is more important than minimalism. We didn't build a booking tool; we built a peace-of-mind engine." />

                    <div className="mb-24">
                        <SectionTitle title="Strategic Learnings" subtitle="Reflections on building high-stakes health infrastructure during a pandemic." />
                        <div className="grid md:grid-cols-2 gap-8">
                            <InsightCard
                                icon={<CheckCircle className="text-green-500" />}
                                title="Systems Over UI"
                                quote="Biggest win wasn't pretty buttons, but 'Search Near Me' logic to bypass API limits. Engineering around constraints creates best UX."
                                color="green"
                            />
                            <InsightCard
                                icon={<CheckCircle className="text-green-500" />}
                                title="Transparency Builds LTV"
                                quote="Showing 'No Slots' clearly built long-term trust. Users knew we gave truth. Converted them to long-term health vault users."
                                color="green"
                            />
                        </div>
                    </div>

                    {/* Future Vision - Scaling Legacy */}
                    <div className="p-12 bg-blue-600 rounded-[3rem] text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
                        <div className="relative z-10 max-w-3xl">
                            <h3 className="text-4xl font-bold mb-6 flex items-center gap-4">
                                <Globe className="text-blue-200" /> Global Scaling
                            </h3>
                            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                                Co-WIN integration wasn't just 24-hour sprint. It was foundation for Eka.care's growth into India's leading UHI platform.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-white">Universal Health Interface</h4>
                                    <p className="text-blue-100/70 text-sm">Using same "Slot Search" architecture to help users find lab tests and doctor consultations nationwide.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-white">Smart Medical Vault</h4>
                                    <p className="text-blue-100/70 text-sm">Expanding certificate download into ABDM-compliant health locker for 30M+ users.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};