import { useTranslations } from "next-intl"
import SocialMediaIcon from "../ui/icons/SocialMediaIcon"

export default function Footer() {
  const t = useTranslations("Footer")
  return (
    <footer className="pt-10 footer footer-horizontal footer-center gap-3 max-sm:gap-5 border-t-[0.5px] border-t-base-content">
        <aside className="flex max-sm:flex-col max-sm:gap-5">
            <p>
                Copyright © {new Date().getFullYear()}, Yamine Daroueche <span className="max-sm:hidden">|</span>
            </p>
            <div className="flex gap-3 max-sm:gap-5">
                <SocialMediaIcon icon="GitHub" title={t("socialMedia.iconTitle", {socialMedia: "GitHub"})}/>
                <SocialMediaIcon icon="LinkedIn" title={t("socialMedia.iconTitle", {socialMedia: "LinkedIn"})}/>
                <SocialMediaIcon icon="Email" title={t("socialMedia.iconTitle", {socialMedia: "email"})}/>
            </div>
        </aside>
        <div className="pb-10">
          <a href="mailto:contact@yaminedaroueche.com" target="_blank" rel="noopener noreferrer">
            contact@yaminedaroueche.com
          </a>
        </div>
    </footer>
  )
}