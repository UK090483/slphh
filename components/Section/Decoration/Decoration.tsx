import clsx from "clsx";
import React from "react";
import { useSection } from "../SectionContext";
import { Arrow } from "./Arrow";
import { Circle } from "./Circle";
import { Line } from "./Line";

export type DecorationList =
  | "line"
  | "line-animated"
  | "circle"
  | "circle-animated"
  | "arrow"
  | "arrow-animated";

export type DecorationSettings = {
  decorationL?: DecorationList;
  decorationR?: DecorationList;
};

const Decoration: React.FC = (props) => {
  const { decorationL, decorationR } = useSection();
  const hasDecoration = !!(decorationL || decorationR);

  if (hasDecoration) {
    return <DecoratorWrap />;
  }
  return null;
};

export default Decoration;

type DecoratorWrapProps = {
  className?: string;
};

const decorationMap: Record<
  DecorationList,
  (side: "r" | "l") => React.ReactElement
> = {
  arrow: (side) => <Arrow side={side} />,
  "arrow-animated": (side) => <Arrow side={side} />,
  circle: (side) => <Circle side={side} />,
  "circle-animated": (side) => <Circle side={side} />,
  line: () => <Line />,
  "line-animated": () => <Line />,
};

const DecoratorWrap: React.FC<DecoratorWrapProps> = (props) => {
  const { className = "" } = props;
  const { topSpace, bottomSpace, width, decorationL, decorationR, bg } =
    useSection();

  return (
    <div
      className={clsx(
        "absolute  flex inset-0  pointer-events-none  z-10 ",
        {
          "top-5 md:top-10": topSpace === "s",
          "top-9 md:top-20": topSpace === "m" || topSpace === null,
          "top-12 md:top-32": topSpace === "l",
          "top-16 md:top-44": topSpace === "xl",
          "top-24 md:top-60": topSpace === "xxl",
          "bottom-5 md:bottom-10": bottomSpace === "s",
          "bottom-9 md:bottom-20": bottomSpace === "m" || bottomSpace === null,
          "bottom-12 md:bottom-32": bottomSpace === "l",
          "bottom-16 md:bottom-44": bottomSpace === "xl",
          "bottom-24 md:bottom-60": bottomSpace === "xxl",
        },
        className
      )}
    >
      <div
        className={clsx("h-fit  w-full flex  overflow-hidden  ", {
          "justify-start":
            decorationL && ["line", "line-animated"].includes(decorationL),
          "justify-end":
            decorationL && !["line", "line-animated"].includes(decorationL),
          parallax: decorationL && decorationL.includes("animated"),
        })}
      >
        {decorationL && decorationMap[decorationL]("l")}
      </div>

      <div
        className={clsx("flex-shrink-0 w-full max-w-[calc(100vw-30px)]", {
          "md:max-w-screen-md ": width === "s",
          "lg:max-w-screen-lg ": width === "m",
          "xl:max-w-screen-xl ": width === "l",
        })}
      ></div>

      <div
        className={clsx(" h-fit w-full  overflow-hidden  ", {
          parallax: decorationR && decorationR.includes("animated"),
        })}
      >
        {decorationR && decorationMap[decorationR]("r")}
      </div>
    </div>
  );
};
