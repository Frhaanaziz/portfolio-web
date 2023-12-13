'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { useEffect, useState, useTransition } from 'react';
import { Skeleton } from './ui/skeleton';
import { Loader2 } from 'lucide-react';
import { languageOptions } from '@/config/next-intl';
import IconFlag from './IconFlag';

const LanguageSelector = () => {
  const [isUpdating, startTransition] = useTransition();
  const [isClient, setIsClient] = useState(false);

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function handleChangeLanguage(value: string) {
    startTransition(() =>
      router.replace(pathname, { locale: value, scroll: false })
    );
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <Skeleton className="h-[40px] w-[75px] lg:w-[130px]" />;
  return (
    <Select onValueChange={handleChangeLanguage} defaultValue={locale}>
      <SelectTrigger disabled={isUpdating} data-test="language-selector-button">
        {isUpdating ? (
          <p className="flex items-center">
            <Loader2 className="mr-1 h-4 w-4 animate-spin" /> Updating...
          </p>
        ) : (
          <SelectValue />
        )}
      </SelectTrigger>
      <SelectContent className="min-w-0">
        {languageOptions.map((option, i) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="flex items-center"
            disabled={isUpdating}
            data-test={`language-selector-item-${option.value}`}
          >
            <IconFlag value={option.value} />
            <span className="hidden lg:inline-block">{option.name}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
