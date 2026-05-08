import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import VisualSystem from '../3d/VisualSystem';
import { PrimaryButton } from '../ui/PrimaryButton';
import { SecondaryButton } from '../ui/SecondaryButton';
import { GradientText } from '../ui/GradientText';

const Hero: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', { hour12: false });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-10 text-white uppercase italic">
              Share <br />
              <GradientText>Smarter.</GradientText> <br />
              <span className="text-white">Reveal Selectively.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
              <p className="text-xl text-text-secondary max-w-md leading-relaxed">
                In a world of static data, we design <span className="text-white font-bold italic">moments of relevance</span> — adaptive, digital, and contextual experiences built to scale.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <PrimaryButton className="flex items-center gap-2 group">
                  Explore Platform
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </PrimaryButton>
                <SecondaryButton className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </SecondaryButton>
              </div>
            </div>
          </motion.div>

          {/* Right Side - 3D Visual */}
          <div className="lg:col-span-5 h-[500px] relative">
            <VisualSystem />
          </div>
        </div>

        {/* Bottom Details */}
        <div className="mt-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-left font-mono"
          >
            <div className="text-2xl text-white font-bold">{formatDate(time)}</div>
            <div className="text-5xl text-white/40 font-black tabular-nums">{formatTime(time)}</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[12vw] font-black text-white/5 tracking-tighter leading-none select-none uppercase pointer-events-none"
          >
            +GOUJI®
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
