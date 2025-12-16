import React from 'react';
import { motion } from 'framer-motion';
import { EducationItem } from '../types';

const education: EducationItem[] = [
  {
    id: 1,
    degree: "Bachelor of Design (B.Des)",
    school: "Indian Institute of Technology (IIT), Guwahati",
    period: "Jun 2013 - Jun 2017",
    image: "https://picsum.photos/seed/iitg/800/600"
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold mb-16 text-neutral-900 dark:text-white"
      >
        Education
      </motion.h2>
          
      <div className="grid grid-cols-1 gap-6">
        {education.map((edu, idx) => (
            <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-500 shadow-sm dark:shadow-none"
            >
                {/* Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-blue-100/50 dark:from-purple-900/20 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                {/* Background Image with Gradient Mask - Right Bleed */}
                {edu.image && (
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-1/4 md:w-1/3 z-0 pointer-events-none"
                    style={{
                      maskImage: 'linear-gradient(to right, transparent, black 100%)',
                      WebkitMaskImage: 'linear-gradient(to right, transparent, black 100%)'
                    }}
                  >
                     <img 
                        src={edu.image} 
                        alt="" 
                        className="w-full h-full object-cover opacity-20 dark:opacity-40 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                     />
                     {/* Secondary overlay for smooth blending to card background */}
                     <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent dark:from-[#111] dark:via-[#111]/80 dark:to-transparent" />
                  </div>
                )}

                <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8 p-8 md:p-12">
                    <div className="md:w-1/3">
                        <span className="text-neutral-500 font-medium block mb-2">{edu.period}</span>
                        <h3 className="text-3xl font-bold text-neutral-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-200 transition-colors">{edu.degree}</h3>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 mt-2">{edu.school}</p>
                    </div>
                    <div className="md:w-2/3 pr-0 md:pr-20">
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            Minor in Mechanical Engineering
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-400 font-mono mt-4">
                            CGPI: 8.12
                        </p>
                    </div>
                </div>
            </motion.div>
        ))}
      </div>
    </section>
  );
};