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
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20, mass: 0.5 });

  // Map the scroll progress to a 3D Z-axis movement
  // When it enters (0), it's far back (-2000px).
  // When it's in the middle (0.4 to 0.6), it's at normal scale (0px).
  // When it leaves (1), it flies past the camera (1000px).
  // We use the index to slightly offset the entrance so it feels staggered
  const z = useTransform(
    smoothProgress, 
    [0, 0.4, 0.6, 1], 
    [-1500 - (index * 200), 0, 0, 1500]
  );
  
  // Add a slight tilt/rotation as it flies past for more cinematic feel
  // It tilts up as it comes from below, flattens out, and tilts down as it flies over your head
  const rotateX = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [25, 0, 0, -25]);
  
  // Fade in from the deep fog, stay solid in the middle, and fade out as it flies past the camera
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Add blur for depth of field (blurred in the distance, sharp in the middle, blurred as it flies past)
  const blurValue = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [15, 0, 0, 20]);
  const filter = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <div ref={ref} className="relative w-full" style={{ perspective: '2000px' }}>
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
