import Image from "next/image";
import { education } from "@/data";
import Card from "@/components/Card";
const Education = () => {
  return (
    <>
      <Card heading="Education">
        <div className="grid grid-cols-1 p-4 border rounded-md relative overflow-hidden">
          {education.map((edu) => (
            <div className="flex items-center justify-between py-2" key={edu.id}>
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
        </div>
      </Card>
    </>
  );
};
export default Education;
