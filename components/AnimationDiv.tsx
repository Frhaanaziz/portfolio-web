import React from 'react';
import { motion } from 'framer-motion';
import { animationVariant } from '@/lib/animations';

const AnimationDiv = ({
  children,
  variants,
}: {
  children: React.ReactNode;
  variants?: any;
}) => {
  return (
    <motion.div
      variants={variants || animationVariant}
      initial="initial"
      whileInView={'animate'}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationDiv;
