import * as React from "react";
import { TestimonialItemResult } from "./testimonialQuery";
import TestimonialListItem from "./TestimonialListItem";
// import useInterval from "@hooks/useInterval";
// import useInViewport from "@hooks/useInViewport";
import useKeyPress from "@hooks/useKeyPress";
import useCounter from "@hooks/useCounter";
import { Navigation } from "./Navigation";
import { Dots } from "./Dots";

interface ITestimonialListProps {
  items: TestimonialItemResult[];
}

const TestimonialList: React.FunctionComponent<ITestimonialListProps> = (
  props
) => {
  const { items = [] } = props;
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
    <>
      <div
        aria-label=" Testimonials "
        tabIndex={0}
        {...keyPressHandler}
        ref={ref}
        onClick={next}
        // onFocus={stop}
        // onBlur={start}
        // onMouseEnter={stop}
        // onMouseLeave={start}
        className="flex w-full overflow-hidden  border-t-2 border-b-2  border-black mb-9 md:mb-0 "
      >
        {items?.map((i, index) => (
          <TestimonialListItem active={index === count} key={i._id} {...i}>
            <Navigation
              count={items.length}
              onNext={next}
              onPrev={prev}
              className=" md:hidden  border-b-2 border-black"
            >
              <Dots
                count={items.length}
                active={count}
                onChange={(n) => {
                  setCount(n);
                }}
              />
            </Navigation>
          </TestimonialListItem>
        ))}
      </div>
      <Navigation
        count={items.length}
        onNext={next}
        onPrev={prev}
        className=" hidden md:flex mb-9 md:mb-20"
      >
        <Dots
          count={items.length}
          active={count}
          onChange={(n) => {
            setCount(n);
          }}
        />
      </Navigation>
    </>
  );
};

export default TestimonialList;
