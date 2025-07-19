import Hero from "@/components/Hero";
import Skill from "@/skills/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="max-w-5xl mx-auto text-center pt-[150px] md:pt-[200px]">
        <Hero />
        <Skill/>
      </div>
    </div>
  );
}
