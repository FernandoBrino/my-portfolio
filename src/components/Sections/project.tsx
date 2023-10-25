import { projects } from "@/utils/projects";
import { Label } from "../Label";
import { ProjectCard } from "../ProjectCard";

export const ProjectSection = () => (
  <section
    className="flex flex-col px-4 py-12 items-center justify-center w-full bg-background lg:px-28 lg:py-24"
    id="projects"
  >
    <Label title="Projetos" />
    <p className="text-text mt-4 mb-12">Alguns dos projetos que construí:</p>

    <div className="flex flex-col gap-6 lg:gap-12">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);
