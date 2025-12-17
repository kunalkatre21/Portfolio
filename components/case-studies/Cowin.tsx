import React from 'react';
import { AlertCircle, Lock, Search, CheckCircle, Smartphone, Globe, Shield, Activity, Database, MapPin, Zap, TrendingUp, Users, Clock } from 'lucide-react';
import { InsightCard, GoalCard, StatCard, DesignHighlight, SectionTitle, QuoteBlock, BrowserWindow, MobileShell, Divider, TextHighlight, CodeBlock, CaseMeta } from './Shared';
import { ASSETS } from '../../data';
import { motion } from 'framer-motion';

export const CowinCaseStudy: React.FC = () => {
  
  const mermaidCode = `flowchart TD
    A[User Opens App] --> B[Primary Goal?]
    B -->|Find Slot| C[Search Flow]
    B -->|Get Certificate| D[Download Flow]
    
    %% Search Flow
    C --> E[Location Input]
    E --> F[Search Method?]
    F -->|By PIN| G[Enter PIN Code]
    F -->|Near Me| H[Get Device Location -> Auto-fill PIN]
    G --> I[Search API Call]
    H --> I
    I --> J[Display Results with Availability Status]`;

  return (
    <div className="animate-fade-in pb-20 relative bg-white dark:bg-[#050505]">
        {/* Full Width Background Hero */}
        <div className="absolute top-0 left-0 w-full h-[600px] z-0 overflow-hidden pointer-events-none">
             <img 
                src={ASSETS.projects.cowin.hero} 
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
                    <span className="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white px-2 py-0.5 rounded text-xs font-bold">2021</span>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-[0.9] text-neutral-900 dark:text-white tracking-tight">
                    Co-WIN: <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Scaling Trust.</span>
                </h1>
            </div>

            <CaseMeta 
                role="Sole Product Designer"
                team="4 Engineers, 0 PMs"
                timeline="24 Hours (MVP)"
                overview="I designed the booking flow for 20 million users. I replaced anxiety with trust during a national crisis."
            />

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
                <StatCard value="2Cr+" label="Certificates" />
                <StatCard value="#1" label="Search Rank" subLabel="Google" />
                <StatCard value="20M+" label="Downloads" />
                <StatCard value="4.8" label="Rating" />
            </div>

            {/* Section 1: The Setup */}
            <section className="mb-24">
                <SectionTitle number="01" title="The Challenge" />
                
                <div className="grid md:grid-cols-1 gap-12 mb-12 max-w-4xl">
                    <div>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 text-lg">
                            In 2021, India needed to vaccinate 1.4 billion people. The government released the Co-WIN APIs, but no consumer app existed.
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
                        title="Availability"
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
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-5">
                        <SectionTitle number="02" title="Discovery" />
                        <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                            I started by reading the API documentation. I deconstructed the Co-WIN APIs to find opportunities.
                        </p>
                        
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 mb-6">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="text-blue-600" />
                                <h4 className="font-bold text-neutral-900 dark:text-white">The "Search Near Me" Hack</h4>
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                The APIs only supported search by PIN or District. They lacked "Search Near Me". 
                                <br/><br/>
                                <strong>Solution:</strong> I used the device location to fetch the PIN code, then queried the API. This created a one-tap experience competitors lacked.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <h3 className="font-bold text-neutral-900 dark:text-white mb-4">API Constraints</h3>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-mono text-xs">
                                <div className="text-neutral-500 mb-2 uppercase font-bold tracking-widest">Metadata APIs</div>
                                <div className="space-y-2">
                                    <div className="flex gap-2"><span className="text-blue-500 font-bold">GET</span> /v2/admin/location/states</div>
                                    <div className="flex gap-2"><span className="text-blue-500 font-bold">GET</span> /v2/admin/location/districts/&#123;id&#125;</div>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-mono text-xs">
                                <div className="text-neutral-500 mb-2 uppercase font-bold tracking-widest">Appointment APIs</div>
                                <div className="space-y-2">
                                    <div className="flex gap-2"><span className="text-blue-500 font-bold">GET</span> /v2/appointment/sessions/findByPin</div>
                                    <div className="flex gap-2"><span className="text-blue-500 font-bold">GET</span> /v2/appointment/sessions/calendarByPin</div>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-mono text-xs">
                                <div className="text-neutral-500 mb-2 uppercase font-bold tracking-widest">Certificate APIs</div>
                                <div className="space-y-2">
                                    <div className="flex gap-2"><span className="text-green-500 font-bold">POST</span> /v2/certificate/generate</div>
                                    <div className="flex gap-2"><span className="text-blue-500 font-bold">GET</span> /v2/certificate/status</div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                        I mapped the primary journeys to ensure feasibility while maintaining trust.
                    </p>
                    <CodeBlock code={mermaidCode} language="mermaid" />
                </div>

                <div className="mt-24 space-y-24">
                    {/* Flow 1 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <MobileShell>
                                <img src={ASSETS.projects.cowin.bookingFlow} className="w-full" alt="Booking Flow" />
                            </MobileShell>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">Flow 01</div>
                            <h3 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">Booking a Slot</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                                Slot booking caused the most anxiety. I designed the flow to calm the user.
                            </p>
                            
                            <div className="space-y-6">
                                <DesignHighlight 
                                    title="No Dead Ends" 
                                    desc="We embraced 'bad news'. Clearly marking centers with 'No Slots' built trust." 
                                    icon={<CheckCircle size={20}/>} 
                                />
                                <DesignHighlight 
                                    title="Booking Buffer" 
                                    desc="Added a 'booking in progress' state to hold slots, reducing failures by 87%." 
                                    icon={<Clock size={20}/>} 
                                />
                                <DesignHighlight 
                                    title="Definitive Contract" 
                                    desc="The confirmation screen listed every detail: Hospital, Time, Name. Users could screenshot it as proof." 
                                    icon={<Shield size={20}/>} 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Flow 2 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">Flow 02</div>
                            <h3 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">Downloading Certificates</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                                I designed two flows to get certificates with zero friction.
                            </p>
                            
                            <div className="grid gap-4">
                                <div className="bg-white dark:bg-neutral-900/30 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800">
                                    <h5 className="font-bold text-neutral-900 dark:text-white mb-1">Explicit Path</h5>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">For users who know what they need. Minimal form fields.</p>
                                </div>
                                <div className="bg-white dark:bg-neutral-900/30 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800">
                                    <h5 className="font-bold text-neutral-900 dark:text-white mb-1">Automated Path</h5>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">System detects eligible users, fetches certificates, and notifies them.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <MobileShell>
                                {/* Cropped top part of image using negative margin */}
                                <img src={ASSETS.projects.cowin.downloadFlow} className="w-full -mt-24" alt="Download Flow" />
                            </MobileShell>
                        </div>
                    </div>
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