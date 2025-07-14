"use server"
import { getLocale, getTranslations } from "next-intl/server";
import { getMetadata } from '@/src/app/metadata'
import Hero from "@/src/components/about-page/Hero";
import About from "@/src/components/about-page/About";
import Projects from "@/src/components/about-page/Projects";
import Contact from "@/src/components/about-page/Contact";

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations("AboutPage.metadata")
  return getMetadata(t, "/about", locale)
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