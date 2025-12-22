
import React, { useState, useEffect } from 'react';
import { Layers, GitBranch, Terminal, FileCode, RefreshCw, FolderIcon, FileType, CheckCircle, AlertTriangle, ArrowRight, Smartphone, Zap, XCircle, Info, Database, LayoutTemplate, Monitor, Cpu, Table, Check, Loader2, Activity, Heart, Scale, Thermometer } from 'lucide-react';
import { InsightCard, CodeBlock, StatCard, SectionTitle, Divider, CaseMeta } from './Shared';
import { ASSETS } from '../../data';
import { motion, AnimatePresence } from 'framer-motion';

// --- VISUALIZATIONS ---

const PipelineViz = () => {
    return (
        <div className="w-full bg-[#0a0a0a] rounded-2xl border border-neutral-800 p-8 md:p-12 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_40%)]" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-10">
                {/* Stage 1: Design */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl bg-[#1e1e1e] border border-neutral-700 flex items-center justify-center relative group">
                        <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Layers className="text-purple-500" size={32} />
                        <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">INPUT</div>
                    </div>
                    <div className="text-center">
                        <div className="text-white font-bold text-sm">Figma</div>
                        <div className="text-neutral-500 text-xs mt-1">Token Studio</div>
                    </div>
                </div>

                {/* Connection 1 */}
                <div className="hidden md:flex flex-1 h-[2px] bg-neutral-800 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </div>
                <ArrowRight className="md:hidden text-neutral-600 rotate-90 md:rotate-0" />

                {/* Stage 2: Transform */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl bg-[#1e1e1e] border border-neutral-700 flex items-center justify-center relative group">
                        <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <GitBranch className="text-blue-500" size={32} />
                        <div className="absolute -bottom-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">MIDDLEWARE</div>
                    </div>
                    <div className="text-center">
                        <div className="text-white font-bold text-sm">GitHub Actions</div>
                        <div className="text-neutral-500 text-xs mt-1">Style Dictionary</div>
                    </div>
                </div>

                {/* Connection 2 */}
                <div className="hidden md:flex flex-1 h-[2px] bg-neutral-800 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                    />
                </div>
                <ArrowRight className="md:hidden text-neutral-600 rotate-90 md:rotate-0" />

                {/* Stage 3: Consume */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl bg-[#1e1e1e] border border-neutral-700 flex items-center justify-center relative group">
                        <div className="absolute inset-0 bg-green-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Terminal className="text-green-500" size={32} />
                        <div className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">OUTPUT</div>
                    </div>
                    <div className="text-center">
                        <div className="text-white font-bold text-sm">Production</div>
                        <div className="text-neutral-500 text-xs mt-1">iOS / Android / Web(ShadcnUI) </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TokenTierViz = () => {
    return (
        <div className="w-full bg-neutral-50 dark:bg-neutral-900/30 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">

                {/* 1. Primitive */}
                <div className="flex-1 bg-white dark:bg-[#0A0A0A] rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col items-center text-center shadow-sm relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-1 bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-colors" />
                    <div className="mb-4 p-3 bg-neutral-100 dark:bg-neutral-900 rounded-full text-neutral-500 group-hover:text-blue-500 transition-colors">
                        <Database size={20} />
                    </div>
                    <h4 className="font-bold text-neutral-900 dark:text-white mb-2">1. Primitives</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                        Raw values. The palette. Agnostic of context.
                    </p>
                    <div className="mt-auto w-full bg-neutral-50 dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 rounded p-2 font-mono text-[10px] text-neutral-400">
                        blue.500: #3B82F6
                    </div>
                </div>

                <div className="hidden md:flex items-center text-neutral-300 dark:text-neutral-700">
                    <ArrowRight size={20} />
                </div>

                {/* 2. Semantic */}
                <div className="flex-1 bg-white dark:bg-[#0A0A0A] rounded-xl border-2 border-purple-500/20 p-6 flex flex-col items-center text-center shadow-xl relative overflow-hidden transform md:scale-105 z-10">
                    <div className="absolute top-0 left-0 w-full h-1 bg-purple-500" />
                    <div className="mb-4 p-3 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full">
                        <Cpu size={20} />
                    </div>
                    <h4 className="font-bold text-neutral-900 dark:text-white mb-2">2. Semantics</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                        The Logic Layer. Maps intent to primitives based on Theme & Brand.
                    </p>
                    <div className="mt-auto w-full bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30 rounded p-2 font-mono text-[10px] text-purple-600 dark:text-purple-300">
                        action.primary = blue.500
                    </div>
                </div>

                <div className="hidden md:flex items-center text-neutral-300 dark:text-neutral-700">
                    <ArrowRight size={20} />
                </div>

                {/* 3. Component */}
                <div className="flex-1 bg-white dark:bg-[#0A0A0A] rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col items-center text-center shadow-sm relative overflow-hidden group hover:border-green-500/30 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-1 bg-neutral-300 dark:bg-neutral-700 group-hover:bg-green-500 transition-colors" />
                    <div className="mb-4 p-3 bg-neutral-100 dark:bg-neutral-900 rounded-full text-neutral-500 group-hover:text-green-500 transition-colors">
                        <LayoutTemplate size={20} />
                    </div>
                    <h4 className="font-bold text-neutral-900 dark:text-white mb-2">3. Component</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                        Scoped specific overrides. Rarely used to maintain consistency.
                    </p>
                    <div className="mt-auto w-full bg-neutral-50 dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 rounded p-2 font-mono text-[10px] text-neutral-400">
                        btn.bg = action.primary
                    </div>
                </div>
            </div>
        </div>
    )
}

const TokenBindingVisual = () => {
    const [platform, setPlatform] = useState<'android' | 'ios' | 'web'>('android');

    // M3 Data
    const androidMappings = [
        { role: "Primary", token: "background/primary/default", desc: "Main brand color" },
        { role: "On Primary", token: "foreground/on-primary", desc: "Text on primary button" },
        { role: "Primary Container", token: "background/primary/hover", desc: "Interactive states" },
        { role: "Secondary", token: "background/primary/default", desc: "Remapped to Primary for Patient App" },
        { role: "Error", token: "background/danger/default", desc: "Destructive actions" },
        { role: "Surface", token: "background/surface/subtle", desc: "Card backgrounds" },
        { role: "Outline", token: "border/neutrals/default", desc: "Input borders" },
    ];

    // iOS Data
    const iosMappings = [
        { role: "Ascent", token: "background/primary/default", desc: "Global Tint Color" },
        { role: "Background/Primary", token: "background/surface/default", desc: "Base Controller View" },
        { role: "Background/Secondary", token: "background/surface/subtle", desc: "Grouped Table Cells" },
        { role: "Colors/Red", token: "background/danger/default", desc: "System Destructive" },
        { role: "Colors/Green", token: "background/success/default", desc: "System Success" },
        { role: "Colors/Orange", token: "background/warning/default", desc: "System Warning" },
        { role: "Fills/Primary", token: "background/neutrals/placeholder", desc: "Empty States" },
    ];

    // Web (Shadcn) Data - Derived from user screenshot
    const webMappings = [
        { role: "background", token: "background/surface/default", desc: "Page background" },
        { role: "foreground", token: "foreground/neutrals/heading", desc: "Base text color" },
        { role: "card", token: "card/background", desc: "Container background" },
        { role: "primary", token: "background/primary/default", desc: "Primary actions" },
        { role: "primary-foreground", token: "foreground/primary/on-primary", desc: "Text on primary" },
        { role: "secondary", token: "background/surface/subtle", desc: "Secondary actions" },
        { role: "muted", token: "background/surface/strong", desc: "De-emphasized backgrounds" },
        { role: "accent", token: "background/primary/subtle", desc: "Interactive highlights" },
        { role: "destructive", token: "background/danger/default", desc: "Error states" },
        { role: "border", token: "border/neutrals/default", desc: "Default borders" },
        { role: "input", token: "background/surface/subtle", desc: "Form fields" },
    ];

    const currentMappings = platform === 'android' ? androidMappings : platform === 'ios' ? iosMappings : webMappings;

    const getColor = (p: string) => {
        if (p === 'android') return 'text-green-600 dark:text-green-400';
        if (p === 'ios') return 'text-blue-600 dark:text-blue-400';
        return 'text-orange-600 dark:text-orange-400';
    };

    const getBgColor = (p: string) => {
        if (p === 'android') return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400';
        if (p === 'ios') return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400';
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400';
    };

    return (
        <div className="w-full bg-white dark:bg-[#111] rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden mt-8">
            <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#161616] gap-4">
                <div className="flex bg-neutral-200 dark:bg-[#0a0a0a] p-1 rounded-lg border border-neutral-300 dark:border-neutral-800 overflow-x-auto max-w-full">
                    <button
                        onClick={() => setPlatform('android')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${platform === 'android'
                            ? 'bg-white dark:bg-[#222] text-green-600 dark:text-green-400 shadow-sm'
                            : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
                            }`}
                    >
                        <Smartphone size={14} /> Android (M3)
                    </button>
                    <button
                        onClick={() => setPlatform('ios')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${platform === 'ios'
                            ? 'bg-white dark:bg-[#222] text-blue-600 dark:text-blue-400 shadow-sm'
                            : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
                            }`}
                    >
                        <Smartphone size={14} /> iOS (UIKit)
                    </button>
                    <button
                        onClick={() => setPlatform('web')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${platform === 'web'
                            ? 'bg-white dark:bg-[#222] text-orange-600 dark:text-orange-400 shadow-sm'
                            : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
                            }`}
                    >
                        <Monitor size={14} /> Web (Shadcn)
                    </button>
                </div>

                <div className="text-[10px] font-mono text-neutral-400 flex items-center gap-2 whitespace-nowrap">
                    <Table size={12} />
                    {platform === 'android' ? 'mapping_m3.json' : platform === 'ios' ? 'mapping_ios.json' : 'mapping_web.json'}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200 dark:divide-neutral-800">
                {/* Left: Visual Context */}
                <div className="p-8 flex flex-col justify-center bg-neutral-50/50 dark:bg-[#0a0a0a]">
                    <div className="flex justify-between items-center mb-8">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Live Preview</div>
                        <div className="px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-800 text-[10px] font-mono text-neutral-600 dark:text-neutral-400">Mode: Light</div>
                    </div>

                    <AnimatePresence mode="wait">
                        {platform === 'android' && (
                            <motion.div
                                key="android-viz"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="space-y-6"
                            >
                                {/* M3 Primary Button */}
                                <div className="flex gap-6 items-center group">
                                    <div className="w-24 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg text-white font-medium text-xs tracking-wide">
                                        Next
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-neutral-900 dark:text-white">Primary</span>
                                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${getBgColor(platform)}`}>Linked</span>
                                        </div>
                                        <div className="text-[10px] text-neutral-500">
                                            Consumes <code className="bg-neutral-200 dark:bg-neutral-800 px-1 rounded">background/primary/default</code>
                                        </div>
                                    </div>
                                </div>
                                {/* M3 Card Surface */}
                                <div className="flex gap-6 items-center group">
                                    <div className="w-24 h-14 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-400 text-[10px]">
                                        Surface
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-neutral-900 dark:text-white">Surface</span>
                                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${getBgColor(platform)}`}>Linked</span>
                                        </div>
                                        <div className="text-[10px] text-neutral-500">
                                            Consumes <code className="bg-neutral-200 dark:bg-neutral-800 px-1 rounded">background/surface/subtle</code>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        {platform === 'ios' && (
                            <motion.div
                                key="ios-viz"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="space-y-6"
                            >
                                {/* iOS Toggle Row */}
                                <div className="flex gap-6 items-center group">
                                    <div className="w-48 bg-white border border-neutral-200 rounded-lg overflow-hidden">
                                        <div className="flex justify-between items-center p-3 border-b border-neutral-100">
                                            <span className="text-[10px] font-medium text-neutral-900">Notifications</span>
                                            <div className="w-8 h-5 bg-blue-600 rounded-full relative">
                                                <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-neutral-900 dark:text-white">Ascent</span>
                                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${getBgColor(platform)}`}>Linked</span>
                                        </div>
                                        <div className="text-[10px] text-neutral-500">
                                            Consumes <code className="bg-neutral-200 dark:bg-neutral-800 px-1 rounded">background/primary/default</code>
                                        </div>
                                    </div>
                                </div>
                                {/* iOS Table Cell Grouped */}
                                <div className="flex gap-6 items-center group">
                                    <div className="w-24 h-14 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-400 text-[10px]">
                                        Grouped BG
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-neutral-900 dark:text-white">Bg/Secondary</span>
                                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${getBgColor(platform)}`}>Linked</span>
                                        </div>
                                        <div className="text-[10px] text-neutral-500">
                                            Consumes <code className="bg-neutral-200 dark:bg-neutral-800 px-1 rounded">background/surface/subtle</code>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        {platform === 'web' && (
                            <motion.div
                                key="web-viz"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="space-y-6"
                            >
                                {/* Shadcn Card */}
                                <div className="flex gap-6 items-center group">
                                    <div className="w-32 p-3 rounded-lg border border-neutral-200 bg-white shadow-sm flex flex-col gap-2">
                                        <div className="h-2 w-1/2 bg-neutral-900 rounded-sm opacity-20" />
                                        <div className="h-2 w-3/4 bg-neutral-500 rounded-sm opacity-20" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-neutral-900 dark:text-white">Card</span>
                                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${getBgColor(platform)}`}>Linked</span>
                                        </div>
                                        <div className="text-[10px] text-neutral-500">
                                            Consumes <code className="bg-neutral-200 dark:bg-neutral-800 px-1 rounded">card/background</code>
                                        </div>
                                    </div>
                                </div>
                                {/* Shadcn Button */}
                                <div className="flex gap-6 items-center group">
                                    <div className="px-4 py-2 rounded-md bg-blue-600 text-white text-[10px] font-medium shadow-sm">
                                        Save Changes
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-neutral-900 dark:text-white">Primary</span>
                                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${getBgColor(platform)}`}>Linked</span>
                                        </div>
                                        <div className="text-[10px] text-neutral-500">
                                            Consumes <code className="bg-neutral-200 dark:bg-neutral-800 px-1 rounded">background/primary/default</code>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right: The Data Table */}
                <div className="bg-[#1e1e1e] p-0 font-mono text-[10px] md:text-xs h-full min-h-[300px]">
                    <div className="grid grid-cols-[1fr_1.5fr] border-b border-neutral-800 bg-[#252526]">
                        <div className="px-4 py-3 text-neutral-400 font-bold">
                            {platform === 'android' ? 'M3 Slot' : platform === 'ios' ? 'UIKit Token' : 'Shadcn Variable'}
                        </div>
                        <div className="px-4 py-3 text-neutral-400 font-bold">Mapped Token Path</div>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                        {currentMappings.map((m, i) => (
                            <div key={i} className="grid grid-cols-[1fr_1.5fr] border-b border-neutral-800/50 hover:bg-[#2d2d2d] transition-colors group">
                                <div className={`px-4 py-3 font-medium flex items-center gap-2 ${getColor(platform)}`}>
                                    {m.role}
                                </div>
                                <div className="px-4 py-3 text-neutral-400 group-hover:text-white transition-colors flex items-center gap-2">
                                    <span className="text-neutral-600">{`{`}</span>
                                    {m.token}
                                    <span className="text-neutral-600">{`}`}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const DevOpsTerminal = () => {
    const [stepIndex, setStepIndex] = useState(0);
    const steps = [
        { id: '1', text: '[watch] Detected change in tokens/colors.json', status: 'done', delay: 1000 },
        { id: '2', text: '[build] Generating Assets.xcassets for iOS...', status: 'done', delay: 2000 },
        { id: '3', text: '[build] Generating MaterialTheme.kt for Android...', status: 'done', delay: 3000 },
        { id: '4', text: '[build] Generating variables.css for Web...', status: 'done', delay: 4000 },
        { id: '5', text: '[deploy] Published @eka/design-system v2.4.0', status: 'done', delay: 5000 },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setStepIndex(prev => (prev + 1) % (steps.length + 3)); // +3 for pause at end
        }, 1200);
        return () => clearInterval(timer);
    }, []);

    const getStatusIcon = (idx: number) => {
        if (idx < stepIndex) return <Check className="text-green-500" size={14} />;
        if (idx === stepIndex) return <Loader2 className="text-blue-500 animate-spin" size={14} />;
        return <div className="w-3.5 h-3.5 rounded-full border-2 border-neutral-700" />;
    }

    return (
        <div className="bg-[#1e1e1e] rounded-xl border border-neutral-800 overflow-hidden font-mono text-xs w-full shadow-2xl h-full flex flex-col">
            {/* Terminal Header */}
            <div className="bg-[#252526] px-4 py-2 border-b border-neutral-800 flex items-center gap-2 shrink-0">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-2 text-neutral-400 flex items-center gap-1">
                    <GitBranch size={12} />
                    <span>ci/cd-pipeline</span>
                </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 space-y-3 flex-1 overflow-hidden relative">
                <div className="absolute inset-0 p-4 space-y-3">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: idx <= stepIndex ? 1 : 0.3, x: 0 }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-4 flex justify-center shrink-0">
                                {getStatusIcon(idx)}
                            </div>
                            <span className={`${idx < stepIndex ? 'text-neutral-400' : idx === stepIndex ? 'text-white' : 'text-neutral-600'}`}>
                                {step.text}
                            </span>
                            {idx === stepIndex && (
                                <span className="inline-block w-2 h-4 bg-blue-500 animate-pulse" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="bg-[#252526] px-4 py-2 border-t border-neutral-800 text-[10px] text-neutral-500 flex justify-between shrink-0">
                <span>GitHub Actions / Workflow #8821</span>
                <span>Automated</span>
            </div>
        </div>
    )
}

const ConfigOrchestrator = () => {
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);

    const configCode = `// config.js
const { isNotThemeToken, isThemeToken } = require('./src/filter.js');

function registerCustomCode(StyleDictionary) {
  // 1. INPUT SANITATION
  StyleDictionary.registerParser(require('./src/parser.js'));
  
  // 2. NATIVE GENERATORS
  StyleDictionary.registerAction(require('./src/ios-colorsets-themed-action.js'));
  StyleDictionary.registerFormat(require('./src/compose-material-scheme.js'));
  
  // 3. MULTI-BRAND FILTERS
  StyleDictionary.registerFilter({ name: 'isPatient', filter: (t) => t.brand === 'patient' });
  StyleDictionary.registerFilter({ name: 'isDoctor', filter: (t) => t.brand === 'doctor' });
}

function getConfig(brand) {
  return {
    source: ["tokens/colors.json"],
    platforms: {
      "ios": {
        buildPath: \`build/ios-\${brand}/\`,
        actions: ["ios-colorsets-themed"], // Generates .colorset
        filter: (token) => token.brand === brand // Filters by brand
      },
      "android": {
        buildPath: "build/android/",
        files: [{ 
          destination: "MaterialTheme.kt",
          format: "compose/material-scheme" // Generates Kotlin object
        }]
      }
    }
  };
}`;

    // Helper to highlight lines based on hover state
    const getOpacity = (lineContent: string) => {
        if (!hoveredSection) return 0.7; // Default

        if (hoveredSection === 'sanitation' && lineContent.includes('parser.js')) return 1;
        if (hoveredSection === 'native' && (lineContent.includes('registerAction') || lineContent.includes('registerFormat') || lineContent.includes('ios-colorsets') || lineContent.includes('compose/material'))) return 1;
        if (hoveredSection === 'multibrand' && (lineContent.includes('registerFilter') || lineContent.includes('filter:'))) return 1;

        return 0.2; // Dimmed
    }

    return (
        <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Narrative - Left */}
            <div className="space-y-6">
                <motion.div
                    onHoverStart={() => setHoveredSection('sanitation')}
                    onHoverEnd={() => setHoveredSection(null)}
                    className={`p-6 rounded-xl border transition-all duration-300 cursor-default ${hoveredSection === 'sanitation' ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800' : 'bg-white dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800'}`}
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${hoveredSection === 'sanitation' ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-600' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500'}`}>
                            <XCircle size={18} />
                        </div>
                        <h4 className="font-bold text-neutral-900 dark:text-white">1. Input Sanitation</h4>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Token Studio exports messy JSON with metadata that breaks build tools. We inject a custom <code>parser.js</code> to surgically strip non-token data before the build starts.
                    </p>
                </motion.div>

                <motion.div
                    onHoverStart={() => setHoveredSection('native')}
                    onHoverEnd={() => setHoveredSection(null)}
                    className={`p-6 rounded-xl border transition-all duration-300 cursor-default ${hoveredSection === 'native' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' : 'bg-white dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800'}`}
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${hoveredSection === 'native' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500'}`}>
                            <Smartphone size={18} />
                        </div>
                        <h4 className="font-bold text-neutral-900 dark:text-white">2. Native Asset Generation</h4>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Generic JSON isn't enough. iOS needs <code>.colorset</code> folders for Xcode, and Android needs Kotlin objects. We registered custom formats to generate platform-native code.
                    </p>
                </motion.div>

                <motion.div
                    onHoverStart={() => setHoveredSection('multibrand')}
                    onHoverEnd={() => setHoveredSection(null)}
                    className={`p-6 rounded-xl border transition-all duration-300 cursor-default ${hoveredSection === 'multibrand' ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-white dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800'}`}
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${hoveredSection === 'multibrand' ? 'bg-green-100 dark:bg-green-900/50 text-green-600' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500'}`}>
                            <Layers size={18} />
                        </div>
                        <h4 className="font-bold text-neutral-900 dark:text-white">3. Multi-Brand Filtering</h4>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        We support 'Patient' and 'Doctor' apps from one source. Custom filters fork the build process to generate distinct themes from a single token set.
                    </p>
                </motion.div>
            </div>

            {/* Code - Right */}
            <div className="rounded-xl overflow-hidden bg-[#1e1e1e] border border-neutral-800 shadow-2xl text-xs md:text-sm font-mono leading-relaxed h-full min-h-[400px]">
                <div className="flex gap-2 p-3 bg-[#252526] border-b border-neutral-800">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <div className="ml-2 text-neutral-500 text-[10px] flex items-center">config.js</div>
                </div>
                <div className="p-4 overflow-x-auto w-full">
                    <pre className="font-mono">
                        {configCode.split('\n').map((line, i) => (
                            <div
                                key={i}
                                style={{ opacity: getOpacity(line) }}
                                className={`transition-opacity duration-300 ${getOpacity(line) === 1 ? 'text-blue-200 font-bold' : 'text-neutral-400'}`}
                            >
                                {line}
                            </div>
                        ))}
                    </pre>
                </div>
            </div>
        </div>
    )
}

const LogicExplorer = () => {
    const [activeId, setActiveId] = useState('uifont');

    const items = [
        {
            id: 'uifont',
            title: 'Auto-Accessibility',
            fileName: 'swift-uifont-extension.hbs',
            description: "Designers work in static pixels. iOS requires Dynamic Type. I wrote this template to bake accessibility scaling directly into the generated code, so devs never miss it.",
            icon: <Smartphone size={18} />,
            color: 'blue',
            code: `// src/swift-uifont-extension.hbs
import UIKit

// Generated from Token Studio. Do not edit.
// Implements UIFontMetrics for Dynamic Type scaling.

public extension UIFont {
{{#each fonts}}
    static var {{this.name}}: UIFont {
        let font = appFont(weight: .{{this.weight}}, size: {{this.size}})
        // The magic: wrap font in metrics scaler
        let metrics = UIFontMetrics(forTextStyle: .{{this.style}})
        return metrics.scaledFont(for: font)
    }
{{/each}}
}`
        },
        {
            id: 'recursion',
            title: 'Deep Alias Resolution',
            fileName: 'compose-object-with-references.js',
            description: "Token Studio allows infinite nesting (Color → Semantic → Primitive). Standard tools crashed. I wrote a recursive algorithm to flatten these dependency trees for Android.",
            icon: <FileCode size={18} />,
            color: 'purple',
            code: `// src/compose-object-with-references.js

function resolveAlias(aliasValue, allTokens) {
  // 1. Validate reference syntax { ... }
  if (!aliasValue.startsWith('{')) return null;

  const path = aliasValue.slice(1, -1);
  
  // 2. Recursive Lookup
  // If the target is itself an alias, keep digging
  let token = tokenMap.get(path);
  while (token?.value?.startsWith('{')) {
      token = resolveAlias(token.value, allTokens);
  }

  // 3. Fuzzy Match Fallback
  // Handle naming convention mismatches (kebab vs camel)
  if (!token) token = fuzzyMatch(path, allTokens);

  return token;
}`
        },
        {
            id: 'native',
            title: 'Native Asset Gen',
            fileName: 'ios-colorsets-themed-action.js',
            description: "Xcode expects specific \`.colorset\` folder structures, not JSON. This script automates the file-system operations to generate production-ready iOS assets.",
            icon: <FolderIcon size={18} />,
            color: 'green',
            code: `// src/ios-colorsets-themed-action.js
const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'ios-colorsets-themed',
  do: (dictionary, platform) => {
    const assetPath = path.join(platform.buildPath, 'Assets.xcassets');
    
    // Iterate tokens and generate physical folders
    dictionary.allProperties.forEach((token) => {
        const folder = path.join(assetPath, \`\${token.name}.colorset\`);
        fs.mkdirSync(folder, { recursive: true });

        // Generate Contents.json for Xcode
        const content = {
          colors: [
            { idiom: 'universal', color: lightColor },
            { idiom: 'universal', appearances: [{appearance: 'dark'}], color: darkColor }
          ]
        };
        
        fs.writeFileSync(
            path.join(folder, 'Contents.json'), 
            JSON.stringify(content, null, 2)
        );
    });
  }
};`
        },
        {
            id: 'sanitize',
            title: 'Data Hygiene',
            fileName: 'resolve-references.js',
            description: "Design data is messy. I built middleware to strip broken references and normalize naming conventions before the build pipeline runs.",
            icon: <RefreshCw size={18} />,
            color: 'orange',
            code: `// src/resolve-relative-references.js

module.exports = {
    name: 'sanitize-references',
    matcher: (token) => token.value.includes('{'),
    transform: (token, options) => {
        // Fix common designer typos in paths
        let ref = token.value.replace('Semantic.', 'semantic.');
        
        // Check if reference actually exists
        if (!options.dictionary.usesReference(ref)) {
            console.warn(\`Broken link found: \${ref}\`);
            return '#FF00FF'; // Return hot pink for visual debugging
        }

        return ref;
    }
};`
        }
    ];

    const activeItem = items.find(i => i.id === activeId) || items[0];

    const getColorClasses = (color: string, isActive: boolean) => {
        const map: Record<string, string> = {
            blue: isActive ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' : 'hover:border-blue-200 dark:hover:border-blue-800',
            purple: isActive ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800' : 'hover:border-purple-200 dark:hover:border-purple-800',
            green: isActive ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'hover:border-green-200 dark:hover:border-green-800',
            orange: isActive ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800' : 'hover:border-orange-200 dark:hover:border-orange-800',
        };
        const iconMap: Record<string, string> = {
            blue: isActive ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500',
            purple: isActive ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-600' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500',
            green: isActive ? 'bg-green-100 dark:bg-green-900/50 text-green-600' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500',
            orange: isActive ? 'bg-orange-100 dark:bg-orange-900/50 text-orange-600' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500',
        };
        return {
            card: map[color],
            icon: iconMap[color]
        };
    };

    return (
        <div className="grid lg:grid-cols-2 gap-8 items-start mt-24">
            {/* Left Column: Contextual Navigation */}
            <div className="space-y-4">
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Custom Logic</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Configuration wasn't enough. I wrote custom transformers to solve specific platform constraints.
                    </p>
                </div>

                {items.map(item => {
                    const styles = getColorClasses(item.color, activeId === item.id);
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveId(item.id)}
                            className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex gap-4 group ${activeId === item.id
                                ? styles.card
                                : 'bg-white dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800'
                                }`}
                        >
                            <div className={`p-3 rounded-lg h-fit transition-colors ${styles.icon}`}>
                                {item.icon}
                            </div>
                            <div>
                                <h4 className={`font-bold mb-2 transition-colors ${activeId === item.id ? 'text-neutral-900 dark:text-white' : 'text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white'
                                    }`}>
                                    {item.title}
                                </h4>
                                <p className={`text-sm leading-relaxed ${activeId === item.id ? 'text-neutral-700 dark:text-neutral-300' : 'text-neutral-500 dark:text-neutral-500'
                                    }`}>
                                    {item.description}
                                </p>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Right Column: Code Editor */}
            <div className="rounded-xl overflow-hidden bg-[#1e1e1e] border border-neutral-800 shadow-2xl text-xs md:text-sm font-mono leading-relaxed h-full min-h-[500px] flex flex-col sticky top-24">
                <div className="flex justify-between items-center p-3 bg-[#252526] border-b border-neutral-800">
                    <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-neutral-500 text-[10px] flex items-center gap-2">
                        <FileCode size={12} />
                        {activeItem.fileName}
                    </div>
                    <div className="w-8" /> {/* Spacer for centering */}
                </div>

                <div className="p-6 overflow-x-auto w-full flex-1 custom-scrollbar">
                    <AnimatePresence mode="wait">
                        <motion.pre
                            key={activeItem.id}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="font-mono text-blue-100"
                        >
                            <code>{activeItem.code}</code>
                        </motion.pre>
                    </AnimatePresence>
                </div>

                {/* Footer status bar */}
                <div className="bg-[#007acc] text-white px-3 py-1 text-[10px] flex justify-between items-center">
                    <span>JavaScript / Handlebars</span>
                    <span>Ln 1, Col 1</span>
                </div>
            </div>
        </div>
    );
};

const LiveSimulator = () => {
    const [theme, setTheme] = useState<'patient' | 'doctor'>('patient');
    const [platform, setPlatform] = useState<'android' | 'ios' | 'web'>('android');

    // Theme Configurations
    const themes = {
        patient: {
            primary: 'bg-blue-600',
            primaryText: 'text-blue-600',
            surface: 'bg-blue-50 dark:bg-blue-900/10',
            border: 'border-blue-200 dark:border-blue-800',
            label: 'Patient (Blue)'
        },
        doctor: {
            primary: 'bg-purple-600',
            primaryText: 'text-purple-600',
            surface: 'bg-purple-50 dark:bg-purple-900/10',
            border: 'border-purple-200 dark:border-purple-800',
            label: 'Doctor (Purple)'
        }
    };
    const activeTheme = themes[theme];

    // Data Mock
    const vitals = [
        { label: "Heart Rate", value: "72", unit: "bpm", icon: <Heart size={20} className={activeTheme.primaryText} />, status: "Normal" },
        { label: "Blood Pressure", value: "120/80", unit: "mmHg", icon: <Activity size={20} className={activeTheme.primaryText} />, status: "Optimal" },
        { label: "Weight", value: "75.4", unit: "kg", icon: <Scale size={20} className={activeTheme.primaryText} />, status: "Stable" },
    ];

    return (
        <div className="bg-neutral-50 dark:bg-[#0a0a0a] rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 shadow-sm">
            {/* Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                <div className="flex p-1 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    {(['android', 'ios', 'web'] as const).map(p => (
                        <button
                            key={p}
                            onClick={() => setPlatform(p)}
                            className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${platform === p ? 'bg-neutral-900 dark:bg-white text-white dark:text-black shadow-md' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'}`}
                        >
                            {p}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Global Theme:</span>
                    <div className="flex gap-2">
                        <button onClick={() => setTheme('patient')} className={`w-8 h-8 rounded-full bg-blue-600 border-2 transition-transform hover:scale-110 ${theme === 'patient' ? 'border-white dark:border-white shadow-[0_0_0_2px_#2563EB]' : 'border-transparent opacity-50'}`} />
                        <button onClick={() => setTheme('doctor')} className={`w-8 h-8 rounded-full bg-purple-600 border-2 transition-transform hover:scale-110 ${theme === 'doctor' ? 'border-white dark:border-white shadow-[0_0_0_2px_#9333EA]' : 'border-transparent opacity-50'}`} />
                    </div>
                </div>
            </div>

            {/* Simulator Viewport */}
            <div className="flex justify-center">
                <AnimatePresence mode="wait">
                    {/* ANDROID VIEW */}
                    {platform === 'android' && (
                        <motion.div
                            key="android"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-[300px] bg-white dark:bg-[#121212] rounded-[20px] overflow-hidden shadow-2xl border-[8px] border-neutral-800 dark:border-neutral-700 aspect-[9/18] relative"
                        >
                            <div className="h-6 bg-neutral-800 dark:bg-neutral-900 w-full mb-2" />
                            <div className="px-4 py-4">
                                <h3 className={`text-2xl font-normal text-neutral-900 dark:text-white mb-6 font-sans`}>Vitals</h3>
                                <div className="space-y-4">
                                    {vitals.map((v, i) => (
                                        <div key={i} className={`p-4 rounded-2xl ${activeTheme.surface} flex items-center gap-4`}>
                                            <div className="p-3 bg-white dark:bg-white/10 rounded-full">{v.icon}</div>
                                            <div>
                                                <div className="text-sm text-neutral-500 dark:text-neutral-400">{v.label}</div>
                                                <div className="text-xl font-medium text-neutral-900 dark:text-white">{v.value} <span className="text-xs text-neutral-500">{v.unit}</span></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className={`absolute bottom-6 right-6 w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center text-white ${activeTheme.primary}`}>
                                    <span className="text-2xl">+</span>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* iOS VIEW */}
                    {platform === 'ios' && (
                        <motion.div
                            key="ios"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-[300px] bg-[#F2F2F7] dark:bg-[#000] rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-neutral-800 dark:border-neutral-700 aspect-[9/18] relative"
                        >
                            <div className="h-8 bg-black/5 dark:bg-white/5 w-1/2 mx-auto rounded-b-xl mb-4" />
                            <div className="px-4">
                                <h3 className="text-3xl font-bold text-black dark:text-white mb-4 tracking-tight">Health</h3>
                                <div className="bg-white dark:bg-[#1C1C1E] rounded-xl overflow-hidden mb-6">
                                    {vitals.map((v, i) => (
                                        <div key={i} className={`flex items-center justify-between p-4 border-b border-neutral-100 dark:border-neutral-800 last:border-0`}>
                                            <div className="flex items-center gap-3">
                                                <div className={`${activeTheme.primaryText}`}>{v.icon}</div>
                                                <span className="font-medium text-black dark:text-white">{v.label}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-neutral-500">{v.value}</span>
                                                <span className="text-xs text-neutral-400">{v.unit}</span>
                                                <ArrowRight size={14} className="text-neutral-300" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* WEB VIEW */}
                    {platform === 'web' && (
                        <motion.div
                            key="web"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-[500px] bg-white dark:bg-[#0a0a0a] rounded-xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 p-8 relative min-h-[300px] flex flex-col"
                        >
                            {/* Browser Header */}
                            <div className="flex gap-2 mb-8 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                {vitals.map((v, i) => (
                                    <div key={i} className={`rounded-xl border p-4 flex flex-col justify-between h-32 ${activeTheme.surface} ${activeTheme.border}`}>
                                        <div className="flex justify-between items-start">
                                            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">{v.label}</span>
                                            {v.icon}
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-neutral-900 dark:text-white">{v.value}</div>
                                            <div className="text-xs text-neutral-500 mt-1">{v.unit}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={`mt-6 self-end px-4 py-2 rounded-lg text-white font-medium text-sm ${activeTheme.primary}`}>
                                Download Report
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export const DesignSystemCaseStudy: React.FC = () => {

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
            </div>

            {/* Content */}
            <div className="relative z-10 pt-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Infrastructure</span>
                        <span className="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white px-2 py-0.5 rounded text-xs font-bold">2022</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold mb-12 leading-[0.9] text-neutral-900 dark:text-white tracking-tight">
                        Design Ops: <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Automating Scale.</span>
                    </h1>
                </div>

                <CaseMeta
                    role="Design Systems Architect"
                    team="3 Platforms (iOS, Android, Web)"
                    timeline="6 Months"
                    overview="I built a multi-platform Design System that automated the handoff process. We moved from manual hex-code copy-pasting to a fully automated CI/CD pipeline for design tokens."
                />

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
                    <StatCard value="0" label="Handoff Errors" subLabel="Post-Automation" />
                    <StatCard value="100%" label="Consistency" subLabel="Cross-Platform" />
                    <StatCard value="10x" label="Speed" subLabel="Theme Updates" />
                    <StatCard value="3" label="Platforms" subLabel="Single Source of Truth" />
                </div>

                {/* Section 1: The Problem */}
                <section className="mb-24">
                    <SectionTitle number="01" title="The Problem" />
                    <div className="max-w-4xl mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Context</h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            In 2024, we pivoted to B2B2C native SDKs. We adopted native mobile stacks and shadcn/ui for web, but the disconnected libraries created three specific points of failure.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <InsightCard
                            icon={<XCircle />}
                            title='The "Three-Team" Tax'
                            quote="Styles lived in silos: iOS, Android, and Web. A simple color update required aligning three separate engineering sprints. Result: Minutes of design work took weeks to ship."
                            color="orange"
                        />
                        <InsightCard
                            icon={<Database />}
                            title="Ghost Debt"
                            quote='We accumulated "Ghost Styles"&mdash;dozens of accidental variations (like #EFEFEF vs #F4F4F4). Most were unused, but deleting them was too risky. Result: A bloated, fragile codebase that developers feared touching.'
                            color="purple"
                        />
                        <InsightCard
                            icon={<AlertTriangle />}
                            title="The Sales Blocker"
                            quote="Styling was coupled to code, not configuration. Onboarding a white-label partner required a full code deployment rather than a settings tweak. Result: We literally couldn't onboard partners fast enough."
                            color="red"
                        />
                    </div>
                </section>

                <Divider />

                {/* Section 2: The Pipeline */}
                <section className="mb-24">
                    <SectionTitle number="02" title="The Pipeline" />
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mb-12 leading-relaxed">
                        I treated Design as Code. I built a pipeline where Figma is the IDE, and tokens are deployed like software packages.
                    </p>

                    <PipelineViz />
                </section>

                <Divider />

                {/* Section 3: Token Taxonomy */}
                <section className="mb-24">
                    <SectionTitle number="03" title="Token Architecture" />
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mb-12 leading-relaxed">
                        We moved away from raw values. We adopted a 3-tier token system to separate <span className="text-neutral-900 dark:text-white font-bold">what it looks like</span> from <span className="text-neutral-900 dark:text-white font-bold">what it means</span>.
                    </p>

                    <TokenTierViz />
                </section>

                <Divider />

                {/* Section 4: Platform Binding */}
                <section className="mb-24">
                    <SectionTitle number="04" title="Platform Agnostic" />
                    <div className="max-w-4xl mb-12">
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            This was the hardest part. iOS uses `Semantic Colors`. Android Material 3 uses `Roles`. Web uses CSS Variables.
                            <br /><br />
                            We couldn't force one naming convention on everyone.
                            Instead, I built a <span className="text-purple-500 font-bold">Binding Layer</span> that maps our semantic tokens to each platform's native language.
                        </p>
                    </div>

                    <TokenBindingVisual />
                </section>

                <Divider />

                {/* Section 5: Engineering ("The Engine Room") */}
                <section className="mb-24 w-full">
                    <SectionTitle number="05" title="The Engine Room" />
                    <p className="text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl leading-relaxed">
                        Style Dictionary is powerful, but out of the box, it’s generic.
                        I built custom transformers to handle deep nesting, clean messy designer data, and generate native accessibility code.
                    </p>

                    <ConfigOrchestrator />
                    <LogicExplorer />
                </section>

                <Divider />

                {/* Section 6: Outcome (User Experience) */}
                <section className="mb-24 w-full">
                    <SectionTitle number="06" title="The User Experience" />

                    <div className="grid md:grid-cols-2 gap-16 mb-24 w-full items-start">
                        <div className="min-w-0 flex flex-col h-full">
                            <h3 className="font-bold text-2xl text-neutral-900 dark:text-white mb-8">The "Invisible" Handoff</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                                We replaced meetings with Git commits. Here is what the automated pipeline looks like today:
                            </p>
                            <div className="h-[300px]">
                                <DevOpsTerminal />
                            </div>
                        </div>
                        <div className="min-w-0 md:sticky md:top-24">
                            <h3 className="font-bold text-2xl text-neutral-900 dark:text-white mb-8">The Magic Moment</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-sm">
                                A single token change in Figma propagates to all platforms.
                                Below, the <span className="text-blue-500 font-bold">Primary</span> token is consistent, but the UI component is Native to the platform.
                            </p>
                            <LiveSimulator />
                        </div>
                    </div>

                    {/* Retrospective */}
                    <div className="w-full">
                        <h3 className="font-bold text-2xl mb-8 text-neutral-900 dark:text-white">Retrospective</h3>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-purple-500/30 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
                                    <Layers size={24} />
                                </div>
                                <h4 className="font-bold text-lg text-neutral-900 dark:text-white mb-3">Ownership Shift</h4>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    Designers now fully own the decision-making process. We reduced the time to update system-wide tokens from <strong>2 days to ~5 minutes</strong>.
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-green-500/30 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center mb-6">
                                    <Zap size={24} fill="currentColor" />
                                </div>
                                <h4 className="font-bold text-lg text-neutral-900 dark:text-white mb-3">Zero Handoff</h4>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    Developers no longer copy-paste hex codes or guess margins. They simply review a Pull Request and hit Merge.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
