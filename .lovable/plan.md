

## Adaptation du Lore Rascalov - Contenu Narratif

Modification uniquement textuelle de 3 fichiers, sans toucher au design ni a la structure.

---

### 1. HeritageSection.tsx - Refonte complete du contenu narratif

**Citation (blockquote)** : Remplacer le texte actuel par :
> "La Russie nous a donne la naissance. La survie nous a donne la discipline. Los Santos nous donnera le droit de redevenir ce que nous etions."

**Carte "01 - LES ORIGINES"** : Adapter le texte pour parler de la naissance dans les chantiers navals de Saint-Petersbourg, fondee par Sergueï Mikhailov dans le chaos de l'apres-URSS. Domination des flux logistiques de la Baltique. Puis les pressions politiques et la decision d'envoyer une cellule a Los Santos.

**Carte "02 - L'EXPANSION"** : Renommer en **"L'IMPLANTATION"**. Nouveau texte sur l'arrivee a Los Santos sans ressources, les petites operations (braquages, vols cibles, protection), la structuration progressive de la cellule, et l'emergence de MM Global Export comme premier pilier.

**Texte de conclusion en bas** : Remplacer par :
- "La Rascalov n'est pas encore pleinement implantee a Los Santos."
- "ELLE EST EN TRAIN DE RENAITRE."

**Date** de la carte 02 : garder le texte russe mais adapter si necessaire.

---

### 2. SokolSection.tsx - Ajout du contexte d'implantation

**Bloc "LA VISION"** : Ajouter avant le texte existant un nouveau paragraphe :
> "Le Projet Sokol est actuellement en phase d'implantation initiale. La cellule presente a Los Santos construit progressivement les fondations necessaires a l'etablissement complet de l'infrastructure Rascalov."

Le reste du contenu Sokol (phases, statuts, objectif final) reste identique.

---

### 3. FacadeSection.tsx - Ajout du contexte MM Global Export

**Sous-titre** : Changer "Pilier Logistique Officiel de la Famille" en "Premiere Infrastructure Logistique de la Cellule"

**Paragraphe principal** : Ajouter la mention que MM Global Export constitue la premiere etape de l'implantation logistique de la cellule Rascalov a Los Santos et evoluera progressivement avec l'expansion de ses operations.

---

### Details techniques

**Fichiers modifies :**
- `src/components/HeritageSection.tsx` - Textes des cartes, citation, conclusion
- `src/components/SokolSection.tsx` - Ajout paragraphe dans le bloc Vision
- `src/components/FacadeSection.tsx` - Sous-titre + paragraphe additionnel

**Elements preserves (aucune modification) :**
- Design, animations, couleurs, polices
- Structure HTML/JSX et classes CSS
- Hierarchie, Commandements, Protocole
- Projet Sokol (phases et statuts)
- Images et assets
- Navigation, Loading Screen, tous les autres composants

