import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Creative Art Director",
    company: "Deveb Digh",
    period: "2020-Present",
    description: "Leading the creative team to deliver award-winning digital experiences. Responsible for visual direction and brand strategy."
  },
  {
    id: 2,
    role: "Freelance Designer",
    company: "Upwork",
    period: "2018-2020",
    description: "Maintained 100% job success rate on Upwork, delivering exceptional designs for 40+ projects. Developed highly effective brand identities."
  },
  {
    id: 3,
    role: "Senior UI Designer",
    company: "TechFlow",
    period: "2016-2018",
    description: "Designed intuitive user interfaces for enterprise software solutions used by over 50k users daily."
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold mb-16 text-white"
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
            className="group relative bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 md:p-12 overflow-hidden hover:border-neutral-600 transition-colors duration-500"
          >
             {/* Gradient Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="md:w-1/3">
                <span className="text-neutral-500 font-medium block mb-2">{exp.period}</span>
                <h3 className="text-3xl font-bold text-white group-hover:text-purple-200 transition-colors">{exp.role}</h3>
                <p className="text-xl text-neutral-400 mt-2">{exp.company}</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-neutral-300 leading-relaxed">
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