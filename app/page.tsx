import Hero from "@/components/Hero";
import Skill from "@/skills/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="max-w-5xl mx-auto text-center">
        <Hero />
        <Skill/>
      </div>
    </div>
  );
}
