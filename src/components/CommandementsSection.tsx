import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  VolumeX, 
  Crosshair, 
  Crown, 
  Heart, 
  Users, 
  Shield, 
  Eye, 
  Lock, 
  Skull, 
  Scale 
} from 'lucide-react';

const CommandementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const commandments = [
    {
      number: 'I',
      icon: VolumeX,
      title: 'SILENCE ABSOLU',
      description: 'Ne jamais exposer les affaires devant des tiers. Ce qui se dit en famille reste en famille.',
      russian: 'АБСОЛЮТНОЕ МОЛЧАНИЕ',
    },
    {
      number: 'II',
      icon: Crosshair,
      title: 'DISCIPLINE MILITAIRE',
      description: 'Un ordre est une exécution immédiate. Pas de questions, pas d\'hésitations.',
      russian: 'ВОЕННАЯ ДИСЦИПЛИНА',
    },
    {
      number: 'III',
      icon: Crown,
      title: 'DISCRÉTION PUBLIQUE',
      description: 'L\'élégance est notre meilleure armure, pas la violence gratuite. Nous sommes des fantômes en costumes.',
      russian: 'ПУБЛИЧНАЯ СКРОМНОСТЬ',
    },
    {
      number: 'IV',
      icon: Heart,
      title: 'LOYAUTÉ INDÉFECTIBLE',
      description: 'La famille passe avant l\'individu, toujours. Trahir la Rascalov, c\'est cesser d\'exister.',
      russian: 'НЕПОКОЛЕБИМАЯ ВЕРНОСТЬ',
    },
    {
      number: 'V',
      icon: Scale,
      title: 'COMPÉTENCE AVANT LE NOM',
      description: 'Même un héritier peut être déchu s\'il met en péril la logistique du groupe.',
      russian: 'КОМПЕТЕНЦИЯ ВАЖНЕЕ ИМЕНИ',
    },
    {
      number: 'VI',
      icon: Users,
      title: 'PROTECTION DES ALLIÉS',
      description: 'Ceux qui servent la famille sont protégés par la famille. Notre parole est notre honneur.',
      russian: 'ЗАЩИТА СОЮЗНИКОВ',
    },
    {
      number: 'VII',
      icon: Shield,
      title: 'NEUTRALISATION PROPRE',
      description: 'Si la violence devient nécessaire, elle doit être chirurgicale et invisible.',
      russian: 'ЧИСТАЯ НЕЙТРАЛИЗАЦИЯ',
    },
    {
      number: 'VIII',
      icon: Eye,
      title: 'VIGILANCE PERMANENTE',
      description: 'Chaque visage est mémorisé, chaque conversation analysée. La paranoïa est une vertu.',
      russian: 'ПОСТОЯННАЯ БДИТЕЛЬНОСТЬ',
    },
    {
      number: 'IX',
      icon: Lock,
      title: 'COMPARTIMENTAGE',
      description: 'Chaque membre est une cellule isolée. Ne révéler que le strict nécessaire à sa mission.',
      russian: 'РАЗДЕЛЕНИЕ ИНФОРМАЦИИ',
    },
    {
      number: 'X',
      icon: Skull,
      title: 'JUSTICE INTERNE',
      description: 'La Rascalov règle ses propres affaires. Aucune autorité extérieure ne sera jamais impliquée.',
      russian: 'ВНУТРЕННЯЯ СПРАВЕДЛИВОСТЬ',
    },
  ];

  return (
    <section
      id="commandements"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background texture */}
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
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-blood/50" />
            <span className="font-orbitron text-xs text-blood tracking-[0.3em]">
              CODE SACRÉ
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-blood/50" />
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider">
            <span className="text-ivory">LES X</span>
            <span className="text-primary ml-4">COMMANDEMENTS</span>
          </h2>
          
          <p className="mt-4 font-orbitron text-xs text-steel tracking-[0.2em]">
            ЗАПОВЕДИ РАСКАЛОВА — LES LOIS FONDAMENTALES
          </p>

          <p className="mt-6 font-rajdhani text-xl text-foreground/60 max-w-2xl mx-auto">
            Ces règles ne sont pas négociables. Elles sont gravées dans le sang de chaque membre.
          </p>
        </motion.div>

        {/* Commandments Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {commandments.map((cmd, index) => (
            <motion.div
              key={cmd.number}
              className="relative group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <div className="flex gap-4 p-5 bg-card/30 border border-steel/15 hover:border-blood/30 transition-all duration-500 group-hover:bg-card/50">
                {/* Number */}
                <div className="flex-shrink-0 w-12 h-12 border border-blood/30 flex items-center justify-center group-hover:border-blood/60 transition-colors">
                  <span className="font-cinzel text-lg text-blood font-bold">
                    {cmd.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <cmd.icon className="w-4 h-4 text-steel group-hover:text-blood transition-colors" />
                    <h3 className="font-cinzel text-base text-ivory truncate">
                      {cmd.title}
                    </h3>
                  </div>
                  <p className="font-rajdhani text-sm text-foreground/60 leading-relaxed">
                    {cmd.description}
                  </p>
                  <span className="font-orbitron text-[9px] text-steel/40 tracking-wider mt-2 block">
                    {cmd.russian}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Signature */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-block p-6 border border-blood/20 bg-blood/5">
            <p className="font-cormorant text-xl text-blood italic mb-2">
              "Celui qui brise une loi brise le pacte. Celui qui brise le pacte est brisé."
            </p>
            <span className="font-orbitron text-[10px] text-steel tracking-widest">
              — SERGUEÏ MIKHAILOV, FONDATEUR
            </span>
          </div>
        </motion.div>

        {/* Handwritten annotation */}
        <motion.div
          className="absolute -left-8 bottom-1/4 hidden lg:block"
          initial={{ opacity: 0, rotate: 8 }}
          animate={isInView ? { opacity: 0.6, rotate: 8 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="handwritten-note text-blood text-sm rotate-6">
            Règle VII appliquée<br/>
            3 fois ce mois<br/>
            <span className="text-xs">- Rapport #47</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommandementsSection;
