"use client"
import { useTranslations } from "next-intl"
import Section from "../layout/Section"
import ProjectCard from "./ProjectCard"
import SportifyBanner from "@/src/assets/images/project-sportify.png"


export default function Projects() {
  const t = useTranslations("Projects")
  return (
    <Section id="projects">
      <div className="w-full max-md:max-w-full">
        <h2 className="flex-1 shrink gap-2.5 self-stretch p-2.5 w-full text-4xl text-center whitespace-nowrap basis-0 max-md:max-w-full">
          {t("title")}
        </h2>
        <div className="flex flex-col justify-center items-center p-2.5 w-full max-md:max-w-full">
          <div className="max-w-full border border-solid bg-base-content border-base-cbg-base-content min-h-px w-[263px]" />
        </div>
      </div>

      <div className="flex flex-col justify-center mt-6 w-full max-w-[1101px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
          <ProjectCard
            title={t("Sportify.title")}
            description={(
              <p>
                {t("Sportify.description.part1")}
                <br />
                {t("Sportify.description.part2")}
              </p>
            )}
            imageURL={SportifyBanner}
            imageAlt={t("Sportify.imageAlt")}
            techStackIcons={["PHP", "Bootstrap", "CSS", "MySQL"]}
            gitHubRepoURL="https://github.com/yamine-dr/sportify"
            projectURL="https://yaminedaroueche.com/portfolio/sportify"
          />
          <ProjectCard
            title={t("Blog.title")}
            description={(
              <p>
                {t("Blog.description.part1")}
                <br />
                {t("Blog.description.part2")}
              </p>
            )}
            techStackIcons={["Next.js", "MDX", "Tailwind CSS"]}
          />
        </div>
      </div>
    </Section>
  )
}