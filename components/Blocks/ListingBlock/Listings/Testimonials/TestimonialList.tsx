import * as React from "react";
import { TestimonialItemResult } from "./testimonialQuery";
import TestimonialListItem from "./TestimonialListItem";
// import useInterval from "@hooks/useInterval";
// import useInViewport from "@hooks/useInViewport";
import useKeyPress from "@hooks/useKeyPress";
import useCounter from "@hooks/useCounter";
import { Navigation } from "./Navigation";
import { Dots } from "./Dots";
import Typo from "@components/Typography/Typography";
import clsx from "clsx";
import { head } from "lodash";

interface ITestimonialListProps {
  items: TestimonialItemResult[];
  title?: string | null;
}

const TestimonialList: React.FunctionComponent<ITestimonialListProps> = (
  props
) => {
  const { items = [], title } = props;
  const ref = React.useRef(null);
  const { count, next, prev, setCount } = useCounter(items.length);
  // const { start, stop } = useInterval(next, 5000);
  // useInViewport(ref, {
  //   onChange: (inViewport) => (inViewport ? start() : stop()),
  // });

  const keyPressHandler = useKeyPress({
    ArrowUp: next,
    ArrowRight: next,
    ArrowDown: prev,
    ArrowLeft: prev,
  });

  return (
    <div className="relative">
      {title && (
        <div className="absolute bg-primary w-16 h-1/3 top-0 right-24"></div>
      )}
      {title && (
        <div className=" bg-secondary p-3  w-full  ">
          <Typo space={false} variant={"h2"}>
            {title}
          </Typo>
        </div>
      )}
      <Navigation
        count={items.length}
        onNext={next}
        onPrev={prev}
        className={clsx({
          "border-8 border-white bg-primary  text-white": !title,
          " bg-secondary ": title,
        })}
      >
        <div
          aria-label="Testimonials"
          tabIndex={0}
          {...keyPressHandler}
          ref={ref}
          onClick={next}
          // onFocus={stop}
          // onBlur={start}
          // onMouseEnter={stop}
          // onMouseLeave={start}
          className="flex w-full overflow-hidden  py-8   "
        >
          {items?.map((i, index) => (
            <TestimonialListItem
              headerColor={title ? "primary" : "black"}
              active={index === count}
              key={i._id}
              {...i}
            >
              <Dots
                className="md:hidden"
                count={items.length}
                active={count}
                onChange={(n) => {
                  setCount(n);
                }}
              />
            </TestimonialListItem>
          ))}
        </div>
      </Navigation>
      <Dots
        className={clsx("hidden md:flex", {
          "text-white": !title,
        })}
        count={items.length}
        active={count}
        onChange={(n) => {
          setCount(n);
        }}
      />
    </div>
  );
};

export default TestimonialList;
