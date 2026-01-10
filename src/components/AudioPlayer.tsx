import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  // 0–30% (par défaut 6%)
  const [volumePercent, setVolumePercent] = useState(6);

  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeIntervalRef = useRef<number | null>(null);

  const volume = useMemo(() => clamp(volumePercent, 0, 30) / 100, [volumePercent]);
  const volumeRef = useRef(volume);

  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);

  const fadeToVolume = (to: number, duration = 2500) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (fadeIntervalRef.current) {
      window.clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }

    const from = audio.volume;
    const target = clamp(to, 0, 1);
    const steps = 30;
    const stepTime = Math.max(10, Math.round(duration / steps));
    const step = (target - from) / steps;
    let i = 0;

    fadeIntervalRef.current = window.setInterval(() => {
      i += 1;
      audio.volume = clamp(from + step * i, 0, 1);

      if (i >= steps) {
        if (fadeIntervalRef.current) window.clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = null;
        audio.volume = target;
      }
    }, stepTime);
  };

  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) window.clearInterval(fadeIntervalRef.current);
    };
  }, []);

  // Démarrage automatique (si le navigateur bloque, on démarre en muet et on déverrouille au 1er geste)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.muted = false;
    audio.volume = 0;

    const start = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setIsMuted(false);
        setAutoplayBlocked(false);
        fadeToVolume(volumeRef.current, 3000);
      } catch {
        // Tentative fallback: autoplay autorisé uniquement si muet
        setAutoplayBlocked(true);
        setIsMuted(true);
        audio.muted = true;
        audio.volume = 0;

        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }
    };

    void start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Déverrouille le son au premier clic / touche si autoplay non-muet bloqué
  useEffect(() => {
    if (!autoplayBlocked) return;

    const unlock = () => {
      const audio = audioRef.current;
      if (!audio) return;

      setAutoplayBlocked(false);
      setIsMuted(false);
      audio.muted = false;
      audio.volume = 0;

      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          fadeToVolume(volumeRef.current, 2000);
        })
        .catch(() => {
          // Si ça échoue encore, on laisse le widget gérer
        });
    };

    window.addEventListener('pointerdown', unlock, { once: true });
    window.addEventListener('keydown', unlock, { once: true });

    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplayBlocked]);

  // Applique mute/unmute et volume
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = isMuted;

    if (!isMuted && isPlaying) {
      // Ajustement doux du volume à chaque changement
      fadeToVolume(volumeRef.current, 350);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMuted, isPlaying, volumePercent]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        if (!isMuted) fadeToVolume(volumeRef.current, 800);
      })
      .catch(() => {
        setAutoplayBlocked(true);
        setIsMuted(true);
        audio.muted = true;
      });
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      setIsMuted(false);
      audio.muted = false;
      audio.volume = 0;
      fadeToVolume(volumeRef.current, 800);
      return;
    }

    setIsMuted(true);
    audio.muted = true;
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
          paddingRight: isExpanded ? '16px' : '0px',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Main play button */}
        <button
          onClick={togglePlay}
          className="w-12 h-12 flex items-center justify-center hover:bg-primary/20 transition-colors relative"
          aria-label={isPlaying ? 'Mettre en pause' : 'Lire'}
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
              className="flex items-center gap-3"
            >
              <span className="text-xs text-muted-foreground font-rajdhani uppercase tracking-wider whitespace-nowrap">
                {autoplayBlocked ? 'Débloquer' : isMuted ? 'Muet' : isPlaying ? 'En cours' : 'Ambiance'}
              </span>

              <div className="flex items-center gap-2 w-[160px]">
                <Slider
                  value={[volumePercent]}
                  min={0}
                  max={30}
                  step={1}
                  onValueChange={(v) => setVolumePercent(v?.[0] ?? 0)}
                  aria-label="Volume"
                  className="w-[110px]"
                />
                <span className="text-[10px] text-muted-foreground tabular-nums w-10 text-right">
                  {volumePercent}%
                </span>
              </div>

              <button
                onClick={toggleMute}
                className="p-2 hover:bg-primary/20 rounded-full transition-colors"
                aria-label={isMuted ? 'Réactiver le son' : 'Couper le son'}
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
