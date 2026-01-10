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
  const glowX = useTransform(smoothMouseX, [-500, 500], [20, -20]);
  const glowY = useTransform(smoothMouseY, [-500, 500], [15, -15]);

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
    }, 1000);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background via-blood-dark/10 to-background"
        style={{ x: bgX, y: bgY }}
      />

      {/* Radial glow behind wolf */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(var(--blood) / 0.4) 0%, transparent 70%)',
          x: glowX,
          y: glowY,
        }}
      />

      {/* Secondary glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(var(--blood-glow) / 0.2) 0%, transparent 60%)',
        }}
      />

      {/* Wolf Logo */}
      <motion.div
        className="relative z-20"
        style={{ x: wolfX, y: wolfY }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isEntering ? 0 : 1, 
          scale: isEntering ? 5 : 1 
        }}
        transition={{ 
          duration: isEntering ? 1 : 1.5, 
          ease: isEntering ? 'easeIn' : 'easeOut' 
        }}
      >
        <motion.img
          src={wolfLogo}
          alt="Rascalov Wolf"
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain blood-glow breathing"
          initial={{ filter: 'brightness(0)' }}
          animate={{ filter: 'brightness(1)' }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </motion.div>

      {/* Title */}
      <motion.div
        className="relative z-20 mt-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: isEntering ? 0 : 1, 
          y: isEntering ? -50 : 0 
        }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h1 className="font-cinzel text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[0.15em] metallic-text">
          RASCALOV
        </h1>
        
        {/* Decorative lines */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="w-20 md:w-32 h-px bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-primary/60 font-orbitron text-xs tracking-[0.3em]">СЕМЬЯ</span>
          <div className="w-20 md:w-32 h-px bg-gradient-to-l from-transparent to-primary/50" />
        </div>
      </motion.div>

      {/* Slogan */}
      <motion.p
        className="relative z-20 mt-8 text-center max-w-2xl px-6 font-rajdhani text-lg md:text-xl text-foreground/80 tracking-wider leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isEntering ? 0 : 1 
        }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <span className="glitch-text">
          CEUX QUI NOUS DÉFIENT TOMBENT.
        </span>
        <br />
        <span className="text-primary/90">
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
          y: 0,
          scale: isEntering ? 0.8 : 1 
        }}
        transition={{ duration: 0.8, delay: 2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative px-8 py-4 border border-primary/30 bg-primary/5 backdrop-blur-sm overflow-hidden">
          {/* Hover fill effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blood-dark/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          
          <span className="relative font-rajdhani text-sm tracking-[0.3em] text-foreground/90 group-hover:text-primary-foreground transition-colors">
            ENTRER DANS L'OMBRE
          </span>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
        </div>

        {/* Glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: '0 0 30px hsl(var(--blood) / 0.3)' }}
        />
      </motion.button>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isEntering ? 0 : 0.5 }}
        transition={{ delay: 3 }}
      >
        <span className="text-[10px] font-orbitron tracking-[0.2em] text-muted-foreground">
          SCROLL
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Zoom overlay for transition */}
      {isEntering && (
        <motion.div
          className="absolute inset-0 bg-background z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      )}
    </section>
  );
};

export default HeroSection;
