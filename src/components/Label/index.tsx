import { FC } from "react";

interface Props {
  title: string;
}

export const Label: FC<Props> = ({ title }) => {
  return (
    <div className="flex justify-center items-center px-5 py-1 rounded-xl bg-label">
      <p className="text-text">{title}</p>
    </div>
  );
};
