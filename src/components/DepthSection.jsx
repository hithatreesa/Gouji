import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const DepthSection = ({ children, index = 0 }) => {
  const ref = useRef(null);
  
  // Track this section's progress through the viewport
  // "start end" = top of section hits bottom of viewport
  // "end start" = bottom of section hits top of viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Add a very slight spring so the 3D movement feels organic and floaty
  // Add a slightly tighter spring for the new scroll speed
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 25, mass: 0.8 });

  // Map the scroll progress to a 3D Z-axis movement
  // Optimized for a seamless 100vh-to-100vh flow
  const z = useTransform(
    smoothProgress, 
    [0, 0.4, 0.6, 1], 
    [-4000, 0, 0, 4000]
  );
  
  // Add a slight tilt/rotation as it flies past for more cinematic feel
  const rotateX = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [25, 0, 0, -25]);
  
  // Fade in from the deep fog (Fully visible for the central 20% of the scroll)
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 0, 1, 1, 0, 0]);
  
  // Extreme blur for depth of field (sharp for the majority of the view)
  const blurValue = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [20, 0, 0, 25]);
  const filter = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <div ref={ref} className="relative w-full" style={{ perspective: '3000px' }}>
      <motion.div
        style={{
          z,
          rotateX,
          opacity,
          filter,
          transformStyle: "preserve-3d"
        }}
        className="w-full origin-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default DepthSection;
