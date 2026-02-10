

## Animations narratives "Gang vers Rascalov"

Ajout d'elements visuels et d'animations qui renforcent la progression narrative du gang vers l'organisation Rascalov.

---

### 1. Indicateur de phase persistant (coin de l'ecran)

Un petit badge fixe en bas a gauche de l'ecran qui affiche la phase actuelle selon la section visible : **GANG** / **FAMILLE** / **RASCALOV**. Le badge change de couleur et de texte au scroll avec une animation de transition fluide.

- Phase GANG : texte steel/gris, bordure sobre
- Phase FAMILLE : texte blood/rouge, bordure rouge
- Phase RASCALOV : texte dore, bordure doree, leger glow

---

### 2. Effet "interference/static" sur les sections futures

Les sections liees au futur (Sokol, et elements marques "RASCALOV" ou "20XX" dans la timeline) auront un leger effet de glitch/interference periodique, comme si ces donnees etaient instables ou pas encore confirmees. Un petit flash de scanlines toutes les quelques secondes.

---

### 3. Animation d'entree "dossier declassifie" par section

Chaque section, au moment ou elle entre dans le viewport, aura une breve animation de "tampon" : un flash rouge subtil suivi d'un fade-in du contenu, comme si le dossier venait d'etre ouvert/declassifie.

---

### 4. Progression visuelle des bordures de section

Les sections du debut (Heritage, Timeline) auront des bordures et accents en **steel/gris** (brut, gang). Les sections du milieu (Facade, Emissaires, Hierarchie) passeront progressivement au **blood/rouge** (famille). La section Sokol aura des accents **dores** (objectif final Rascalov). Cela cree une progression chromatique au fil du scroll.

---

### 5. Texte "status" anime dans le footer de chaque section

En bas de chaque section, un petit texte type terminal qui s'affiche en typewriter :
- Heritage : `> STATUT : ACTIF — PHASE GANG`
- Commandements : `> STATUT : EN APPLICATION`  
- Sokol : `> STATUT : EN ATTENTE... PHASE RASCALOV`

---

### Details techniques

**Nouveaux composants :**
- `src/components/PhaseIndicator.tsx` — Badge persistant en bas a gauche
- `src/components/SectionReveal.tsx` — Wrapper d'animation d'entree "declassifie"

**Fichiers modifies :**
- `src/pages/Index.tsx` — Ajout du PhaseIndicator + wrapping sections avec SectionReveal
- `src/index.css` — Ajout keyframes pour l'effet glitch/interference
- `src/components/SokolSection.tsx` — Ajout effet interference periodique
- `src/components/TimelineSection.tsx` — Effet interference sur les cartes "20XX"
- Sections Heritage, Facade, Emissaires, Hierarchie, Commandements, Protocole — Ajout du texte "status" anime en bas de chaque section

**Elements preserves :**
- Tout le design existant, couleurs, polices, structure
- Toutes les animations deja en place
- Le contenu narratif reste identique

