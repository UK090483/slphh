/* eslint-disable @next/next/no-img-element */

import useSanityImage from "@lib/SanityImage/useSanityImage";
import BlockContent, { Serializers } from "@sanity/block-content-to-react";
import React from "react";
import { Textfit } from "react-textfit";
import { HeroBlogResult } from "./HeroBlockQuery";

interface HeroProps extends HeroBlogResult {}

//@ts-ignore
const InlineImage = (props) => {
  //@ts-ignore
  const { src } = useSanityImage(props.mark);

  return (
    <span style={{ height: "0.705em" }} className="relative inline-block ">
      {src && (
        <img
          style={{ height: "0.705em" }}
          height="0.8em"
          src={src + "&w=200"}
          alt=""
        />
      )}
    </span>
  );
};
//@ts-ignore
const BlockRenderer = (props) => {
  return React.createElement("span", { className: "block" }, props.children);
};

const serializer: Serializers = {
  types: { block: BlockRenderer },
  marks: {
    image: InlineImage,
    brake: ({ children }) => {
      return <>&shy;{children}</>;
    },
    unbreakable: ({ children }) => {
      return <span className="whitespace-nowrap">{children}</span>;
    },
  },
  container: (props: any) => {
    return <h1>{props?.children}</h1>;
  },
};

const Hero: React.FC<HeroProps> = (props) => {
  const { text } = props;
  const [ready, setReady] = React.useState(false);

  return (
    <div
      data-testid="heroBlock"
      className="flex flex-col h-hero-mobile  sm:h-hero pt-11 lg:pt-16"
    >
      {text && (
        <Textfit
          max={200}
          className={`w-full h-full  px-5 container mx-auto font-header  flex items-center leading-[1.2em] transition-opacity duration-1000 overflow-hidden  ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          mode="multi"
          onReady={() => {
            !ready && setReady(true);
          }}
        >
          <BlockContent
            renderContainerOnSingleChild={true}
            blocks={text}
            serializers={serializer}
          />
        </Textfit>
      )}
    </div>
  );
};

export default Hero;
