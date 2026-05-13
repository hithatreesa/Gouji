// import React removed for linting
import { motion } from 'framer-motion';

const AtmosphericMist = () => {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {/* Slow Moving Mist Layer 1 */}
      <motion.div
        animate={{
          x: [-20, 20],
          y: [-10, 10],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[-10%] bg-radial-to-br from-primary/5 via-transparent to-transparent blur-[120px] opacity-40"
      />

      {/* Slow Moving Mist Layer 2 */}
      <motion.div
        animate={{
          x: [30, -30],
          y: [20, -20],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[-20%] bg-radial-to-tl from-white/5 via-transparent to-transparent blur-[150px] opacity-30"
      />

      {/* Vignette Overlay to ground the UI */}
      <div className="absolute inset-0 bg-linear-to-b from-background/40 via-transparent to-background/60" />
    </div>
  );
};

export default AtmosphericMist;
