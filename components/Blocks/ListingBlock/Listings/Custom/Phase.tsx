import RichText from "@components/RichText/RichText";
import { useSection } from "@components/Section/SectionContext";
import Typo from "@components/Typography/Typography";
import useInViewport from "@hooks/useInViewport";

import clsx from "clsx";
import React, { useRef, useState } from "react";
import { useListingBlock } from "../../listingContext";
import { customListItemResult } from "./customListQuery";

const Phase: React.FC = (props) => {
  const { customItems: items, bgColor } = useListingBlock();

  return (
    <div
      className={clsx("grid  grid-cols-2  md:grid-rows-2   ", {
        "grid-rows-2 md:grid-cols-2": items?.length === 2,
        "grid-rows-3 md:grid-cols-3": items?.length === 3,
        "grid-rows-4 md:grid-cols-4": items?.length === 4,
        "grid-rows-5 md:grid-cols-5": items?.length === 5,
        "grid-rows-6 md:grid-cols-6": items?.length === 6,
        "grid-rows-7 md:grid-cols-7": items?.length === 7,
        "grid-rows-8 md:grid-cols-7": items?.length === 8,
        "text-white": bgColor === "primary",
      })}
    >
      <div className="row-span-full md:col-span-full mb-8  h-full">
        {items && <TimeLine length={items?.length} />}
      </div>

      {items?.map((i, index) => (
        <Dot
          index={index}
          title={i.title}
          description={i.description}
          key={i._key}
        />
      ))}
    </div>
  );
};

export default Phase;

interface DotProps extends Omit<customListItemResult, "_key"> {
  title?: string | null;
  index: number;
}

const Dot: React.FC<DotProps> = (props) => {
  const { title, description, index } = props;
  return (
    <div className="w-full flex md:flex-col justify-start items-center">
      <div className="ml-12 md:ml-0 md:px-5 ">
        <Typo variant="h3" className=" md:text-center">
          {title}
        </Typo>
        {
          <div className=" md:text-center ">
            <RichText content={description} />
          </div>
        }
      </div>
    </div>
  );
};
type TimeLineProps = {
  length: number;
};
const TimeLine: React.FC<TimeLineProps> = ({ length }) => {
  const ref = useRef(null);

  const inViewport = useInViewport(ref);

  const circleWidth = "50px";
  const arr = new Array(length).fill(Math.random());
  const items = new Array(length * 2 + 1).fill(Math.random());
  const temp = arr.map((i, index) =>
    index === 0
      ? `1fr ${circleWidth} 2fr`
      : index === length - 1
      ? `${circleWidth} 1fr`
      : `${circleWidth} 2fr`
  );

  let itemCount = 0;

  return (
    <div
      ref={ref}
      style={{
        gridTemplateColumns: temp.join(" "),
        gridTemplateRows: `0px ${circleWidth} 2fr ` + temp.slice(1).join(" "),
      }}
      className="grid grid-flow-col   md:grid-flow-row h-full  md:!grid-rows-none "
    >
      {items?.map((i, index) => {
        const isDot = !!index && !!(index % 2);
        const isLine =
          !!index && !!((index + 1) % 2) && index + 1 !== items.length;

        if (isDot || isLine) {
          itemCount++;
        }

        return (
          <div
            key={index}
            className={clsx(
              "flex col-span-full md:col-auto  justify-center items-center  "
            )}
          >
            {isDot && (
              <Dott
                inViewport={inViewport}
                diameter={circleWidth}
                index={itemCount}
              />
            )}
            {isLine && <Line inViewport={inViewport} index={itemCount} />}
          </div>
        );
      })}
    </div>
  );
};

type DottProps = {
  diameter?: number | string;
  index: number;
  inViewport: boolean;
};

const delay = 300;
const Dott: React.FC<DottProps> = ({ diameter = 40, index, inViewport }) => {
  const { bg } = useSection();

  return (
    <div
      style={{
        width: diameter,
        height: diameter,
      }}
      className="rotate-180"
    >
      <svg viewBox="0 0 120 120">
        <circle
          className="stroke-transparent "
          cx="60"
          cy="60"
          r="54"
          fill="none"
          strokeWidth="12"
        />
        <circle
          style={{
            transitionDuration: inViewport ? delay + "ms" : "0ms",
            transitionDelay: inViewport ? index * delay + "ms" : "0ms",
            transitionTimingFunction: "linear",
          }}
          className={clsx(" transition-all   ", {
            "stroke-white": bg === "primary",
            "stroke-primary": bg === "white" || bg === null,
          })}
          strokeDasharray={100}
          strokeDashoffset={inViewport ? 0 : 100}
          cx="60"
          cy="60"
          r="45"
          fill="none"
          strokeWidth="30"
          pathLength="100"
        />
      </svg>
    </div>
  );
};

type LineProps = {
  index: number;
  inViewport: boolean;
};
const Line: React.FC<LineProps> = ({ index, inViewport }) => {
  const { bg } = useSection();
  return (
    <div
      style={{
        transitionDuration: inViewport ? delay + "ms" : "0ms",
        transitionDelay: inViewport ? index * delay + "ms" : "0ms",
        transformOrigin: "left top",
        transitionTimingFunction: "linear",
      }}
      className={clsx(" w-1 md:w-full transition-transform  md:h-1 h-full   ", {
        "scale-y-110 md:scale-x-100 md:scale-y-100  ": inViewport,
        "scale-y-0  md:scale-x-0 md:scale-y-100 ": !inViewport,
        "bg-white": bg === "primary",
        "bg-primary": bg === "white" || bg === null,
      })}
    />
  );
};
