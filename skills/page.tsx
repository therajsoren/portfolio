"use client";
import Card from "@/components/Card";
import { skills } from "@/data";
import { useTheme } from "next-themes";
import Image from "next/image";

const Skill = () => {
  const { theme } = useTheme();

  const lightThemeIcons: { [key: string]: string } = {
    ShadcnUI: "/shadcn-light.svg",
    "Express.js": "/expressjs.svg",
    Vercel: "/vercel.svg",
    Github: "/github_light.svg",
  };

  return (
    <>
      <Card heading="Skills">
        <div className="flex gap-2 p-6 flex-wrap items-center justify-center h-fit min-w-[100px] rounded-md relative overflow-hidden max-w-7xl mx-auto">
          {skills.map((skill) => {
            const hasLightThemeIcon =
              theme === "light" && lightThemeIcons[skill.name];
            const iconSrc = hasLightThemeIcon
              ? lightThemeIcons[skill.name]
              : skill.logo;

            return (
              <div
                key={skill.id}
                className="border rounded-4xl md:text-sm text-xs font-light px-4 py-2 border-t-blue-300/50 pt-px flex cursor-pointer items-center gap-2 justify-center"
              >
                <Image src={iconSrc} alt={skill.name} width={16} height={16} />
                {skill.name}
              </div>
            );
          })}
        </div>
      </Card>
    </>
  );
};

export default Skill;
