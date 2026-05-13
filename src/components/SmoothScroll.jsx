import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis with premium cinematic settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      wheelMultiplier: 0.8,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.15, 
    });

    // RAF loop for Lenis
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Clean up
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
