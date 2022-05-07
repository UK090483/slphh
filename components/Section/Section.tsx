import clsx from "clsx";
import React from "react";
import Decoration, { DecorationSettings } from "./Decoration";
import { SectionContextProvider } from "./SectionContext";

export type SectionBGColor =
  | "white"
  | "grey"
  | "black"
  | "primary"
  | "secondary";
export type SectionSpace = "s" | "m" | "l" | "xl" | "xxl";

export interface SectionProps extends DecorationSettings {
  width?: "full" | "m" | "l" | "s" | "responsive";
  bg?: SectionBGColor;
  className?: string;
  id?: string;
  noPadding?: boolean;
  as?: "section" | "div" | "ul";
  asInner?: "div" | "ul";
  style?: React.CSSProperties;
  topSpace?: SectionSpace;
  bottomSpace?: SectionSpace;
  "data-testid"?: string;
}

export const Section: React.FC<SectionProps> = (props) => {
  const {
    topSpace,
    bottomSpace,
    children,
    width = "s",
    className,
    id,
    bg = "white",
    noPadding = false,
    as: Component = "section",
    asInner: InnerComponent = "div",
    style,
  } = props;

  return (
    <SectionContextProvider {...props}>
      <div />
      <Component
        data-testid={props["data-testid"] || "section"}
        id={id}
        className={clsx(`w-full relative`, {
          "bg-black text-white": bg === "black",
          "bg-white": bg === "white",
          "bg-primary text-white": bg === "primary",
          "bg-secondary": bg === "secondary",
          "bg-gray-300": bg === "grey",
        })}
      >
        <Decoration />
        <InnerComponent
          style={style}
          className={clsx(
            "mx-auto ",
            {
              "md:max-w-screen-md ": width === "s",
              "lg:max-w-screen-lg ": width === "m",
              "xl:max-w-screen-xl ": width === "l",
              "px-5": width !== "full" && !noPadding,
              "pt-5 md:pt-10": topSpace === "s",
              "pt-9 md:pt-20": topSpace === "m" || topSpace === null,
              "pt-12 md:pt-32": topSpace === "l",
              "pt-16 md:pt-44": topSpace === "xl",
              "pt-24 md:pt-60": topSpace === "xxl",
              "pb-5 md:pb-10": bottomSpace === "s",
              "pb-9 md:pb-20": bottomSpace === "m" || topSpace === null,
              "pb-16 md:pb-32": bottomSpace === "l",
              "pb-12 md:pb-44": bottomSpace === "xl",
              "pb-24 md:pb-60": bottomSpace === "xxl",
              "pb-0.5": !bottomSpace,
            },
            className
          )}
        >
          {children}
        </InnerComponent>
      </Component>
    </SectionContextProvider>
  );
};

export default Section;
