import { navLinks } from "@/data";
import { MoonIcon, SunIcon } from "lucide-react";
import {
  motion,
  useMotionValue,
  MotionValue,
  useTransform,
  useSpring,
} from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "next-themes";

import {forwardRef, useRef } from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import Link from "next/link";

const DockHeader = () => {
  const { theme, setTheme } = useTheme();
  const dockItems = [
    ...navLinks,
    {
      icon: theme === "dark" ? SunIcon : MoonIcon,
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
  ];
  return (
    <TooltipProvider>
      <div className="fixed inset-x-0 h-16 flex justify-center bottom-8">
        <Dock items={dockItems} />
      </div>
    </TooltipProvider>
  );
};

const Dock = ({ items }: { items: any[] }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-full border items-end rounded-4xl px-4 py-2 gap-2 backdrop-blur-lg ring-1 shadow-lg ring-black/10"
    >
      {items.map((item, index) => (
        <Tooltip key={index} delayDuration={0}>
          <TooltipTrigger asChild>
            <AppIcon mouseX={mouseX} item={item} />
          </TooltipTrigger>
          <TooltipContent className="text-center">
            <p>{item.label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};
export default DockHeader;

const AppIcon = ({ mouseX, item }: { mouseX: MotionValue; item: any }) => {
  let ref = useRef<HTMLDivElement>(null);
  let distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  let widthSync = useTransform(distance, [-120, 0, 120], [44, 80, 44]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square rounded-full bg-gray-500/20 w-11"
    >
      {item.href ? (
        <Link
          href={item.href}
          target={item.target}
          rel="noopener noreferrer"
          className="flex items-center justify-center h-full w-full cursor-pointer"
        >
          <item.icon className="w-7 h-7" />
        </Link>
      ) : (
        <button
          className="flex items-center justify-center h-full w-full cursor-pointer"
          onClick={item.onClick}
        >
          <item.icon className="w-7 h-7" />
        </button>
      )}
    </motion.div>
  );
};
