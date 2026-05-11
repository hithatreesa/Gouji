import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Globe } from 'lucide-react';
import { cn } from '../utils/cn';

const plans = [
  {
    name: 'Personal',
    price: '0',
    description: 'Perfect for individuals and networking.',
    features: ['1 Adaptive Identity', 'Basic Analytics', 'Standard QR Support', 'Contact Sharing'],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Professional',
    price: '29',
    description: 'Advanced features for power networkers.',
    features: ['5 Adaptive Identities', 'Full Analytics Hub', 'Custom Link (gouji.me/you)', 'Priority Cloud Sync', 'Premium NFC Support'],
    cta: 'Go Pro',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Custom solutions for large organizations.',
    features: ['Unlimited Identities', 'Team Management', 'SSO & Advanced Security', 'API Access', 'White-label Experiences'],
    cta: 'Contact Sales',
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-geometric text-text-primary">Simple, Transparent Pricing.</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            One platform. Multiple versions of you. Choose the plan that fits your networking ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "p-8 glass-card border-white/5 flex flex-col relative",
                plan.popular && "border-primary/50 shadow-[0_0_40px_rgba(79,209,255,0.1)] scale-105 z-10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-background text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-text-primary">{plan.name}</h3>
                <p className="text-text-secondary text-sm">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-text-primary">${plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-text-secondary text-sm">/mo</span>}
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-text-primary/80">
                    <Check className="w-4 h-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className={cn(
                "w-full py-4 rounded-xl font-bold transition-all",
                plan.popular 
                  ? "bg-primary text-white hover:bg-primary/90 glow-primary" 
                  : "bg-text-primary/5 text-text-primary border border-border-custom hover:bg-text-primary/10"
              )}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 glass-card flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-text-primary">1 Card Every Year</h4>
              <p className="text-sm text-text-secondary">Professional and Enterprise plans include a new premium smart card annually.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Globe className="w-5 h-5 text-textSecondary" />
            <Zap className="w-5 h-5 text-textSecondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
