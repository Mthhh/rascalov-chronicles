import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
  labelRu: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'ACCUEIL', labelRu: 'ГЛАВНАЯ' },
  { id: 'heritage', label: 'HÉRITAGE', labelRu: 'НАСЛЕДИЕ' },
  { id: 'sokol', label: 'PROJET SOKOL', labelRu: 'СОКОЛ' },
  { id: 'emissaires', label: 'ÉMISSAIRES', labelRu: 'АГЕНТЫ' },
  { id: 'lois', label: 'LOIS DU SANG', labelRu: 'ЗАКОНЫ' },
  { id: 'protocole', label: 'PROTOCOLE', labelRu: 'ПРОТОКОЛ' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-cinzel text-xl font-bold text-primary tracking-[0.2em]">
              RASCALOV
            </span>
            <span className="text-xs text-muted-foreground font-orbitron">
              СЕМЬЯ
            </span>
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 group"
              >
                <span className={`font-rajdhani text-sm tracking-wider transition-colors ${
                  activeSection === item.id 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}>
                  {item.label}
                </span>
                
                {/* Russian subtitle on hover */}
                <motion.span
                  initial={{ opacity: 0, y: -5 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full text-[10px] text-primary/60 font-orbitron"
                >
                  {item.labelRu}
                </motion.span>

                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    style={{ boxShadow: '0 0 10px hsl(var(--blood))' }}
                  />
                )}

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform" />
              </button>
            ))}
          </div>

          {/* Classified stamp */}
          <div className="hidden lg:block">
            <span className="text-[10px] font-orbitron text-primary/40 tracking-[0.3em] border border-primary/20 px-3 py-1">
              СЕКРЕТНО
            </span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
