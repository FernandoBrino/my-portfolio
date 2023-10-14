import { useTheme } from "@/hooks/useTheme";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";

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
    <div className="py-4 px-[6.25rem] flex justify-between bg-background">
      <h1 className="text-title font-bold text-3xl">
        <code>&lt;FB /&gt;</code>
      </h1>
      <div className="flex items-center">
        <nav className="flex gap-6 pr-6 border-r dark:border-card-background">
          <a href="#" className="text-text">
            Sobre
          </a>
          <a href="#" className="text-text">
            Trabalho
          </a>
          <a href="#" className="text-text">
            Testemunhas
          </a>
          <a href="#" className="text-text">
            Contato
          </a>
        </nav>

        <div className="flex items-center ml-6 gap-4">
          {theme === "dark" && isClient ? (
            <button onClick={() => handleSwitchTheme("light")}>
              <BsMoonStars
                size={20}
                className="hover:cursor-pointer text-text"
              />
            </button>
          ) : (
            <button onClick={() => handleSwitchTheme("dark")}>
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
