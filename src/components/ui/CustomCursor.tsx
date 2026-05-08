import React, { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveMouse);
    return () => window.removeEventListener('mousemove', moveMouse);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      // @ts-expect-error - React 19 typing conflict
      className="fixed top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] pointer-events-none z-9999 mix-blend-screen"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    />
  );
};
