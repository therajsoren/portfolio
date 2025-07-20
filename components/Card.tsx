const Card = ({ children, heading }: { children: React.ReactNode , heading:string}) => {
  return (
    <div>
      <div className="mb-[1rem]">
        <h1 className="text-4xl font-black tracking-tighter">{heading}</h1>
        <p className="h-1 bg-blue-400 w-1/3 mx-auto p-1"></p>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
};
export default Card;
