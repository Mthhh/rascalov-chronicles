import { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import wolfLogo from '@/assets/wolf-logo.png';
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
  return <section id="hero" ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Noise/grain texture overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none opacity-[0.04]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
    }} />

      {/* Subtle red ambient glow in background */}
      <div className="absolute inset-0 z-0" style={{
      background: 'radial-gradient(ellipse at center 35%, hsl(var(--blood) / 0.12) 0%, hsl(var(--blood) / 0.04) 30%, transparent 60%)'
    }} />

      {/* Dark vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
      background: 'radial-gradient(ellipse at center, transparent 30%, hsl(var(--background)) 80%)'
    }} />

      {/* Wolf Logo - Clean, centered, with subtle glow */}
      <motion.div className="relative z-20" style={{
      x: wolfX,
      y: wolfY
    }} initial={{
      opacity: 0,
      scale: 0.9
    }} animate={{
      opacity: isEntering ? 0 : 1,
      scale: isEntering ? 1.1 : 1,
      y: isEntering ? -20 : 0
    }} transition={{
      duration: isEntering ? 0.6 : 1.2,
      delay: isEntering ? 0 : 0.3,
      ease: "easeOut"
    }}>
        <motion.img src={wolfLogo} alt="Rascalov Wolf" className="w-40 md:w-52 lg:w-60 h-auto object-contain breathing" style={{
        filter: 'drop-shadow(0 0 30px hsl(0 0% 100% / 0.15)) drop-shadow(0 0 60px hsl(var(--blood) / 0.2))'
      }} initial={{
        opacity: 0
      }} animate={{
        opacity: isEntering ? 0 : 1
      }} transition={{
        duration: isEntering ? 0.5 : 1.5,
        delay: isEntering ? 0 : 0.3
      }} />
      </motion.div>

      {/* Title RASCALOV */}
      <motion.h1 className="relative z-20 mt-10 font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.2em] text-ivory" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: isEntering ? 0 : 1,
      y: isEntering ? -15 : 0
    }} transition={{
      duration: 0.8,
      delay: isEntering ? 0 : 0.6
    }}>
        RASCALOV
      </motion.h1>

      {/* Slogan - Exact text from reference */}
      <motion.div className="relative z-20 mt-8 text-center max-w-2xl px-6" initial={{
      opacity: 0
    }} animate={{
      opacity: isEntering ? 0 : 1
    }} transition={{
      duration: 0.6,
      delay: isEntering ? 0 : 1
    }}>
        <p className="font-rajdhani text-sm md:text-base tracking-[0.2em] text-ivory/60 uppercase leading-loose">
          Ceux qui nous défient tombent. Ceux<br className="hidden md:block" /> qui nous suivent vivent.
        </p>
      </motion.div>

      {/* Défiler text */}
      <motion.p className="relative z-20 mt-4 font-rajdhani text-[10px] tracking-[0.4em] text-blood/70 uppercase" initial={{
      opacity: 0
    }} animate={{
      opacity: isEntering ? 0 : 0.7
    }} transition={{
      duration: 0.6,
      delay: isEntering ? 0 : 1.3
    }}>
        ​     
      </motion.p>

      {/* Enter Button */}
      <motion.button onClick={handleEnter} className="relative z-20 mt-6 group" initial={{
      opacity: 0,
      y: 15
    }} animate={{
      opacity: isEntering ? 0 : 1,
      y: isEntering ? 10 : 0
    }} transition={{
      duration: 0.6,
      delay: isEntering ? 0 : 1.5
    }} whileHover={{
      scale: 1.02
    }} whileTap={{
      scale: 0.98
    }}>
        <div className="relative px-14 py-4 border border-blood/50 bg-transparent overflow-hidden transition-all duration-300 group-hover:border-blood group-hover:bg-blood/10">
          <span className="relative font-rajdhani text-sm tracking-[0.2em] text-ivory/80 group-hover:text-ivory transition-colors uppercase">
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
          <p className="font-rajdhani text-xs tracking-[0.15em] text-ivory/40 leading-relaxed">
            {displayedText}
            <span className={`inline-block w-[2px] h-3 bg-blood/60 ml-0.5 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
          </p>
        </motion.div>
    </section>;
};
export default HeroSection;