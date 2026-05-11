import React, { useState, useEffect } from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  const [time, setTime] = useState(new Date());
  
  // Mouse Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 25;
      const moveY = (clientY - window.innerHeight / 2) / 25;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const formatTime = (date) => date.toLocaleTimeString('en-GB', { hour12: false });
  const formatDate = (date) => date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <motion.div>
              <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase">
                <span className="block text-text-primary">Share</span>
                <span className="text-gradient">Smarter.</span><br />
                <span className="block text-text-primary opacity-90">Reveal</span>
                <span className="block text-text-primary opacity-80">Selectively.</span>
              </h1>

              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center mt-12">
                <p className="text-lg md:text-2xl text-text-secondary max-w-lg leading-relaxed font-medium">
                  In a world of static data, we design <span className="text-text-primary">moments of relevance</span> — adaptive, digital, and contextual experiences.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative px-12 py-6 bg-primary text-white rounded-full font-black text-xl uppercase tracking-widest transition-all w-full md:w-auto ${
                    theme === 'dark' ? "glow-primary shadow-orange-500/20" : "shadow-xl shadow-blue-600/20"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Let's Connect
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* 5. DYNAMIC FOOTER (TIME & BRAND) */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-text-primary/5 pt-12">
          <div className="font-mono space-y-1">
            <div className="text-xs text-text-primary/30 font-bold uppercase tracking-[0.2em]">{formatDate(time)}</div>
            <div className="text-2xl md:text-4xl font-black text-text-primary/20 tracking-tighter tabular-nums leading-none">
              {formatTime(time)}
            </div>
          </div>

          <div className="text-[8vw] md:text-[5vw] font-black text-text-primary/[0.02] tracking-tighter leading-none select-none uppercase pointer-events-none">
            +GOUJI®
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
