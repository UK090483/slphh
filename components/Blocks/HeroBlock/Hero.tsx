import Typo from "@components/Typography/Typography";
import SanityImage from "@lib/SanityImage";
import React from "react";

import { HeroBlogResult } from "./HeroBlockQuery";

interface HeroProps extends HeroBlogResult {}

const Hero: React.FC<HeroProps> = (props) => {
  const { header, image } = props;

  return (
    <div
      data-testid="heroBlock"
      className=" grid grid-cols-5 grid-rows-2  md:grid-rows-none h-hero-mobile sm:h-hero px-2 overflow-clip"
    >
      <div className="relative w-full  col-start-1 col-span-full md:col-start-2  row-span-1 row-start-1 z-0">
        <SanityImage
          image={image}
          layout="fill"
          objectFit="cover"
          objectPosition={"left"}
        />
      </div>
      <div className=" px-4 flex  justify-center items-center col-start-1 md:col-start-1 col-span-full md:col-span-3 z-10  row-span-1 row-start-2 md:row-start-1 ">
        <Typo variant={"h1"}>{header}</Typo>
      </div>
    </div>
  );
};

export default Hero;
