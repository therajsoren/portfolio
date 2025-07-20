import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Contact from "@/Contact/page";
import Education from "@/Education/page";
import Projects from "@/Projects/page";
import Skill from "@/skills/page";

export default function Home() {
  return (
    <div>
      <div className="max-w-5xl mx-auto text-center pt-[150px] md:pt-[200px]">
        <Hero />
        <section className="grid grid-cols-1 md:grid-cols-2 h-fit w-fit">
          <Skill />
          <Education />
        </section>
        <Projects />
        <Contact/>
        <Footer />
      </div>
    </div>
  );
}
