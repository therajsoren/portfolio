"use client";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const ThemeTransition = () => {
  const { setTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);
  const [config, setConfig] = useState({
    oldTheme: "",
    newTheme: "",
  });
  const themeChangeTriggered = useRef(false);

  useEffect(() => {
    const handleTransition = (e: Event) => {
      const customEvent = e as CustomEvent;
      const { theme } = customEvent.detail;

      setConfig({
        oldTheme: theme === "dark" ? "light" : "dark",
        newTheme: theme,
      });
      themeChangeTriggered.current = false;
      setIsActive(true);
    };

    window.addEventListener("theme-transition-trigger", handleTransition);
    return () =>
      window.removeEventListener("theme-transition-trigger", handleTransition);
  }, []);

  // Change theme after a delay to let the overlay start covering
  useEffect(() => {
    if (isActive && !themeChangeTriggered.current) {
      const timer = setTimeout(() => {
        setTheme(config.newTheme);
        themeChangeTriggered.current = true;
      }, 100); // Small delay so overlay starts expanding first
      return () => clearTimeout(timer);
    }
  }, [isActive, config.newTheme, setTheme]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none"
          style={{
            backgroundColor: config.newTheme === "dark" ? "#0a0a0a" : "#f9fafb",
          }}
          initial={{
            clipPath: "circle(0% at 100% 0%)",
          }}
          animate={{
            clipPath: "circle(150% at 100% 0%)",
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          onAnimationComplete={() => setIsActive(false)}
        />
      )}
    </AnimatePresence>
  );
};

export default ThemeTransition;
