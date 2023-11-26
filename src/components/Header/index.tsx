import { useContext, useEffect, useState } from "react";
import { MenuMobileContext } from "@/contexts/MenuMobileContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { SwitchThemeButton } from "../SwitchThemeButton";

export const Header = () => {
  const { isMenuOpen, toggleMenuOpen } = useContext(MenuMobileContext);
  const [styleOnScrollPage, setStyleOnScrollPage] = useState<string>("");

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

      {/* Big screens navigation menu */}
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
          <SwitchThemeButton />

          <a
            className="text-background px-4 py-2 bg-title rounded-xl hover:opacity-50 duration-300"
            href="https://drive.google.com/file/d/1QqY3fC2bnDcEV66irdEB74FmM-DYQMba/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
        </div>
      </div>

      <RxHamburgerMenu
        size={24}
        className="text-text lg:hidden"
        onClick={toggleMenuOpen}
      />

      {isMenuOpen ? (
        <div className="absolute top-0 left-0 z-10 w-screen h-screen bg-background">
          <div className="flex items-center justify-between p-4 border-b-[1px] border-card-background">
            <h1
              className="text-title font-bold text-3xl"
              onClick={toggleMenuOpen}
            >
              <Link href="#profile">&lt;FB /&gt;</Link>
            </h1>

            <AiOutlineClose
              size={24}
              className="text-text"
              onClick={toggleMenuOpen}
            />
          </div>

          <nav className="flex flex-col p-4 gap-4 border-b-[1px] border-card-background">
            <a href="#about" className="text-text" onClick={toggleMenuOpen}>
              Sobre
            </a>
            <a href="#projects" className="text-text" onClick={toggleMenuOpen}>
              Projetos
            </a>
            <a
              href="#recommendations"
              className="text-text"
              onClick={toggleMenuOpen}
            >
              Recomendações
            </a>
            <a href="#contact" className="text-text" onClick={toggleMenuOpen}>
              Contato
            </a>
          </nav>

          <div className="flex justify-between p-4 items-center mb-6">
            <p className="text-text">Switch Theme</p>
            <SwitchThemeButton />
          </div>

          <div className="flex w-full p-4 items-center justify-center ">
            <a
              className="w-[350px] text-background px-4 py-2 bg-title rounded-xl hover:opacity-50 duration-300 text-center"
              href="https://drive.google.com/file/d/1QqY3fC2bnDcEV66irdEB74FmM-DYQMba/view?usp=sharing"
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
