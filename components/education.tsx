import Image from "next/image";
import { education } from "@/data";
import Card from "@/components/Card";
const Education = () => {
  return (
    <div className="w-full h-full">
      <Card heading="Education">
        <div className="grid grid-cols-1 md:p-4 p-0 rounded-md relative overflow-hidden">
          {education.map((edu) => (
            <div className="flex items-center justify-between py-2" key={edu.id}>
              <div className="flex items-center">
                <Image
                  src={edu.image}
                  width={60}
                  height={60}
                  alt="dav logo"
                  className="rounded-4xl object-cover"
                />
                <div className="ml-2 text-left">
                  <h1 className="md:text-base text-sm leading-normal">{edu.school}</h1>
                  <p className="text-xs font-sans font-extrabold italic">{edu.description}</p>
                </div>
              </div>
              <div className="border rounded-2xl text-sm  px-2 py-1 whitespace-nowrap">{edu.year}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
export default Education;
