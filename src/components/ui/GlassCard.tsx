import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, ...props }) => {
  return (
    <motion.div
      className={`glass-card p-8 ${className}`}
      {...props as any}
    >
      {children}
    </motion.div>
  );
};
