interface TechProps {
  icon: string;
  name: string;
}

interface ProjectsProps {
  id: number;
  image: string;
  label: string;
  title: string;
  github: string;
  live: string;
  tech: TechProps[];
}

export const projects: ProjectsProps[] = [
  {
    id: 1,
    image: "/portfolio.png",
    label: "My personal portfolio website",
    title: "Portfolio website",
    github: "https://github.com/therajsoren/portfolio",
    live: "https://rajsoren.vercel.app",
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
    github: "https://github.com/therajsoren/later-com-clone",
    live: "https://later-com-clone.vercel.app/",
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
    github: "https://github.com/therajsoren/modern-saas-landing-page",
    live: "https://modern-saas-landing-page-nine.vercel.app/",
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
