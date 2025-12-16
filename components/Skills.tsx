import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
    { id: '3d', label: '3D Design', skills: ['Spline', '3Ds Max', 'Cinema 4D', 'V-Ray', 'Blender', 'Lumion'] },
    { id: 'ui', label: 'UI/UX', skills: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Protopie'] },
    { id: 'graphic', label: 'Graphic', skills: ['Photoshop', 'Illustrator', 'InDesign', 'Lightroom'] },
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('3d');

  const activeSkills = skillCategories.find(c => c.id === activeTab)?.skills || [];

  return (
    <section id="skill" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-bold text-white mb-12">Hard Skills</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12 p-1 bg-neutral-900 rounded-full border border-neutral-800">
            {skillCategories.map(cat => (
                <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === cat.id ? 'text-black' : 'text-neutral-400 hover:text-white'}`}
                >
                    {activeTab === cat.id && (
                         <motion.div
                            layoutId="skill-tab"
                            className="absolute inset-0 bg-white rounded-full"
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
                        className="p-6 bg-[#0a0a0a] border border-neutral-800 rounded-2xl flex items-center justify-center hover:bg-neutral-900 transition-colors"
                    >
                        <span className="text-xl font-medium text-white">{skill}</span>
                    </motion.div>
                ))}
             </AnimatePresence>
        </div>
      </div>
    </section>
  );
};