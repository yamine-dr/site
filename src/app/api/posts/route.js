import path from "node:path"; 
import { promises as fs } from "node:fs";
import matter from "gray-matter";
import { locales } from "@/src/i18n/config";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const locale = searchParams.get("locale");
  if (!locale || !locales.includes(locale))
    return new NextResponse("'locale' has a wrong value or is missing", { status: 405 });

  const postsDirectory = path.join(process.cwd(), "blog-posts");
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
      description: description[locale], // Extract the localized description
      slug: fileName.replace(/^\d+-/,"").replace(".mdx", ""),
      content: frontMatter.content,
    });
  }

  return Response.json(posts);
}