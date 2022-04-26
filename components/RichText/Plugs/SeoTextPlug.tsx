import Typo from "@components/Typography/Typography";
import { PlugProps } from "@lib/SanityPageBuilder/lib/RichText";
import React from "react";

export type SeoHeaderPlugResult = {
  _type: "seoHeader";
  _key: string;
  text?: string;
  textStyle?: "normal" | "h1" | "h2" | "h3" | "h4";
  textTag?: "p" | "h1" | "h2" | "h3" | "h4";
};

const SeoTextPlug: React.FC<PlugProps<SeoHeaderPlugResult>> = (props) => {
  const { text, textStyle, textTag } = props.node;
  return (
    <Typo variant={textStyle} as={textTag}>
      {text}
    </Typo>
  );
};

export default SeoTextPlug;
