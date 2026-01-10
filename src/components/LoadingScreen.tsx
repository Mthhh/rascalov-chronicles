import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import wolfLogo from '@/assets/wolf-logo.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const interval = 30;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.08,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    })
  };

  const title = "RASCALOV";

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Film grain overlay */}
      <div className="film-grain pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--blood) / 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Wolf Logo */}
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Glow effect behind logo */}
        <motion.div
          className="absolute inset-0 blur-2xl"
          style={{
            background: 'radial-gradient(circle, hsl(var(--blood) / 0.5) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Logo */}
        <motion.img
          src={wolfLogo}
          alt="Rascalov"
          className="relative w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_30px_hsl(var(--blood)/0.6)]"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Title - Letter by letter */}
      <div className="flex gap-1 md:gap-2 mb-12">
        {title.split('').map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="font-cinzel text-3xl md:text-5xl font-bold tracking-[0.3em] metallic-text"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Progress bar container */}
      <div className="w-64 md:w-80">
        {/* Progress bar background */}
        <div className="relative h-[2px] bg-ivory/10 overflow-hidden">
          {/* Progress fill */}
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blood via-blood to-blood/80"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '400%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Percentage text */}
        <motion.p
          className="text-center mt-4 font-tech text-xs text-ivory/40 tracking-[0.5em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {Math.round(progress)}%
        </motion.p>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-12 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-blood/50" />
        <span className="font-heritage text-ivory/30 text-sm italic tracking-wider">
          Семья
        </span>
        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-blood/50" />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
