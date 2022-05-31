import Avatar from "@components/Avatar";
import Typo from "@components/Typography/Typography";
import clsx from "clsx";
import * as React from "react";
import { TestimonialItemResult } from "./testimonialQuery";

interface ITestimonialListItemProps extends TestimonialItemResult {
  active?: boolean;
  animateIn?: boolean;
  animateOut?: boolean;
}

const TestimonialListItem: React.FunctionComponent<
  ITestimonialListItemProps
> = (props) => {
  const {
    name,
    position,
    text,
    active,
    image,
    children,
    animateOut = false,
  } = props;

  return (
    <li
      aria-hidden={!active}
      className={clsx(
        `w-full  col-start-1 col-span-1 row-start-1 row-span-1 transition-all  duration-500  opacity-0    grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto`,
        { "opacity-100 ": active && !animateOut }
      )}
    >
      <div
        className={clsx(
          "flex   flex-col justify-center items-center py-12 px-5",
          { "animate-slideInLeft": active && !animateOut }
        )}
      >
        <Avatar image={image} title={name} subTitle={position} />
      </div>

      {children}
      <div
        className={clsx(
          "  whitespace-pre-line  flex justify-center items-center py-8",

          { "animate-slideInRight": active && !animateOut }
        )}
      >
        <Typo space={false} as="h4" variant="h6">
          »{text}«
        </Typo>
      </div>
    </li>
  );
};

export default TestimonialListItem;
