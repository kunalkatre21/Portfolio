import React from 'react';
import { Activity, Camera, TrendingUp } from 'lucide-react';
import { InsightCard, GoalCard, StatCard, DesignHighlight, SectionTitle } from './Shared';
import { ASSETS } from '../../data';

export const HeartRateCaseStudy: React.FC = () => {
  return (
    <div className="animate-fade-in">
        {/* Hero Section */}
        <div className="mb-24">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-neutral-500 uppercase tracking-widest text-sm font-semibold">Project for</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-200 dark:border-blue-800/50">Eka Care</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight text-neutral-900 dark:text-white">
                Architecting an Engagement Engine
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-12 leading-relaxed max-w-3xl">
                I transformed a failing feature with 38% user drop-off into a core driver of engagement and retention for the Eka.Care platform.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                <StatCard value="+21%" label="Conversion Lift" colorClass="text-purple-600 dark:text-purple-400" />
                <StatCard value="2x" label="Week 4 Retention" colorClass="text-green-600 dark:text-green-400" />
                <StatCard value="4 Months" label="Duration" colorClass="text-blue-600 dark:text-blue-400" />
            </div>

            <div className="rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-neutral-100 dark:bg-neutral-900">
                 <div className="aspect-video w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                     <img src={ASSETS.projects.heartRate.hero} alt="Heart Rate App Interface" className="w-full h-full object-cover" />
                 </div>
            </div>
        </div>

        {/* Section 1 */}
        <section className="mb-24">
            <SectionTitle number="01" title="The Setup: A Leaky Funnel & a Crisis of Trust" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                In late 2022, the Heart Rate Monitor (BPM) was a strategic bet on organic growth and user engagement. However, analytics painted a grim picture. The feature was underperforming dramatically.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 mb-8">
                 <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">The Problem</h3>
                 <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-300 space-y-2">
                    <li><strong>First-Time User Conversion:</strong> A catastrophic ~38% of users were dropping off before successfully completing their first measurement.</li>
                    <li><strong>Long-Term Retention:</strong> Churn analysis showed that even users who were successful once rarely came back.</li>
                 </ul>
            </div>
        </section>

        {/* Section 2 */}
        <section className="mb-24">
            <SectionTitle number="02" title="Discovery: Uncovering the 'Why'" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                 The data showed *what* was happening, but not *why*. I initiated a quick guerilla research sprint.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <InsightCard 
                    icon={<Activity className="text-blue-500" />}
                    title="Instruction Mismatch"
                    quote="I see the instructions, but I don't understand them. The words are difficult."
                />
                <InsightCard 
                    icon={<Camera className="text-purple-500" />}
                    title="The 'Phone Flip'"
                    quote="It's hard to do without looking at the back! I don't know which camera to use."
                />
                <InsightCard 
                    icon={<TrendingUp className="text-orange-500" />}
                    title="Trust Concerns"
                    quote="I just came from running, but my heart rate shown is 58. I don't trust the reading."
                />
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">Diagnosing the V1 Experience</h3>
            <div className="space-y-4 mb-8">
                <DesignHighlight title="Step 1: The Instruction Barrier" desc="V1 presented complex medical terminology without visual guidance." />
                <DesignHighlight title="Step 2: The Measurement Anxiety" desc="Users had no visual feedback during the 15-second measurement." />
                <DesignHighlight title="Step 3: The Trust Deficit" desc="Results appeared without context or validation." />
            </div>
        </section>

        {/* Section 3 */}
        <section className="mb-24">
            <SectionTitle number="03" title="Defining the Design Goals" />
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <GoalCard 
                    number="1" 
                    title="First-Try Success" 
                    desc="Overhaul the onboarding and measurement experience to be foolproof, intuitive, and anxiety-free for all users."
                />
                <GoalCard 
                    number="2" 
                    title="Unshakeable Trust" 
                    desc="Provide transparent, real-time feedback and proactively educate users to eliminate confusion and build confidence."
                />
                <GoalCard 
                    number="3" 
                    title="Create a Habit Loop" 
                    desc="Transform the results screen from a dead end into an actionable, insightful launchpad that encourages repeat usage."
                />
            </div>
        </section>

        {/* Section 4 */}
        <section className="mb-24">
            <SectionTitle number="04" title="Iteration & Design" />
            
            <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">4.1 Solving for 'First-Try' Success</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Fixing the 38% drop-off required a multi-point attack on the onboarding journey. We implemented a "Wow" moment video combining technical clarity with human warmth.
            </p>
            
            <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg mb-12 bg-neutral-100 dark:bg-neutral-900">
                <img src={ASSETS.projects.heartRate.onboarding} alt="Heart Rate Onboarding Flow" className="w-full h-auto" />
             </div>

            <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">4.2 Building Trust During Measurement</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                    <h5 className="font-bold mb-2 text-neutral-900 dark:text-white">Visual Indicators</h5>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">A pulsing circle synchronized with heartbeat detection.</p>
                </div>
                <div className="p-4 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                    <h5 className="font-bold mb-2 text-neutral-900 dark:text-white">Guidance</h5>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Textual guidance appearing at each stage: "Place finger" → "Analyzing".</p>
                </div>
                <div className="p-4 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                    <h5 className="font-bold mb-2 text-neutral-900 dark:text-white">Context</h5>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Explaining factors affecting accuracy before showing results.</p>
                </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">4.3 Designing an Actionable Result</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                 I redesigned the result screen to transform it from a dead-end data point into a rich, contextual health dashboard. We added contextual ranges (e.g., "Excellent for your age group!") and proactive engagement triggers.
            </p>

            <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg mb-8 bg-neutral-100 dark:bg-neutral-900">
                <img src={ASSETS.projects.heartRate.interface} alt="Heart Rate Result Interface" className="w-full h-auto" />
             </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
            <SectionTitle number="05" title="Impact & Learnings" />
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
                 <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    <h4 className="font-bold mb-4 text-neutral-900 dark:text-white">Conversion Funnel Lift</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Complete Measurement: <strong>62%</strong> (from 38%)</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Key Insight: Reducing friction at critical moments drove disproportionate value.</p>
                 </div>
                 <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    <h4 className="font-bold mb-4 text-neutral-900 dark:text-white">Retention Performance</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Week 4 Retention: <strong>35%</strong> (Doubled)</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Week 12 Retention: <strong>18%</strong> (+63% vs benchmark)</p>
                 </div>
            </div>

            <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="font-bold text-lg mb-4 text-neutral-900 dark:text-white">Key Learnings</h4>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400 list-disc pl-5">
                    <li><strong>Trust is the Ultimate Metric.</strong> A 'wow' feature that fails is worse than no feature at all.</li>
                    <li><strong>Retention is a System.</strong> Lasting impact came from designing the *entire system* around retention.</li>
                    <li><strong>Proactive Design Prevents Failure.</strong> Shifted from reactive error handling to proactive guidance.</li>
                </ul>
            </div>
        </section>
    </div>
  );
};