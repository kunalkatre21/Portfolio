import React from 'react';
import { Zap, Clock, XCircle, ArrowRight } from 'lucide-react';
import { InsightCard, GoalCard, StatCard, DesignHighlight, SectionTitle } from './Shared';

export const WebInfraCaseStudy: React.FC = () => {
  return (
    <div className="animate-fade-in">
        {/* Hero Section */}
        <div className="mb-24">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-neutral-500 uppercase tracking-widest text-sm font-semibold">Project for</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-200 dark:border-blue-800/50">Eka Care</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight text-neutral-900 dark:text-white">
                From Bottleneck to Self-Serve
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-12 leading-relaxed max-w-3xl">
                I architected a Decentralized Publishing Engine that transformed our website from an "Engineering Ticket" to a "Design-Led Operation," reducing campaign TAT by 80% and giving Marketing 100% autonomy.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                <StatCard value="80%" label="TAT Reduction" colorClass="text-purple-600 dark:text-purple-400" />
                <StatCard value="90+" label="Lighthouse Score" colorClass="text-green-600 dark:text-green-400" />
                <StatCard value="200+" label="Eng Hours Saved" colorClass="text-blue-600 dark:text-blue-400" />
            </div>

            <div className="rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-neutral-100 dark:bg-neutral-900">
                 <div className="aspect-video w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                     <img src="https://picsum.photos/seed/webinfra/1200/800" alt="Web Infrastructure" className="w-full h-full object-cover" />
                 </div>
            </div>
        </div>

        {/* Section 1 */}
        <section className="mb-24">
            <SectionTitle number="01" title="The Executive Summary: From Bottleneck to Self-Serve" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                In a hyper-growth startup, Marketing needs to move at the speed of culture, but Engineering is often locked in product sprints. At Eka Care, our web presence was stifled by this dependency—simple copy changes took days, and new campaign pages took weeks.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
                 <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">The Core Innovation</h3>
                 <p className="text-neutral-600 dark:text-neutral-300">
                    I didn't just "redesign the website"; I architected a <strong>Decentralized Publishing Engine</strong>. By migrating to Webflow and integrating an AI-assisted development workflow, I shifted the website from an "Engineering Ticket" to a "Design-Led Operation," reducing campaign Turnaround Time (TAT) by 80% and giving Marketing 100% autonomy.
                 </p>
            </div>

            <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">The Challenge: The "Engineering Wall"</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <InsightCard 
                    icon={<XCircle className="text-red-500" />}
                    title="Zero Autonomy"
                    quote="Marketing couldn't fix a typo without a developer PR."
                />
                <InsightCard 
                    icon={<Clock className="text-orange-500" />}
                    title="Slow-to-Market"
                    quote="Launching a 'Hackathon' landing page required pulling engineers off core product work."
                />
                <InsightCard 
                    icon={<Zap className="text-yellow-500" />}
                    title="The 'Bandwidth' Trap"
                    quote="As the sole designer, I risked becoming the new bottleneck—replacing 'waiting for devs' with 'waiting for design.'"
                />
            </div>
        </section>

        {/* Section 2 */}
        <section className="mb-24">
            <SectionTitle number="02" title="The Strategy: Operationalizing 'No-Code'" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                 I treated the website as a product, not a brochure. My strategy focused on three operational pillars:
            </p>

            <div className="space-y-6 mb-12">
                <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">A. The "Pixel-to-Publish" Migration (Webflow)</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">I collaborated with the Brand Team to translate their new visual identity into a production-grade Webflow system.</p>
                    <div className="flex gap-4">
                        <div className="bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded text-sm text-green-700 dark:text-green-300">Outcome: 1 Week Overhaul</div>
                        <div className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded text-sm text-blue-700 dark:text-blue-300">Secret Sauce: Client-First</div>
                    </div>
                </div>

                <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">B. The "Self-Serve" CMS (Democratization)</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">I identified the high-frequency requests (Blogs, News, SEO tweaks) and built a robust CMS backend.</p>
                    <div className="flex gap-4">
                        <div className="bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded text-sm text-green-700 dark:text-green-300">Result: 5-10 Articles/Week</div>
                    </div>
                </div>

                <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">C. The AI-Augmented Workflow (Speed)</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">For bespoke campaign pages, I couldn't rely on standard templates. I built a personal "AI Ops" workflow to act as a one-person dev team using tools like Cursor AI and Napkin.ai.</p>
                    <div className="flex gap-4">
                        <div className="bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded text-sm text-green-700 dark:text-green-300">Speed: 5 Days → 1 Day</div>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 3 */}
        <section className="mb-24">
            <SectionTitle number="03" title="Key Highlight: The 'Hackathon' Campaign" />
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-100 dark:border-red-900/30">
                    <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">❌ Old Process</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-2">Total: 2 Weeks</p>
                    <ul className="text-sm list-disc pl-5 text-neutral-600 dark:text-neutral-400">
                        <li>Week 1: Design</li>
                        <li>Week 2: Development</li>
                    </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl border border-green-100 dark:border-green-900/30">
                    <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">✅ New Process</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-2">Total: 24 Hours</p>
                    <ul className="text-sm list-disc pl-5 text-neutral-600 dark:text-neutral-400">
                        <li>Morning: Brainstorm & Wireframe</li>
                        <li>Afternoon: AI Asset Gen</li>
                        <li>Evening: Build & Host</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
            <SectionTitle number="04" title="The Results: Operational Metrics" />
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                 <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">1 Week → 1 Day</div>
                    <div className="text-sm text-neutral-500">Campaign TAT</div>
                 </div>
                 <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">90+</div>
                    <div className="text-sm text-neutral-500">Lighthouse Score</div>
                 </div>
                 <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">200+ Hours</div>
                    <div className="text-sm text-neutral-500">Engineering Saved</div>
                 </div>
            </div>

            <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <blockquote className="text-lg italic text-neutral-600 dark:text-neutral-400 mb-4 border-l-4 border-purple-500 pl-4">
                    "This project wasn't about learning Webflow; it was about Resource Allocation. By removing the website from the engineering backlog, I didn't just build a site—I gave the engineering team their time back."
                </blockquote>
                <div className="text-sm font-bold text-neutral-900 dark:text-white pl-5">— Kunal Katre, Web Principal & Design Engineer</div>
            </div>
        </section>
    </div>
  );
};