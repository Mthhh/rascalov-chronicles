import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FilmGrain from '@/components/FilmGrain';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import AudioPlayer from '@/components/AudioPlayer';
import HeroSection from '@/components/HeroSection';
import HeritageSection from '@/components/HeritageSection';
import TimelineSection from '@/components/TimelineSection';
import SokolSection from '@/components/SokolSection';
import FacadeSection from '@/components/FacadeSection';
import EmissairesSection from '@/components/EmissairesSection';
import HierarchieSection from '@/components/HierarchieSection';
import CommandementsSection from '@/components/CommandementsSection';
import ProtocoleSection from '@/components/ProtocoleSection';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import PhaseIndicator from '@/components/PhaseIndicator';
import SectionReveal from '@/components/SectionReveal';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Global Effects */}
      <FilmGrain />
      <ParticleBackground />
      
      {/* Audio Player */}
      <AudioPlayer />

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar - shows after entering */}
      {hasEntered && <ScrollProgressBar />}
      {hasEntered && <PhaseIndicator />}

      {/* Navigation - shows after entering with fade */}
      <AnimatePresence>
        {!isLoading && hasEntered && (
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
          {/* Hero only shows after loading and before entering */}
          {!isLoading && !hasEntered && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
              <SectionReveal><HeritageSection /></SectionReveal>
              <SectionReveal><TimelineSection /></SectionReveal>
              <SectionReveal><SokolSection /></SectionReveal>
              <SectionReveal><FacadeSection /></SectionReveal>
              <SectionReveal><EmissairesSection /></SectionReveal>
              <SectionReveal><HierarchieSection /></SectionReveal>
              <SectionReveal><CommandementsSection /></SectionReveal>
              <SectionReveal><ProtocoleSection /></SectionReveal>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
