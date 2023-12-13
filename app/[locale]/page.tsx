import { unstable_setRequestLocale } from 'next-intl/server';

const HomePage = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);

  return <main></main>;
};

export default HomePage;
