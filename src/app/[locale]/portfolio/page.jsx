"use server"
import { redirect } from "@/src/i18n/navigation"
import { getLocale } from "next-intl/server"

// replace "/portfolio" to "/about"
export default async function PortfolioPage() {
  redirect({href: "/about", locale: await getLocale()})
}
