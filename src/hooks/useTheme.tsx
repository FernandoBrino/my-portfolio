import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage("myPortfolioColorTheme", "light");

  useEffect(() => {
    const themeToSwitch = "dark";
    const bodyClasses = document.documentElement.classList;

    theme === "dark"
      ? bodyClasses.add(themeToSwitch)
      : bodyClasses.remove(themeToSwitch);
  }, [theme]);

  return [theme, setTheme];
};
