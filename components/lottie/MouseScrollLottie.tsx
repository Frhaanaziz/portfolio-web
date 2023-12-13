'use client';
import Lottie from 'react-lottie-player';
import { Skeleton } from '../ui/skeleton';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const MouseScrollLottie = ({
  className,
  skeletonClassName,
}: {
  className?: string;
  skeletonClassName?: string;
}) => {
  const [animationData, setAnimationData] = useState<object>();

  useEffect(() => {
    import('@/public/lottie/mouse-scroll-lottie.json').then(setAnimationData);
  }, []);

  if (!animationData)
    return (
      <Skeleton
        className={cn('h-[40px] w-[40px] rounded-3xl', skeletonClassName)}
      />
    );

  return (
    <Lottie
      loop
      animationData={animationData}
      play
      style={{ width: 40 }}
      className={cn('', className)}
    />
  );
};

export default MouseScrollLottie;
