import React from 'react';
import { AlertCircle, Lock, Search, CheckCircle, Smartphone, Globe, Shield, Activity, Database, MapPin, Zap, TrendingUp, Users, Clock } from 'lucide-react';
import { InsightCard, GoalCard, StatCard, DesignHighlight, SectionTitle, QuoteBlock, BrowserWindow, MobileShell, Divider, TextHighlight, CodeBlock, CaseMeta, HeroCarousel, ZoomableImage, FlowBrowser } from './Shared';
import { ASSETS } from '../../data';
import { motion } from 'framer-motion';

export const CowinCaseStudy: React.FC = () => {


    return (
        <div className="animate-fade-in pb-20 relative bg-white dark:bg-[#050505]">
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
                    overview="I designed the booking flow for 20 million users. I replaced anxiety with trust during a national crisis, transforming a complex government API into a seamless consumer experience."
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
                    <SectionTitle number="01" title="The Challenge" />

                    <div className="grid md:grid-cols-1 gap-12 mb-12 max-w-4xl">
                        <div>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 text-lg">
                                In 2021, India needed to vaccinate 1.4 billion people. The government released the Co-WIN APIs and few trusted consumer app existed.
                            </p>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                                Eka.Care's goal: Build a consumer app on top of the APIs to capture the market.
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
                    <SectionTitle number="02" title="Research" />
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                        I started by reading the API documentation. I deconstructed the Co-WIN APIs to find opportunities.
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
                                        "The APIs only supported search by PIN or District. They lacked 'Search Near Me'."
                                    </p>
                                    <div className="p-5 bg-white dark:bg-black/40 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                                        <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
                                            <strong>Solution:</strong> I used the device location to fetch the PIN code, then queried the API. This created a one-tap experience competitors lacked.
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
                            I mapped the booking experience to identify high-anxiety failure points. This "Anxiety Map" became our north star for simplifying the product flow.
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
                    <SectionTitle number="03" title="Design Principles" />
                    <div className="grid md:grid-cols-3 gap-6">
                        <GoalCard
                            number="1"
                            title="Transparency"
                            desc="Show everything. Trust requires bad news too. We showed 'No Slots' clearly instead of hiding it."
                        />
                        <GoalCard
                            number="2"
                            title="Expectations"
                            desc="Never overpromise. Be explicit about data freshness to prevent frustration from chasing 'ghost' slots."
                        />
                        <GoalCard
                            number="3"
                            title="Confirmation"
                            desc="The end of the flow must be a definitive 'contract'. Users should be able to screenshot it as proof."
                        />
                    </div>
                </section>

                <Divider />

                {/* Section 4: Design Execution */}
                <section className="mb-24">
                    <SectionTitle number="04" title="Execution" />

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Flow Architecture</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
                            I mapped the primary journeys to ensure feasibility while maintaining trust.
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
                                    description: 'The most high-anxiety flow. Optimized for speed and clarity under slot scarcity.',
                                    steps: [
                                        {
                                            title: 'Step 01: Beneficiary Overview',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/booking-flow/screen01.png",
                                                    rationale: 'We centered the "Book" button so users can start their 15-minute session the moment they are ready.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Step 02: Proximity Search',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/booking-flow/screen02.png",
                                                    rationale: 'Location data auto-fills the nearest centers, saving users from manual Pincode searches during a rush.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Step 03: Advanced Filtering',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/booking-flow/screen03.png",
                                                    rationale: 'One-tap filters for age and dose help users find the right center instantly without scanning through noise.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Step 04: Smart Suggestion',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/booking-flow/screen04.png",
                                                    rationale: 'Auto-selecting the earliest slot saves precious seconds. Rescheduling stays at the bottom to avoid header bugs in the app\'s WebView container.'
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
                                                    rationale: 'A fast calendar grid and urgency alerts help users pick a new slot quickly as availability changes.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Step 06: Success State',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/booking-flow/screen06.png",
                                                    rationale: 'The "View Slip" button works offline so users always have proof of booking, even if the network fails at the clinic.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'download',
                                    label: 'Download Certificate',
                                    description: 'A zero-friction utility flow for travel and proof-of-vaccination.',
                                    steps: [
                                        {
                                            title: 'Step 01: Certificate Discovery',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/download-certificate/form2.png",
                                                    rationale: 'We automatically detected available certificates for all family members and prompted the user via a quick-action bottom sheet.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Step 02: Medical Vault',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/download-certificate/form1.png",
                                                    rationale: 'Instead of manual PDF management, certificates were saved directly into the user\'s secure medical vault for long-term access.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'passport',
                                    label: 'Link Passport',
                                    description: 'Crucial for international travel. Focused on data precision and validation.',
                                    steps: [
                                        {
                                            title: 'Travel Certificate Integration',
                                            versions: [
                                                {
                                                    label: 'Final Design',
                                                    image: "https://ik.imagekit.io/vtitfjbr6/cowin/travel-certificate/form1.png?updatedAt=1766091622576",
                                                    rationale: 'To facilitate international travel, we integrated a direct passport-linking feature that allows users to authenticate and generate a globally verifiable travel certificate in one tap.'
                                                }
                                            ],
                                            /* iterations: [
                                                { label: 'Live Validation', desc: 'Real-time check for passport format before submission.' },
                                                { label: 'Beneficiary Selection', desc: 'Clear mapping of passport to the correct family member.' }
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
                    <SectionTitle number="05" title="Impact" />
                    <p className="text-neutral-600 dark:text-neutral-400 mb-12 text-center max-w-2xl mx-auto">
                        The approach worked. By solving for anxiety, we became the most trusted vaccination tool in the country.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        <div className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl text-center">
                            <div className="text-3xl font-bold text-primary mb-1">#1</div>
                            <div className="text-xs font-bold uppercase text-neutral-500">App Rank</div>
                        </div>
                        <div className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl text-center">
                            <div className="text-3xl font-bold text-primary mb-1">34%</div>
                            <div className="text-xs font-bold uppercase text-neutral-500">Market Share</div>
                        </div>
                        <div className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl text-center">
                            <div className="text-3xl font-bold text-primary mb-1">2.8L+</div>
                            <div className="text-xs font-bold uppercase text-neutral-500">Daily Active</div>
                        </div>
                        <div className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl text-center">
                            <div className="text-3xl font-bold text-primary mb-1">4.8</div>
                            <div className="text-xs font-bold uppercase text-neutral-500">Trust Score</div>
                        </div>
                    </div>

                    <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-3xl">
                        <h3 className="font-bold text-xl mb-6 text-neutral-900 dark:text-white">Key Learnings</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Clarity &gt; Minimalism</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    In a crisis, the "best" design isn't the cleanest. Timestamps and detailed error messages built trust.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Artifacts Lead Alignment</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    The anxiety journey map aligned the cross-functional team.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">System Over Interface</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    The biggest win was the backend automation (auto-fetch), not the UI.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Constraints are Opportunities</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    API limits forced us to build "Search Near Me"—our key differentiator.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};