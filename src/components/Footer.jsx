import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-30 bg-background/80 backdrop-blur-3xl border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-secondary">
          © {currentYear} GOUJI SOFTWARE STUDIO. ALL RIGHTS RESERVED.
        </p>
        
        <div className="flex gap-8 items-center">
          {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
            <a 
              key={i} 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-all duration-300 transform hover:scale-125"
            >
              <Icon size={16} strokeWidth={2} />
            </a>
          ))}
        </div>

        <div className="flex gap-10">
          <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-secondary hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-secondary hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
