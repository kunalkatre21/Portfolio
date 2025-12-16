import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';
import { ASSETS } from '../data';

const roles = ["Lead Product Designer", "Design Systems Architect", "AI Design Engineer"];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-900/20 rounded-full blur-[120px] transition-colors duration-700" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-900/10 rounded-full blur-[120px] transition-colors duration-700" />
      </div>

      <div className="text-center z-10 w-full max-w-5xl mx-auto">
        <div className="h-8 mb-4 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[roleIndex]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-neutral-500 dark:text-neutral-400 font-medium text-lg uppercase tracking-wider"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-white"
        >
          KUNAL KATRE
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-neutral-600 dark:text-neutral-500 mb-12"
        >
          Based in Bangalore
        </motion.p>

        <div className="relative w-full flex justify-center items-end mt-8">
            {/* Social Floating Left */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute left-0 bottom-20 hidden md:flex flex-col gap-2 items-start"
            >
               <a href="mailto:kunalkatre.designs@gmail.com" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-2 h-2 bg-neutral-900 dark:bg-white rounded-full group-hover:scale-150 transition-transform"/>
                kunalkatre.designs@gmail.com
               </a>
            </motion.div>

            {/* Profile Image */}
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] bg-neutral-100 dark:bg-neutral-800 rounded-t-[12rem] rounded-b-[2rem] overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl relative transition-colors duration-300">
                  {/* Placeholder for the person image */}
                  <img 
                    src={ASSETS.profile} 
                    alt="Kunal Katre" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-black/50 to-transparent" />
              </div>
            </motion.div>

            {/* Social Floating Right */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute right-0 bottom-20 hidden md:flex gap-4"
            >
               <SocialLink icon={<Linkedin size={20} />} href="https://linkedin.com/in/kunal-katre-98a945a2" />
               <SocialLink icon={<Mail size={20} />} href="mailto:kunalkatre.designs@gmail.com" />
            </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mt-32"
      >
        <p className="text-2xl md:text-3xl leading-relaxed font-medium text-neutral-800 dark:text-neutral-200">
          Lead Product Designer with 8.5 years of experience delivering scalable products in fast-paced environments. I am a hands-on builder focused on speed and rapid iteration, utilizing data-driven insights to validate design decisions and minimize bias.
        </p>
        <div className="mt-8">
            <a href={ASSETS.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-900 dark:text-white border-b border-neutral-900 dark:border-white pb-1 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-600 dark:hover:border-purple-400 transition-colors">
                View CV <ArrowRight size={16} />
            </a>
        </div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
    <a 
        href={href} 
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 shadow-sm"
    >
        {icon}
    </a>
);