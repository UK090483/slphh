import Avatar from "@components/Avatar";
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
      className={`w-full   flex-shrink-0  animate-fadeIn  grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto ${
        active ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col justify-center items-center py-12 px-5">
        <Avatar image={image} title={name} subTitle={position} />
      </div>
      {children}
      <div className="px-5 p-24 whitespace-pre-line  flex justify-center items-center py-8">
        <Typo space={false} variant="h6">
          »{text}«
        </Typo>
      </div>
    </div>
  );
};

export default TestimonialListItem;
