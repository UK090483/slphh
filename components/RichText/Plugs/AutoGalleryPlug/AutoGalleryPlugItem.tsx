import SanityImage from "@lib/SanityImage";
import * as React from "react";
import { AutoGalleryPlugQueryItemResult } from "./AutoGalleryPlugQuery";

interface IAutoGalleryPlugItemProps extends AutoGalleryPlugQueryItemResult {
  variant: "grid-3";
  onClick?: () => void;
}

const AutoGalleryPlugItem: React.FC<IAutoGalleryPlugItemProps> = (props) => {
  const { image, variant, onClick = () => {} } = props;

  return (
    <button
      tabIndex={0}
      className=" list-none w-full pb-1 relative "
      onClick={onClick}
    >
      <SanityImage image={image} />
      <div className=" transition-colors hover:bg-transparent absolute inset-0 bg-white opacity-20 mb-3 " />
    </button>
  );
};

export default AutoGalleryPlugItem;
