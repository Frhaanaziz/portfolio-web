import { contactNavigation } from '@/lib/constant';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('layout');

  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {contactNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              className="hover:text-muted-foreground/80 text-muted-foreground transition"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-5 h-5" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-muted-foreground">
            {t('footerText')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
