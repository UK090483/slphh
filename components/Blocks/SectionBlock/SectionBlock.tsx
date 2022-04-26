import RichText from "@components/RichText/RichText";
import Section from "@components/Section/Section";
import SanityImage from "@lib/SanityImage";
import type { ImageMetaResult } from "@lib/SanityImage/query";
import clsx from "clsx";
import React from "react";
import type { SectionResult } from "./SectionBlockQuery";

interface SectionBlockProps extends SectionResult {}

const SectionBlock: React.FC<SectionBlockProps> = (props) => {
  const {
    content,
    bottomSpace,
    topSpace,
    title,
    image,
    type,
    imagePosition = "l",
  } = props;

  const hasImage = image && image.url;
  const autoType = hasImage ? "l" : "s";

  return (
    <>
      <Section
        data-testid="sectionBlock"
        width={type || autoType}
        {...(title && { id: title })}
        className={clsx({
          "pt-5 md:pt-10": topSpace === "s",
          "pt-9 md:pt-20": topSpace === "m",
          "pt-12 md:pt-32": topSpace === "l",
          "pt-16 md:pt-44": topSpace === "xl",
          "pt-24 md:pt-60": topSpace === "xxl",
          "pb-5 md:pb-10": bottomSpace === "s",
          "pb-9 md:pb-20": bottomSpace === "m",
          "pb-16 md:pb-32": bottomSpace === "l",
          "pb-12 md:pb-44": bottomSpace === "xl",
          "pb-24 md:pb-60": bottomSpace === "xxl",
          "pb-0.5": !bottomSpace,
          "grid  grid-cols-1  lg:grid-cols-3 ": hasImage,
        })}
      >
        {hasImage ? (
          <WithImage place={imagePosition} image={image}>
            {content && <RichText content={content} />}
          </WithImage>
        ) : (
          <>{content && <RichText content={content} />} </>
        )}
      </Section>

      <div className="clear-both "></div>
    </>
  );
};

const WithImage: React.FC<{
  place: "l" | "r";
  image: ImageMetaResult;
}> = ({ children, place = "l", image }) => {
  const content = (
    <div
      className={clsx({
        "pr-0 lg:pr-12 col-span-2": place === "r",
        "pl-0 lg:pl-12 col-span-2": place === "l",
      })}
    >
      {children}
    </div>
  );
  return (
    <>
      {place === "r" && content}
      <div className="relative overflow-hidden aspect-w-1 aspect-h-1">
        <SanityImage image={image} objectFit="contain" />
      </div>
      {place === "l" && content}
    </>
  );
};

export default SectionBlock;
