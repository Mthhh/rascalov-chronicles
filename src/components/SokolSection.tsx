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
      {/* Technical grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--steel)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--steel)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header - Technical style */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1.5 h-1.5 bg-steel rounded-full" />
            <span className="font-orbitron text-xs text-steel tracking-[0.3em]">
              DOSSIER II
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-steel/30 to-transparent" />
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
            <span className="text-ivory">PROJET</span>
            <span className="text-primary ml-4">SOKOL</span>
          </h2>
          
          <p className="mt-4 font-orbitron text-xs text-steel tracking-[0.2em]">
            ПРОЕКТ СОКОЛ — L'ARCHITECTURE DU CHAOS
          </p>
        </motion.div>

        {/* Vision Statement - clean technical box */}
        <motion.div
          className="mb-16 p-6 border border-steel/30 bg-secondary/30 relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute -top-3 left-6 px-3 py-1 bg-background">
            <span className="font-orbitron text-xs text-steel tracking-[0.2em]">
              LA VISION
            </span>
          </div>
          
          <p className="font-rajdhani text-xl md:text-2xl text-center text-foreground/80">
            Alors que les gangs locaux se battent pour des coins de rue,
            <br />
            <span className="text-ivory font-semibold">la Rascalov déploie le Projet Sokol (Le Faucon).</span>
          </p>
          
          <p className="mt-4 text-center font-orbitron text-sm text-primary tracking-wider">
            DEVENIR LE "PONT FANTÔME"
          </p>
        </motion.div>

        {/* Phases Timeline - snap animations */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-steel/50 via-steel/30 to-transparent hidden md:block" />

          <div className="space-y-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                className="relative md:pl-20"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
              >
                {/* Phase number marker */}
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-steel" />
                  <div className="absolute w-6 h-6 rounded-full border border-steel/40" />
                </div>

                {/* Phase card - clean, technical */}
                <div className="relative bg-card/50 border border-steel/20 p-6 backdrop-blur-sm group hover:border-steel/40 transition-colors duration-300">
                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="font-orbitron text-xl text-steel font-bold">
                        {phase.number}
                      </span>
                      <h3 className="font-orbitron text-lg text-ivory">
                        {phase.title}
                      </h3>
                      <span className={`ml-auto px-3 py-1 text-[10px] font-orbitron tracking-wider ${
                        phase.status === 'ACTIVE' 
                          ? 'bg-primary/10 text-primary border border-primary/30' 
                          : phase.status === 'EN COURS'
                          ? 'bg-gold-subtle/10 text-gold-subtle border border-gold-subtle/30'
                          : 'bg-steel/10 text-steel border border-steel/30'
                      }`}>
                        {phase.status}
                      </span>
                    </div>

                    <p className="font-orbitron text-xs text-steel mb-3 tracking-wider">
                      {phase.subtitle}
                    </p>

                    <p className="font-rajdhani text-foreground/70 leading-relaxed">
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
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="inline-block px-6 py-3 border border-steel/30 bg-secondary/30">
            <span className="font-orbitron text-xs text-steel tracking-[0.2em]">
              OBJECTIF FINAL
            </span>
            <p className="font-orbitron text-lg text-primary mt-2">
              CONTRÔLE TOTAL DES FLUX MARITIMES
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SokolSection;
