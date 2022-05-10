import Portal from "@components/Portal/Portal";
import Typo from "@components/Typography/Typography";
import React, { useState } from "react";

interface INewsletterProps {
  html?: string;
}

const Newsletter: React.FunctionComponent<INewsletterProps> = (props) => {
  const { html } = props;

  const [clicked, setClicked] = useState(false);
  if (!html) return null;

  return (
    <>
      <button
        onClick={() => setClicked(true)}
        className="absolute  top-0 right-0 -translate-y-2/3 md:-translate-y-1/3 overflow-hidden z-10 "
      >
        <div className="w-40 h-40 bg-primary rounded-full translate-x-4  flex justify-center items-center ">
          <Typo space={false} bold className="text-white text-center ">
            Join our newsletter
          </Typo>
        </div>
      </button>

      {clicked && (
        <Portal>
          <div className=" fixed top-0 h-screen w-screen bg-primary bg-opacity-60 inset-0 z-50 flex justify-center items-center animate-fadeIn">
            <div
              onClick={() => setClicked(false)}
              className=" absolute top-6 right-6 border-2 border-white w-12 h-12 rounded-full flex justify-center items-center text-white "
            >
              X
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </Portal>
      )}
    </>
  );
};

export default Newsletter;
