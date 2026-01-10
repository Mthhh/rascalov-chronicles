import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { User, Brain, Shield, Eye, MousePointer } from 'lucide-react';
import CharacterModal from './CharacterModal';

import azarovImage from '@/assets/character-azarov.jpg';
import marcoImage from '@/assets/character-marco.jpg';

const EmissairesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);

  const characters = [
    {
      id: 'azarov',
      name: 'AZAROV "VOLK" ZEITSEY',
      codename: 'VOLK',
      title: 'LE STRATÈGE',
      role: 'Petit-fils du fondateur, il est le cerveau froid de l\'expansion.',
      specialty: 'Ingénierie financière, manipulation psychologique, négociations sous pression, analyse comportementale, gestion de crise.',
      philosophy: '"Un ennemi mort est un gâchis de ressources. Un ennemi endetté est un outil."',
      fsbNote: 'Sujet extrêmement dangereux. Azarov n\'utilise la violence que lorsque la logique a échoué. Sa véritable dangerosité réside dans sa patience infinie et sa capacité à retourner n\'importe quelle situation à son avantage. Suspect dans 14 affaires non résolues. Aucune preuve directe.',
      icon: Brain,
      clearance: 'УРОВЕНЬ 5',
      birthYear: '1989',
      birthPlace: 'Saint-Pétersbourg, Russie',
      biography: 'Élevé dans l\'ombre de son grand-père Sergueï Zeitsey, Azarov a été formé dès l\'enfance aux subtilités du pouvoir. Diplômé en économie à l\'Université d\'État de Moscou, il a passé 5 ans à Londres où il a établi des contacts dans la finance internationale. Son retour en Russie en 2018 a marqué le début de la modernisation des opérations familiales. Après la purge de 2023, il a été désigné pour mener l\'Opération Sokol à Los Santos.',
      traits: ['Calculateur', 'Patient', 'Charismatique', 'Impitoyable', 'Visionnaire', 'Polyglotte'],
      sokolRole: 'Commandant en chef de l\'Opération Sokol. Responsable de toutes les décisions stratégiques, des alliances et de l\'expansion territoriale. Supervise directement les négociations avec les acteurs locaux et gère le portefeuille d\'investissements de la famille à Los Santos.',
      image: azarovImage,
    },
    {
      id: 'marco',
      name: 'MARCO "KAIDAN" PETROVSKY',
      codename: 'KAIDAN',
      title: "L'OPÉRATEUR",
      role: 'Ex-unité d\'élite, il est l\'ombre d\'Azarov et le bras armé de la famille.',
      specialty: 'Tactiques de combat rapproché, infiltration, extraction, contre-espionnage, sécurité rapprochée, neutralisation discrète.',
      philosophy: '"Le silence est le bruit le plus terrifiant avant l\'impact."',
      fsbNote: 'Ancien membre du GRU Spetsnaz, radié en 2019 pour insubordination. Loyauté absolue envers la famille Rascalov depuis son recrutement. Marco ne commet pas d\'erreurs — il règle celles des autres. Responsable présumé de 23 disparitions en Europe de l\'Est. Extrêmement dangereux en combat rapproché.',
      icon: Shield,
      clearance: 'УРОВЕНЬ 4',
      birthYear: '1985',
      birthPlace: 'Volgograd, Russie',
      biography: 'Issu d\'une famille militaire, Marco a intégré les forces spéciales à 19 ans. Ses états de service incluent des opérations en Tchétchénie, en Géorgie et en Syrie. Après un incident classifié qui a causé sa radiation, il a été approché par la famille Rascalov qui lui a offert un nouveau but. Depuis 7 ans, il sert comme garde du corps personnel d\'Azarov et comme "solutionneur de problèmes" pour l\'organisation.',
      traits: ['Loyal', 'Méthodique', 'Silencieux', 'Létal', 'Observateur', 'Stoïque'],
      sokolRole: 'Chef de la sécurité de l\'Opération Sokol. Responsable de la protection d\'Azarov, de la sécurisation des infrastructures et de la "gestion" des éléments hostiles. Supervise le recrutement et la formation des nouveaux membres.',
      image: marcoImage,
    },
  ];

  return (
    <section
      id="emissaires"
      ref={ref}
      className="relative min-h-screen py-32 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1.5 h-1.5 bg-steel rounded-full" />
            <span className="font-orbitron text-xs text-steel tracking-[0.3em]">
              DOSSIER III
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-steel/30 to-transparent" />
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-medium tracking-wider">
            <span className="text-ivory">LES</span>
            <span className="text-primary ml-4">ÉMISSAIRES</span>
          </h2>
          
          <p className="mt-4 font-orbitron text-xs text-steel tracking-[0.2em]">
            ЭМИССАРЫ — LES PERSONNAGES
          </p>
        </motion.div>

        {/* Click instruction */}
        <motion.div
          className="mb-8 flex items-center gap-2 text-steel/60"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <MousePointer className="w-4 h-4" />
          <span className="font-rajdhani text-sm">Cliquez sur une fiche pour accéder au dossier complet</span>
        </motion.div>

        {/* Character Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {characters.map((char, index) => (
            <motion.div
              key={char.id}
              className="relative cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              onClick={() => setSelectedCharacter(char)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Dossier card */}
              <div className="relative bg-card/50 border border-steel/20 overflow-hidden group-hover:border-blood/40 transition-all duration-300">
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blood/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                
                {/* Top bar */}
                <div className="relative z-10 flex items-center justify-between px-6 py-3 bg-secondary/50 border-b border-steel/20">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-steel group-hover:bg-blood transition-colors" />
                    <span className="font-orbitron text-[10px] text-steel tracking-wider">
                      ДОСЬЕ / DOSSIER
                    </span>
                  </div>
                  <span className="font-orbitron text-[10px] text-steel/60">
                    {char.clearance}
                  </span>
                </div>

                <div className="relative z-10 p-6">
                  {/* Profile header */}
                  <div className="flex gap-6 mb-6">
                    {/* Character Photo */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-32 bg-secondary/50 border border-steel/30 overflow-hidden group-hover:border-blood/40 transition-colors">
                        <motion.img 
                          src={char.image} 
                          alt={char.name}
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-50" />
                      </div>
                      {/* Photo corner clips */}
                      <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-steel/50 group-hover:border-blood/50 transition-colors" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-steel/50 group-hover:border-blood/50 transition-colors" />
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-steel/50 group-hover:border-blood/50 transition-colors" />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-steel/50 group-hover:border-blood/50 transition-colors" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-4 h-4 text-steel/60" />
                        <span className="font-orbitron text-[10px] text-steel">
                          ИДЕНТИФИКАЦИЯ
                        </span>
                      </div>
                      <h3 className="font-cinzel text-xl text-ivory mb-1">
                        {char.name}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-steel/10 border border-steel/30 font-rajdhani text-sm text-steel group-hover:border-blood/30 group-hover:text-blood transition-colors">
                        {char.title}
                      </span>
                    </div>
                  </div>

                  {/* Info fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="font-orbitron text-[10px] text-steel tracking-wider block mb-1">
                        RÔLE
                      </label>
                      <p className="font-rajdhani text-foreground/70">
                        {char.role}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-steel/20">
                      <label className="font-orbitron text-[10px] text-primary/80 tracking-wider block mb-2">
                        PHILOSOPHIE
                      </label>
                      <p className="font-cormorant text-lg text-primary italic">
                        {char.philosophy}
                      </p>
                    </div>
                  </div>

                  {/* FSB Note */}
                  <div className="mt-6 p-4 bg-secondary/30 border border-steel/20 relative">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-4 h-4 text-steel/60" />
                      <span className="font-orbitron text-[10px] text-steel tracking-wider">
                        NOTE DU FSB
                      </span>
                    </div>
                    <p className="font-rajdhani text-sm text-foreground/60 line-clamp-2">
                      {char.fsbNote}
                    </p>
                    
                    {/* Click hint */}
                    <div className="absolute bottom-2 right-2 font-orbitron text-[10px] text-blood/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      VOIR DOSSIER COMPLET →
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="relative z-10 px-6 py-2 bg-secondary/30 border-t border-steel/20 flex justify-between items-center">
                  <span className="font-orbitron text-[10px] text-steel/60">
                    REF: RSC-{char.id.toUpperCase()}-001
                  </span>
                  <span className="font-orbitron text-[10px] text-steel/40">
                    RASCALOV СЕМЬЯ
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Handwritten annotation */}
        <motion.div
          className="absolute -right-4 top-1/2 hidden lg:block"
          initial={{ opacity: 0, rotate: -8 }}
          animate={isInView ? { opacity: 0.6, rotate: -8 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="handwritten-note text-blood text-sm -rotate-3">
            Duo très efficace<br/>
            Surveillance prioritaire<br/>
            <span className="text-xs">- Agent V.</span>
          </div>
        </motion.div>
      </div>

      {/* Character Modal */}
      <CharacterModal
        character={selectedCharacter}
        isOpen={!!selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      />
    </section>
  );
};

export default EmissairesSection;
