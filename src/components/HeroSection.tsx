import { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import wolfLogo from '@/assets/wolf-logo.png';
import heroBackground from '@/assets/hero-background.jpg';

interface HeroSectionProps {
  onEnter: () => void;
}

const HeroSection = ({
  onEnter
}: HeroSectionProps) => {
  const [isEntering, setIsEntering] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const fullText = useMemo(() => "Découvrez l'univers exclusif que nous avons créé pour votre communauté.", []);

  // Typewriter effect
  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, fullText]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics
  const springConfig = {
    damping: 25,
    stiffness: 150
  };
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
    <section id="hero" ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 z-[1] bg-background/60" />

      {/* Noise/grain texture overlay */}
      <div 
        className="absolute inset-0 z-30 pointer-events-none opacity-[0.06]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} 
      />

      {/* Red ambient glow */}
      <div 
        className="absolute inset-0 z-[2]" 
        style={{
          background: 'radial-gradient(ellipse at center 35%, hsl(var(--blood) / 0.2) 0%, hsl(var(--blood) / 0.08) 30%, transparent 60%)'
        }} 
      />

      {/* Dark vignette */}
      <div 
        className="absolute inset-0 z-[3] pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, hsl(var(--background)) 85%)'
        }} 
      />

      {/* Wolf Logo - Premium glow effect */}
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
          className="w-44 md:w-56 lg:w-64 h-auto object-contain breathing" 
          style={{
            filter: 'drop-shadow(0 0 40px hsl(0 0% 100% / 0.2)) drop-shadow(0 0 80px hsl(var(--blood) / 0.4))'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isEntering ? 0 : 1 }}
          transition={{
            duration: isEntering ? 0.5 : 1.5,
            delay: isEntering ? 0 : 0.3
          }}
        />
      </motion.div>

      {/* Title RASCALOV - Premium metallic effect */}
      <motion.h1 
        className="relative z-20 mt-10 font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.25em]"
        style={{
          background: 'linear-gradient(180deg, hsl(var(--ivory)) 0%, hsl(var(--ivory) / 0.7) 50%, hsl(var(--blood) / 0.5) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 60px hsl(var(--blood) / 0.3)',
          filter: 'drop-shadow(0 4px 20px hsl(0 0% 0% / 0.8))'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isEntering ? 0 : 1,
          y: isEntering ? -15 : 0
        }}
        transition={{
          duration: 0.8,
          delay: isEntering ? 0 : 0.6
        }}
      >
        RASCALOV
      </motion.h1>

      {/* Decorative line */}
      <motion.div 
        className="relative z-20 mt-6 flex items-center gap-4"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: isEntering ? 0 : 1, scaleX: isEntering ? 0 : 1 }}
        transition={{ duration: 0.8, delay: isEntering ? 0 : 0.8 }}
      >
        <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-blood/60 to-blood" />
        <div className="w-2 h-2 rotate-45 border border-blood/60 bg-blood/20" />
        <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent via-blood/60 to-blood" />
      </motion.div>

      {/* Slogan - Premium styling */}
      <motion.div 
        className="relative z-20 mt-6 text-center max-w-2xl px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isEntering ? 0 : 1 }}
        transition={{ duration: 0.6, delay: isEntering ? 0 : 1 }}
      >
        <p 
          className="font-cinzel text-sm md:text-base tracking-[0.3em] uppercase leading-loose"
          style={{
            background: 'linear-gradient(90deg, hsl(var(--ivory) / 0.5) 0%, hsl(var(--ivory)) 50%, hsl(var(--ivory) / 0.5) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Ceux qui nous défient tombent
        </p>
        <p 
          className="font-cinzel text-sm md:text-base tracking-[0.3em] uppercase leading-loose mt-1"
          style={{
            background: 'linear-gradient(90deg, hsl(var(--ivory) / 0.5) 0%, hsl(var(--ivory)) 50%, hsl(var(--ivory) / 0.5) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Ceux qui nous suivent vivent
        </p>
      </motion.div>

      {/* Enter Button - Premium style */}
      <motion.button 
        onClick={handleEnter} 
        className="relative z-20 mt-10 group"
        initial={{ opacity: 0, y: 15 }}
        animate={{
          opacity: isEntering ? 0 : 1,
          y: isEntering ? 10 : 0
        }}
        transition={{
          duration: 0.6,
          delay: isEntering ? 0 : 1.5
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative px-16 py-5 border border-blood/40 bg-blood/5 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-blood group-hover:bg-blood/15 group-hover:shadow-[0_0_40px_hsl(var(--blood)/0.3)]">
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span 
            className="relative font-cinzel text-sm tracking-[0.25em] uppercase"
            style={{
              background: 'linear-gradient(90deg, hsl(var(--ivory) / 0.8) 0%, hsl(var(--ivory)) 50%, hsl(var(--ivory) / 0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Entrer dans l'ombre
          </span>
        </div>
      </motion.button>

      {/* Typewriter text for staff */}
      <motion.div 
        className="relative z-20 mt-8 max-w-md text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isEntering ? 0 : 1 }}
        transition={{ duration: 0.6, delay: isEntering ? 0 : 2 }}
      >
        <p className="font-rajdhani text-xs tracking-[0.15em] text-ivory/50 leading-relaxed italic">
          {displayedText}
          <span className={`inline-block w-[2px] h-3 bg-blood/70 ml-1 align-middle transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;