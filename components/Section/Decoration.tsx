import clsx from "clsx";
import React from "react";
import { useSection } from "./SectionContext";

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

const Circle: React.FC = () => {
  const { bg } = useSection();
  return (
    <div className="">
      <svg
        viewBox="0 0 120 120"
        version="1.1"
        xmlns="http:www.w3.org/2000/svg"
        className={clsx("fill-transparent w-96  hidden md:block", {
          "stroke-primary ": bg !== "primary",
          "stroke-black ": bg === "primary",
        })}
      >
        <circle strokeWidth="20%" cx="60" cy="60" r="45" />
      </svg>
    </div>
  );
};

const Arrow: React.FC = () => {
  const { bg } = useSection();
  return (
    <div className="w-[200px] shrink-0 ">
      <svg
        viewBox="0 0 278 503"
        className={clsx("w-full ", {
          "fill-primary ": bg !== "primary",
          "fill-black ": bg === "primary",
        })}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M109.622 503L277.5 251.508L109.622 0H0.5L140.316 206.169L171.848 251.487L140.316 296.831L0.5 503H109.622Z" />
      </svg>
    </div>
  );
};

type LineProps = {
  className?: string;
};
const Line: React.FC<LineProps> = (props) => {
  const { bg } = useSection();
  return (
    <div
      className={clsx(" w-full h-20 max-w-[200px]", {
        "bg-primary ": bg !== "primary",
        "bg-black ": bg === "primary",
      })}
    ></div>
  );
};

type DecoratorWrapProps = {
  className?: string;
};

const decorationMap: Record<DecorationList, React.ReactElement> = {
  arrow: <Arrow />,
  "arrow-animated": <Arrow />,
  circle: <Circle />,
  "circle-animated": <Circle />,
  line: <Line />,
  "line-animated": <Line />,
};

const DecoratorWrap: React.FC<DecoratorWrapProps> = (props) => {
  const { className = "" } = props;
  const { topSpace, bottomSpace, width, decorationL, decorationR, bg } =
    useSection();

  return (
    <div
      className={clsx(
        "absolute  flex inset-0   pointer-events-none  z-10",
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
        className={clsx(" h-fit w-full overflow-hidden flex ", {
          "justify-start":
            decorationL && ["line", "line-animated"].includes(decorationL),
          "justify-end":
            decorationL && !["line", "line-animated"].includes(decorationL),
          parallax: decorationL && decorationL.includes("animated"),
        })}
      >
        {decorationL && decorationMap[decorationL]}
      </div>

      <div
        className={clsx("flex-shrink-0 w-full max-w-[calc(100vw-30px)]", {
          "md:max-w-screen-md ": width === "s",
          "lg:max-w-screen-lg ": width === "m",
          "xl:max-w-screen-xl ": width === "l",
        })}
      ></div>

      <div
        className={clsx(" h-fit w-full overflow-hidden", {
          parallax: decorationR && decorationR.includes("animated"),
        })}
      >
        {decorationR && decorationMap[decorationR]}
      </div>
    </div>
  );
};
