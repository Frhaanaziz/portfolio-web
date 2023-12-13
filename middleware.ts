import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './config/next-intl';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(id|en|zh|ja)/:path*'],
};
