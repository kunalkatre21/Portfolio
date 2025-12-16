import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
    { id: 'core', label: 'Core & Research', skills: ['Product Strategy', 'End-to-End UX', '0-to-1 Launch', 'Data-Driven Design', 'Usability Testing', 'A/B Experimentation', 'Accessibility (WCAG)'] },
    { id: 'systems', label: 'Systems & AI', skills: ['Design Systems', 'Server-Driven UI', 'LLM Context Mgmt', 'Prompt Engineering', 'Model Fine-tuning', 'Local LLM Deployment'] },
    { id: 'tools', label: 'Tools', skills: ['Figma', 'Token Studio', 'Style Dictionary', 'Webflow', 'Framer', 'GitHub', 'Cursor', 'Napkin.ai'] },
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('core');

  const activeSkills = skillCategories.find(c => c.id === activeTab)?.skills || [];

  return (
    <section id="skill" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-bold text-neutral-900 dark:text-white mb-12">Skills</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-full border border-neutral-200 dark:border-neutral-800">
            {skillCategories.map(cat => (
                <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === cat.id ? 'text-black dark:text-black' : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'}`}
                >
                    {activeTab === cat.id && (
                         <motion.div
                            layoutId="skill-tab"
                            className="absolute inset-0 bg-white dark:bg-white rounded-full shadow-sm"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                         />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                </button>
            ))}
        </div>

        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-3 gap-4">
             <AnimatePresence mode='wait'>
                {activeSkills.map((skill, index) => (
                    <motion.div
                        key={`${activeTab}-${skill}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className="p-6 bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 rounded-2xl flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors shadow-sm dark:shadow-none text-center"
                    >
                        <span className="text-lg font-medium text-neutral-900 dark:text-white">{skill}</span>
                    </motion.div>
                ))}
             </AnimatePresence>
        </div>
      </div>
    </section>
  );
};