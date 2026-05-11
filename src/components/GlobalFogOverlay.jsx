import React, { useRef } from 'react';
import { useScroll, useAnimationFrame, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const GlobalFogOverlay = () => {
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  
  // Smooth scroll spring for parallax
  const smoothScrollY = useSpring(scrollY, { stiffness: 10, damping: 40, mass: 2.5 });
  
  const fogRef1Luminous = useRef(null);
  const fogRef1Shadow = useRef(null);
  const fogRef2Luminous = useRef(null);
  const fogRef2Shadow = useRef(null);

  // Animate the background position for an infinite, seamless loop
  useAnimationFrame((t) => {
    if (!fogRef1Luminous.current || !fogRef1Shadow.current || !fogRef2Luminous.current || !fogRef2Shadow.current) return;

    // Reverting to vertical flow because the image is not a seamless horizontal texture
    // and horizontal scrolling exposes a harsh vertical seam (the edge of the image).
    const driftX1 = (t / 50000) * 1000; // Slow horizontal drift
    const driftY1 = (t / 25000) * -2000; // Fast vertical upward flow

    const driftX2 = (t / 70000) * 1000; // Slow horizontal drift
    const driftY2 = (t / 35000) * -2000; // Slower vertical upward flow

    // Foreground parallax moves significantly UP when scrolling DOWN
    const scrollContrib = smoothScrollY.get() * -0.3;

    // Apply combined X and Y to both Luminous and Shadow layers synchronously
    const pos1 = `${driftX1}px calc(50% + ${driftY1 + scrollContrib}px)`;
    const pos2 = `${1000 + driftX2}px calc(50% + ${driftY2 + scrollContrib * 1.2}px)`;

    fogRef1Luminous.current.style.backgroundPosition = pos1;
    fogRef1Shadow.current.style.backgroundPosition = pos1;
    
    fogRef2Luminous.current.style.backgroundPosition = pos2;
    fogRef2Shadow.current.style.backgroundPosition = pos2;
  });

  // The cinematic cloud asset
  const cloudAsset = theme === 'dark' ? "url('/src/assets/cloud-dark.png')" : "url('/src/assets/cloud-light.png')";
  
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        zIndex: 2147483647, // Maximum possible z-index mathematically allowed in CSS
      }}
    >
      {/* Cloud 1 - Luminous */}
      <div
        ref={fogRef1Luminous}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: cloudAsset,
          backgroundRepeat: 'repeat',
          backgroundSize: '250%',
          opacity: 0.25,
          mixBlendMode: 'screen',
          filter: theme === 'dark' ? 'blur(6px) contrast(1.1)' : 'blur(8px)',
        }}
      />

      {/* Cloud 2 - Luminous */}
      <div
        ref={fogRef2Luminous}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: cloudAsset,
          backgroundRepeat: 'repeat',
          backgroundSize: '350%',
          opacity: 0.20,
          mixBlendMode: 'screen',
          filter: theme === 'dark' ? 'blur(10px) contrast(1.1)' : 'blur(12px)',
          transform: 'scaleY(-1)', 
        }}
      />
    </div>
  );
};

export default GlobalFogOverlay;
