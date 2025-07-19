import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="max-w-5xl mx-auto text-center mt-[6rem]">
        <Hero />
      </div>
    </div>
  );
}
