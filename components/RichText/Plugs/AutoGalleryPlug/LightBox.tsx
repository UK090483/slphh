import useCounter from "@hooks/useCounter";
import useFocusTrap from "@hooks/useFocustrap";
import useKeyPress from "@hooks/useKeyPress";
import SanityImage from "@lib/SanityImage";
import { ImageMetaResult } from "@lib/SanityImage/query";
import * as React from "react";
import { useLockBodyScroll, useWindowSize } from "react-use";

export type LightBoxProps = {
  onClose: () => void;
  initialIndex: number;
  items?: {
    _key: string;
    image?: ImageMetaResult | null;
  }[];
};

export const LightBox: React.FC<LightBoxProps> = (props) => {
  const { onClose, items, initialIndex } = props;
  useLockBodyScroll();
  const { count, next, prev } = useCounter(items?.length || 6, initialIndex);

  const ref = useFocusTrap();

  useKeyPress(
    {
      all: (e) => {
        ["ArrowRight", "ArrowUp"].includes(e.key) && next();
        ["ArrowLeft", "ArrowDown"].includes(e.key) && prev();
        "Escape" === e.key && onClose();
      },
    },
    { useDocument: true }
  );

  const { width } = useWindowSize();

  return (
    <div
      ref={ref}
      id="portal"
      className=" z-[999999]  fixed inset-0 bg-black bg-opacity-80  flex  justify-center items-center text-white  "
    >
      <button
        className=" border-2 rounded-full  z-10 w-10 h-10 absolute top-4 right-4"
        onClick={onClose}
      >
        X
      </button>

      <button
        className=" absolute bottom-0 md:top-1/2  left-0 z-10  border-2 rounded-full  w-10 h-10 shrink-0  m-6"
        onClick={prev}
      >
        {"<"}
      </button>
      <div className="flex  overflow-hidden h-[70vh] pointer-events-none ">
        <div
          className="flex transition-transform "
          style={{ transform: `translateX(-${width * count}px)` }}
        >
          {items?.map((i) => {
            return (
              <div key={i._key} className=" relative flex-shrink-0 w-screen ">
                <SanityImage
                  placeholder="empty"
                  sizes="60vw"
                  image={i.image}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            );
          })}
        </div>
      </div>

      <button
        className=" absolute bottom-0 md:top-1/2  z-10 right-0  border-2 rounded-full  w-10 h-10 shrink-0 m-6"
        onClick={next}
      >
        {">"}
      </button>
    </div>
  );
};
