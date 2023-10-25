import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { FiExternalLink } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  techs: string[];
  link: string;
  image: StaticImageData;
}

interface Props {
  project: Project;
}

export const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <div className="flex flex-col shadow-lg lg:flex-row">
      <div className="flex items-center p-8 bg-label rounded-t-xl max-w-lg lg:rounded-l-xl lg:rounded-r-none lg:p-12">
        <Image
          src={project.image}
          alt=""
          width={480}
          height={384}
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-6 p-8 bg-sub-background rounded-b-xl max-w-lg lg:rounded-r-xl lg:rounded-l-none lg:p-12">
        <h1 className="text-title text-xl">{project.title}</h1>
        <p className="text-text leading-6">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <div
              key={tech}
              className="flex items-center justify-center px-5 py-1 rounded-xl bg-label"
            >
              <p className="text-xs text-text whitespace-nowrap">{tech}</p>
            </div>
          ))}
        </div>
        <a href={project.link} target="_blank">
          <FiExternalLink size={20} className="text-text hover:text-blue-300" />
        </a>
      </div>
    </div>
  );
};
