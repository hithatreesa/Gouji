import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Cpu, Code, Zap,
  Globe, Brain, BarChart, Settings, Database,
  Mail, ArrowRight, Calendar,
} from 'lucide-react';
import Hero from '../components/Hero';
import ProcessSection from '../components/ProcessSection';
import WhyGoujiSection from '../components/WhyGoujiSection';
import DepthSection from '../components/DepthSection';
import ErrorBoundary from '../components/ErrorBoundary';
import TextReveal from '../components/TextReveal';

/* ─── About data ─────────────────────────────────────────── */


/* ─── Services data ──────────────────────────────────────── */
const serviceList = [
  { title: 'Custom Software', desc: 'Ground-up reconstruction of business logic into high-fidelity software systems.', icon: Database },
  { title: 'Web Applications', desc: 'Bespoke web environments built with modern frameworks for scale and speed.', icon: Globe },
  { title: 'Automation Tools', desc: 'Intelligent automation that eliminates manual bottlenecks and scales workflows.', icon: Zap },
  { title: 'AI Integrations', desc: 'Custom LLM and neural network orchestration tailored to your business data.', icon: Brain },
  { title: 'Custom Dashboards', desc: 'High-fidelity real-time data visualization cores for technical stakeholders.', icon: BarChart },
  { title: 'Internal Tools', desc: 'Private digital ecosystems built for secure team collaboration and ops.', icon: Settings },
];

/* ─── Wrapped Section Component ─────────────────────────── */
const AppSection = ({ id, children, index }) => (
  <section
    id={id}
    className="min-h-[70vh] w-full flex items-center justify-center relative py-12 md:py-16 px-6 overflow-visible scroll-mt-32"
  >
    <ErrorBoundary>
      <DepthSection index={index}>
        <div className="w-full max-w-7xl mx-auto">
          {children}
        </div>
      </DepthSection>
    </ErrorBoundary>
  </section>
);

/* ─── About Section Content ─────────────────────────────── */
const AboutContent = () => (
  <div className="max-w-5xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-24 text-center"
    >
      <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter">THE STUDIO</h2>
      <p className="text-2xl md:text-3xl text-text-secondary leading-relaxed font-medium max-w-3xl mx-auto">
        Gouji is a specialized software engineering studio. We build the high-fidelity infrastructure that powers modern business requirements.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
      <div className="glass-card p-12">
        <h3 className="text-3xl font-bold mb-6 tracking-tight">Our Approach</h3>
        <p className="text-text-secondary leading-relaxed text-lg">
          We approach every project as a unique engineering challenge. By stripping away standard templates and generic SaaS mentalities, we reconstruct software around the actual workflows of our clients.
        </p>
      </div>
      <div className="glass-card p-12">
        <h3 className="text-3xl font-bold mb-6 tracking-tight">The Vision</h3>
        <p className="text-text-secondary leading-relaxed text-lg">
          To turn complex business logic into scalable, reliable, and technically superior software that acts as the nervous system of an organization.
        </p>
      </div>
    </div>


  </div>
);

/* ─── Services Section Content ──────────────────────────── */
const ServicesContent = () => (
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">OUR SERVICES</h2>
      <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-medium opacity-80">
        We build the systems that generic SaaS can't handle.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {serviceList.map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="glass-card p-8 border border-white/5 hover:border-primary/30 transition-colors group cursor-default"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            <service.icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3 tracking-tight">{service.title}</h3>
          <p className="text-text-secondary text-sm leading-relaxed font-medium opacity-80">{service.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

/* ─── Contact Section Content ───────────────────────────── */
const ContactContent = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <TextReveal 
          text="LET'S CONNECT"
          className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter text-center lg:text-left flex lg:justify-start justify-center"
        />
        <p className="text-2xl md:text-3xl text-text-secondary leading-relaxed font-medium text-center lg:text-left">
          Tell us what you want to build.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="glass-card p-10 space-y-8"
              >
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary outline-none transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">What are we building?</label>
                  <textarea
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary outline-none transition-colors min-h-[150px]"
                    placeholder="Describe your project requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-5 bg-primary text-white rounded-xl font-black uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                >
                  Send Inquiry
                  <ArrowRight size={18} />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-20 text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mx-auto mb-8">
                  <Zap size={40} />
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tighter">Inquiry Sent</h3>
                <p className="text-text-secondary text-lg font-medium">
                  Our engineering team will review your requirements and reach out within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary font-bold uppercase tracking-widest text-xs mt-8"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
        <div className="glass-card p-8">
          <div className="flex items-center gap-4 text-primary mb-6 justify-center lg:justify-start">
            <Mail size={24} />
            <h4 className="text-xl font-bold tracking-tight uppercase">Email Us</h4>
          </div>
          <p className="text-text-secondary mb-4 font-medium italic">General Inquiries:</p>
          <a
            href="mailto:hello@gouji.studio"
            className="text-2xl font-bold text-text-primary hover:text-primary transition-colors block"
          >
            hello@gouji.studio
          </a>
        </div>

        <div className="glass-card p-8">
          <div className="flex items-center gap-4 text-primary mb-6 justify-center lg:justify-start">
            <Calendar size={24} />
            <h4 className="text-xl font-bold tracking-tight uppercase">Schedule</h4>
          </div>
          <p className="text-text-secondary mb-6 font-medium">
            Want to discuss your project logic in detail? Book a consultation with our engineers.
          </p>
          <button className="flex items-center gap-3 text-text-primary font-bold hover:text-primary transition-all group mx-auto lg:mx-0">
            Open Calendly
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

/* ─── Main Page Component ───────────────────────────────── */
const Home = () => (
  <div className="relative z-30 flex flex-col">
    <Helmet>
      <title>Gouji Studio | Bespoke Software Engineering</title>
      <meta
        name="description"
        content="A specialized software engineering studio building high-fidelity digital infrastructure and custom software systems tailored to your business logic."
      />
    </Helmet>

    {/* Section 1: Hero */}
    <AppSection id="hero" index={0}>
      <Hero />
    </AppSection>

    {/* Section 2: About */}
    <AppSection id="about" index={1}>
      <AboutContent />
    </AppSection>

    {/* Section 3: Services */}
    <AppSection id="services" index={2}>
      <ServicesContent />
    </AppSection>

    {/* Section 4: Process */}
    <AppSection id="process" index={3}>
      <ProcessSection />
    </AppSection>

    {/* Section 5: Why Gouji */}
    <AppSection id="why" index={4}>
      <WhyGoujiSection />
    </AppSection>

    {/* Section 6: Contact */}
    <AppSection id="contact" index={5}>
      <ContactContent />
    </AppSection>
  </div>
);

export default Home;

