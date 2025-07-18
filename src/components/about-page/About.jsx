"use client"
import { useTranslations } from "next-intl"
import Section from "../layout/Section"
import { Icons as I, iconBackgroundClassName as bgClassName } from "../ui/Icons"

const About = () => {
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
          {[I.Nextjs, I.React, I.TailwindCSS].map((I, index) => (
            <a href={I.url} target="_blank" rel="noopener noreferrer" key={`about-icons1-${index}`}>
              <I.icon className={bgClassName}/>
            </a>
          ))}
        </div>
        <div className="flex gap-7 justify-center">
          {[I.Nodejs, I.Upstash].map((I, index) => (
            <a href={I.url} target="_blank" rel="noopener noreferrer" key={`about-icons1-${index}`}>
              <I.icon className={bgClassName}/>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default About