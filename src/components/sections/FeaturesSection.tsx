import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Layout, Share2, BarChart, Cloud } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionContainer } from '../ui/SectionContainer';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  className: string;
  color: string;
  visual?: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Adaptive Sharing',
    description: 'Context-aware data filtering that changes based on who is viewing your profile.',
    icon: Share2,
    className: 'md:col-span-2 md:row-span-2',
    color: 'from-orange-500',
    visual: (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-64 h-64 border-2 border-primary rounded-full animate-ping" />
        <div className="w-32 h-32 border-2 border-primary rounded-full animate-pulse absolute" />
      </div>
    )
  },
  {
    title: 'Business Hub',
    description: 'Integrate Google Reviews, maps, and appointment booking directly into your identity.',
    icon: Layout,
    className: 'md:col-span-1 md:row-span-1',
    color: 'from-coral-500',
  },
  {
    title: 'Dynamic Visibility',
    description: 'Timed access and temporary visibility controls for sensitive information.',
    icon: Zap,
    className: 'md:col-span-1 md:row-span-1',
    color: 'from-amber-500',
  },
  {
    title: 'Real-time Analytics',
    description: 'Track who viewed what, when, and from where with deep insights.',
    icon: BarChart,
    className: 'md:col-span-1 md:row-span-2',
    color: 'from-red-500',
    visual: (
      <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-end gap-1 px-4 pb-4 opacity-30">
        {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
          <div key={i} className="flex-1 bg-primary rounded-t-sm" style={{ height: `${h}%` }} />
        ))}
      </div>
    )
  },
  {
    title: 'Cloud Sync',
    description: 'Instant updates across all receiver endpoints and NFC triggers. Print once, share forever.',
    icon: Cloud,
    className: 'md:col-span-1 md:row-span-1',
    color: 'from-orange-400',
  },
  {
    title: 'QR & Legacy Support',
    description: 'Advanced QR fallback ensuring every device can access your adaptive profile.',
    icon: Zap,
    className: 'md:col-span-1 md:row-span-1',
    color: 'from-primary',
  },
  {
    title: 'Privacy Controls',
    description: 'Disable or enable public access to your page anytime from your dashboard.',
    icon: Shield,
    className: 'md:col-span-1 md:row-span-1',
    color: 'from-green-500',
  },
];

const FeatureCard: React.FC<{ feature: Feature, index: number }> = ({ feature, index }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`relative group overflow-hidden glass-card p-8 min-h-[280px] flex flex-col justify-between hover:border-primary/50 transition-colors ${feature.className}`}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br opacity-0 group-hover:opacity-10 blur-3xl transition-opacity ${feature.color} to-transparent`} />
      
      {feature.visual}
      
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 group-hover:bg-primary group-hover:text-black transition-all`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed max-w-[240px]">
          {feature.description}
        </p>
      </div>
      
      <div className="relative z-10 pt-6">
        <div className="flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          LEARN MORE <div className="w-8 h-px bg-primary" />
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <SectionContainer id="features">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-geometric text-gradient">Engineered for control.</h2>
          <p className="text-text-secondary text-lg">
            The Gouji infrastructure is built to handle complex identity logic with enterprise-grade security and cinematic simplicity.
          </p>
        </div>
        <button className="px-6 py-3 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/5 transition-colors">
          View All Features
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <FeatureCard key={i} feature={feature} index={i} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FeaturesSection;
