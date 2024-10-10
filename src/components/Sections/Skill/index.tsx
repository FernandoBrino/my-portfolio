import Image from "next/image";
import { Label } from "../../Label";
import { skills } from "@/utils/skills";

export const SkillSection = () => (
  <section
    className="flex flex-col px-4 py-12 items-center justify-center w-full bg-background lg:px-28 lg:py-24"
    id="skills"
  >
    <Label title="Skills" />
    <p className="text-text mt-4 mb-12">
      {`Skills, tools, and technologies that I'm really good at:`}
    </p>

    <div className="grid grid-cols-4 gap-x-4 gap-y-14 w-full lg:grid-cols-8 lg:gap-x-20 lg:gap-y-12">
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
