import { jobs } from "@/utils/jobs";
import { ExperienceCard } from "../../ExperienceCard";
import { Label } from "../../Label";

export const ExperienceSection = () => (
  <section
    className="flex flex-col px-4 py-12 items-center justify-center w-full bg-sub-background lg:px-28 lg:py-24"
    id="experience"
  >
    <Label title="Experiences" />
    <p className="text-text mt-4 mb-12">
      Here’s a brief summary of my recent experiences:
    </p>

    <div className="flex flex-col gap-6 lg:gap-12">
      {jobs.map((job) => (
        <ExperienceCard key={job.id} job={job} />
      ))}
    </div>
  </section>
);
