import clsx from "clsx";
import React from "react";
import { useSection } from "./SectionContext";

const Decoration: React.FunctionComponent = (props) => {
  const { decoration, topSpace, width } = useSection();

  if (decoration === "line") {
    return (
      <div
        className={clsx(
          "absolute  min-w-[15px] w-[calc(50%-320px)] md:w-[calc(50%-370px)]  max-w-[200px]  bg-primary h-20 top-0 left-0 z-10",
          {
            "lg:w-[calc(50%-390px)]": width === "s" || width === null,
            "lg:w-[calc(50%-520px)]": width === "m",
            "lg:w-[calc(50%-640px)]": width === "l",

            "top-5 md:top-10": topSpace === "s",
            "top-9 md:top-20": topSpace === "m" || topSpace === null,
            "top-12 md:top-32": topSpace === "l",
            "top-16 md:top-44": topSpace === "xl",
            "top-24 md:top-60": topSpace === "xxl",
          }
        )}
      />
    );
  }

  return null;
};

export default Decoration;
