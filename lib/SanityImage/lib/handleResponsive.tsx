import { ImageProps } from "next/image";
import type { ImageMetaResult } from "../query";
import { UseSanityImageOptions } from "../types";
import getDefaultResult from "./getDefaultResult";

const handleResponsive = (
  image: ImageMetaResult,
  options: UseSanityImageOptions
): ImageProps => {
  return { ...getDefaultResult(image) };
};

export default handleResponsive;
