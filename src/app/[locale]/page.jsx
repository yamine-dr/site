import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/navigation';
 
// Page rendered when '/' is requested
export default function RootPage() {
  const t = useTranslations()
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