import { getTranslations } from "next-intl/server";
import { getPost } from "../libs/posts";

const getOGSiteName = (locale) => {
  let siteName;
  switch (locale) {
    case "fr":
      siteName = "Site web de Yamine Daroueche, développeur Web";
      break;
      
    default:
      siteName = "Website of Yamine Daroueche, Web developer";
      break;
  }
  return siteName;
}

const getOGImage = (pathname, locale) => {
  const page = (pathname === "/") 
    ? "Root" 
    : pathname.replace("/", "").substring(0, 1).toUpperCase() + pathname.substring(2); 

  let alt;
  switch (`${page}|${locale}`) {
    case "Root|fr":
      alt = "Bannière du site web de Yamine Daroueche";
      break;  
    case "Root|en":
      alt = "Preview image of Yamine Daroueche's website";
      break;
  
    case "About|fr":
      alt = "Bannière du portfolio de Yamine Daroueche";
      break;
    case "About|en":
      alt = "Preview image of Yamine Daroueche's portfolio";
      break;
  
    case "Blog|fr":
      alt = "Bannière du blog de Yamine Daroueche";
      break;
    case "Blog|en":
      alt = "Preview image of Yamine Daroueche's blog";
      break;
  
    default:
      alt = ""
      break;
  }

  return {
    url: `/api/og-image?page=${page}&locale=${locale}`,
    width: 1200,
    height: 630,
    alt
  }
}

export const getMetadata = (t, pathname, locale) => {
  const langPath = (pathname === "/") ? "" : pathname;

  return {
    title: t("title"),
    description: t("description"),
    creator: "Yamine Daroueche",
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: pathname,
      type: "website",
      siteName: getOGSiteName(locale),
      locale,
      images: [getOGImage(pathname, locale)],
    },
    alternates: {
      canonical: pathname,
      languages: {
        "en": "/en"+langPath,
        "fr": "/fr"+langPath,
      },
    }
  }
}

export const getBlogPostMetadata = async (slug, locale) => {
  const post = await getPost(slug, locale)

  if (!post) {
    const t = await getTranslations({locale, namespace: "NotFound"})
    return {
      title: t("notFound.title"),
      description: t("notFound.description"),
    }
  }

  const pathname = `/blog/posts/${post.slug}`; 
  
  return {
    title: post.title,
    description: post.description,
    authors: [{name: "Yamine Daroueche", url: "https://yaminedaroueche.com"}],
    publisher: "Yamine Daroueche",
    openGraph: {
      title: post.title,
      description: post.description,
      url: pathname,
      type: "article",
      authors: ["Yamine Daroueche"],
      publishedTime: post.publishedAt,
      siteName: getOGSiteName(locale),
      locale,
      images: [
        {
          url: `/api/post/og-image?slug=${slug}&locale=${locale}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    alternates: {
      canonical: pathname,
      languages: {
        "en": "/en"+pathname,
        "fr": "/fr"+pathname,
      },
    }
  }
}