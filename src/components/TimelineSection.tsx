import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Anchor, Target } from 'lucide-react';

// Import images
import timeline1991 from '@/assets/timeline-1991.jpg';
import timeline2010 from '@/assets/timeline-2010.jpg';
import timeline2024 from '@/assets/timeline-2024.jpg';

// Import supplementary documents
import document1991 from '@/assets/document-1991.jpg';
import mapBaltic from '@/assets/map-baltic.jpg';
import surveillance2024 from '@/assets/surveillance-2024.jpg';

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
  const [hoveredDoc, setHoveredDoc] = useState<string | null>(null);

  const events = [
    {
      year: '1991',
      location: 'Saint-Pétersbourg',
      title: 'FONDATION',
      subtitle: 'Le Noyau Original',
      description: 'Dans le chaos de l\'après-URSS, Sergueï Zeitsey rassemble d\'anciens officiers du KGB et des vétérans d\'Afghanistan. La Rascalov naît dans l\'ombre des chantiers navals, contrôlant les premiers flux de contrebande vers la Finlande.',
      icon: MapPin,
      russian: 'ОСНОВАНИЕ',
      image: timeline1991,
      document: document1991,
      docLabel: 'DOCUMENT DÉCLASSIFIÉ',
      docDesc: 'Rapport KGB — Dossier Zeitsey',
    },
    {
      year: '2010',
      location: 'Mer Baltique',
      title: 'L\'EXPANSION BALTIQUE',
      subtitle: 'Domination Maritime',
      description: 'Prise de contrôle totale des routes maritimes entre Kaliningrad, Riga et Stockholm. La famille devient incontournable pour tout transit illégal en Europe du Nord. Partenariats secrets avec des cartels sud-américains.',
      icon: Anchor,
      russian: 'БАЛТИЙСКАЯ ЭКСПАНСИЯ',
      image: timeline2010,
      document: mapBaltic,
      docLabel: 'CARTE OPÉRATIONNELLE',
      docDesc: 'Routes maritimes contrôlées',
    },
    {
      year: '2026',
      location: 'Los Santos',
      title: 'OPÉRATION SOKOL',
      subtitle: 'Déploiement Stratégique',
      description: 'Déploiement de la cellule d\'élite menée par Azarov Zeitsey. Objectif : établir une infrastructure logistique complète sur la côte ouest américaine. MM Global Export sert de façade légale pour les opérations.',
      icon: Target,
      russian: 'ОПЕРАЦИЯ СОКОЛ',
      image: timeline2024,
      current: true,
      document: surveillance2024,
      docLabel: 'SURVEILLANCE ACTIVE',
      docDesc: 'Port de Los Santos — Live Feed',
    },
  ];

  return (
    <section
      id="timeline"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-steel" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-steel/50" />
            <span className="font-orbitron text-xs text-steel tracking-[0.3em]">
              CHRONOLOGIE
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-steel/50" />
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-5xl font-medium tracking-wider">
            <span className="text-ivory">LA DYNASTIE</span>
            <span className="text-primary ml-3">ZEITSEY</span>
          </h2>
          
          <p className="mt-4 font-orbitron text-xs text-steel tracking-[0.2em]">
            ДИНАСТИЯ — 33 ANS D'HISTOIRE
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-steel/50 via-steel/30 to-transparent" />

          {events.map((event, index) => (
            <motion.div
              key={event.year}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            >
              {/* Timeline node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  event.current 
                    ? 'bg-blood border-blood shadow-[0_0_20px_hsl(var(--blood))]' 
                    : 'bg-background border-steel'
                }`} />
              </div>

              {/* Content card */}
              <div 
                className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                }`}
                onMouseEnter={() => setHoveredEvent(event.year)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                <div className={`relative bg-card/40 border border-steel/20 overflow-hidden group ${
                  event.current ? 'border-blood/30' : ''
                } hover:border-steel/40 transition-all duration-500`}>
                  
                  {/* Background Image with hover effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      initial={{ scale: 1.1 }}
                      animate={{ 
                        scale: hoveredEvent === event.year ? 1.15 : 1.1,
                        opacity: hoveredEvent === event.year ? 0.3 : 0.15
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover filter grayscale"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
                  </div>

                  <div className="relative z-10 p-6">
                    {/* Header with Year badge and Icon */}
                    <div className={`flex items-center justify-between mb-4`}>
                      {/* Year badge */}
                      <span className={`inline-block px-3 py-1 font-orbitron text-sm tracking-wider ${
                        event.current 
                          ? 'bg-blood text-ivory animate-pulse shadow-[0_0_15px_hsl(var(--blood)/0.6)]' 
                          : 'bg-steel/20 text-steel border border-steel/30'
                      }`}>
                        {event.year}
                        {event.current && (
                          <span className="ml-2 inline-block w-2 h-2 bg-ivory rounded-full animate-ping" />
                        )}
                      </span>

                      {/* Icon */}
                      <div className={`w-10 h-10 border flex items-center justify-center backdrop-blur-sm ${
                        event.current ? 'border-blood/50 bg-blood/10' : 'border-steel/30 bg-steel/10'
                      }`}>
                        <event.icon className={`w-5 h-5 ${event.current ? 'text-blood' : 'text-steel'}`} />
                      </div>
                    </div>

                    {/* Location */}
                    <span className="font-orbitron text-[10px] text-steel tracking-[0.2em] block mb-2">
                      📍 {event.location.toUpperCase()}
                    </span>

                    {/* Title */}
                    <h3 className="font-cinzel text-xl text-ivory mb-1">
                      {event.title}
                    </h3>
                    <span className="font-rajdhani text-sm text-primary block mb-3">
                      {event.subtitle}
                    </span>

                    {/* Description */}
                    <p className="font-rajdhani text-foreground/70 leading-relaxed text-left">
                      {event.description}
                    </p>

                    {/* Russian label */}
                    <div className={`mt-4 pt-3 border-t border-steel/20 ${
                      index % 2 === 0 ? 'md:text-right' : 'text-left'
                    }`}>
                      <span className="font-orbitron text-[10px] text-steel/50 tracking-wider">
                        {event.russian}
                      </span>
                    </div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-steel/30 z-10" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-steel/30 z-10" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-steel/30 z-10" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-steel/30 z-10" />
                </div>
              </div>

              {/* Document/Image panel for opposite side */}
              <motion.div 
                className={`hidden md:block md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                onMouseEnter={() => setHoveredDoc(event.year)}
                onMouseLeave={() => setHoveredDoc(null)}
              >
                <div className="relative group cursor-pointer">
                  {/* Document image */}
                  <motion.div 
                    className="relative overflow-hidden border border-steel/20 bg-card/20"
                    animate={{
                      scale: hoveredDoc === event.year ? 1.02 : 1,
                      borderColor: hoveredDoc === event.year ? 'hsl(var(--primary) / 0.4)' : 'hsl(var(--steel) / 0.2)'
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.img 
                      src={event.document} 
                      alt={event.docLabel}
                      className="w-full h-48 object-cover"
                      animate={{
                        scale: hoveredDoc === event.year ? 1.1 : 1.05,
                        filter: hoveredDoc === event.year ? 'grayscale(0%) brightness(0.9)' : 'grayscale(30%) brightness(0.7)'
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    {/* Scanlines effect */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
                    }} />
                    
                    {/* Label */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="font-orbitron text-[10px] text-primary tracking-[0.2em] block mb-1">
                        {event.docLabel}
                      </span>
                      <span className="font-rajdhani text-sm text-steel">
                        {event.docDesc}
                      </span>
                    </div>
                    
                    {/* Corner brackets */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-primary/40" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-primary/40" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-primary/40" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-primary/40" />
                  </motion.div>
                  
                  {/* Typewriter annotation */}
                  <motion.div 
                    className="mt-3 font-mono text-xs text-steel/60 leading-relaxed"
                    animate={{ opacity: hoveredDoc === event.year ? 1 : 0.6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-primary/60">{">"}</span> 
                    {index === 0 && "Origine des fonds confirmée. Connexions FSB établies."}
                    {index === 1 && "Corridor sécurisé. 47 navires sous contrôle indirect."}
                    {index === 2 && "Cibles identifiées. Infiltration en cours..."}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
