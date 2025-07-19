"use client";
import Dock from "@/components/Dock";

const Header = () => {
  return (
    <nav>
      <div className="fixed flex justify-center bottom-8 inset-x-0 w-fit mx-auto">
        <Dock />
      </div>
    </nav>
  );
};
export default Header;
