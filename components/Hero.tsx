"use client";
import { motion } from "motion/react";

import ScrollIndicator from "./ScrollIndicator";
import { FloatingSkill, floatingSkills } from "./FloatingSkill";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-0 mt-0 transition-colors duration-500 bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-none dark:bg-black">

      {floatingSkills.map((skill, index) => (
        <FloatingSkill
          key={index}
          src={skill.src}
          x={skill.x}
          y={skill.y}
          rotate={skill.rotate}
          size={skill.size}
          index={index}
        />
      ))}

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0.8)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.8)_100%)]" />

      <div className="relative z-10 text-center px-4">
        <motion.p
          className="text-lg md:text-xl mb-4 font-lato tracking-wider text-gray-500 dark:text-white/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hey, I&apos;m
        </motion.p>
        <motion.h1
          className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 font-montserrat text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          RAJ SOREN
        </motion.h1>
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-3 text-gray-700 dark:text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="text-lg md:text-xl font-lato">I craft</span>
          <span className="px-5 py-2 border rounded-full text-lg md:text-xl font-rubik backdrop-blur-sm border-gray-300 bg-white/50 dark:border-white/40 dark:bg-white/5">
            ✨ digital experiences
          </span>
          <span className="text-lg md:text-xl font-lato">that inspire</span>
        </motion.div>
        <motion.p
          className="text-base md:text-lg mt-6 max-w-md mx-auto font-lato text-gray-500 dark:text-white/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Full Stack Developer • React • Next.js • Node.js
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
