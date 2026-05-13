import { motion } from 'framer-motion';

export const PrimaryButton = ({ children, className = "", ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, rotate: -1 }}
      whileTap={{ scale: 0.95 }}
      className={`px-10 py-5 bg-primary text-white rounded-full font-black text-lg uppercase tracking-wider shadow-[0_0_40px_rgba(255,77,41,0.3)] hover:shadow-[0_0_60px_rgba(255,77,41,0.5)] transition-all ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
