'use client';

import { defaultLocale } from '@/config/next-intl';
import { redirect, usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();

  // Add a locale prefix to show a localized not found page
  redirect(`/${defaultLocale}${pathname}`);
}
