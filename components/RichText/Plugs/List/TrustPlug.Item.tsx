import RichText from "@components/RichText/RichText";
import Typo from "@components/Typography/Typography";
import SanityImage from "@lib/SanityImage";
import * as React from "react";

import { ListPlugQueryItemResult } from "./ListPlugQuery";

interface ITrustPlugItemProps extends ListPlugQueryItemResult {}

const TrustPlugItem: React.FunctionComponent<ITrustPlugItemProps> = (props) => {
  const { image, description } = props;

  if (!image?.url) return null;

  return (
    <div className="max-w-xs flex justify-center flex-col items-center">
      <div className="w-28 h-28 bg-gray-200  rounded-full flex justify-center items-center mb-10 ">
        <SanityImage image={image} height={50} />
      </div>

      {description && <RichText content={description} />}
    </div>
  );
};

export default TrustPlugItem;
