import Image from "next/image";
import { Label } from "../Label";
import { skills } from "@/utils/skills";

export const SkillSection = () => (
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
);
