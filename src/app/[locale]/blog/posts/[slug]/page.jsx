"use server"
import { getPost } from "@/src/libs/posts"
import { getTranslations } from "next-intl/server"
import { getBlogPostMetadata } from "@/src/app/metadata"
import { Link } from "@/src/i18n/navigation"
import { notFound } from "next/navigation"
import Image from "next/image"
import Mdx from "@/src/features/mdx/Mdx"
import UpdateViews from "./UpdateViews"
import { redis } from "@/src/libs/redis"
import { PostViews } from "@/src/components/blog-page/PostViews"

export async function generateMetadata({ params }) {
  const { slug, locale } = await params
  return await getBlogPostMetadata(slug, locale)
}

export default async function BlogPostPage({ params }) {
  const { slug, locale } = await params
  const post = await getPost(slug, locale)
  if (!post) {
    notFound()
  }

  const views = Number(await redis.get(`post${post.id}:views`)) ?? 0

  return (
    <article className="prose prose-sm lg:prose-lg mx-auto">
      <small>
        <Link href="/blog" className="text-info">Blog</Link> / {post.title}
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