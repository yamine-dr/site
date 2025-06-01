"use client"
import { useTranslations, useLocale } from 'next-intl'
import { useState } from "react"
import CTAButton from "../ui/buttons/ButtonCTA"

/**
 * Navigation link component for the header
 */
const NavLink = ({ to = "#", onClick = () => {}, children }) => {
  return (
    <button
      onClick={onClick}
      className="max-lg:mx-auto lg:my-auto w-fit text-center max-lg:text-base-content hover:text-gray-500 hover:underline transition-colors"
    >
      <a href={to}>
        {children}
      </a>
    </button>
  )
}

/**
 * Header component with navbar and CTA button
 */
export default function Header() {
  const [showNavMenu, setShowNavMenu] = useState(false)
  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu)
  }

  const t = useTranslations("Header")
  const locale = useLocale()
  return (
    <div className="navbar py-3 bg-base-100 border-b-[0.5px] justify-between">
      <div className="navbar-start">
        <h2 className="self-stretch my-auto text-xl md:text-3xl font-bold text-center">
          Yamine Daroueche
        </h2>
      </div>
      <div className="navbar-end w-fit lg:w-[750px]">
        <div className="hidden lg:flex p-0 justify-between text-2xl w-full">
          <NavLink to={`/${locale}`}>{t("home")}</NavLink>
          <NavLink to="#about">{t("about")}</NavLink>
          <NavLink to="#projects">{t("projects")}</NavLink>
          <CTAButton>{t("contact")}</CTAButton>
        </div>

        <button onClick={toggleNavMenu} className="lg:hidden btn text-base-content bg-transparent border-0 shadow-none transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="none"
            viewBox="0 0 45 27"
            className="text-inherit"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M0 1.5h45M0 13.5h45M0 25.5h45"
            ></path>
          </svg>
        </button>
      </div>

      {/* NavMenu (tablet/phone viewport) */}
      {showNavMenu && (
        <div className="lg:hidden border-b fixed z-1 top-0 left-0 w-full h-[80vh] flex flex-col justify-between bg-base-100">
          <button onClick={toggleNavMenu} className="btn mt-3 me-3 p-0 w-fit self-end text-base-content bg-transparent border-0 shadow-none transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="pt-20 h-[70vh] flex flex-col gap-6 text-2xl">
            <NavLink to={`/${locale}`} onClick={toggleNavMenu}>{t("home")}</NavLink>
            <NavLink to="#about" onClick={toggleNavMenu}>{t("about")}</NavLink>
            <NavLink to="#projects" onClick={toggleNavMenu}>{t("projects")}</NavLink>
            <CTAButton onClick={toggleNavMenu}>{t("contact")}</CTAButton>
          </div>
        </div>
      )}
    </div>
  )
}