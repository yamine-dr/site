import { getPost, getLocalisedPost } from "@/src/libs/posts"
import { getLocale, getTranslations } from "next-intl/server"
import { Link } from "@/src/i18n/navigation"
import { notFound } from "next/navigation"
import Image from "next/image"
import Mdx from "@/src/features/mdx/Mdx"
import UpdateViews from "./UpdateViews"
import { redis } from "@/src/libs/redis"
import { PostViews } from "@/src/components/blog-page/PostViews"

export const dynamic = "force-static"

export async function generateMetadata({ params }) {
  const { slug, locale } = await params
  const post = await getLocalisedPost(slug, locale)
  if (!post) {
    const t = await getTranslations("Metadata")
    return {
      title: t("notFound.title"),
      description: t("notFound.description"),
    }
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }) {
  const { slug, locale } = await params
  const t = await getTranslations("BlogPage.postPage")
  const post = await getLocalisedPost(slug, locale)
  if (!post) {
    notFound()
  }

  const views = Number(await redis.get(`views:post${post.id}`)) ?? 0
  return (
    <article className="prose prose-sm lg:prose-lg mx-auto">
      <small>
        <Link href="/blog" className="text-info">{t("home")}</Link> / {post.title}
      </small>
      <h1 className="mb-2 lg:mb-2">{post.title}</h1>
      <div className="text-xs text-base-content/70">
        {(new Date(post.publishedAt)).toLocaleDateString(locale)}
        <PostViews views={views} className="mt-2"/>
      </div>
      {/* <Image
        src={"/images/project-placeholder.png"}
        alt={post.title}
        width={495}
        height={374}
        className="w-full aspect-[2] object-cover"
      /> */}
      <Mdx>{post.content}</Mdx>

      <UpdateViews id={post.id}/>
    </article>
  )
}