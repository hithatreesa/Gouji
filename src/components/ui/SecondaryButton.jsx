import { motion } from 'framer-motion';

export const SecondaryButton = ({ children, className = "", ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
