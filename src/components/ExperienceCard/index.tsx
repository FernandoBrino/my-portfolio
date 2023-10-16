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
    <div className="flex p-8 bg-card-background gap-12 rounded-xl">
      <div>
        <Image src={job.image} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-title text-xl font-semibold">{job.title}</h3>
          <p className="text-text text-sm">{job.period}</p>
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
