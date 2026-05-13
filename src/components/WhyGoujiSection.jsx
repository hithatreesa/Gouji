import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Layers, Server, Wrench } from 'lucide-react';

const reasons = [
  { title: 'Built For Scale', desc: 'Every line of code is architected to handle enterprise-level data loads without performance degradation.', icon: Layers },
  { title: 'Fast Development', desc: 'Our proprietary studio logic allows us to deploy custom software modules 40% faster than standard agencies.', icon: Zap },
  { title: 'Modern Technology', desc: 'We utilize the latest in React, Next.js, and GPU-accelerated infrastructure to build future-proof tools.', icon: ShieldCheck },
  { title: 'Reliable Architecture', desc: 'Hardware-level isolation and multi-layered redundancy come standard with every Gouji build.', icon: Server },
  { title: 'Custom Engineering', desc: 'We don’t use templates. Every system is a ground-up reconstruction of your specific business requirements.', icon: Wrench },
];

const WhyGoujiSection = () => {
  return (
    <section id="why-gouji" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">
              WHY <br /><span className="text-primary">GOUJI?</span>
            </h2>
            <p className="text-text-secondary text-xl leading-relaxed mb-12 max-w-lg font-medium">
              We are not a SaaS company. We are a software engineering studio dedicated to building the systems your business actually needs.
            </p>
            <div className="h-1 w-40 bg-primary opacity-50" />
          </motion.div>

          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex items-start gap-8 p-8 rounded-3xl hover:bg-white/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2 tracking-tight">{reason.title}</h4>
                  <p className="text-text-secondary font-medium opacity-80 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGoujiSection;
