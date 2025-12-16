import React from 'react';
import { AlertCircle, Lock, Search, CheckCircle } from 'lucide-react';
import { InsightCard, GoalCard, StatCard, DesignHighlight, SectionTitle } from './Shared';

export const CowinCaseStudy: React.FC = () => {
  return (
    <div className="animate-fade-in">
        {/* Hero Section */}
        <div className="mb-24">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-neutral-500 uppercase tracking-widest text-sm font-semibold">Project for</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-200 dark:border-blue-800/50">Eka Care</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight text-neutral-900 dark:text-white">
                Designing for a Nation in Crisis
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-12 leading-relaxed max-w-3xl">
                I led the design for a platform that navigated extreme public anxiety and technical chaos to facilitate over 2 crore vaccine certificate downloads.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                <StatCard value="+2 Crore" label="Vaccine Certificates" colorClass="text-blue-600 dark:text-blue-400" />
                <StatCard value="#1" label="on Google Search" colorClass="text-purple-600 dark:text-purple-400" />
                <StatCard value="~2 Months" label="Initial Launch" colorClass="text-green-600 dark:text-green-400" />
            </div>

            <div className="rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-neutral-100 dark:bg-neutral-900">
                 {/* Placeholder for Cowin Hero Visual */}
                 <div className="aspect-video w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                    <img src="https://picsum.photos/seed/cowin/1200/800" alt="Co-WIN Hero" className="w-full h-full object-cover" />
                 </div>
            </div>
        </div>

        {/* Section 1: The Setup */}
        <section className="mb-24">
            <SectionTitle number="01" title="The Setup: A High-Stakes Mandate" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                In 2021, India faced a monumental challenge: vaccinating its population amidst a devastating pandemic wave. The government released the Co-WIN APIs, creating a sudden, urgent opportunity. The business goal for Eka.Care was clear: leverage these APIs to build a superior, trustworthy public utility that could capture a massive, anxious user base and establish us as a key player in India's digital health ecosystem.
            </p>
            
            <h4 className="text-xl font-semibold mb-6 text-neutral-900 dark:text-white">The User's Reality: A State of Panic</h4>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <InsightCard 
                    icon={<AlertCircle className="text-red-500" />}
                    title="Availability Anxiety"
                    quote="Will I ever find a slot for my elderly parents? I've been trying for days."
                />
                <InsightCard 
                    icon={<Lock className="text-blue-500" />}
                    title="Trust & Legitimacy"
                    quote="Is this third-party app even legitimate? How do I know it's safe to give them my Aadhar number?"
                />
                 <InsightCard 
                    icon={<Search className="text-purple-500" />}
                    title="Information Gaps"
                    quote="How do I know this information is real and not a waste of my time? Is the slot even still there?"
                />
            </div>
            
            <div className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-xl border-l-4 border-purple-500">
                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">My Role: Designer as a De-risking Agent</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                    As the sole designer on this initiative, I was tasked with creating a functional UX under an extreme "one-day delivery mode" timeline. With no PM, my role expanded significantly. I was responsible for de-risking the project by defining requirements, analyzing technical constraints, and creating a clear plan of action that the entire cross-functional team could rally behind.
                </p>
            </div>
        </section>

        {/* Section 2: Discovery */}
        <section className="mb-24">
            <SectionTitle number="02" title="Discovery: Finding Signal in the Noise" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                The existing official portal was functional but overwhelmed, creating a significant "trust gap." Users were desperate for an alternative that was not just faster, but clearer and more reliable. My discovery process started with the technology itself to understand our exact capabilities.
            </p>

            <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">Deconstructing the Technical Foundation</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                 My first step was a deep dive into the Co-WIN APIs. Instead of just reading the docs, I deconstructed them into a clear, grouped list to understand our building blocks. This helped the entire team, including non-technical stakeholders, grasp what was possible.
            </p>

            {/* API Visualization Placeholder */}
            <div className="bg-neutral-50 dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 mb-8 font-mono text-xs md:text-sm">
                 <div className="mb-4">
                    <span className="text-neutral-400 uppercase tracking-wider text-[10px] font-bold">Appointment APIs</span>
                    <div className="mt-2 space-y-2">
                        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300"><span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded text-[10px] font-bold">GET</span> /v2/appointment/sessions/public/findByPin</div>
                        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300"><span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded text-[10px] font-bold">GET</span> /v2/appointment/sessions/public/findByDistrict</div>
                    </div>
                 </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30 p-6 rounded-2xl mb-12">
                 <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">The "Search Near Me" Insight</h4>
                 <p className="text-blue-700 dark:text-blue-100/70 text-sm md:text-base">
                    <strong>Key Insight:</strong> While the APIs provided basic search by PIN and District, I identified a critical gap: there was no single API for a simple, location-aware "search near me." Competitors were just replicating the basic government portal forms.
                    <br/><br/>
                    <strong>My Strategic Solution:</strong> I proposed a new user flow. By first requesting the user's device location (with permission), we could programmatically determine their current Pincode and feed it into the existing API. This seemingly small step created a "one-tap" search experience that was vastly superior.
                 </p>
            </div>
        </section>

         {/* Section 3: Design Goals */}
         <section className="mb-24">
            <SectionTitle number="03" title="The Three Pillars of Trust" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                Based on the journey map and user anxieties, I established three core design principles that became our unwavering guide for every feature and decision.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
                <GoalCard number="1" title="Radical Transparency" desc="Show everything, hide nothing. To build trust, we had to be more comprehensive and forthcoming than the official sources, even if it meant showing 'bad news'." />
                <GoalCard number="2" title="Honest Expectations" desc="Never overpromise. Be explicit about data freshness and potential failures to prevent the user frustration that comes from chasing non-existent 'ghost' slots." />
                <GoalCard number="3" title="Anxiety-Proof Confirmation" desc="The end of the flow must be a definitive, reassuring 'contract' that contains every piece of necessary information, leaving absolutely no room for doubt." />
            </div>
        </section>

        {/* Section 4: Execution */}
        <section className="mb-24">
             <SectionTitle number="04" title="Design & Execution" />
             <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
                Guided by our three pillars of trust, I designed the two most critical user journeys: booking a slot and downloading a certificate.
             </p>

             <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">4.1 Flow: Booking a Vaccination Slot</h3>
             <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                 The slot booking process was the epicenter of user anxiety. My goal was to create a flow that was not only functional but actively worked to calm the user.
             </p>

             <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg mb-8">
                <img src="https://picsum.photos/seed/cowinflow1/1000/600" alt="Booking Flow" className="w-full h-auto" />
             </div>

             <div className="space-y-4 mb-16">
                <DesignHighlight title="1. Proactive Filtering & Absolute Transparency" desc="Instead of hiding 'bad news,' we embraced it. The search results page showed all vaccination centers, clearly marking those with no available slots. This upheld our 'Radical Transparency' principle." />
                <DesignHighlight title="2. Automated Slot Reservation" desc="To combat 'ghost slots,' I designed an intermediate 'booking in progress' screen. When a user selected a center, our system would attempt to hold a slot for a short period, creating a buffer that transformed the experience from frantic to controlled." />
                <DesignHighlight title="3. The Anxiety-Proof Confirmation" desc="The final confirmation screen was designed as an 'anxiety-proof contract.' It contained every critical piece of information: Hospital Name, Address, Date, Time, Beneficiary Name, leaving no room for doubt." />
             </div>

             <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">4.2 Flows: Downloading the Vaccine Certificate</h3>
             <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                 The certificate download was our single biggest user acquisition channel. I designed two distinct "smart" flows to get users their certificate as frictionlessly as possible.
             </p>
             
             <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    <h4 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">Explicit Path: User-Initiated</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">This flow serves users who know exactly what they need. With minimal form fields and clear progress indicators, it reduces cognitive load while maintaining data security.</p>
                </div>
                 <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    <h4 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">Automated Path: Proactive Detection</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Leveraging our user database, the system automatically detects when users become eligible for certificates based on their vaccination records. This transforms a reactive task into an delightful surprise.</p>
                </div>
             </div>
        </section>

        {/* Section 5: Impact */}
        <section className="mb-12">
            <SectionTitle number="05" title="Impact: Dominating the Market Through Trust" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                Our principle-led approach was a monumental success. By focusing relentlessly on user anxiety, we built one of the most trusted and widely-used vaccination tools in the country.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                 <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <h4 className="font-bold mb-4 text-neutral-900 dark:text-white">Market Leadership</h4>
                    <div className="space-y-4">
                        <div className="flex justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2">
                            <span className="text-neutral-500">App Store Rank</span>
                            <span className="font-bold text-blue-600 dark:text-blue-400">#1</span>
                        </div>
                        <div className="flex justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2">
                            <span className="text-neutral-500">Google Play Rank</span>
                            <span className="font-bold text-blue-600 dark:text-blue-400">#2</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-neutral-500">Market Share</span>
                            <span className="font-bold text-blue-600 dark:text-blue-400">34%</span>
                        </div>
                    </div>
                 </div>

                 <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <h4 className="font-bold mb-4 text-neutral-900 dark:text-white">User Acquisition</h4>
                    <div className="space-y-4">
                        <div className="flex justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2">
                            <span className="text-neutral-500">Daily Active Users</span>
                            <span className="font-bold text-purple-600 dark:text-purple-400">2.8L+</span>
                        </div>
                         <div className="flex justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2">
                            <span className="text-neutral-500">Organic Installs</span>
                            <span className="font-bold text-purple-600 dark:text-purple-400">~8K/day</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-neutral-500">Retention Rate</span>
                            <span className="font-bold text-purple-600 dark:text-purple-400">68%</span>
                        </div>
                    </div>
                 </div>
            </div>
            
            <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="font-bold text-lg mb-4 text-neutral-900 dark:text-white">Key Learnings</h4>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400 list-disc pl-5">
                    <li><strong>In a Crisis, Clarity is the Most Valuable Feature.</strong> The "best" design isn't always the cleanest or most minimal; in this case, it was the most explicit and reassuring.</li>
                    <li><strong>Lead with Artifacts, Not Opinions.</strong> In a high-speed environment, well-designed artifacts (journey maps, flows, API documentation) became the fastest way to create alignment.</li>
                    <li><strong>Design the Entire System, Not Just the Interface.</strong> Our biggest wins came from thinking about the entire user journey—from managing expectations before the search to providing value after the download.</li>
                </ul>
            </div>
        </section>
    </div>
  );
};