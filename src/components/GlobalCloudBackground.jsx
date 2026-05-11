import React, { useRef } from 'react';
import { motion, useScroll, useAnimationFrame, useSpring, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const GlobalCloudBackground = () => {
  const { theme } = useTheme();
  const { scrollY, scrollYProgress } = useScroll();

  // Ultra-smooth cinematic spring
  const smoothScrollY = useSpring(scrollY, { stiffness: 10, damping: 40, mass: 2.5 });
  
  // Scale the background clouds as you scroll to simulate flying forward into the depth
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);

  const cloudRef1 = useRef(null);
  const cloudRef2 = useRef(null);

  useAnimationFrame((t) => {
    if (!cloudRef1.current || !cloudRef2.current) return;

    const drift1 = (t / 150000) * 2000;
    const drift2 = (t / 180000) * 2000;

    const scrollContrib1 = smoothScrollY.get() * -0.15;
    const scrollContrib2 = smoothScrollY.get() * -0.08;

    cloudRef1.current.style.backgroundPositionY = `${drift1 + scrollContrib1}px`;
    cloudRef2.current.style.backgroundPositionY = `${1000 + drift2 + scrollContrib2}px`;
  });

  return (
    <div
      className={`fixed inset-0 z-0 pointer-events-none transition-colors duration-1000 ${theme === 'dark' ? 'bg-[#0B0E14]' : 'bg-[#F0F4F8]'
        }`}
    >
      <motion.div style={{ scale }} className="absolute inset-0 w-full h-full origin-center">
        {/* Infinite tiling cloud layer — background-repeat does the infinite work */}
        <div
          ref={cloudRef1}
          className={`absolute inset-0 transition-opacity duration-1000 ${theme === 'dark'
              ? "opacity-40 mix-blend-screen"
              : "opacity-60"
            }`}
          style={{
            backgroundImage: theme === 'dark'
              ? "url('/src/assets/cloud-dark.png')"
              : "url('/src/assets/cloud-light.png')",
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
            backgroundPositionY: '0px',
          }}
        />

        {/* Mirrored second layer offset by half — breaks up the repeat pattern */}
        <div
          ref={cloudRef2}
          className={`absolute inset-0 transition-opacity duration-1000 ${theme === 'dark'
              ? "opacity-20 mix-blend-screen"
              : "opacity-30"
            }`}
          style={{
            backgroundImage: theme === 'dark'
              ? "url('/src/assets/cloud-dark.png')"
              : "url('/src/assets/cloud-light.png')",
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
            backgroundPositionY: '1000px', // offset so layers don't align perfectly
            transform: 'scaleX(-1)', // horizontally flipped for variation
          }}
        />
      </motion.div>

      {/* Atmospheric Haze */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full transition-all duration-1000 ${theme === 'dark'
            ? 'bg-[radial-gradient(circle_at_50%_20%,rgba(255,77,41,0.08)_0%,transparent_60%)]'
            : 'bg-[radial-gradient(circle_at_50%_0%,rgba(0,102,255,0.15)_0%,transparent_70%)]'
          }`} />
        <div className={`absolute inset-0 backdrop-blur-[0.5px] ${theme === 'dark' ? 'bg-[#0B0E14]/20' : 'bg-white/5'
          }`} />
      </div>

      {/* Vignette */}
      <div className={`absolute inset-0 z-20 pointer-events-none transition-all duration-1000 ${theme === 'dark'
          ? 'bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(11,14,20,0.5)_100%)]'
          : 'bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(255,255,255,0.2)_100%)]'
        }`} />
    </div>
  );
};

export default GlobalCloudBackground;
