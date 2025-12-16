import React from 'react';
import { Zap, Clock, Rocket, Bot, Layout, Database, Terminal, XCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { StatCard, SectionTitle, QuoteBlock, Divider, TextHighlight, InsightCard, GoalCard, BrowserWindow } from './Shared';
import { ASSETS } from '../../data';
import { motion } from 'framer-motion';

export const WebInfraCaseStudy: React.FC = () => {
  return (
    <div className="animate-fade-in pb-20">
        {/* Hero Section */}
        <div className="mb-20">
             <div className="flex items-center gap-3 mb-8">
                <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Web Ops</span>
                <span className="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white px-2 py-0.5 rounded text-xs font-bold">2023</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[0.9] text-neutral-900 dark:text-white tracking-tight">
                From Bottleneck <br/> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700">Self-Serve.</span>
            </h1>
            
            <div className="flex flex-col md:flex-col gap-8 md:gap-16 mb-16 items-start">
                <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
                    I architected a <TextHighlight>Decentralized Publishing Engine</TextHighlight> that transformed our website from an "Engineering Ticket" to a "Design-Led Operation," reducing campaign TAT by 80% and giving Marketing 100% autonomy.
                </p>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <StatCard value="80%" label="TAT Reduction" />
                    <StatCard value="90+" label="Lighthouse" subLabel="Score" />
                    <StatCard value="200+" label="Eng Hours" subLabel="Saved/Year" />
                </div>
            </div>

            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800"
            >
                 <img src={ASSETS.projects.webInfra.hero} alt="Web Infrastructure" className="w-full object-cover" />
            </motion.div>
        </div>

        {/* Section 1: Executive Summary */}
        <section className="max-w-4xl mx-auto">
            <SectionTitle number="01" title="The Executive Summary" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
                In a hyper-growth startup, Marketing needs to move at the speed of culture, but Engineering is often locked in product sprints. At Eka Care, our web presence was stifled by this dependency—simple copy changes took days.
            </p>

             <div className="bg-green-50 dark:bg-green-900/10 p-8 rounded-2xl border border-green-100 dark:border-green-800 mb-12">
                <h4 className="font-bold text-neutral-900 dark:text-white mb-2 text-lg">The Core Innovation</h4>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    I didn't just "redesign the website"; I architected a <strong>Decentralized Publishing Engine</strong>. By migrating to Webflow and integrating an AI-assisted development workflow, I shifted the website from an "Engineering Ticket" to a "Design-Led Operation".
                </p>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">The Challenge: The "Engineering Wall"</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                 <InsightCard 
                    icon={<XCircle />}
                    title="Zero Autonomy"
                    quote="Marketing couldn't fix a typo without a developer PR."
                    color="red"
                />
                 <InsightCard 
                    icon={<Clock />}
                    title="Slow-to-Market"
                    quote="Launching a 'Hackathon' landing page required pulling engineers off core product work."
                    color="orange"
                />
                 <InsightCard 
                    icon={<Zap />}
                    title="Bandwidth Trap"
                    quote="As the sole designer, I risked becoming the new bottleneck."
                    color="blue"
                />
            </div>

             <div className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-xl border-l-4 border-green-500">
                <h4 className="font-bold text-neutral-900 dark:text-white mb-1">The Goal</h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                    Build a system that allows high-fidelity design <em>and</em> instant publishing, without requiring a single hour of core engineering time.
                </p>
            </div>
        </section>

        <Divider />

        {/* Section 2: Strategy */}
        <section className="max-w-6xl mx-auto">
            <SectionTitle number="02" title="The Strategy: Operationalizing 'No-Code'" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl">
                I treated the website as a product, not a brochure. My strategy focused on three operational pillars:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-16">
                {/* Pillar A */}
                <div className="p-6 bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl flex flex-col">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Layout /></div>
                    <h3 className="font-bold text-xl mb-4 text-neutral-900 dark:text-white">Pixel-to-Publish</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 flex-1">
                        Translated the new visual identity into a production-grade Webflow system using Client-First naming conventions.
                    </p>
                    <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-xl">
                        <div className="text-xs font-bold uppercase text-neutral-500 mb-1">Outcome</div>
                        <div className="text-2xl font-bold text-neutral-900 dark:text-white">1 Week</div>
                        <div className="text-xs text-neutral-500">15+ page site overhaul</div>
                    </div>
                </div>

                {/* Pillar B */}
                <div className="p-6 bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl flex flex-col">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center mb-6"><Database /></div>
                    <h3 className="font-bold text-xl mb-4 text-neutral-900 dark:text-white">Self-Serve CMS</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 flex-1">
                        Built a robust CMS for Blogs & News, conducting workshops to empower the content team.
                    </p>
                    <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-xl">
                        <div className="text-xs font-bold uppercase text-neutral-500 mb-1">Result</div>
                        <div className="text-2xl font-bold text-neutral-900 dark:text-white">5-10</div>
                        <div className="text-xs text-neutral-500">Articles/week, zero design help</div>
                    </div>
                </div>

                {/* Pillar C */}
                <div className="p-6 bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl flex flex-col">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl flex items-center justify-center mb-6"><Bot /></div>
                    <h3 className="font-bold text-xl mb-4 text-neutral-900 dark:text-white">AI-Augmented</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 flex-1">
                        Built a personal "AI Ops" workflow (Napkin.ai + Cursor) to act as a one-person dev team for custom pages.
                    </p>
                    <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-xl">
                        <div className="text-xs font-bold uppercase text-neutral-500 mb-1">Speed</div>
                        <div className="text-2xl font-bold text-neutral-900 dark:text-white">5 &rarr; 1 Day</div>
                        <div className="text-xs text-neutral-500">Custom landing page build</div>
                    </div>
                </div>
            </div>
        </section>

        <Divider />

        {/* Section 3: Highlight */}
        <section className="max-w-6xl mx-auto">
            <SectionTitle number="03" title="Key Highlight: The 'Hackathon' Campaign" />
            
             <div className="mb-12">
                <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl">
                    We needed a high-energy landing page for a developer hackathon. It needed to look distinct from our corporate brand—edgy, dark mode, and interactive.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Old Process */}
                <div className="p-8 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
                    <h4 className="text-xl font-bold text-red-600 dark:text-red-400 mb-6 flex items-center gap-2"><XCircle size={20}/> Old Process</h4>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-black/20 rounded-lg">
                            <span className="text-neutral-600 dark:text-neutral-400">Design</span>
                            <span className="font-mono text-sm font-bold">Week 1</span>
                        </div>
                         <div className="flex items-center justify-between p-3 bg-white dark:bg-black/20 rounded-lg">
                            <span className="text-neutral-600 dark:text-neutral-400">Development</span>
                            <span className="font-mono text-sm font-bold">Week 2</span>
                        </div>
                    </div>
                     <div className="mt-6 pt-6 border-t border-red-200 dark:border-red-800/30">
                        <div className="font-bold text-neutral-900 dark:text-white">Total: 2 Weeks</div>
                        <div className="text-sm text-neutral-500">Often missing market windows</div>
                    </div>
                </div>

                {/* New Process */}
                <div className="p-8 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                    <h4 className="text-xl font-bold text-green-600 dark:text-green-400 mb-6 flex items-center gap-2"><CheckCircle size={20}/> New Process</h4>
                     <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-black/20 rounded-lg">
                            <span className="text-neutral-600 dark:text-neutral-400">Design (Figma + AI)</span>
                            <span className="font-mono text-sm font-bold">Morning</span>
                        </div>
                         <div className="flex items-center justify-between p-3 bg-white dark:bg-black/20 rounded-lg">
                            <span className="text-neutral-600 dark:text-neutral-400">Build (Webflow)</span>
                            <span className="font-mono text-sm font-bold">Afternoon</span>
                        </div>
                         <div className="flex items-center justify-between p-3 bg-white dark:bg-black/20 rounded-lg">
                            <span className="text-neutral-600 dark:text-neutral-400">Publish</span>
                            <span className="font-mono text-sm font-bold">Evening</span>
                        </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-green-200 dark:border-green-800/30">
                        <div className="font-bold text-neutral-900 dark:text-white">Total: 24 Hours</div>
                        <div className="text-sm text-neutral-500">Captured 100% of traffic spike</div>
                    </div>
                </div>
            </div>
        </section>

        <Divider />

        {/* Section 4: Results */}
        <section className="max-w-6xl mx-auto">
            <SectionTitle number="04" title="The Results & Reflection" />
            
            <div className="grid md:grid-cols-3 gap-6 mb-16">
                 <div className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl text-center">
                    <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">1 Wk &rarr; 1 Day</div>
                    <div className="text-xs font-bold uppercase text-neutral-500">Speed</div>
                 </div>
                 <div className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl text-center">
                    <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">90+</div>
                    <div className="text-xs font-bold uppercase text-neutral-500">Lighthouse Score</div>
                 </div>
                 <div className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl text-center">
                    <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">200+ Hrs</div>
                    <div className="text-xs font-bold uppercase text-neutral-500">Eng Saved / Year</div>
                 </div>
            </div>

            <QuoteBlock 
                quote="This project wasn't about learning Webflow; it was about Resource Allocation. By removing the website from the engineering backlog, I didn't just build a site—I gave the engineering team their time back."
                author="Reflection" 
            />

            <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-3xl mt-12">
                <h3 className="font-bold text-xl mb-6 text-neutral-900 dark:text-white">Key Learnings</h3>
                <div className="grid md:grid-cols-2 gap-8">
                     <div>
                         <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Operational Thinking &gt; Technical Mastery</h4>
                         <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                             The biggest impact came from solving resource allocation, not just technical implementation.
                         </p>
                     </div>
                     <div>
                         <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">No-Code != No-Architecture</h4>
                         <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                             The Client-First system I implemented ensures long-term maintainability and prevents future bottlenecks.
                         </p>
                     </div>
                     <div>
                         <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">AI as a Multiplier</h4>
                         <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                             Using AI tools strategically (not as a replacement) can compress development cycles without sacrificing quality.
                         </p>
                     </div>
                     <div>
                         <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Self-Serve Scales</h4>
                         <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                             Teaching the content team to publish independently created sustainable operational velocity.
                         </p>
                     </div>
                </div>
            </div>
        </section>
    </div>
  );
};