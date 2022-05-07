import "../styles/globals.css";

import { Layout } from "@components/Layout/Layout";
import { NextComponentType, NextPageContext } from "next";
import Cookie from "@lib/Cookie/Cookie";
import PreviewIndicator from "@lib/SanityPageBuilder/lib/preview/PreviewIndicator";
import Seo from "@lib/SeoService/Seo";
import { PageResult } from "./[[...slug]]";
import { PageProps } from "@lib/SanityPageBuilder/types";
import usePreviewSubscription from "@lib/SanityPageBuilder/lib/preview/previewSubscription";
import { AppContextProvider } from "@components/AppContext";
// import { AnalyticsContextProvider } from "@lib/Analytics/AnalyticsContext";
// @ts-ignore

import AppConfig from "app.config.json";
import PageTransition from "@lib/PageTransition/PageTransition";
import { ParallaxProvider } from "react-scroll-parallax";
import { LazyMotion, domAnimation, AnimatePresence, m } from "framer-motion";
import { useRouter } from "next/router";

interface AppPropsWithStaticProps {
  pageProps: PageProps<PageResult>;
  Component: NextComponentType<NextPageContext, any, PageProps<PageResult>>;
}

const animation = {
  name: "Fade Back",
  variants: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  },
  transition: {
    duration: 0.7,
  },
};

function App({ Component, pageProps: _pageProps }: AppPropsWithStaticProps) {
  const { data: _data, query, preview } = _pageProps;

  const { data, error, loading } = usePreviewSubscription<PageResult | null>(
    query,
    {
      initialData: _data,
      enabled: preview,
    }
  );

  const aData = { ..._data, ...data };
  const pageProps = { ..._pageProps, data: aData } as PageProps<PageResult>;

  return (
    <>
      {/*     
 <AnalyticsContextProvider id="G-YVH817HM4Z"> */}
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter>
          <AppContextProvider
            data={pageProps.data}
            hostName={AppConfig.hostname}
          >
            <Layout>
              <m.div
                key={pageProps?.data?._id}
                className="page-wrap"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={animation.variants}
                transition={animation.transition}
              >
                <Component {...pageProps} key={pageProps?.data?._id} />
              </m.div>
            </Layout>

            <PreviewIndicator show={!!preview} />
            {/* <Cookie /> */}
            <Seo />
          </AppContextProvider>
        </AnimatePresence>
      </LazyMotion>

      {/* </AnalyticsContextProvider> */}
    </>
  );
}

export default App;
