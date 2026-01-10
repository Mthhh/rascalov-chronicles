import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const HeritageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="heritage"
      ref={ref}
      className="relative min-h-screen py-32 px-6 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 50px,
            hsl(var(--blood) / 0.1) 50px,
            hsl(var(--blood) / 0.1) 51px
          )`
        }} />
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
              DOSSIER I
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
            <span className="text-foreground">L'HÉRITAGE</span>
            <span className="text-primary ml-4">DES OMBRES</span>
          </h2>
          
          <p className="mt-4 font-orbitron text-xs text-muted-foreground tracking-[0.2em]">
            НАСЛЕДИЕ ТЕНЕЙ — HISTOIRE
          </p>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className="relative mb-16 pl-8 border-l-2 border-primary/50"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="font-rajdhani text-xl md:text-2xl text-foreground/90 italic leading-relaxed">
            « La Russie nous a donné la naissance, la survie nous a donné la discipline, 
            <span className="text-primary"> Los Santos nous donnera le trône.</span> »
          </p>
        </motion.blockquote>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Origin Card */}
          <motion.div
            className="relative bg-card/50 border border-border p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

            <div className="flex items-center gap-3 mb-6">
              <span className="font-orbitron text-xs text-primary tracking-wider">01</span>
              <h3 className="font-cinzel text-xl text-foreground">LES ORIGINES</h3>
            </div>

            <p className="font-rajdhani text-foreground/80 leading-relaxed">
              La Rascalov n'est pas née dans le luxe, mais dans le froid des chantiers navals 
              de <span className="text-primary">Saint-Pétersbourg</span> à la fin des années 80. 
              Sous l'impulsion de <span className="text-primary font-semibold">Sergueï Zeitsey</span>, 
              l'organisation a compris une vérité fondamentale : la puissance ne réside pas dans 
              le produit, mais dans le chemin qu'il parcourt.
            </p>

            <div className="mt-6 pt-4 border-t border-border/50">
              <span className="font-orbitron text-[10px] text-muted-foreground tracking-wider">
                САНКТ-ПЕТЕРБУРГ, 1987
              </span>
            </div>
          </motion.div>

          {/* Expansion Card */}
          <motion.div
            className="relative bg-card/50 border border-border p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

            <div className="flex items-center gap-3 mb-6">
              <span className="font-orbitron text-xs text-primary tracking-wider">02</span>
              <h3 className="font-cinzel text-xl text-foreground">L'EXPANSION</h3>
            </div>

            <p className="font-rajdhani text-foreground/80 leading-relaxed">
              Après avoir verrouillé les flux de la <span className="text-primary">Baltique</span> et 
              infiltré les sphères financières d'Europe de l'Est, une purge politique interne a 
              forcé la famille à déplacer ses pions. La direction a choisi 
              <span className="text-primary font-semibold"> Los Santos</span> non pas comme une 
              terre d'exil, mais comme un <span className="text-primary">carrefour stratégique vierge</span>.
            </p>

            <div className="mt-6 pt-4 border-t border-border/50">
              <span className="font-orbitron text-[10px] text-muted-foreground tracking-wider">
                ЛОС-САНТОС, НАСТОЯЩЕЕ
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="font-rajdhani text-lg text-muted-foreground">
            Ici, la Rascalov ne vient pas pour s'adapter.
          </p>
          <p className="font-cinzel text-2xl text-primary mt-2 glitch-text">
            ELLE VIENT POUR IMPLANTER UN SYSTÈME.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeritageSection;
