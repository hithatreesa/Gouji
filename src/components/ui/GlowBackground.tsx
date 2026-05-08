import React from 'react';
import { motion } from 'framer-motion';

export const GlowBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,77,41,0.05)_0%,transparent_70%)]" />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        // @ts-expect-error - React 19 typing conflict
        className="absolute top-1/4 -left-1/4 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[160px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        // @ts-expect-error - React 19 typing conflict
        className="absolute bottom-1/4 -right-1/4 w-[800px] h-[600px] bg-secondary/5 rounded-full blur-[160px]" 
      />
      
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};
