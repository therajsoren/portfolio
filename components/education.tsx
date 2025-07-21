import Image from "next/image";
import { education } from "@/data";
import Card from "@/components/Card";
const Education = () => {
  return (
    <>
      <Card heading="Education">
        <div className="grid grid-cols-1 md:p-4 p-0 rounded-md relative overflow-hidden">
          {education.map((edu) => (
            <div className="flex items-center justify-between py-2" key={edu.id}>
              <div className="flex items-center">
                <Image
                  src={edu.image}
                  width={50}
                  height={50}
                  alt="dav logo"
                  className="rounded-full object-cover md:w-14 md:h-14 w-6 h-6"
                />
                <div className="ml-2 text-left">
                  <h1 className="md:text-base text-[13px] leading-normal">{edu.school}</h1>
                  <p className="text-xs font-sans font-extrabold italic">{edu.description}</p>
                </div>
              </div>
              <div className="border rounded-2xl md:text-sm text-[10px] px-2 py-1 whitespace-nowrap">{edu.year}</div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};
export default Education;
