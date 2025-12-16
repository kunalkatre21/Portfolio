import React from 'react';
import { motion } from 'framer-motion';
import { AwardItem } from '../types';
import { ExternalLink } from 'lucide-react';

const awards: AwardItem[] = [
  {
    id: 1,
    title: "Site of the Day",
    organization: "Awwwards",
    date: "Jan 12, 2023",
    description: "Awarded for Dopegood website design and innovation.",
    link: "#"
  },
  {
    id: 2,
    title: "Innovation Award",
    organization: "CSS Design Awards",
    date: "Dec 15, 2022",
    description: "Recognized for creative excellence in UI/UX.",
    link: "#"
  },
  {
    id: 3,
    title: "Honorable Mention",
    organization: "The FWA",
    date: "Nov 02, 2022",
    description: "Selected for high quality design standards.",
    link: "#"
  }
];

export const Awards: React.FC = () => {
  return (
    <section id="award" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-2 block">World's Most Prestigious</span>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Awards <span className="text-neutral-600">&</span> Honors
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
                    className="group relative bg-[#111] hover:bg-[#161616] border border-neutral-800 p-8 md:p-10 rounded-3xl transition-all duration-300"
                >
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-xs font-bold bg-neutral-800 text-white px-2 py-1 rounded">{award.organization}</span>
                                <span className="text-neutral-500 text-sm">{award.date}</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">{award.title}</h3>
                            <p className="text-neutral-400 text-sm">{award.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                            <a 
                                href={award.link} 
                                className="w-14 h-14 rounded-full border border-neutral-700 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300"
                            >
                                <ExternalLink size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};