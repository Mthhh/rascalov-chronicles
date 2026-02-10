import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Building2, Truck, Package, FileText, ExternalLink } from 'lucide-react';

import warehouseImage from '@/assets/facade-warehouse.jpg';
import mmGlobalLogo from '@/assets/mm-global-logo.png';

const FacadeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const services = [
    {
      icon: Truck,
      title: 'Flotte de Transport',
      description: 'Justification légale de véhicules utilitaires à travers tout San Andreas.',
    },
    {
      icon: Package,
      title: 'Stockage & Entrepôts',
      description: 'Infrastructures de stockage sous couverture commerciale officielle.',
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Manifestes de cargo et documents douaniers authentifiés.',
    },
  ];

  return (
    <section
      id="facade"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--steel) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--steel) / 0.3) 1px, transparent 1px)
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
            <div className="w-1.5 h-1.5 bg-steel rounded-full" />
            <span className="font-orbitron text-xs text-steel tracking-[0.3em]">
              DOSSIER V
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-steel/30 to-transparent" />
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-medium tracking-wider">
            <span className="text-ivory">LÉGAL &</span>
            <span className="text-primary ml-4">LOGISTIQUE</span>
          </h2>
          
          <p className="mt-4 font-orbitron text-xs text-steel tracking-[0.2em]">
            ЛЕГАЛЬНЫЙ ФАСАД — LA FAÇADE
          </p>
        </motion.div>

        {/* Main Partner Card */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-card/50 border border-steel/20 overflow-hidden relative group">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img 
                  src={warehouseImage} 
                  alt="MM Global Export Warehouse"
                  className="w-full h-full object-cover filter grayscale opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
            </div>

            {/* Header bar */}
            <div className="relative z-10 flex items-center justify-between px-6 py-3 bg-secondary/50 border-b border-steel/20 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Building2 className="w-4 h-4 text-steel" />
                <span className="font-orbitron text-[10px] text-steel tracking-wider">
                  PARTENAIRE STRATÉGIQUE
                </span>
              </div>
              <span className="font-orbitron text-[10px] text-primary tracking-wider">
                ACTIF
              </span>
            </div>

            <div className="relative z-10 p-8 md:flex md:gap-12">
              {/* Logo/Icon area */}
              <motion.div 
                className="flex-shrink-0 mb-6 md:mb-0 relative"
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
              >
                {/* Logo container */}
                <motion.div 
                  className="relative w-32 h-32 md:w-40 md:h-40 bg-background border border-steel/20 flex items-center justify-center backdrop-blur-sm overflow-hidden"
                  animate={{
                    borderColor: isLogoHovered ? 'hsl(var(--steel) / 0.4)' : 'hsl(var(--steel) / 0.2)'
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-steel/30" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-steel/30" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-steel/30" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-steel/30" />
                  
                  {/* Logo image */}
                  <img 
                    src={mmGlobalLogo} 
                    alt="MM Global Export"
                    className="w-28 h-28 md:w-36 md:h-36 object-contain"
                  />
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-cinzel text-3xl text-ivory mb-2">
                  MM GLOBAL EXPORT
                </h3>
                <span className="font-rajdhani text-primary text-lg block mb-4">
                  Première Infrastructure Logistique de la Cellule
                </span>

                <p className="font-rajdhani text-foreground/70 leading-relaxed mb-6">
                  Cette entreprise de transit international constitue la <span className="text-ivory">couverture légale parfaite</span> pour 
                  l'ensemble des opérations logistiques de la Rascalov à Los Santos. Elle permet de justifier le transit de marchandises, 
                  le stockage en entrepôt sécurisé et la gestion d'une <span className="text-ivory">flotte complète de véhicules</span> à travers toute l'île.
                </p>

                <p className="font-rajdhani text-foreground/60 leading-relaxed mb-4">
                  MM Global Export constitue la <span className="text-primary">première étape de l'implantation logistique</span> de la cellule 
                  Rascalov à Los Santos et évoluera progressivement avec l'expansion de ses opérations.
                </p>

                <p className="font-rajdhani text-foreground/60 leading-relaxed mb-8">
                  Officiellement spécialisée dans l'import-export de pièces automobiles et de matériaux de construction, 
                  MM Global Export dispose de <span className="text-primary">licences commerciales authentiques</span>, 
                  de contrats avec des fournisseurs internationaux et d'une réputation irréprochable auprès des autorités portuaires.
                </p>

                {/* Services grid */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      className="bg-secondary/30 border border-steel/20 p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <service.icon className="w-5 h-5 text-steel mb-2" />
                      <h4 className="font-rajdhani text-ivory font-semibold mb-1">
                        {service.title}
                      </h4>
                      <p className="font-rajdhani text-sm text-foreground/50">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://mm-global-export.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-blood/10 border border-blood/50 hover:bg-blood/20 hover:border-blood transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-orbitron text-sm tracking-[0.2em] text-ivory group-hover:text-white uppercase">
                    Accéder au Registre Corporate
                  </span>
                  <ExternalLink className="w-4 h-4 text-blood group-hover:text-white transition-colors" />
                </motion.a>
              </div>
            </div>

            {/* Footer bar */}
            <div className="relative z-10 px-6 py-3 bg-secondary/30 border-t border-steel/20 flex justify-between items-center backdrop-blur-sm">
              <span className="font-orbitron text-[10px] text-steel/60">
                REF: RSC-MMGE-2024
              </span>
              <span className="font-orbitron text-[10px] text-steel/40">
                СТАТУС: АКТИВНЫЙ
              </span>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-steel/40" />
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-steel/40" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-steel/40" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-steel/40" />
        </motion.div>

        {/* Annotation manuscrite */}
        <motion.div
          className="absolute -right-4 top-1/3 hidden lg:block"
          initial={{ opacity: 0, rotate: -5 }}
          animate={isInView ? { opacity: 0.7, rotate: -5 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="handwritten-note text-blood text-sm -rotate-6">
            → Couverture parfaite<br/>
            <span className="text-xs">- Agent K.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacadeSection;
