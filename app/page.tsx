"use client";
import Footer from "@/components/Footer";
import Contact from "@/Contact/page";
import Projects from "@/components/projects";
import Skill from "@/skills/page";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="font-rubik">
      {/* Hero Section */}
      <section id="hero" data-scroll-section>
        <Hero />
      </section>

      {/* Skills Section */}
      <section id="skills" data-scroll-section className="scroll-mt-20">
        <Skill />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        data-scroll-section
        className="scroll-mt-20 text-center"
      >
        <Projects />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-scroll-section
        className="scroll-mt-20 text-center"
      >
        <Contact />
      </section>

      {/* Footer */}
      <footer data-scroll-section>
        <Footer />
      </footer>
    </div>
  );
}
