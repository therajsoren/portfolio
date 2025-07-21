"use client";
import { projects } from "@/data";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const CardProjects = () => {
  const { theme } = useTheme();
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:p-8 p-14 gap-8 grid-cols-1">
      {projects.map((project) => (
        <div className="w-fit mx-auto border-2 rounded-md p-4 space-y-2 text-left" key={project.id}>
          <Link href={project.link} target="_blank">
            <Image
              src={project.image}
              alt={project.label}
              width={500}
              height={500}
              className="rounded-t-md w-full  object-cover hover:scale-105 transition-normal duration-300"
            />
          </Link>
          <h1 className="md:text-xl text-base font-semibold mt-2 pt-2">
            {project.title}
          </h1>
          <p className="text-xs md:text-sm font-extralight">
            {project.label}
          </p>
          <div className="w-full flex flex-wrap gap-2 pt-2">
            {project.tech.map((tech) => {
              const isShadcnUI = tech.name === "ShadcnUI";
              const iconSrc =
                isShadcnUI && theme === "light"
                  ? "/shadcn-light.svg"
                  : tech.icon;

              return (
                <div
                  key={tech.name}
                  className=" rounded-md flex items-center justify-center border p-0.5"
                >
                  <div className="flex items-center gap-1">
                    <Image
                      src={iconSrc}
                      alt={tech.name}
                      width={16}
                      height={16}
                    />
                    <span className="text-xs">{tech.name}</span>
                  </div>
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
