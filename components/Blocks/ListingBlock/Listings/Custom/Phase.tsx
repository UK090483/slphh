import RichText from "@components/RichText/RichText";
import Typo from "@components/Typography/Typography";
import useInViewport from "@hooks/useInViewport";

import clsx from "clsx";
import React, { useRef } from "react";
import { useListingBlock } from "../../listingContext";

const Phase: React.FC = () => {
  return (
    <div className=" max-w-xs mx-auto md:max-w-none ">
      <TimeLine />
    </div>
  );
};

export default Phase;

const TimeLine: React.FC = () => {
  const ref = useRef(null);
  const { customItems: content, bgColor } = useListingBlock();

  const length = content ? content.length : 0;
  const inViewport = useInViewport(ref);

  const circleWidth = "50px";
  const arr = new Array(length).fill(Math.random());
  const items = new Array(length * 3).fill(Math.random());
  const temp = arr.map((i, index) => `1fr ${circleWidth} 1fr`);
  const tempR = arr.map((i, index) => `0px ${circleWidth} 1fr`);

  if (!content) return null;
  let itemCount = 0;

  return (
    <div
      style={{
        gridTemplateColumns: temp.join(" "),
        gridTemplateRows: tempR.join(" "),
      }}
      className={clsx(
        "grid grid-flow-col md:grid-flow-row h-full  md:!grid-rows-none  relative",
        {
          "text-white": bgColor === "primary",
          "text-primary":
            bgColor === "secondary" || bgColor === "white" || bgColor === null,
        }
      )}
    >
      <div className="absolute " ref={ref}></div>
      {items?.map((i, index) => {
        const isFirst = index === 0;
        const isLast = index === items.length - 1;
        const remainder = index % 3;

        const isDot = remainder === 1;
        const isLine = remainder !== 1 && !isFirst && !isLast;

        if (isDot || isLine) {
          itemCount++;
        }

        return (
          <div
            key={index}
            className={clsx("flex  md:col-auto  justify-center items-center ")}
          >
            {isDot && (
              <Dot
                inViewport={inViewport}
                diameter={circleWidth}
                index={itemCount}
              />
            )}
            {isLine && <Line inViewport={inViewport} index={itemCount} />}
          </div>
        );
      })}

      {content.map((i, index) => {
        return (
          <div
            key={index}
            className="col-span-11 mx-4  md:pt-6 row-span-3 md:row-span-1 md:col-span-3  text-2xl "
          >
            <Typo variant="h3" bold className=" md:text-center ">
              {i.title}
              {index === 0}
            </Typo>

            <div key={index} className="md:hidden text-black">
              <RichText content={i.description} />
            </div>
          </div>
        );
      })}
      {content.map((i, index) => {
        return (
          <div
            key={index}
            className="hidden text-center mx-4 md:block col-span-11 row-span-2 md:row-span-1 md:col-span-3 text-black"
          >
            <RichText content={i.description} />
          </div>
        );
      })}
    </div>
  );
};

type DotProps = {
  diameter?: number | string;
  index: number;
  inViewport: boolean;
};

const delay = 200;
const Dot: React.FC<DotProps> = ({ diameter = 40, index, inViewport }) => {
  return (
    <div
      style={{
        width: diameter,
        height: diameter,
      }}
      className="rotate-180"
    >
      <svg viewBox="0 0 120 120" className=" drop-shadow-lg">
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
          className={clsx("transition-all  stroke-current ")}
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
  return (
    <div
      style={{
        transitionDuration: inViewport ? delay + "ms" : "0ms",
        transitionDelay: inViewport ? index * delay + "ms" : "0ms",
        transformOrigin: "left top",
        transitionTimingFunction: "linear",
      }}
      className={clsx(
        " bg-current w-1 md:w-full transition-transform  md:h-1 h-full  drop-shadow-lg",
        {
          "scale-y-110 md:scale-x-100 md:scale-y-100  ": inViewport,
          "scale-y-0  md:scale-x-0 md:scale-y-100 ": !inViewport,
        }
      )}
    />
  );
};
