import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Fingerprint, Key, Lock, EyeOff } from 'lucide-react';
import { SectionContainer } from '../ui/SectionContainer';

const SecuritySection: React.FC = () => {
  return (
    <SectionContainer id="security" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-geometric text-white">Your identity. <br />Your rules.</h2>
          <p className="text-text-secondary text-lg mb-12">
            Security isn't an afterthought at Gouji. We've built an encrypted, permission-based infrastructure that gives you absolute authority over your digital presence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Zero-Knowledge Sharing', icon: EyeOff, desc: 'We never store your raw data; only encrypted pointers.' },
              { title: 'Biometric Handshake', icon: Fingerprint, desc: 'Optional biometric verification for high-value data.' },
              { title: 'Time-Locked Access', icon: Key, desc: 'Set expiration dates for any shared information.' },
              { title: 'Granular Auditing', icon: ShieldAlert, desc: 'Detailed logs of every access attempt and view.' },
            ].map((item, i) => (
              <div key={i} className="p-6 glass-card border-white/5 hover:bg-white/5 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-2 text-sm text-white">{item.title}</h4>
                <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          {/* Cyber visual */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
            
            {/* Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              // @ts-expect-error - React 19 typing conflict
              className="absolute inset-0 border border-white/5 rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(255,77,41,0.5)]" />
            </motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              // @ts-expect-error - React 19 typing conflict
              className="absolute inset-[10%] border border-white/5 rounded-full"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-secondary rounded-full shadow-[0_0_20px_rgba(249,115,22,0.5)]" />
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full glass border-primary/20 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  // @ts-expect-error - React 19 typing conflict
                  className="absolute inset-0 bg-primary/20"
                />
                <Lock className="w-20 h-20 text-white relative z-10" />
              </div>
            </div>

            {/* Data flow indicators */}
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <div 
                key={deg} 
                className="absolute top-1/2 left-1/2 w-1/2 h-px origin-left bg-linear-to-r from-transparent via-white/10 to-transparent"
                style={{ transform: `rotate(${deg}deg)` }}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SecuritySection;
