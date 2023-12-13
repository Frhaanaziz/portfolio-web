'use client';
import {
  BarChart3Icon,
  ContactIcon,
  FolderGit2,
  HelpCircle,
  Home,
  InfoIcon,
  Menu,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link } from '@/navigation';
import { useState } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { avatarUrl } from '@/lib/constant';

const HeaderSheet = ({
  messages,
  locale,
}: {
  messages: any;
  locale: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  //   const t = createTranslator({ locale, messages });
  const t = useTranslations('layout');
  const Icon = [Home, HelpCircle, FolderGit2, ContactIcon];
  const keys = Array.from({ length: 4 }, (_, i) => ({
    icon: Icon[i],
    key: i + 1,
  }));

  return (
    <Sheet open={isOpen} onOpenChange={(v) => setIsOpen(v)}>
      <SheetTrigger aria-label="open navigation" className="md:hidden">
        <Menu />
      </SheetTrigger>

      <SheetContent side="left" className="max-w-[300px] px-0">
        <SheetHeader className="px-6">
          <SheetTitle asChild>
            <Link href={'/'} className="flex gap-3 items-center">
              <Avatar>
                <AvatarImage src={avatarUrl} />
                <AvatarFallback>FA</AvatarFallback>
              </Avatar>
              <p>Farhan Aziz Ath Thariq</p>
            </Link>
          </SheetTitle>
        </SheetHeader>

        {/* Content */}
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
            <nav className="flex-1 space-y-1 px-2">
              {keys.map((item) => (
                <Link
                  key={item.key}
                  href={t(`headingNav${item.key}Href`)}
                  onClick={() => setIsOpen(false)}
                  className={buttonVariants({
                    variant: 'ghost',
                    className: 'w-full',
                  })}
                >
                  <div className="flex w-full items-center justify-start">
                    <item.icon
                      className="mr-3 h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    {t(`headingNav${item.key}Label`)}
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderSheet;
