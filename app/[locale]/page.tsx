import MouseScrollLottie from '@/components/lottie/MouseScrollLottie';
import { Button, buttonVariants } from '@/components/ui/button';
import { emailAddress, githubUrl, linkedinUrl } from '@/lib/constant';
import { Link } from '@/navigation';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Balancer from 'react-wrap-balancer';

const HomePage = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('home');

  return (
    <main>
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className=" relative h-full flex flex-col gap-10 justify-center items-center container">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text tracking-[-0.02em] text-transparent drop-shadow-sm">
            {/* {t('heroHeading')} */}
            Lorem ipsum dolor sit.
          </h1>
          <Balancer
            as={'p'}
            preferNative={false}
            className="text-center md:text-lg lg:text-xl xl:mx-52 text-muted-foreground"
          >
            {t('heroDescription')}
          </Balancer>
          <Link
            className={buttonVariants({ size: 'lg' })}
            href={t('heroLinkHref')}
          >
            {t('heroLinkLabel')}
          </Link>
        </div>
        <MouseScrollLottie
          className="absolute bottom-5 dark:invert"
          skeletonClassName="absolute bottom-5"
        />

        {/* buatlah menjadi posisi tengah kiri */}
        <aside className="absolute hidden md:block left-0 top-[calc(1/2-138px)]">
          <ul className="bg-foreground p-3 rounded">
            <li className="flex flex-col gap-4">
              <Link href={githubUrl}>
                <Github className="invert w-9 h-9" />
              </Link>
              <Link href={linkedinUrl}>
                <Linkedin className="invert w-9 h-9" />
              </Link>
              <Link href={`mailto:${emailAddress}`}>
                <Mail className="invert w-9 h-9" />
              </Link>
            </li>
          </ul>
        </aside>
      </section>

      <section className="bg-muted py-20">
        <h2 className="text text-center text-3xl font-medium">About me</h2>
        <div className=" flex justify-center my-5">
          <div className="h-1.5 w-10 bg-primary rounded-lg" />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
