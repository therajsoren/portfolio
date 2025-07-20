import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";

const CardProjects = () => {
  return (
    <div className="grid md:grid-cols-2 p-8 gap-8 grid-cols-1">
      {projects.map((project) => (
        <div className="w-full border-2 rounded-md p-4" key={project.id}>
          <Link href={project.link}
          target="_blank"
          >
            <Image
              src={project.image}
              alt={project.label}
              width={500}
              height={500}
              className="rounded-t-md hover:scale-105 transition-normal duration-300"
            />
          </Link>
          <h1 className="text-2xl mt-2 pt-2">{project.title}</h1>
          <p className="text-slate-400/100">{project.label}</p>
          <div className="p-4 flex flex-row flex-wrap gap-2 items-center">
            {project.tech.map((tech, index) => (
              <div
                className="flex flex-wrap border rounded-2xl py-1 px-2 w-fit gap-2"
                key={index}
              >
                <Image src={tech.icon} alt={tech.name} width={20} height={20} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default CardProjects;
