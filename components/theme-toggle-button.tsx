"use client";

import React, { useState, useCallback, useEffect } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import {
  AnimationStart,
  AnimationVariant,
  createAnimation,
} from "./theme-animations";

interface ThemeToggleAnimationProps {
  variant?: AnimationVariant;
  start?: AnimationStart;
  showLabel?: boolean;
  url?: string;
}

export function ThemeToggleButton({
  variant = "circle-blur",
  start = "top-right",
  showLabel = false,
  url = "",
}: ThemeToggleAnimationProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const styleId = "theme-transition-styles";
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const updateStyles = useCallback((css: string) => {
    if (typeof window === "undefined") return;

    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = css;
  }, []);

  const toggleTheme = useCallback(() => {
    const animation = createAnimation(variant, start, url);

    updateStyles(animation.css);

    if (typeof window === "undefined") return;

    const switchTheme = () => {
      setTheme(resolvedTheme === "light" ? "dark" : "light");
    };

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }, [resolvedTheme, setTheme, variant, start, url, updateStyles]);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5"
        aria-label="Toggle theme"
      >
        <div className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors relative group"
      aria-label="Toggle theme"
    >
      <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-white" />
      <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" />
    </button>
  );
}
