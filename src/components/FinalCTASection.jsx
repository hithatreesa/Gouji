import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, MessageSquare, Users, Mail } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-40 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 -z-10 bg-transparent">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-transparent" />
        
        {/* Animated mesh particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5
            }}
            animate={{ 
              y: [null, Math.random() * 100 + "%"],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
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
          className="glass-card p-12 md:p-24 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent" />
          
          <h2 className="text-4xl md:text-7xl font-bold mb-8 font-geometric text-text-primary">Build the future of <br /><span className="text-gradient">adaptive identity.</span></h2>
          <p className="text-text-secondary text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Create personalized information experiences with Gouji. Join 500+ enterprises redefining digital interaction.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-text-primary text-background rounded-2xl font-bold text-lg glow-primary hover:bg-primary hover:text-white transition-all flex items-center gap-3 group"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-text-primary/5 border border-border-custom text-text-primary rounded-2xl font-bold text-lg hover:bg-text-primary/10 transition-all"
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </div>

      <footer className="mt-40 border-t border-border-custom pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-background rounded-sm rotate-45" />
                </div>
                <span className="text-2xl font-bold tracking-tighter font-geometric text-text-primary">GOUJI</span>
              </div>
              <p className="text-text-secondary text-sm mb-6 max-w-xs">
                The world's first adaptive identity and contextual data-sharing platform. Built for the future of enterprise interaction.
              </p>
              <div className="flex gap-4">
                <MessageSquare className="w-5 h-5 text-text-secondary hover:text-text-primary cursor-pointer transition-colors" />
                <Code className="w-5 h-5 text-text-secondary hover:text-text-primary cursor-pointer transition-colors" />
                <Users className="w-5 h-5 text-text-secondary hover:text-text-primary cursor-pointer transition-colors" />
                <Mail className="w-5 h-5 text-text-secondary hover:text-text-primary cursor-pointer transition-colors" />
              </div>
            </div>

            {[
              { title: 'Platform', links: ['Features', 'Intelligence', 'Security', 'Enterprise'] },
              { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Contact'] },
              { title: 'Resources', links: ['Documentation', 'API Reference', 'Status', 'Legal'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold text-text-primary mb-6 uppercase tracking-widest text-xs">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-text-secondary text-sm hover:text-primary transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-border-custom text-[10px] text-text-secondary uppercase tracking-widest font-bold">
            <div>© 2026 GOUJI INFRASTRUCTURE INC. ALL RIGHTS RESERVED.</div>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FinalCTASection;
