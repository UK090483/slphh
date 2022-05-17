import clsx from "clsx";
import React from "react";
import { useSection } from "../SectionContext";

export const Circle: React.FC<{ side: "r" | "l" }> = ({ side }) => {
  const { bg } = useSection();
  return (
    <div
      className={clsx(" w-full flex ", {
        " justify-end": side === "l",
      })}
    >
      <div
        className={clsx(
          "fill-transparent border-[90px]  rounded-full w-96 h-96  min-w-[380px] min-h-[380px] mx-auto  hidden md:block ",
          {
            "border-primary ": bg !== "primary",
            "border-black ": bg === "primary",
          }
        )}
      />
      {/* <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 120 120"
        version="1.1"
        xmlns="http:www.w3.org/2000/svg"
        className={clsx(
          "fill-transparent w-96 min-w-[380px] mx-auto hidden md:block ",
          {
            "stroke-primary ": bg !== "primary",
            "stroke-black ": bg === "primary",
          }
        )}
      >
        <circle strokeWidth="20%" cx="60" cy="60" r="45" />
      </svg> */}
    </div>
  );
};
