"use client"
import { useEffect, useState } from "react"
import { usePathname, Link, useRouter } from "../i18n/navigation"
import { useLocale } from "next-intl"
import { Icons } from "./ui/Icons"
import { locales, localesFullyWritten } from '@/src/i18n/config'

export default function LocaleSwitch() {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname().replace("/fr", "")
  const currentLocale = useLocale()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return (
    <></>
  )

  return (
    <div className="dropdown dropdown-center ml-2">
      <button tabIndex={0} role="button" className="p-2 bg-none rounded-md hover:cursor-pointer hover:bg-base-content/20 transition-all">
        <Icons.languages size={20} strokeWidth={1.5}/>
      </button>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm">
        {locales.filter(locale => locale !== currentLocale).map(otherLocale => (
          <li key={otherLocale} className="text-center text-xs font-medium">
            <button onClick={() => router.replace(pathname, {locale: otherLocale})} className="mx-auto p-0">
              <Link href={pathname} locale={otherLocale} className="block py-1.5 px-3">
                {localesFullyWritten[otherLocale]}
              </Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}