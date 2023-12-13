import { cn } from '@/lib/utils';
import Image from 'next/image';

const IconFlag = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => {
  return (
    <Image
      src={`/icons/country-flag/${value}.png`}
      width={24}
      height={24}
      alt={value}
      className={cn('mr-2 inline-block', className)}
    />
  );
};

export default IconFlag;
