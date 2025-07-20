"use client";
import { Button } from "./ui/button";
import DrawerComponent from "./Drawer";
import Link from "next/link";
import Arrow from "./Arrow";
import { BorderBeam } from "./magicui/border-beam";

const Hero = () => {
  return (
    <div className="h-[78vh] px-4 relative ">
      <div className="relative inline-block">
        <DrawerComponent />
        <Arrow />
      </div>
      <div className="space-y-4 pt-[1rem] p-1">
        <h1 className="text-6xl font-black -tracking-wider ">
          A{" "}
          <span className="bg-gradient-to-b from-red-500 to-orange-300 bg-clip-text text-transparent">
            Full Stack{" "}
          </span>
          developer based in{" "}
          <span className="dark:bg-[linear-gradient(to_bottom,#e76621_55%,#f6faf9_50%,#f6faf9_66.6%,#7be721_30%)] dark:bg-clip-text dark:text-transparent whitespace-nowrap">
            India{" "}
          </span>
        </h1>
        <p className="md:text-2xl text-lg font-semibold text-slate-400/50 -tracking-wide mb-[80px]">
          I enjoy building modern and efficient web applications using Next.js,
          React, and Tailwind CSS.
        </p>
          <Link href={"/resume.pdf"} target="_blank" className="p-px">
            <Button className="h-10 px-4 rounded-full font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-xl bg-zinc-50 dark:bg-zinc-900 hover:text-zinc-200 cursor-pointer hover:dark:bg-zinc-600">
              Download my resume
              <BorderBeam/>
            </Button>
          </Link>
      </div>
    </div>
  );
};
export default Hero;
