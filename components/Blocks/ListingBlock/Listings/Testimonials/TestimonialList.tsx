import * as React from "react";
import { TestimonialItemResult } from "./testimonialQuery";
import TestimonialListItem from "./TestimonialListItem";

import useKeyPress from "@hooks/useKeyPress";
import useCounter from "@hooks/useCounter";
import { Navigation } from "./Navigation";
import { Dots } from "./Dots";

import clsx from "clsx";

import { useListingBlock } from "../../listingContext";
import { useSection } from "@components/Section/SectionContext";

function shuffle<Type>(_array: Type[] | null | undefined) {
  if (!_array) return;
  const array = [..._array];
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const TestimonialList: React.FC = () => {
  const { testimonialItems: _items, title } = useListingBlock();
  const items = shuffle(_items) as TestimonialItemResult[] | null | undefined;
  const { bg } = useSection();
  const length = items ? items.length : 0;

  const ref = React.useRef(null);
  const { count, next, prev, setCount } = useCounter(length);
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
      {/* {title && (
        <div className="absolute bg-primary w-16 h-1/3 top-0 right-24"></div>
      )} */}
      {/* {title && (
        <div className=" bg-secondary p-3  w-full  ">
          <Typo space={false} variant={"h2"}>
            {title}
          </Typo>
        </div>
      )} */}
      <Navigation
        count={length}
        onNext={next}
        onPrev={prev}
        className={clsx({
          "border-8 border-white bg-primary  text-white": !title,
          "  ": title,
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
            <TestimonialListItem active={index === count} key={i._id} {...i}>
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
        count={length}
        active={count}
        onChange={(n) => {
          setCount(n);
        }}
      />
    </div>
  );
};

export default TestimonialList;
