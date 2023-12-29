import '../globals.css';
import React, { ReactNode } from 'react';

import LanguageSelector from '@/components/LanguageSelector';
import { locales } from '@/config/next-intl';
import { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { ThemeProvider } from '@/context/ThemeProvider';
import NextTopLoader from 'nextjs-toploader';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/Header';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { Provider as BalancerProvider } from 'react-wrap-balancer';
import ToastProvider from '@/context/ToastProvider';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { getIntlMessagesAction } from '../_actions';

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: any;
  };
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

// export async function generateMetadata({
//   params: { locale },
// }: {
//   params: { locale: string };
// }): Promise<Metadata> {
//   const t = await getTranslations({ locale, namespace: 'home' });

//   return {
//     title: 'Farhan Aziz Ath Thariq | Fullstack Web Developer',
//     description: t('heroDescription'),
//   };
// }

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  if (!locales.includes(locale)) notFound();
  if (!locales.some((cur) => cur === locale)) notFound();

  unstable_setRequestLocale(locale);

  let messages;
  try {
    messages = (await getIntlMessagesAction({ locale })).data ?? {};
    // messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        )}
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <NextTopLoader color="#2663E9" />
          <BalancerProvider>
            <NextIntlClientProvider messages={messages}>
              <ToastProvider>
                <Header locale={locale}>
                  <LanguageSelector />
                </Header>
                {children}
                <Footer />
              </ToastProvider>
            </NextIntlClientProvider>
          </BalancerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
