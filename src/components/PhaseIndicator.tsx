import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Phase {
  id: string;
  label: string;
  russian: string;
  color: string;
  borderColor: string;
  glowColor: string;
  sections: string[];
}

const phases: Phase[] = [
  {
    id: 'gang',
    label: 'GANG',
    russian: 'БАНДА',
    color: 'hsl(var(--steel))',
    borderColor: 'hsl(var(--steel) / 0.5)',
    glowColor: 'none',
    sections: ['heritage', 'timeline'],
  },
  {
    id: 'famille',
    label: 'FAMILLE',
    russian: 'СЕМЬЯ',
    color: 'hsl(var(--blood))',
    borderColor: 'hsl(var(--blood) / 0.5)',
    glowColor: '0 0 15px hsl(var(--blood) / 0.3)',
    sections: ['facade', 'emissaires', 'hierarchie', 'commandements', 'protocole'],
  },
  {
    id: 'rascalov',
    label: 'RASCALOV',
    russian: 'РАСКАЛОВ',
    color: 'hsl(45, 60%, 55%)',
    borderColor: 'hsl(45, 60%, 55% / 0.5)',
    glowColor: '0 0 20px hsl(45, 60%, 55% / 0.3)',
    sections: ['sokol'],
  },
];

const PhaseIndicator = () => {
  const [currentPhase, setCurrentPhase] = useState<Phase>(phases[0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let found: Phase | null = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          const id = section.getAttribute('id') || '';
          for (const phase of phases) {
            if (phase.sections.includes(id)) {
              found = phase;
            }
          }
        }
      });

      if (found) setCurrentPhase(found);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-40"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPhase.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="px-4 py-2 bg-background/80 backdrop-blur-sm"
          style={{
            border: `1px solid ${currentPhase.borderColor}`,
            boxShadow: currentPhase.glowColor,
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: currentPhase.color }}
            />
            <div>
              <span
                className="font-orbitron text-[10px] tracking-[0.2em] block"
                style={{ color: currentPhase.color }}
              >
                {currentPhase.label}
              </span>
              <span className="font-orbitron text-[8px] text-foreground/30 tracking-wider">
                {currentPhase.russian}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default PhaseIndicator;
