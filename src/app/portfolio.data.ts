export interface Project {
  title: string;
  description: string;
  stack: string[];
  url: string;
  visual: string;
  image: string;
  collaboration?: boolean;
}

export interface Skill {
  name: string;
  logo: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'ArchiFlow',
    description: 'archiflowDescription',
    stack: ['React', 'Django REST', 'PostgreSQL', 'Tailwind'],
    url: 'https://github.com/JESSY2023-bit/ARCHIFLOW',
    visual: 'archive',
    image: '/projects/archiflow-dashboard.png',
  },
  {
    title: 'E-KMER Marketplace',
    description: 'ekmerDescription',
    stack: ['React', 'Django', 'Tailwind', 'i18next'],
    url: 'https://github.com/Brayann-hub-cmd',
    visual: 'market',
    image: '/projects/e-kmer-home.png',
    collaboration: true,
  },
  {
    title: 'Portfolio personnel',
    description: 'portfolioDescription',
    stack: ['Angular', 'TypeScript', 'Tailwind CSS'],
    url: 'https://github.com/JESSY2023-bit/My-portfolio',
    visual: 'portfolio',
    image: '/projects/portfolio-home.png',
  },
];

export const SKILLS: Skill[] = [
  { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
];
