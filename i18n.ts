import { getRequestConfig } from 'next-intl/server';

// export default getRequestConfig(async ({ locale }) => ({
//   messages: (await getIntlMessagesAction({ locale })).data ?? {},
// }));
export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));
// export default getRequestConfig(async ({ locale }) => ({
//   messages: {},
// }));
