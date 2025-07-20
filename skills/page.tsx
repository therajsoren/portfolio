import Card from "@/components/Card";
import { skills } from "@/data";
import Image from "next/image";
const Skill = () => {
  return (
    <>
      <Card heading="Skills">
        <div className="flex gap-2 p-6 flex-wrap items-center justify-center border h-fit min-w-[100px] rounded-md relative overflow-hidden">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="border rounded-4xl text-sm font-light px-4 py-2 border-t-blue-300/50 pt-px flex cursor-pointer items-center gap-2 justify-center"
            >
              <Image src={skill.logo} alt={skill.name} width={16} height={16} />
              {skill.name}
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};
export default Skill;
