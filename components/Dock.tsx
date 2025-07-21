"use client";
import { NavLink, navLinks } from "@/data";
import { MoonIcon, SunIcon } from "lucide-react";
import {
  motion,
  useMotionValue,
  MotionValue,
  useTransform,
  useSpring,
} from "motion/react";

import { useTheme } from "next-themes";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type ActionItem = {
  icon: React.ElementType;
  onClick: () => void;
};

type DockItemType = NavLink | ActionItem;

const DockHeader = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const dockItems: DockItemType[] = [
    ...navLinks,
    {
      icon: theme === "dark" ? SunIcon : MoonIcon,
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
  ];
  return (
    <div className="fixed inset-x-0 h-16 flex justify-center bottom-8">
      <Dock items={dockItems} />
    </div>
  );
};

const Dock = ({ items }: { items: DockItemType[] }) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-full border items-end rounded-4xl px-4 py-2 gap-2 backdrop-blur-lg ring-1 shadow-lg ring-black/10 dark:ring-white/10"
    >
      {items.map((item, index) => (
        <AppIcon mouseX={mouseX} item={item} key={index} />
      ))}
    </div>
  );
};
export default DockHeader;

const AppIcon = ({
  mouseX,
  item,
}: {
  mouseX: MotionValue;
  item: DockItemType;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const widthSync = useTransform(distance, [-120, 0, 120], [44, 80, 44]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square rounded-full bg-gray-500/20 w-10 "
    >
      {"href" in item && item.href ? (
        <Link
          href={item.href}
          target={item.target}
          rel="noopener noreferrer"
          className="flex items-center justify-center h-full w-full cursor-pointer"
        >
          {item.icon && <item.icon />}
        </Link>
      ) : (
        <button
          className="flex items-center justify-center h-full w-full cursor-pointer"
          onClick={item.onClick}
        >
          {item.icon && <item.icon />}
        </button>
      )}
    </motion.div>
  );
};
