import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface Props {
  image: StaticImageData;
  width?: number;
  height?: number;
  top: number;
  bottom: number;
}

export const ImagePortrait: FC<Props> = ({
  image,
  width = 280,
  height = 320,
}) => {
  const widthRem = width / 16;
  const heightRem = (height * 0.9) / 16;

  return (
    <div className="relative">
      <Image
        src={image}
        alt=""
        width={width}
        height={height}
        className="absolute right-10 bottom-10 border-[6px] border-white dark:border-[#030712]"
      />
      <div
        className={`bg-label w-[${widthRem}rem] h-[${heightRem}rem] border-[6px] border-white dark:border-[#030712]`}
      ></div>
    </div>
  );
};
