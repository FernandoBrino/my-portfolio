import { useTheme } from "@/hooks/useTheme";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [theme, setTheme] = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [styleOnScrollPage, setStyleOnScrollPage] = useState<string>("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSwitchTheme = (theme: "dark" | "light") => {
    setTheme(theme);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setStyleOnScrollPage(
          "sticky top-0 z-10 border-b border-slate-50/[0.06] bg-transparent backdrop-blur"
        );
      } else {
        setStyleOnScrollPage("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styleOnScrollPage} duration-300 w-full p-4 flex items-center justify-between bg-background lg:py-4 lg:px-[6.25rem]`}
    >
      <h1 className="text-title font-bold text-3xl">
        <Link href="#profile">&lt;FB /&gt;</Link>
      </h1>
      <div className="hidden lg:flex lg:items-center">
        <nav className="flex gap-6 pr-6 border-r dark:border-card-background">
          <a
            href="#about"
            className="relative text-text hover:text-title after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-[-0.25rem] after:left-0 after:scale-x-0 after:hover:scale-x-100 after:origin-left after:duration-300 after:bg-title"
          >
            Sobre
          </a>
          <a
            href="#projects"
            className="relative text-text hover:text-title after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-[-0.25rem] after:left-0 after:scale-x-0 after:hover:scale-x-100 after:origin-left after:duration-300 after:bg-title"
          >
            Projetos
          </a>
          <a
            href="#recommendations"
            className="relative text-text hover:text-title after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-[-0.25rem] after:left-0 after:scale-x-0 after:hover:scale-x-100 after:origin-left after:duration-300 after:bg-title"
          >
            Recomendações
          </a>
          <a
            href="#contact"
            className="relative text-text hover:text-title after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-[-0.25rem] after:left-0 after:scale-x-0 after:hover:scale-x-100 after:origin-left after:duration-300 after:bg-title"
          >
            Contato
          </a>
        </nav>

        <div className="flex items-center ml-6 gap-4">
          {theme === "dark" && isClient ? (
            <button
              onClick={() => handleSwitchTheme("light")}
              className="hover:bg-label duration-300 p-2 rounded-lg"
            >
              <BsMoonStars
                size={20}
                className="hover:cursor-pointer text-text"
              />
            </button>
          ) : (
            <button
              onClick={() => handleSwitchTheme("dark")}
              className="hover:bg-label duration-300 p-2 rounded-lg"
            >
              <BsSun size={20} className="hover:cursor-pointer" />
            </button>
          )}

          <a
            className="text-background px-4 py-1.5 bg-title rounded-xl hover:opacity-50 duration-300"
            href="https://drive.google.com/file/d/1QqY3fC2bnDcEV66irdEB74FmM-DYQMba/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
        </div>
      </div>

      <RxHamburgerMenu size={24} className="text-text lg:hidden" />
    </div>
  );
};
