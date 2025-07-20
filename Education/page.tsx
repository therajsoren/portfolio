import Image from "next/image";
import Dav from "@/public/dav.jpeg";
import BIT from "@/public/bit.png";
import { education } from "@/data";
import { ShineBorder } from "@/components/magicui/shine-border";
import { BorderBeam } from "@/components/magicui/border-beam";
const Education = () => {
  return (
    <div className="max-w-md md:max-w-xl mx-auto mb-8 mt-4 ">
      <div className="mb-[1rem]">
        <h1 className="text-4xl font-black tracking-tighter">Education</h1>
        <p className="h-1 bg-blue-400 w-1/3 mx-auto p-1"></p>
      </div>
      <div className="grid grid-cols-1 px-8 border-2 relative">
        {education.map((edu) => (
          <div className="flex justify-between items-center p-4" key={edu.id}>
            <div className="flex items-center">
              <Image
                src={edu.image}
                width={50}
                height={50}
                alt="dav logo"
                className="rounded-full object-cover"
              />
              <div className="ml-2 text-left">
                <h1>{edu.school}</h1>
                <p className="text-sm">{edu.description}</p>
              </div>
            </div>
            <div className="border rounded-2xl px-2 py-1">{edu.year}</div>
          </div>
        ))}
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          borderWidth={2}
          className="overflow-x-hidden scroll-hidden"
        />
      </div>
    </div>
  );
};
export default Education;
