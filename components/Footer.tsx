import { footerLinks, navLinks } from "@/data";
import Link from "next/link";

const Footer = () => {
  const currenYear = new Date().getFullYear();
  return (
    <div className="mt-4 mb-4 p-2">
      <p className="h-0.5 bg-gray-800"></p>
      <div className="flex pt-4 pb-6 justify-around items-center">
        <div className="flex flex-col space-y-3 text-slate-500/90 text-base tracking-wide w-fit p-4">
          {footerLinks.map((link, index) => (
            <Link key={index} href={link.href} className="cursor-pointer">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col ml-[20%] space-y-3 text-slate-500/90 text-base tracking-wide w-fit">
          {navLinks.map((link) =>
            link.id !== 1 ? (
              <Link key={link.id} href={link.href}>
                {link.label}
              </Link>
            ) : null
          )}
        </div>
      </div>
      <p className="text-slate-200">© {currenYear} Raj Soren</p>
    </div>
  );
};
export default Footer;
