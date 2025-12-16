import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WorkItem, WorkProps } from '../types';
import { ArrowUpRight } from 'lucide-react';

const works: WorkItem[] = [
  {
    id: 1,
    title: "Co-WIN Integration",
    category: "Case Study",
    image: "https://picsum.photos/id/20/800/600",
    tags: ["Product Design", "UX Research", "Crisis Design"]
  },
  {
    id: 2,
    title: "AM-ARC",
    category: "Branding",
    image: "https://picsum.photos/id/36/800/600",
    tags: ["Visit Live", "Case Study"]
  },
  {
    id: 3,
    title: "Deveb",
    category: "Development",
    image: "https://picsum.photos/id/119/800/600",
    tags: ["Awwwards", "Live"]
  },
  {
    id: 4,
    title: "Luma",
    category: "Product Design",
    image: "https://picsum.photos/id/160/800/600",
    tags: ["Concept", "UI/UX"]
  }
];

export const Work: React.FC<WorkProps> = ({ onProjectClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="work" className="py-24 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-12 flex items-end justify-between">
         <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Works</h2>
            <p className="text-neutral-400 text-lg">
                <span className="text-white font-bold underline decoration-purple-500 underline-offset-4">Exclusively</span> designed by me.
            </p>
         </div>
      </div>

      <div className="relative w-full overflow-x-auto no-scrollbar pb-10">
          <div className="flex gap-8 px-4 md:px-[max(1rem,calc((100vw-80rem)/2))] w-max">
            {works.map((work) => (
                <div 
                    key={work.id} 
                    onClick={work.id === 1 ? onProjectClick : undefined}
                    className={`relative group w-[350px] md:w-[600px] flex-shrink-0 cursor-pointer`}
                >
                    <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 border border-neutral-800 relative">
                        <img 
                            src={work.image} 
                            alt={work.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="bg-white/10 backdrop-blur-md rounded-full p-4">
                                <ArrowUpRight className="text-white w-8 h-8" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-2">{work.title}</h3>
                            <p className="text-neutral-500">{work.category}</p>
                        </div>
                        <div className="flex gap-2 flex-wrap justify-end max-w-[50%]">
                            {work.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full border border-neutral-700 text-xs text-neutral-300 bg-neutral-900/50 hover:bg-white hover:text-black transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
          </div>
      </div>
    </section>
  );
};