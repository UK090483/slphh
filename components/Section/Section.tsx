import clsx from "clsx";
import React from "react";
import { SectionContextProvider } from "./SectionContext";

interface SectionProps {
  width?: "full" | "m" | "l" | "s" | "responsive";
  bg?: "white" | "grey" | "black" | "primary" | "secondary";
  className?: string;
  id?: string;
  noPadding?: boolean;
  as?: "section" | "div" | "ul";
  asInner?: "div" | "ul";
  style?: React.CSSProperties;
  "data-testid"?: string;
}

export const Section: React.FC<SectionProps> = (props) => {
  const {
    children,
    width = "m",
    className,
    id,
    bg = "white",
    noPadding = false,
    as: Component = "section",
    asInner: InnerComponent = "div",
    style,
  } = props;

  return (
    <SectionContextProvider bgColor={bg} width={width}>
      <Component
        data-testid={props["data-testid"] || "section"}
        id={id}
        className={clsx(`w-full `, {
          "bg-white": bg === "white",
          "bg-primary": bg === "primary",
          "bg-secondary": bg === "secondary",
          "bg-gray-300": bg === "grey",
        })}
      >
        <InnerComponent
          style={style}
          className={clsx("mx-auto", "container", className, {
            "md:max-w-screen-md ": width === "s",
            "lg:max-w-screen-lg ": width === "m",
            "xl:max-w-screen-xl ": width === "l",
            "px-3": width !== "full" && !noPadding,
          })}
        >
          {children}
        </InnerComponent>
      </Component>
    </SectionContextProvider>
  );
};

export default Section;
