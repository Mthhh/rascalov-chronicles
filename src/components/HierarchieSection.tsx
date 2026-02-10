import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Crown, Shield, Swords, Target, Users, LucideIcon } from 'lucide-react';

interface RankItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  colorLight: string;
  colorGlow: string;
}

const ranks: RankItem[] = [
  {
    number: 'I',
    title: 'PAKHAN',
    subtitle: "CHEF DE L'ORGANISATION",
    description: 'Il dirige la Rascalov, prend toutes les décisions majeures et veille à la stabilité du groupe.',
    icon: Crown,
    color: 'hsl(0, 70%, 45%)',
    colorLight: 'hsl(0, 70%, 55%)',
    colorGlow: 'hsl(0, 70%, 45% / 0.4)'
  },
  {
    number: 'II',
    title: 'SOVETNIK',
    subtitle: 'BRAS DROIT',
    description: "Conseiller et bras droit officiel du Pakhan. C'est la personne la plus proche du chef, chargée de relayer ses directives et de superviser les opérations importantes.",
    icon: Shield,
    color: 'hsl(0, 50%, 55%)',
    colorLight: 'hsl(0, 50%, 65%)',
    colorGlow: 'hsl(0, 50%, 55% / 0.3)'
  },
  {
    number: 'III',
    title: 'BRIGADIR',
    subtitle: "CHEF D'ÉQUIPE",
    description: "Responsable d'un groupe ou d'une cellule d'opérations. Il coordonne les missions, encadre les membres et assure la discipline interne.",
    icon: Swords,
    color: 'hsl(35, 80%, 50%)',
    colorLight: 'hsl(35, 80%, 60%)',
    colorGlow: 'hsl(35, 80%, 50% / 0.3)'
  },
  {
    number: 'IV',
    title: 'BOYEVIK',
    subtitle: 'SOLDAT CONFIRMÉ',
    description: "Soldat confirmé. Exécutant expérimenté, chargé d'actions directes, de missions sensibles et de la protection des intérêts de l'organisation.",
    icon: Target,
    color: 'hsl(220, 10%, 40%)',
    colorLight: 'hsl(220, 10%, 50%)',
    colorGlow: 'hsl(220, 10%, 40% / 0.3)'
  },
  {
    number: 'V',
    title: 'BRATOK',
    subtitle: 'MEMBRE',
    description: "Membre à part entière. Fidèle à l'organisation, il participe activement aux activités quotidiennes et suit les ordres de ses supérieurs.",
    icon: Users,
    color: 'hsl(220, 10%, 60%)',
    colorLight: 'hsl(220, 10%, 70%)',
    colorGlow: 'hsl(220, 10%, 60% / 0.3)'
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
              linear-gradient(hsl(var(--steel) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--steel) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header - Matching Emissaires style */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-blood rounded-full" />
              <div className="absolute inset-0 w-2.5 h-2.5 bg-blood rounded-full animate-ping opacity-30" />
            </div>
            <span className="font-orbitron text-xs text-blood tracking-[0.4em] font-medium">
              DOSSIER IV
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
              LA
            </span>
            <span 
              className="ml-3"
              style={{
                background: 'linear-gradient(180deg, hsl(var(--blood)) 0%, hsl(var(--blood-dark)) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px hsl(var(--blood) / 0.4))'
              }}
            >
              HIÉRARCHIE
            </span>
          </h2>
          
          <p className="mt-4 font-orbitron text-[10px] md:text-xs text-steel/70 tracking-[0.25em]">
            ИЕРАРХИЯ — <span className="text-blood/80">STRUCTURE DE COMMANDEMENT</span>
          </p>
        </motion.div>

        {/* Ranks List */}
        <div className="relative">
          {/* Vertical connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-8 md:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-blood/50 via-steel/20 to-transparent origin-top"
          />

          <div className="space-y-4">
            {ranks.map((rank, index) => (
              <motion.div
                key={rank.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.12 }}
                className="relative"
              >
                {/* Rank Card */}
                <div className="relative group">
                  {/* Card background with border */}
                  <div 
                    className="absolute inset-0 bg-background/50 backdrop-blur-sm transition-all duration-300"
                    style={{
                      borderLeft: `3px solid ${rank.color}`,
                      borderTop: `1px solid hsl(var(--steel) / 0.15)`,
                      borderRight: `1px solid hsl(var(--steel) / 0.15)`,
                      borderBottom: `1px solid hsl(var(--steel) / 0.15)`,
                    }}
                  />
                  
                  {/* Hover glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 30px ${rank.colorGlow}`
                    }}
                  />

                  {/* Corner decorations */}
                  <div 
                    className="absolute top-0 right-0 w-4 h-4 border-t border-r transition-colors duration-300"
                    style={{ borderColor: rank.color + '40' }}
                  />
                  <div 
                    className="absolute bottom-0 right-0 w-4 h-4 border-b border-r transition-colors duration-300"
                    style={{ borderColor: rank.color + '40' }}
                  />

                  {/* Content */}
                  <div className="relative p-5 md:p-6">
                    <div className="flex items-start gap-5 md:gap-6">
                      {/* Icon emblem */}
                      <div className="flex-shrink-0 relative">
                        <div 
                          className="w-14 h-14 md:w-16 md:h-16 border rotate-45 flex items-center justify-center bg-background/80 transition-all duration-300 group-hover:scale-105"
                          style={{ borderColor: rank.color + '60' }}
                        >
                          <rank.icon 
                            className="-rotate-45 transition-colors duration-300" 
                            style={{ color: rank.color, width: '1.5rem', height: '1.5rem' }}
                            strokeWidth={1.5} 
                          />
                        </div>
                        {/* Roman numeral badge */}
                        <div 
                          className="absolute -bottom-1 -right-1 w-6 h-6 bg-background flex items-center justify-center"
                          style={{ border: `1px solid ${rank.color}80` }}
                        >
                          <span 
                            className="font-cinzel text-xs font-bold"
                            style={{ color: rank.color }}
                          >
                            {rank.number}
                          </span>
                        </div>
                      </div>

                      {/* Text content */}
                      <div className="flex-1 min-w-0">
                        <div className="mb-2">
                          <h3 
                            className="font-cinzel text-xl md:text-2xl font-bold tracking-wider"
                            style={{ color: rank.color }}
                          >
                            {rank.title}
                          </h3>
                          <p className="font-orbitron text-[10px] md:text-xs text-steel/60 tracking-[0.15em] mt-1">
                            {rank.subtitle}
                          </p>
                        </div>
                        <p className="font-rajdhani text-sm md:text-base text-foreground/60 leading-relaxed">
                          {rank.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector dot on the line */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.12 }}
                  className="absolute left-[30px] md:left-[38px] top-1/2 -translate-y-1/2 -translate-x-1/2"
                >
                  <div 
                    className="w-3 h-3 rotate-45"
                    style={{ 
                      backgroundColor: rank.color,
                      boxShadow: `0 0 10px ${rank.colorGlow}`
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-steel/30" />
            <span className="font-orbitron text-[10px] text-steel/40 tracking-[0.2em]">
              СТРУКТУРА ВЛАСТИ
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-steel/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HierarchieSection;
