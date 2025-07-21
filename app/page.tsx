import AboutMe from "@/About/page";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Contact from "@/Contact/page";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Skill from "@/skills/page";

export default function Home() {
  return (
    <div className="font-mono">
      <header className="min-h-screen w-full flex items-center justify-center ">
        <Hero />
      </header>

      <main className="flex lg:justify-between lg:items-center gap-4 lg:flex-row flex-col p-4 text-center mb-2 max-w-7xl mx-auto">
        <AboutMe />
        <Education />
      </main>
      <Skill />
      <section className="text-center">
        <Projects />
        <Contact />
      </section>
      <footer className="text-center">
        <Footer />
      </footer>
    </div>
  );
}
