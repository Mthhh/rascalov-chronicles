import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Brain, Shield, Eye } from 'lucide-react';

const EmissairesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const characters = [
    {
      id: 'azarov',
      name: 'AZAROV "VOLK" ZEITSEY',
      title: 'LE STRATÈGE',
      role: 'Petit-fils du fondateur, il est le cerveau froid de l\'expansion.',
      specialty: 'Ingénierie financière et psychologie de crise.',
      philosophy: '"Un ennemi mort est un gâchis de ressources. Un ennemi endetté est un outil."',
      fsbNote: 'Azarov n\'utilise la violence que lorsque la logique a échoué. Sa dangerosité réside dans sa patience.',
      icon: Brain,
      clearance: 'УРОВЕНЬ 5',
    },
    {
      id: 'marco',
      name: 'MARCO "KAIDAN" PETROVSKY',
      title: "L'OPÉRATEUR",
      role: 'Ex-unité d\'élite, il est l\'ombre d\'Azarov et le bras armé de la famille.',
      specialty: 'Sécurité tactique, acquisition de zones et contre-espionnage.',
      philosophy: '"Le silence est le bruit le plus terrifiant avant l\'impact."',
      fsbNote: 'Une loyauté absolue. Marco ne commet pas d\'erreurs, il règle celles des autres.',
      icon: Shield,
      clearance: 'УРОВЕНЬ 4',
    },
  ];

  return (
    <section
      id="emissaires"
      ref={ref}
      className="relative min-h-screen py-32 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header - Clean, sober */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1.5 h-1.5 bg-steel rounded-full" />
            <span className="font-orbitron text-xs text-steel tracking-[0.3em]">
              DOSSIER III
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-steel/30 to-transparent" />
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-medium tracking-wider">
            <span className="text-ivory">LES</span>
            <span className="text-primary ml-4">ÉMISSAIRES</span>
          </h2>
          
          <p className="mt-4 font-orbitron text-xs text-steel tracking-[0.2em]">
            ЭМИССАРЫ — LES PERSONNAGES
          </p>
        </motion.div>

        {/* Character Cards - Clean dossier style */}
        <div className="grid lg:grid-cols-2 gap-8">
          {characters.map((char, index) => (
            <motion.div
              key={char.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              {/* Dossier card */}
              <div className="relative bg-card/50 border border-steel/20 overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center justify-between px-6 py-3 bg-secondary/50 border-b border-steel/20">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-steel" />
                    <span className="font-orbitron text-[10px] text-steel tracking-wider">
                      ДОСЬЕ / DOSSIER
                    </span>
                  </div>
                  <span className="font-orbitron text-[10px] text-steel/60">
                    {char.clearance}
                  </span>
                </div>

                <div className="p-6">
                  {/* Profile header */}
                  <div className="flex gap-6 mb-6">
                    {/* Avatar placeholder */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-32 bg-secondary/50 border border-steel/30 flex items-center justify-center overflow-hidden">
                        <char.icon className="w-12 h-12 text-steel/40" />
                      </div>
                      {/* Photo corner clips - steel */}
                      <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-steel/50" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-steel/50" />
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-steel/50" />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-steel/50" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-4 h-4 text-steel/60" />
                        <span className="font-orbitron text-[10px] text-steel">
                          ИДЕНТИФИКАЦИЯ
                        </span>
                      </div>
                      <h3 className="font-cinzel text-xl text-ivory mb-1">
                        {char.name}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-steel/10 border border-steel/30 font-rajdhani text-sm text-steel">
                        {char.title}
                      </span>
                    </div>
                  </div>

                  {/* Info fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="font-orbitron text-[10px] text-steel tracking-wider block mb-1">
                        RÔLE
                      </label>
                      <p className="font-rajdhani text-foreground/70">
                        {char.role}
                      </p>
                    </div>

                    <div>
                      <label className="font-orbitron text-[10px] text-steel tracking-wider block mb-1">
                        SPÉCIALITÉ
                      </label>
                      <p className="font-rajdhani text-foreground/70">
                        {char.specialty}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-steel/20">
                      <label className="font-orbitron text-[10px] text-primary/80 tracking-wider block mb-2">
                        PHILOSOPHIE
                      </label>
                      <p className="font-cormorant text-lg text-primary italic">
                        {char.philosophy}
                      </p>
                    </div>
                  </div>

                  {/* FSB Note */}
                  <div className="mt-6 p-4 bg-secondary/30 border border-steel/20 relative">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-4 h-4 text-steel/60" />
                      <span className="font-orbitron text-[10px] text-steel tracking-wider">
                        NOTE DU FSB
                      </span>
                    </div>
                    <p className="font-rajdhani text-sm text-foreground/60">
                      {char.fsbNote}
                    </p>
                    
                    {/* Classified stamp - subtle */}
                    <div className="absolute top-2 right-2 text-steel/20 font-orbitron text-[8px] tracking-widest rotate-12">
                      СЕКРЕТНО
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="px-6 py-2 bg-secondary/30 border-t border-steel/20 flex justify-between items-center">
                  <span className="font-orbitron text-[10px] text-steel/60">
                    REF: RSC-{char.id.toUpperCase()}-001
                  </span>
                  <span className="font-orbitron text-[10px] text-steel/40">
                    RASCALOV СЕМЬЯ
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmissairesSection;
