import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SokolSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phases = [
    {
      number: '01',
      title: "PHASE D'INFILTRATION",
      subtitle: "Docks d'Elysian Island",
      description: "Contrôler silencieusement les registres de fret. Si une arme ou un kilo de drogue entre en ville par la mer, la Rascalov doit le savoir avant même le destinataire.",
      status: "ACTIVE",
    },
    {
      number: '02',
      title: "PHASE DE MONOPOLE",
      subtitle: "Logistique",
      description: "Proposer aux autres organisations une sécurité totale pour leurs convois. Nous ne vendons pas la drogue, nous vendons la certitude qu'elle arrivera à bon port.",
      status: "EN COURS",
    },
    {
      number: '03',
      title: "PHASE D'INFLUENCE",
      subtitle: "Corruption Blanche",
      description: "Utiliser les bénéfices pour financer des entreprises de transport légales, créant un bouclier juridique parfait.",
      status: "PLANIFIÉ",
    },
  ];

  return (
    <section
      id="sokol"
      ref={ref}
      className="relative min-h-screen py-32 px-6 overflow-hidden"
    >
      {/* Map background effect */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 50%, hsl(var(--blood) / 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 30%, hsl(var(--blood-dark) / 0.2) 0%, transparent 40%)
            `,
          }}
        />
        {/* Grid overlay for map effect */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.05) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
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
              DOSSIER II
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
            <span className="text-foreground">PROJET</span>
            <span className="text-primary ml-4">SOKOL</span>
          </h2>
          
          <p className="mt-4 font-orbitron text-xs text-muted-foreground tracking-[0.2em]">
            ПРОЕКТ СОКОЛ — L'ARCHITECTURE DU CHAOS
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          className="mb-16 p-6 border border-primary/30 bg-primary/5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute -top-3 left-6 px-3 py-1 bg-background">
            <span className="font-orbitron text-xs text-primary tracking-[0.2em]">
              LA VISION
            </span>
          </div>
          
          <p className="font-rajdhani text-xl md:text-2xl text-center text-foreground/90">
            Alors que les gangs locaux se battent pour des coins de rue,
            <br />
            <span className="text-primary font-semibold">la Rascalov déploie le Projet Sokol (Le Faucon).</span>
          </p>
          
          <p className="mt-4 text-center font-cinzel text-lg text-primary/80">
            DEVENIR LE "PONT FANTÔME"
          </p>
        </motion.div>

        {/* Phases Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                className="relative md:pl-20"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              >
                {/* Phase number marker */}
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary animate-pulse-glow" />
                  <div className="absolute w-8 h-8 rounded-full border border-primary/30" />
                </div>

                {/* Phase card */}
                <div className="relative bg-card/80 border border-border p-6 backdrop-blur-sm group hover:border-primary/50 transition-colors">
                  {/* Scanline effect */}
                  <div className="absolute inset-0 scanlines opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="font-orbitron text-2xl text-primary font-bold">
                        {phase.number}
                      </span>
                      <h3 className="font-cinzel text-xl text-foreground">
                        {phase.title}
                      </h3>
                      <span className={`ml-auto px-3 py-1 text-[10px] font-orbitron tracking-wider ${
                        phase.status === 'ACTIVE' 
                          ? 'bg-primary/20 text-primary border border-primary/50' 
                          : phase.status === 'EN COURS'
                          ? 'bg-gold/20 text-gold border border-gold/50'
                          : 'bg-muted text-muted-foreground border border-border'
                      }`}>
                        {phase.status}
                      </span>
                    </div>

                    <p className="font-orbitron text-xs text-primary/60 mb-3 tracking-wider">
                      {phase.subtitle}
                    </p>

                    <p className="font-rajdhani text-foreground/80 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="inline-block px-6 py-3 border border-primary/30 bg-primary/5">
            <span className="font-orbitron text-xs text-muted-foreground tracking-[0.2em]">
              OBJECTIF FINAL
            </span>
            <p className="font-cinzel text-xl text-primary mt-2">
              CONTRÔLE TOTAL DES FLUX MARITIMES
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SokolSection;
