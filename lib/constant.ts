import { Github, Linkedin, Mail } from 'lucide-react';

export const backendUrl = process.env.BACKEND_URL!;

export const avatarUrl = '/images/avatar.jpg';
export const contactNavigation = [
  {
    name: 'GitHub',
    href: 'https://github.com/Frhaanaziz',
    icon: Github,
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/farhan-aziz-ath-thariq-4283b5240/',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:farhan@aththariq.com',
    icon: Mail,
  },
];
export const skills = [
  'Javascript',
  'Typescript',
  'React',
  'Nextjs',
  'Git',
  'Github Actions',
  'Bash',
  'Tailwind',
  'Cypress E2E',
];
