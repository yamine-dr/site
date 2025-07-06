"use client"
import { useTranslations, useLocale } from 'next-intl'
import { locales, localesFullyWritten } from '@/src/i18n/locales'
import { Link, usePathname } from '@/src/i18n/navigation'
import { useState } from "react"
import { Icons } from '@/src/components/ui/Icons'
import ThemeSwitch from '@/src/components/ThemeSwitch'

/** Navigation link component for the header */
const NavLink = ({ href = "#", onClick, children }) => {
  const innerClassName = "max-lg:block max-lg:p-3 lg:p-5 h-full max-lg:w-full max-lg:hover:bg-base-content/30 max-lg:border-b"
  return (
    <button
      onClick={onClick}
      className="lg:my-auto max-lg:w-full lg:w-fit lg:py-3 max-lg:text-start lg:text-center lg:hover:border-b-2 lg:hover:pb-2.5"
    >
      {href.startsWith("http") ?
        <a href={href} target="_blank" rel="noopener noreferrer" className={innerClassName}>
          {children}
        </a>
        :
        <Link href={href} className={innerClassName}>
          {children}
        </Link>
      }
    </button>
  )
}

/** Navigation links component for the header */
const Navlinks = ({ onClick }) => {
  const navLinks = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "blog", href: "/blog" },
    { name: "projects", href: "/about#projects" },
    { name: "contact", href: "/about#contact" },
  ]

  const t = useTranslations("Header")
  return (
    <>
      {navLinks.map(({ name, href }) => (
        <NavLink key={name} href={href} onClick={onClick}>{t(name)}</NavLink>
      ))}
    </>
  )
}

const LanguagesDropdownList = () => {
  const pathname = usePathname()
  const currentLocale = useLocale()
  return (
    <div className="dropdown dropdown-center ml-2">
      <button tabIndex={0} role="button" className="p-2 bg-none rounded-md hover:cursor-pointer hover:bg-base-content/20 transition-all">
        <Icons.languages size={20} strokeWidth={1.5}/>
      </button>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm">
        {locales.filter(locale => currentLocale != locale).map(locale => (
              <li key={locale} className="text-center text-xs font-medium">
                <Link
                  className=""
                  href={pathname}
                  locale={locale}  
                >
                  {localesFullyWritten[locale]}
                </Link>
              </li>
            ))}
      </ul>
    </div>
  )
}

/** Header component with navbar */
export default function Header() {
  const [showNavMenu, setShowNavMenu] = useState(false)
  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu)
  }
  
  const t = useTranslations("Header")
  return (
    <nav className="navbar px-3 md:px-[10%] py-3 justify-between">
      {!showNavMenu && (
        <>
          <div className="navbar-start gap-7 w-fit">
            <h2 className="my-auto text-xl md:text-3xl font-bold text-center">
              <Link href="/">YD</Link>
            </h2>
          </div>

          <div className="navbar-end w-fit">
            {/* navbar displayed on large viewport */}
            <div className="hidden p-0 lg:flex justify-between items-center">
              <Navlinks/>
              <LanguagesDropdownList/>
              <ThemeSwitch/>
            </div>

            {/* NavMenu toggler (hidden on large viewport) */}
            <button onClick={toggleNavMenu} className="lg:hidden btn px-2 py-1 h-fit bg-transparent border border-base-content/20 shadow-none">
              <Icons.menu size={40} strokeWidth={1}/>
            </button>
          </div>
        </>
      )}

      {/* nav menu (hidden on large viewport) */}
      {showNavMenu && (
        <div className="relative lg:hidden pt-10 w-full">
          <button onClick={toggleNavMenu} className="absolute btn top-1 right-1 p-0 w-fit bg-transparent border-0 shadow-none">
            <Icons.X size={40} strokeWidth={0.7}/>
          </button>
          <div className="flex flex-col">
            <Navlinks onClick={toggleNavMenu}/>
          </div>
          <div className="flex p-2 justify-end">
            <LanguagesDropdownList/>
            <ThemeSwitch/>
          </div>
        </div>
      )}
    </nav>
  )
}