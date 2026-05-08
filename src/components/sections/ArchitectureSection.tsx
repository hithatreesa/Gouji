import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Users, ArrowRight } from 'lucide-react';
import { SectionContainer } from '../ui/SectionContainer';

const ArchitectureSection: React.FC = () => {
  return (
    <SectionContainer id="platform" className="bg-surface/10">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-geometric">Platform Architecture</h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          The Gouji Intelligence Layer orchestrates every data request, ensuring only the intended information reaches the specific receiver.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        {/* Animated Background Lines */}
        <div className="absolute inset-0 hidden md:block">
          <svg className="w-full h-full opacity-20" viewBox="0 0 1000 200" fill="none">
            <motion.path
              d="M100 100 H900"
              stroke="url(#grad)"
              strokeWidth="2"
              strokeDasharray="10 10"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff4d29" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ff4d29" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Node 1: Sender */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="z-10 flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-3xl bg-surface border border-white/10 flex items-center justify-center glow-primary mb-6">
            <User className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Sender Identity</h3>
          <p className="text-xs text-text-secondary text-center max-w-[150px]">Single source of truth for all your professional data.</p>
        </motion.div>

        <ArrowRight className="hidden md:block w-8 h-8 text-white/20 animate-pulse" />

        {/* Node 2: Intelligence Layer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="z-10 flex flex-col items-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl animate-pulse" />
            <div className="w-32 h-32 rounded-[2rem] bg-gradient-to-br from-primary to-secondary p-1 relative">
              <div className="w-full h-full rounded-[1.8rem] bg-background flex items-center justify-center">
                <Cpu className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
          <h3 className="text-xl font-bold mt-8 mb-2 text-white">Gouji Intelligence</h3>
          <p className="text-xs text-text-secondary text-center max-w-[180px]">Contextual processing engine & dynamic filter.</p>
        </motion.div>

        <ArrowRight className="hidden md:block w-8 h-8 text-white/20 animate-pulse" />

        {/* Node 3: Receiver */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="z-10 flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-3xl bg-surface border border-white/10 flex items-center justify-center glow-secondary mb-6">
            <Users className="w-10 h-10 text-secondary" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Personalized UI</h3>
          <p className="text-xs text-text-secondary text-center max-w-[150px]">Filtered experience unique to each receiver.</p>
        </motion.div>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { t: 'Secure Ingress', d: 'Encrypted data transmission from identity core to the cloud.' },
          { t: 'Adaptive Logic', d: 'Policy-based filtering rules executed in milliseconds.' },
          { t: 'Context Egress', d: 'Dynamically generated UI for the end-receiver.' }
        ].map((item, i) => (
          <div key={i} className="p-6 glass-card border-white/5">
            <div className="text-primary font-bold mb-2">0{i+1}</div>
            <h4 className="font-bold mb-2 text-white">{item.t}</h4>
            <p className="text-sm text-text-secondary">{item.d}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ArchitectureSection;
