import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import wolfLogo from '@/assets/wolf-logo.png';

interface HeroSectionProps {
  onEnter: () => void;
}

const HeroSection = ({ onEnter }: HeroSectionProps) => {
  const [isEntering, setIsEntering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax transforms
  const wolfX = useTransform(smoothMouseX, [-500, 500], [15, -15]);
  const wolfY = useTransform(smoothMouseY, [-500, 500], [10, -10]);
  const bgX = useTransform(smoothMouseX, [-500, 500], [-8, 8]);
  const bgY = useTransform(smoothMouseY, [-500, 500], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleEnter = () => {
    setIsEntering(true);
    setTimeout(() => {
      onEnter();
      window.scrollTo(0, 0);
    }, 800);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background via-background to-background"
        style={{ x: bgX, y: bgY }}
      />

      {/* Subtle dark glow behind wolf */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--steel) / 0.3) 0%, transparent 70%)',
        }}
        animate={{ 
          opacity: isEntering ? 0 : 0.2,
          scale: isEntering ? 1.5 : 1 
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Wolf Logo */}
      <motion.div
        className="relative z-20"
        style={{ x: wolfX, y: wolfY }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isEntering ? 0 : 1, 
          scale: isEntering ? 1.2 : 1,
          y: isEntering ? -30 : 0
        }}
        transition={{ 
          duration: isEntering ? 0.6 : 1.5, 
          ease: "easeOut"
        }}
      >
        <motion.img
          src={wolfLogo}
          alt="Rascalov Wolf"
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain breathing"
          style={{ 
            filter: 'drop-shadow(0 0 30px hsl(var(--steel) / 0.3))'
          }}
          initial={{ filter: 'brightness(0)' }}
          animate={{ filter: isEntering ? 'brightness(0)' : 'brightness(1)' }}
          transition={{ duration: isEntering ? 0.5 : 2, delay: isEntering ? 0 : 0.5 }}
        />
      </motion.div>

      {/* Title */}
      <motion.div
        className="relative z-20 mt-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: isEntering ? 0 : 1, 
          y: isEntering ? -20 : 0 
        }}
        transition={{ duration: 0.6, delay: isEntering ? 0 : 1 }}
      >
        <h1 className="font-cinzel text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[0.15em] text-ivory">
          RASCALOV
        </h1>
        
        {/* Decorative lines */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <motion.div 
            className="w-20 md:w-32 h-px bg-gradient-to-r from-transparent to-steel/50"
            animate={{ scaleX: isEntering ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <span className="text-steel font-orbitron text-xs tracking-[0.3em]">СЕМЬЯ</span>
          <motion.div 
            className="w-20 md:w-32 h-px bg-gradient-to-l from-transparent to-steel/50"
            animate={{ scaleX: isEntering ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>

      {/* Slogan */}
      <motion.p
        className="relative z-20 mt-8 text-center max-w-2xl px-6 font-rajdhani text-lg md:text-xl text-foreground/70 tracking-wider leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isEntering ? 0 : 1 
        }}
        transition={{ duration: 0.5, delay: isEntering ? 0 : 1.5 }}
      >
        <span className="text-foreground/80">
          CEUX QUI NOUS DÉFIENT TOMBENT.
        </span>
        <br />
        <span className="text-primary">
          CEUX QUI NOUS SUIVENT VIVENT.
        </span>
      </motion.p>

      {/* Enter Button */}
      <motion.button
        onClick={handleEnter}
        className="relative z-20 mt-16 group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isEntering ? 0 : 1, 
          y: isEntering ? -10 : 0,
          scale: isEntering ? 0.95 : 1 
        }}
        transition={{ duration: 0.5, delay: isEntering ? 0 : 2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative px-8 py-4 border border-steel/30 bg-steel/5 backdrop-blur-sm overflow-hidden">
          {/* Hover fill effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-steel/10 to-steel/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          
          <span className="relative font-rajdhani text-sm tracking-[0.3em] text-foreground/80 group-hover:text-foreground transition-colors">
            ENTRER DANS L'OMBRE
          </span>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-steel/50 group-hover:border-primary transition-colors" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-steel/50 group-hover:border-primary transition-colors" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-steel/50 group-hover:border-primary transition-colors" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-steel/50 group-hover:border-primary transition-colors" />
        </div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
