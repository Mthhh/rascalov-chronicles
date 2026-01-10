import { useState } from 'react';
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

      {/* Navigation - shows after entering */}
      {hasEntered && <Navigation />}

      {/* Main Content */}
      <main>
        <HeroSection onEnter={() => setHasEntered(true)} />
        
        {hasEntered && (
          <>
            <HeritageSection />
            <SokolSection />
            <EmissairesSection />
            <LoisSection />
            <ProtocoleSection />
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
