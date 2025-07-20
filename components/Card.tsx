import { BorderBeam } from "./magicui/border-beam";

const Card = ({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: string;
}) => {
  return (
    <div>
      <div className="mb-[1rem]">
        <h1 className="text-4xl font-black tracking-tighter">{heading}</h1>
        <p className="h-0.5 relative w-1/4 mx-auto">
          <BorderBeam />
        </p>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
};
export default Card;
