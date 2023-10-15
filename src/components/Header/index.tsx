import { useTheme } from "@/hooks/useTheme";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [theme, setTheme] = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSwitchTheme = (theme: "dark" | "light") => {
    setTheme(theme);
  };

  return (
    <div className="sticky py-4 px-[6.25rem] flex justify-between bg-background">
      <h1 className="text-title font-bold text-3xl">
        <Link href="#profile">&lt;FB /&gt;</Link>
      </h1>
      <div className="flex items-center">
        <nav className="flex gap-6 pr-6 border-r dark:border-card-background">
          <a
            href="#"
            className="relative text-text hover:text-title after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-[-0.25rem] after:left-0 after:scale-x-0 after:hover:scale-x-100 after:origin-left after:duration-300 after:bg-title"
          >
            Sobre
          </a>
          <a
            href="#"
            className="relative text-text hover:text-title after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-[-0.25rem] after:left-0 after:scale-x-0 after:hover:scale-x-100 after:origin-left after:duration-300 after:bg-title"
          >
            Trabalho
          </a>
          <a
            href="#"
            className="relative text-text hover:text-title after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-[-0.25rem] after:left-0 after:scale-x-0 after:hover:scale-x-100 after:origin-left after:duration-300 after:bg-title"
          >
            Testemunhas
          </a>
          <a
            href="#"
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
            className="text-background px-4 py-1.5 bg-title rounded-xl"
            href="https://drive.google.com/file/d/1QqY3fC2bnDcEV66irdEB74FmM-DYQMba/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};
