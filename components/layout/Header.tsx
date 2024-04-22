import { Link } from '@/navigation';
import { ReactNode } from 'react';
import HeaderSheet from './HeaderSheet';
import { ModeToggle } from '../ModeToggle';
import { getTranslations } from 'next-intl/server';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '../ui/button';
import { avatarUrl, navLinks } from '@/lib/constant';

const Header = async ({ children }: { children?: ReactNode }) => {
  const t = await getTranslations();

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <HeaderSheet />

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
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={buttonVariants({
                  variant: 'ghost',
                })}
              >
                {t(label)}
              </Link>
            ))}
          </nav>
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;
