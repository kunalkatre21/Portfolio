import React from 'react';
import { Package, Smartphone, Monitor, Layers, GitBranch, Terminal, CheckCircle, XCircle, AlertTriangle, Database, Cpu, Zap, Repeat, Shield } from 'lucide-react';
import { InsightCard, CodeBlock, StatCard, SectionTitle, QuoteBlock, BrowserWindow, Divider, TextHighlight, DesignHighlight, GoalCard, MobileShell, CaseMeta } from './Shared';
import { ASSETS } from '../../data';
import { motion } from 'framer-motion';

export const DesignSystemCaseStudy: React.FC = () => {

    const oldToken = `// ❌ Old System
Color: EkaBlue
Color: Red-Error
Component: ButtonPrimary`;

    const newToken = `// ✅ New System
sys.color.action.primary
sys.color.feedback.critical
sys.component.button.variant.primary`;

    const pipelineCode = `Trigger: Push to Figma (Tokens Studio)
      ↓
Action: GitHub CI runs Style Dictionary
      ↓
Result: Auto-PR created in Android (XML), iOS (Swift), Web (CSS)`;

    return (
        <div className="animate-fade-in pb-20 relative bg-white dark:bg-[#050505]">
            {/* Full Width Background Hero */}
            <div className="absolute top-0 left-0 w-full h-[600px] z-0 overflow-hidden pointer-events-none">
                <img
                    src={ASSETS.projects.designSystem.hero}
                    alt="Background"
                    className="w-full h-full object-cover opacity-30 dark:opacity-20 blur-[2px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#050505] via-transparent to-transparent" />
                {/* Animated Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                    {/* Flowing Lines */}
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse" style={{ animationDuration: '4s' }} />
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
                    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }} />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 pt-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Infrastructure</span>
                        <span className="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white px-2 py-0.5 rounded text-xs font-bold">2022</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold mb-12 leading-[0.9] text-neutral-900 dark:text-white tracking-tight">
                        Design System: <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500" style={{ backgroundSize: '200% 200%', animation: 'gradient 3s ease infinite' }}>Killing the Handoff.</span>
                    </h1>
                </div>

                <CaseMeta
                    role="Design Systems Architect"
                    team="3 iOS, 3 Android, 2 Web"
                    timeline="3 Months"
                    overview="I connected Figma directly to Production code. Zero manual handoff. Zero visual drift across 3 platforms."
                />

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 w-full">
                    <StatCard value="0" label="Handoff Errors" />
                    <StatCard value="100%" label="Sync" subLabel="Figma -> Code" />
                    <StatCard value="3" label="Platforms" subLabel="iOS, Android, Web" />
                    <StatCard value="Automated" label="QA Process" />
                </div>

                {/* Section 1: Executive Summary */}
                <section className="mb-24 w-full">
                    <SectionTitle number="01" title="The Problem" />

                    <div className="grid md:grid-cols-12 gap-12 mb-12">
                        <div className="md:col-span-8">
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                We had a "Style Guide," but developers ignored it. They guessed hex codes from screenshots.
                                <span className="text-red-500 font-bold"> We had 50 shades of "Brand Blue" in production.</span>
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-12 w-full">
                        <InsightCard
                            icon={<XCircle />}
                            title="The Waste"
                            quote="DesignQA was 20% of our sprint. I was manually checking hex codes instead of designing features."
                            color="red"
                        />
                        <InsightCard
                            icon={<AlertTriangle />}
                            title="The Gap"
                            quote="Android looked different from iOS. Web looked like neither. The brand was broken."
                            color="orange"
                        />
                    </div>

                    <QuoteBlock quote="If it's not in the code, it doesn't exist. A PDF style guide is just a suggestion." />
                </section>

                <Divider />

                {/* Section 2: Strategy */}
                <section className="mb-24 w-full">
                    <SectionTitle number="02" title="The Fix" />

                    <div className="grid md:grid-cols-12 gap-12 mb-12">
                        <div className="md:col-span-8">
                            <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                I stopped treating Figma as a drawing tool and started treating it as a database.
                                I built a pipeline where design decisions compile directly into code.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16 w-full">
                        <GoalCard
                            number="1"
                            title="Structure"
                            desc="Rename tokens from 'Blue/500' to 'Action/Primary'. This decouples the function from the color, allowing instant theming."
                        />
                        <GoalCard
                            number="2"
                            title="Automation"
                            desc="Remove humans from the loop. If I change a color in Figma, a Pull Request opens in GitHub automatically."
                        />
                    </div>

                    <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">The Stack</h3>
                    <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 mb-8 w-full">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <div className="text-xs font-bold uppercase text-neutral-500 mb-2 tracking-widest">Input</div>
                                <div className="font-bold text-lg mb-1">Figma</div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">Tokens Studio Plugin</p>
                            </div>
                            <div className="md:border-l md:border-neutral-200 dark:md:border-neutral-800 md:pl-8">
                                <div className="text-xs font-bold uppercase text-neutral-500 mb-2 tracking-widest">Logic</div>
                                <div className="font-bold text-lg mb-1">GitHub Actions</div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">Style Dictionary Scripts</p>
                            </div>
                            <div className="md:border-l md:border-neutral-200 dark:md:border-neutral-800 md:pl-8">
                                <div className="text-xs font-bold uppercase text-neutral-500 mb-2 tracking-widest">Output</div>
                                <div className="font-bold text-lg mb-1">Production</div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">XML, Swift, CSS Variables</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-800 flex gap-4 items-start w-full">
                        <Zap className="text-blue-500 shrink-0 mt-1" size={20} />
                        <div>
                            <h4 className="font-bold text-neutral-900 dark:text-white text-sm">I Built It Myself</h4>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                                We didn't have an engineer for this. I used AI tools to write the transformation scripts and set up the GitHub pipeline myself.
                            </p>
                        </div>
                    </div>
                </section>

                <Divider />

                {/* Section 3: Execution */}
                <section className="mb-24 w-full">
                    <SectionTitle number="03" title="Execution" />

                    <div className="grid md:grid-cols-2 gap-12 mb-16 w-full">
                        <div className="min-w-0"> {/* min-w-0 required for flex/grid children to shrink properly */}
                            <h3 className="font-bold text-neutral-900 dark:text-white mb-4">1. Semantic Naming</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                                I audited the app and replaced hardcoded hex values with semantic tokens.
                            </p>
                            <div className="space-y-4">
                                <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30 w-full min-w-0">
                                    <div className="text-xs font-bold text-red-500 mb-2 uppercase">Before</div>
                                    <CodeBlock code={oldToken} language="yaml" />
                                </div>
                                <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/30 w-full min-w-0">
                                    <div className="text-xs font-bold text-green-500 mb-2 uppercase">After</div>
                                    <CodeBlock code={newToken} language="yaml" />
                                </div>
                            </div>
                        </div>
                        <div className="min-w-0">
                            <h3 className="font-bold text-neutral-900 dark:text-white mb-4">2. The Automation</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                                I configured a GitHub Action to listen for changes. When I push from Figma, the code updates itself.
                            </p>
                            <CodeBlock code={pipelineCode} language="bash" />

                            <div className="mt-8 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                                <h4 className="font-bold text-neutral-900 dark:text-white mb-2">Native Mapping</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    I mapped tokens to <strong>Material 3</strong> and <strong>UIKit</strong> standards. This gave us accessibility (Dynamic Type, Dark Mode) for free.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Divider />

                {/* Section 4: Outcome */}
                <section className="mb-24 w-full">
                    <SectionTitle number="04" title="Impact" />

                    <div className="grid md:grid-cols-3 gap-6 mb-16 w-full">
                        <InsightCard
                            icon={<CheckCircle />}
                            title="0 Errors"
                            quote="It is now impossible for a developer to use the wrong color. The system enforces it."
                            color="green"
                        />
                        <InsightCard
                            icon={<Package />}
                            title="White-Label Ready"
                            quote="We can now spin up a new theme for a B2B client in 10 minutes by just swapping the token JSON."
                            color="purple"
                        />
                        <InsightCard
                            icon={<Shield />}
                            title="Engineering Trust"
                            quote="I stopped sending them PDFs. I started sending them Pull Requests."
                            color="blue"
                        />
                    </div>

                    <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-3xl w-full">
                        <h3 className="font-bold text-xl mb-6 text-neutral-900 dark:text-white">Key Learnings</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Code - Docs</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    Documentation gets outdated the day you write it. Code is the only truth.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Proof - Pitch</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    Building the PoC myself (even with messy scripts) moved the project faster than any slide deck.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Speak Their Language</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    Designers gain trust when they understand how their decisions affect the build.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Systems Scale</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    The same pipeline that fixed our colors now handles typography, spacing, and corner radii.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
