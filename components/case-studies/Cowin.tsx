import React from 'react';
import { AlertCircle, Lock, Search, CheckCircle, Smartphone, Globe, Shield, Activity, Database, MapPin, Zap, TrendingUp, Users, Clock } from 'lucide-react';
import { InsightCard, GoalCard, StatCard, DesignHighlight, SectionTitle, QuoteBlock, BrowserWindow, MobileShell, Divider, TextHighlight, CodeBlock } from './Shared';
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
    <div className="animate-fade-in pb-20">
        {/* Hero Section */}
        <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
                <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Health Tech</span>
                <span className="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white px-2 py-0.5 rounded text-xs font-bold">2021</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[0.9] text-neutral-900 dark:text-white tracking-tight">
                Designing for a <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Nation in Crisis.</span>
            </h1>
            
            <div className="flex flex-col md:flex-col gap-8 md:gap-16 mb-16">
                <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
                     I led the design for a platform that navigated extreme public anxiety and technical chaos to facilitate over <TextHighlight>20 million</TextHighlight> vaccine certificate downloads.
                </p>
                <div className="flex-1 grid grid-cols-2 gap-4">
                    <StatCard value="2Cr+" label="Certificates" />
                    <StatCard value="#1" label="Search Rank" subLabel="Google" />
                </div>
            </div>

            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800"
            >
                <img src={ASSETS.projects.cowin.hero} alt="Co-WIN Interface" className="w-full object-cover" />
            </motion.div>
        </div>

        {/* Section 1: The Setup */}
        <section className="max-w-4xl mx-auto">
            <SectionTitle number="01" title="The Setup: A High-Stakes Mandate" />
            
            <div className="grid md:grid-cols-1 gap-12 mb-12">
                <div>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 text-lg">
                        In 2021, India faced a monumental challenge: vaccinating its population amidst a devastating pandemic wave. The government released the Co-WIN APIs, creating a sudden, urgent opportunity.
                    </p>
                     <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                        The business goal for Eka.Care was clear: leverage these APIs to build a superior, trustworthy public utility that could capture a massive, anxious user base.
                    </p>
                </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">The User's Reality: A State of Panic</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                 <InsightCard 
                    icon={<AlertCircle />}
                    title="Availability Anxiety"
                    quote="Will I ever find a slot for my elderly parents? I've been trying for days."
                    color="red"
                />
                 <InsightCard 
                    icon={<Shield />}
                    title="Trust & Legitimacy"
                    quote="Is this third-party app even legitimate? How do I know it's safe to give them my Aadhar number?"
                    color="blue"
                />
                 <InsightCard 
                    icon={<Activity />}
                    title="Information Gaps"
                    quote="How do I know this information is real and not a waste of my time?"
                    color="orange"
                />
            </div>
            
             <div className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-2xl border-l-4 border-purple-500">
                <h4 className="font-bold text-neutral-900 dark:text-white mb-2 text-lg">My Role: Designer as a De-risking Agent</h4>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                     As the <TextHighlight>Sole Designer</TextHighlight> on this initiative, I was tasked with creating a functional UX under an extreme "one-day delivery mode" timeline. With no PM, my role expanded to defining requirements, analyzing technical constraints, and creating a clear plan of action.
                </p>
            </div>
        </section>

        <Divider />

        {/* Section 2: Discovery */}
        <section className="max-w-6xl mx-auto">
             <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-5">
                    <SectionTitle number="02" title="Discovery" />
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                        My discovery process started with the technology itself. I deconstructed the Co-WIN APIs to understand our exact capabilities.
                    </p>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <MapPin className="text-blue-600" />
                            <h4 className="font-bold text-neutral-900 dark:text-white">The "Search Near Me" Insight</h4>
                        </div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            While APIs provided search by PIN and District, I identified a critical gap: no single API for "search near me". 
                            <br/><br/>
                            <strong>Solution:</strong> Request device location -> Programmatically determine Pincode -> Feed into API. This created a "one-tap" search experience competitors lacked.
                        </p>
                    </div>
                </div>
                <div className="md:col-span-7">
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Deconstructing Technical Constraints</h3>
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
        <section className="max-w-6xl mx-auto">
             <SectionTitle number="03" title="The Three Pillars of Trust" />
             <div className="grid md:grid-cols-3 gap-6">
                 <GoalCard 
                    number="1" 
                    title="Radical Transparency" 
                    desc="Show everything. To build trust, we had to be more comprehensive than official sources, even if it meant showing 'bad news' like no slots." 
                />
                 <GoalCard 
                    number="2" 
                    title="Honest Expectations" 
                    desc="Never overpromise. Be explicit about data freshness to prevent frustration from chasing 'ghost' slots." 
                />
                 <GoalCard 
                    number="3" 
                    title="Anxiety-Proof Confirmation" 
                    desc="The end of the flow must be a definitive 'contract' containing every detail, leaving no room for doubt." 
                />
             </div>
        </section>

        <Divider />

        {/* Section 4: Design Execution */}
        <section className="max-w-6xl mx-auto">
            <SectionTitle number="04" title="Design & Execution" />
            
            <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Flow Architecture</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    I mapped all primary journeys to ensure technical feasibility while maintaining our trust principles.
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
                        <h3 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">Booking a Vaccination Slot</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                            The slot booking process was the epicenter of user anxiety. My goal was to create a flow that was not only functional but actively worked to calm the user.
                        </p>
                        
                        <div className="space-y-6">
                             <DesignHighlight 
                                title="Proactive Filtering" 
                                desc="We embraced 'bad news'. Clearly marking centers with no slots upheld our transparency principle." 
                                icon={<CheckCircle size={20}/>} 
                            />
                             <DesignHighlight 
                                title="Automated Slot Reservation" 
                                desc="We created an intermediate 'booking in progress' buffer to hold slots, reducing booking failures by 87%." 
                                icon={<Clock size={20}/>} 
                            />
                             <DesignHighlight 
                                title="Anxiety-Proof Contract" 
                                desc="The final screen contained every critical detail: Hospital, Time, Beneficiary. Users could screenshot this for their records." 
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
                            I designed two distinct "smart" flows to get users their certificate as frictionlessly as possible.
                        </p>
                        
                        <div className="grid gap-4">
                             <div className="bg-white dark:bg-neutral-900/30 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800">
                                 <h5 className="font-bold text-neutral-900 dark:text-white mb-1">Explicit Path</h5>
                                 <p className="text-sm text-neutral-600 dark:text-neutral-400">For users who know what they need. Minimal form fields with clear progress indicators.</p>
                             </div>
                             <div className="bg-white dark:bg-neutral-900/30 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800">
                                 <h5 className="font-bold text-neutral-900 dark:text-white mb-1">Automated Path</h5>
                                 <p className="text-sm text-neutral-600 dark:text-neutral-400">System proactively detects eligible users and fetches certificates in the background, sending a notification when ready.</p>
                             </div>
                        </div>
                    </div>
                     <div className="flex justify-center">
                        <MobileShell>
                            <img src={ASSETS.projects.cowin.downloadFlow} className="w-full" alt="Download Flow" />
                        </MobileShell>
                    </div>
                </div>
            </div>
        </section>

        <Divider />

        {/* Section 5: Impact */}
        <section className="max-w-5xl mx-auto">
            <SectionTitle number="05" title="Impact: Dominating the Market" />
            <p className="text-neutral-600 dark:text-neutral-400 mb-12 text-center max-w-2xl mx-auto">
                Our principle-led approach was a monumental success. By focusing relentlessly on user anxiety, we built one of the most trusted vaccination tools in the country.
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
                             In a crisis, the "best" design isn't the cleanest. Showing "bad news" with timestamps increased trust more than hiding information.
                         </p>
                     </div>
                     <div>
                         <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Artifacts Lead Alignment</h4>
                         <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                             The anxiety journey map became the single source of truth that guided every design decision across the cross-functional team.
                         </p>
                     </div>
                     <div>
                         <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">System Over Interface</h4>
                         <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                             Our biggest wins (automated detection) came from designing the backend system capabilities, not just the UI.
                         </p>
                     </div>
                     <div>
                         <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Constraints are Opportunities</h4>
                         <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                             The API limitations birthed the "Search Near Me" feature—our key differentiator.
                         </p>
                     </div>
                </div>
            </div>
        </section>
    </div>
  );
};