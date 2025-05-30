"use client"
import Section from "../layout/Section"
import ProjectCard from "./ProjectCard"
import SportifyBanner from "@/src/assets/images/sportify-banner.png"


export default function Projects() {
  return (
    <Section id="projects">
      <div className="w-full max-md:max-w-full">
        <h2 className="flex-1 shrink gap-2.5 self-stretch p-2.5 w-full text-4xl text-center whitespace-nowrap basis-0 max-md:max-w-full">
          Projects
        </h2>
        <div className="flex flex-col justify-center items-center p-2.5 w-full max-md:max-w-full">
          <div className="max-w-full border border-solid bg-base-content border-base-cbg-base-content min-h-px w-[263px]" />
        </div>
      </div>

      <div className="flex flex-col justify-center mt-6 w-full max-w-[1101px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
          <ProjectCard
            title="Sportify"
            description={(
              <p>
                Scenario (fictional): Sportify is a gym in Limoges with several locations, 
                where different courses (pilates, cycling, etc.) are available for the public.
                <br />
                Visit the website, and tell me if you have any feedback or suggestion, 
                I'll happily take them ! 😁 However, I haven't finished the mobile version.
                <br /><br />
                P.S. : I developed this website with 2 university classmates. 
                I genuinely thank them for their precious help.
              </p>
            )}
            imageURL={SportifyBanner}
            imageAlt="Sportify sign-in page"
            techStackIcons={["PHP", "CSS", "Bootstrap", "MySQL"]}
            gitHubRepoURL="https://github.com/yamine-dr/sportify"
            projectURL="https://yaminedaroueche.com/portfolio/sportify"
          />
          <ProjectCard
            title="AS Panazol"
            description={(
              <p>
                I'm currently working on a new version of the website of AS Panazol, 
                a french semi-pro a football club.
                Work in progress...
              </p>
            )}
            techStackIcons={["React", "Tailwind CSS", "Node.js", "MySQL"]}
          />
        </div>
      </div>
    </Section>
  )
}