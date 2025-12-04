"use client";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { driveLinks } from "@/data";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-2 p-1.5 bg-black/80 backdrop-blur-xl rounded-full border border-white/10 shadow-lg">
        {/* Logo */}
        <Link
          href="#hero"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <span className="font-montserrat font-bold text-2xl text-white leading-none pt-1">
            R
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center px-4 gap-6">
          <Link
            href="#projects"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors font-lato"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors font-lato"
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors font-lato"
          >
            Contact
          </Link>
        </div>

        <div className="w-px h-4 bg-white/10 mx-1 hidden md:block" />

        <button
          onClick={toggleTheme}
          className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden group"
          aria-label="Toggle theme"
        >
          <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors rounded-full" />

          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              <motion.div
                key="moon"
                initial={{ scale: 0, rotate: 90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="w-4 h-4 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="w-4 h-4 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        <Link
          href={driveLinks}
          target="_blank"
          className="px-5 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-200 transition-colors font-montserrat ml-1"
        >
          Resume
        </Link>
      </div>
    </motion.nav>
  );
};

export default Header;
