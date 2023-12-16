'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Skeleton } from './ui/skeleton';
import { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface ImageThemeProps extends Omit<ImageProps, 'src'> {
  light: string;
  dark: string;
  skeletonClassName?: string;
}

const ImageTheme = ({
  light,
  dark,
  skeletonClassName,
  ...props
}: ImageThemeProps) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>();

  useEffect(() => {
    setCurrentTheme(resolvedTheme);
  }, [resolvedTheme]);

  if (!currentTheme || currentTheme !== resolvedTheme)
    return <Skeleton className={cn('w-full h-full', skeletonClassName)} />;

  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image src={`${currentTheme === 'dark' ? dark : light}`} {...props} />;
};
export default ImageTheme;
