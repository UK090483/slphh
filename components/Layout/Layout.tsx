import React from "react";
import SkipToContent from "@lib/SkipToContent/SkipComponent";
import Footer from "./Footer";
import { Header } from "./Header";
import Nav from "./Navigation/Nav/Nav";

export const Layout: React.FC = (props) => {
  const { children } = props;

  return (
    <>
      <style global jsx>
        {`
          @font-face {
            font-family: "grotesk";
            src: url("/fonts/PPRightGrotesk-CompactBlack.woff2") format("woff2"),
              url("/fonts/PPRightGrotesk-CompactBlack.woff") format("woff");
            font-style: normal;
            font-weight: 800;
            font-display: swap;
          }
        `}
      </style>
      <SkipToContent containerId="main-content" />
      <Header>
        <Nav />
      </Header>
      <main id="main-content" className="min-h-screen mt-[128px] select-none ">
        {children}
      </main>
      <Footer />
    </>
  );
};
