import { useTranslations } from "next-intl"
import Image from "next/image"
import Placeholder from "@/src/assets/images/project-placeholder.png"
import TechStackIcon from "../ui/icons/TechStackIcon"

export default function ProjectCard({
  title,
  description,
  imageURL = Placeholder,
  imageAlt = "",
  techStackIcons,
  gitHubRepoURL = undefined,
  projectURL = undefined
}) {
  const t = useTranslations("Projects.card")
  return (
  <article className="flex flex-col flex-1 shrink gap-5 basis-0 min-w-60 max-md:max-w-full">
    <Image 
      src={imageURL}
      alt={imageAlt}
      className="border border-base-content object-contain w-full aspect-[1.32] max-md:max-w-full"
    />

    <h3 className="text-2xl">
      {projectURL !== undefined ?
        (<a
          className="hover:underline"
          href={projectURL}
          target="_blank"
          rel="noopener noreferrer"
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
      {techStackIcons.map(tech => (<TechStackIcon key={`${tech}`} icon={tech}/>))}
    </div>

    <div className="flex gap-4 justify-start text-center whitespace-nowrap">
      {/* GitHub link and icon */
      gitHubRepoURL != undefined && (
        <a
          className="hover:scale-110 transition-transform"
          title={t("githubURLTitle", {projectTitle: title})}
          href={gitHubRepoURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 30 30"
            className="text-base-content"
          >
            <path
              fill="currentColor"
              d="M15 .917A14.583 14.583 0 0 0 .417 15.5c0 6.446 4.185 11.915 9.975 13.854.729.117.962-.335.962-.729V26.16c-4.04.875-4.9-1.954-4.9-1.954-.67-1.691-1.619-2.143-1.619-2.143-1.327-.905.102-.875.102-.875 1.459.102 2.232 1.502 2.232 1.502 1.268 2.216 3.412 1.56 4.243 1.21.132-.948.51-1.59.92-1.954-3.238-.365-6.636-1.619-6.636-7.175 0-1.619.554-2.917 1.502-3.952-.146-.365-.657-1.882.146-3.85 0 0 1.225-.394 4.01 1.487A13.7 13.7 0 0 1 15 7.975c1.24 0 2.494.16 3.646.481 2.785-1.881 4.01-1.487 4.01-1.487.802 1.968.292 3.485.146 3.85.948 1.035 1.502 2.333 1.502 3.952 0 5.57-3.412 6.796-6.665 7.16.525.452 1.007 1.342 1.007 2.698v3.996c0 .394.233.86.977.73 5.79-1.955 9.96-7.41 9.96-13.855A14.583 14.583 0 0 0 15 .917"
            ></path>
          </svg>
        </a>
      )}

      {/* Project URL link and icon */
      projectURL != undefined && (
        <a
          className="hover:scale-110 transition-transform"
          title={t("projectURLTitle", {projectTitle: title})}
          href={projectURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="31"
            fill="none"
            viewBox="0 0 32 31"
            className="text-base-content"
          >
            <path
              fill="currentColor"
              d="m15.508 5.164 2.734-2.734A7.656 7.656 0 1 1 29.07 13.258l-5.468 5.469a7.656 7.656 0 0 1-10.829 0 1.643 1.643 0 0 1 .04-2.28 1.643 1.643 0 0 1 2.28-.04 4.37 4.37 0 0 0 6.19 0l5.468-5.468a4.38 4.38 0 0 0-6.19-6.19l-2.735 2.734a1.643 1.643 0 0 1-2.279-.04 1.643 1.643 0 0 1-.04-2.279M5.248 26.252a4.37 4.37 0 0 0 6.191 0l2.734-2.735a1.642 1.642 0 0 1 2.76 1.171c.006.425-.151.837-.44 1.148l-2.735 2.734A7.656 7.656 0 1 1 2.93 17.742l5.468-5.469a7.656 7.656 0 0 1 10.829 0 1.643 1.643 0 0 1-.04 2.28 1.643 1.643 0 0 1-2.28.04 4.37 4.37 0 0 0-6.19 0L5.248 20.06a4.37 4.37 0 0 0 0 6.19"
            ></path>
          </svg>
        </a>
      )}
    </div>
  </article>
  )
}