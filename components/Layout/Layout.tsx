import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import SkipToContent from "@lib/SkipToContent/SkipComponent";
import Footer from "./Footer";
import { Header } from "./Header";
import Nav from "./Navigation/Nav/Nav";
import { useAppContext } from "@components/AppContext/AppContext";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
export const Layout: React.FC = (props) => {
  const { children } = props;

  const firstRender = useRef(true);

  const [fadeIn, setFadeIn] = useState(false);

  const { data } = useAppContext();

  useIsomorphicLayoutEffect(() => {
    console.log("render");

    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setFadeIn(true);
    const timeOut = setTimeout(() => {
      setFadeIn(false);
    }, 700);
    return () => {
      clearTimeout(timeOut);
    };
  }, [data?._id]);

  return (
    <>
      <SkipToContent containerId="main-content" />
      <Header>
        <Nav />
      </Header>
      <main
        id="main-content"
        className={`min-h-screen mt-[99px] ${
          fadeIn ? "animate-pageFadeIn" : ""
        }`}
        //className={`min-h-screen mt-[128px] select-none`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
