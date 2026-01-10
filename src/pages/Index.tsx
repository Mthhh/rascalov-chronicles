import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from '@/components/CustomCursor';
import FilmGrain from '@/components/FilmGrain';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import AudioPlayer from '@/components/AudioPlayer';
import HeroSection from '@/components/HeroSection';
import HeritageSection from '@/components/HeritageSection';
import SokolSection from '@/components/SokolSection';
import EmissairesSection from '@/components/EmissairesSection';
import LoisSection from '@/components/LoisSection';
import ProtocoleSection from '@/components/ProtocoleSection';

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Global Effects */}
      <CustomCursor />
      <FilmGrain />
      <ParticleBackground />
      
      {/* Audio Player */}
      <AudioPlayer />

      {/* Navigation - shows after entering with fade */}
      <AnimatePresence>
        {hasEntered && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Navigation />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>
        <AnimatePresence mode="wait">
          {/* Hero only shows before entering */}
          {!hasEntered && (
            <motion.div
              key="hero"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <HeroSection onEnter={() => setHasEntered(true)} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Content sections - shown after entering with elegant fade */}
        <AnimatePresence>
          {hasEntered && (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <HeritageSection />
              <SokolSection />
              <EmissairesSection />
              <LoisSection />
              <ProtocoleSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
