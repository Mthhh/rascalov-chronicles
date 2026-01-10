import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Shield, Car } from 'lucide-react';

import protocoleElegance from '@/assets/protocole-elegance.jpg';
import protocoleTactical from '@/assets/protocole-tactical.jpg';
import protocoleVehicle from '@/assets/protocole-vehicle.jpg';

const ProtocoleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const protocols = [
    {
      icon: Briefcase,
      title: "L'ÉLÉGANCE FROIDE",
      context: "Public",
      description: "Manteaux longs, coupes sur mesure, tons anthracite. L'image d'hommes d'affaires russes intouchables. C'est notre armure sociale.",
      image: protocoleElegance,
    },
    {
      icon: Shield,
      title: "LE BLOC TACTIQUE",
      context: "Opérationnel",
      description: "Pour le Projet Sokol, nous devenons invisibles. Tenues techniques noires, aucune marque distinctive. Si vous nous voyez, c'est que nous avons choisi d'être vus.",
      image: protocoleTactical,
    },
    {
      icon: Car,
      title: "LA MOBILITÉ SOKOL",
      context: "Véhicules",
      description: "Le Brabus 4x4 Noir est notre standard. Un bloc de métal sombre qui impose le respect. Il n'est pas là pour la vitesse, mais pour la domination.",
      image: protocoleVehicle,
    },
  ];

  return (
    <section
      id="protocole"
      ref={ref}
      className="relative min-h-screen py-32 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-blood rounded-full" />
              <div className="absolute inset-0 w-2.5 h-2.5 bg-blood rounded-full animate-ping opacity-30" />
            </div>
            <span className="font-orbitron text-xs text-blood tracking-[0.4em] font-medium">
              DOSSIER V
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-blood/50 via-steel/20 to-transparent" />
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
            <span 
              style={{
                background: 'linear-gradient(180deg, hsl(var(--ivory)) 0%, hsl(var(--ivory) / 0.7) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 10px hsl(0 0% 0% / 0.5))'
              }}
            >
              PROTOCOLE
            </span>
            <span 
              className="ml-3"
              style={{
                background: 'linear-gradient(180deg, hsl(var(--steel)) 0%, hsl(var(--steel) / 0.6) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              OPÉRATIONNEL
            </span>
          </h2>
          
          <p className="mt-4 font-orbitron text-[10px] md:text-xs text-steel/70 tracking-[0.25em]">
            ОПЕРАТИВНЫЙ ПРОТОКОЛ — <span className="text-blood/80">STYLE & VÉHICULES</span>
          </p>
        </motion.div>

        {/* Protocol Cards with Images */}
        <div className="space-y-8">
          {protocols.map((protocol, index) => (
            <motion.div
              key={protocol.title}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <div className="relative bg-background/40 border border-steel/20 overflow-hidden backdrop-blur-sm">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-20">
                  <img 
                    src={protocol.image} 
                    alt={protocol.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col md:flex-row gap-6 p-6 md:p-8">
                  {/* Icon section */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 border border-steel/30 flex items-center justify-center bg-background/60 backdrop-blur-sm">
                      <protocol.icon className="w-8 h-8 md:w-10 md:h-10 text-steel" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 
                        className="font-cinzel text-xl md:text-2xl font-semibold tracking-wide"
                        style={{
                          background: 'linear-gradient(90deg, hsl(var(--ivory)) 0%, hsl(var(--ivory) / 0.8) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        {protocol.title}
                      </h3>
                      <span className="px-3 py-1 bg-steel/10 text-[10px] md:text-xs font-orbitron text-steel tracking-wider border border-steel/30">
                        {protocol.context.toUpperCase()}
                      </span>
                    </div>
                    
                    <p className="font-rajdhani text-sm md:text-base text-foreground/70 leading-relaxed">
                      {protocol.description}
                    </p>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-steel/20 z-10" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-steel/20 z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Quote Section - Premium framed */}
        <motion.div
          className="mt-40 md:mt-48 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Outer decorative frame */}
          <div className="absolute -inset-4 md:-inset-6 pointer-events-none">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-10 h-10 md:w-16 md:h-16">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blood via-blood/50 to-transparent" />
              <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-blood via-blood/50 to-transparent" />
              <div className="absolute top-2 left-2 w-1.5 h-1.5 rotate-45 border border-blood/60 bg-blood/20" />
            </div>
            <div className="absolute top-0 right-0 w-10 h-10 md:w-16 md:h-16">
              <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-blood via-blood/50 to-transparent" />
              <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-blood via-blood/50 to-transparent" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rotate-45 border border-blood/60 bg-blood/20" />
            </div>
            <div className="absolute bottom-0 left-0 w-10 h-10 md:w-16 md:h-16">
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blood via-blood/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-[1px] h-full bg-gradient-to-t from-blood via-blood/50 to-transparent" />
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rotate-45 border border-blood/60 bg-blood/20" />
            </div>
            <div className="absolute bottom-0 right-0 w-10 h-10 md:w-16 md:h-16">
              <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-blood via-blood/50 to-transparent" />
              <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-blood via-blood/50 to-transparent" />
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rotate-45 border border-blood/60 bg-blood/20" />
            </div>
          </div>

          {/* Inner content container */}
          <div className="relative bg-gradient-to-b from-background/60 via-background/40 to-background/60 backdrop-blur-sm border border-steel/10 p-8 md:p-12 lg:p-16 text-center">
            {/* Inner glow effect */}
            <div className="absolute inset-0 pointer-events-none" style={{
              boxShadow: 'inset 0 0 80px hsl(var(--blood) / 0.05), inset 0 0 150px hsl(var(--background) / 0.5)'
            }} />

            {/* Header badge */}
            <div className="relative inline-block mb-8">
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-blood/50 to-blood" />
                <span className="font-orbitron text-[10px] md:text-xs text-blood tracking-[0.4em] font-medium">
                  DOSSIER VI — LE MOT DE LA FIN
                </span>
                <div className="w-8 md:w-12 h-px bg-gradient-to-l from-transparent via-blood/50 to-blood" />
              </div>
            </div>
            
            {/* Main quote */}
            <blockquote className="relative mb-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-blood/20 font-serif">«</div>
              <p 
                className="font-cinzel text-2xl md:text-3xl lg:text-4xl leading-relaxed italic max-w-3xl mx-auto"
                style={{
                  background: 'linear-gradient(180deg, hsl(var(--ivory)) 0%, hsl(var(--ivory) / 0.7) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Le chaos est une échelle.
              </p>
              <p 
                className="font-cinzel text-2xl md:text-3xl lg:text-4xl leading-relaxed mt-2 max-w-3xl mx-auto"
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--blood-dark)) 0%, hsl(var(--blood)) 50%, hsl(var(--blood-dark)) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 20px hsl(var(--blood) / 0.3))'
                }}
              >
                La Rascalov est celui qui tient l'échelle.
              </p>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-6xl text-blood/20 font-serif">»</div>
            </blockquote>
            
            {/* Separator */}
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-steel/30 to-steel/50" />
              <div className="w-1.5 h-1.5 rotate-45 bg-blood/40" />
              <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent via-steel/30 to-steel/50" />
            </div>

            {/* Sub-messages */}
            <div className="space-y-3 relative">
              <p className="font-rajdhani text-base md:text-lg text-steel/70 tracking-wide">
                Nous ne cherchons pas la guerre contre la police ou les gangs.
              </p>
              <p className="font-rajdhani text-lg md:text-xl text-ivory font-medium">
                Nous cherchons le{' '}
                <span 
                  className="font-semibold"
                  style={{
                    background: 'linear-gradient(90deg, hsl(var(--blood)) 0%, hsl(var(--blood-glow)) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  CONTRÔLE
                </span>.
              </p>
              <p className="font-rajdhani text-base md:text-lg text-steel/60 italic">
                Et le contrôle commence par le silence.
              </p>
            </div>

            {/* Bottom signature */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-steel/40" />
              <span 
                className="font-orbitron text-[10px] md:text-xs tracking-[0.3em]"
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--steel) / 0.5) 0%, hsl(var(--steel)) 50%, hsl(var(--steel) / 0.5) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                RASCALOV СЕМЬЯ
              </span>
              <div className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-steel/40" />
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-24 pt-8 border-t border-steel/20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-orbitron text-[10px] text-steel/60 tracking-wider">
              © 2024 RASCALOV СЕМЬЯ — TOUS DROITS RÉSERVÉS
            </span>
            <span className="font-orbitron text-[10px] text-steel/40 tracking-wider">
              ПРОТОКОЛ СОКОЛ — СТРОГО КОНФИДЕНЦИАЛЬНО
            </span>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default ProtocoleSection;
