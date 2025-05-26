import Header from "../components/layout/Header";
import Hero from "../components/homepage/Hero";
import About from "../components/homepage/About";

export default function Home() {
  return (
    <>
      <Header/>

      <main>
        <Hero/>
        <About/>
      </main>
    </>
  );
}