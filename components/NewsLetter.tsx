import Portal from "@components/Portal/Portal";
import Typo from "@components/Typography/Typography";
import Script from "next/script";

import React, { useEffect, useLayoutEffect, useState } from "react";

interface INewsletterProps {
  html?: string;
  link?: string;
}

const Newsletter: React.FunctionComponent<INewsletterProps> = (props) => {
  const { html, link } = props;

  const [clicked, setClicked] = useState(false);

  // useEffect(() => {
  //   if (!clicked) return;
  //   if (window.grecaptcha) {
  //     renderCaptcha();
  //   }
  //   if (!window.grecaptcha) {
  //     window.onloadCapCallback = () => {
  //       renderCaptcha();
  //     };
  //   }
  // }, [clicked]);

  if (!link) return null;

  return (
    <>
      <button
        onClick={() => setClicked(true)}
        className="absolute  top-0 right-0 -translate-y-2/3 md:-translate-y-1/3 overflow-hidden z-10 "
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

      {/* {clicked && (
        <>
          <Portal>
            <div className="bla fixed top-0 h-screen w-screen  backdrop-blur-sm bg-opacity-60 inset-0 z-50 flex justify-center items-center animate-fadeIn">
              <div
                onClick={() => setClicked(false)}
                className=" absolute top-6 right-6 border-2 border-primary bg-primary w-12 h-12 rounded-full flex justify-center items-center text-white "
              >
                X
              </div>

              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </Portal>
          <Script
            src="https://www.google.com/recaptcha/api.js?onload=onloadCapCallback&render=explicit"
            async
            defer
          ></Script>
        </>
      )}
      <style global jsx>{`
        .cr_page {
          width: 100% !important;
        }
        .badge {
          display: none;
        }
      `}</style> */}
    </>
  );
};

export default Newsletter;

// async function waitUntilElementExists(
//   selector: string,
//   tryCount: number = 1
// ): Promise<Element | null> {
//   const el = document.querySelector(selector);
//   console.log("try" + tryCount);
//   if (el) {
//     return el;
//   }
//   if (tryCount > 10) {
//     return null;
//   }
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("");
//     }, tryCount * 10);
//   });
//   return await waitUntilElementExists(selector, tryCount + 1);
// }

// const renderCaptcha = async () => {
//   const item = await waitUntilElementExists("#recaptcha_v2_widget");
//   if (!item) {
//     console.error("no captcha item found");
//     return;
//   }
//   const captcha = window.grecaptcha;
//   if (!captcha) {
//     console.error("captcha not on window");
//     return;
//   }

//   try {
//     captcha.render(item);
//   } catch (error) {
//     console.log(error);
//   }
// };
