import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { SectionContainer } from '../ui/SectionContainer';

const testimonials = [
  {
    quote: "Gouji has revolutionized how I handle client onboarding. I share one link, but my clients see a custom portal while my team sees the technical specs. It's magic.",
    author: "Manu Kiran",
    role: "Digital Strategist",
    image: "https://i.pravatar.cc/100?img=11"
  },
  {
    quote: "The adaptive nature of the profile is a game-changer. I don't have to worry about my personal social links being visible to corporate vendors anymore.",
    author: "Jerin Joseph",
    role: "Agency Founder",
    image: "https://i.pravatar.cc/100?img=12"
  },
  {
    quote: "Finally, a digital identity platform that understands privacy. I can update my pricing for new leads without affecting existing clients. Pure genius.",
    author: "Abin Raj",
    role: "Real Estate Developer",
    image: "https://i.pravatar.cc/100?img=13"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <SectionContainer className="bg-surface/5">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-geometric text-white">Trusted by 16,000+ Professionals</h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Join the community of forward-thinking leaders who have transformed their networking with Gouji's adaptive identity infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 glass-card border-white/5 relative group hover:border-primary/30 transition-all"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
            
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
            </div>
            
            <p className="text-white/80 italic mb-8 leading-relaxed">"{t.quote}"</p>
            
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border border-white/10" />
              <div>
                <div className="font-bold text-white">{t.author}</div>
                <div className="text-xs text-text-secondary uppercase tracking-widest">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default TestimonialsSection;
