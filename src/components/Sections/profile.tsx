import Image from "next/image";
import { BsCircleFill, BsWhatsapp } from "react-icons/bs";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import profilePicture from "@/assets/profile.jpeg";

export const ProfileSection = () => (
  <section
    className="flex justify-center items-center p-[6.25rem]  w-full bg-background"
    id="profile"
  >
    <div className="flex flex-col w-full gap-12">
      <div className="flex flex-col items-start gap-3">
        <h1 className="text-title text-5xl font-bold ml-[-5px]">
          Oi, Sou o Fernando
        </h1>
        <p className="text-text w-3/4 leading-6">
          Olá, prazer em conhecê-lo! Eu sou o Fernando, um Desenvolvedor Full
          Stack apaixonado por Javascript e Typescript. Minha bagagem inclui
          React.js, Node.js, trabalhando com bancos de dados, testes e
          automação. Estou sempre animado para contribuir em projetos inovadores
          e de alta qualidade.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center ml-[-4.5px]">
          <IoLocationOutline size={20} className="text-title" />
          <p className="text-text">São Vicente, Brasil</p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex relative">
            <BsCircleFill
              size={8}
              className="text-[#10B981] animate-pulse relative inline-flex"
            />
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
          </div>
          <p className="text-text">Disponível para novos projetos</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <a href="https://github.com/FernandoBrino" target="_blank">
          <FiGithub
            size={20}
            className="text-text duration-300 hover:text-[#333] hover:translate-y-[-0.2rem]"
          />
        </a>

        <a href="https://www.linkedin.com/in/fernando-brino" target="_blank">
          <FiLinkedin
            size={20}
            className="text-text duration-300 hover:text-[#0E76A8] hover:translate-y-[-0.2rem]"
          />
        </a>
        <a href="https://wa.me/13981158644" target="_blank">
          <BsWhatsapp
            size={20}
            className="text-text duration-300 hover:text-[#25D366] hover:translate-y-[-0.2rem]"
          />
        </a>
      </div>
    </div>

    <div className="relative">
      <Image
        src={profilePicture}
        alt=""
        width={280}
        height={320}
        className="absolute right-10 bottom-10 border-[6px] border-white dark:border-[#030712]"
      />
      <div className="bg-label w-[17.5rem] h-72 border-[6px] border-white dark:border-[#030712]"></div>
    </div>
  </section>
);
