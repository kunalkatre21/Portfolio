import React from 'react';
import { motion } from 'framer-motion';

// --- WRAPPERS ---

export const BrowserWindow = ({ children, url = "eka.care", className="" }: { children?: React.ReactNode, url?: string, className?: string }) => (
  <div className={`rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] shadow-2xl my-12 w-full ${className}`}>
    <div className="bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 p-3 flex items-center gap-4">
        <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-md px-3 py-1 text-xs text-neutral-400 text-center font-mono truncate shadow-sm">
            {url}
        </div>
    </div>
    <div className="relative bg-white dark:bg-black">
        {children}
    </div>
  </div>
);

export const MobileShell = ({ children, className="" }: { children?: React.ReactNode, className?: string }) => (
    <div className={`relative mx-auto border-neutral-800 dark:border-neutral-800 bg-neutral-800 border-[10px] rounded-[2.5rem] shadow-xl overflow-hidden max-w-[300px] ${className}`}>
         {/* Notch/Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[20px] bg-neutral-800 rounded-b-xl z-20" />
        <div className="bg-white dark:bg-black w-full h-full relative z-10 overflow-hidden">
            {children}
        </div>
    </div>
);

// --- TYPOGRAPHY & TEXT ---

export const CaseMeta = ({ role, team, timeline, overview }: { role: string, team: string, timeline: string, overview: string }) => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-b border-neutral-800/20 dark:border-neutral-800 py-10 my-16">
        <div className="md:col-span-4 flex flex-col gap-8">
            <div>
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-widest mb-2">My Role</h4>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium">{role}</p>
            </div>
            <div>
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-widest mb-2">Team</h4>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium">{team}</p>
            </div>
             <div>
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-widest mb-2">Duration</h4>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium">{timeline}</p>
            </div>
        </div>
        <div className="md:col-span-8">
            <h4 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-widest mb-4">Overview</h4>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-300">
                {overview}
            </p>
        </div>
    </div>
);

export const SectionTitle = ({ title, subtitle, number }: { title: string, subtitle?: string, number?: string }) => (
    <div className="mb-10 mt-24">
        {number && (
             <div className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-3">
                {number}
            </div>
        )}
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
            {title}
        </h2>
        {subtitle && (
             <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                {subtitle}
            </p>
        )}
    </div>
);

export const QuoteBlock = ({ quote, author }: { quote: string, author?: string }) => (
    <div className="my-20">
        <blockquote className="text-3xl md:text-4xl font-medium text-neutral-900 dark:text-white leading-tight text-center max-w-5xl mx-auto">
            "{quote}"
        </blockquote>
        {author && <div className="mt-8 text-sm font-bold text-neutral-500 uppercase tracking-widest text-center">— {author}</div>}
    </div>
);

export const TextHighlight = ({ children }: { children?: React.ReactNode }) => (
    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-200 px-1 rounded mx-0.5 font-medium">
        {children}
    </span>
);

export const Paragraph = ({ children }: { children: React.ReactNode }) => (
    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed font-normal">
        {children}
    </p>
);

export const List = ({ items }: { items: string[] }) => (
    <ul className="list-disc list-outside ml-6 space-y-4 text-lg text-neutral-600 dark:text-neutral-400 mb-8">
        {items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </ul>
);

// --- CARDS & VISUALS ---

export const InsightCard = ({ icon, title, quote, color = "purple" }: { icon: React.ReactNode, title: string, quote: string, color?: string }) => (
    <div className="bg-white dark:bg-neutral-900/30 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 h-full flex flex-col w-full">
        <div className={`mb-6 w-12 h-12 rounded-full flex items-center justify-center bg-${color}-100 dark:bg-${color}-900/20 text-${color}-600 dark:text-${color}-400`}>
            {icon}
        </div>
        <h4 className="font-bold text-neutral-900 dark:text-white mb-3 text-xl">{title}</h4>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1">
            {quote}
        </p>
    </div>
);

export const GoalCard = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
    <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0a0a0a] shadow-sm dark:shadow-none h-full relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 w-full">
        <span className="text-8xl font-bold text-neutral-100 dark:text-[#111] absolute -top-4 -right-4 z-0 transition-colors group-hover:text-neutral-200 dark:group-hover:text-[#161616]">{number}</span>
        <div className="relative z-10">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

export const StatCard = ({ value, label, subLabel }: { value: string, label: string, subLabel?: string }) => (
    <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center shadow-sm w-full">
        <div className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">{value}</div>
        <div className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">{label}</div>
        {subLabel && <div className="text-xs text-neutral-500">{subLabel}</div>}
    </div>
);

export const DesignHighlight = ({ title, desc, icon }: { title: string, desc: string, icon?: React.ReactNode }) => (
    <div className="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors w-full">
        {icon && <div className="mt-1 text-purple-500">{icon}</div>}
        <div>
            <h5 className="text-neutral-900 dark:text-white font-bold text-lg mb-1">{title}</h5>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{desc}</p>
        </div>
    </div>
);

export const CodeBlock = ({ code, language="json" }: { code: string, language?: string }) => (
    <div className="rounded-xl overflow-hidden bg-[#1e1e1e] border border-neutral-800 shadow-2xl my-4 text-xs md:text-sm font-mono leading-relaxed text-blue-100 w-full max-w-full min-w-0">
        <div className="flex gap-2 p-3 bg-[#252526] border-b border-neutral-800">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
             <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="p-4 overflow-x-auto w-full">
             <pre className="whitespace-pre-wrap break-all md:break-normal"><code>{code}</code></pre>
        </div>
    </div>
);

export const Divider = () => <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent w-full my-20" />;