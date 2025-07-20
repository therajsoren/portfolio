import { BorderBeam } from "@/components/magicui/border-beam";
import { skills } from "@/data";
const Skill = () => {
  return (
    <div className="max-w-md md:max-w-2xl mx-auto mb-8 mt-4 ">
      <div className="mb-[1rem] ">
        <h1 className="text-4xl font-black tracking-tighter">Tech Stack</h1>
        <p className="h-1 bg-blue-400 w-1/3 mx-auto p-1"></p>
      </div>
      <div className="flex gap-2 p-6 flex-wrap items-center justify-center border h-fit min-w-[100px] rounded-md relative">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="border rounded-4xl text-sm font-light px-4 py-2 border-t-blue-300/50 pt-px flex cursor-pointer items-center gap-2 justify-center"
          >
            <span className="flex justify-center items-center relative">
              <span
                className=" absolute animate-ping w-full h-full rounded-full opacity-75"
                style={{
                  backgroundColor: skill.color,
                }}
              ></span>
              <span
                className="w-3 h-3 rounded-full relative"
                style={{
                  backgroundColor: skill.color,
                }}
              ></span>
            </span>
            {skill.name}
          </div>
        ))}
        <BorderBeam duration={6} delay={3} size={400} borderWidth={2} className="overflow-x-hidden scroll-hidden" />
      </div>
    </div>
  );
};
export default Skill;
