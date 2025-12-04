"use client";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

const ThemeTransition = () => {
  const { resolvedTheme } = useTheme();
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayColor, setOverlayColor] = useState("#0a0a0a");
  const prevTheme = useRef<string | undefined>(undefined);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevTheme.current = resolvedTheme;
      return;
    }

    // Only animate if theme actually changed
    if (
      prevTheme.current !== resolvedTheme &&
      prevTheme.current !== undefined
    ) {
      // Set the color to the NEW theme color
      setOverlayColor(resolvedTheme === "dark" ? "#0a0a0a" : "#f9fafb");
      setShowOverlay(true);

      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 600);

      prevTheme.current = resolvedTheme;
      return () => clearTimeout(timer);
    }

    prevTheme.current = resolvedTheme;
  }, [resolvedTheme]);

  if (!showOverlay) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none animate-theme-sweep"
      style={{
        backgroundColor: overlayColor,
      }}
    />
  );
};

export default ThemeTransition;
