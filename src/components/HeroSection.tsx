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
  const wolfX = useTransform(smoothMouseX, [-500, 500], [10, -10]);
  const wolfY = useTransform(smoothMouseY, [-500, 500], [8, -8]);

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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Subtle red ambient glow in background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at center 40%, hsl(var(--blood) / 0.08) 0%, transparent 50%)',
        }}
      />

      {/* Wolf Logo - Clean, centered, with subtle glow */}
      <motion.div
        className="relative z-20"
        style={{ x: wolfX, y: wolfY }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: isEntering ? 0 : 1, 
          scale: isEntering ? 1.1 : 1,
          y: isEntering ? -20 : 0
        }}
        transition={{ 
          duration: isEntering ? 0.6 : 1.2, 
          delay: isEntering ? 0 : 0.3,
          ease: "easeOut"
        }}
      >
        <motion.img
          src={wolfLogo}
          alt="Rascalov Wolf"
          className="w-40 md:w-52 lg:w-60 h-auto object-contain breathing"
          style={{ 
            filter: 'drop-shadow(0 0 30px hsl(0 0% 100% / 0.15)) drop-shadow(0 0 60px hsl(var(--blood) / 0.2))'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isEntering ? 0 : 1 }}
          transition={{ duration: isEntering ? 0.5 : 1.5, delay: isEntering ? 0 : 0.3 }}
        />
      </motion.div>

      {/* Title RASCALOV */}
      <motion.h1 
        className="relative z-20 mt-10 font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.2em] text-ivory"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isEntering ? 0 : 1, 
          y: isEntering ? -15 : 0 
        }}
        transition={{ duration: 0.8, delay: isEntering ? 0 : 0.6 }}
      >
        RASCALOV
      </motion.h1>

      {/* Slogan */}
      <motion.div 
        className="relative z-20 mt-8 text-center max-w-2xl px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isEntering ? 0 : 1 }}
        transition={{ duration: 0.6, delay: isEntering ? 0 : 1 }}
      >
        <p className="font-rajdhani text-sm md:text-base tracking-[0.25em] text-ivory/70 uppercase leading-relaxed">
          Ceux qui nous défient tombent. Ceux qui nous suivent vivent.
        </p>
      </motion.div>

      {/* Défiler text */}
      <motion.p
        className="relative z-20 mt-6 font-rajdhani text-xs tracking-[0.3em] text-blood/80 uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: isEntering ? 0 : 0.8 }}
        transition={{ duration: 0.6, delay: isEntering ? 0 : 1.3 }}
      >
        Défiler
      </motion.p>

      {/* Enter Button */}
      <motion.button
        onClick={handleEnter}
        className="relative z-20 mt-8 group"
        initial={{ opacity: 0, y: 15 }}
        animate={{ 
          opacity: isEntering ? 0 : 1, 
          y: isEntering ? 10 : 0
        }}
        transition={{ duration: 0.6, delay: isEntering ? 0 : 1.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative px-12 py-4 border border-blood/60 bg-blood/5 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-blood group-hover:bg-blood/10">
          <span className="relative font-rajdhani text-sm tracking-[0.25em] text-ivory/90 group-hover:text-ivory transition-colors uppercase">
            Entrer dans l'ombre
          </span>
        </div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
