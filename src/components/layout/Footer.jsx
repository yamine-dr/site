import { useTranslations } from "next-intl"
import SocialMediaIcon from "../ui/icons/SocialMediaIcon"

export default function Footer() {
  const t = useTranslations("Footer")
  return (
    <footer className="mt-10 pt-10 footer footer-horizontal footer-center gap-3 max-sm:gap-5 bg-base-300 border-t border-t-base-content/30">
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
          <a
            href="mailto:contact@yaminedaroueche.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            contact@yaminedaroueche.com
          </a>
        </div>
    </footer>
  )
}