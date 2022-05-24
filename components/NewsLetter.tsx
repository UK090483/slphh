import Portal from "@components/Portal/Portal";
import Typo from "@components/Typography/Typography";
import { useScrollThreshold } from "@hooks/useScrollThreshold";
import React from "react";

interface INewsletterProps {
  html?: string;
  link?: string;
}

const Newsletter: React.FunctionComponent<INewsletterProps> = (props) => {
  const { html, link } = props;
  const scrolled = useScrollThreshold(50);
  if (!link) return null;

  return (
    <div>
      <style jsx>{`
        .parallax-active {
        }
      `}</style>
      <button
        data-parallax-speed={0.9}
        className="absolute hidden lg:block drop-shadow-2xl parallax top-0 right-0  overflow-hidden z-20 "
      >
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="w-40 h-40 bg-primary    rounded-full translate-x-4  flex justify-center items-center "
        >
          <Typo space={false} bold className="text-white text-center ">
            Join our newsletter
          </Typo>
        </a>
      </button>

      <Portal>
        {scrolled && (
          <div className="fixed animate-slideInLeft flex justify-center items-center   h-16 pointer-events-none    lg:hidden  bottom-0 right-0 left-0  overflow-hidden z-30 ">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className=" px-5 py-2 bg-primary drop-shadow-2xl border-2 border-white rounded-full pointer-events-auto   flex justify-center items-center "
            >
              <Typo space={false} bold className="text-white text-center ">
                Join our newsletter
              </Typo>
            </a>
          </div>
        )}
      </Portal>
    </div>
  );
};

export default Newsletter;
