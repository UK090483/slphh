import Carousel from "@components/Carousel/Carousel";
import CarouselItemWrap from "@components/Carousel/CarouselItemWrap";
import Dots from "@components/Carousel/Dots";
import Navigation from "@components/Carousel/Navigation";
import Typo from "@components/Typography/Typography";
import clsx from "clsx";
import { shuffle } from "lodash";
import * as React from "react";
import { useListingBlock } from "../../listingContext";

import PersonListItem from "./PersonListItem";

const PersonList: React.FC = (props) => {
  const { personItems, title, showTitle, personVariant } = useListingBlock();
  const _title = showTitle && title;
  const [isMounted, setIsMounted] = React.useState(false); // Need this for the react-tooltip

  const items = React.useMemo(() => shuffle(personItems), [personItems]);

  const asCarousel = personVariant === "carousel" && items && items.length > 3;

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {_title && (
        <Typo
          variant="h3"
          as="h2"
          className="text-center uppercase pb-12 md:pb-24 pt-6 md:pt-12 "
        >
          {title}
        </Typo>
      )}

      {asCarousel && <PersonCarousel />}

      {!asCarousel && (
        <ul className="relative w-full grid  grid-cols-1 lg:grid-cols-3 justify-items-center z-10">
          {isMounted &&
            items?.map((i, index) => <PersonListItem key={index} {...i} />)}
        </ul>
      )}
    </>
  );
};

export default PersonList;

const PersonCarousel: React.FC = () => {
  const { personItems } = useListingBlock();

  const items = React.useMemo(
    () => shuffle(personItems?.map((i) => ({ ...i, _id: Math.random() + "" }))),
    [personItems]
  );

  const _items = chunkItems(items || [], 3);

  return (
    <Carousel items={_items || []}>
      <>
        <Navigation>
          <CarouselItemWrap>
            {({ activeItem, animateOutIndex }) => {
              return (
                <div className="w-full max-w-4xl mx-auto grid grid-cols-1 grid-rows-1 ">
                  {_items.map((_i, wrapIndex) => (
                    <div
                      key={wrapIndex}
                      className={clsx(
                        "row-start-1 row-span-1 col-start-1 col-span-1 transition-opacity justify-items-center    grid grid-cols-1  opacity-0",
                        {
                          "opacity-100":
                            wrapIndex === activeItem &&
                            animateOutIndex !== wrapIndex,
                          "lg:grid-cols-3": _items[wrapIndex].length === 3,
                          "lg:grid-cols-2": _items[wrapIndex].length === 2,
                          "lg:grid-cols-1": _items[wrapIndex].length === 1,
                          "pointer-events-none": wrapIndex !== activeItem,
                        }
                      )}
                    >
                      {_items[wrapIndex].map((i) => {
                        return <PersonListItem key={i._id} {...i} />;
                      })}
                    </div>
                  ))}
                  <Dots className="mt-12 hidden lg:flex" />
                </div>
              );
            }}
          </CarouselItemWrap>
        </Navigation>
        <Dots className="my-12  lg:hidden" />
      </>
    </Carousel>
  );
};

function chunkItems<T>(array: T[], chunkSize: number): T[][] {
  const chunked: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunked.push(array.slice(i, i + chunkSize));
  }
  return chunked;
}
