import { getFullUrl } from "../app/actions";

export async function getPosts(locale) {
  const postsURL = await getFullUrl(`/api/posts?locale=${locale}`);
  const posts = await fetch(postsURL);
  return await posts.json();
}

export async function getPost(slug, locale) {
  const posts = await getPosts(locale);
  return posts.find(post => post.slug === slug);
}