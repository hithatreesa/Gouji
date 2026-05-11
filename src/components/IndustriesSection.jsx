import React from 'react';
import { motion } from 'framer-motion';
import { Building2, HardHat, HeartPulse, Camera, Briefcase, Network } from 'lucide-react';
import { cn } from '../utils/cn';

const industries = [
  { name: 'Enterprise', icon: Building2, desc: 'Corporate identity & access management.' },
  { name: 'Sales Teams', icon: Briefcase, desc: 'Personalized pitch & contact sharing.' },
  { name: 'Construction', icon: HardHat, desc: 'Site safety & credential verification.' },
  { name: 'Real Estate', icon: Camera, desc: 'Immersive property listings & agent profiles.' },
  { name: 'Healthcare', icon: HeartPulse, desc: 'Secure credential & patient data sharing.' },
  { name: 'Networking', icon: Network, desc: 'Intelligent digital business cards.' },
];

const IndustriesSection = () => {
  return (
    <section className="py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-geometric text-text-primary">Tailored for your ecosystem.</h2>
          <p className="text-text-secondary text-lg max-w-xl">
            Gouji is an adaptive infrastructure that fits into any industry requiring controlled information sharing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.02, 
                  rotateY: 5, 
                  rotateX: -5,
                  transition: { duration: 0.2 }
                }}
                className="group p-8 glass-card hover:bg-text-primary/5 hover:border-primary/20 transition-all cursor-default perspective-1000"
              >
                <div className="w-14 h-14 rounded-2xl bg-text-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-text-primary">{ind.name}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{ind.desc}</p>
                
                <div className="mt-8 flex items-center gap-2 text-xs font-bold text-text-secondary group-hover:text-primary transition-colors">
                  EXPLORE USE CASE <div className="w-0 group-hover:w-8 h-px bg-primary transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
