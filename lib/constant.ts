import { Github, Linkedin, Mail } from 'lucide-react';

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
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'React',
  'Next.js',
  'NestJS',
  'NodeJS',
  'Nginx',
  'Git',
  'Github Actions',
  'Bash',
  'Tailwind CSS',
];
export const projects = ['thriftshop'];

export const navLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '#about',
    label: 'About',
  },
  {
    href: '#projects',
    label: 'Projects',
  },
  {
    href: '#contact',
    label: 'Contact',
  },
];

export const tabunganWisataData = {
  images: Array.from(
    { length: 4 },
    (_, i) => `/images/tabungan-wisata-${i}.png`
  ),
  link: 'https://tw-front.aththariq.com',
  sourceCode:
    'https://github.com/Frhaanaziz/tabungan-wisata/tree/main/apps/front',
};

export const tabunganWisataAdminData = {
  images: Array.from(
    { length: 6 },
    (_, i) => `/images/tabungan-wisata-admin-${i}.png`
  ),
  link: 'https://tw-admin.aththariq.com',
  sourceCode:
    'https://github.com/Frhaanaziz/tabungan-wisata/tree/main/apps/admin',
};
export const tabunganWisataDashboardData = {
  images: Array.from(
    { length: 5 },
    (_, i) => `/images/tabungan-wisata-dashboard-${i}.png`
  ),
  link: 'https://tw-student.aththariq.com',
  sourceCode:
    'https://github.com/Frhaanaziz/tabungan-wisata/tree/main/apps/student',
};

export const thriftshopData = {
  images: Array.from({ length: 1 }, (_, i) => `/images/thriftshop-${i}.png`),
  link: 'https://thriftshop.aththariq.com',
  sourceCode: 'https://github.com/Frhaanaziz/thriftshop',
};
