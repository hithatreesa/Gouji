import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Fingerprint, Key, Lock, EyeOff } from 'lucide-react';

const SecuritySection = () => {
  return (
    <section id="security" className="py-32 bg-transparent relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-geometric text-text-primary">Your identity. <br />Your rules.</h2>
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
                <div key={i} className="p-6 glass-card hover:bg-text-primary/5 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-text-primary/5 flex items-center justify-center mb-4 text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold mb-2 text-sm text-text-primary">{item.title}</h4>
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
                className="absolute inset-0 border border-border-custom rounded-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full glow-primary" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[10%] border border-border-custom rounded-full"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-secondary rounded-full glow-secondary" />
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full glass border-primary/20 flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-primary/20"
                  />
                  <Lock className="w-20 h-20 text-text-primary relative z-10" />
                </div>
              </div>

              {/* Data flow indicators */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div 
                  key={deg} 
                  className="absolute top-1/2 left-1/2 w-1/2 h-px origin-left bg-linear-to-r from-transparent via-text-primary/10 to-transparent"
                  style={{ transform: `rotate(${deg}deg)` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
