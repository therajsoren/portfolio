"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { socialLinks } from "@/data";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={`py-12 px-8 md:px-16 transition-colors duration-300 ${
        isDark ? "bg-[#0a0a0a] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="inline-flex items-center gap-2 md:gap-4">
              RAJ
              <svg
                viewBox="0 0 100 100"
                className="w-6 h-6 md:w-10 md:h-10"
                fill="currentColor"
              >
                <polygon points="50,0 58,42 100,50 58,58 50,100 42,58 0,50 42,42" />
              </svg>
              SOREN
            </span>
          </h1>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={link.url} target="_blank" aria-label={link.name}>
                  <motion.div
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                      isDark
                        ? "bg-white/10 text-white/70 hover:bg-[#c8ff00] hover:text-black"
                        : "bg-gray-200 text-gray-600 hover:bg-gray-900 hover:text-white"
                    }`}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div
          className={`pt-6 border-t ${
            isDark ? "border-white/10" : "border-gray-300"
          }`}
        >
          <p
            className={`text-sm font-inter font-bold tracking-tight ${
              isDark ? "text-white/40" : "text-gray-500/50"
            }`}
          >
            © {new Date().getFullYear()} Raj Soren. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
