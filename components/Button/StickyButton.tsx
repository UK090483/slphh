import Link from "@components/Link";
import Portal from "@components/Portal/Portal";
import Typo from "@components/Typography/Typography";
import useInViewport from "@hooks/useInViewport";

import clsx from "clsx";

import React, { useState, useRef } from "react";

interface IStickyButtonProps {
  href?: string | null;
  external?: boolean;
}

const StickyButton: React.FunctionComponent<IStickyButtonProps> = (props) => {
  const { href, external, children } = props;
  const ref = useRef(null);

  const show = useInViewport(ref, {
    callBack: (e) => {
      const y = e.boundingClientRect.top;
      return e.isIntersecting || y < 0;
    },
  });

  return (
    <>
      <span ref={ref}></span>
      <Portal>
        <div
          className={clsx(
            "fixed flex justify-center items-center h-10 transition-transform  md:h-40 pointer-events-none bottom-0 right-0 left-0 ",
            { "translate-y-0 z-30": show, "translate-y-full": !show }
          )}
        >
          <Dot
            tabIndex={show ? 0 : -1}
            href={href || "/"}
            external={external}
            className="hidden md:flex translate-x-4 translate-y-4 pointer-events-auto"
          >
            {children}
          </Dot>
          <Link
            tabIndex={show ? 0 : -1}
            className=" bg-primary bg-opacity-80 text-white text-center font-bold w-full h-full flex md:hidden justify-center items-center pointer-events-auto"
            href={href || "/"}
            external={external}
          >
            {children}
          </Link>
        </div>
      </Portal>
    </>
  );
};

export default StickyButton;

const Dot: React.FC<
  IStickyButtonProps & { className?: string; tabIndex: number }
> = ({ href, external, children, className, tabIndex }) => {
  return (
    <Link
      tabIndex={tabIndex}
      className={clsx(
        `absolute right-0 text-base-mobile md:text-base`,
        `w-28 h-28 md:w-40 md:h-40`,
        `bg-primary text-white font-bold  text-center`,
        `rounded-full drop-shadow-2xl   flex justify-center items-center z-20 ${className}`
      )}
      href={href || "/"}
      external={external}
    >
      {/* <Typo space={false} as={"span"} bold className="text-white text-center "> */}
      {children}
      {/* </Typo> */}
    </Link>
  );
};
