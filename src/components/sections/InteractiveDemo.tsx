import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Shield, Briefcase, BarChart3, ChevronRight, Globe, FileText, Settings, Database } from 'lucide-react';
import { SectionContainer } from '../ui/SectionContainer';
import { FloatingPanel } from '../ui/FloatingPanel';

interface ReceiverType {
  id: string;
  name: string;
  icon: React.ElementType;
  title: string;
  content: { label: string; value: string }[];
  color: string;
}

const receiverTypes: ReceiverType[] = [
  { 
    id: 'client', 
    name: 'Client', 
    icon: Globe,
    title: 'Professional Portfolio',
    content: [
      { label: 'Project Portfolio', value: '12 Active Cases' },
      { label: 'Service Pricing', value: 'Enterprise Tier' },
      { label: 'Meeting Link', value: 'calendly.com/gouji' },
    ],
    color: 'from-orange-500'
  },
  { 
    id: 'vendor', 
    name: 'Vendor', 
    icon: Database,
    title: 'Procurement Portal',
    content: [
      { label: 'Payment Terms', value: 'Net 30' },
      { label: 'Tax ID', value: '99-2345XXX' },
      { label: 'Primary Contact', value: 'Operations Team' },
    ],
    color: 'from-[#ff4d29]'
  },
  { 
    id: 'employee', 
    name: 'Employee', 
    icon: Briefcase,
    title: 'Internal Dashboard',
    content: [
      { label: 'Directory', value: 'Engineering Dept' },
      { label: 'Benefits', value: 'Premium Plan' },
      { label: 'Resources', value: 'Knowledge Base' },
    ],
    color: 'from-coral-500'
  },
  { 
    id: 'investor', 
    name: 'Investor', 
    icon: BarChart3,
    title: 'Strategic Metrics',
    content: [
      { label: 'ARR Growth', value: '+140% YoY' },
      { label: 'Burn Rate', value: 'Optimized' },
      { label: 'Pitch Deck', value: 'Q3 Update' },
    ],
    color: 'from-amber-500'
  },
];

const InteractiveDemo: React.FC = () => {
  const [activeType, setActiveType] = useState(receiverTypes[0]);

  return (
    <SectionContainer id="platform">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-geometric">One identity. Different experiences.</h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Switch between receiver types to see how Gouji dynamically filters and presents your identity data based on context.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Selector */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {receiverTypes.map((type) => {
            const Icon = type.icon;
            const isActive = activeType.id === type.id;
            
            return (
              <button
                key={type.id}
                onClick={() => setActiveType(type)}
                className={`flex items-center gap-4 p-6 rounded-2xl border transition-all duration-300 text-left group ${
                  isActive 
                    ? "bg-white/10 border-primary shadow-[0_0_20px_rgba(255,77,41,0.1)]" 
                    : "bg-surface/40 border-white/5 hover:border-white/20"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  isActive ? "bg-primary text-black" : "bg-white/5 text-text-secondary group-hover:text-white"
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className={`text-lg font-bold ${isActive ? "text-white" : "text-text-secondary"}`}>
                    {type.name}
                  </div>
                  <div className="text-xs text-text-secondary">View personalizations</div>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? "text-primary translate-x-1" : "text-white/10"}`} />
              </button>
            );
          })}
        </div>

        {/* Right: Preview */}
        <div className="lg:col-span-8 relative">
          <div className="absolute inset-0 bg-primary/10 rounded-[40px] blur-[100px] -z-10" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeType.id}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-surface border border-white/10 rounded-[32px] p-2 shadow-2xl overflow-hidden"
            >
              <div className="bg-[#0d0d0d] rounded-[24px] overflow-hidden border border-white/5">
                {/* Device Header */}
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px]">
                      <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Alex Rivera</div>
                      <div className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Identity Owner</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-text-secondary flex items-center gap-2">
                    <Shield className="w-3 h-3 text-primary" />
                    ENCRYPTED TUNNEL
                  </div>
                </div>

                {/* Profile Banner */}
                <div className={`h-32 bg-gradient-to-r ${activeType.color} to-transparent opacity-20`} />
                
                {/* Content Area */}
                <div className="p-8 -mt-16">
                  <div className="flex items-end justify-between mb-8">
                    <div className="p-4 glass rounded-2xl">
                      <div className="text-[10px] text-text-secondary uppercase tracking-widest font-bold mb-1">Active Experience</div>
                      <div className="text-xl font-bold">{activeType.title}</div>
                    </div>
                    <div className="text-xs text-text-secondary bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                      Context: {activeType.name}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {activeType.content.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-[10px] text-text-secondary uppercase tracking-widest font-bold mb-1">{item.label}</div>
                        <div className="text-sm font-semibold">{item.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '70%' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${activeType.color} to-transparent`}
                      />
                    </div>
                    <div className="h-2 w-3/4 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '45%' }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className={`h-full bg-gradient-to-r ${activeType.color} to-transparent`}
                      />
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-text-secondary" />
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <Settings className="w-4 h-4 text-text-secondary" />
                      </div>
                    </div>
                    <button className={`px-6 py-2 rounded-xl text-xs font-bold text-white transition-all bg-gradient-to-r ${activeType.color} to-primary/50`}>
                      Request Access
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionContainer>
  );
};

export default InteractiveDemo;
