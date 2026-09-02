# Portfolio personnel — Jessy Odriv

Portfolio web personnel de **Jessy Odriv**, développeur Full-Stack et étudiant en Génie
Logiciel. Le site présente mes compétences, mes projets, mon expérience actuelle et les
moyens de me contacter.

## Aperçu

Le portfolio est une application Angular moderne, responsive et inspirée d'une maquette
à thème sombre. Il propose une navigation fluide sur une page unique, un thème clair et
sombre, ainsi qu'une interface bilingue français/anglais.

## Fonctionnalités

- Design responsive adapté aux écrans desktop, tablette et mobile.
- En-tête fixe avec navigation vers les différentes sections.
- Menu hamburger mobile ouvrable et refermable au clic.
- Traduction complète de l'interface en français et en anglais.
- Fichiers de traduction centralisés dans `src/assets/i18n/fr.json` et `en.json`.
- Bascule entre thème sombre et thème clair.
- Présentation des compétences avec les logos des technologies.
- Cartes de projets avec captures d'écran et liens vers GitHub.
- Section d'expérience professionnelle basée sur le stage actuel chez LONDO Technology.
- Liens directs vers GitHub, LinkedIn et l'adresse email.
- Téléchargement du CV au format PDF.

## Projets présentés

### ArchiFlow

Plateforme de gestion documentaire avec authentification, gestion des rôles, archivage,
versions et tableau de bord.

**Technologies :** React, Django REST, PostgreSQL, Tailwind CSS.

### E-KMER Marketplace

Contribution à une marketplace collaborative en cours de développement. Le projet est
réparti entre plusieurs applications dédiées au client, à l'administration, à la livraison
et au backend Django REST.

**Technologies :** React, Django, Tailwind CSS, i18next.

### Portfolio personnel

Ce portfolio lui-même, construit à partir d'Angular, TypeScript et Tailwind CSS.

## Technologies

- [Angular](https://angular.dev/) 20
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [RxJS](https://rxjs.dev/)
- Angular `HttpClient` pour le chargement des traductions JSON
- Devicon pour les logos des technologies

## Prérequis

- Node.js 20 ou version compatible avec Angular 20
- npm

## Installation

```bash
git clone https://github.com/JESSY2023-bit/My-portfolio.git
cd My-portfolio
npm install
```

## Développement local

Pour démarrer le serveur de développement :

```bash
npm start
```

L'application est ensuite disponible à l'adresse `http://localhost:4200/`.

## Scripts disponibles

| Commande | Description |
| --- | --- |
| `npm start` | Lance le serveur Angular de développement |
| `npm run build` | Génère la version de production |
| `npm run watch` | Reconstruit l'application à chaque modification |
| `npm test` | Lance les tests Angular configurés |

## Organisation du code

```text
src/
├── app/
│   ├── app.ts                # Composant principal et état de l'interface
│   ├── app.html              # Structure des sections du portfolio
│   ├── app.css               # Styles spécifiques au portfolio
│   ├── app.config.ts         # Configuration Angular
│   ├── portfolio.data.ts     # Données des projets et compétences
│   └── translation.service.ts # Service de traduction
├── assets/
│   └── i18n/
│       ├── fr.json           # Traductions françaises
│       └── en.json           # Traductions anglaises
└── styles.css                # Styles globaux et configuration Tailwind

public/
├── projects/                 # Captures des projets
├── avatar-3d.png             # Avatar utilisé dans la section d'accueil
└── CV_Jessy_Odriv.pdf        # CV téléchargeable
```

## Contact

- **GitHub :** [JESSY2023-bit](https://github.com/JESSY2023-bit)
- **LinkedIn :** [Jessy Odriv](https://linkedin.com/in/jessy-odriv-aba2ba315)
- **Email :** [jessydjk.11@gmail.com](mailto:jessydjk.11@gmail.com)

## Licence

Ce dépôt correspond à un portfolio personnel. Le contenu, les images et le CV sont
destinés à cet usage et ne doivent pas être réutilisés sans autorisation.
