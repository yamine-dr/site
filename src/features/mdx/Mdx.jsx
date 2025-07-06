import { MDXRemote } from "next-mdx-remote-client/rsc"
import { Suspense } from "react"
import { ShikiPlugin } from "./mdx-plugins"
import { useMDXComponents } from "@/mdx-components"
import { MdxYouTube } from "./MdxYouTube"
import { MdxPre } from "./MdxPre"
import { MdxLocalised } from "./MdxLocalised"

export default function Mdx({ children }) {
  return (
    <Suspense fallback={<div>Loading<span className="loading loading-dots loading-xs"></span></div>}>
      <MDXRemote
        source={children}
        baseUrl={import.meta.url}
        options={{
          mdxOptions: {
            rehypePlugins: [ShikiPlugin],
          }
        }}
        components={useMDXComponents({ // custom MDX components
          YouTube: MdxYouTube,
          pre: MdxPre,
          Localised: MdxLocalised,
        })}
      />
    </Suspense>
  )
}