"use client";
import { projects } from "@/data";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const CardProjects = () => {
  const { theme } = useTheme();
  return (
    <div className="grid md:grid-cols-2 p-8 gap-8 grid-cols-1">
      {projects.map((project) => (
        <div className="w-full border-2 rounded-md p-4" key={project.id}>
          <Link href={project.link} target="_blank">
            <Image
              src={project.image}
              alt={project.label}
              width={500}
              height={500}
              className="rounded-t-md w-full  object-cover hover:scale-105 transition-normal duration-300"
            />
          </Link>
          <h1 className="text-2xl mt-2 pt-2">{project.title}</h1>
          <p className="text-slate-400/100">{project.label}</p>
          <div className="flex flex-row flex-wrap items-center gap-2 p-4">
            {project.tech.map((tech) => {
              const isShadcnUI = tech.name === "ShadcnUI";
              const iconSrc =
                isShadcnUI && theme === "light"
                  ? "/shadcn-light.svg"
                  : tech.icon;

              return (
                <div
                  key={tech.name}
                  className="flex w-fit items-center gap-2 rounded-2xl border py-1 px-2"
                >
                  <Image src={iconSrc} alt={tech.name} width={20} height={20} />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
export default CardProjects;
