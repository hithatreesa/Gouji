import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Zap,
  Globe, Brain, BarChart, Settings, Database,
} from 'lucide-react';
import Hero from '../components/Hero';
import ProcessSection from '../components/ProcessSection';
import WhyGoujiSection from '../components/WhyGoujiSection';
import DepthSection from '../components/DepthSection';
import ErrorBoundary from '../components/ErrorBoundary';
import FinalCTASection from '../components/FinalCTASection';

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
        <p className="text-text-secondary leading-relaxed text-lg font-medium opacity-80">
          We approach every project as a unique engineering challenge. By stripping away standard templates and generic SaaS mentalities, we reconstruct software around the actual workflows of our clients.
        </p>
      </div>
      <div className="glass-card p-12">
        <h3 className="text-3xl font-bold mb-6 tracking-tight">The Vision</h3>
        <p className="text-text-secondary leading-relaxed text-lg font-medium opacity-80">
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

    {/* Section 6: Final CTA */}
    <AppSection id="contact" index={5}>
      <FinalCTASection />
    </AppSection>
  </div>
);

export default Home;
