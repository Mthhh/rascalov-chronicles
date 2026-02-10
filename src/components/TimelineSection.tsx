import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Anchor, Target, Users, Building2 } from 'lucide-react';

// Import images
import timeline1991 from '@/assets/timeline-1991.jpg';
import timeline2010 from '@/assets/timeline-2010.jpg';
import timeline2024Arrival from '@/assets/timeline-2024-arrival.jpg';
import timeline2025Structure from '@/assets/timeline-2025-structure.jpg';
import timeline2024 from '@/assets/timeline-2024.jpg';

// Import supplementary documents
import document1991 from '@/assets/document-1991.jpg';
import mapBaltic from '@/assets/map-baltic.jpg';
import docArrival from '@/assets/doc-arrival.jpg';
import docStructure from '@/assets/doc-structure.jpg';
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
      description: 'Dans le chaos de l\'après-URSS, Sergueï Mikhailov rassemble d\'anciens officiers et des vétérans d\'Afghanistan. La Rascalov naît dans l\'ombre des chantiers navals, contrôlant les premiers flux de contrebande vers la Finlande.',
      icon: MapPin,
      russian: 'ОСНОВАНИЕ',
      image: timeline1991,
      document: document1991,
      docLabel: 'DOCUMENT DÉCLASSIFIÉ',
      docDesc: 'Rapport KGB — Dossier Mikhailov',
      phase: 'ORIGINE',
    },
    {
      year: '2010',
      location: 'Mer Baltique',
      title: 'DOMINATION BALTIQUE',
      subtitle: 'L\'Apogée & La Chute',
      description: 'Prise de contrôle totale des routes maritimes entre Kaliningrad, Riga et Stockholm. La Rascalov devient incontournable. Mais cette puissance attire l\'attention. Pressions politiques, traques, pertes stratégiques. La direction prend une décision : envoyer une cellule vers l\'ouest.',
      icon: Anchor,
      russian: 'БАЛТИЙСКАЯ ЭКСПАНСИЯ',
      image: timeline2010,
      document: mapBaltic,
      docLabel: 'CARTE OPÉRATIONNELLE',
      docDesc: 'Routes maritimes contrôlées',
      phase: 'APOGÉE',
    },
    {
      year: '2026',
      location: 'Los Santos',
      title: 'L\'ARRIVÉE',
      subtitle: 'Le Gang — Phase Initiale',
      description: 'Une poignée d\'hommes débarque à Los Santos. Pas de ressources. Pas de contacts. Pas de territoire. Ils survivent comme un gang de rue : braquages, vols ciblés, protection. Mais contrairement aux autres, ils ne se cachent pas ils se font remarquer. Pas comme des voyous, comme des hommes qu\'on n\'oublie pas.',
      icon: Users,
      russian: 'ПРИБЫТИЕ',
      image: timeline2024Arrival,
      document: docArrival,
      docLabel: 'SURVEILLANCE PORTUAIRE',
      docDesc: 'Arrivée non-identifiée — Docks LS',
      phase: 'GANG',
      current: true,
    },
    {
      year: '20XX',
      location: 'Los Santos',
      title: 'LA STRUCTURATION',
      subtitle: 'La Famille — Phase Active',
      description: 'Le gang devient une famille. Les opérations se professionnalisent. Une hiérarchie émerge. MM Global Export est fondée comme façade légale. Les premiers contacts stratégiques sont établis. Ce qui n\'était que des survivants devient une organisation avec des règles, des commandements, un code.',
      icon: Building2,
      russian: 'СТРУКТУРИЗАЦИЯ',
      image: timeline2025Structure,
      document: docStructure,
      docLabel: 'DOSSIER INTERNE',
      docDesc: 'Enregistrement MM Global Export',
      phase: 'FAMILLE',
    },
    {
      year: '20XX',
      location: 'Classifié',
      title: 'PROJET SOKOL',
      subtitle: 'La Rascalov — Objectif Final',
      description: 'Toutes les opérations actuelles convergent vers un seul point. Quand le moment viendra, la cellule ne sera plus une cellule. Elle sera LA RASCALOV. Le Faucon ne dort pas — il observe. Et quand il prendra son envol, personne ne pourra l\'arrêter.',
      icon: Target,
      russian: 'ОПЕРАЦИЯ СОКОЛ',
      image: timeline2024,
      document: surveillance2024,
      docLabel: 'PROJECTION STRATÉGIQUE',
      docDesc: 'Objectif final — Projet Sokol',
      phase: 'RASCALOV',
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
            <span className="text-ivory">L'ÉVOLUTION</span>
            <span className="text-primary ml-3">RASCALOV</span>
          </h2>
          
          <p className="mt-4 font-orbitron text-xs text-steel tracking-[0.2em]">
            GANG → FAMILLE → ORGANISATION
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
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
            >
              {/* Timeline node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  event.current 
                    ? 'bg-blood border-blood shadow-[0_0_20px_hsl(var(--blood))]' 
                    : event.phase === 'RASCALOV'
                    ? 'bg-background border-primary/50'
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
                  event.current ? 'border-blood/30' : event.phase === 'RASCALOV' ? 'border-primary/20 border-dashed' : ''
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
                    {/* Header with Year badge, Phase tag and Icon */}
                    <div className="flex items-center justify-between mb-4">
                      {/* Year badge */}
                      <div className="flex items-center gap-2">
                        <span className={`inline-block px-3 py-1 font-orbitron text-sm tracking-wider ${
                          event.current 
                            ? 'bg-blood text-ivory shadow-[0_0_15px_hsl(var(--blood)/0.6)]' 
                            : event.phase === 'RASCALOV'
                            ? 'bg-primary/10 text-primary border border-primary/30'
                            : 'bg-steel/20 text-steel border border-steel/30'
                        }`}>
                          {event.year}
                          {event.current && (
                            <span className="ml-2 inline-block w-2 h-2 bg-ivory rounded-full animate-ping" />
                          )}
                        </span>
                        {/* Phase tag */}
                        <span className={`font-orbitron text-[9px] tracking-[0.15em] px-2 py-0.5 ${
                          event.phase === 'GANG' ? 'text-steel bg-steel/10 border border-steel/20' :
                          event.phase === 'FAMILLE' ? 'text-blood bg-blood/10 border border-blood/20' :
                          event.phase === 'RASCALOV' ? 'text-primary bg-primary/10 border border-primary/20' :
                          'text-steel/60 bg-steel/5 border border-steel/10'
                        }`}>
                          {event.phase}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className={`w-10 h-10 border flex items-center justify-center backdrop-blur-sm ${
                        event.current ? 'border-blood/50 bg-blood/10' : 
                        event.phase === 'RASCALOV' ? 'border-primary/30 bg-primary/10' :
                        'border-steel/30 bg-steel/10'
                      }`}>
                        <event.icon className={`w-5 h-5 ${
                          event.current ? 'text-blood' : 
                          event.phase === 'RASCALOV' ? 'text-primary' :
                          'text-steel'
                        }`} />
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
                    <span className={`font-rajdhani text-sm block mb-3 ${
                      event.phase === 'GANG' ? 'text-steel' :
                      event.phase === 'FAMILLE' ? 'text-blood' :
                      event.phase === 'RASCALOV' ? 'text-primary' :
                      'text-primary'
                    }`}>
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
                transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
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
                    {index === 2 && "Sujets non-identifiés. Activité mineure détectée."}
                    {index === 3 && "Structure organisationnelle en formation. Façade légale active."}
                    {index === 4 && "Projection stratégique. Objectif à long terme..."}
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