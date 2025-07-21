import { HomeIcon, ImageIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

export interface NavLink {
  id: number;
  icon?: IconType;
  label?: string;
  href: string;
  target?: string;
  onClick?: () => void;
}

export const navLinks: NavLink[] = [
  {
    id: 1,
    icon: HomeIcon,
    label: "Home",
    href: "/",
    target: "_self",
  },
  {
    id: 2,
    icon: FaGithub,
    label: "Github",
    href: "https://github.com/therajsoren",
    target: "_blank",
  },
  {
    id: 3,
    icon: FaXTwitter,
    label: "Twitter",
    href: "https://twitter.com/therajsoren",
    target: "_blank",
  },
  {
    id: 4,
    icon: FaLinkedin,
    label: "Linkedin",
    href: "https://www.linkedin.com/in/therajsoren/",
    target: "_blank",
  },
];

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

export const driveLinks =
"https://drive.google.com/file/d/1bOViHgMQthb8adbCFFWD8tJQCdCVPukv/view?usp=sharing"
interface Skill {
  id: number;
  name: string;
  logo: string;
  color?: string;
}
export const skills: Skill[] = [
  {
    id: 1,
    name: "Javascript",
    logo: "/javascript.svg",
  },
  {
    id: 2,
    name: "Typescript",
    logo: "/typescript.svg",
  },
  {
    id: 3,
    name: "React",
    logo: "/reactjs.svg",
  },
  {
    id: 4,
    name: "Next.js",
    logo: "/nextjs.svg",
  },
  {
    id: 5,
    name: "TailwindCSS",
    logo: "/tailwind.svg",
  },
  {
    id: 6,
    name: "ShadcnUI",
    logo: "/shadcn.svg",
  },
  {
    id: 7,
    name: "Vercel",
    logo: "/vercel_dark.svg",
  },
  {
    id: 8,
    name: "Node.js",
    logo: "/nodejs.svg",
  },
  {
    id: 9,
    name: "Express.js",
    logo: "/expressjs_dark.svg",
  },
  {
    id: 10,
    name: "MongoDB",
    logo: "/mongodb.svg",
  },
  {
    id: 11,
    name: "Postman",
    logo: "/postman.svg",
  },
  {
    id: 12,
    name: "Git",
    logo: "/git.svg",
  },
  {
    id: 13,
    name: "Github",
    logo: "/github.svg",
  },
];

interface FooterLinksPorps {
  name: string;
  href: string;
}

export const footerLinks: FooterLinksPorps[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "About",
    href: "#about",
  },
];

interface TechProps {
  icon: string;
  name: string;
}

interface ProjectsProps {
  id: number;
  image: string;
  label: string;
  title: string;
  link: string;
  tech: TechProps[];
}

export const projects: ProjectsProps[] = [
  {
    id: 1,
    image: "/portfolio.png",
    label: "My personal portfolio website",
    title: "Portfolio website",
    link: "https://github.com/therajsoren/portfolio",
    tech: [
      {
        icon: "/nextjs.svg",
        name: "Next.js",
      },
      {
        icon: "/tailwind.svg",
        name: "TailwindCSS",
      },
      {
        icon: "/shadcn.svg",
        name: "ShadcnUI",
      },
      {
        icon: "/typescript.svg",
        name: "Typescript",
      },
      {
        icon: "/reactjs.svg",
        name: "React",
      },
    ],
  },

  {
    id: 2,
    image: "/later.png",
    title: "later.com ",
    label: "Create a pixel perfect frontend clone of later.com",
    link: "https://later-com-clone.vercel.app/",
    tech: [
      {
        icon: "/nextjs.svg",
        name: "Next.js",
      },
      {
        icon: "/tailwind.svg",
        name: "TailwindCSS",
      },
      {
        icon: "/shadcn.svg",
        name: "ShadcnUI",
      },
      {
        icon: "/typescript.svg",
        name: "Typescript",
      },
      {
        icon: "/reactjs.svg",
        name: "React",
      },
    ],
  },
  {
    id: 3,
    image: "/modern-saas.png",
    title: "Modern Saas Landing Page",
    label: "A modern saas landing page with responsive design",
    link: "https://modern-saas-landing-page-nine.vercel.app/",
    tech: [
      {
        icon: "/nextjs.svg",
        name: "Next.js",
      },
      {
        icon: "/tailwind.svg",
        name: "TailwindCSS",
      },
      {
        icon: "/shadcn.svg",
        name: "ShadcnUI",
      },
      {
        icon: "/typescript.svg",
        name: "Typescript",
      },
      {
        icon: "/framer-motion.svg",
        name: "Framer Motion",
      },
      {
        icon: "/reactjs.svg",
        name: "React",
      },
    ],
  },
];
