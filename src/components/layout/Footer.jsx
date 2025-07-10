import { useTranslations } from "next-intl"
import { Icons } from "../ui/Icons"
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

export default function Footer() {
  const t = useTranslations("Footer")
  return (
    <footer className="mt-10 mx-3 md:mx-[10%] py-10 flex max-[900px]:flex-col justify-between items-center border-t border-t-base-content/20">
      <div className="max-[900px]:text-center">
        <p className="font-semibold text-info">{t("letsConnect")}</p>
        <small>{t("medias")}</small>
        <div className="mt-2 flex gap-4 items-center max-[900px]:justify-center">
          <Icons.GitHub/>
          <Icons.LinkedIn/>
          <Icons.Email/>
        </div>
      </div>

      <Navlinks/>
        
      <small className="h-fit text-base-content/70">
        © Yamine Daroueche, {new Date().getFullYear()}
      </small>
    </footer>
  )
}