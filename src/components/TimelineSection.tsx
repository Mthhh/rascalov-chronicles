import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Anchor, Target } from 'lucide-react';

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      year: '1991',
      location: 'Saint-Pétersbourg',
      title: 'FONDATION',
      subtitle: 'Le Noyau Original',
      description: 'Dans le chaos de l\'après-URSS, Sergueï Zeitsey rassemble d\'anciens officiers du KGB et des vétérans d\'Afghanistan. La Rascalov naît dans l\'ombre des chantiers navals, contrôlant les premiers flux de contrebande vers la Finlande.',
      icon: MapPin,
      russian: 'ОСНОВАНИЕ',
    },
    {
      year: '2010',
      location: 'Mer Baltique',
      title: 'L\'EXPANSION BALTIQUE',
      subtitle: 'Domination Maritime',
      description: 'Prise de contrôle totale des routes maritimes entre Kaliningrad, Riga et Stockholm. La famille devient incontournable pour tout transit illégal en Europe du Nord. Partenariats secrets avec des cartels sud-américains.',
      icon: Anchor,
      russian: 'БАЛТИЙСКАЯ ЭКСПАНСИЯ',
    },
    {
      year: '2024',
      location: 'Los Santos',
      title: 'OPÉRATION SOKOL',
      subtitle: 'Déploiement Stratégique',
      description: 'Déploiement de la cellule d\'élite menée par Azarov Zeitsey. Objectif : établir une infrastructure logistique complète sur la côte ouest américaine. MM Global Export sert de façade légale pour les opérations.',
      icon: Target,
      russian: 'ОПЕРАЦИЯ СОКОЛ',
      current: true,
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
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
              }`}>
                <div className={`relative bg-card/40 border border-steel/20 p-6 ${
                  event.current ? 'border-blood/30' : ''
                }`}>
                  {/* Year badge */}
                  <div className={`absolute -top-3 ${
                    index % 2 === 0 ? 'md:right-6' : 'left-6'
                  } left-6`}>
                    <span className={`inline-block px-3 py-1 font-orbitron text-sm tracking-wider ${
                      event.current 
                        ? 'bg-blood text-ivory' 
                        : 'bg-steel/20 text-steel border border-steel/30'
                    }`}>
                      {event.year}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'} mb-4 mt-2`}>
                    <div className={`w-10 h-10 border flex items-center justify-center ${
                      event.current ? 'border-blood/50' : 'border-steel/30'
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
                  <p className={`font-rajdhani text-foreground/60 leading-relaxed text-left`}>
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

                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-steel/30" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-steel/30" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-steel/30" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-steel/30" />
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
