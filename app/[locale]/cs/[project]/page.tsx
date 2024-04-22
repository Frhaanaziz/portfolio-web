import ImageTheme from '@/components/ImageTheme';
import RichText from '@/components/RichText';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { buttonVariants } from '@/components/ui/button';
import { cn, toTitleCase } from '@/lib/utils';
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
      image: '/images/thriftshop-dark.png',
      link: 'https://thriftshop.aththariq.com/',
      sourceCode: 'https://github.com/Frhaanaziz/thriftshop',
      description: `<p>Thrift Shop is an e-commerce platform that allows users to create their own online store and sell secondhand items like a thrift shop. Users can register an account, create a store profile, and upload their products.</p>

      <p>Main features:</p>
      
      <ul>
      <li>User account registration</li>
      
      <li>Store profile creation</li>
      
      <li>Store panel to manage products</li>
      
      <li>Product upload form with description details, photos, category, stock, and price</li>
      
      <li>Product search and filtering system</li>
      
      <li>Shopping cart</li>
      
      <li>The store panel allows sellers to manage their products by adding stock and updating details.</li>
      
      <li>Buyers can browse and search for products from various stores and add them to the shopping cart.</li>
      </ul>`,
      tools: ['Typescript', 'Next.js', 'Supabase', 'Shadcn UI', 'Tailwind CSS'],
    },
  };

  // @ts-ignore
  const projectData = projects[project];
  if (!projectData) notFound();

  return (
    <main>
      <section className="min-h-[calc(100vh-4rem)]  py-36 flex flex-col gap-10 justify-center items-center container max-w-[1000px]">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text tracking-[-0.02em] text-transparent drop-shadow-sm text-center capitalize">
          {project}
        </h1>
        <Balancer
          as={'p'}
          preferNative={false}
          className="text-center md:text-lg lg:text-xl xl:mx-52 text-muted-foreground"
        >
          {t('mainDescription', { project: toTitleCase(project) })}
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
        <AspectRatio ratio={3 / 2}>
          <ImageTheme
            dark={`/images/${project}-dark.png`}
            light={`/images/${project}-light.png`}
            alt={toTitleCase(project)}
            fill
            sizes="(min-width: 1536px) 100vw, (min-width: 1280px) 100vw, (min-width: 1024px) 100vw, (min-width: 768px) 100vw, (min-width: 640px) 100vw, 100vw"
          />
        </AspectRatio>

        <h2 className="text-xl md:text-2xl font-semibold mt-16">
          {t('overviewHeading')}
        </h2>

        {/* <RichText content={t.raw(projectData.description)} /> */}
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
