import { MDXRemote } from "next-mdx-remote-client/rsc"
import { Suspense } from "react"
import { ShikiPlugin } from "./mdx-plugins"
import { useMDXComponents } from "@/mdx-components"
import { MdxYouTube } from "./MdxYouTube"
import { MdxPre } from "./MdxPre"
import { MdxLocalised } from "./MdxLocalised"
import { useTranslations } from "next-intl"
import { Icons } from "@/src/components/ui/Icons"



export default function Mdx({ children }) {
  const t = useTranslations("BlogPage.postPage")
  const fallback = (
    <>
      {t("loading")}<span className="loading loading-dots loading-xs mt-1.5"></span>
    </>
  )
  
  return (
    <Suspense fallback={fallback}>
      <MDXRemote
        source={children}
        options={{
          mdxOptions: {
            rehypePlugins: [ShikiPlugin],
          }
        }}
        components={useMDXComponents({ // custom MDX components
          YouTube: MdxYouTube,
          pre: MdxPre,
          Localised: MdxLocalised,
          I: Icons,
          CustomLink: ({ name, href }) => <a href={href} target="_blank" rel="noopener">{name}</a>
        })}
      />
    </Suspense>
  )
}