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
    topSpace = "m",
    title,
    image,
    type,
    imagePosition = "l",
    bgColor,
    decoration,
  } = props;

  const hasImage = image && image.url;
  const autoType = hasImage ? "l" : "s";

  return (
    <>
      <Section
        bottomSpace={bottomSpace}
        topSpace={topSpace}
        decoration={decoration}
        bg={bgColor}
        data-testid="sectionBlock"
        width={type || autoType}
        {...(title && { id: title })}
        className={clsx({
          "grid  grid-cols-1  lg:grid-cols-2  gap-8 ": hasImage,
        })}
      >
        <div
          className={clsx("relative overflow-hidden  ", {
            "order-1": imagePosition === "l",
            "order-2": imagePosition === "r",
          })}
        >
          <SanityImage image={image} />
        </div>
        <ConditionalWrap
          condition={!!hasImage}
          wrapper={(children) => (
            <div className={clsx({ "order-2": imagePosition === "l" })}>
              {children}
            </div>
          )}
        >
          <RichText content={content} />
        </ConditionalWrap>
      </Section>

      <div className="clear-both "></div>
    </>
  );
};

type ConditionalWrapProps = {
  children: React.ReactElement;
  condition: boolean;
  wrapper: (children: React.ReactElement) => JSX.Element;
};
const ConditionalWrap: React.FC<ConditionalWrapProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : children);

export default SectionBlock;
