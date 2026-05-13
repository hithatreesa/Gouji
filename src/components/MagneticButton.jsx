import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const rectRef = useRef(null);

  const handleMouseEnter = () => {
    rectRef.current = ref.current.getBoundingClientRect();
  };

  const handleMouseMove = (e) => {
    if (!rectRef.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = rectRef.current;
    
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    setPosition({ x: x * 0.5, y: y * 0.5 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    rectRef.current = null;
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-block p-8 -m-8 cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
