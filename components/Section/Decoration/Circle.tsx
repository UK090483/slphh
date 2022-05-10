import clsx from "clsx";
import React from "react";
import { useSection } from "../SectionContext";

export const Circle: React.FC = () => {
  const { bg } = useSection();
  return (
    <div className="">
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 120 120"
        version="1.1"
        xmlns="http:www.w3.org/2000/svg"
        className={clsx("fill-transparent w-96  hidden md:block ", {
          "stroke-primary ": bg !== "primary",
          "stroke-black ": bg === "primary",
        })}
      >
        <circle strokeWidth="20%" cx="60" cy="60" r="45" />
      </svg>
    </div>
  );
};
