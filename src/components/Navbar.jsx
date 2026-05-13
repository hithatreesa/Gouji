import { useState, useEffect, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { cn } from '../utils/cn';
import MagneticButton from './MagneticButton';

const SystemCore = () => {
  const meshRef = useRef();
  const wireRef = useRef();
  const colors = { day: '#0066FF' };

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) meshRef.current.rotation.y = t * 0.5;
    if (wireRef.current) {
      wireRef.current.rotation.y = -t * 0.3;
      wireRef.current.rotation.x = t * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={3} color={colors.day} />
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color={colors.day} metalness={0.9} roughness={0.1} emissive={colors.day} emissiveIntensity={0.5} />
      </mesh>
      <mesh ref={wireRef}>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshStandardMaterial color={colors.day} wireframe transparent opacity={0.3} emissive={colors.day} emissiveIntensity={1} />
      </mesh>
    </>
  );
};

const AtmosphereSentinel = () => (
  <div className="w-8 h-8 relative flex items-center justify-center">
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <SystemCore phase="day" />
      </Suspense>
    </Canvas>
    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10" />
  </div>
);

const navLinks = [
  { name: 'Home',     href: '#hero' },
  { name: 'About',    href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Connect',  href: '#contact' },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  const [isScrolled, setIsScrolled]     = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection]  = useState('#hero');

  /* scroll spy */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          
          // Scroll Spy logic - only run if actually needed for visual state
          const ids = navLinks.map((l) => l.href.slice(1));
          for (let i = ids.length - 1; i >= 0; i--) {
            const el = document.getElementById(ids[i]);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 150) {
                setActiveSection('#' + ids[i]);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <nav className={cn(
        "pointer-events-auto transition-all duration-700 ease-[0.16,1,0.3,1]",
        "flex items-center gap-6 md:gap-10 px-6 py-2.5 rounded-full border border-white/10",
        "bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        isScrolled ? "scale-95 translate-y-[-5px]" : "scale-100"
      )}>
        <div className="flex items-center gap-4">
          <AtmosphereSentinel />
          <button
            onClick={() => scrollTo('#hero')}
            className="text-lg font-black tracking-tighter font-geometric uppercase italic text-text-primary"
          >
            +GOUJI®
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8 border-l border-white/10 pl-8 ml-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.2em] transition-colors",
                activeSection === link.href
                  ? "text-primary"
                  : "text-text-primary/50 hover:text-text-primary"
              )}
            >
              {link.name}
            </button>
          ))}
          <MagneticButton>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-2 bg-text-primary text-background rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-colors ml-4 shadow-xl shadow-primary/20"
            >
              Start Project
            </button>
          </MagneticButton>
        </div>

        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed top-24 left-6 right-6 p-8 rounded-3xl bg-surface/90 backdrop-blur-3xl border border-white/10 md:hidden flex flex-col gap-6 pointer-events-auto"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => { scrollTo(link.href); setMobileMenuOpen(false); }}
                className="text-2xl font-bold uppercase tracking-widest text-text-primary text-left"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => { scrollTo('#contact'); setMobileMenuOpen(false); }}
              className="w-full py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-center"
            >
              Start Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
