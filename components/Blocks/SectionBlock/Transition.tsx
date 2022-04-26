import React from "react";
import clsx from "clsx";
import { AppColor } from "types";

type TransitionProps = {
  color?: AppColor;
  pos: "top" | "bottom";
};
const topD = "M1000 100H-2.14577e-05V1.66893e-06L1000 100Z";
const bottomD = "M0 0H1000V100L0 0Z";
const Transition: React.FC<TransitionProps> = (props) => {
  const { color = "primary", pos } = props;

  return (
    <div className="relative">
      <div
        className={clsx("absolute w-full", {
          "transform -translate-y-12": pos === "top",
        })}
      >
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          className={clsx(" fill-current h-12  w-full", {
            "text-white": color === "white",
            "text-primary": color === "primary",
            "text-secondary": color === "secondary",
            "text-gray-300": color === "grey",
          })}
        >
          <path d={pos === "top" ? topD : bottomD} />
        </svg>
      </div>
    </div>
  );
};

export default Transition;
