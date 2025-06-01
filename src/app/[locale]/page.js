import Header from "@/src/components/layout/Header";
import Hero from "../../components/homepage/Hero";
import About from "../../components/homepage/About";
import Projects from "../../components/homepage/Projects";
import Contact from "../../components/homepage/Contact";

export default function HomePage() {
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