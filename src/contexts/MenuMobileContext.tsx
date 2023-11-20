import { ReactNode, createContext, useState } from "react";

interface MenuMobileContextType {
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
}

interface MenuMobileContextProviderType {
  children: ReactNode;
}

export const MenuMobileContext = createContext({} as MenuMobileContextType);

export const MenuMobileContextProvider = ({
  children,
}: MenuMobileContextProviderType) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuMobileContext.Provider value={{ isMenuOpen, toggleMenuOpen }}>
      {children}
    </MenuMobileContext.Provider>
  );
};
