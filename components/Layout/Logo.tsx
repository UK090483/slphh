/* eslint-disable @next/next/no-img-element */
import useIsReducedMotion from "@hooks/useIsReducedMotion";
import useOnLoad from "@hooks/useOnLoad";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const old = false;
const steps = 3;

const images = {
  euro: { src: "euro.png", alt: "" },
  windmills: { src: "windmils.png", alt: "" },
  pig: { src: "pig.png", alt: "" },
  denmark: { src: "denmark.png", alt: "" },
  german: { src: "german.png", alt: "" },
  shakeHands: { src: "shakehands.png", alt: "" },
  person_with_telescope_right: {
    src: "person_with_telescope_right.png",
    alt: "",
  },
};
export const Logo = () => {
  const isReducedMotion = useIsReducedMotion();
  const [seconds, setSeconds] = useState(-1);

  const loaded = useOnLoad();

  useEffect(() => {
    if (isReducedMotion || !loaded) return;

    let interval = setInterval(() => {
      setSeconds((seconds) => (seconds + 1) % steps);
    }, 3000);
    return () => clearInterval(interval);
  }, [isReducedMotion, setSeconds, loaded]);

  return old ? (
    <div>
      <img width={180} src="/Logo_Perspektivregion.gif" alt=" Kreisel Logo" />
    </div>
  ) : (
    <>
      <div
        role="banner"
        aria-hidden={true}
        className="whitespace-nowrap p-1 font-bold font-header text-[28px] leading-6"
      >
        <span className="block">
          P
          <LetterOrImage show={seconds === 0} image={images.euro}>
            E
          </LetterOrImage>
          <LetterOrImage
            show={seconds === 2}
            image={images.person_with_telescope_right}
          >
            RS
          </LetterOrImage>
          P
          <LetterOrImage show={seconds === 3} image={images.german}>
            E
          </LetterOrImage>
          <LetterOrImage show={seconds === 1} image={images.windmills}>
            K
          </LetterOrImage>
          TIV
        </span>
        <span>
          R
          <LetterOrImage show={seconds === 3} image={images.pig}>
            E
          </LetterOrImage>
          <LetterOrImage show={seconds === 1} image={images.denmark}>
            G
          </LetterOrImage>
          <LetterOrImage show={seconds === 2} image={images.shakeHands}>
            IO
          </LetterOrImage>
          N
        </span>
      </div>
    </>
  );
};

export default Logo;

const LetterOrImage: React.FC<{
  image?: { alt: string; src: string };
  show?: boolean;
}> = (props) => {
  const { children, show = true, image } = props;

  return (
    <>
      <span className="relative">
        <span
          className={`transition-opacity duration-[2s] ${
            show ? "motion-reduce:opacity-100 opacity-0" : "opacity-100"
          }`}
        >
          {children}
        </span>
        {show && (
          <Image
            role="presentation"
            className={`transition-opacity duration-[2s] ${
              show ? "motion-reduce:opacity-0 opacity-100" : "opacity-0"
            }`}
            src={`/images/${image?.src || "denmark.png"}`}
            sizes={"50px"}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        )}
      </span>
    </>
  );
};
