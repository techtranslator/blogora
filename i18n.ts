import { notFound } from 'next/navigation';

// Can be imported from a shared config
const locales = [
  'en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ko',
  'ar', 'hi', 'bn', 'ur', 'fa', 'tr', 'nl', 'pl', 'sv', 'da',
  'no', 'fi', 'el', 'cs', 'sk', 'hu', 'ro', 'bg', 'hr', 'sr',
  'uk', 'he', 'th', 'vi', 'id', 'ms', 'tl', 'sw', 'am', 'ha',
  'yo', 'ig', 'zu', 'xh', 'af', 'ca', 'eu', 'gl', 'is', 'mt'
];
export const defaultLocale = 'en';

export async function getMessages(locale: string) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return (await import(`./messages/${locale}.json`)).default;
}