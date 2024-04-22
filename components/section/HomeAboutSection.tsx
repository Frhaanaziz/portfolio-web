'use client';
import { Link } from '@/navigation';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import { skills } from '@/lib/constant';
import Balancer from 'react-wrap-balancer';
import { motion } from 'framer-motion';
import {
  animationVariant,
  leftAnimationVariant,
  staggerAnimationVariant,
} from '@/lib/animations';
import { useTranslations } from 'next-intl';
import RichText from '../RichText';

const HomeAboutSection = () => {
  const t = useTranslations('home');

  return (
    <section className="bg-muted py-20" id="about">
      <div className="container">
        <motion.h2
          variants={animationVariant}
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: true }}
          className="text-center text-3xl lg:text-4xl font-medium"
        >
          {t('aboutHeading')}
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
          className="text-muted-foreground max-w-xl lg:text-lg mx-auto text-center"
        >
          <Balancer preferNative={false}>{t('aboutSubHeading')}</Balancer>
        </motion.p>

        <div className="mt-20 flex flex-col lg:flex-row gap-16">
          <div className="space-y-4 w-full">
            <motion.h3
              variants={animationVariant}
              initial="initial"
              whileInView={'animate'}
              viewport={{ once: true }}
              className="font-semibold text-xl mb-7"
            >
              {t('aboutDescriptionHeading')}
            </motion.h3>

            <RichText content={t.raw(`aboutDescription`)} />

            <motion.div
              variants={leftAnimationVariant}
              initial="initial"
              whileInView={'animate'}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Link
                className={cn(buttonVariants({ size: 'lg' }), '')}
                href={'#contact'}
              >
                {t(`aboutLinkLabel`)}
              </Link>
            </motion.div>
          </div>

          <div className=" w-full">
            <motion.h3
              variants={animationVariant}
              initial="initial"
              whileInView={'animate'}
              viewport={{ once: true }}
              className="font-semibold text-xl mb-7"
            >
              {t(`aboutSkillsHeading`)}
            </motion.h3>

            <ul className="flex flex-wrap gap-4">
              {skills.map((skill, i) => (
                <motion.li
                  variants={staggerAnimationVariant}
                  initial="initial"
                  whileInView={'animate'}
                  viewport={{ once: true }}
                  custom={i + 1}
                  key={skill}
                  className="bg-primary text-primary-foreground text-sm font-medium py-2 px-3 rounded-md"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
