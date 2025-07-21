import { BorderBeam } from "./magicui/border-beam";

const Card = ({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: string;
}) => {
  return (
    <div className="w-full pt-16 overflow-hidden">
      <div className="mb-[1rem] text-center">
        <div className="relative inline-block">
          <h1 className="text-4xl font-black tracking-tighter">{heading}</h1>
          <h2 className="h-0.8 absolute w-full left-0 bottom-0 mx-auto">
            <BorderBeam />
          </h2>
        </div>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
};
export default Card;
