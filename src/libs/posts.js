import path from "node:path"; 
import { promises as fs } from "node:fs";
import matter from "gray-matter";
// import { z } from "zod";

const postsDirectory = path.join(process.cwd(), "blog-posts");

export const getPosts = async (locale) => {
  const files = await fs.readdir(postsDirectory);
  const fileNames = files.filter(file => file.endsWith(".mdx"));

  const posts = [];
  for await (const fileName of fileNames) {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const frontMatter = matter(fileContent);

    // Skip unpublished posts in production
    if (!frontMatter.data.published && process.env.NODE_ENV !== "development") {
      continue;
    }

    const { title, description, ...rest } = frontMatter.data;
    posts.push({
      ...rest,
      id: fileName.substring(0, 3).replace(/0+/, ""),
      title: title[locale], // extract the localized title
      description: description[locale], // extract the localized description
      slug: fileName.replace(/^\d+-/,"").replace(".mdx", ""),
      content: frontMatter.content,
    });
  }

  return posts;
}

export const getPost = async (slug, locale) => {
  const posts = await getPosts(locale);
  return posts.find(post => post.slug === slug);
}