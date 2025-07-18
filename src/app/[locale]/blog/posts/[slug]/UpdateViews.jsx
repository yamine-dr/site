"use client"
import { useEffect } from "react"

/**
 * A component that update the views number of the blog post with its ID.
 * @param {string} props.id ID of the blog post
 */
export default function UpdateViews({ id }) {
  useEffect(() => {
    fetch(`/api/posts/${id}/views`, {
      method: "POST",
    })
  }, [id])
  
  return null
}