import { HomeIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

interface NavLink {
  icon: IconType;
  label: string;
  href: string;
  target?: string;
}

export const navLinks: NavLink[] = [
  {
    icon: HomeIcon,
    label: "Home",
    href: "/",
    target: "_self",
  },
  {
    icon: FaGithub,
    label: "Github",
    href: "https://github.com/therajsoren",
    target: "_blank",
  },
  {
    icon: FaXTwitter,
    label: "Twitter",
    href: "https://twitter.com/therajsoren",
    target: "_blank",
  },
  {
    icon: FaLinkedin,
    label: "linkedin",
    href: "https://www.linkedin.com/in/therajsoren/",
    target: "_blank",
  },
];
