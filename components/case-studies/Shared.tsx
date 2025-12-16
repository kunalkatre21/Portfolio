import React from 'react';

export const InsightCard = ({ icon, title, quote }: { icon: React.ReactNode, title: string, quote: string }) => (
    <div className="bg-white dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm dark:shadow-none h-full">
        <div className="mb-4">{icon}</div>
        <h4 className="font-bold text-neutral-900 dark:text-white mb-2 text-base">{title}</h4>
        <blockquote className="text-neutral-600 dark:text-neutral-400 italic text-sm">"{quote}"</blockquote>
    </div>
);

export const GoalCard = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
    <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] shadow-sm dark:shadow-none h-full relative overflow-hidden">
        <span className="text-6xl font-serif text-neutral-100 dark:text-neutral-800 absolute top-4 right-4 -z-0 pointer-events-none">{number}</span>
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 relative z-10">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm relative z-10">{desc}</p>
    </div>
);

export const StatCard = ({ value, label, colorClass = "text-purple-600 dark:text-purple-400" }: { value: string, label: string, colorClass?: string }) => (
    <div className="p-4 rounded-xl bg-neutral-100/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm">
        <div className={`text-2xl font-bold ${colorClass}`}>{value}</div>
        <div className="text-sm text-neutral-500">{label}</div>
    </div>
);

export const DesignHighlight = ({ title, desc }: { title: string, desc: string }) => (
    <div className="pl-6 border-l-2 border-purple-500 my-4">
        <h5 className="text-neutral-900 dark:text-white font-bold text-lg mb-1">{title}</h5>
        <p className="text-neutral-600 dark:text-neutral-400">{desc}</p>
    </div>
);

export const SectionTitle = ({ number, title }: { number: string, title: string }) => (
    <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 text-neutral-900 dark:text-white">
        <span className="text-neutral-400 dark:text-neutral-600">{number}.</span> {title}
    </h2>
);

export const Divider = () => <div className="h-px bg-neutral-200 dark:bg-neutral-800 w-full my-8" />;