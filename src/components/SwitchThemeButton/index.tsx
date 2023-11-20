import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

export const SwitchThemeButton = () => {
  const [isClient, setIsClient] = useState(false);
  const [theme, setTheme] = useTheme();

  const handleSwitchTheme = (theme: "dark" | "light") => {
    setTheme(theme);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {theme === "dark" && isClient ? (
        <button
          onClick={() => handleSwitchTheme("light")}
          className="hover:bg-label duration-300 p-2 rounded-lg"
        >
          <BsMoonStars size={20} className="hover:cursor-pointer text-text" />
        </button>
      ) : (
        <button
          onClick={() => handleSwitchTheme("dark")}
          className="hover:bg-label duration-300 p-2 rounded-lg"
        >
          <BsSun size={20} className="hover:cursor-pointer" />
        </button>
      )}
    </>
  );
};
