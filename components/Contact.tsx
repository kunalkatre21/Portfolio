import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Linkedin, Twitter, Dribbble } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "A95Mohseni@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-between">
      <div>
        <h2 className="text-6xl md:text-8xl font-bold text-neutral-900 dark:text-white mb-16">Contacts</h2>

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-16">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full p-2 pl-8 pr-2 flex items-center gap-4">
                    <span className="text-neutral-900 dark:text-white md:text-xl font-medium">{email}</span>
                    <button 
                        onClick={handleCopy}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
                    >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                        {copied ? 'Copied' : 'Copy'}
                    </button>
                </div>
            </div>
            
            <div className="text-2xl text-neutral-600 dark:text-neutral-400">
                +31 6 87 93 80 81
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
             {['Linkedin', 'Behance', 'Twitter', 'Awwwards', 'Instagram', 'Dribbble'].map((social) => (
                 <a 
                    key={social} 
                    href="#" 
                    className="text-2xl text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors py-4 border-t border-neutral-200 dark:border-neutral-800"
                >
                    {social}
                 </a>
             ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end border-t border-neutral-200 dark:border-neutral-800 pt-8">
         <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">AMIR MOHSENI</h3>
            <p className="text-neutral-500">Based in Netherlands</p>
         </div>
         <div className="flex gap-4">
            <SocialIcon icon={<Linkedin size={20}/>} />
            <SocialIcon icon={<Twitter size={20}/>} />
            <SocialIcon icon={<Dribbble size={20}/>} />
         </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
    <a href="#" className="w-10 h-10 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
        {icon}
    </a>
);