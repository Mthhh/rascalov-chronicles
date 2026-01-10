import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RankItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

const ranks: RankItem[] = [
  {
    number: 'I',
    title: 'PAKHAN',
    subtitle: "CHEF DE L'ORGANISATION",
    description: 'Il dirige la Rascalov, prend toutes les décisions majeures et veille à la stabilité du groupe.'
  },
  {
    number: 'II',
    title: 'SOVETNIK',
    subtitle: 'BRAS DROIT',
    description: "Conseiller et bras droit officiel du Pakhan. C'est la personne la plus proche du chef, chargée de relayer ses directives et de superviser les opérations importantes."
  },
  {
    number: 'III',
    title: 'BRIGADIR',
    subtitle: "CHEF D'ÉQUIPE",
    description: "Responsable d'un groupe ou d'une cellule d'opérations. Il coordonne les missions, encadre les membres et assure la discipline interne."
  },
  {
    number: 'IV',
    title: 'BOYEVIK',
    subtitle: 'SOLDAT CONFIRMÉ',
    description: "Soldat confirmé. Exécutant expérimenté, chargé d'actions directes, de missions sensibles et de la protection des intérêts de l'organisation."
  },
  {
    number: 'V',
    title: 'BRATOK',
    subtitle: 'MEMBRE',
    description: "Membre à part entière. Fidèle à l'organisation, il participe activement aux activités quotidiennes et suit les ordres de ses supérieurs."
  }
];

const HierarchieSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="hierarchie"
      ref={sectionRef}
      className="relative min-h-screen py-24 md:py-32 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Decorative dots */}
      <div className="absolute top-20 left-8 w-1 h-1 bg-primary/40 rounded-full" />
      <div className="absolute top-1/4 right-12 w-1 h-1 bg-primary/30 rounded-full" />
      <div className="absolute bottom-1/3 left-4 w-1 h-1 bg-primary/20 rounded-full" />
      <div className="absolute top-1/2 left-16 w-1 h-1 bg-primary/30 rounded-full" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-primary tracking-wider mb-3">
            HIÉRARCHIE
          </h2>
          <p className="font-rajdhani text-steel text-lg tracking-wide">
            Structure de commandement
          </p>
        </motion.div>

        {/* Ranks List */}
        <div className="relative">
          {/* Vertical connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent origin-top hidden md:block"
          />

          <div className="space-y-6">
            {ranks.map((rank, index) => (
              <motion.div
                key={rank.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                {/* Connector dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.15 }}
                  className="absolute left-1/2 -translate-x-1/2 -top-3 w-2 h-2 hidden md:block"
                >
                  <div className="w-full h-full border border-primary/50 rotate-45" />
                </motion.div>

                {/* Rank Card */}
                <div className="relative group">
                  {/* Card background with border */}
                  <div className="absolute inset-0 border border-primary/20 bg-background/40 backdrop-blur-sm" />
                  
                  {/* Gold accent line on left */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

                  {/* Corner decorations */}
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/30" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/30" />

                  {/* Content */}
                  <div className="relative p-6 md:p-8">
                    <div className="flex items-start gap-6">
                      {/* Roman numeral */}
                      <div className="flex-shrink-0">
                        <span className="font-cinzel text-2xl md:text-3xl text-primary/60 font-bold">
                          {rank.number}
                        </span>
                      </div>

                      {/* Text content */}
                      <div className="flex-1">
                        <div className="mb-3">
                          <h3 className="font-cinzel text-xl md:text-2xl font-bold text-primary tracking-wider">
                            {rank.title}
                          </h3>
                          <p className="font-orbitron text-[10px] md:text-xs text-steel/80 tracking-[0.15em] mt-1">
                            {rank.subtitle}
                          </p>
                        </div>
                        <p className="font-rajdhani text-sm md:text-base text-muted-foreground leading-relaxed">
                          {rank.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
                  </div>
                </div>

                {/* Vertical connector to next card */}
                {index < ranks.length - 1 && (
                  <div className="flex justify-center py-3">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
                      className="w-px h-6 bg-gradient-to-b from-primary/40 to-primary/10 origin-top"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HierarchieSection;
