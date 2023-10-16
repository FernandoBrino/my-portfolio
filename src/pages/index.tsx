import profilePicture from "@/assets/profile.jpeg";
import profilePicture2 from "@/assets/profile-2.jpeg";
import { Header } from "@/components/Header";
import { Label } from "@/components/Label";
import { IoLocationOutline } from "react-icons/io5";
import { BsCircleFill, BsWhatsapp } from "react-icons/bs";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import { skills } from "@/utils/skills";
import { jobs } from "@/utils/jobs";
import { ExperienceCard } from "@/components/ExperienceCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <section
        className="flex justify-center items-center p-[6.25rem]  w-full bg-background"
        id="profile"
      >
        <div className="flex flex-col w-full gap-12">
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-title text-5xl font-bold ml-[-5px]">
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

      <section
        className="flex flex-col items-center justify-center gap-12  px-28 py-24 bg-sub-background"
        id="about"
      >
        <Label title="Sobre mim" />

        <div className="flex justify-center items-center w-full">
          <div className="flex w-2/4">
            <div className="relative">
              <Image
                src={profilePicture2}
                alt=""
                width={400}
                height={480}
                className="absolute left-10 bottom-10 border-[6px] border-sub-background"
              />
              <div className="bg-label w-[25rem] h-[30rem] border-[6px] border-sub-background"></div>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-2/4">
            <h2 className="text-title text-3xl">
              Cusioso ? Aqui um pouquinho sobre mim:
            </h2>

            <div className="flex flex-col gap-4">
              <p className="text-text">
                Meu nome é Fernando sou Desenvolvedor Full Stack, apaixonado por
                criar soluções tecnológicas inovadoras. Com mais de três anos de
                experiência no campo do Desenvolvimento de Software.
              </p>

              <p className="text-text">
                Durante minha trajetória profissional, concentrei meu foco
                principal nas tecnologias Javascript e Typescript, que são
                fundamentais em quase todas as minhas aplicações. No front-end,
                tenho domínio no React.js, criando interfaces dinâmicas e
                intuitivas para os usuários. No back-end, confio plenamente no
                poder do Node.js, desenvolvendo sistemas robustos e escaláveis.
              </p>

              <p className="text-text">
                Além disso, busquei ampliar minhas habilidades e conhecimentos,
                adquirindo experiência com diversos frameworks. Destaco meu
                conhecimento no Next.js, que incorpora conceitos de SSR
                (Server-Side Rendering), e no Nest.js, que proporciona uma
                arquitetura escalável e modular. Também trabalhei com
                microframeworks como o Express.js e Fastify.js, oferecendo
                soluções ágeis para diferentes tipos de projetos.
              </p>
              <p className="text-text">
                Minha expertise em bancos de dados é abrangente, com
                familiaridade tanto em bancos SQL quanto em bancos NoSQL. Tenho
                domínio em drivers nativos, query builders e ORMs, garantindo
                ótima performance e estabilidade em cenários complexos.
              </p>
              <p className="text-text">
                A qualidade do código e a robustez dos projetos são prioridades
                para mim. Por isso, utilizo estruturas de testes como Jest e
                Vitest para garantir a confiabilidade das aplicações,
                desenvolvendo testes unitários, de integração e e2e. Além disso,
                aplico design patterns importantes, como SOLID, TDD e Singleton,
                para melhorar a arquitetura e facilitar a manutenção dos
                projetos.
              </p>
              <p className="text-text">
                Além do desenvolvimento em si, sou comprometido em otimizar o
                processo de criação de software. Meu conhecimento avançado em
                ferramentas essenciais, como o Docker, me permite criar
                ambientes isolados e facilitar a implantação de aplicações,
                tornando o ciclo de vida do projeto mais eficiente. Também
                utilizo o git e o GitHub para um versionamento sólido e
                colaborativo em todas as minhas aplicações.
              </p>
              <p className="text-text">
                Complementando minha experiência, tenho noções de CI/CD com o
                Github Actions, o que contribui para a automação de testes e
                implantação contínua, garantindo maior confiabilidade e
                agilidade no desenvolvimento.
              </p>
              <p className="text-text">
                Estou empolgado com novos desafios e oportunidades para aplicar
                minhas habilidades como Desenvolvedor Full Stack em projetos
                inovadores. Acredito que minha experiência e dedicação são
                atributos valiosos que posso oferecer à sua equipe. Estou sempre
                a disposição para um bate-papo basta me contatar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col px-28 py-24 items-center justify-center w-full bg-background"
        id="skills"
      >
        <Label title="Habilidades" />
        <p className="text-text mt-4 mb-12">
          Habilidades, ferramentas e tecnologias em que sou realmente bom:
        </p>

        <div className="grid gap-y-12 grid-cols-8 w-full">
          {skills.map((skill) => (
            <div key={skill.id} className="flex flex-col gap-3 items-center">
              <a href={skill.link} target="_blank">
                <Image
                  priority
                  src={skill.image}
                  alt=""
                  width={64}
                  height={64}
                  className="transition-transform duration-300 hover:scale-110"
                />
              </a>
              <p className="text-text">{skill.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="flex flex-col py-24 items-center justify-center w-full bg-sub-background"
      >
        <Label title="Experiência" />
        <p className="text-text mt-4 mb-12">
          Aqui está um pequeno resumo das minhas experiências recentes:
        </p>

        <div className="flex flex-col gap-12">
          {jobs.map((job) => (
            <ExperienceCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
}
