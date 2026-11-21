export type Lang = 'fr' | 'en';
export type Text = Record<Lang, string>;

export interface Project {
  title: string;
  kind: Text;
  summary: Text;
  features: Text[];
  stack: string[];
  url?: string;
  image?: string;
}

export interface FeaturedProject extends Project {
  role?: Text;
  links: { label: Text; url: string }[];
  images: { src: string; alt: string }[];
  shots: 'wide' | 'phones';
}

export interface SkillGroup {
  title: Text;
  context: Text;
  items: string[];
}

export interface Milestone {
  date: Text;
  title: Text;
  place: string;
  branch: boolean;
  head?: boolean;
  details: Text[];
}

export const FEATURED: FeaturedProject[] = [
  {
    title: 'ArchiFlow',
    kind: { fr: 'Projet personnel, version 1.0', en: 'Personal project, version 1.0' },
    summary: {
      fr: 'Gestionnaire d’archives et de documents pour les entreprises : chaque fichier est versionné, classé et accessible seulement aux bonnes personnes.',
      en: 'A document and archive manager for companies: every file is versioned, filed and only reachable by the right people.',
    },
    features: [
      { fr: 'API REST Django sécurisée : JWT avec rotation, limitation des tentatives, fichiers vérifiés et jamais publics', en: 'Secure Django REST API: rotating JWT, rate limiting, verified files never served publicly' },
      { fr: 'Droits fins par document : consulter, modifier, télécharger, gérer l’accès', en: 'Per-document permissions: view, edit, download, manage access' },
      { fr: 'Versions avec empreinte SHA-256 et journal de toutes les actions', en: 'Versioning with SHA-256 checksums and a full activity log' },
      { fr: 'Plus de 200 tests automatisés : Pytest, Vitest et Playwright (bout en bout)', en: '200+ automated tests: Pytest, Vitest and Playwright (end to end)' },
      { fr: 'CI/CD GitHub Actions : lint, scans de sécurité, tests, images Docker, déploiement', en: 'GitHub Actions CI/CD: linting, security scans, tests, Docker images, deployment' },
    ],
    stack: ['React 19', 'Django REST', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Pytest', 'Playwright', 'Tailwind CSS'],
    links: [{ label: { fr: 'Voir le code sur GitHub', en: 'View the code on GitHub' }, url: 'https://github.com/JESSY2023-bit/ARCHIFLOW' }],
    images: [{ src: '/projects/archiflow-dashboard.png', alt: 'Tableau de bord d’ArchiFlow' }],
    shots: 'wide',
  },
  {
    title: 'E-KMER',
    kind: { fr: 'Projet de fin de licence, en équipe de 5', en: 'Final-year team project, 5 developers' },
    summary: {
      fr: 'Marketplace pour acheter et vendre près de chez soi au Cameroun, découpée en trois applications React reliées à une API Django REST : boutique, administration et livraison.',
      en: 'A marketplace to buy and sell locally in Cameroon, split into three React apps connected to a Django REST API: storefront, admin and delivery.',
    },
    role: {
      fr: 'Mon rôle : premier contributeur du tableau de bord admin, créateur de l’application livreur, et intégration front de la boutique.',
      en: 'My role: top contributor to the admin dashboard, creator of the delivery app, and front-end work on the storefront.',
    },
    features: [
      { fr: 'Admin : architecture (layout, barre latérale, routes), couche de services branchée sur l’API, statistiques avec Recharts, pages utilisateurs, produits et ventes, i18n', en: 'Admin: architecture (layout, sidebar, routes), service layer wired to the API, Recharts statistics, users, products and sales pages, i18n' },
      { fr: 'Livreur : tableau de bord du livreur et traduction FR/EN, de zéro', en: 'Delivery: driver dashboard and FR/EN translation, from scratch' },
      { fr: 'Boutique : en-tête et menu responsive, layout commun, pages vendeur, offres populaires', en: 'Storefront: responsive header and menu, shared layout, seller pages, popular offers' },
      { fr: 'Travail en branches, fusions et résolution de conflits avec l’équipe', en: 'Branch-based teamwork, merges and conflict resolution' },
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'DaisyUI', 'Axios', 'Recharts', 'i18next', 'Django REST'],
    links: [
      { label: { fr: 'Boutique', en: 'Storefront' }, url: 'https://github.com/Brayann-hub-cmd/E-kmer' },
      { label: { fr: 'Admin', en: 'Admin' }, url: 'https://github.com/Brayann-hub-cmd/Admin-E-kmer' },
      { label: { fr: 'Livreur', en: 'Delivery' }, url: 'https://github.com/Brayann-hub-cmd/delivery_ekmer' },
    ],
    images: [
      { src: '/projects/e-kmer-home.png', alt: 'Page d’accueil d’E-KMER sur mobile' },
      { src: '/projects/e-kmer-products.png', alt: 'Liste des produits d’E-KMER sur mobile' },
    ],
    shots: 'phones',
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    title: 'Ce portfolio',
    kind: { fr: 'Projet personnel', en: 'Personal project' },
    summary: {
      fr: 'Application Angular 20 bilingue avec thème clair et sombre, construite avec les signals et Tailwind CSS.',
      en: 'Bilingual Angular 20 app with light and dark themes, built with signals and Tailwind CSS.',
    },
    features: [],
    stack: ['Angular 20', 'TypeScript', 'Tailwind CSS'],
    url: 'https://github.com/JESSY2023-bit/My-portfolio',
  },
  {
    title: 'Aliette Shopping',
    kind: { fr: 'Projet académique', en: 'Academic project' },
    summary: {
      fr: 'Boutique de vêtements en ligne : catalogue, panier et passage de commande.',
      en: 'Online clothing store: catalogue, cart and checkout.',
    },
    features: [],
    stack: ['Web', 'E-commerce'],
  },
  {
    title: 'Gestion des requêtes universitaires',
    kind: { fr: 'Projet collaboratif', en: 'Team project' },
    summary: {
      fr: 'Application web pour déposer et suivre les requêtes des étudiants auprès de l’administration.',
      en: 'Web app for students to file requests and track them with the administration.',
    },
    features: [],
    stack: ['Web', 'Travail en équipe'],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: { fr: 'En production, au quotidien', en: 'In production, every day' },
    context: { fr: 'Utilisé en entreprise sur des applications livrées à des clients', en: 'Used at work on applications shipped to clients' },
    items: ['TypeScript', 'NestJS', 'MongoDB', 'Angular', 'API REST', 'Git & pull requests', 'Bitbucket', 'Postman'],
  },
  {
    title: { fr: 'Dans mes projets', en: 'In my projects' },
    context: { fr: 'Mis en œuvre sur ArchiFlow, E-KMER et ce site', en: 'Used on ArchiFlow, E-KMER and this site' },
    items: ['Python', 'Django REST Framework', 'PostgreSQL', 'JWT', 'React', 'Zustand', 'Recharts', 'Tailwind CSS', 'DaisyUI', 'i18next'],
  },
  {
    title: { fr: 'Qualité et DevOps', en: 'Quality and DevOps' },
    context: { fr: 'Mis en place de bout en bout sur ArchiFlow', en: 'Set up end to end on ArchiFlow' },
    items: ['Docker', 'GitHub Actions (CI/CD)', 'Pytest', 'Vitest', 'Playwright', 'Nginx', 'Audit de sécurité'],
  },
  {
    title: { fr: 'Conception', en: 'Design' },
    context: { fr: 'Pour réfléchir avant de coder', en: 'To think before coding' },
    items: ['UML (StarUML)', 'draw.io', 'Figma'],
  },
];

export const MILESTONES: Milestone[] = [
  {
    date: { fr: 'Juil. 2026, aujourd’hui', en: 'Jul 2026, now' },
    title: { fr: 'Stagiaire développeur full-stack', en: 'Full-stack developer intern' },
    place: 'LONDO Technology',
    branch: true,
    head: true,
    details: [
      { fr: 'Développement de fonctionnalités sur des API NestJS / MongoDB utilisées en production', en: 'Building features on NestJS / MongoDB APIs running in production' },
      { fr: 'Contrôles de validation et de conformité des données, traçabilité et audit des actions', en: 'Data validation and compliance checks, action tracking and auditing' },
      { fr: 'Intégration d’API tierces de paiement et fiabilisation de la gestion d’erreurs', en: 'Third-party payment API integration and sturdier error handling' },
      { fr: 'Optimisation de requêtes, correction d’anomalies et diagnostic d’incidents à partir des logs', en: 'Query optimisation, bug fixing and incident diagnosis from server logs' },
      { fr: 'Travail par tickets, pull requests et revue de code en équipe', en: 'Ticket-based work, pull requests and team code review' },
    ],
  },
  {
    date: { fr: '2026', en: '2026' },
    title: { fr: 'Licence en Génie Logiciel', en: 'Bachelor’s in Software Engineering' },
    place: 'IUT de Douala',
    branch: false,
    details: [
      { fr: 'Projet de fin d’études : E-KMER, marketplace en équipe de 5', en: 'Final project: E-KMER, a marketplace built by a team of 5' },
    ],
  },
  {
    date: { fr: 'Juin 2026', en: 'June 2026' },
    title: { fr: 'ArchiFlow, du premier commit à la v1.0', en: 'ArchiFlow, from first commit to v1.0' },
    place: 'GitHub',
    branch: false,
    details: [],
  },
  {
    date: { fr: 'Fév. – juin 2025', en: 'Feb – June 2025' },
    title: { fr: 'Stagiaire, cellule informatique', en: 'IT department intern' },
    place: 'NETCORE by Green Energy',
    branch: true,
    details: [
      { fr: 'Support et activités de la cellule informatique, mise en pratique du développement', en: 'IT support and department work, applying development skills' },
    ],
  },
  {
    date: { fr: '2025', en: '2025' },
    title: { fr: 'DUT', en: 'Technology diploma (DUT)' },
    place: 'IUT de Douala',
    branch: false,
    details: [],
  },
  {
    date: { fr: '2023', en: '2023' },
    title: { fr: 'Advanced Level', en: 'Advanced Level' },
    place: 'Divine International College',
    branch: false,
    details: [],
  },
];

/** Rôles affichés en rotation dans l'en-tête. */
export const ROLES: Text[] = [
  { fr: 'Développeur full-stack', en: 'Full-stack developer' },
  { fr: 'Développeur back-end NestJS', en: 'NestJS back-end developer' },
  { fr: 'Concepteur d’API REST', en: 'REST API builder' },
];

/** Bandeau défilant sous l'en-tête : uniquement des technologies réellement utilisées. */
export const STACK_STRIP: string[] = [
  'TypeScript', 'NestJS', 'MongoDB', 'Angular', 'Python', 'Django REST',
  'PostgreSQL', 'React', 'Docker', 'GitHub Actions', 'Playwright', 'Tailwind CSS', 'Git',
];
