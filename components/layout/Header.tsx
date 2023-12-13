import { Link } from '@/navigation';
import { ReactNode } from 'react';
import { buttonVariants } from '../ui/button';
import HeaderSheet from './HeaderSheet';
import { ModeToggle } from '../ModeToggle';
// import Logo from '@/components/Logo';

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
  //   const keys = Array.from({ length: 3 }, (_, i) => i + 1);

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        {/* <HeaderSheet messages={messages} locale={locale} /> */}
        <HeaderSheet messages={''} locale={locale} />

        <div className="hidden items-center justify-center md:flex">
          <Link href={'/'}>{/* <Logo /> */}</Link>

          <nav className="flex gap-2">
            {/* {keys.map((key) => (
              <Link
                key={key}
                data-test={`headingNavLink${key}`}
                href={t(`headingNav${key}Href`)}
                className={buttonVariants({
                  variant: 'ghost',
                })}
              >
                {t(`headingNav${key}Label`)}
              </Link>
            ))} */}
          </nav>
        </div>

        <div className="flex gap-3">
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
