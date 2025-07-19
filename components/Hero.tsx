"use client";
import { Button } from "./ui/button";
import DrawerComponent from "./Drawer";
import Link from "next/link";
import Arrow from "./Arrow";

const Hero = () => {
  return (
    <div className="min-h-screen px-8">
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
        <p className="md:text-2xl text-lg font-semibold text-slate-400/50 -tracking-wide">
          I enjoy building modern and efficient web applications using Next.js,
          React, and Tailwind CSS.
        </p>
        <Link href={"/resume.pdf"} target="_blank" className="p-px">
          <Button className="rounded-xl mt-12 cursor-pointer tracking-wide dark:text-slate-800 px-6 hover:scale-105">
            Download my resume
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
