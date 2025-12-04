"use client";
import { lightThemeIcons, skills } from "@/data";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const Skill = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  const duplicatedSkills = [...skills, ...skills, ...skills];
  const reversedSkills = [...skills, ...skills, ...skills].reverse();

  const isDark = theme === "dark";

  return (
    <div
      className={`py-20 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
          : "bg-gradient-to-b from-transparent via-black/[0.02] to-transparent"
      }`}
      ref={ref}
    >
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
          Skills & Technologies
        </h1>
        <p
          className={`text-lg font-inter font-bold tracking-tight max-w-md mx-auto ${
            isDark ? "text-white/50" : "text-gray-600"
          }`}
        >
          Technologies I work with to bring ideas to life
        </p>
      </motion.div>

    
      <div className="relative overflow-hidden py-4 mb-4">

        <div
          className={`absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none ${
            isDark
              ? "bg-gradient-to-r from-black via-black/80 to-transparent"
              : "bg-gradient-to-r from-white via-white/80 to-transparent"
          }`}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none ${
            isDark
              ? "bg-gradient-to-l from-black via-black/80 to-transparent"
              : "bg-gradient-to-l from-white via-white/80 to-transparent"
          }`}
        />

        <motion.div
          className="flex gap-4"
          animate={{
            x: [-100 * skills.length, 0],
          }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.map((skill, index) => {
            const hasLightThemeIcon = !isDark && lightThemeIcons[skill.name];
            const iconSrc = hasLightThemeIcon
              ? lightThemeIcons[skill.name]
              : skill.logo;

            return (
              <motion.div
                key={`row1-${skill.id}-${index}`}
                className={`flex-shrink-0 border rounded-2xl px-5 py-3 backdrop-blur-sm flex items-center gap-3 transition-all duration-300 cursor-pointer group ${
                  isDark
                    ? "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.08]"
                    : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isDark
                      ? "bg-white/10 group-hover:bg-white/20"
                      : "bg-gray-200 group-hover:bg-gray-300"
                  }`}
                >
                  <Image
                    src={iconSrc}
                    alt={skill.name}
                    width={20}
                    height={20}
                  />
                </div>
                <span
                  className={`text-sm font-medium whitespace-nowrap transition-colors ${
                    isDark
                      ? "text-white/80 group-hover:text-white"
                      : "text-gray-700 group-hover:text-gray-900"
                  }`}
                >
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="relative overflow-hidden py-4">
        <div
          className={`absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none ${
            isDark
              ? "bg-gradient-to-r from-black via-black/80 to-transparent"
              : "bg-gradient-to-r from-white via-white/80 to-transparent"
          }`}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none ${
            isDark
              ? "bg-gradient-to-l from-black via-black/80 to-transparent"
              : "bg-gradient-to-l from-white via-white/80 to-transparent"
          }`}
        />

        <motion.div
          className="flex gap-4"
          animate={{
            x: [0, -100 * skills.length],
          }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {reversedSkills.map((skill, index) => {
            const hasLightThemeIcon = !isDark && lightThemeIcons[skill.name];
            const iconSrc = hasLightThemeIcon
              ? lightThemeIcons[skill.name]
              : skill.logo;

            return (
              <motion.div
                key={`row2-${skill.id}-${index}`}
                className={`flex-shrink-0 border rounded-2xl px-5 py-3 backdrop-blur-sm flex items-center gap-3 transition-all duration-300 cursor-pointer group ${
                  isDark
                    ? "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.08]"
                    : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isDark
                      ? "bg-white/10 group-hover:bg-white/20"
                      : "bg-gray-200 group-hover:bg-gray-300"
                  }`}
                >
                  <Image
                    src={iconSrc}
                    alt={skill.name}
                    width={20}
                    height={20}
                  />
                </div>
                <span
                  className={`text-sm font-medium whitespace-nowrap transition-colors ${
                    isDark
                      ? "text-white/80 group-hover:text-white"
                      : "text-gray-700 group-hover:text-gray-900"
                  }`}
                >
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;
