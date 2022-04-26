import useInViewport from "@hooks/useInViewport";
import Image from "next/image";
import React from "react";

interface IMarqueProps {}

const images = [
  "bubble.png",
  "denmark.png",
  "german.png",
  "passport.png",
  "pig.png",
  "shakehands.png",
];

const text = [
  ["#PER", "SPEKTIVREGION"],
  ["#PERSPEK", "TIVREGION"],
  ["#PERSP", "EKTIVREGION"],
  ["#PERSPE", "KTIVREGION"],
  ["#PERSPEKTI", "VREGION"],
  ["#PERSPEKTIVR", "EGION"],
  ["#PERS", "PEKTIVREGION"],
  ["#PERSPEKTIVRE", "GION"],
];

const Marque: React.FunctionComponent<IMarqueProps> = (props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inViewport = useInViewport(ref);

  const getParts = React.useMemo(
    () =>
      text.map((text, index) => {
        return (
          <span key={index} className="mx-4">
            {text[0]}
            <span className="relative inline-block w-[1em] h-[1em] translate-y-[0.15em]">
              <Image
                role="presentation"
                src={`/images/${images[index % images.length]}`}
                alt=""
                layout="fill"
              />
            </span>

            {text[1]}
          </span>
        );
      }),
    []
  );

  return (
    <div
      aria-hidden={true}
      ref={ref}
      className="flex overflow-x-hidden border-t-2 border-b-2  border-black w-full  font-header font-bold text-xl md:text-5xl py-0 whitespace-nowrap"
    >
      <div
        className={`${
          inViewport ? "motion-reduce:animate-none  animate-marquee" : ""
        } `}
      >
        {getParts}
      </div>
      <div
        className={`${
          inViewport ? "motion-reduce:animate-none  animate-marquee" : ""
        } `}
      >
        {getParts}
      </div>
    </div>
  );
};

export default Marque;
