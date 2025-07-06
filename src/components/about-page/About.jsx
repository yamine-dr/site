"use client"
import { useTranslations } from "next-intl"
import Section from "../layout/Section"
import TechStackIcon from "@/src/components/ui/icons/TechStackIcon"

export default function About() {
  const t = useTranslations("AboutPage.about")
  return (
    <Section id="about">
      <div className="w-full max-md:max-w-full">
        <h2 className="flex-1 shrink gap-2.5 self-stretch p-2.5 w-full text-4xl text-center whitespace-nowrap basis-0 max-md:max-w-full">
          {t("title")}
        </h2>
        <div className="flex flex-col justify-center items-center p-2.5 w-full max-md:max-w-full">
          <div className="max-w-full border border-solid bg-base-content border-base-cbg-base-content min-h-px w-[263px]" />
        </div>
      </div>

      <p className="flex-1 shrink gap-2.5 self-stretch p-2.5 mt-6 w-full text-lg text-center basis-0 max-md:max-w-full">
        {t.rich("subtitle", {
          br: () => <br/>
        })}
      </p>

      <div className="flex-col justify-center items-center mt-8">
        <h4 className="text-center">
          {t("techStack")}
        </h4>
        <div className="flex gap-7 justify-center mt-4 text-center whitespace-nowrap">
          <TechStackIcon icon="Next.js"/>
          <TechStackIcon icon="React"/>
          <TechStackIcon icon="Tailwind CSS"/>
        </div>
        <div className="flex gap-7 justify-center mt-4 text-center whitespace-nowrap">
          <TechStackIcon icon="Node.js"/>
          <TechStackIcon icon="MySQL"/>
        </div>
      </div>
    </Section>
  )
}