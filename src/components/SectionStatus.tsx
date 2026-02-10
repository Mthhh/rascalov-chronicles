import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionStatusProps {
  text: string;
  delay?: number;
}

const SectionStatus = ({ text, delay = 0.5 }: SectionStatusProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isInView && !started) {
      const timer = setTimeout(() => setStarted(true), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay, started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedText(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <div ref={ref} className="mt-10 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay }}
        className="flex items-center gap-2"
      >
        <span className="text-blood/60 font-mono text-xs">{'>'}</span>
        <span className="font-mono text-[11px] text-steel/50 tracking-wider">
          {displayedText}
          {started && displayedText.length < text.length && (
            <span className="animate-pulse">█</span>
          )}
        </span>
      </motion.div>
    </div>
  );
};

export default SectionStatus;
