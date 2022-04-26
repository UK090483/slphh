import React from "react";
import Hero from "@components/Blocks/HeroBlock/Hero";
import { HeroBlogResult } from "./HeroBlockQuery";

export interface HeroBlockProps extends HeroBlogResult {}

const HeroBlock: React.FC<HeroBlockProps> = (props) => {
  return <Hero {...props} />;
};

export default HeroBlock;
