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
                Automating <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Consistency.</span>
            </h1>
            
            <div className="flex flex-col md:flex-col gap-8 md:gap-16 mb-16 items-start">
                <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
                    I architected a <TextHighlight>Traceable Token Pipeline</TextHighlight> that transforms Figma into the Single Source of Truth, eliminating the interpretation gap between design and engineering across three platforms.
                </p>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <StatCard value="Zero" label="Handoff Errors" />
                    <StatCard value="3x" label="Platforms" subLabel="Connected" />
                    <StatCard value="3 Mo" label="Timeline" subLabel="Core Infra" />
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
            <SectionTitle number="01" title="From Static Library to Living System" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
                Most design systems are static "reference libraries" that drift out of sync. At Eka Care, supporting Android, iOS, and Web meant "visual drift" was inevitable and expensive.
            </p>
            
            <div className="bg-purple-50 dark:bg-purple-900/10 p-8 rounded-2xl border border-purple-100 dark:border-purple-800 mb-12">
                <h4 className="font-bold text-neutral-900 dark:text-white mb-2 text-lg">The Core Innovation</h4>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    I architected a <strong>Traceable Token Pipeline</strong>—where Figma is not just a drawing tool, but the <strong>Single Source of Truth</strong> that compiles directly to production code. This reduced the "interpretation gap" to zero.
                </p>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">The Business Problem</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
                 <InsightCard 
                    icon={<XCircle />}
                    title="Visual Drift"
                    quote="Developers manually copied Hex codes, leading to 50+ shades of 'Brand Blue'."
                    color="red"
                />
                 <InsightCard 
                    icon={<AlertTriangle />}
                    title="Uncanny Valley UX"
                    quote="We were forcing web-like components onto mobile. iOS users expect 'push/pop', not web modals."
                    color="orange"
                />
            </div>

            <QuoteBlock quote="We are wasting 20% of every sprint fixing UI bugs that shouldn't exist. We need a system that enforces consistency automatically." author="Stakeholder Pitch" />
        </section>

        <Divider />

        {/* Section 2: Strategy */}
        <section className="max-w-6xl mx-auto">
            <SectionTitle number="02" title="Strategy: Native-First & Automation" />
            
             <div className="grid md:grid-cols-2 gap-8 mb-16">
                 <GoalCard 
                    number="1" 
                    title="Semantic Abstraction" 
                    desc="We won't just name colors 'Blue/500'. We name them 'Action/Primary'. This allows re-theming (white-labeling) without touching feature code." 
                />
                 <GoalCard 
                    number="2" 
                    title="Zero-Handoff Pipeline" 
                    desc="Design decisions should flow to code without human intervention. Figma -> CI/CD -> Production." 
                />
             </div>

             <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">The Tech Stack</h3>
             <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 mb-8">
                 <div className="grid md:grid-cols-3 gap-8">
                     <div>
                         <div className="text-xs font-bold uppercase text-neutral-500 mb-2 tracking-widest">Input</div>
                         <div className="font-bold text-lg mb-1">Figma + Tokens Studio</div>
                         <p className="text-sm text-neutral-600 dark:text-neutral-400">Managing multi-dimensional themes</p>
                     </div>
                     <div className="md:border-l md:border-neutral-200 dark:md:border-neutral-800 md:pl-8">
                         <div className="text-xs font-bold uppercase text-neutral-500 mb-2 tracking-widest">Middleware</div>
                         <div className="font-bold text-lg mb-1">GitHub + Style Dictionary</div>
                         <p className="text-sm text-neutral-600 dark:text-neutral-400">Transforming JSON to platform code</p>
                     </div>
                     <div className="md:border-l md:border-neutral-200 dark:md:border-neutral-800 md:pl-8">
                         <div className="text-xs font-bold uppercase text-neutral-500 mb-2 tracking-widest">Output</div>
                         <div className="font-bold text-lg mb-1">Native Binaries</div>
                         <p className="text-sm text-neutral-600 dark:text-neutral-400">.xml, .swift, .css</p>
                     </div>
                 </div>
             </div>
             
             <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-800 flex gap-4 items-start">
                 <Zap className="text-blue-500 shrink-0 mt-1" size={20} />
                 <div>
                     <h4 className="font-bold text-neutral-900 dark:text-white text-sm">Self-Correction</h4>
                     <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                         Facing bandwidth constraints, I built the Proof of Concept (PoC) myself using AI tools to write the transformation scripts, proving value before asking for resources.
                     </p>
                 </div>
             </div>
        </section>

        <Divider />

        {/* Section 3: Execution */}
        <section className="max-w-6xl mx-auto">
            <SectionTitle number="03" title="Execution: The 'Button' Pilot" />
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Step A: Token Taxonomy</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                        I audited messy styles and restructured them using the C.T.I. (Category-Type-Item) standard.
                    </p>
                    <div className="space-y-4">
                        <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30">
                            <CodeBlock code={oldToken} language="yaml" />
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/30">
                            <CodeBlock code={newToken} language="yaml" />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Step B: The Pipeline Build</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                        I configured a GitHub Action that listens for changes in the Figma Token JSON file.
                    </p>
                    <CodeBlock code={pipelineCode} language="bash" />
                    
                    <div className="mt-8 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                        <h4 className="font-bold text-neutral-900 dark:text-white mb-2">Native Mapping</h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Instead of custom components, I mapped tokens to <strong>Material 3</strong> and <strong>UIKit</strong>. This ensures we inherit accessibility (screen readers) and interaction patterns (ripples, haptics) for free.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <Divider />

        {/* Section 4: Outcome */}
        <section className="max-w-6xl mx-auto">
            <SectionTitle number="04" title="The Outcome & 'So What?'" />
            
            <div className="grid md:grid-cols-3 gap-6 mb-16">
                <InsightCard 
                    icon={<CheckCircle />}
                    title="Zero Handoff Errors"
                    quote="It is now impossible for a developer to use the wrong color. The system enforces it."
                    color="green"
                />
                 <InsightCard 
                    icon={<Package />}
                    title="Multi-Brand Ready"
                    quote="Groundwork for white-labeling. Spin up 'Hospital X' theme by swapping JSON."
                    color="purple"
                />
                 <InsightCard 
                    icon={<Shield />}
                    title="Engineering Trust"
                    quote="Bridged the gap by speaking their language (JSON, CI/CD). Design System is now a dependency."
                    color="blue"
                />
            </div>

            <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-3xl">
                <h3 className="font-bold text-xl mb-6 text-neutral-900 dark:text-white">Key Learnings</h3>
                <div className="grid md:grid-cols-2 gap-8">
                     <div>
                         <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Design Systems are Infrastructure</h4>
                         <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                             Treating design tokens as software dependencies fundamentally changes the relationship between design and development.
                         </p>
                     </div>
                     <div>
                         <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Proof of Concept > Pitch</h4>
                         <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                             Building the PoC myself using AI tools proved the value faster than any slide deck could.
                         </p>
                     </div>
                     <div>
                         <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Native-First Thinking</h4>
                         <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                             Mapping to native systems (Material 3, UIKit) gives you free accessibility and performance wins.
                         </p>
                     </div>
                     <div>
                         <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Systems Scale</h4>
                         <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                             The same pipeline that solves button consistency can solve theming, spacing, and multi-brand scenarios.
                         </p>
                     </div>
                </div>
            </div>
        </section>
    </div>
  );
};