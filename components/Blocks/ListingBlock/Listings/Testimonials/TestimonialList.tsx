import * as React from "react";
import { TestimonialItemResult } from "./testimonialQuery";
import TestimonialListItem from "./TestimonialListItem";

import useKeyPress from "@hooks/useKeyPress";
import useCounter from "@hooks/useCounter";
// import { Navigation } from "./Navigation";

import clsx from "clsx";

import { useListingBlock } from "../../listingContext";
import { useSection } from "@components/Section/SectionContext";
import Carousel from "@components/Carousel/Carousel";
import Navigation from "@components/Carousel/Navigation";
import Dots from "@components/Carousel/Dots";
import CarouselItemWrap from "@components/Carousel/CarouselItemWrap";
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
  const { testimonialItems: items, title } = useListingBlock();

  if (!items) return null;
  return (
    <Carousel items={items}>
      <Navigation>
        <CarouselItemWrap>
          {({ activeItem, animateIn, animateOut }) => {
            return (
              <>
                {items?.map((i, index) => (
                  <TestimonialListItem
                    animateIn={animateIn}
                    animateOut={animateOut}
                    active={index === activeItem}
                    key={i._id}
                    {...i}
                  >
                    <Dots className="md:hidden" />
                  </TestimonialListItem>
                ))}
              </>
            );
          }}
        </CarouselItemWrap>
      </Navigation>
      <Dots className="hidden md:flex" />
    </Carousel>
  );
};

export default TestimonialList;
