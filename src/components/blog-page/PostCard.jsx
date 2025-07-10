import { Link } from "@/src/i18n/navigation"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { PostViews } from "./PostViews"

export default function PostCard({ post, className }) {
  const locale = useLocale()
  const t = useTranslations("BlogPage")
  return (
    <div className={`card border border-base-content/40 rounded-md hover:scale-105 shadow-sm hover:shadow-2xl transition-all ${className}`}>
      {/* <figure>
        <Image 
          src={"/images/project-placeholder.png"}
          alt=""
          width={495}
          height={374}
          className="object-cover w-full aspect-[1.72] max-md:max-w-full"
        />
      </figure> */}
      <div className="card-body">
        <div className="flex justify-between gap-3">
          <h2 className="card-title">
            {post.title}
          </h2>
          <PostViews views={post.views}/>
        </div>

        <div className="text-xs text-base-content/70">
          {(new Date(post.publishedAt)).toLocaleDateString(locale)}
        </div>

        <p>{post.description}</p>

        <div className="card-actions">
          <Link href={`/blog/posts/${post.slug}`} className="text-info font-bold hover:underline">
            {t("readMore")}
          </Link>
        </div>
        
        {/* post tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="card-actions justify-end">
            {post.tags.map((tag, index) => (
              <div key={index} className="badge badge-outline">
                {tag}
              </div>
            ))}
          </div>
        )
        }
      </div>
    </div>
  )
}