import clsx from "clsx";
import React from "react";
import { useSection } from "../SectionContext";

export const Line: React.FC<{
  className?: string;
}> = (props) => {
  const { bg } = useSection();
  return (
    <div
      className={clsx(" w-full h-20 max-w-[200px] ", {
        "bg-primary ": bg !== "primary",
        "bg-black ": bg === "primary",
      })}
    ></div>
  );
};
