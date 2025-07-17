import { getBaseUrl } from '../actions'
import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/src/i18n/routing'
import Providers from '../providers/Providers'
import Header from '@/src/components/layout/Header'
import Footer from '@/src/components/layout/Footer'
import "@/src/app/globals.css"

// to-do: localy host "Montserrat" font instead of using Google Fonts API
// Tutorial link: https://www.youtube.com/watch?v=zK-yy6C2Nck
import { Montserrat } from "next/font/google"

const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: "500",
})

export const generateMetadata = async () => ({ metadataBase: await getBaseUrl() })

export default async function RootLayout({ children, params }) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
 
  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={MontserratFont.className}>
          <div className="flex flex-col min-h-dvh">
            <Providers>
              <Header/>
              <main className="flex-1">
                {children}
              </main>
              <Footer/>
            </Providers>
          </div>
      </body>
    </html>
  )
}