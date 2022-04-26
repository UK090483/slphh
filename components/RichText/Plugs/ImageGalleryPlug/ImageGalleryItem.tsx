import React from "react";
import { ConditionalLink } from "@components/Link";
import Typo from "@components/Typography/Typography";
import { LinkResult } from "@lib/Navigation/query";
import SanityImage from "@lib/SanityImage";
import type { ImageMetaResult } from "@lib/SanityImage/query";

type ImageGalleryItemProps = {
  image?: ImageMetaResult;
  title?: string;
  link?: LinkResult;
  className?: string;
  contain?: boolean;
};

const ImageGalleryItem: React.FunctionComponent<ImageGalleryItemProps> = (
  props
) => {
  const { image, title, link, className, contain = false } = props;
  return (
    <>
      <ConditionalLink
        href={link?.href || "/"}
        external={!!link?.external}
        condition={!!link}
        className={`${className} w-full rounded-theme overflow-hidden shadow-2x `}
      >
        <div className="flex flex-col pt-4">
          <div className={`h-full  ${contain ? "relative" : ""}`}>
            <SanityImage
              image={image}
              objectFit={contain ? "contain" : "cover"}
            />
          </div>
          {title && (
            <div className=" relative h-fit mx-4 mb-4 ">
              <Typo
                space={false}
                className="inline-block py-4 px-6 w-full bg-white rounded-[16px] whitespace-pre-line"
              >
                {title}
              </Typo>
            </div>
          )}
        </div>

        {/* {image && (
          <div
            className={`${contain ? "" : ""} absolute inset-0 w-full h-full`}
          >
            <SanityImage image={image} objectFit="cover" />
          </div>
        )}

        {title && (
          <div className="flex items-end left-4">
            <div className="pb-4 ">
              <Typo
                space={false}
                bold
                className="inline-block py-4 px-6 bg-white rounded-theme whitespace-pre-line "
              >
                {title}
              </Typo>
            </div>
          </div>
        )} */}
      </ConditionalLink>
    </>
  );
};

export default ImageGalleryItem;
