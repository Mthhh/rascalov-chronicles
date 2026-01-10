import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// Import images
import heritageOrigin from '@/assets/heritage-origin.jpg';
import heritageExpansion from '@/assets/heritage-expansion.jpg';

const HeritageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="heritage"
      ref={ref}
      className="relative min-h-screen py-32 px-6 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 80px,
            hsl(var(--steel) / 0.3) 80px,
            hsl(var(--steel) / 0.3) 81px
          )`
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* ==================== MAIN FRAME CONTAINER ==================== */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Outer decorative frame */}
          <div className="absolute -inset-4 md:-inset-8 pointer-events-none">
            {/* Corner decorations - large elegant corners */}
            <div className="absolute top-0 left-0 w-12 h-12 md:w-20 md:h-20">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blood via-blood/50 to-transparent" />
              <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-blood via-blood/50 to-transparent" />
              <div className="absolute top-2 left-2 w-2 h-2 rotate-45 border border-blood/60 bg-blood/20" />
            </div>
            <div className="absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20">
              <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-blood via-blood/50 to-transparent" />
              <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-blood via-blood/50 to-transparent" />
              <div className="absolute top-2 right-2 w-2 h-2 rotate-45 border border-blood/60 bg-blood/20" />
            </div>
            <div className="absolute bottom-0 left-0 w-12 h-12 md:w-20 md:h-20">
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blood via-blood/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-[1px] h-full bg-gradient-to-t from-blood via-blood/50 to-transparent" />
              <div className="absolute bottom-2 left-2 w-2 h-2 rotate-45 border border-blood/60 bg-blood/20" />
            </div>
            <div className="absolute bottom-0 right-0 w-12 h-12 md:w-20 md:h-20">
              <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-blood via-blood/50 to-transparent" />
              <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-blood via-blood/50 to-transparent" />
              <div className="absolute bottom-2 right-2 w-2 h-2 rotate-45 border border-blood/60 bg-blood/20" />
            </div>
          </div>

          {/* Inner content container with subtle background */}
          <div className="relative bg-gradient-to-b from-background/40 via-background/20 to-background/40 backdrop-blur-sm border border-steel/10 p-6 md:p-12">
            {/* Inner frame glow */}
            <div className="absolute inset-0 pointer-events-none" style={{
              boxShadow: 'inset 0 0 60px hsl(var(--blood) / 0.05), inset 0 0 120px hsl(var(--background) / 0.5)'
            }} />

            {/* Section Header */}
            <motion.div
              className="mb-12 md:mb-16 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-blood rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-blood rounded-full animate-ping opacity-30" />
                </div>
                <span className="font-orbitron text-xs text-blood tracking-[0.4em] font-medium">
                  DOSSIER I
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-blood/50 via-steel/20 to-transparent" />
              </div>
              
              <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
                <span 
                  className="inline-block"
                  style={{
                    background: 'linear-gradient(180deg, hsl(var(--ivory)) 0%, hsl(var(--ivory) / 0.7) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 2px 10px hsl(0 0% 0% / 0.5))'
                  }}
                >
                  L'HÉRITAGE
                </span>
                <span 
                  className="inline-block ml-3 md:ml-5"
                  style={{
                    background: 'linear-gradient(180deg, hsl(var(--blood)) 0%, hsl(var(--blood-dark)) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 20px hsl(var(--blood) / 0.4))'
                  }}
                >
                  DES OMBRES
                </span>
              </h2>
              
              <p className="mt-4 font-orbitron text-[10px] md:text-xs text-steel/70 tracking-[0.25em]">
                НАСЛЕДИЕ ТЕНЕЙ — <span className="text-blood/80">HISTOIRE</span>
              </p>
            </motion.div>

            {/* Quote - Premium styling */}
            <motion.blockquote
              className="relative mb-12 md:mb-16 py-6 px-6 md:px-10 border-l-2 border-blood/50 bg-gradient-to-r from-blood/5 to-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="absolute -top-3 left-6 text-5xl text-blood/30 font-serif">«</div>
              <p className="font-cormorant text-xl md:text-2xl lg:text-3xl text-ivory/80 italic leading-relaxed">
                La Russie nous a donné la naissance, la survie nous a donné la discipline, 
                <span 
                  className="not-italic font-semibold ml-1"
                  style={{
                    background: 'linear-gradient(90deg, hsl(var(--blood)) 0%, hsl(var(--blood-glow)) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textDecoration: 'underline',
                    textDecorationColor: 'hsl(var(--blood) / 0.5)',
                    textUnderlineOffset: '4px'
                  }}
                > Los Santos nous donnera le trône.</span>
              </p>
              <div className="absolute -bottom-3 right-6 text-5xl text-blood/30 font-serif">»</div>
            </motion.blockquote>

            {/* Content Cards */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Origin Card */}
              <motion.div
                className="relative bg-background/50 border border-steel/20 backdrop-blur-sm overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                onMouseEnter={() => setHoveredCard('origin')}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ scale: 1.01 }}
              >
                {/* Red line indicator on hover */}
                <motion.div 
                  className="absolute top-0 left-0 w-1 h-full bg-blood"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: hoveredCard === 'origin' ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ originY: 0 }}
                />

                {/* Background Image */}
                <motion.div 
                  className="absolute inset-0"
                  animate={{ 
                    scale: hoveredCard === 'origin' ? 1.1 : 1.05,
                    opacity: hoveredCard === 'origin' ? 0.35 : 0.2
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <img 
                    src={heritageOrigin} 
                    alt="Saint-Pétersbourg"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
                </motion.div>

                <div className="relative z-10 p-6 md:p-8">
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-blood/30 transition-colors group-hover:border-blood/60" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-steel/20" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-steel/20" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-blood/30 transition-colors group-hover:border-blood/60" />

                  <div className="flex items-center gap-4 mb-6">
                    <span 
                      className="font-orbitron text-lg font-bold"
                      style={{
                        background: 'linear-gradient(180deg, hsl(var(--steel)) 0%, hsl(var(--steel) / 0.5) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      01
                    </span>
                    <h3 
                      className="font-cinzel text-xl md:text-2xl font-semibold tracking-wide"
                      style={{
                        background: 'linear-gradient(90deg, hsl(var(--ivory)) 0%, hsl(var(--ivory) / 0.8) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      LES ORIGINES
                    </h3>
                  </div>

                  <p className="font-rajdhani text-foreground/70 leading-relaxed text-sm md:text-base">
                    La Rascalov n'est pas née dans le luxe, mais dans le froid des chantiers navals 
                    de <span className="text-ivory font-medium">Saint-Pétersbourg</span> à la fin des années 80. 
                    Sous l'impulsion de <span className="text-blood font-semibold underline decoration-blood/40 underline-offset-2">Sergueï Mikhailov</span>, 
                    l'organisation a compris une vérité fondamentale : la puissance ne réside pas dans 
                    le produit, mais dans le chemin qu'il parcourt.
                  </p>

                  <div className="mt-6 pt-4 border-t border-steel/15 flex items-center justify-between">
                    <span className="font-orbitron text-[10px] text-steel/60 tracking-wider">
                      САНКТ-ПЕТЕРБУРГ, 1987
                    </span>
                    <div className="w-8 h-px bg-gradient-to-r from-blood/50 to-transparent" />
                  </div>
                </div>
              </motion.div>

              {/* Expansion Card */}
              <motion.div
                className="relative bg-background/50 border border-steel/20 backdrop-blur-sm overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                onMouseEnter={() => setHoveredCard('expansion')}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ scale: 1.01 }}
              >
                {/* Red line indicator on hover */}
                <motion.div 
                  className="absolute top-0 left-0 w-1 h-full bg-blood"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: hoveredCard === 'expansion' ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ originY: 0 }}
                />

                {/* Background Image */}
                <motion.div 
                  className="absolute inset-0"
                  animate={{ 
                    scale: hoveredCard === 'expansion' ? 1.1 : 1.05,
                    opacity: hoveredCard === 'expansion' ? 0.35 : 0.2
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <img 
                    src={heritageExpansion} 
                    alt="Los Santos"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
                </motion.div>

                <div className="relative z-10 p-6 md:p-8">
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-blood/30 transition-colors group-hover:border-blood/60" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-steel/20" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-steel/20" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-blood/30 transition-colors group-hover:border-blood/60" />

                  <div className="flex items-center gap-4 mb-6">
                    <span 
                      className="font-orbitron text-lg font-bold"
                      style={{
                        background: 'linear-gradient(180deg, hsl(var(--steel)) 0%, hsl(var(--steel) / 0.5) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      02
                    </span>
                    <h3 
                      className="font-cinzel text-xl md:text-2xl font-semibold tracking-wide"
                      style={{
                        background: 'linear-gradient(90deg, hsl(var(--ivory)) 0%, hsl(var(--ivory) / 0.8) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      L'EXPANSION
                    </h3>
                  </div>

                  <p className="font-rajdhani text-foreground/70 leading-relaxed text-sm md:text-base">
                    Après avoir verrouillé les flux de la <span className="text-ivory font-medium">Baltique</span> et 
                    infiltré les sphères financières d'Europe de l'Est, une purge politique interne a 
                    forcé la famille à déplacer ses pions. La direction a choisi
                    <span className="text-blood font-semibold underline decoration-blood/40 underline-offset-2"> Los Santos</span> non pas comme une 
                    terre d'exil, mais comme un <span className="text-ivory font-medium">carrefour stratégique vierge</span>.
                  </p>

                  <div className="mt-6 pt-4 border-t border-steel/15 flex items-center justify-between">
                    <span className="font-orbitron text-[10px] text-steel/60 tracking-wider">
                      ЛОС-САНТОС, НАСТОЯЩЕЕ
                    </span>
                    <div className="w-8 h-px bg-gradient-to-r from-blood/50 to-transparent" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom statement - Premium styling */}
            <motion.div
              className="mt-12 md:mt-16 text-center relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
            >
              {/* Decorative lines */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 md:w-32 h-px bg-gradient-to-r from-transparent via-steel/30 to-steel/50" />
                <div className="w-1.5 h-1.5 rotate-45 bg-blood/50" />
                <div className="w-16 md:w-32 h-px bg-gradient-to-l from-transparent via-steel/30 to-steel/50" />
              </div>

              <p className="font-rajdhani text-base md:text-lg text-steel/70 tracking-wide">
                Ici, la Rascalov ne vient pas pour s'adapter.
              </p>
              <p 
                className="font-cinzel text-xl md:text-2xl lg:text-3xl mt-3 italic tracking-wider"
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--blood-dark)) 0%, hsl(var(--blood)) 50%, hsl(var(--blood-dark)) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 15px hsl(var(--blood) / 0.3))'
                }}
              >
                ELLE VIENT POUR IMPLANTER UN SYSTÈME.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeritageSection;
