"use client"
import { useTranslations } from "next-intl"
import Section from "../layout/Section"
import ButtonCTA from "../ui/buttons/ButtonCTA"
import ButtonSecondary from "../ui/buttons/ButtonSecondary"

export default function Hero() {
  const t = useTranslations()
  return (
    <Section
      id="Hero"
      animation="onMount"
      className="mt-6 px-[10%] py-20 w-full flex flex-col justify-center max-md:px-5 max-md:max-w-full"
    >
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
          <h1 className="flex-1 shrink gap-2.5 self-stretch mx-auto py-2.5 w-full lg:w-[80%] text-5xl text-center basis-0 max-md:max-w-full max-md:text-4xl">
            {t("Hero.title.part1")} <span className="text-brown-200 font-bold">{t("Hero.title.part2")}</span>
          </h1>
          <div className="flex flex-col justify-center items-center py-2.5 mt-6 w-full max-md:max-w-full">
            <hr className="max-w-full border border-solid bg-base-content border-base-content min-h-px w-[263px]" />
          </div>
          <p className="flex-1 shrink gap-2.5 self-stretch px-12 py-2.5 mt-6 w-full max-md:text-lg text-2xl text-center basis-0 max-md:px-5 max-md:max-w-full">
            Hello World! <span className="inline-block animate-wave">👋</span>
            <br />
            {t("Hero.subtitle")}
          </p>
        </div>
        <div className="flex gap-10 justify-center items-center self-center mt-6 max-w-full text-2xl whitespace-nowrap w-[465px]">
          <ButtonSecondary to="#projects">{t("Header.projects")}</ButtonSecondary>
          <ButtonCTA>{t("Header.contact")}</ButtonCTA>
        </div>
      </div>
    </Section>
  )
}