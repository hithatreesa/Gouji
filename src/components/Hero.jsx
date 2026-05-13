import React, { useState, useEffect } from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import MagneticButton from './MagneticButton';
import TextReveal from './TextReveal';

const Hero = () => {
  const { theme } = useTheme();

  // Mouse Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 50;
      const moveY = (clientY - window.innerHeight / 2) / 50;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-30 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ x: springX, y: springY, perspective: 1000 }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <TextReveal 
              text="+Gouji®"
              className="text-5xl md:text-[7rem] font-black tracking-tighter leading-none mb-2 uppercase text-text-primary flex justify-center"
              delay={0.5}
            />
            <div className="text-[10px] md:text-sm font-bold tracking-[0.6em] uppercase text-primary mb-8 opacity-80">
              software engineering studio
            </div>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-medium text-text-secondary mb-8 tracking-tight leading-tight">
              “Software built around your business.”
            </h2>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-primary text-white rounded-full font-black text-[10px] uppercase tracking-widest transition-all w-full md:w-auto shadow-2xl shadow-primary/20"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </span>
                </motion.button>
              </MagneticButton>

              <MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/10 text-text-primary rounded-full font-black text-[10px] uppercase tracking-widest transition-all hover:bg-white/5 w-full md:w-auto"
                >
                  Discuss Your Idea
                </motion.button>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
