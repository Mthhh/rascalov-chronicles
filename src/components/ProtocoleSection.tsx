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
      visual: "🥷",
    },
    {
      icon: Shield,
      title: "LE BLOC TACTIQUE",
      context: "Opérationnel",
      description: "Pour le Projet Sokol, nous devenons invisibles. Tenues techniques noires, aucune marque distinctive. Si vous nous voyez, c'est que nous avons choisi d'être vus.",
      visual: "⚫",
    },
    {
      icon: Car,
      title: "LA MOBILITÉ SOKOL",
      context: "Véhicules",
      description: "Le Brabus 4x4 Noir est notre standard. Un bloc de métal sombre qui impose le respect. Il n'est pas là pour la vitesse, mais pour la domination. C'est une forteresse mobile, entretenue avec une rigueur chirurgicale.",
      visual: "🚗",
    },
  ];

  return (
    <section
      id="protocole"
      ref={ref}
      className="relative min-h-screen py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
            <span className="font-orbitron text-xs text-primary/60 tracking-[0.3em]">
              DOSSIER V
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
            <span className="text-foreground">PROTOCOLE</span>
            <span className="text-primary ml-4">OPÉRATIONNEL</span>
          </h2>
          
          <p className="mt-4 font-orbitron text-xs text-muted-foreground tracking-[0.2em]">
            ОПЕРАТИВНЫЙ ПРОТОКОЛ — STYLE & VÉHICULES
          </p>
        </motion.div>

        {/* Protocol Cards */}
        <div className="space-y-8">
          {protocols.map((protocol, index) => (
            <motion.div
              key={protocol.title}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row gap-6 bg-card/50 border border-border p-6 hover:border-primary/30 transition-all group">
                {/* Icon section */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 border border-primary/30 flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors relative overflow-hidden">
                    <protocol.icon className="w-10 h-10 text-primary" />
                    {/* Animated border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-cinzel text-xl text-foreground">
                      {protocol.title}
                    </h3>
                    <span className="px-3 py-1 bg-secondary text-xs font-orbitron text-muted-foreground tracking-wider">
                      {protocol.context.toUpperCase()}
                    </span>
                  </div>
                  
                  <p className="font-rajdhani text-lg text-foreground/80 leading-relaxed">
                    {protocol.description}
                  </p>
                </div>

                {/* Visual accent */}
                <div className="hidden lg:flex items-center justify-center w-32">
                  <span className="text-4xl opacity-30 group-hover:opacity-50 transition-opacity">
                    {protocol.visual}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Quote Section */}
        <motion.div
          className="mt-24 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="inline-block relative">
            {/* Decorative lines */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-transparent to-primary/50" />
            
            <span className="font-orbitron text-xs text-primary/60 tracking-[0.3em] block mb-6">
              DOSSIER VI — LE MOT DE LA FIN
            </span>
            
            <blockquote className="font-cinzel text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed max-w-4xl">
              « Le chaos est une échelle.
              <br />
              <span className="text-primary">La Rascalov est celui qui tient l'échelle.</span> »
            </blockquote>
            
            <div className="mt-8 space-y-2">
              <p className="font-rajdhani text-lg text-foreground/70">
                Nous ne cherchons pas la guerre contre la police ou les gangs.
              </p>
              <p className="font-rajdhani text-xl text-foreground">
                Nous cherchons le <span className="text-primary font-semibold">CONTRÔLE</span>.
              </p>
              <p className="font-rajdhani text-lg text-primary/80">
                Et le contrôle commence par le silence.
              </p>
            </div>

            {/* Bottom decorative element */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
              <span className="font-orbitron text-xs text-primary/40 tracking-[0.3em]">
                RASCALOV СЕМЬЯ
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-24 pt-8 border-t border-border/50 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-orbitron text-[10px] text-muted-foreground tracking-wider">
              © 2024 RASCALOV СЕМЬЯ — TOUS DROITS RÉSERVÉS
            </span>
            <span className="font-orbitron text-[10px] text-primary/40 tracking-wider">
              ПРОТОКОЛ СОКОЛ — СТРОГО КОНФИДЕНЦИАЛЬНО
            </span>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default ProtocoleSection;
