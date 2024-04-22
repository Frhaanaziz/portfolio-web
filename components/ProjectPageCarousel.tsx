'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

interface Props {
  images: string[];
}

const ProjectPageCarousel = ({ images }: Props) => {
  return (
    <Carousel
      className="w-full h-full"
      plugins={[
        Autoplay({
          delay: Math.floor(Math.random() * 5000) + 2000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((imageUrl: string, i: number) => (
          <CarouselItem key={imageUrl}>
            <AspectRatio ratio={16 / 9}>
              <Image
                src={imageUrl}
                alt={`Project Image ${i}`}
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
  );
};

export default ProjectPageCarousel;
