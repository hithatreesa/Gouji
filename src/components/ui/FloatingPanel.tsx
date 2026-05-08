import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface FloatingPanelProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export const FloatingPanel: React.FC<FloatingPanelProps> = ({ children, className, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={`glass-card p-6 shadow-2xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
