import { HomeIcon, ImageIcon } from "lucide-react";
import { number } from "motion/react";
import { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

interface NavLink {
  icon: IconType;
  label: string;
  href: string;
  target?: string;
}

export const navLinks: NavLink[] = [
  {
    icon: HomeIcon,
    label: "Home",
    href: "/",
    target: "_self",
  },
  {
    icon: FaGithub,
    label: "Github",
    href: "https://github.com/therajsoren",
    target: "_blank",
  },
  {
    icon: FaXTwitter,
    label: "Twitter",
    href: "https://twitter.com/therajsoren",
    target: "_blank",
  },
  {
    icon: FaLinkedin,
    label: "linkedin",
    href: "https://www.linkedin.com/in/therajsoren/",
    target: "_blank",
  },
];

interface Skill {
  id: number;
  name: string;
  logo: string;
  color: string;
}

interface EducationProps {
  id: number;
  image: string;
  school: string;
  year: string;
  description: string;
}

export const education: EducationProps[] = [
  {
    id: 1,
    image: "/dav.jpeg",
    school: "Dav Public School, Dhori",
    year: "2013 - 2022",
    description: "Metric & Intremediate",
  },
  {
    id: 2,
    image: "/bit.png",
    school: "BIT Sindri",
    year: "2022 - 2026",
    description: "B.Tech, ECE",
  },
];

export const skills: Skill[] = [
  {
    id: 1,
    name: "Javascript",
    logo: "/assets/skills/javascript.svg",
    color: "#F7DF1E",
  },
  {
    id: 2,
    name: "Typescript",
    logo: "/assets/skills/typescript.svg",
    color: "#3178C6",
  },
  {
    id: 3,
    name: "React",
    logo: "/assets/skills/react.svg",
    color: "#61DAFB",
  },
  {
    id: 4,
    name: "Next.js",
    logo: "/assets/skills/nextjs.svg",
    color: "#22e65c",
  },
  {
    id: 5,
    name: "TailwindCSS",
    logo: "/assets/skills/tailwind.svg",
    color: "#06B6D4",
  },
  {
    id: 6,
    name: "ShadcnUI",
    logo: "/assets/skills/shadcn.svg",
    color: "#c31a82",
  },
  {
    id: 7,
    name: "Vercel",
    logo: "/assets/skills/vercel.svg",
    color: "#e622d2",
  },
  {
    id: 8,
    name: "Node.js",
    logo: "/assets/skills/nodejs.svg",
    color: "#339933",
  },
  {
    id: 9,
    name: "Express.js",
    logo: "/assets/skills/express.svg",
    color: "#086eef",
  },
  {
    id: 10,
    name: "MongoDB",
    logo: "/assets/skills/mongodb.svg",
    color: "#47A248",
  },
  {
    id: 11,
    name: "Postman",
    logo: "/assets/skills/postman.svg",
    color: "#60bdef",
  },
  {
    id: 12,
    name: "Git",
    logo: "/assets/skills/git.svg",
    color: "#F05032",
  },
  {
    id: 13,
    name: "Github",
    logo: "/assets/skills/github.svg",
    color: "#e67614",
  },
];
