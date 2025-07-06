import { getLocale, getTranslations } from "next-intl/server"
import { getLocalisedPosts } from "@/src/libs/posts"
import { redis } from "@/src/libs/redis"
import Section from "@/src/components/layout/Section"
import { Icons } from "@/src/components/ui/Icons"
import PostCard from "@/src/components/blog-page/PostCard"

async function getBlogPageTranslations() {
  return await getTranslations("BlogPage")
}

export async function generateMetadata() {
  const t = await getBlogPageTranslations()
  return {
    title: "Blog - Yamine Daroueche",
    description: t("metadata.description"),
  }
}

export default async function BlogPage() {
  const locale = await getLocale()
  const t = await getBlogPageTranslations()

  let posts = await getLocalisedPosts(locale)
  // add the views for each post
  posts = await Promise.all(posts.map(async (post) => {
    return { ...post, views: Number(await redis.get(`postviews:${post.slug}`)) ?? 0 }
  }))
  return (
    <>
      <Section id="featured-posts" className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl max-md:text-xl">{t("featuredPosts")}</h1>
          <a href="#"
            className="md:w-33 flex justify-end items-center gap-1 max-md:text-xs text-sm text-info md:hover:animate-bounce-horizontal"
          >
            {t("morePosts")} {Icons.rightArrow}
          </a>
        </div>

        {/* post cards */}
        <div className="flex gap-5 max-md:flex-col flex-wrap justify-between items-stretch max-md:items-center">
          {posts.slice(0, 2).map((post) => {
            return <PostCard key={post.slug} post={post} className="w-8/12 md:w-5/12"/>
          })}
        </div>
      </Section>
    </>
  )
}
