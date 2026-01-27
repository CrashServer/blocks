# Blocks - Guide d'utilisation

Bienvenue dans **Blocks**, un logiciel de modélisation 3D basé sur des blocs. Ce guide vous accompagnera dans la découverte de toutes les fonctionnalités de l'application.

---

## Table des matières

1. [Présentation générale](#présentation-générale)
2. [Navigation dans la scène](#navigation-dans-la-scène)
3. [Les outils](#les-outils)
4. [Les types de blocs](#les-types-de-blocs)
5. [Couleurs et effets lumineux](#couleurs-et-effets-lumineux)
6. [Système de calques](#système-de-calques)
7. [Animation](#animation)
8. [Rendu stylisé](#rendu-stylisé)
9. [Sauvegarde et exportation](#sauvegarde-et-exportation)
10. [Raccourcis clavier](#raccourcis-clavier)
11. [Astuces](#astuces)

---

## Présentation générale

Blocks est un éditeur de modèles 3D qui fonctionne sur le principe de placement de blocs sur une grille. Vous pouvez créer des structures, des bâtiments, des véhicules ou tout autre objet en assemblant différentes formes de blocs.

### L'interface

L'interface se compose de plusieurs zones :

- **Barre de menu supérieure** : Nouveau projet, Sauvegarde, Chargement, Export, Annuler/Rétablir
- **Barre d'outils à gauche** : Outils de création et palette de blocs
- **Panneau droit** : Vue, couleurs, effets lumineux, calques et propriétés
- **Timeline en bas** : Système d'animation (masquable)
- **Barre d'état** : Position de la grille, nombre de blocs, aide contextuelle

---

## Navigation dans la scène

### Contrôles de la caméra

| Action | Contrôle |
|--------|----------|
| **Orbiter** (rotation autour de la scène) | Clic droit + glisser |
| **Zoom** | Molette de la souris |
| **Pan** (déplacement latéral) | Clic molette + glisser |

### Vues prédéfinies

Le panneau droit contient des boutons de vue rapide :

- **F** : Vue de face
- **B** : Vue arrière
- **L** : Vue gauche
- **R** : Vue droite
- **T** : Vue du dessus
- **3D** : Vue isométrique

Vous pouvez également **sauvegarder vos propres vues** en cliquant sur "Save View". Vos vues personnalisées apparaîtront en dessous et pourront être supprimées avec le bouton "×".

---

## Les outils

La barre d'outils à gauche propose 6 outils principaux, accessibles par clic ou par les touches **1 à 6** :

### 1. Placer (+)
Place un bloc à l'endroit visé. Le bloc fantôme (transparent) vous montre où le bloc sera placé.

**Astuces** :
- Maintenez **Shift** et cliquez pour tracer une ligne de blocs jusqu'au dernier bloc placé
- Le bloc se place sur la face du bloc existant que vous visez

### 2. Supprimer (−)
Supprime le bloc sur lequel vous cliquez.

**Alternative** : Clic molette supprime également un bloc, quel que soit l'outil actif.

### 3. Sélectionner (◻)
Permet de sélectionner un ou plusieurs blocs pour les modifier.

- **Clic simple** : Sélectionne un seul bloc
- **Ctrl + Clic** : Ajoute/retire un bloc de la sélection
- **Shift + Clic** : Sélection par zone rectangulaire

Une fois sélectionné, un bloc affiche ses propriétés dans le panneau droit et peut être déplacé avec les flèches directionnelles.

### 4. Peindre (🖌)
Change la couleur des blocs existants.

Deux modes disponibles :
- **Face** : Peint uniquement la face cliquée
- **Block** : Peint tout le bloc

### 5. Pipette (💉)
Récupère la couleur du bloc cliqué et l'applique comme couleur courante.

### 6. Forme (◍)
Outil de création de formes en 3D. Plusieurs formes sont disponibles :

| Forme | Description |
|-------|-------------|
| **Sphère** (●) | Sphère remplie de blocs |
| **Cube plein** (■) | Cube rempli de blocs |
| **Cube creux** (□) | Cube avec seulement les faces extérieures |
| **Cylindre** (◯) | Cylindre rempli |
| **Disque** (◉) | Disque plat |
| **Cercle** (○) | Cercle vide (anneau) |
| **Dôme** (◠) | Demi-sphère |
| **Ligne 3D** (╱) | Ligne de blocs entre deux points |
| **Mur** (▭) | Mur rectangulaire |

Pour utiliser : cliquez pour définir le centre, puis déplacez la souris pour ajuster la taille et cliquez à nouveau pour valider.

### Rotation

Le bouton **↻** (ou touche **R**) fait pivoter le bloc courant de 90° avant de le placer.

### Miroir

Les boutons **X**, **Y**, **Z** permettent de dupliquer les blocs sélectionnés en miroir sur l'axe choisi.

---

## Les types de blocs

La palette de blocs est organisée par catégories. Utilisez la **barre de recherche** pour trouver rapidement un bloc.

### Catégories disponibles

| Catégorie | Description |
|-----------|-------------|
| **Basic** | Cubes, dalles, quarts, plateformes |
| **Pillars** | Piliers de différentes tailles |
| **Beams** | Poutres horizontales |
| **Walls** | Murs, panneaux, coins |
| **Wedges** | Formes inclinées et pentes |
| **Triangles** | Prismes triangulaires, tétraèdres |
| **Stairs** | Escaliers et marches |
| **Shapes** | Cylindres, sphères, cônes, dômes |
| **Arches** | Arcs de différents styles |
| **Pipes** | Tuyaux et coudes |
| **Decorative** | Croix, cadres, clôtures, balustrades |
| **Details** | Corniches, gouttières, encadrements |
| **Architectural** | Colonnes, cheminées, contreforts |
| **Covers** | Auvents, pergolas, bâches |
| **Furniture** | Bancs, tables, chaises, échelles |
| **Storage** | Caisses, palettes, armoires |
| **Industrial** | Réservoirs, vannes, grilles |
| **Electrical** | Conduits, câbles, boîtiers électriques |
| **Natural** | Rochers, buissons, troncs |
| **Modern** | Climatiseurs, panneaux solaires, antennes |
| **Extra Shapes** | Hexagones, cristaux, formes arrondies |
| **Ramps** | Rampes droites et courbes |
| **Roofs** | Toits, faîtages, pignons |
| **Channels** | Canaux, grilles d'évacuation |
| **Medieval** | Torches, chaînes, boucliers, bannières |
| **Vehicles** | Roues, ailes, hélices |
| **Oil & Gas** | Derricks, pompes, pipelines |

---

## Couleurs et effets lumineux

### Palette de couleurs

- **Sélecteur de couleur** : Cliquez sur le carré coloré pour choisir n'importe quelle couleur
- **Palette rapide** : Couleurs prédéfinies pour un accès rapide

### Effets lumineux (Glow/Emissive)

Rendez vos blocs lumineux avec l'option "Emissive" :

1. Cochez **Enable Glow**
2. Choisissez la **couleur de lueur**
3. Réglez l'**intensité** (0.1 à 5.0)
4. Réglez le **rayon** d'effet (1 à 10)

Les blocs émissifs brillent dans la scène et peuvent illuminer les blocs environnants lors du "bake" de lumière.

---

## Système de calques

Les calques permettent d'organiser votre création en groupes séparés.

### Utilisation

- **+ (Ajouter)** : Crée un nouveau calque
- **Visibilité** (œil) : Masque/affiche tous les blocs du calque
- **Sélection** : Le calque actif (surligné) reçoit les nouveaux blocs

Les calques sont utiles pour :
- Travailler sur différentes parties d'un modèle séparément
- Masquer temporairement des éléments pour mieux voir
- Organiser des éléments complexes

---

## Animation

Le système de timeline permet de créer des animations par images-clés (keyframes).

### Créer une animation

1. Cliquez sur **+ Anim** pour créer une nouvelle animation
2. Nommez votre animation dans le menu déroulant
3. Sélectionnez le(s) bloc(s) à animer

### Ajouter des images-clés

1. Positionnez le curseur de temps (scrubber) à l'instant voulu
2. Déplacez/modifiez le bloc sélectionné
3. Appuyez sur **K** (ou **+**) pour ajouter une image-clé

### Lecture

| Bouton | Action |
|--------|--------|
| **▶** | Lecture / Pause (Espace) |
| **■** | Stop (retour au début) |
| **Loop** | Répéter l'animation |
| **Vitesse** | 0.25x à 4x |

### Paramètres

- **Duration** : Durée totale de l'animation en millisecondes
- Les marqueurs sur la timeline indiquent les images-clés existantes

---

## Rendu stylisé

La section "Stylized Render" permet de visualiser votre création avec différents styles artistiques, parfaits pour l'export d'images.

### Activer le rendu stylisé

Cochez **Enable Stylized View** pour activer la superposition du rendu.

### Styles disponibles

| Style | Description |
|-------|-------------|
| **Clean** | Lignes nettes et remplissages unis |
| **Sketch** | Style croquis avec traits tremblants et texture papier |
| **Ink** | Encre avec traits d'épaisseur variable |
| **Cross-Hatch** | Hachures pour les ombrages |
| **Blueprint** | Style plan technique avec grille |
| **Comic** | Style bande dessinée avec trames |

### Options

- **Invert Colors** : Inverse les couleurs (fond noir, traits blancs)
- **Grayscale** : Rendu en niveaux de gris
- **Show Fills** : Affiche/masque les remplissages de faces
- **Threshold** : Seuil pour le contraste noir/blanc
- **Line Width** : Épaisseur des traits

### Export

- **Save PNG** : Sauvegarde l'image courante
- **Export SVG** : Exporte en format vectoriel (idéal pour impression grande taille)

### Aplatir les blocs

Le bouton **Flatten Blocks** fusionne les blocs qui se touchent en un seul mesh. Cela :
- Simplifie la géométrie
- Supprime les faces internes
- Crée des contours plus nets pour l'export

**Attention** : Cette opération est irréversible !

---

## Sauvegarde et exportation

### Barre de menu

| Bouton | Action |
|--------|--------|
| **New** | Nouveau projet (efface tout) |
| **Save** | Sauvegarde au format .blocks (JSON) |
| **Load** | Charge un fichier .blocks |
| **Clear** | Efface tous les blocs |
| **Templates** | Parcourir les modèles prédéfinis |

### Export 3D

Le bouton **Export** ouvre les options d'exportation :

#### Format
- **GLB** (binaire) : Format compact, recommandé
- **GLTF** (JSON) : Format texte, lisible

#### Optimisations

| Option | Description |
|--------|-------------|
| **Cull hidden faces** | Supprime les faces entre blocs adjacents |
| **Merge adjacent cubes** | Fusionne les cubes de même couleur |
| **Batch by material** | Groupe par couleur (moins d'appels de rendu) |
| **Deduplicate vertices** | Fusionne les sommets en double |
| **Merge all into single mesh** | Combine tout en un seul mesh |
| **Use GPU instancing** | Optimisation pour beaucoup de blocs identiques |

#### Inclure

- **Animations** : Exporte les animations créées
- **Baked lighting texture** : Inclut l'éclairage précalculé

### Bake de lumière

Le bouton **Bake Light** précalcule l'éclairage ambiant :
- Crée des ombres douces dans les recoins
- Ajoute de l'occlusion ambiante
- Prend en compte les blocs émissifs

Utilisez **Clear Bake** pour revenir à l'éclairage par défaut.

---

## Raccourcis clavier

### Outils

| Touche | Action |
|--------|--------|
| **1** | Outil Placer |
| **2** | Outil Supprimer |
| **3** | Outil Sélectionner |
| **4** | Outil Peindre |
| **5** | Outil Pipette |
| **6** | Outil Forme |
| **R** | Rotation du bloc (90°) |

### Édition

| Touche | Action |
|--------|--------|
| **Ctrl + Z** | Annuler |
| **Ctrl + Y** | Rétablir |
| **Ctrl + C** | Copier la sélection |
| **Ctrl + V** | Coller |
| **Suppr / Backspace** | Supprimer la sélection |

### Déplacement de la sélection

| Touche | Action |
|--------|--------|
| **Flèche Haut** | Déplacer vers -Z |
| **Flèche Bas** | Déplacer vers +Z |
| **Flèche Gauche** | Déplacer vers -X |
| **Flèche Droite** | Déplacer vers +X |
| **Page Haut** | Déplacer vers +Y (monter) |
| **Page Bas** | Déplacer vers -Y (descendre) |

### Animation

| Touche | Action |
|--------|--------|
| **Espace** | Lecture / Pause |
| **K** ou **+** | Ajouter une image-clé |
| **-** | Supprimer l'image-clé |

### Souris

| Action | Contrôle |
|--------|----------|
| **Clic gauche** | Action de l'outil courant |
| **Shift + Clic gauche** | Tracer une ligne / sélection rectangle |
| **Ctrl + Clic gauche** | Ajouter/retirer de la sélection |
| **Clic molette** | Supprimer un bloc |
| **Clic droit + glisser** | Orbiter la caméra |
| **Molette** | Zoom |

---

## Astuces

### Construction efficace

1. **Commencez simple** : Placez d'abord la structure de base avec des cubes, puis affinez avec des formes détaillées.

2. **Utilisez les calques** : Séparez le sol, les murs et le toit sur différents calques pour travailler plus facilement.

3. **Tracez des lignes** : Maintenez Shift pour tracer rapidement des murs ou des rangées de blocs.

4. **Copiez vos structures** : Sélectionnez un groupe de blocs, copiez (Ctrl+C) et collez (Ctrl+V) pour dupliquer.

### Performance

- Le logiciel sauvegarde automatiquement votre travail dans le navigateur
- Pour les grandes scènes, masquez les calques non utilisés
- L'option "Flatten Blocks" simplifie la géométrie pour l'export

### Export pour l'impression

1. Activez le rendu stylisé en mode **Clean** ou **Ink**
2. Ajustez l'épaisseur des lignes
3. Exportez en **SVG** pour une qualité vectorielle

### Export pour jeux/3D

1. Activez toutes les optimisations dans le dialogue d'export
2. Le format **GLB** est le plus compatible
3. Le "Bake Light" ajoute de la profondeur sans coût de performance

---

## Support

Ce logiciel est en développement actif. N'hésitez pas à expérimenter avec toutes les fonctionnalités !

---

*Guide rédigé pour Blocks v0.1.0*
