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

  // Stagger animation for title letters
  const titleLetters = "RASCALOV".split("");

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

      {/* Deep vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_50%,hsl(var(--shadow-deep))_100%)] z-10 pointer-events-none" />

      {/* Subtle red ambient glow behind wolf */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, hsl(var(--blood) / 0.15) 0%, hsl(var(--blood) / 0.05) 40%, transparent 70%)',
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: isEntering ? 0 : [0, 1, 0.7],
          scale: isEntering ? 0.3 : [0.5, 1.1, 1],
        }}
        transition={{ 
          duration: 2,
          times: [0, 0.6, 1],
          ease: "easeOut"
        }}
      />

      {/* Pulsing ring around wolf */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-blood/20 z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isEntering ? 0 : [0, 0.5, 0.3],
          scale: isEntering ? 0.5 : [0.8, 1.05, 1],
        }}
        transition={{ 
          duration: 2.5,
          delay: 0.3,
          times: [0, 0.5, 1],
        }}
      />

      {/* Decorative corner lines - Top Left */}
      <motion.div 
        className="absolute top-8 left-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isEntering ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <div className="w-24 h-px bg-gradient-to-r from-steel/60 to-transparent" />
        <div className="w-px h-24 bg-gradient-to-b from-steel/60 to-transparent" />
      </motion.div>

      {/* Decorative corner lines - Top Right */}
      <motion.div 
        className="absolute top-8 right-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isEntering ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 2.1 }}
      >
        <div className="w-24 h-px bg-gradient-to-l from-steel/60 to-transparent ml-auto" />
        <div className="w-px h-24 bg-gradient-to-b from-steel/60 to-transparent ml-auto" />
      </motion.div>

      {/* Decorative corner lines - Bottom Left */}
      <motion.div 
        className="absolute bottom-8 left-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isEntering ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <div className="w-px h-24 bg-gradient-to-t from-steel/60 to-transparent" />
        <div className="w-24 h-px bg-gradient-to-r from-steel/60 to-transparent" />
      </motion.div>

      {/* Decorative corner lines - Bottom Right */}
      <motion.div 
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isEntering ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 2.3 }}
      >
        <div className="w-px h-24 bg-gradient-to-t from-steel/60 to-transparent ml-auto" />
        <div className="w-24 h-px bg-gradient-to-l from-steel/60 to-transparent ml-auto" />
      </motion.div>

      {/* Classified header */}
      <motion.div
        className="absolute top-12 left-1/2 -translate-x-1/2 z-20 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isEntering ? 0 : 0.6, y: isEntering ? -20 : 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <p className="font-orbitron text-xs tracking-[0.4em] text-steel uppercase">
          Dossier N° 2024-RK-001 // Classification: <span className="text-blood">СЕКРЕТНО</span>
        </p>
      </motion.div>

      {/* Wolf Logo - Bigger and more dramatic */}
      <motion.div
        className="relative z-20"
        style={{ x: wolfX, y: wolfY }}
        initial={{ opacity: 0, scale: 0.6, y: 30 }}
        animate={{ 
          opacity: isEntering ? 0 : 1, 
          scale: isEntering ? 0.8 : 1,
          y: isEntering ? -30 : 0
        }}
        transition={{ 
          duration: isEntering ? 0.6 : 1.2, 
          delay: isEntering ? 0 : 0.5,
          ease: "easeOut"
        }}
      >
        {/* Glow layer behind wolf */}
        <div className="absolute inset-0 wolf-glow" />
        <motion.img
          src={wolfLogo}
          alt="Rascalov Wolf"
          className="w-72 md:w-[400px] lg:w-[450px] h-auto object-contain breathing relative z-10"
          style={{ 
            filter: 'drop-shadow(0 0 40px hsl(var(--blood) / 0.3)) drop-shadow(0 0 80px hsl(var(--blood) / 0.15))'
          }}
          initial={{ filter: 'brightness(0)' }}
          animate={{ filter: isEntering ? 'brightness(0)' : 'brightness(1) drop-shadow(0 0 40px hsl(var(--blood) / 0.3)) drop-shadow(0 0 80px hsl(var(--blood) / 0.15))' }}
          transition={{ duration: isEntering ? 0.5 : 2, delay: isEntering ? 0 : 0.5 }}
        />
      </motion.div>

      {/* СЕМЬЯ Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isEntering ? 0 : 1, 
          scale: isEntering ? 0.8 : 1 
        }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="relative z-20 mt-6 mb-4"
      >
        <span className="font-cinzel text-xs md:text-sm tracking-[0.5em] text-steel border border-steel/30 px-4 py-1.5 uppercase">
          СЕМЬЯ
        </span>
      </motion.div>

      {/* Title RASCALOV - Letter by letter animation */}
      <motion.div 
        className="relative z-20 mb-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isEntering ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h1 className="font-cinzel text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.15em] hero-title">
          {titleLetters.map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: isEntering ? 0 : 1, 
                y: isEntering ? -30 : 0 
              }}
              transition={{ 
                duration: 0.6, 
                delay: 1.1 + index * 0.08,
                ease: "easeOut"
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        {/* Underline accent */}
        <motion.div 
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-blood to-transparent"
          initial={{ width: 0 }}
          animate={{ width: isEntering ? 0 : "80%" }}
          transition={{ duration: 1, delay: 2 }}
        />
      </motion.div>

      {/* Slogan - Two lines with dramatic reveal */}
      <div className="relative z-20 space-y-3 mb-10 text-center">
        <motion.p 
          className="font-cormorant text-xl md:text-2xl lg:text-3xl italic text-ivory/90 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isEntering ? 0 : 1, 
            y: isEntering ? -20 : 0 
          }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          Le sang unit. L'honneur guide.
        </motion.p>
        
        {/* Decorative line */}
        <motion.div 
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ 
            opacity: isEntering ? 0 : 1, 
            scaleX: isEntering ? 0 : 1 
          }}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-blood/60" />
          <span className="w-1.5 h-1.5 bg-blood rounded-full shadow-[0_0_10px_hsl(var(--blood))]" />
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-blood/60" />
        </motion.div>
        
        <motion.p 
          className="font-cormorant text-xl md:text-2xl lg:text-3xl italic text-blood font-medium tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isEntering ? 0 : 1, 
            y: isEntering ? -20 : 0 
          }}
          transition={{ duration: 0.8, delay: 2.7 }}
        >
          L'ombre protège.
        </motion.p>
      </div>

      {/* Enter Button - Premium style */}
      <motion.button
        onClick={handleEnter}
        className="relative z-20 group px-10 py-4 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isEntering ? 0 : 1, 
          y: isEntering ? 20 : 0
        }}
        transition={{ duration: 0.6, delay: 3 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Button border with glow on hover */}
        <span className="absolute inset-0 border border-steel/40 group-hover:border-blood/60 transition-colors duration-500" />
        
        {/* Animated corner accents */}
        <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blood/0 group-hover:border-blood transition-all duration-300" />
        <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-blood/0 group-hover:border-blood transition-all duration-300" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-blood/0 group-hover:border-blood transition-all duration-300" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-blood/0 group-hover:border-blood transition-all duration-300" />
        
        {/* Hover glow effect */}
        <span className="absolute inset-0 bg-blood/0 group-hover:bg-blood/5 transition-colors duration-500" />
        
        {/* Button text */}
        <span className="relative font-orbitron text-sm tracking-[0.3em] text-ivory/80 group-hover:text-ivory transition-colors duration-300 uppercase">
          Entrer dans l'ombre
        </span>
      </motion.button>

      {/* Bottom decorative element */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isEntering ? 0 : 0.4 }}
        transition={{ duration: 1, delay: 3.2 }}
      >
        <motion.div 
          className="w-px h-8 bg-gradient-to-b from-steel/60 to-transparent"
          animate={{ scaleY: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="font-orbitron text-[10px] tracking-[0.3em] text-steel uppercase">Scroll</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
