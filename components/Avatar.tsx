import SanityImage from "@lib/SanityImage";
import { ImageMetaResult } from "@lib/SanityImage/query";
import clsx from "clsx";
import * as React from "react";
import Typo from "./Typography/Typography";

interface IAvatarProps {
  showFull?: boolean;
  title?: string | null;
  titleColor?: "primary" | "white" | "black";
  subTitle?: string | null;
  image?: ImageMetaResult | null;
}

const Avatar: React.FunctionComponent<IAvatarProps> = (props) => {
  const { showFull, title, image, subTitle, titleColor = "primary" } = props;

  return (
    <div>
      <div
        className={`relative h-60  overflow-hidden ${
          showFull
            ? "w-full border-[10px] border-transparent "
            : "rounded-full w-60"
        } `}
      >
        <SanityImage
          image={image}
          objectFit={showFull ? "contain" : "cover"}
          sizes={"350px"}
        />
      </div>

      <div className="pt-3  ">
        <Typo
          bold
          variant="h5"
          as="h3"
          space={false}
          className={clsx("uppercase text-center ", {
            "text-primary": titleColor === "primary",
            "text-white": titleColor === "white",
            "text-black": titleColor === "black",
          })}
        >
          {title}
        </Typo>
      </div>
      <Typo className="whitespace-pre-line text-center w-60">{subTitle}</Typo>
    </div>
  );
};

export default Avatar;
