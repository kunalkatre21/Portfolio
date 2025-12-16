import React from 'react';
import { motion } from 'framer-motion';
import { EducationItem } from '../types';

const education: EducationItem[] = [
  {
    id: 1,
    degree: "Master of Design",
    school: "Azad University of Mashhad",
    period: "2019-2020"
  },
  {
    id: 2,
    degree: "Bachelor of Design",
    school: "Azad University of Mashhad",
    period: "2015-2018"
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <h2 className="text-5xl font-bold text-white">Education</h2>
          </div>
          
          <div className="md:w-2/3 w-full grid gap-6">
            {education.map((edu, idx) => (
                <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-3xl bg-gradient-to-br from-[#111] to-black border border-neutral-800 hover:border-purple-500/50 transition-colors duration-300"
                >
                    <span className="text-neutral-500 text-sm mb-2 block">{edu.period}</span>
                    <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-neutral-400">{edu.school}</p>
                </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};