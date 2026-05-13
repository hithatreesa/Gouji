import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, MessageSquare, Users, Mail } from 'lucide-react';
import { PrimaryButton } from './ui/PrimaryButton';
import { SecondaryButton } from './ui/SecondaryButton';

// Pre-calculate particles outside to maintain React 19 purity
const staticParticles = [...Array(20)].map(() => ({
  x: Math.random() * 100 + "%",
  y: Math.random() * 100 + "%",
  opacity: Math.random() * 0.5,
  duration: Math.random() * 10 + 10,
  targetY: Math.random() * 100 + "%"
}));

const FinalCTASection = () => {
  const particles = useMemo(() => staticParticles, []);

  return (
    <section id="contact" className="py-40 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        {/* Animated mesh particles */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ x: p.x, y: p.y, opacity: p.opacity }}
            animate={{ 
              y: [null, p.targetY],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-primary rounded-full blur-sm"
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-card border-primary/20 p-12 md:p-24 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent" />
          
          <h2 className="text-4xl md:text-7xl font-bold mb-8 font-geometric text-white uppercase italic tracking-tighter leading-none">
            Build the future of <br /><span className="text-primary italic">adaptive identity.</span>
          </h2>
          <p className="text-text-secondary text-xl mb-12 max-w-xl mx-auto leading-relaxed font-medium">
            Create personalized information experiences with Gouji. Join 500+ enterprises redefining digital interaction.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <PrimaryButton className="flex items-center gap-3 group">
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </PrimaryButton>
            <SecondaryButton>
              Let's Connect
            </SecondaryButton>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default FinalCTASection;
