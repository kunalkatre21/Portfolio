import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, Users, Rocket, BarChart2, Accessibility, Beaker, 
  Grid, Server, Bot, MessageSquare, Cpu, Terminal,
  PenTool, Layers, Globe, Code, Zap, Search, Layout, Database, Wrench, Sparkles
} from 'lucide-react';

// Define specific colors for categories
const themes = {
  core: {
    base: "blue",
    bg: "bg-blue-50 dark:bg-blue-900/10",
    border: "border-blue-100 dark:border-blue-800",
    text: "text-blue-600 dark:text-blue-400",
    hover: "hover:border-blue-300 dark:hover:border-blue-600"
  },
  systems: {
    base: "purple",
    bg: "bg-purple-50 dark:bg-purple-900/10",
    border: "border-purple-100 dark:border-purple-800",
    text: "text-purple-600 dark:text-purple-400",
    hover: "hover:border-purple-300 dark:hover:border-purple-600"
  },
  tools: {
    base: "orange",
    bg: "bg-orange-50 dark:bg-orange-900/10",
    border: "border-orange-100 dark:border-orange-800",
    text: "text-orange-600 dark:text-orange-400",
    hover: "hover:border-orange-300 dark:hover:border-orange-600"
  }
};

const skillCategories = [
    { 
      id: 'core', 
      label: 'Core & Research', 
      icon: <Search size={18} />,
      theme: themes.core,
      skills: [
        { name: 'Product Strategy', icon: <Compass size={20} /> },
        { name: 'End-to-End UX', icon: <Users size={20} /> },
        { name: '0-to-1 Launch', icon: <Rocket size={20} /> },
        { name: 'Data-Driven Design', icon: <BarChart2 size={20} /> },
        { name: 'Usability Testing', icon: <Beaker size={20} /> },
        { name: 'Accessibility (WCAG)', icon: <Accessibility size={20} /> },
      ] 
    },
    { 
      id: 'systems', 
      label: 'Systems & AI', 
      icon: <Cpu size={18} />,
      theme: themes.systems,
      skills: [
        { name: 'Design Systems', icon: <Grid size={20} /> },
        { name: 'Server-Driven UI', icon: <Server size={20} /> },
        { name: 'LLM Context Mgmt', icon: <Bot size={20} /> },
        { name: 'Prompt Engineering', icon: <MessageSquare size={20} /> },
        { name: 'Model Fine-tuning', icon: <Zap size={20} /> },
      ] 
    },
    { 
      id: 'tools', 
      label: 'Tools & Tech', 
      icon: <Wrench size={18} />,
      theme: themes.tools,
      skills: [
        { name: 'Figma & Tokens', icon: <PenTool size={20} /> },
        { name: 'Style Dictionary', icon: <Layers size={20} /> },
        { name: 'Webflow', icon: <Globe size={20} /> },
        { name: 'Framer', icon: <Layout size={20} /> },
        { name: 'GitHub Actions', icon: <Terminal size={20} /> },
        { name: 'Cursor / AI IDE', icon: <Sparkles size={20} /> },
      ] 
    },
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('core');

  const activeCategory = skillCategories.find(c => c.id === activeTab);
  const activeSkills = activeCategory?.skills || [];
  const activeTheme = activeCategory?.theme || themes.core;

  return (
    <section id="skill" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-bold text-neutral-900 dark:text-white mb-12">Skills</h2>

        {/* Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 p-1.5 bg-neutral-100 dark:bg-neutral-900 rounded-full border border-neutral-200 dark:border-neutral-800">
            {skillCategories.map(cat => (
                <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`relative px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                        activeTab === cat.id 
                            ? 'text-neutral-900 dark:text-black' 
                            : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                >
                    {activeTab === cat.id && (
                         <motion.div
                            layoutId="skill-tab"
                            className="absolute inset-0 bg-white dark:bg-white rounded-full shadow-md"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                         />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                        {cat.icon}
                        {cat.label}
                    </span>
                </button>
            ))}
        </div>

        {/* Skills Grid */}
        <div className="w-full max-w-5xl">
             <motion.div 
                layout
                className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
             >
                 <AnimatePresence mode='popLayout'>
                    {activeSkills.map((skill, index) => (
                        <motion.div
                            key={`${activeTab}-${skill.name}`}
                            layout
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={`
                                group relative p-6 md:p-8 rounded-3xl border transition-all duration-300
                                bg-white dark:bg-[#0a0a0a]
                                ${activeTheme.border}
                                ${activeTheme.hover}
                                hover:shadow-xl dark:shadow-none
                            `}
                        >
                            <div className={`mb-4 ${activeTheme.bg} w-14 h-14 rounded-2xl flex items-center justify-center ${activeTheme.text} transition-transform duration-300 group-hover:scale-110`}>
                                {skill.icon}
                            </div>
                            <span className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white leading-tight block">
                                {skill.name}
                            </span>
                            
                            {/* Decorative background gradient on hover */}
                            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-${activeTheme.base}-500 pointer-events-none`} />
                        </motion.div>
                    ))}
                 </AnimatePresence>
             </motion.div>
        </div>
      </div>
    </section>
  );
};
