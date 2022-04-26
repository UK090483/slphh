import React from "react";
import NextImage from "next/image";
import useSanityImage from "@lib/SanityImage/useSanityImage";

import { SanityImageComponent } from "./types";

const SanityImage: SanityImageComponent = (props) => {
  const { image, ...rest } = props;

  let imageProps = useSanityImage(image, rest);
  if (!imageProps) return null;
  return <NextImage alt={image?.alt || ""} {...imageProps} />;
};

const sizesMap = {
  _: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

type sizes = keyof typeof sizesMap;

type sizesBuilderProps = Partial<Record<sizes, string>>;
export const sizesBuilder = (props: sizesBuilderProps) => {
  return Object.entries(props).reduce((acc, [screen, size]) => {
    //@ts-ignore
    return `${acc} (min-width: ${sizesMap[screen]}px) ${size},`;
  }, "" as string);
};
export default SanityImage;

const test = sizesBuilder({ lg: "50vw" });
