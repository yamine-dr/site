import { useTranslations } from "next-intl"
import { Icons, iconsWithAnchorClassName as iconsClassName } from "../ui/Icons"
import { Link } from "@/src/i18n/navigation"

/** Navigation links component for the footer */
const Navlinks = () => {
  const navLinks = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "blog", href: "/blog" },
  ]
  
  const t = useTranslations("Header")
  return (
    <div className="flex gap-5 items-center">
      {navLinks.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className="p-1 hover:underline"
        >
          {t(name)}
        </Link>
      ))}
    </div>
  )
}

/** Media icons anchors: GitHub, LinkedIn, Email */
const MediaIcons = () => {
  const mediaIcons = [
    {name: "GitHub", href: "https://github.com/yamine-dr"},
    {name: "LinkedIn", href: "https://www.linkedin.com/in/yamine-daroueche-45a242228/"},
    {name: "Mail", href: "mailto:contact@yaminedaroueche.com"},
  ]

  return mediaIcons.map(({ name, href }) => {
    const Icon = Icons[name]
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" key={name}>
        <Icon className={iconsClassName}/>
      </a>
    )
  })
}

export default function Footer() {
  const t = useTranslations("Footer")
  return (
    <footer className="mt-10 mx-3 md:mx-[10%] py-10 flex max-[900px]:flex-col justify-between items-center border-t border-t-base-content/20">
      <div className="max-[900px]:text-center">
        <p className="font-semibold text-info">{t("letsConnect")}</p>
        <small>{t("medias")}</small>
        <div className="mt-2 flex gap-4 items-center max-[900px]:justify-center">
          <MediaIcons/>
        </div>
      </div>

      <Navlinks/>
        
      <small className="h-fit text-base-content/70">
        © Yamine Daroueche, {new Date().getFullYear()}
      </small>
    </footer>
  )
}