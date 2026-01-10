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
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -4 }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-1 rounded-sm bg-blood/20 blur-xl z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
              
              <motion.div 
                className="relative bg-background/40 border border-steel/20 overflow-hidden backdrop-blur-sm"
                animate={{ 
                  borderColor: hoveredIndex === index ? 'hsl(var(--blood) / 0.4)' : 'hsl(var(--steel) / 0.2)',
                  boxShadow: hoveredIndex === index 
                    ? '0 20px 40px -20px hsl(var(--blood) / 0.3), inset 0 1px 0 hsl(var(--ivory) / 0.05)' 
                    : '0 0 0 transparent'
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Background Image */}
                <motion.div 
                  className="absolute inset-0 z-0"
                  animate={{ 
                    scale: hoveredIndex === index ? 1.1 : 1,
                    opacity: hoveredIndex === index ? 0.4 : 0.15,
                    x: hoveredIndex === index ? 10 : 0
                  }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <img 
                    src={protocol.image} 
                    alt={protocol.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0"
                    animate={{
                      background: hoveredIndex === index 
                        ? 'linear-gradient(90deg, hsl(var(--background)) 0%, hsl(var(--background) / 0.85) 40%, hsl(var(--background) / 0.6) 100%)'
                        : 'linear-gradient(90deg, hsl(var(--background)) 0%, hsl(var(--background) / 0.95) 50%, hsl(var(--background) / 0.8) 100%)'
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>

                {/* Left accent line with animation */}
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blood via-blood to-blood-dark z-10"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ 
                    scaleY: hoveredIndex === index ? 1 : 0,
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ originY: 0 }}
                />
                
                {/* Top shimmer effect */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-px z-10"
                  style={{
                    background: 'linear-gradient(90deg, transparent, hsl(var(--ivory) / 0.3), transparent)'
                  }}
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ 
                    x: hoveredIndex === index ? '100%' : '-100%',
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col md:flex-row gap-6 p-6 md:p-8">
                  {/* Icon section */}
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-16 h-16 md:w-20 md:h-20 border flex items-center justify-center bg-background/60 backdrop-blur-sm"
                      animate={{ 
                        borderColor: hoveredIndex === index ? 'hsl(var(--blood) / 0.6)' : 'hsl(var(--steel) / 0.3)',
                        backgroundColor: hoveredIndex === index ? 'hsl(var(--blood) / 0.1)' : 'hsl(var(--background) / 0.6)',
                        rotate: hoveredIndex === index ? 3 : 0,
                        scale: hoveredIndex === index ? 1.05 : 1
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <motion.div
                        animate={{ 
                          scale: hoveredIndex === index ? 1.15 : 1,
                          rotate: hoveredIndex === index ? -3 : 0
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <protocol.icon 
                          className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300" 
                          style={{ color: hoveredIndex === index ? 'hsl(var(--blood))' : 'hsl(var(--steel))' }}
                        />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <motion.h3 
                        className="font-cinzel text-xl md:text-2xl font-semibold tracking-wide"
                        animate={{
                          x: hoveredIndex === index ? 4 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          background: hoveredIndex === index 
                            ? 'linear-gradient(90deg, hsl(var(--ivory)) 0%, hsl(var(--blood-glow)) 100%)'
                            : 'linear-gradient(90deg, hsl(var(--ivory)) 0%, hsl(var(--ivory) / 0.8) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        {protocol.title}
                      </motion.h3>
                      <motion.span 
                        className="px-3 py-1 text-[10px] md:text-xs font-orbitron tracking-wider border"
                        animate={{
                          backgroundColor: hoveredIndex === index ? 'hsl(var(--blood) / 0.15)' : 'hsl(var(--steel) / 0.1)',
                          borderColor: hoveredIndex === index ? 'hsl(var(--blood) / 0.4)' : 'hsl(var(--steel) / 0.3)',
                          color: hoveredIndex === index ? 'hsl(var(--blood))' : 'hsl(var(--steel))'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {protocol.context.toUpperCase()}
                      </motion.span>
                    </div>
                    
                    <motion.p 
                      className="font-rajdhani text-sm md:text-base leading-relaxed"
                      animate={{
                        color: hoveredIndex === index ? 'hsl(var(--foreground) / 0.85)' : 'hsl(var(--foreground) / 0.7)',
                        x: hoveredIndex === index ? 4 : 0
                      }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                    >
                      {protocol.description}
                    </motion.p>
                  </div>
                </div>

                {/* Corner decorations with animation */}
                <motion.div 
                  className="absolute top-0 right-0 w-6 h-6 z-10"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-blood/60 to-transparent" />
                  <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-blood/60 to-transparent" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-0 right-0 w-6 h-6 z-10"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-blood/60 to-transparent" />
                  <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-blood/60 to-transparent" />
                </motion.div>
              </motion.div>
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
