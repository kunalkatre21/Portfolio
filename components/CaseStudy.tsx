import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown, Lock, CheckCircle, Search, AlertCircle } from 'lucide-react';

interface CaseStudyProps {
  onBack: () => void;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({ onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="bg-[#050505] min-h-screen pt-20 pb-24 text-white z-50 relative"
    >
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-neutral-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
             <button 
                onClick={onBack}
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
            >
                <ArrowLeft size={20} />
                <span>Back to Journey</span>
            </button>
            <span className="font-medium hidden md:block">Designing for a Nation in Crisis</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12">
        {/* Hero */}
        <div className="mb-24">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-neutral-500 uppercase tracking-widest text-sm font-semibold">Project for</span>
                <span className="bg-blue-900/30 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-800/50">Eka Care</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Designing for a Nation in Crisis
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 leading-relaxed">
                I led the design for a platform that navigated extreme public anxiety and technical chaos to facilitate over 2 crore vaccine certificate downloads.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-neutral-800 py-8">
                <div>
                    <span className="block text-3xl font-bold text-white mb-1">+2 Crore</span>
                    <span className="text-sm text-neutral-500 uppercase tracking-wide">Certificates</span>
                </div>
                <div>
                    <span className="block text-3xl font-bold text-white mb-1">#1</span>
                    <span className="text-sm text-neutral-500 uppercase tracking-wide">on Google</span>
                </div>
                <div>
                    <span className="block text-3xl font-bold text-white mb-1">~2 Mo</span>
                    <span className="text-sm text-neutral-500 uppercase tracking-wide">Launch Time</span>
                </div>
            </div>

            <div className="mt-12 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
                 <img src="https://picsum.photos/id/4/1200/800" alt="Case Study Hero" className="w-full object-cover" />
            </div>
        </div>

        {/* Section 1: The Setup */}
        <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
                <span className="text-neutral-600">01.</span> The Setup
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                In 2021, India faced a monumental challenge: vaccinating its population amidst a devastating pandemic wave. The government released the Co-WIN APIs, creating a sudden, urgent opportunity. The goal: leverage these APIs to build a superior, trustworthy public utility that could capture a massive, anxious user base.
            </p>
            
            <h4 className="text-xl font-semibold mb-6 text-white">The User's Reality: A State of Panic</h4>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <InsightCard 
                    icon={<AlertCircle className="text-red-400" />}
                    title="Availability Anxiety"
                    quote="Will I ever find a slot for my elderly parents? I've been trying for days."
                />
                <InsightCard 
                    icon={<Lock className="text-blue-400" />}
                    title="Trust & Legitimacy"
                    quote="Is this third-party app safe? How do I know my Aadhar number is secure?"
                />
                 <InsightCard 
                    icon={<Search className="text-purple-400" />}
                    title="Information Gaps"
                    quote="Is this info real? Ghost slots are wasting my time."
                />
            </div>
        </section>

        {/* Section 2: Discovery */}
        <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
                <span className="text-neutral-600">02.</span> Discovery
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                My first step was a deep dive into the Co-WIN APIs. I deconstructed them to understand our building blocks.
            </p>

            {/* API Docs Mockup */}
            <div className="bg-[#111] border border-neutral-800 rounded-2xl p-6 mb-8 font-mono text-sm">
                <div className="mb-4">
                    <h5 className="text-neutral-500 mb-2 uppercase tracking-wider text-xs">Appointment Availability APIs</h5>
                    <div className="space-y-2">
                        <ApiEndpoint method="GET" path="/v2/appointment/sessions/public/findByPin" desc="Get sessions by PIN" />
                        <ApiEndpoint method="GET" path="/v2/appointment/sessions/public/findByDistrict" desc="Get sessions by District" />
                        <ApiEndpoint method="GET" path="/v2/appointment/centers/public/findByLatLong" desc="Get centers by Lat/Long" />
                    </div>
                </div>
                <div>
                     <h5 className="text-neutral-500 mb-2 uppercase tracking-wider text-xs">Certificate APIs</h5>
                     <div className="space-y-2">
                        <ApiEndpoint method="GET" path="/v2/registration/certificate/public/download" desc="Download PDF" locked />
                     </div>
                </div>
            </div>

            <div className="bg-blue-900/10 border border-blue-900/30 p-6 rounded-2xl mb-12">
                 <h4 className="font-bold text-blue-200 mb-2">The "Search Near Me" Insight</h4>
                 <p className="text-blue-100/70">
                    While APIs provided basic search by PIN, I identified a gap: no "search near me". By requesting device location, we programmatically determined the user's PIN, creating a "one-tap" search experience vastly superior to competitors.
                 </p>
            </div>
        </section>

         {/* Section 3: Design Goals */}
         <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
                <span className="text-neutral-600">03.</span> Principles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
                <GoalCard number="01" title="Radical Transparency" desc="Show everything, hide nothing. Even 'bad news' builds trust." />
                <GoalCard number="02" title="Expectation Mgmt" desc="Never overpromise. Be explicit about data freshness to prevent frustration." />
                <GoalCard number="03" title="Anxiety-Proof" desc="The final confirmation must be a definitive contract leaving no doubt." />
            </div>
        </section>

        {/* Section 4: Flows */}
        <section className="mb-24">
             <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
                <span className="text-neutral-600">04.</span> Execution
            </h2>
            
            <h3 className="text-2xl font-bold mb-4">The Booking Flow</h3>
            <p className="text-neutral-400 mb-8">
                The slot booking process was the epicenter of anxiety. I designed a flow that actively worked to calm the user.
            </p>

            {/* Simplified Flow Visualization */}
            <div className="bg-[#111] p-8 rounded-3xl border border-neutral-800 mb-12 flex flex-col md:flex-row gap-4 justify-between items-center text-center md:text-left">
                 <FlowStep title="Search" desc="Auto-detect PIN" />
                 <FlowArrow />
                 <FlowStep title="Results" desc="Show ALL centers" />
                 <FlowArrow />
                 <FlowStep title="Hold" desc="Reserve for 60s" />
                 <FlowArrow />
                 <FlowStep title="Confirm" desc="Anxiety-proof details" />
            </div>

            <div className="space-y-6">
                <DesignHighlight title="1. Proactive Filtering" desc="We showed all centers, clearly marking full ones. Added 'Notify Me' to turn dead ends into opportunities." />
                <DesignHighlight title="2. Automated Reservation" desc="Combatting 'ghost slots' by holding the slot for 60 seconds during booking, creating a controlled process." />
            </div>
        </section>

        {/* Section 5: Impact */}
        <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
                <span className="text-neutral-600">05.</span> Impact
            </h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
                    <span className="block text-4xl font-bold text-white mb-2">#1</span>
                    <span className="text-neutral-500">App Store Rank (Health)</span>
                </div>
                <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
                    <span className="block text-4xl font-bold text-white mb-2">1.4L+</span>
                    <span className="text-neutral-500">Certificates / Day</span>
                </div>
            </div>
        </section>

        <div className="border-t border-neutral-800 pt-12 text-center">
            <p className="text-neutral-500 mb-6">Explore other works</p>
             <button 
                onClick={onBack}
                className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-colors"
            >
                Back to Portfolio
            </button>
        </div>

      </div>
    </motion.div>
  );
};

const InsightCard = ({ icon, title, quote }: { icon: React.ReactNode, title: string, quote: string }) => (
    <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800">
        <div className="mb-4">{icon}</div>
        <h5 className="font-bold text-white mb-2">{title}</h5>
        <blockquote className="text-neutral-400 italic text-sm">"{quote}"</blockquote>
    </div>
);

const ApiEndpoint = ({ method, path, desc, locked }: { method: string, path: string, desc: string, locked?: boolean }) => (
    <div className="flex flex-col md:flex-row md:items-center gap-3 bg-black/40 p-3 rounded border border-neutral-800/50">
        <span className={`text-[10px] font-bold px-2 py-1 rounded w-fit ${method === 'GET' ? 'bg-blue-900 text-blue-200' : 'bg-neutral-700'}`}>{method}</span>
        <code className="text-neutral-300 break-all">{path}</code>
        <div className="flex items-center gap-2 ml-auto">
            <span className="text-neutral-500 text-xs">{desc}</span>
            {locked && <Lock size={12} className="text-neutral-600" />}
        </div>
    </div>
);

const GoalCard = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
    <div className="p-6 rounded-2xl border border-neutral-800 bg-[#0a0a0a]">
        <span className="text-4xl font-bold text-neutral-800 mb-4 block">{number}</span>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-neutral-400 text-sm">{desc}</p>
    </div>
);

const FlowStep = ({ title, desc }: { title: string, desc: string }) => (
    <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white font-bold shadow-lg">
            {title}
        </div>
        <span className="text-xs text-neutral-500 uppercase tracking-wide">{desc}</span>
    </div>
);

const FlowArrow = () => (
    <div className="hidden md:block h-[1px] flex-1 bg-neutral-800 mx-4"></div>
);

const DesignHighlight = ({ title, desc }: { title: string, desc: string }) => (
    <div className="pl-6 border-l-2 border-purple-500">
        <h5 className="text-white font-bold text-lg mb-1">{title}</h5>
        <p className="text-neutral-400">{desc}</p>
    </div>
);