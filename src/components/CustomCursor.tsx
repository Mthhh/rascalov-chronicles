import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[10000] mix-blend-difference"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div 
          className={`w-3 h-3 rounded-full transition-all duration-200 ${
            isPointer 
              ? 'bg-blood-glow shadow-[0_0_20px_hsl(var(--blood-glow)),0_0_40px_hsl(var(--blood))]' 
              : 'bg-primary shadow-[0_0_10px_hsl(var(--blood)),0_0_20px_hsl(var(--blood-dark))]'
          }`}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isPointer ? 1.3 : 1,
          opacity: isPointer ? 0.8 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.8,
        }}
      >
        <div 
          className="w-10 h-10 rounded-full border border-primary/50"
          style={{
            boxShadow: '0 0 10px hsl(var(--blood) / 0.3)',
          }}
        />
      </motion.div>

      {/* Crosshair lines (visible on hover) */}
      {isPointer && (
        <>
          <motion.div
            className="fixed pointer-events-none z-[9998] w-6 h-px bg-primary/60"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
              x: position.x - 12,
              y: position.y,
              opacity: 1,
              scaleX: 1,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="fixed pointer-events-none z-[9998] w-px h-6 bg-primary/60"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{
              x: position.x,
              y: position.y - 12,
              opacity: 1,
              scaleY: 1,
            }}
            transition={{ duration: 0.2 }}
          />
        </>
      )}
    </>
  );
};

export default CustomCursor;
