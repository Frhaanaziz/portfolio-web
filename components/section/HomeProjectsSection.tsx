'use client';
import { animationVariant, rightAnimationVariant } from '@/lib/animations';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Balancer from 'react-wrap-balancer';
import { Link } from '@/navigation';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { AspectRatio } from '../ui/aspect-ratio';
import Image from 'next/image';
import {
  tabunganWisataAdminData,
  tabunganWisataDashboardData,
  tabunganWisataData,
  thriftshopData,
} from '@/lib/constant';

const HomeProjectsSection = () => {
  const t = useTranslations('home');

  const projects = [
    {
      name: 'Tabungan Wisata',
      description: t('tabungan-wisata-description'),
      link: '/cs/tabungan-wisata',
      images: tabunganWisataData.images,
    },
    {
      name: 'Tabungan Wisata Admin',
      description: t('tabungan-wisata-admin-description'),
      link: '/cs/tabungan-wisata-admin',
      images: tabunganWisataAdminData.images,
    },
    {
      name: 'Tabungan Wisata Dashboard',
      description: t('tabungan-wisata-dashboard-description'),
      link: '/cs/tabungan-wisata-dashboard',
      images: tabunganWisataDashboardData.images,
    },
    {
      name: 'Thriftshop',
      description: t('thriftshop-description'),
      link: '/cs/thriftshop',
      images: thriftshopData.images,
    },
  ];

  return (
    <section className="py-20 container" id="projects">
      <motion.h2
        variants={animationVariant}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: true }}
        className="text-center text-3xl lg:text-4xl font-medium"
      >
        {t('projectsHeading')}
      </motion.h2>
      <motion.div
        variants={animationVariant}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: true }}
        className="flex justify-center my-5 not-sr-only"
      >
        <div className="h-1 w-10 bg-primary rounded-lg" />
      </motion.div>

      <motion.p
        variants={animationVariant}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: true }}
        className="text-muted-foreground lg:text-lg max-w-xl mx-auto text-center"
      >
        <Balancer preferNative={false}>{t('projectsSubHeading')}</Balancer>
      </motion.p>

      <div className="flex flex-col mt-20 gap-24 md:gap-32">
        {projects.map(({ description, link, name, images }) => (
          <div
            key={link}
            className="flex justify-center flex-col items-center md:flex-row gap-10 lg:gap-16"
          >
            <Carousel
              className="w-full h-full"
              plugins={[
                Autoplay({
                  delay: Math.floor(Math.random() * 5000) + 2000,
                }),
              ]}
            >
              <CarouselContent>
                {images.map((imageUrl) => (
                  <CarouselItem key={imageUrl}>
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        sizes="(min-width: 1536px) 70vw, (min-width: 1280px) 70vw, (min-width: 1024px) 70vw, (min-width: 768px) 100vw, (min-width: 640px) 100vw, 100vw"
                        style={{ objectFit: 'contain' }}
                      />
                    </AspectRatio>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <div className="w-full text-center md:text-left">
              <motion.h3
                variants={rightAnimationVariant}
                initial="initial"
                whileInView={'animate'}
                viewport={{ once: true }}
                className="text-2xl font-semibold mb-8"
              >
                {name}
              </motion.h3>
              <motion.p
                variants={rightAnimationVariant}
                initial="initial"
                whileInView={'animate'}
                viewport={{ once: true }}
                className="text-muted-foreground"
              >
                <Balancer>{description}</Balancer>
              </motion.p>

              <motion.div
                variants={rightAnimationVariant}
                initial="initial"
                whileInView={'animate'}
                viewport={{ once: true }}
              >
                <Link
                  href={link}
                  className={cn(buttonVariants({ size: 'lg' }), 'mt-8')}
                >
                  {t('Case Study')}
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeProjectsSection;
