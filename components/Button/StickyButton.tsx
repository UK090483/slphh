import Link from "@components/Link";
import Portal from "@components/Portal/Portal";
import Typo from "@components/Typography/Typography";

import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface IStickyButtonProps {
  href?: string | null;
  external?: boolean;
}

const StickyButton: React.FunctionComponent<IStickyButtonProps> = (props) => {
  const { href, external, children } = props;

  const [out, setOut] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 1, x: 10 }}
        whileInView={{ opacity: 1, x: 10 }}
        transition={{ delay: 0.2 }}
        className="h-0  bg-red absolute w-full left-0 z-10 "
        onViewportLeave={(e) => {
          const y = e?.boundingClientRect.y;

          y && y < 100 && setOut(true);
        }}
        onViewportEnter={() => {
          setOut(false);
        }}
      >
        <Dot
          href={href || "/"}
          external={external}
          className="-translate-y-full top-1/2"
        >
          {children}
        </Dot>
      </motion.div>

      <Portal>
        {out && (
          <div className="fixed  animate-slideUp   flex justify-center items-center h-10  md:h-40 pointer-events-none   bottom-0   right-0 left-0   z-30 ">
            <Dot
              href={href || "/"}
              external={external}
              className="hidden md:flex translate-x-4 translate-y-4 pointer-events-auto"
            >
              {children}
            </Dot>
            <Link
              className=" bg-primary bg-opacity-80 w-full h-full flex md:hidden justify-center items-center pointer-events-auto"
              href={href || "/"}
              external={external}
            >
              <Typo
                space={false}
                as={"span"}
                className="text-white text-center font-bold "
              >
                {children}
              </Typo>
            </Link>
          </div>
        )}
      </Portal>
    </>
  );
};

export default StickyButton;

const Dot: React.FC<IStickyButtonProps & { className?: string }> = ({
  href,
  external,
  children,
  className,
}) => {
  return (
    <Link
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
