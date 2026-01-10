import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.15; // Volume très faible pour l'ambiance
      audioRef.current.loop = true;
      
      // Autoplay dès le chargement
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay bloqué par le navigateur - on attend une interaction
          setIsPlaying(false);
          setIsMuted(true);
        });
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Autoplay blocked
        });
      }
      setIsPlaying(!isPlaying);
      if (!isPlaying) setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <audio ref={audioRef} src="/audio/ambiance.mp3" preload="auto" />
      
      <motion.div
        className="flex items-center gap-2 bg-secondary/80 backdrop-blur-sm border border-border rounded-full overflow-hidden"
        animate={{ 
          width: isExpanded ? 'auto' : '48px',
          paddingRight: isExpanded ? '16px' : '0px'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Main play button */}
        <button
          onClick={togglePlay}
          className="w-12 h-12 flex items-center justify-center hover:bg-primary/20 transition-colors relative"
        >
          <Music className="w-5 h-5 text-primary" />
          {isPlaying && (
            <motion.div
              className="absolute inset-0 border-2 border-primary rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </button>

        {/* Expanded controls */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="flex items-center gap-2"
            >
              <span className="text-xs text-muted-foreground font-rajdhani uppercase tracking-wider whitespace-nowrap">
                {isPlaying ? 'En cours' : 'Ambiance'}
              </span>
              <button
                onClick={toggleMute}
                className="p-2 hover:bg-primary/20 rounded-full transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Volume2 className="w-4 h-4 text-primary" />
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default AudioPlayer;
