"use client";
import { projects } from "@/data/projects";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const CardProjects = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isDark = theme === "dark";

  return (
    <div
      ref={ref}
      className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 p-4 md:p-0 grid-cols-1"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 ${
            isDark
              ? "bg-white/[0.03] border-white/10 hover:border-white/20"
              : "bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl"
          }`}
        >
          {/* Image Container */}
          <div className="relative overflow-hidden aspect-video">
            <Link href={project.live} target="_blank">
              <Image
                src={project.image}
                alt={project.label}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </Link>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Title and buttons */}
            <div className="flex items-start justify-between gap-2">
              <h2
                className={`text-xl font-bold font-montserrat transition-colors ${
                  isDark
                    ? "text-white group-hover:text-white/90"
                    : "text-gray-900"
                }`}
              >
                {project.title}
              </h2>

              {/* Action buttons */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <Link
                  href={project.github}
                  target="_blank"
                  aria-label="View on GitHub"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                      isDark
                        ? "bg-white/10 hover:bg-white/20"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <Github
                      className={`w-4 h-4 ${isDark ? "text-white" : "text-gray-700"}`}
                    />
                  </motion.div>
                </Link>
                <Link
                  href={project.live}
                  target="_blank"
                  aria-label="View live preview"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                      isDark
                        ? "bg-white/10 hover:bg-white/20"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <ExternalLink
                      className={`w-4 h-4 ${isDark ? "text-white" : "text-gray-700"}`}
                    />
                  </motion.div>
                </Link>
              </div>
            </div>

            {/* Description */}
            <p
              className={`text-sm font-inter font-bold tracking-tight leading-relaxed line-clamp-2 text-left ${
                isDark ? "text-white/50" : "text-gray-600"
              }`}
            >
              {project.label}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((tech) => {
                const isShadcnUI = tech.name === "ShadcnUI";
                const iconSrc =
                  isShadcnUI && !isDark ? "/shadcn-light.svg" : tech.icon;

                return (
                  <div
                    key={tech.name}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition-colors ${
                      isDark
                        ? "bg-white/[0.05] border-white/10 hover:border-white/20"
                        : "bg-gray-50 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={iconSrc}
                      alt={tech.name}
                      width={14}
                      height={14}
                    />
                    <span
                      className={`text-xs font-lato ${isDark ? "text-white/60" : "text-gray-600"}`}
                    >
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardProjects;
