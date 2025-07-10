"use client"
import { useTranslations } from "next-intl"
import Section from "../layout/Section"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  const t = useTranslations("AboutPage.projects")
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
            description={t.rich("Sportify.description", {
              br: () => <br/>
            })}
            imageURL={"/images/project-sportify.png"}
            imageAlt={t("Sportify.imageAlt")}
            techStackIcons={["PHP", "Bootstrap", "CSS", "MySQL"]}
            gitHubRepoURL="https://github.com/yamine-dr/sportify"
            projectURL="https://yaminedaroueche.com/portfolio/sportify"
          />
          <ProjectCard
            title={t("Blog.title")}
            description={t.rich("Blog.description", {
              br: () => <br/>
            })}
            techStackIcons={["Next.js", "MDX", "Tailwind CSS" /* "Upstash" */]}
            gitHubRepoURL="https://github.com/yamine-dr/site"
            projectURL="/blog"
          />
        </div>
      </div>
    </Section>
  )
}