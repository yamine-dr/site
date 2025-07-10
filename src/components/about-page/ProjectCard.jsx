"use client"
import { useTranslations } from "next-intl"
import Image from "next/image"
import TechStackIcon from "../ui/icons/TechStackIcon"
import { Icons } from "../ui/Icons"

export default function ProjectCard({
  title,
  description,
  imageURL = "/images/project-placeholder.png",
  imageAlt = "",
  techStackIcons,
  gitHubRepoURL,
  projectURL
}) {
  const t = useTranslations("AboutPage.projects.card")
  return (
  <article className="flex flex-col flex-1 shrink gap-5 basis-0 min-w-60 max-md:max-w-full">
    <Image 
      src={imageURL}
      alt={imageAlt}
      width={495}
      height={374}
      className="border border-base-content object-contain w-full aspect-[1.32] max-md:max-w-full"
    />
    <h3 className="text-2xl">
      {projectURL ?
        (<a
          href={projectURL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {title}
        </a>)
        :
        title
      }
    </h3>
    <hr className="w-full"/>
    {description}

    <div className="flex flex-wrap gap-7 justify-start text-center whitespace-nowrap">
      {techStackIcons.map(tech => (<TechStackIcon key={tech} icon={tech}/>))}
    </div>

    <div className="flex gap-4 justify-start text-center whitespace-nowrap">
      {gitHubRepoURL && <Icons.GitHub href={gitHubRepoURL}/>}

      {/* Project URL link and icon */}
      {projectURL && <Icons.Link href={projectURL}/>}
    </div>
  </article>
  )
}