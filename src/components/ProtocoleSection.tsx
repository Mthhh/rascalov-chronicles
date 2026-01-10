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

        {/* Final Quote Section */}
        <motion.div
          className="mt-24 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-block relative">
            <span className="font-orbitron text-xs text-steel tracking-[0.3em] block mb-6">
              DOSSIER VI — LE MOT DE LA FIN
            </span>
            
            <blockquote className="font-cormorant text-2xl md:text-3xl lg:text-4xl text-ivory leading-relaxed max-w-4xl italic">
              « Le chaos est une échelle.
              <br />
              <span className="text-primary not-italic font-medium">La Rascalov est celui qui tient l'échelle.</span> »
            </blockquote>
            
            <div className="mt-8 space-y-2">
              <p className="font-rajdhani text-lg text-steel">
                Nous ne cherchons pas la guerre contre la police ou les gangs.
              </p>
              <p className="font-rajdhani text-xl text-ivory">
                Nous cherchons le <span className="text-primary font-semibold">CONTRÔLE</span>.
              </p>
              <p className="font-rajdhani text-lg text-steel">
                Et le contrôle commence par le silence.
              </p>
            </div>

            {/* Bottom decorative element */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-steel/30" />
              <span className="font-orbitron text-xs text-steel/40 tracking-[0.3em]">
                RASCALOV СЕМЬЯ
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-steel/30" />
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
