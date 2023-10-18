import Image from "next/image";
import { Label } from "../Label";
import aboutProfile from "@/assets/about_profile.jpeg";

export const AboutSection = () => (
  <section
    className="flex flex-col items-center justify-center gap-12  px-28 py-24 bg-sub-background"
    id="about"
  >
    <Label title="Sobre mim" />

    <div className="flex justify-center items-center w-full">
      <div className="flex w-2/4">
        <div className="relative">
          <Image
            src={aboutProfile}
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
