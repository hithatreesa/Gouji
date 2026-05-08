import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Settings, Database, Activity } from 'lucide-react';
import { SectionContainer } from '../ui/SectionContainer';

const MobileDashboardSection: React.FC = () => {
  return (
    <SectionContainer className="bg-surface/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          {/* Mobile Mockup */}
          <div className="relative mx-auto w-[300px] h-[600px] bg-[#0d0d0d] rounded-[3rem] border-[8px] border-white/10 shadow-2xl overflow-hidden p-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white/10 rounded-b-3xl" />
            
            <div className="mt-12">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-xl font-bold text-white uppercase italic tracking-tighter">+GOUJI®</h4>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-primary" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 glass rounded-2xl">
                  <div className="text-[10px] text-text-secondary uppercase tracking-widest font-bold mb-1">Global Visibility</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Public Profile</span>
                    <div className="w-10 h-5 bg-primary rounded-full flex items-center px-1">
                      <div className="w-3 h-3 bg-white rounded-full ml-auto" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <Database className="w-5 h-5 text-text-secondary mb-2" />
                    <div className="text-[10px] text-text-secondary font-bold">Sync</div>
                    <div className="text-sm font-bold text-white">Active</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <Shield className="w-5 h-5 text-primary mb-2" />
                    <div className="text-[10px] text-text-secondary font-bold">Privacy</div>
                    <div className="text-sm font-bold text-white">Locked</div>
                  </div>
                </div>

                <div className="p-4 glass rounded-2xl">
                  <div className="text-[10px] text-text-secondary uppercase tracking-widest font-bold mb-4">Receiver Controls</div>
                  <div className="space-y-3">
                    {['Clients', 'Vendors', 'Public'].map((type) => (
                      <div key={type} className="flex items-center justify-between text-xs">
                        <span className="text-white/60">{type}</span>
                        <div className="w-8 h-4 bg-white/10 rounded-full flex items-center px-0.5">
                          <div className="w-3 h-3 bg-white/20 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 blur-[80px] -z-10" />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-geometric text-white">The control center <br />in your pocket.</h2>
          <p className="text-text-secondary text-lg mb-10 leading-relaxed">
            Manage your entire identity ecosystem on the go. Switch modes, revoke access, and track analytics from a single, intuitive dashboard.
          </p>
          
          <ul className="space-y-6">
            {[
              { t: 'Instant Revocation', d: 'Immediately stop data sharing for any specific receiver.' },
              { t: 'Live Sync', d: 'Your physical NFC triggers update in real-time.' },
              { t: 'Biometric Security', d: 'Secure your most sensitive data with FaceID or TouchID.' }
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Settings className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.t}</h4>
                  <p className="text-sm text-text-secondary">{item.d}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default MobileDashboardSection;
