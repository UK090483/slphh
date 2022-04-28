import Typo from "@components/Typography/Typography";
import useInViewport from "@hooks/useInViewport";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { PlugProps } from "../type";

import { TrustPlugQueryResult } from "./TrustPlugQuery";

interface IPhaseProps extends TrustPlugQueryResult {}

const Phase: React.FunctionComponent<PlugProps<IPhaseProps>> = (props) => {
  const { items } = props.node;

  return (
    <div className="flex flex-col md:flex-row justify-between">
      {items?.map((i, index) => (
        <Dot
          index={index}
          title={`Phase ${index + 1}`}
          description={i.description}
          key={i._key}
        />
      ))}
    </div>
  );
};

export default Phase;

type DotProps = {
  title?: string;
  description?: string;
  index: number;
};
const Dot: React.FC<DotProps> = (props) => {
  const { title, description, index } = props;
  const [show, setShow] = useState(false);

  const ref = useRef(null);

  const inViewport = useInViewport(ref);

  useEffect(() => {
    if (!inViewport) {
      setShow(false);
    }
    let timeOut: NodeJS.Timeout | null = null;
    if (index === 0) {
      timeOut = setTimeout(() => {
        setShow(true);
      }, 500);
      return () => {
        timeOut && clearTimeout(timeOut);
      };
    }

    const to = document.querySelector(`#dot-${index - 1}`);
    if (!to) return;

    timeOut = setTimeout(() => {
      setShow(true);
    }, 500 * (index + 1));

    return () => {
      timeOut && clearTimeout(timeOut);
    };
  }, [setShow, index, inViewport]);

  return (
    <div
      ref={ref}
      className="w-full flex  md:flex-col justify-center items-center"
    >
      <div
        id={`dot-${index}`}
        className={clsx(
          "relative w-12 h-12 border-[14px] transition-all border-primary rounded-full mb-8 flex-shrink-0",
          { "opacity-0 scale-0 ": !show, "opacity-100 scale-100": !show }
        )}
      >
        {index !== 0 && (
          <div
            id={`line-${index}`}
            className={clsx(
              "absolute top-1/2 -translate-x-full -translate-y-1/2 border-primary border-2 w-11 ",
              {
                "opacity-0": !show,
                "opacity-100": !show,
              }
            )}
          />
        )}
      </div>

      <div className="ml-12 md:ml-0 max-w-[200px]">
        <Typo variant="h3" className="text-primary md:text-center">
          {title}
        </Typo>
        <Typo className="md:text-center">{description} </Typo>
      </div>
    </div>
  );
};
