import Button from "@components/Button/Button";
import RichText from "@components/RichText/RichText";
import SanityImage from "@lib/SanityImage";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { HeroBlogResult } from "./HeroBlockQuery";

interface HeroProps extends HeroBlogResult {}

const Hero: React.FC<HeroProps> = (props) => {
  const { header, image, linkText, link, content } = props;

  return (
    <div
      data-testid="heroBlock"
      className={clsx(
        "w-full max-w-[1800px] mx-auto grid grid-cols-heroSmall md:grid-cols-hero "
      )}
    >
      <div
        className={clsx(
          "flex justify-end items-center w-full flex-shrink overflow-hidden",
          "row-start-1 col-start-1"
        )}
      >
        <div className="sm:min-w-[350px]">{<Arrow />}</div>
      </div>

      <div
        className={clsx(
          " w-full  aspect-w-1 aspect-h-1 ",
          "row-start-1 col-start-2"
        )}
      >
        <div className=" w-full h-full">
          <Image
            placeholder="blur"
            blurDataURL={image?.lqip}
            className=" grayscale-[60%]"
            sizes="(min-width: 500px) 600px,300px"
            priority={true}
            alt="el"
            layout="fill"
            objectFit="cover"
            src={image?.url || ""}
          />
          {/* <SanityImage
            priority={true}

            image={image}
            layout="fill"
            objectFit="cover"
          /> */}
        </div>
      </div>

      <div
        className={clsx(
          "row-start-2 col-start-1 col-span-full",
          "lg:row-start-1 lg:col-start-1 lg:col-span-1",
          "px-4 flex max-w-2xl  justify-center items-center  z-10  py-12 "
        )}
      >
        <div>
          <RichText content={content} />
          {/* <Typo className="text-[40px] sm:!text-[60px]" variant={"h1"}>
            {header}
          </Typo> */}
          {link?.href && (
            <Button href={link.href} external={link.external}>
              {linkText || "More"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;

const Arrow: React.FC = () => {
  return (
    <svg
      viewBox="0 0 278 503"
      className={clsx(" max-h-[600px]  fill-primary")}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M109.622 503L277.5 251.508L109.622 0H0.5L140.316 206.169L171.848 251.487L140.316 296.831L0.5 503H109.622Z" />
    </svg>
  );
};
