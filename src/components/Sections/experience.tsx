import { jobs } from "@/utils/jobs";
import { ExperienceCard } from "../ExperienceCard";
import { Label } from "../Label";

export const ExperienceSection = () => (
  <section
    className="flex flex-col px-28 py-24 items-center justify-center w-full bg-sub-background"
    id="experience"
  >
    <Label title="Experiências" />
    <p className="text-text mt-4 mb-12">
      Aqui está um pequeno resumo das minhas experiências recentes:
    </p>

    <div className="flex flex-col gap-12">
      {jobs.map((job) => (
        <ExperienceCard key={job.id} job={job} />
      ))}
    </div>
  </section>
);
