import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface TypewriterNoteProps {
  lines: string[];
  signature?: string;
  className?: string;
  rotation?: string;
  delay?: number;
}

const TypewriterNote = ({ 
  lines, 
  signature, 
  className = "", 
  rotation = "rotate-6",
  delay = 0.3
}: TypewriterNoteProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayedLines, setDisplayedLines] = useState<string[]>(lines.map(() => ""));
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showSignature, setShowSignature] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const startDelay = setTimeout(() => {
      const currentLine = lines[currentLineIndex];
      const displayedLine = displayedLines[currentLineIndex];

      if (displayedLine.length < currentLine.length) {
        const timeout = setTimeout(() => {
          setDisplayedLines(prev => {
            const newLines = [...prev];
            newLines[currentLineIndex] = currentLine.slice(0, displayedLine.length + 1);
            return newLines;
          });
        }, 40);
        return () => clearTimeout(timeout);
      } else if (currentLineIndex < lines.length - 1) {
        const timeout = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
        }, 150);
        return () => clearTimeout(timeout);
      } else if (signature && !showSignature) {
        const timeout = setTimeout(() => {
          setShowSignature(true);
        }, 200);
        return () => clearTimeout(timeout);
      }
    }, delay * 1000);

    return () => clearTimeout(startDelay);
  }, [isInView, currentLineIndex, displayedLines, lines, signature, showSignature, delay]);

  const hasStarted = displayedLines.some(line => line.length > 0);

  return (
    <motion.div
      ref={ref}
      className={`hidden lg:block ${className}`}
      initial={{ opacity: 0, rotate: parseInt(rotation.replace('rotate-', '')) || 0 }}
      animate={isInView ? { opacity: hasStarted ? 0.6 : 0, rotate: parseInt(rotation.replace('rotate-', '')) || 0 } : {}}
      transition={{ duration: 0.3 }}
    >
      <div className={`handwritten-note text-blood text-sm ${rotation}`}>
        {displayedLines.map((line, index) => (
          <span key={index}>
            {line}
            {index < lines.length - 1 && displayedLines[index].length > 0 && <br />}
          </span>
        ))}
        {showSignature && signature && (
          <motion.span 
            className="text-xs block mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {signature}
          </motion.span>
        )}
        {!showSignature && hasStarted && (
          <span className="inline-block w-[2px] h-3 bg-blood/70 ml-0.5 animate-pulse" />
        )}
      </div>
    </motion.div>
  );
};

export default TypewriterNote;
