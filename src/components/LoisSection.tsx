import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scale, VolumeX, Sword, AlertTriangle } from 'lucide-react';

const LoisSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const laws = [
    {
      icon: Scale,
      title: "LA COMPÉTENCE AVANT LE NOM",
      description: "Même un héritier peut être déchu s'il met en péril la logistique du groupe.",
      russian: "КОМПЕТЕНТНОСТЬ ПРЕВЫШЕ ИМЕНИ",
    },
    {
      icon: VolumeX,
      title: "LA LOI DU SILENCE",
      subtitle: "Omerta Slave",
      description: "Chaque membre est une cellule isolée. La trahison n'entraîne pas une discussion, mais une suppression définitive.",
      russian: "ЗАКОН МОЛЧАНИЯ",
    },
    {
      icon: Sword,
      title: 'LE CODE "VOR V ZAKONE"',
      subtitle: "Moderne",
      description: "Discipline militaire, tenue impeccable, discrétion absolue en public. Nous sommes des fantômes en costumes.",
      russian: "ВОР В ЗАКОНЕ",
    },
  ];

  return (
    <section
      id="lois"
      ref={ref}
      className="relative min-h-screen py-32 px-6 overflow-hidden"
    >
      {/* Subtle dot pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--steel)) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header - Engraved style */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1.5 h-1.5 bg-steel rounded-full" />
            <span className="font-orbitron text-xs text-steel tracking-[0.3em]">
              DOSSIER IV
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-steel/30 to-transparent" />
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider">
            <span className="text-ivory">LES LOIS</span>
            <span className="text-primary ml-4">DU SANG</span>
          </h2>
          
          <p className="mt-4 font-orbitron text-xs text-steel tracking-[0.2em]">
            ЗАКОНЫ КРОВИ — MÉRITOCRATIE & CODE
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-rajdhani text-xl text-foreground/60 max-w-3xl mx-auto">
            Dans la Rascalov, le respect ne se demande pas,
            <span className="text-ivory font-semibold"> il s'extrait par l'efficacité.</span>
          </p>
        </motion.div>

        {/* Laws Grid - vertical reveal */}
        <div className="grid md:grid-cols-3 gap-6">
          {laws.map((law, index) => (
            <motion.div
              key={law.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="h-full bg-card/30 border border-steel/20 p-6 hover:border-steel/40 transition-all duration-500 relative overflow-hidden">
                {/* Subtle gold glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-gold-subtle/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-12 h-12 border border-steel/30 flex items-center justify-center group-hover:border-gold-subtle/50 transition-colors duration-500">
                    <law.icon className="w-6 h-6 text-steel group-hover:text-gold-subtle transition-colors duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <span className="font-orbitron text-[10px] text-steel tracking-[0.2em] block mb-2">
                    {law.russian}
                  </span>
                  
                  <h3 className="font-cinzel text-lg text-ivory mb-1">
                    {law.title}
                  </h3>
                  
                  {law.subtitle && (
                    <span className="font-orbitron text-xs text-steel/80 italic block mb-3">
                      {law.subtitle}
                    </span>
                  )}
                  
                  <p className="font-rajdhani text-foreground/60 leading-relaxed">
                    {law.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-steel/30 group-hover:border-gold-subtle/50 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning box - red accent here makes sense */}
        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="flex items-start gap-4 p-6 bg-primary/5 border border-primary/20">
            <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <span className="font-orbitron text-xs text-primary tracking-wider block mb-2">
                AVERTISSEMENT
              </span>
              <p className="font-rajdhani text-foreground/70">
                Toute violation de ces lois sera traitée selon le protocole 
                <span className="text-primary font-semibold"> "LIQUIDATION SILENCIEUSE"</span>. 
                Il n'y a pas d'appel. Il n'y a pas d'explication.
                <span className="text-primary"> Il n'y a que le silence.</span>
              </p>
            </div>
          </div>
          
          {/* Classified corners - steel */}
          <div className="absolute -top-2 -left-2 w-3 h-3 border-t border-l border-steel/40" />
          <div className="absolute -top-2 -right-2 w-3 h-3 border-t border-r border-steel/40" />
          <div className="absolute -bottom-2 -left-2 w-3 h-3 border-b border-l border-steel/40" />
          <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b border-r border-steel/40" />
        </motion.div>
      </div>
    </section>
  );
};

export default LoisSection;
