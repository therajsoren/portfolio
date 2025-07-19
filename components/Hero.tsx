"use client";
import { Button } from "./ui/button";
import DrawerComponent from "./Drawer";
import Link from "next/link";
import Arrow from "./Arrow";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="min-h-screen px-4">
      <div className="relative inline-block">
        <DrawerComponent />
        <Arrow />
      </div>
      <div className="space-y-4 pt-[1rem] p-1">
        <AnimatePresence>
          <motion.h1
            className="text-6xl font-black -tracking-wider"
            ref={ref}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5 }}
          >
            A{" "}
            <motion.span
              className="bg-gradient-to-b from-red-500 to-orange-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -18 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Full Stack{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              developer based in{" "}
            </motion.span>
            <motion.span
              className="dark:bg-[linear-gradient(to_bottom,#e76621_55%,#f6faf9_50%,#f6faf9_66.6%,#7be721_30%)] dark:bg-clip-text dark:text-transparent"
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              India{" "}
            </motion.span>
          </motion.h1>
        </AnimatePresence>

        <p className="md:text-2xl text-lg font-semibold text-slate-400/50 -tracking-wide mb-[60px]">
          I enjoy building modern and efficient web applications using Next.js,
          React, and Tailwind CSS.
        </p>
        <div className="relative overflow-hidden rounded-full dark:bg-zinc-900 bg-white shadow border dark:border-zinc-800 group border-zinc-400 p-px w-fit mx-auto">
          <Link href={"/resume.pdf"} target="_blank" className="p-px">
            <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] group-hover:bg-none" />
            <Button className="h-10 px-2 rounded-full font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-xl bg-zinc-50 dark:bg-zinc-900">
              Download my resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
