import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';

// to-do: localy host "Space Grotesk" font instead of using Google Fonts API
// Tutorial link: https://www.youtube.com/watch?v=zK-yy6C2Nck
import { Space_Grotesk } from "next/font/google";
import "@/src/app/globals.css";

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
});

// to-do: add translation of metadata.descrition in french
export const metadata = {
  title: {
    default: "Yamine Daroueche - Portfolio",
  },
  description: "The portfolio of Yamine Daroueche, an aspiring web developer",
  creator: "Yamine Daroueche",
  publisher: "Yamine Daroueche",
  authors: [{name: "Yamine Daroueche"}],
  openGraph: {
    title: "Yamine Daroueche - Portfolio",
    description: "The portfolio of Yamine Daroueche, an aspiring web developer",
    type: "website",
    authors: ["Yamine Daroueche"],
  },
};

export default async function RootLayout({
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