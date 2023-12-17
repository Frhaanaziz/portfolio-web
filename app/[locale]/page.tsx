import MouseScrollLottie from '@/components/lottie/MouseScrollLottie';
import HomeAboutSection from '@/components/section/HomeAboutSection';
import HomeContactSection from '@/components/section/HomeContactSection';
import HomeProjectsSection from '@/components/section/HomeProjectsSection';
import { buttonVariants } from '@/components/ui/button';
import { contactNavigation } from '@/lib/constant';
import { Link } from '@/navigation';
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
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text tracking-[-0.02em] text-transparent drop-shadow-sm text-center">
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
          className="absolute hidden lg:block bottom-5 dark:invert"
          skeletonClassName="absolute hidden lg:block bottom-5"
        />

        {/* buatlah menjadi posisi tengah kiri */}
        <aside className="absolute hidden md:block left-0 top-[calc(1/2-138px)]">
          <ul className="bg-foreground p-3 rounded-r">
            <li className="flex flex-col gap-4">
              {contactNavigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <item.icon className="invert w-9 h-9" />
                </Link>
              ))}
            </li>
          </ul>
        </aside>
      </section>

      <HomeAboutSection />

      <HomeProjectsSection />

      <HomeContactSection />
    </main>
  );
};

export default HomePage;
