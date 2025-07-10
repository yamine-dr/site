import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/navigation';
 
// Page rendered when '/' is requested
export default function RootPage() {
  const t = useTranslations()
  const LinkClassName = "btn btn-info p-5 text-lg"
  return (
    <div className="mt-25 flex justify-center items-center gap-20">
      <Link href="/about" className={LinkClassName}>
        {t("Header.about")}
      </Link>
      <Link href="/blog" className={LinkClassName}>
        Blog
      </Link>
    </div>
  )
}