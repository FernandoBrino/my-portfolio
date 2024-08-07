import Image from "next/image";
import { Label } from "../../Label";
import aboutProfile from "@/assets/about_profile.jpg";

export const AboutSection = () => (
  <section
    className="flex flex-col items-center justify-center  px-4 py-16 bg-sub-background lg:px-28 lg:py-24"
    id="about"
  >
    <Label title="Sobre mim" />

    <div className="flex flex-col mt-24 gap-12 justify-center items-center w-full lg:flex-row">
      <div className="flex items-center justify-center w-2/4">
        <div className="relative">
          <Image
            src={aboutProfile}
            alt=""
            className="absolute w-[17.5rem] h-[23rem] left-5 bottom-5 border-[6px] border-sub-background lg:left-10 lg:bottom-10 lg:w-[40rem] lg:h-[30rem]"
          />
          <div className="bg-label w-[20rem] h-[22.5rem] border-[6px] border-sub-background lg:w-[25rem] lg:h-[30rem]"></div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-6 lg:w-2/4">
        <h2 className="text-title text-3xl">
          Curioso ? Aqui um pouquinho sobre mim:
        </h2>

        <div className="flex flex-col gap-4 leading-6">
          <p className="text-text">
            Meu nome é Fernando sou Desenvolvedor Full Stack, apaixonado por
            criar soluções tecnológicas inovadoras. Com mais de três anos de
            experiência no campo do Desenvolvimento de Software.
          </p>

          <p className="text-text">
            Durante minha trajetória profissional, concentrei meu foco principal
            nas tecnologias Javascript e Typescript, que são fundamentais em
            quase todas as minhas aplicações. No front-end, tenho domínio no
            React.js, criando interfaces dinâmicas e intuitivas para os
            usuários. No back-end, confio plenamente no poder do Node.js,
            desenvolvendo sistemas robustos e escaláveis.
          </p>

          <p className="text-text">
            Além disso, busquei ampliar minhas habilidades e conhecimentos,
            adquirindo experiência com diversos frameworks. Destaco meu
            conhecimento no Next.js, que incorpora conceitos de SSR (Server-Side
            Rendering), e no Nest.js, que proporciona uma arquitetura escalável
            e modular. Também trabalhei com microframeworks como o Express.js e
            Fastify.js, oferecendo soluções ágeis para diferentes tipos de
            projetos.
          </p>
          <p className="text-text">
            Minha expertise em bancos de dados é abrangente, com familiaridade
            tanto em bancos SQL quanto em bancos NoSQL. Tenho domínio em drivers
            nativos, query builders e ORMs, garantindo ótima performance e
            estabilidade em cenários complexos.
          </p>
          <p className="text-text">
            A qualidade do código e a robustez dos projetos são prioridades para
            mim. Por isso, utilizo estruturas de testes como Jest e Vitest para
            garantir a confiabilidade das aplicações, desenvolvendo testes
            unitários, de integração e e2e. Além disso, aplico design patterns
            importantes, como SOLID, TDD e Singleton, para melhorar a
            arquitetura e facilitar a manutenção dos projetos.
          </p>
          <p className="text-text">
            Além do desenvolvimento em si, sou comprometido em otimizar o
            processo de criação de software. Meu conhecimento avançado em
            ferramentas essenciais, como o Docker, me permite criar ambientes
            isolados e facilitar a implantação de aplicações, tornando o ciclo
            de vida do projeto mais eficiente. Também utilizo o git e o GitHub
            para um versionamento sólido e colaborativo em todas as minhas
            aplicações.
          </p>
          <p className="text-text">
            Complementando minha experiência, tenho noções de CI/CD com o Github
            Actions, o que contribui para a automação de testes e implantação
            contínua, garantindo maior confiabilidade e agilidade no
            desenvolvimento.
          </p>
          <p className="text-text">
            Estou empolgado com novos desafios e oportunidades para aplicar
            minhas habilidades como Desenvolvedor Full Stack em projetos
            inovadores. Acredito que minha experiência e dedicação são atributos
            valiosos que posso oferecer à sua equipe. Estou sempre a disposição
            para um bate-papo basta me contatar.
          </p>
        </div>
      </div>
    </div>
  </section>
);
