"use server"
import { getLocale, getTranslations } from "next-intl/server"
import { getMetadata } from "../../metadata"
import { getPosts } from "@/src/libs/posts"
import { redis } from "@/src/libs/redis"
import Section from "@/src/components/layout/Section"
import { Icons } from "@/src/components/ui/Icons"
import PostCard from "@/src/components/blog-page/PostCard"

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations("BlogPage.metadata")
  return getMetadata(t, "/blog", locale)
}

export default async function BlogPage() {
  const locale = await getLocale()
  const t = await getTranslations("BlogPage")

  let posts = await getPosts(locale)
  // add the views for each post
  posts = await Promise.all(posts.map(async (post) => {
    return { ...post, views: Number(await redis.get(`post${post.id}:views`)) ?? 0 }
  }))
  return (
    <>
      <Section id="featured-posts" className="flex flex-col gap-5">
        <h1 className="text-center text-5xl font-bold">Blog</h1>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl max-md:text-xl">{t("featuredPosts")}</h1>
          {/* <a href="#"
            className="md:w-33 flex justify-end items-center gap-1 max-md:text-xs text-sm text-info md:hover:animate-bounce-horizontal"
          >
            {t("morePosts")} <Icons.ArrowRight className="size-1/5"/>
          </a> */}
        </div>

        {/* post cards */}
        <div className="flex gap-5 max-md:flex-col flex-wrap justify-between items-stretch max-md:items-center">
          {posts.reverse().slice(0, 2).map((post) => {
            return <PostCard key={post.slug} post={post} className="w-8/12 md:w-5/12"/>
          })}
        </div>
      </Section>
    </>
  )
}
