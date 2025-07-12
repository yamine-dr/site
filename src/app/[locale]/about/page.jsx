"use server"
import Hero from "@/src/components/about-page/Hero";
import About from "@/src/components/about-page/About";
import Projects from "@/src/components/about-page/Projects";
import Contact from "@/src/components/about-page/Contact";
import { getTranslations } from "next-intl/server";
import { getURLWithPathname } from "../../actions";

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations("AboutPage.metadata")
  const url = "https://yaminedaroueche.com/about"
  return {
    title: t("title"),
    description: t("description"),
    author: [{ name: "Yamine Daroueche", url }],
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      siteName: t("title"),
      locale,
      type: "website",
      images: [
        {
          url: await getURLWithPathname(`/api/og?page=About&locale=${locale}`),
          width: 1200,
          height: 630,
        }
      ],
    },
  }
}

export default async function AboutPage() {
  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}