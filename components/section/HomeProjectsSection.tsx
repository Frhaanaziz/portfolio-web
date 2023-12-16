'use client';
import {
  animationVariant,
  leftAnimationVariant,
  rightAnimationVariant,
} from '@/lib/animations';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Balancer from 'react-wrap-balancer';
import { Link } from '@/navigation';
import { array1, cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { AspectRatio } from '../ui/aspect-ratio';
import ImageTheme from '../ImageTheme';

const HomeProjectsSection = () => {
  const t = useTranslations('home');

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
        {array1.map((i) => (
          <div
            key={i}
            className="flex justify-center flex-col items-center md:flex-row gap-10 lg:gap-16"
          >
            <motion.div
              variants={leftAnimationVariant}
              initial="initial"
              whileInView={'animate'}
              viewport={{ once: true }}
              className="w-full h-full"
            >
              <AspectRatio ratio={3 / 2}>
                <ImageTheme
                  dark={'/images/thriftshop-dark.png'}
                  light="/images/thriftshop-light.png"
                  alt="Thriftshop"
                  fill
                  sizes="(min-width: 1536px) 30vw, (min-width: 1280px) 45vw, (min-width: 1024px) 45vw, (min-width: 768px) 100vw, (min-width: 640px) 100vw, 100vw"
                />
              </AspectRatio>
            </motion.div>

            <div className="w-full text-center md:text-left">
              <motion.h3
                variants={rightAnimationVariant}
                initial="initial"
                whileInView={'animate'}
                viewport={{ once: true }}
                className="text-2xl font-semibold mb-8"
              >
                {/* @ts-ignore */}
                {t(`projects${i}Heading`)}
              </motion.h3>
              <motion.p
                variants={rightAnimationVariant}
                initial="initial"
                whileInView={'animate'}
                viewport={{ once: true }}
                className="text-muted-foreground"
              >
                <Balancer>
                  {/* @ts-ignore */}
                  {t(`projects${i}Description`)}
                </Balancer>
              </motion.p>

              <motion.div
                variants={rightAnimationVariant}
                initial="initial"
                whileInView={'animate'}
                viewport={{ once: true }}
              >
                <Link
                  // @ts-ignore
                  href={t(`projects${i}CSLink`)}
                  className={cn(buttonVariants({ size: 'lg' }), 'mt-8')}
                >
                  {/* @ts-ignore */}
                  {t(`projects${i}CSLabel`)}
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
