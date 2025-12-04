"use client";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.div
      className="fixed bottom-8 left-8 z-50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2 }}
    >
      <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full p-1">
        <button
          onClick={() => setTheme("dark")}
          className={`px-3 py-1 text-sm rounded-full transition-all ${
            isDark ? "bg-white/20 text-white" : "text-white/60 hover:text-white"
          }`}
        >
          Dark
        </button>
        <button
          onClick={() => setTheme("light")}
          className={`px-3 py-1 text-sm rounded-full transition-all ${
            !isDark
              ? "bg-white/20 text-white"
              : "text-white/60 hover:text-white"
          }`}
        >
          Light
        </button>
      </div>
    </motion.div>
  );
};

export default ThemeToggle;
