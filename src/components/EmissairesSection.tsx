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
      {/* Background effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blood-dark blur-[80px]" />
      </div>

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
              DOSSIER III
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
            <span className="text-foreground">LES</span>
            <span className="text-primary ml-4">ÉMISSAIRES</span>
          </h2>
          
          <p className="mt-4 font-orbitron text-xs text-muted-foreground tracking-[0.2em]">
            ЭМИССАРЫ — LES PERSONNAGES
          </p>
        </motion.div>

        {/* Character Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {characters.map((char, index) => (
            <motion.div
              key={char.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
            >
              {/* FSB-style dossier card */}
              <div className="relative bg-card border border-border overflow-hidden group">
                {/* Top bar */}
                <div className="flex items-center justify-between px-6 py-3 bg-primary/10 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="font-orbitron text-[10px] text-primary tracking-wider">
                      ДОСЬЕ / DOSSIER
                    </span>
                  </div>
                  <span className="font-orbitron text-[10px] text-muted-foreground">
                    {char.clearance}
                  </span>
                </div>

                <div className="p-6">
                  {/* Profile header */}
                  <div className="flex gap-6 mb-6">
                    {/* Avatar placeholder */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-32 bg-secondary border border-border flex items-center justify-center overflow-hidden">
                        <char.icon className="w-12 h-12 text-primary/30" />
                        {/* Scanline effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-[pulse_3s_ease-in-out_infinite]" />
                      </div>
                      {/* Photo corner clips */}
                      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary" />
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary" />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-4 h-4 text-primary/60" />
                        <span className="font-orbitron text-[10px] text-muted-foreground">
                          ИДЕНТИФИКАЦИЯ
                        </span>
                      </div>
                      <h3 className="font-cinzel text-xl text-foreground mb-1">
                        {char.name}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 font-rajdhani text-sm text-primary">
                        {char.title}
                      </span>
                    </div>
                  </div>

                  {/* Info fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="font-orbitron text-[10px] text-muted-foreground tracking-wider block mb-1">
                        RÔLE
                      </label>
                      <p className="font-rajdhani text-foreground/80">
                        {char.role}
                      </p>
                    </div>

                    <div>
                      <label className="font-orbitron text-[10px] text-muted-foreground tracking-wider block mb-1">
                        SPÉCIALITÉ
                      </label>
                      <p className="font-rajdhani text-foreground/80">
                        {char.specialty}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <label className="font-orbitron text-[10px] text-primary/60 tracking-wider block mb-2">
                        PHILOSOPHIE
                      </label>
                      <p className="font-rajdhani text-primary italic">
                        {char.philosophy}
                      </p>
                    </div>
                  </div>

                  {/* FSB Note */}
                  <div className="mt-6 p-4 bg-primary/5 border border-primary/20 relative">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-4 h-4 text-primary/60" />
                      <span className="font-orbitron text-[10px] text-primary/60 tracking-wider">
                        NOTE DU FSB
                      </span>
                    </div>
                    <p className="font-rajdhani text-sm text-foreground/70">
                      {char.fsbNote}
                    </p>
                    
                    {/* Classified stamp */}
                    <div className="absolute top-2 right-2 text-primary/20 font-orbitron text-[8px] tracking-widest rotate-12">
                      СЕКРЕТНО
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="px-6 py-2 bg-secondary/50 border-t border-border flex justify-between items-center">
                  <span className="font-orbitron text-[10px] text-muted-foreground">
                    REF: RSC-{char.id.toUpperCase()}-001
                  </span>
                  <span className="font-orbitron text-[10px] text-primary/60">
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
