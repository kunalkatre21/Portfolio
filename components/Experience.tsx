import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Lead Product Designer",
    company: "Eka.Care (Orbi.health)",
    period: "Jan 2021 - Nov 2025",
    description: "Architected Co-WIN vaccine flows driving 20M+ downloads & #1 Play Store rank. Founding designer for the patient app (10M+ installs). Built a token-based Design System connecting Figma to code.",
    image: "https://picsum.photos/seed/eka/600/800"
  },
  {
    id: 2,
    role: "Founding Designer",
    company: "Crio.Do",
    period: "Nov 2019 - Jan 2021",
    description: "Established initial UX for the 'Learn by Doing' platform, supporting 1,000+ early developers. Shipped core MVP environments validating the business model for Pre-Series A funding.",
    image: "https://picsum.photos/seed/crio/600/800"
  },
  {
    id: 3,
    role: "Product Designer 2",
    company: "Flipkart",
    period: "Aug 2017 - Nov 2019",
    description: "Redesigned seller listing platform for 100k+ SKUs. Delivered data-driven promotions tool with predictive analytics. Contributed to early Marketplace Design System.",
    image: "https://picsum.photos/seed/flipkart/600/800"
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold mb-16 text-neutral-900 dark:text-white"
      >
        Work Experience
      </motion.h2>

      <div className="grid grid-cols-1 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-500 shadow-sm dark:shadow-none"
          >
             {/* Gradient Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-blue-100/50 dark:from-purple-900/20 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
            
            {/* Background Image with Gradient Mask - Right Bleed */}
            {exp.image && (
              <div 
                className="absolute right-0 top-0 bottom-0 w-1/4 md:w-1/3 z-0 pointer-events-none"
                style={{
                  maskImage: 'linear-gradient(to right, transparent, black 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 100%)'
                }}
              >
                 <img 
                    src={exp.image} 
                    alt="" 
                    className="w-full h-full object-cover opacity-20 dark:opacity-40 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                 />
                 {/* Secondary overlay for smooth blending if mask isn't enough */}
                 <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent dark:from-[#111] dark:via-[#111]/80 dark:to-transparent" />
              </div>
            )}

            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8 p-8 md:p-12">
              <div className="md:w-1/3">
                <span className="text-neutral-500 font-medium block mb-2">{exp.period}</span>
                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-200 transition-colors">{exp.role}</h3>
                <p className="text-xl text-neutral-600 dark:text-neutral-400 mt-2">{exp.company}</p>
              </div>
              <div className="md:w-2/3 pr-0 md:pr-20">
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};