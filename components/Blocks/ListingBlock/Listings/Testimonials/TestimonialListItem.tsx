import Typo from "@components/Typography/Typography";
import SanityImage from "@lib/SanityImage";
import * as React from "react";
import { TestimonialItemResult } from "./testimonialQuery";

interface ITestimonialListItemProps extends TestimonialItemResult {
  active?: boolean;
}

const TestimonialListItem: React.FunctionComponent<
  ITestimonialListItemProps
> = (props) => {
  const { name, position, text, active, image, children } = props;

  return (
    <div
      className={`w-full  flex-shrink-0  animate-fadeIn  grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto ${
        active ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col justify-center items-center border-b-2 md:border-b-0 md:border-r-2 border-black py-12 px-5">
        <div className="relative w-32 h-32  overflow-hidden rounded-full">
          {image?.url && (
            <SanityImage image={image} objectFit="cover" sizes="360px" />
          )}
        </div>
        <Typo bold variant="body-l" className=" mt-10">
          {name}
        </Typo>
        <Typo className="text-center ">{position}</Typo>
      </div>
      {children}
      <div className="px-5 p-24 whitespace-pre-line  flex justify-center items-center py-8">
        <Typo space={false}>{text}</Typo>
      </div>
    </div>
  );
};

export default TestimonialListItem;
