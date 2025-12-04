import {motion} from "motion/react";
import Image from "next/image";

export const floatingSkills = [
  { src: "/reactjs.svg", x: "8%", y: "25%", rotate: -15, size: 60 },
  { src: "/nextjs.svg", x: "15%", y: "55%", rotate: 10, size: 70 },
  { src: "/typescript.svg", x: "5%", y: "75%", rotate: -8, size: 55 },
  { src: "/javascript.svg", x: "70%", y: "15%", rotate: 8, size: 65 },
  { src: "/tailwind.svg", x: "80%", y: "35%", rotate: -12, size: 55 },
  { src: "/nodejs.svg", x: "85%", y: "60%", rotate: 15, size: 60 },
  { src: "/mongodb.svg", x: "60%", y: "75%", rotate: -18, size: 50 },
  { src: "/git.svg", x: "25%", y: "12%", rotate: 3, size: 45 },
  { src: "/github.svg", x: "75%", y: "80%", rotate: 5, size: 50 },
  { src: "/framer-motion.svg", x: "20%", y: "85%", rotate: -10, size: 45 },
];
export const FloatingSkill = ({
  src,
  x,
  y,
  rotate,
  size,
  index,
}: {
  src: string;
  x: string;
  y: string;
  rotate: number;
  size: number;
  index: number;
}) => {
  return (
    <motion.div
      className="absolute"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0.5, rotate: rotate - 10 }}
      animate={{
        opacity: 0.9,
        scale: 1,
        rotate: rotate,
        y: [0, -8, 0, 8, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay: index * 0.1 },
        scale: { duration: 0.8, delay: index * 0.1 },
        rotate: { duration: 0.8, delay: index * 0.1 },
        y: {
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        },
      }}
    >
      <div
        className="relative w-full h-full p-2 rounded-xl bg-white/5 backdrop-blur-sm"
        style={{
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Image
          src={src}
          alt="Skill icon"
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 40px, 70px"
        />
      </div>
    </motion.div>
  );
};
