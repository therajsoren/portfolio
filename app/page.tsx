import Hero from "@/components/Hero";
import Education from "@/Education/page";
import Skill from "@/skills/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="max-w-5xl mx-auto text-center pt-[150px] md:pt-[200px] mb-30">
        <Hero />
        <Skill />
        <Education />
      </div>
    </div>
  );
}
