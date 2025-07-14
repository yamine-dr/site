"use server"
import { getLocale, getTranslations } from 'next-intl/server'
import { getMetadata } from '../metadata'
import { Link } from '@/src/i18n/navigation'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations("RootPage.metadata")
  return getMetadata(t, "/", locale)
}

// Page rendered when '/' is requested
export default async function RootPage() {
  const t = await getTranslations()
  const LinkClassName = "btn btn-info p-10 text-4xl"
  return (
    <div className="my-30 mx-auto size-fit flex flex-wrap gap-25 justify-center">
      <Link href="/about" className={LinkClassName}>
        {t("Header.about")}
      </Link>
      <Link href="/blog" className={LinkClassName}>
        Blog
      </Link>
    </div>
  )
}