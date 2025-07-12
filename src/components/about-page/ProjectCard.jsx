"use client"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { Icons, iconsWithAnchorClassName as iconsClassName } from "../ui/Icons"
import { Link } from "@/src/i18n/navigation"

export default function ProjectCard({
  title,
  description,
  imageURL = "/images/project-placeholder.png",
  imageAlt = "",
  techStackIcons,
  gitHubRepoURL,
  projectURL
}) {
  const GitHubIcon = ( gitHubRepoURL ?
    <a href={gitHubRepoURL} target="_blank" rel="noopener noreferrer">
      <Icons.GitHub strokeWidth={2.5} className={iconsClassName}/>
    </a>
    :
    null
  )
  const LinkIcon = <Icons.LucideLink strokeWidth={2.5} className={iconsClassName}/>
  const projectURLIcon = ( projectURL ? 
    (projectURL.startsWith("http") ?
      <a href={projectURL} target="_blank" rel="noopener noreferrer">
        {LinkIcon}
      </a>
      :
      <Link href={projectURL}>
        {LinkIcon}
      </Link>
    )
    :
    null
  )
  
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
      {techStackIcons.map((Icon, index) => <Icon key={`icon-${index}`}/>)}
    </div>

    <div className="flex gap-4 justify-start text-center whitespace-nowrap">
      {GitHubIcon}
      {projectURLIcon}
    </div>
  </article>
  )
}