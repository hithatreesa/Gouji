import React from 'react';
import { motion } from 'framer-motion';

const TrustSection: React.FC = () => {
  const metrics = [
    { label: 'Identities Secured', value: '2M+', suffix: '' },
    { label: 'Data Transactions', value: '500', suffix: 'M' },
    { label: 'Enterprise Partners', value: '150', suffix: '+' },
    { label: 'Uptime SLA', value: '99.9', suffix: '%' },
  ];

  return (
    <div className="py-20 border-y border-white/5 bg-surface/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              // @ts-expect-error - React 19 typing conflict
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-bold text-white mb-2 font-geometric">
                {metric.value}{metric.suffix}
              </div>
              <div className="text-xs md:text-sm font-medium text-text-secondary uppercase tracking-widest">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {['Stitch', 'Vercel', 'Linear', 'Replicate', 'Retool'].map((logo) => (
            <span key={logo} className="text-2xl font-bold text-white tracking-tighter">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
