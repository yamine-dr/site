"use client"
import { useEffect } from "react"

/**
 * A component that update the views number of the blog post with the `slug` param.
 * @param {string} props.slug slug of the blog post
 */
export default function UpdateViews({ slug }) {
  useEffect(() => {
    fetch("/api/post-views", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    })
  }, [slug])
  
  return null
}