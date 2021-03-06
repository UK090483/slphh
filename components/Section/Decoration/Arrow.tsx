import clsx from "clsx";
import React from "react";
import { useSection } from "../SectionContext";

export const Arrow: React.FC<{ side: "r" | "l" }> = ({ side }) => {
  const { bg } = useSection();
  return (
    <div
      className={clsx(" w-full flex ", {
        " justify-end": side === "l",
      })}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 278 503"
        className={clsx(" w-[200px] min-w-[200px] h-fit  mx-auto", {
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
