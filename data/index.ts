import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { IconType } from "react-icons/lib";

export const driveLinks =
  "https://drive.google.com/file/d/1GwsqinXHihSRLSNEh5yzkdN8cf3zVLmD/view?usp=sharing";
export const lightThemeIcons: { [key: string]: string } = {
  ShadcnUI: "/shadcn-light.svg",
  "Express.js": "/expressjs.svg",
  Vercel: "/vercel.svg",
  Github: "/github_light.svg",
  "Next.js": "/next.svg",
};

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
  url: string;
  icon: IconType;
}

export const socialLinks: FooterLinksPorps[] = [
  { name: "GitHub", url: "https://github.com/therajsoren", icon: BsGithub },
  { name: "X", url: "https://x.com/therajsoren", icon: BsTwitterX },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/therajsoren",
    icon: BsLinkedin,
  },
];
