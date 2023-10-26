import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface Testimony {
  name: string;
  role: string;
  comment: string;
  profilePicture: StaticImageData;
  link: string;
}

interface Props {
  testimony: Testimony;
}

export const TestimonyCard: FC<Props> = ({ testimony }) => {
  return (
    <a
      href={testimony.link}
      target="_blank"
      className="flex flex-col p-8 gap-6 items-center bg-card-background rounded-xl shadow-lg duration-300 hover:shadow-blue-300 hover:translate-y-[-4px] lg:px-12 lg:pt-12 lg:pb-24"
    >
      <div>
        <Image
          src={testimony.profilePicture}
          width={64}
          height={64}
          alt=""
          className="rounded-full"
        />
      </div>
      <p className="text-text  leading-6">&quot;{testimony.comment}&quot;</p>
      <div className="text-center">
        <h1 className="mb-1 text-title text-xl font-semibold">
          {testimony.name}
        </h1>
        <p className="text-text text-sm">{testimony.role}</p>
      </div>
    </a>
  );
};
