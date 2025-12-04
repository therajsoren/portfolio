"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useTheme } from "next-themes";
import CardProjects from "@/components/CardProjects";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div ref={ref} className="py-20 max-w-7xl mx-auto px-4" id="projects">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h1
          className={`text-5xl font-black tracking-tighter mb-3 font-montserrat ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Featured Projects
        </h1>
        <p
          className={`text-lg font-inter font-bold tracking-tight max-w-md mx-auto ${
            isDark ? "text-white/50" : "text-gray-600"
          }`}
        >
          A showcase of my recent work and experiments
        </p>
      </motion.div>

      <CardProjects />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center mt-10"
      >
        <Link href="https://github.com/therajsoren" target="_blank">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group px-6 py-3 rounded-full bg-[#c8ff00] text-black font-medium text-sm flex items-center gap-2 hover:bg-[#b8ef00] transition-all duration-300 cursor-pointer"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Projects;
