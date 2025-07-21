"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { navLinks, NavLink } from "@/data";
import Dock from "@/components/Dock";
import { MoonIcon, SunIcon } from "lucide-react";

type ActionItem = {
  icon: React.ElementType;
  onClick: () => void;
};
type DockItemType = NavLink | ActionItem;

type NavProps = {
  items: DockItemType[];
};

const useIsDesktop = (breakpoint = 768) => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > breakpoint);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isDesktop;
};

const Header = () => {
  const isDesktop = useIsDesktop();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dockItems: DockItemType[] = [
    ...navLinks,
    {
      icon: theme === "dark" ? SunIcon : MoonIcon,
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <nav className="relative">
      <div className="fixed inset-x-0 bottom-8 z-50 flex h-16 justify-center">
        {isDesktop ? <Dock /> : <MobileNav items={dockItems} />}
      </div>
    </nav>
  );
};
export default Header;

const MobileNav = ({ items }: NavProps) => {
  return (
    <div className="mx-auto flex h-full items-center justify-center gap-2 rounded-full border bg-white/50 px-4 py-2 backdrop-blur-md ring-1 shadow-lg ring-black/10 dark:border-white/10 dark:bg-black/50">
      {items.map((item, index) => (
        <div key={index} className="aspect-square w-10 rounded-full">
          {"href" in item && item.href ? (
            <Link
              href={item.href}
              target={item.target}
              rel="noopener noreferrer"
              className="flex h-full w-full cursor-pointer items-center justify-center"
            >
              {item.icon && <item.icon />}
            </Link>
          ) : (
            <button
              className="flex h-full w-full cursor-pointer items-center justify-center"
              onClick={item.onClick}
            >
              {item.icon && <item.icon />}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
