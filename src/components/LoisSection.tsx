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
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--blood)) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
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
              DOSSIER IV
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
            <span className="text-foreground">LES LOIS</span>
            <span className="text-primary ml-4">DU SANG</span>
          </h2>
          
          <p className="mt-4 font-orbitron text-xs text-muted-foreground tracking-[0.2em]">
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
          <p className="font-rajdhani text-xl text-foreground/80 max-w-3xl mx-auto">
            Dans la Rascalov, le respect ne se demande pas,
            <span className="text-primary font-semibold"> il s'extrait par l'efficacité.</span>
          </p>
        </motion.div>

        {/* Laws Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {laws.map((law, index) => (
            <motion.div
              key={law.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
            >
              <div className="h-full bg-card border border-border p-6 hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-colors">
                    <law.icon className="w-7 h-7 text-primary" />
                  </div>
                  {/* Decorative line */}
                  <div className="absolute top-1/2 left-16 right-0 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative">
                  <span className="font-orbitron text-[10px] text-primary/60 tracking-[0.2em] block mb-2">
                    {law.russian}
                  </span>
                  
                  <h3 className="font-cinzel text-lg text-foreground mb-1">
                    {law.title}
                  </h3>
                  
                  {law.subtitle && (
                    <span className="font-orbitron text-xs text-primary/80 italic block mb-3">
                      {law.subtitle}
                    </span>
                  )}
                  
                  <p className="font-rajdhani text-foreground/70 leading-relaxed">
                    {law.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/30 group-hover:border-primary/60 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning box */}
        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-start gap-4 p-6 bg-primary/5 border border-primary/30">
            <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <span className="font-orbitron text-xs text-primary tracking-wider block mb-2">
                AVERTISSEMENT
              </span>
              <p className="font-rajdhani text-foreground/80">
                Toute violation de ces lois sera traitée selon le protocole 
                <span className="text-primary font-semibold"> "LIQUIDATION SILENCIEUSE"</span>. 
                Il n'y a pas d'appel. Il n'y a pas d'explication.
                <span className="text-primary"> Il n'y a que le silence.</span>
              </p>
            </div>
          </div>
          
          {/* Classified corners */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary" />
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default LoisSection;
