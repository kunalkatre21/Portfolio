import React from 'react';
import { Package, Smartphone, Monitor, Layers, GitBranch, Terminal, CheckCircle, XCircle, AlertTriangle, Database, Cpu, Zap, Repeat, Shield } from 'lucide-react';
import { InsightCard, CodeBlock, StatCard, SectionTitle, QuoteBlock, BrowserWindow, Divider, TextHighlight, DesignHighlight, GoalCard, MobileShell } from './Shared';
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
    <div className="animate-fade-in pb-20">
        {/* Hero */}
        <div className="mb-20">
             <div className="flex items-center gap-3 mb-8">
                <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Infrastructure</span>
                <span className="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white px-2 py-0.5 rounded text-xs font-bold">2022</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[0.9] text-neutral-900 dark:text-white tracking-tight">
                Design System: <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Killing the Handoff.</span>
            </h1>
            
            <div className="flex flex-col md:flex-col gap-8 md:gap-16 mb-16 items-start">
                <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
                    I connected Figma directly to Production code. <TextHighlight>Zero manual handoff.</TextHighlight> Zero visual drift across 3 platforms.
                </p>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <StatCard value="0" label="Handoff Errors" />
                    <StatCard value="100%" label="Sync" subLabel="Figma -> Code" />
                    <StatCard value="3" label="Platforms" subLabel="iOS, Android, Web" />
                </div>
            </div>

             <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800"
            >
                <img src={ASSETS.projects.designSystem.hero} alt="Design System Architecture" className="w-full object-cover" />
            </motion.div>
        </div>

        {/* Section 1: Executive Summary */}
        <section className="max-w-4xl mx-auto">
            <SectionTitle number="01" title="The Problem" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
                We had a "Style Guide," but developers ignored it. They guessed hex codes from screenshots. 
                <span className="text-red-500 font-bold"> We had 50 shades of "Brand Blue" in production.</span>
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
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
        <section className="max-w-6xl mx-auto">
            <SectionTitle number="02" title="The Fix" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl">
                I stopped treating Figma as a drawing tool and started treating it as a database. 
                I built a pipeline where design decisions compile directly into code.
            </p>
            
             <div className="grid md:grid-cols-2 gap-8 mb-16">
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
             <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 mb-8">
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
             
             <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-800 flex gap-4 items-start">
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
        <section className="max-w-6xl mx-auto">
            <SectionTitle number="03" title="Execution" />
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-4">1. Semantic Naming</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                        I audited the app and replaced hardcoded hex values with semantic tokens.
                    </p>
                    <div className="space-y-4">
                        <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30">
                            <div className="text-xs font-bold text-red-500 mb-2 uppercase">Before</div>
                            <CodeBlock code={oldToken} language="yaml" />
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/30">
                            <div className="text-xs font-bold text-green-500 mb-2 uppercase">After</div>
                            <CodeBlock code={newToken} language="yaml" />
                        </div>
                    </div>
                </div>
                <div>
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
        <section className="max-w-6xl mx-auto">
            <SectionTitle number="04" title="Impact" />
            
            <div className="grid md:grid-cols-3 gap-6 mb-16">
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
            
             <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-3xl">
                <h3 className="font-bold text-xl mb-6 text-neutral-900 dark:text-white">Key Learnings</h3>
                <div className="grid md:grid-cols-2 gap-8">
                     <div>
                         <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Code > Docs</h4>
                         <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                             Documentation gets outdated the day you write it. Code is the only truth.
                         </p>
                     </div>
                     <div>
                         <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Proof > Pitch</h4>
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
  );
};