# 🍷 Gironde Prestige - Estimateur Immobilier de Luxe

Une application Single-Page (SPA) conçue pour la simulation et l'estimation de biens immobiliers de prestige dans la région Bordelaise. 

Ce projet a été réalisé et présenté en tant que Lead Developer dans le cadre d'un module académique (Communication professionnelle) de **Licence 3 MIAGE**. Il met en avant une architecture front-end moderne croisée avec une véritable logique métier (tunnel de conversion, algorithme de valorisation).

🌐 **[Voir la Démo en Ligne](https://msq15.github.io/gironde-prestige/)**

---

## 🚀 Fonctionnalités clés

- **Tunnel d'estimation interactif** : Multi-step form avec conservation de l'état (State Management en Vanilla JS).
- **Algorithme métier de valorisation** : Calcul dynamique du net vendeur croisant une data map (DVF fictive), les surfaces, le type de bien et des surcotes de prestation.
- **Lead Generation Gate** : Capture d'e-mails intentionnistes simulant un vrai pipeline d'agence immobilière.
- **Génération de cartographie** : Intégration de Leaflet.js pour le positionnement sectoriel ciblé du bien.
- **UI/UX Premium** : Design responsive "Glassmorphism", micro-animations Tailwind CSS, et célébration Canvas Confetti.

---

## 🛠️ Stack Technique & Architecture

Le projet est intentionnellement codé en **Vanilla JS** pour prouver une maîtrise des fondamentaux du web et du DOM sans dépendre d'un framework lourd comme React pour un besoin statique.

- **Frontend** : HTML5 sémantique, CSS3.
- **Framework CSS** : Tailwind CSS (via config locale modulaire).
- **Logique Client** : JavaScript Vanilla (ES6+, DOM Manipulation, Unobtrusive Event Listeners).
- **Cartographie** : API Leaflet.js.
- **Architecture** : Séparation stricte MVC-like (`index.html`, `style.css`, `main.js`).

---

## 🧠 La logique de l'algorithme d'estimation

L'algorithme de calcul (`unlockResults()`) se décompose de la manière suivante :

1. **Extraction de la base** : Récupération du prix au m² moyen selon la zone sélectionnée (ex: Triangle d'or = 6800€/m²).
2. **Calcul Primaire** : `Prix = Surface × Prix m²`
3. **Décote Type** : Application d'un malus (-5%) s'il s'agit d'un appartement au lieu d'une maison individuelle.
4. **Surcote Prestations** : Application d'un bonus cumulatif (+5% par coche) pour les biens possédant piscine, terrasse, pierre de taille, ou parking.
5. **Génération de la Fourchette** : Définition de l'amplitude de négociation (-6% pour la fourchette basse, +6% pour la fourchette haute).

---

## 📥 Installation (Local)

Le projet ne nécessite aucune étape de build complexe.

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/msq15/gironde-prestige.git
   ```
2. Ouvrez le dossier dans votre éditeur (ex: VS Code).
3. Lancez l'application avec l'extension **Live Server** ou ouvrez simplement le fichier `index.html` dans votre navigateur.

---

## 👨‍💻 Auteur

**Mohammed Squalli Houssaini**
- Étudiant en L3 MIAGE (Après un parcours L1/L2 Informatique pure)
- Ouvert aux opportunités en développement (Alternance / Stage).
- 🔗 [Mon profil LinkedIn](https://www.linkedin.com/in/mohammed-squalli-houssaini-miage/)
