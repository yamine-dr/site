import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/src/i18n/routing'
import Providers from '../providers/Providers'
import Header from '@/src/components/layout/Header'
import Footer from '@/src/components/layout/Footer'

// to-do: localy host "Space Grotesk" font instead of using Google Fonts API
// Tutorial link: https://www.youtube.com/watch?v=zK-yy6C2Nck
import { Montserrat } from "next/font/google"
import "@/src/app/globals.css"

const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: "500",
})

// to-do: add translation of metadata.descrition in french
// export const metadata = {
//   title: {
//     default: "Yamine Daroueche - Portfolio",
//   },
//   description: "The portfolio of Yamine Daroueche, an aspiring web developer",
//   creator: "Yamine Daroueche",
//   publisher: "Yamine Daroueche",
//   authors: [{name: "Yamine Daroueche"}],
//   openGraph: {
//     title: "Yamine Daroueche - Portfolio",
//     description: "The portfolio of Yamine Daroueche, an aspiring web developer",
//     type: "website",
//     authors: ["Yamine Daroueche"],
//   },
// }

export default async function RootLayout({ children, params }) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
 
  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={MontserratFont.className}>
        <Providers>
          <div className="flex flex-col min-h-dvh">
            <Header/>
            <main className="flex-1">
              {children}
            </main>
            <Footer/>
          </div>
        </Providers>
      </body>
    </html>
  )
}