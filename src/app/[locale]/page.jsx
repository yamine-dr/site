"use server"
import { Link } from '@/src/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import { getURLWithPathname } from '../actions'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations("RootPage.metadata")
  const url = "https://yaminedaroueche.com"
  return {
    title: t("title"),
    description: t("description"),
    author: [{ name: "Yamine Daroueche", url }],
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      siteName: t("title"),
      locale,
      type: "website",
      images: [
        {
          url: await getURLWithPathname(`/api/og?page=Root&locale=${locale}`),
          width: 1200,
          height: 630,
        }
      ],
    },
  }
}

// Page rendered when '/' is requested
export default async function RootPage() {
  const t = await getTranslations()
  const LinkClassName = "btn btn-info p-5 text-lg"
  return (
    <div className="py-40 flex gap-20 justify-center items-center">
      <Link href="/about" className={LinkClassName}>
        {t("Header.about")}
      </Link>
      <Link href="/blog" className={LinkClassName}>
        Blog
      </Link>
    </div>
  )
}