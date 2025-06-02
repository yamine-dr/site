import Header from "@/src/components/layout/Header";
import Hero from "@/src/components/homepage/Hero";
import About from "@/src/components/homepage/About";
import Projects from "@/src/components/homepage/Projects";
import Contact from "@/src/components/homepage/Contact";

export default function PortfolioPage() {
  return (
    <>
      <Header/>

      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
      </main>
    </>
  );
}