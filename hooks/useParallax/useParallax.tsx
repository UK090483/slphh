import { useEffect, useLayoutEffect } from "react";
import ParallaxController from "./classes/Controller";

const useParallax = () => {
  useEffect(() => {
    const controller = ParallaxController.init();

    return () => {
      controller.destroy();
    };
    // console.log("para init");

    // const elements = getElements();
    // console.log(elements);
    // const scrollHandler = getScrollHandler(() => updateElements(elements));
    // document.addEventListener("scroll", scrollHandler, false);
    // return () => {
    //   console.log("para by");
    //   document.removeEventListener("scroll", scrollHandler, false);
    // };
  });
};

export default useParallax;
