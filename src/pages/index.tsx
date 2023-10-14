import Image from "next/image";
import profilePicture from "@/assets/profile.jpg";
import { Header } from "@/components/Header";
import { IoLocationOutline } from "react-icons/io5";
import { BsCircleFill, BsWhatsapp } from "react-icons/bs";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="flex justify-center items-center p-[6.25rem] w-full bg-background">
        <div className="flex flex-col w-full gap-12">
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-title text-5xl font-bold">
              Oi, Sou o Fernando
            </h1>
            <p className="text-text w-3/4">
              Olá, prazer em conhecê-lo! Eu sou o Fernando, um Desenvolvedor
              Full Stack apaixonado por Javascript e Typescript. Minha bagagem
              inclui React.js, Node.js, trabalhando com bancos de dados, testes
              e automação. Estou sempre animado para contribuir em projetos
              inovadores e de alta qualidade.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center ml-[-5px]">
              <IoLocationOutline size={20} className="text-title" />
              <p className="text-text">São Vicente, Brasil</p>
            </div>

            <div className="flex gap-4 items-center">
              <BsCircleFill size={8} className="text-[#10B981]" />
              <p className="text-text">Disponível para novos projetos</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 cursor-pointer">
            <a href="#">
              <FiGithub size={20} className="text-text" />
            </a>

            <a href="#">
              <FiLinkedin size={20} className="text-text" />
            </a>

            <a href="#">
              <BsWhatsapp size={20} className="text-text" />
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
      </div>
    </div>
  );
}
