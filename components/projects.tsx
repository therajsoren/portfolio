import CardProjects from "@/components/CardProjects";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="mt-[2rem] mb-20" id="projects">
      <div className="mb-[1rem]">
        <h1 className="text-4xl font-black -tracking-tight">Projects</h1>
      </div>
      <h1 className="text-2xl max-w-3xl mx-auto -tracking-wider">
        Check outs my projects
        <div className="h-0.5 w-1/3 mx-auto relative">
          <BorderBeam />
        </div>
      </h1>
      <CardProjects />
      <Link href="https://github.com/therajsoren" target="_blank">
        <Button className="text-lg cursor-pointer">View all projects</Button>
      </Link>
    </div>
  );
};
export default Projects;
