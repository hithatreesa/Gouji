import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Understand Requirements',
    desc: 'We deep-dive into your operational logic to define the custom scope.'
  },
  {
    num: '02',
    title: 'Plan The System',
    desc: 'Our engineers architect the digital infrastructure before coding.'
  },
  {
    num: '03',
    title: 'Build & Test',
    desc: 'Agile development cycles with continuous stress-testing.'
  },
  {
    num: '04',
    title: 'Deploy & Scale',
    desc: 'We transition the system to your environment and manage scaling.'
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">The Process</h2>
            <p className="text-text-secondary text-xl font-medium tracking-wide uppercase opacity-60">Linear Execution. Exponential Results.</p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Horizontal Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="relative group"
              >
                <div className="glass-card p-10 h-full flex flex-col items-center text-center group-hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                  {/* Step Number Badge */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 relative">
                    <span className="text-2xl font-black">{step.num}</span>
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed font-medium">
                    {step.desc}
                  </p>

                  {/* Desktop Connecting Arrow */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-background border border-primary/20 flex items-center justify-center text-primary">
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Background Number Decal */}
                <div className="absolute -bottom-4 -right-4 text-9xl font-black opacity-[0.03] pointer-events-none select-none">
                  {step.num}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

