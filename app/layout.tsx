import { Metadata } from 'next';
import { ReactNode } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: 'Farhan Aziz Ath Thariq | Fullstack Web Developer',
      template: '%s | Farhan Aziz Ath Thariq',
    },
    description:
      'A Full Stack Developer crafting comprehensive web solutions by seamlessly integrating robust Frontend designs with powerful Backends',
    keywords: [
      'fullstack developer portfolio',
      'fullstack developer website',
      'fullstack web developer portfolio',
      'portfolio website fullstack developer',
      'fullstack developer projects',
      'fullstack dev portfolio examples',
      'fullstack developer resume website',
      'fullstack developer react portfolio',
      'fullstack developer portfolio website ideas',
      'fullstack developer personal website',
      'fullstack developer about me website',
      'fullstack developer contact website',
    ],
    metadataBase: new URL('https://aththariq.com'),
    alternates: {
      canonical: '/en',
      languages: {
        id: '/id',
        en: '/en',
        ja: '/ja',
      },
    },
    openGraph: {
      type: 'website',
      description:
        'A Full Stack Developer crafting comprehensive web solutions by seamlessly integrating robust Frontend designs with powerful Backends',
      url: 'https://aththariq.com',
      siteName: 'Farhan Aziz Ath Thariq | Fullstack Web Developer',
      images: [
        {
          url: 'https://aththariq.com/images/avatar.jpg',
          width: 2616,
          height: 2616,
          alt: 'Farhan',
        },
      ],
    },
  };
}

const RootLayoutProps = ({ children }: { children: ReactNode }) => children;

export default RootLayoutProps;
