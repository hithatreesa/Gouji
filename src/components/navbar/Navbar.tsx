import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { PrimaryButton } from '../ui/PrimaryButton';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Platform', href: '#platform' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Security', href: '#security' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          // @ts-expect-error - React 19 typing conflict
          className="flex items-center gap-2"
        >
          <span className="text-xl font-black tracking-tighter font-serif uppercase italic text-white">+GOUJI®</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              // @ts-expect-error - React 19 typing conflict
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // @ts-expect-error - React 19 typing conflict
              className="px-6 py-2 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-colors"
            >
              Start
            </motion.button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            // @ts-expect-error - React 19 typing conflict
            className="md:hidden bg-surface border-b border-white/5 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-textSecondary"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <PrimaryButton className="py-3 text-sm w-full">Get Started</PrimaryButton>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
