import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Brain, Shield, Target, AlertTriangle, FileText, MapPin, Calendar } from 'lucide-react';

interface CharacterData {
  id: string;
  name: string;
  title: string;
  codename: string;
  role: string;
  specialty: string;
  philosophy: string;
  fsbNote: string;
  clearance: string;
  birthYear: string;
  birthPlace: string;
  biography: string;
  traits: string[];
  sokolRole: string;
  image?: string;
}

interface CharacterModalProps {
  character: CharacterData | null;
  isOpen: boolean;
  onClose: () => void;
}

const CharacterModal = ({ character, isOpen, onClose }: CharacterModalProps) => {
  if (!character) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-full bg-card border border-steel/30 overflow-auto">
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-secondary/80 backdrop-blur-sm border-b border-steel/20">
                <div className="flex items-center gap-4">
                  <FileText className="w-5 h-5 text-blood" />
                  <span className="font-orbitron text-xs text-blood tracking-[0.3em]">
                    FICHE FSB — ДЕЛО №{character.id.toUpperCase()}-001
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 border border-steel/30 flex items-center justify-center hover:border-blood/50 hover:bg-blood/10 transition-all"
                >
                  <X className="w-4 h-4 text-steel" />
                </button>
              </div>

              <div className="p-6 md:p-8">
                {/* Top section - Photo & Basic Info */}
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  {/* Character Photo */}
                  <div className="flex-shrink-0">
                    <div className="relative w-48 h-64 bg-secondary/50 border border-steel/30 overflow-hidden group">
                      {character.image ? (
                        <motion.img 
                          src={character.image}
                          alt={character.name}
                          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                      ) : character.id === 'mikhail' ? (
                        <Brain className="w-20 h-20 text-steel/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      ) : (
                        <Shield className="w-20 h-20 text-steel/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      )}
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                      {/* Stamp */}
                      <div className="absolute top-4 right-4 text-blood/40 font-orbitron text-xs tracking-widest rotate-12 border border-blood/40 px-2 py-1 bg-background/30 backdrop-blur-sm">
                        СЕКРЕТНО
                      </div>
                      {/* Corners */}
                      <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-blood/50" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-blood/50" />
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-blood/50" />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-blood/50" />
                    </div>
                  </div>

                  {/* Basic info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4 text-steel" />
                      <span className="font-orbitron text-[10px] text-steel tracking-wider">
                        ИДЕНТИФИКАЦИЯ / IDENTIFICATION
                      </span>
                    </div>
                    
                    <h2 className="font-cinzel text-3xl md:text-4xl text-ivory mb-2">
                      {character.name}
                    </h2>
                    
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="px-3 py-1 bg-blood/20 border border-blood/40 font-rajdhani text-sm text-blood">
                        {character.codename}
                      </span>
                      <span className="px-3 py-1 bg-steel/10 border border-steel/30 font-rajdhani text-sm text-steel">
                        {character.title}
                      </span>
                      <span className="px-3 py-1 bg-steel/10 border border-steel/30 font-orbitron text-xs text-steel">
                        {character.clearance}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-steel/60" />
                        <span className="text-foreground/60">Né en {character.birthYear}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-steel/60" />
                        <span className="text-foreground/60">{character.birthPlace}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Biography */}
                <div className="mb-8 p-6 bg-secondary/30 border border-steel/20">
                  <h3 className="font-orbitron text-xs text-steel tracking-wider mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    BIOGRAPHIE
                  </h3>
                  <p className="font-rajdhani text-foreground/70 leading-relaxed">
                    {character.biography}
                  </p>
                </div>

                {/* Two columns */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Traits */}
                  <div className="p-6 bg-secondary/20 border border-steel/20">
                    <h3 className="font-orbitron text-xs text-steel tracking-wider mb-4">
                      TRAITS DE CARACTÈRE
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {character.traits.map((trait, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-card border border-steel/20 font-rajdhani text-sm text-foreground/70"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialty */}
                  <div className="p-6 bg-secondary/20 border border-steel/20">
                    <h3 className="font-orbitron text-xs text-steel tracking-wider mb-4">
                      SPÉCIALITÉS
                    </h3>
                    <p className="font-rajdhani text-foreground/70">
                      {character.specialty}
                    </p>
                  </div>
                </div>

                {/* Sokol Role */}
                <div className="mb-8 p-6 bg-blood/5 border border-blood/20">
                  <h3 className="font-orbitron text-xs text-blood tracking-wider mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    RÔLE DANS L'OPÉRATION SOKOL
                  </h3>
                  <p className="font-rajdhani text-foreground/70 leading-relaxed">
                    {character.sokolRole}
                  </p>
                </div>

                {/* Philosophy */}
                <div className="mb-8 text-center py-8 border-y border-steel/20">
                  <span className="font-orbitron text-[10px] text-steel tracking-wider block mb-3">
                    PHILOSOPHIE PERSONNELLE
                  </span>
                  <p className="font-cormorant text-2xl text-primary italic max-w-2xl mx-auto">
                    {character.philosophy}
                  </p>
                </div>

                {/* FSB Assessment */}
                <div className="p-6 bg-secondary/40 border border-steel/30 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4 text-blood" />
                    <span className="font-orbitron text-xs text-blood tracking-wider">
                      ÉVALUATION FSB — NIVEAU DE MENACE
                    </span>
                  </div>
                  <p className="font-rajdhani text-foreground/70 leading-relaxed">
                    {character.fsbNote}
                  </p>
                  
                  {/* Classified watermark */}
                  <div className="absolute top-4 right-4 text-blood/10 font-orbitron text-4xl tracking-widest rotate-12">
                    СОВЕРШЕННО СЕКРЕТНО
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CharacterModal;
