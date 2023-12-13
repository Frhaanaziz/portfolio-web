import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from './config/next-intl';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
