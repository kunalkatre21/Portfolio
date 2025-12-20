import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Linkedin, Mail, Github } from 'lucide-react';
import { analytics } from '../utils/analytics';

const socialLinks = [
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/kunal-katre-98a945a2/' },
  { name: 'Behance', url: 'https://www.behance.net/Kunal' },
  { name: 'Twitter', url: 'https://x.com/kunalkatre1995' },
  { name: 'Dribbble', url: 'https://dribbble.com/kunalkatre1995' },
  { name: 'GitHub', url: 'https://github.com/kunalkatre21' }
];

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "kunalkatre.designs@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    analytics.trackContactAction('email_copy', email);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-between">
      <div>
        <h2 className="text-6xl md:text-8xl font-bold text-neutral-900 dark:text-white mb-16">Contacts</h2>

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-16 w-full max-w-full">
          <div className="relative group max-w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full p-1.5 pl-4 pr-1.5 md:p-2 md:pl-8 md:pr-2 flex items-center gap-2 md:gap-4 max-w-full">
              <span className="text-neutral-900 dark:text-white text-sm md:text-xl font-medium truncate flex-1 min-w-0">{email}</span>
              <button
                onClick={handleCopy}
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-colors flex items-center gap-2 text-xs md:text-base shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" /> : <Copy className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400">
            +91 8011021483
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.trackSocialClick(social.name.toLowerCase(), 'contact-section')}
              className="text-2xl text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors py-4 border-t border-neutral-200 dark:border-neutral-800"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end border-t border-neutral-200 dark:border-neutral-800 pt-8">
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">KUNAL KATRE</h3>
          <p className="text-neutral-500">Based in Bangalore</p>
        </div>
        <div className="flex gap-4">
          <SocialIcon icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/kunal-katre-98a945a2/" />
          <SocialIcon icon={<Github size={20} />} href="https://github.com/kunalkatre21" />
          <SocialIcon icon={<Mail size={20} />} href="mailto:kunalkatre.designs@gmail.com" />
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ icon, href }: { icon: React.ReactNode, href: string }) => {
  const getPlatform = (url: string) => {
    if (url.includes('linkedin')) return 'linkedin';
    if (url.includes('github')) return 'github';
    if (url.includes('mailto')) return 'email';
    return 'unknown';
  };

  const platform = getPlatform(href);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => analytics.trackSocialClick(platform, 'contact-footer')}
      className="w-10 h-10 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
    >
      {icon}
    </a>
  );
};