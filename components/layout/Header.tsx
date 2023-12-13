import { Link } from '@/navigation';
import { ReactNode } from 'react';
import HeaderSheet from './HeaderSheet';
import { ModeToggle } from '../ModeToggle';
import { getTranslations } from 'next-intl/server';
import { array4 } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '../ui/button';
import { avatarUrl } from '@/lib/constant';

const Header = async ({
  children,
  locale,
}: {
  children?: ReactNode;
  locale: string;
}) => {
  //   const section = await getSectionDataAction({
  //     locale,
  //     identifier: 'layout',
  //   });
  //   const messages = convertToLocalMessage(section);
  //   const t = createTranslator({ locale, messages });
  const t = await getTranslations('layout');

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        {/* <HeaderSheet messages={messages} locale={locale} /> */}
        <HeaderSheet messages={''} locale={locale} />

        <Link
          href={'/'}
          className="hidden gap-4 items-center justify-center md:flex"
        >
          <Avatar>
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>FA</AvatarFallback>
          </Avatar>
          <p className="font-medium">Farhan Aziz Ath Thariq</p>
        </Link>

        <div className="flex gap-3">
          <nav className="hidden md:flex gap-2">
            {array4.map((key) => (
              <Link
                key={key}
                // data-test={`headingNavLink${key}`}
                href={t(`headingNav${key}Href`)}
                className={buttonVariants({
                  variant: 'ghost',
                })}
              >
                {t(`headingNav${key}Label`)}
              </Link>
            ))}
          </nav>

          {children}
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
