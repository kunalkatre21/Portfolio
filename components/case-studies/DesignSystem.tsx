import React from 'react';
import { Package, Users, Zap, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { InsightCard, GoalCard, StatCard, DesignHighlight, SectionTitle } from './Shared';

export const DesignSystemCaseStudy: React.FC = () => {
  return (
    <div className="animate-fade-in">
        {/* Hero Section */}
        <div className="mb-24">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-neutral-500 uppercase tracking-widest text-sm font-semibold">Project for</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-200 dark:border-blue-800/50">Eka Care</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight text-neutral-900 dark:text-white">
                Automating Consistency
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-12 leading-relaxed max-w-3xl">
                I architected a "Traceable Token Pipeline" that transforms Figma into the Single Source of Truth, eliminating the interpretation gap between design and engineering across three platforms.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                <StatCard value="Zero" label="Handoff Errors" colorClass="text-green-600 dark:text-green-400" />
                <StatCard value="3x" label="Platforms Connected" colorClass="text-purple-600 dark:text-purple-400" />
                <StatCard value="3 Months" label="Core Infrastructure" colorClass="text-blue-600 dark:text-blue-400" />
            </div>

            <div className="rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-neutral-100 dark:bg-neutral-900">
                 <div className="aspect-video w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                     <img src="https://picsum.photos/seed/designsystem/1200/800" alt="Design System Architecture" className="w-full h-full object-cover" />
                 </div>
            </div>
        </div>

        {/* Section 1 */}
        <section className="mb-24">
            <SectionTitle number="01" title="The Executive Summary: From Static Library to Living System" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                Most design systems are static "reference libraries" that drift out of sync with production code. At Eka Care, supporting three distinct platforms (Android, iOS, Web) meant that "visual drift" was inevitable and expensive.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
                 <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">The Core Innovation</h3>
                 <p className="text-neutral-600 dark:text-neutral-300">
                    I architected a <strong>"Traceable Token Pipeline"</strong>—a system where Figma is not just a drawing tool, but the <strong>Single Source of Truth</strong> that compiles directly to production code. By treating design tokens as a software dependency, I reduced the "interpretation gap" between design and engineering to zero for connected components.
                 </p>
            </div>

            <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">The Business Problem: The "Drifting" UI & Native Friction</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Eka Care operates in a high-trust domain: Healthcare. Users trust apps that feel "native" and secure. Our previous attempts at a "One Size Fits All" system created two critical failures:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <InsightCard 
                    icon={<XCircle className="text-red-500" />}
                    title="Visual Drift"
                    quote="Developers manually copied Hex codes, leading to 50+ shades of 'Brand Blue' and inconsistent spacing across platforms."
                />
                <InsightCard 
                    icon={<AlertTriangle className="text-orange-500" />}
                    title="The 'Uncanny Valley' of UX"
                    quote="We were forcing web-like components onto mobile. An iOS user expects a specific 'push/pop' navigation; giving them a web modal eroded trust."
                />
            </div>
        </section>

        {/* Section 2 */}
        <section className="mb-24">
            <SectionTitle number="02" title="The Strategy: 'Native-First' & Automation" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                 I established two core architectural principles that would guide the entire system:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <GoalCard 
                    number="1" 
                    title="Semantic Abstraction" 
                    desc="We won't just name colors Blue/500. We will name them Action/Primary/Background. This allows us to re-theme the entire app for a hospital partner (white-labeling) without touching a single line of feature code."
                />
                <GoalCard 
                    number="2" 
                    title="The 'Zero-Handoff' Pipeline" 
                    desc="Design decisions should flow to code without human intervention."
                />
            </div>

            <h3 className="text-xl font-bold mb-6 text-neutral-900 dark:text-white">The Tech Stack (My "Design Engineering" Contribution)</h3>
            <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 mb-8">
                <table className="w-full text-left text-sm text-neutral-600 dark:text-neutral-400">
                    <thead className="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white font-bold">
                        <tr>
                            <th className="p-4">Layer</th>
                            <th className="p-4">Technology</th>
                            <th className="p-4">Purpose</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                        <tr>
                            <td className="p-4 font-bold">Input</td>
                            <td className="p-4 font-mono">Figma + Tokens Studio</td>
                            <td className="p-4">Managing multi-dimensional themes</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-bold">Middleware</td>
                            <td className="p-4 font-mono">GitHub Actions + Style Dictionary</td>
                            <td className="p-4">Transforming JSON to platform code</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-bold">Output</td>
                            <td className="p-4 font-mono">Native binaries</td>
                            <td className="p-4">.xml for Android, .swift for iOS, .css for Web</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* Section 3 */}
        <section className="mb-24">
            <SectionTitle number="03" title="Execution: The 'Button' Pilot" />
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                I chose the humble <strong>Button</strong> component as the "Tracer Bullet" to prove the system.
            </p>

            <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">Step A: The Token Taxonomy (Standardization)</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-100 dark:border-red-900/30">
                    <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">❌ Old System</h4>
                    <ul className="text-sm space-y-1 font-mono text-neutral-600 dark:text-neutral-400">
                        <li>EkaBlue</li>
                        <li>Red-Error</li>
                        <li>ButtonPrimary</li>
                    </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl border border-green-100 dark:border-green-900/30">
                    <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">✅ New System</h4>
                    <ul className="text-sm space-y-1 font-mono text-neutral-600 dark:text-neutral-400">
                        <li>sys.color.action.primary</li>
                        <li>sys.color.feedback.critical</li>
                        <li>sys.component.button.variant.primary</li>
                    </ul>
                </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">Step B: The Pipeline Build</h3>
            <div className="bg-neutral-900 text-neutral-300 p-6 rounded-xl font-mono text-sm mb-8">
                <p>Trigger: I push a new color update in Figma</p>
                <p className="pl-4">↓</p>
                <p>Action: The build script runs Style Dictionary</p>
                <p className="pl-4">↓</p>
                <p>Result: A Pull Request is automatically created in Android, iOS, and Web repos with updated code files</p>
            </div>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
            <SectionTitle number="04" title="The Outcome & 'So What?'" />
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    <CheckCircle className="text-green-500 mb-4" />
                    <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Zero Handoff Errors</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">It is now impossible for a developer to use the wrong color for a connected component. The system enforces it.</p>
                </div>
                <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    <Package className="text-purple-500 mb-4" />
                    <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Multi-Brand Ready</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Laid the groundwork for our white-label business. We can now spin up a "Hospital X" themed app simply by swapping the Token JSON file.</p>
                </div>
                <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    <Users className="text-blue-500 mb-4" />
                    <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">Engineering Trust</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">By speaking their language (JSON, GitHub, CI/CD), I bridged the gap between Design and Dev, transforming the Design System from a "nuance" into a "dependency."</p>
                </div>
            </div>

            <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="font-bold text-lg mb-4 text-neutral-900 dark:text-white">Key Learnings</h4>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400 list-disc pl-5">
                    <li><strong>Design Systems are Infrastructure.</strong> Treating design tokens as software dependencies fundamentally changes the relationship between design and development.</li>
                    <li><strong>Proof of Concept Before Pitch.</strong> Building the PoC myself using AI tools proved the value faster than any presentation could.</li>
                    <li><strong>Systems Thinking Scales.</strong> The same pipeline that solves button consistency can solve theming, spacing, and multi-brand scenarios.</li>
                </ul>
            </div>
        </section>
    </div>
  );
};