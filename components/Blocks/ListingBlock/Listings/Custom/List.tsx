import RichText from "@components/RichText/RichText";
import SanityImage from "@lib/SanityImage";
import { ImageMetaResult } from "@lib/SanityImage/query";
import clsx from "clsx";
import * as React from "react";
import { useListingBlock } from "../../listingContext";

const List: React.FC = (props) => {
  const { customItems: items, customVariants } = useListingBlock();

  const isList = customVariants === "list" || customVariants === null;
  const isIconList = customVariants === "iconList";

  return (
    <div className="grid md:px-5 justify-items-center gap-12 grid-cols-1 md:grid-cols-2 mx-auto max-w-6xl">
      {items?.map((i) => {
        const { image, description, _key } = i;

        return (
          <div
            key={_key}
            className={clsx(" flex justify-center flex-col items-center", {
              "max-w-xs ": isIconList,
            })}
          >
            {image && isIconList && <IconImage image={image} />}
            {image && isList && <CardImage image={image} />}

            {description && (
              <div
                className={clsx({
                  "px-5 md:px-0": isList,
                  "text-center": isIconList,
                })}
              >
                <RichText content={description} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default List;

const IconImage: React.FC<{ image: ImageMetaResult }> = ({ image }) => {
  return (
    <div className="w-28 h-28 bg-gray-200  rounded-full flex justify-center items-center mb-10 ">
      <SanityImage image={image} height={50} />
    </div>
  );
};

const CardImage: React.FC<{ image: ImageMetaResult }> = ({ image }) => {
  return (
    <div className=" w-full ">
      <SanityImage image={image} />
    </div>
  );
};
