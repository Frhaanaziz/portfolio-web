import ProjectPageCarousel from '@/components/ProjectPageCarousel';
import RichText from '@/components/RichText';
import { buttonVariants } from '@/components/ui/button';
import {
  tabunganWisataAdminData,
  tabunganWisataDashboardData,
  tabunganWisataData,
  thriftshopData,
} from '@/lib/constant';
import { cn } from '@/lib/utils';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';

const CaseStudyProjectPage = ({
  params: { locale, project },
}: {
  params: { locale: string; project: string };
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('CSProject');

  const projects = {
    thriftshop: {
      name: 'Thriftshop',
      images: thriftshopData.images,
      link: thriftshopData.link,
      sourceCode: thriftshopData.sourceCode,
      description: t.raw('thriftshop-overview'),
      tools: [
        'Typescript',
        'React',
        'Next.js',
        'Supabase',
        'Shadcn UI',
        'Tailwind CSS',
      ],
    },
    'tabungan-wisata': {
      name: 'Tabungan Wisata',
      images: tabunganWisataData.images,
      link: tabunganWisataData.link,
      sourceCode: tabunganWisataData.sourceCode,
      description: t.raw('tabungan-wisata-overview'),
      tools: [
        'Typescript',
        'React',
        'Next.js',
        'Sentry',
        'Tailwind CSS',
        'Shadcn UI',
      ],
    },
    'tabungan-wisata-dashboard': {
      name: 'Tabungan Wisata Dashboard',
      images: tabunganWisataDashboardData.images,
      link: tabunganWisataDashboardData.link,
      sourceCode: tabunganWisataDashboardData.sourceCode,
      description: t.raw('tabungan-wisata-dashboard-overview'),
      tools: [
        'Typescript',
        'React',
        'Next.js',
        'Sentry',
        'TRPC',
        'Tanstack Query',
        'Next Auth',
        'Socket.io',
        'React Hook Form',
        'Zod',
        'Tailwind CSS',
        'Shadcn UI',
      ],
    },
    'tabungan-wisata-admin': {
      name: 'Tabungan Wisata Admin',
      images: tabunganWisataAdminData.images,
      link: tabunganWisataAdminData.link,
      sourceCode: tabunganWisataAdminData.sourceCode,
      description: t.raw('tabungan-wisata-admin-overview'),
      tools: [
        'Typescript',
        'React',
        'Next.js',
        'Tiptap',
        'Recharts',
        'TRPC',
        'Tanstack Query',
        'Next Auth',
        'Socket.io',
        'React Hook Form',
        'Zod',
        'Tailwind CSS',
        'Shadcn UI',
      ],
    },
  };

  // @ts-ignore
  const projectData = projects[project];
  if (!projectData) notFound();

  return (
    <main>
      <section className="min-h-[calc(100vh-4rem)]  py-36 flex flex-col gap-10 justify-center items-center container max-w-[1000px]">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text tracking-[-0.02em] text-transparent drop-shadow-sm text-center capitalize">
          {projectData.name}
        </h1>
        <Balancer
          as={'p'}
          preferNative={false}
          className="text-center md:text-lg lg:text-xl xl:mx-52 text-muted-foreground"
        >
          {t('mainDescription', { project: projectData.name })}
        </Balancer>
        <Link
          className={buttonVariants({ size: 'lg' })}
          target="_blank"
          href={projectData.link}
        >
          {t('projectLinkLabel')}
        </Link>
      </section>

      <section className="container pb-20  max-w-[1100px]">
        <ProjectPageCarousel images={projectData.images} />

        <h2 className="text-xl md:text-2xl font-semibold mt-16">
          {t('overviewHeading')}
        </h2>

        <RichText content={projectData.description} />

        <h2 className="text-xl md:text-2xl font-semibold mt-16">
          {t('toolsHeading')}
        </h2>
        <ul className="flex flex-wrap gap-4 mt-7">
          {projectData.tools.map((tool: string) => (
            <li
              key={tool}
              className="bg-primary text-primary-foreground text-sm font-medium py-2 px-3 rounded-md"
            >
              {tool}
            </li>
          ))}
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mt-16">
          {t('liveHeading')}
        </h2>
        <div className="mt-7 flex gap-5">
          <Link
            className={cn(buttonVariants({ size: 'lg' }), '')}
            target="_blank"
            href={projectData.link}
          >
            {t('projectLinkLabel')}
          </Link>
          <Link
            className={buttonVariants({ size: 'lg', variant: 'outline' })}
            href={projectData.sourceCode}
            target="_blank"
          >
            {t('sourceCodeHeading')}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CaseStudyProjectPage;
