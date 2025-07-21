"use client";
import { useTheme } from "next-themes";
import { HyperspaceBackground } from "./hyperspace-background";

const Background = () => {
  const { theme } = useTheme();

  return (
    <div className="overflow-hidden">
      {theme == "dark" ? (
        <HyperspaceBackground />
      ) : (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      )}
    </div>
  );
};
export default Background;
