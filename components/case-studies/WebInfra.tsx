import React from 'react';
import { Zap, Clock, Rocket, Bot, Layout, Database, Terminal, XCircle, CheckCircle, ArrowRight, Code } from 'lucide-react';
import { StatCard, SectionTitle, QuoteBlock, Divider, TextHighlight, InsightCard, GoalCard, BrowserWindow, CodeBlock, CaseMeta } from './Shared';
import { ASSETS } from '../../data';
import { motion } from 'framer-motion';

export const WebInfraCaseStudy: React.FC = () => {
    return (
        <div className="animate-fade-in pb-20 relative bg-white dark:bg-[#050505]">
            {/* Full Width Background Hero */}
            <div className="absolute top-0 left-0 w-full h-[600px] z-0 overflow-hidden pointer-events-none">
                <img
                    src={ASSETS.projects.webInfra.hero}
                    alt="Background"
                    className="w-full h-full object-cover opacity-30 dark:opacity-20 blur-[2px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#050505] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 pt-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Web Ops</span>
                        <span className="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white px-2 py-0.5 rounded text-xs font-bold">2023</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold mb-12 leading-[0.9] text-neutral-900 dark:text-white tracking-tight">
                        Web Ops: <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700">Removing Engineering.</span>
                    </h1>
                </div>

                <CaseMeta
                    role="Design Engineer"
                    team="Marketing Team"
                    timeline="2 Weeks -> 1 Day"
                    overview="I moved the website from engineering sprints to a design-led operation. Marketing now ships without tickets."
                />

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
                    <StatCard value="24h" label="Launch Time" subLabel="Down from 2 Weeks" />
                    <StatCard value="100%" label="Autonomy" subLabel="For Marketing" />
                    <StatCard value="200+" label="Eng Hours" subLabel="Saved/Year" />
                    <StatCard value="5/Day" label="Updates" />
                </div>

                {/* Section 1: The Problem */}
                <section className="mb-24">
                    <SectionTitle number="01" title="The Problem" />
                    <div className="max-w-4xl">
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
                            Marketing couldn't fix a typo without an engineering ticket.
                            <span className="text-red-500 font-bold"> A simple landing page took 2 weeks</span> because it had to fit into the product sprint.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <InsightCard
                            icon={<XCircle />}
                            title="The Dependency"
                            quote="Engineers hated building landing pages. Designers hated waiting for them."
                            color="red"
                        />
                        <InsightCard
                            icon={<Clock />}
                            title="The Cost"
                            quote="We missed campaign deadlines because the backend team was busy shipping product features."
                            color="orange"
                        />
                    </div>

                    <QuoteBlock quote="The website is a marketing channel, not a software product. It shouldn't require a software engineer." />
                </section>

                <Divider />

                {/* Section 2: Strategy */}
                <section className="mb-24">
                    <SectionTitle number="02" title="The Fix" />
                    <div className="max-w-4xl">
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
                            I migrated the entire stack to Webflow. I built a system where Design builds the components, and Marketing builds the pages.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {/* Pillar A */}
                        <div className="p-6 bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl flex flex-col">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Layout /></div>
                            <h3 className="font-bold text-xl mb-4 text-neutral-900 dark:text-white">Client-First System</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 flex-1">
                                I used Finsweet's naming convention. The class names are human-readable, so any designer can maintain it.
                            </p>
                        </div>

                        {/* Pillar B */}
                        <div className="p-6 bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl flex flex-col">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center mb-6"><Database /></div>
                            <h3 className="font-bold text-xl mb-4 text-neutral-900 dark:text-white">CMS Architecture</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 flex-1">
                                I built rigid CMS templates for Blogs and Case Studies. Marketing just fills a form and hits "Publish".
                            </p>
                        </div>

                        {/* Pillar C */}
                        <div className="p-6 bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl flex flex-col">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl flex items-center justify-center mb-6"><Bot /></div>
                            <h3 className="font-bold text-xl mb-4 text-neutral-900 dark:text-white">AI Dev Team</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 flex-1">
                                For complex calculators, I wrote the JavaScript using AI (Cursor). I became the "Frontend Dev" without knowing React.
                            </p>
                        </div>
                    </div>
                </section>

                <Divider />

                {/* Section 3: Highlight */}
                <section className="mb-24">
                    <SectionTitle number="03" title="Execution: The Hackathon Page" />

                    <div className="mb-12 max-w-4xl">
                        <p className="text-neutral-600 dark:text-neutral-400">
                            We needed a dark-mode, interactive landing page for a developer hackathon.
                            Previously, this would have been rejected by engineering.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="p-8 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
                            <h4 className="text-xl font-bold text-red-600 dark:text-red-400 mb-6 flex items-center gap-2"><XCircle size={20} /> Old Way (2 Weeks)</h4>
                            <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
                                <li className="flex gap-2"><span className="text-red-500 font-bold">Day 1-3:</span> Design in Figma.</li>
                                <li className="flex gap-2"><span className="text-red-500 font-bold">Day 4:</span> Handover meeting.</li>
                                <li className="flex gap-2"><span className="text-red-500 font-bold">Day 5-10:</span> Engineering backlog wait time.</li>
                                <li className="flex gap-2"><span className="text-red-500 font-bold">Day 14:</span> Deployed (too late).</li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                            <h4 className="text-xl font-bold text-green-600 dark:text-green-400 mb-6 flex items-center gap-2"><CheckCircle size={20} /> New Way (1 Day)</h4>
                            <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
                                <li className="flex gap-2"><span className="text-green-500 font-bold">09:00 AM:</span> Design in Figma.</li>
                                <li className="flex gap-2"><span className="text-green-500 font-bold">01:00 PM:</span> Build in Webflow.</li>
                                <li className="flex gap-2"><span className="text-green-500 font-bold">04:00 PM:</span> Generate Custom JS with AI.</li>
                                <li className="flex gap-2"><span className="text-green-500 font-bold">06:00 PM:</span> Live.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 font-mono text-sm text-green-400 overflow-x-auto">
                        <div className="text-neutral-500 mb-2">// Generated by AI, deployed to Webflow Embed</div>
                        <pre>{`document.addEventListener('mousemove', (e) => {
  const cards = document.querySelectorAll('.hackathon-card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', \`\${x}px\`);
    card.style.setProperty('--mouse-y', \`\${y}px\`);
  });
});`}</pre>
                    </div>
                </section>

                <Divider />

                {/* Section 4: Results */}
                <section className="mb-24">
                    <SectionTitle number="04" title="Impact" />

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <InsightCard
                            icon={<Zap />}
                            title="Velocity"
                            quote="We went from 1 update/week to 5 updates/day. The website is now a living document."
                            color="yellow"
                        />
                        <InsightCard
                            icon={<Bot />}
                            title="Resource"
                            quote="I freed up 2 full-time engineers. They moved back to the core product team."
                            color="blue"
                        />
                        <InsightCard
                            icon={<Layout />}
                            title="Consistency"
                            quote="The Client-First system enforces the brand. No more rogue hex codes."
                            color="purple"
                        />
                    </div>

                    <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-3xl mt-12">
                        <h3 className="font-bold text-xl mb-6 text-neutral-900 dark:text-white">Key Learnings</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Operations - Pixels</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    Designing the workflow was more valuable than designing the page.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">AI is a Force Multiplier</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    I don't know JavaScript, but I shipped production code. AI bridged the skill gap.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
