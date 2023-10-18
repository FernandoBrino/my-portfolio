import { HiOutlineMail } from "react-icons/hi";
import { Label } from "../Label";
import { FiCopy, FiGithub, FiLinkedin } from "react-icons/fi";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";

export const ContactSection = () => {
  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section
      className="flex flex-col px-28 py-24 items-center justify-center w-full bg-background"
      id="contact"
    >
      <Label title="Contato" />
      <p className="text-text mt-4 mb-12 w-2/4 text-center leading-6">
        E agora? Sinta-se confortável para entrar em contato comigo caso esteja
        buscando por um desenvolvedor ou simplesmente queira se conectar.
      </p>

      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5 items-center">
          <div className="flex gap-5 items-center">
            <HiOutlineMail size={32} className="text-text" />
            <p className="text-title text-3xl font-semibold">
              fernandobrino11@gmail.com
            </p>
            <FiCopy
              size={32}
              className="text-text cursor-pointer duration-300 hover:text-blue-300"
              onClick={() => handleCopyToClipboard("fernandobrino11@gmail.com")}
            />
          </div>
          <div className="flex gap-5 items-center">
            <BsTelephone size={32} className="text-text" />
            <p className="text-title text-3xl font-semibold">+55 13981158644</p>
            <FiCopy
              size={32}
              className="text-text cursor-pointer duration-300 hover:text-blue-300"
              onClick={() => handleCopyToClipboard("+55 13981158644")}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-text">
            Você também pode me encontrar nas seguintes plataformas!
          </p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/FernandoBrino" target="_blank">
              <FiGithub
                size={20}
                className="text-text duration-300 hover:text-[#333] hover:translate-y-[-0.2rem]"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/fernando-brino"
              target="_blank"
            >
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
      </div>
    </section>
  );
};
