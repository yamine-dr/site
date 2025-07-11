"use client"
import { useTranslations } from "next-intl"
import Section from "../layout/Section"
import TechStackIcon from "@/src/components/ui/icons/TechStackIcon"
import { Icons } from "../ui/Icons"

export default function About() {
  const t = useTranslations("AboutPage.about")
  return (
    <Section id="about" className="flex flex-col gap-10 justify-center items-center">
      <div>
        <h2 className="text-4xl text-center">
          {t("title")}
        </h2>
        <hr className="mt-2 mx-auto w-[263px] border"/>
      </div>

      <p className="text-lg text-center">
        {t.rich("subtitle", {
          br: () => <br/>
        })}
      </p>

      <div className="flex flex-col gap-4 justify-center items-center">
        <h4 className="text-center">
          {t("techStack")}
        </h4>
        <div className="flex gap-7 justify-center">
          <Icons.Nextjs/>
          <Icons.React/>
          <Icons.TailwindCSS/>
        </div>
        <div className="flex gap-7 justify-center">
          <Icons.Nodejs/>
          <Icons.MySQL/>
        </div>
      </div>
    </Section>
  )
}