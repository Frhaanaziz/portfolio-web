import { Variants } from 'framer-motion';

export const animationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transitionDuration: '1s',
  },
} satisfies Variants;

export const leftAnimationVariant = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transitionDuration: '1s',
  },
} satisfies Variants;

export const rightAnimationVariant = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transitionDuration: '1s',
  },
} satisfies Variants;

export const staggerAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: (index - 1) * 0.05,
    },
    transitionDuration: '1s',
  }),
} satisfies Variants;
