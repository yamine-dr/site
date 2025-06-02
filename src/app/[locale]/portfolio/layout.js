import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';

import { Space_Grotesk } from "next/font/google";
import "@/src/app/globals.css";

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Yamine Daroueche",
  description: "",
};

export default async function LocaleLayout({
  children,
  params
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale} className="scroll-smooth">
      <body className={SpaceGrotesk.className}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}