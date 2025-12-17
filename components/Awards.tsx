import React from 'react';
import { motion } from 'framer-motion';
import { AwardItem } from '../types';
import { Trophy } from 'lucide-react';

const awards: AwardItem[] = [
  {
    id: 1,
    title: "#1 Play Store Rank",
    organization: "Health Category",
    date: "Eka.Care",
    description: "Achieved top ranking for the Co-WIN vaccine flows.",
    link: "#"
  },
  {
    id: 2,
    title: "20M+ Downloads",
    organization: "Eka.Care",
    date: "2021-2022",
    description: "Built flows that scaled to 20M+ users.",
    link: "#"
  },
  {
    id: 3,
    title: "4.7★ Rating",
    organization: "70k+ Reviews",
    date: "Patient App",
    description: "Founding designer for the highly rated patient application.",
    link: "#"
  }
];

export const Awards: React.FC = () => {
  return (
    <section id="award" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-2 block">Key Metrics</span>
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
                Impact <span className="text-neutral-400 dark:text-neutral-600">&</span> Achievements
            </h2>
        </div>

        <div className="md:w-2/3 relative space-y-4">
            {awards.map((award, index) => (
                <motion.div
                    key={award.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="group relative bg-neutral-50 hover:bg-neutral-100 dark:bg-[#111] dark:hover:bg-[#161616] border border-neutral-200 dark:border-neutral-800 p-8 md:p-10 rounded-3xl transition-all duration-300"
                >
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-xs font-bold bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-white px-2 py-1 rounded">{award.organization}</span>
                                <span className="text-neutral-500 text-sm">{award.date}</span>
                            </div>
                            <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">{award.title}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm">{award.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                            <div 
                                className="w-14 h-14 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white group-hover:bg-neutral-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300"
                            >
                                <Trophy size={24} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};