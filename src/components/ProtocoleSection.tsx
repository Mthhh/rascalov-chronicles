import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Shield, Car } from 'lucide-react';

const ProtocoleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const protocols = [
    {
      icon: Briefcase,
      title: "L'ÉLÉGANCE FROIDE",
      context: "Public",
      description: "Manteaux longs, coupes sur mesure, tons anthracite. L'image d'hommes d'affaires russes intouchables. C'est notre armure sociale.",
    },
    {
      icon: Shield,
      title: "LE BLOC TACTIQUE",
      context: "Opérationnel",
      description: "Pour le Projet Sokol, nous devenons invisibles. Tenues techniques noires, aucune marque distinctive. Si vous nous voyez, c'est que nous avons choisi d'être vus.",
    },
    {
      icon: Car,
      title: "LA MOBILITÉ SOKOL",
      context: "Véhicules",
      description: "Le Brabus 4x4 Noir est notre standard. Un bloc de métal sombre qui impose le respect. Il n'est pas là pour la vitesse, mais pour la domination.",
    },
  ];

  return (
    <section
      id="protocole"
      ref={ref}
      className="relative min-h-screen py-32 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header - Corporate minimal */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1.5 h-1.5 bg-steel rounded-full" />
            <span className="font-orbitron text-xs text-steel tracking-[0.3em]">
              DOSSIER V
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-steel/30 to-transparent" />
          </div>
          
          <h2 className="font-rajdhani text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider">
            <span className="text-ivory">PROTOCOLE</span>
            <span className="text-steel ml-4">OPÉRATIONNEL</span>
          </h2>
          
          <p className="mt-4 font-orbitron text-xs text-steel tracking-[0.2em]">
            ОПЕРАТИВНЫЙ ПРОТОКОЛ — STYLE & VÉHICULES
          </p>
        </motion.div>

        {/* Protocol Cards - Clean, corporate */}
        <div className="space-y-6">
          {protocols.map((protocol, index) => (
            <motion.div
              key={protocol.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row gap-6 bg-card/30 border border-steel/20 p-6 hover:border-steel/30 transition-colors duration-300">
                {/* Icon section */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 border border-steel/30 flex items-center justify-center">
                    <protocol.icon className="w-8 h-8 text-steel" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-rajdhani text-xl font-semibold text-ivory">
                      {protocol.title}
                    </h3>
                    <span className="px-3 py-1 bg-steel/10 text-xs font-orbitron text-steel tracking-wider border border-steel/20">
                      {protocol.context.toUpperCase()}
                    </span>
                  </div>
                  
                  <p className="font-rajdhani text-foreground/60 leading-relaxed">
                    {protocol.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Quote Section - Premium framed */}
        <motion.div
          className="mt-24 relative"
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
