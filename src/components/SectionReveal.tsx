import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionRevealProps {
  children: React.ReactNode;
}

const SectionReveal = ({ children }: SectionRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <div ref={ref} className="relative">
      {/* Red flash overlay on reveal */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        initial={{ opacity: 0 }}
        animate={isInView ? {
          opacity: [0, 0.08, 0],
        } : {}}
        transition={{ duration: 0.6, times: [0, 0.15, 1] }}
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--blood) / 0.3) 0%, transparent 70%)',
        }}
      />

      {/* Content fade in */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SectionReveal;
