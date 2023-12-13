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

const HomeAboutSection = () => {
  return (
    <section className="bg-muted py-20" id="about">
      <div className="container ">
        <motion.h2
          variants={animationVariant}
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: true }}
          className="text-center text-3xl font-medium"
        >
          About Me
        </motion.h2>
        <div className="flex justify-center my-5 not-sr-only">
          <div className="h-1 w-10 bg-primary rounded-lg" />
        </div>

        <motion.p
          variants={animationVariant}
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-lg mx-auto"
        >
          <Balancer preferNative={false}>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </Balancer>
        </motion.p>

        <div className="mt-20 flex flex-col md:flex-row gap-16">
          <div className="space-y-4 w-full">
            <motion.h3
              variants={animationVariant}
              initial="initial"
              whileInView={'animate'}
              viewport={{ once: true }}
              className="font-medium text-xl mb-7"
            >
              Get to know me!
            </motion.h3>
            <motion.p
              variants={leftAnimationVariant}
              initial="initial"
              whileInView={'animate'}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              I&apos;m a Frontend Web Developer building the Front-end of
              Websites and Web Applications that leads to the success of the
              overall product. Check out some of my work in the Projects
              section.
            </motion.p>
            <motion.p
              variants={leftAnimationVariant}
              initial="initial"
              whileInView={'animate'}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming
            </motion.p>
            <motion.p
              variants={leftAnimationVariant}
              initial="initial"
              whileInView={'animate'}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              I&apos;m open to Job opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then don&apos;t hesitate to contact me.
            </motion.p>

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
                Contact
              </Link>
            </motion.div>
          </div>

          <div className=" w-full">
            <motion.h3
              variants={animationVariant}
              initial="initial"
              whileInView={'animate'}
              viewport={{ once: true }}
              className="font-medium text-xl mb-7"
            >
              My Skills
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
