import Image from "next/image";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
      </main>
    </div>
  );
}
