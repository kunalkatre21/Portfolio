import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'award', label: 'Award' },
  { id: 'education', label: 'Education' },
  { id: 'skill', label: 'Skill' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Small timeout to allow menu to close before scrolling
      setTimeout(() => {
        window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none px-4"
      >
        <nav className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md px-2 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 pointer-events-auto shadow-2xl flex items-center gap-1 relative z-50">
          
          {/* Desktop Nav Items */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                    activeSection === item.id 
                      ? 'text-white dark:text-black' 
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-neutral-900 dark:bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center pl-2">
             <span className="mr-2 text-sm font-bold text-neutral-900 dark:text-white">Menu</span>
             <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:scale-105 transition-transform"
             >
                <Menu size={18} />
             </button>
          </div>
          
          {/* Divider */}
          <div className="w-[1px] h-6 bg-neutral-300 dark:bg-neutral-700 mx-1 hidden md:block" />
          
          {/* Theme Toggle (Desktop) */}
          <button
            onClick={toggleTheme}
            className="hidden md:block p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[60] bg-white dark:bg-neutral-950 flex flex-col p-6 md:hidden"
            >
                <div className="flex justify-between items-center mb-8">
                    <span className="text-xl font-bold text-neutral-900 dark:text-white">Amir Mohseni</span>
                    <div className="flex gap-4">
                         <button
                            onClick={toggleTheme}
                            className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                <nav className="flex-1 flex flex-col justify-center gap-6 items-center">
                    {navItems.map((item, i) => (
                        <motion.button
                            key={item.id}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-4xl font-bold transition-colors ${
                                activeSection === item.id 
                                    ? 'text-purple-600 dark:text-purple-400' 
                                    : 'text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-white'
                            }`}
                        >
                            {item.label}
                        </motion.button>
                    ))}
                </nav>

                <div className="text-center text-neutral-500 text-sm mt-8">
                    &copy; {new Date().getFullYear()} Amir Mohseni.
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};