import PaperTear from "@/components/PaperTear";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Turn from "@/components/Turn";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import FileTree from "@/components/FileTree";
import AboutNote from "@/components/AboutNote";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <PaperTear />

      <div id="top">
        <header className="corner mono">
          <a href="#top" className="corner-id">AYUSH · FILE № 2026</a>
          <nav>
            <a href="#story">story</a>
            <a href="#work">work</a>
            <a href="#stack">stack</a>
            <a href="#files">files</a>
            <a href="#contact">contact</a>
          </nav>
        </header>

        <main>
          <Hero />
          <div className="rule" aria-hidden="true"><span>✂</span></div>
          <Story />
          <Turn />
          <div className="rule" aria-hidden="true"><span>✂</span></div>
          <Projects />
          <Stack />
          <div className="rule" aria-hidden="true"><span>✂</span></div>
          <FileTree />
          <AboutNote />
          <Contact />
        </main>
      </div>
    </>
  );
}
