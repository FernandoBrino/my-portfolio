import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface Job {
  title: string;
  period: string;
  topics: string[];
  image: StaticImageData;
}

interface Props {
  job: Job;
}

export const ExperienceCard: FC<Props> = ({ job }) => {
  return (
    <div className="flex flex-col p-8 bg-card-background gap-4 rounded-xl items-center shadow-lg lg:flex-row lg:gap-12">
      <div>
        <Image src={job.image} alt="" />
      </div>
      <div className="flex flex-col gap-8 w-full lg:gap-4">
        <div className="flex flex-col gap-2 justify-between items-center lg:flex-row lg:gap-0">
          <h1 className="text-title text-xl font-semibold">{job.title}</h1>
          <p className="order-first text-text text-sm lg:order-last">
            {job.period}
          </p>
        </div>
        <div className="ml-5">
          <ul className="flex flex-col gap-3 list-disc">
            {job.topics.map((topic) => (
              <li key={topic} className="text-text w-3/4">
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
