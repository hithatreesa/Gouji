import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Eye, BarChart, Smartphone, Bell, User } from 'lucide-react';

const MobileDashboardSection = () => {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Phone Mockup */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1 }}
              className="relative z-20 w-[280px] md:w-[320px] mx-auto aspect-9/19 bg-surface rounded-[3rem] border-8 border-[#1e293b] p-3 shadow-2xl overflow-hidden"
            >
              <div className="w-full h-full bg-background rounded-[2.2rem] flex flex-col p-6 border border-border-custom">
                <div className="flex justify-between items-center mb-8">
                  <div className="text-xs font-bold text-text-secondary uppercase">Dashboard</div>
                  <Bell className="w-4 h-4 text-text-secondary" />
                </div>
                
                <div className="p-4 glass-card border-primary/20 mb-6">
                  <div className="text-[10px] text-textSecondary mb-1 uppercase font-bold">Active Profile</div>
                  <div className="text-sm font-bold flex items-center justify-between">
                    Enterprise Mode
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-[10px] text-text-secondary uppercase font-bold">Control Center</div>
                  {[
                    { label: 'Visibility', icon: Eye, active: true },
                    { label: 'Analytics', icon: BarChart, active: false },
                    { label: 'Cloud Sync', icon: Smartphone, active: true },
                    { label: 'Permissions', icon: Settings, active: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-text-primary/5 rounded-xl border border-border-custom">
                      <div className="flex items-center gap-3">
                        <item.icon className="w-4 h-4 text-text-secondary" />
                        <span className="text-xs font-medium text-text-primary">{item.label}</span>
                      </div>
                      <div className={`w-8 h-4 rounded-full p-1 transition-colors ${item.active ? 'bg-primary' : 'bg-text-primary/10'}`}>
                        <div className={`w-2 h-2 rounded-full bg-white transition-transform ${item.active ? 'translate-x-4' : 'translate-x-0'}`} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-border-custom">
                  <button className="w-full py-3 bg-text-primary text-background rounded-xl font-bold text-xs uppercase tracking-widest">
                    Save Changes
                  </button>
                </div>
              </div>
            </motion.div>


          </div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-text-primary/5 border border-border-custom text-xs font-medium text-secondary mb-6 uppercase tracking-widest">
              Control Panel
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-geometric text-gradient">Your identity. <br /> In your pocket.</h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              Manage your entire identity ecosystem from the Gouji mobile dashboard. Real-time visibility controls, detailed analytics, and instant receiver simulation allow you to stay in control wherever you go.
            </p>
            
            <ul className="space-y-6">
              {[
                { t: 'Visibility Controls', d: 'Toggle specific data fields on/off in real-time.' },
                { t: 'Receiver Simulation', d: 'Preview exactly what your receiver will see.' },
                { t: 'Live Engagement', d: 'Get notified when someone interacts with your profile.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-text-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1">{item.t}</h4>
                    <p className="text-sm text-text-secondary">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileDashboardSection;
