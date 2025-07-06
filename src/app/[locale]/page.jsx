import { useLocale } from 'next-intl';
import { Link } from '@/src/i18n/navigation';
 
// Page rendered when '/' is requested
export default function RootPage() {
  const className = "btn btn-info p-5 text-lg"
  return (
    <div className="mt-25 flex justify-center items-center gap-20">
      <Link href="/about" className={className}>
        About me
      </Link>
      <Link href="/blog" className={className}>
        Blog
      </Link>
    </div>
  )
}